package webhooks

import (
	"fmt"
	"slices"
	"strings"

	v1 "k8s.io/api/admission/v1"
	authenticationv1 "k8s.io/api/authentication/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"sigs.k8s.io/controller-runtime/pkg/webhook/admission"

	mesh_proto "github.com/kumahq/kuma/api/mesh/v1alpha1"
	"github.com/kumahq/kuma/pkg/config/core"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/version"
)

type ResourceAdmissionChecker struct {
	AllowedUsers                 []string
	Mode                         core.CpMode
	FederatedZone                bool
	DisableOriginLabelValidation bool
	SystemNamespace              string
	ZoneName                     string
}

func (c *ResourceAdmissionChecker) IsOperationAllowed(userInfo authenticationv1.UserInfo, r core_model.Resource, ns string) admission.Response {
	if c.isPrivilegedUser(c.AllowedUsers, userInfo) {
		return admission.Allowed("")
	}

	if ns != "" {
		// check only namespace-scoped resources
		if resp := c.isNamespaceAllowed(r, ns); !resp.Allowed {
			return resp
		}
	}

	if r.Descriptor().IsReadOnly(c.Mode == core.Global, c.FederatedZone) {
		return *forbiddenResponse(resourceTypeNotAllowedMsg(r.Descriptor().Name, c.Mode))
	}

	if errResponse := c.isResourceAllowed(r, ns); errResponse != nil {
		return *errResponse
	}

	return admission.Allowed("")
}

func (c *ResourceAdmissionChecker) isNamespaceAllowed(r core_model.Resource, ns string) admission.Response {
	switch c.Mode {
	case core.Global:
		if ns != c.SystemNamespace {
			return admission.Denied(fmt.Sprintf("on Global CP the policy can be created only in the system namespace:%s", c.SystemNamespace))
		}
	case core.Zone:
		if r.Descriptor().AllowedOnSystemNamespaceOnly && ns != c.SystemNamespace {
			return admission.Denied(fmt.Sprintf("resource type %v can be created only in the system namespace:%s", r.Descriptor().Name, c.SystemNamespace))
		}
	}
	return admission.Allowed("")
}

func (c *ResourceAdmissionChecker) isResourceAllowed(r core_model.Resource, ns string) *admission.Response {
	// we don't need to validate non fedarated zone and legacy policies
	if (c.Mode != core.Global && !c.FederatedZone) || !r.Descriptor().IsPluginOriginated {
		return nil
	}
	return c.validateLabels(r, ns)
}

func (c *ResourceAdmissionChecker) isPrivilegedUser(allowedUsers []string, userInfo authenticationv1.UserInfo) bool {
	// Assume this means one of the following:
	// - sync from another zone (rt.Config().Runtime.Kubernetes.ServiceAccountName)
	// - GC cleanup resources due to OwnerRef. ("system:serviceaccount:kube-system:generic-garbage-collector")
	// - storageversionmigratior
	// Not security; protecting user from self.
	return slices.Contains(allowedUsers, userInfo.Username)
}

func (c *ResourceAdmissionChecker) validateLabels(r core_model.Resource, ns string) *admission.Response {
	if r.Descriptor().IsPluginOriginated && r.Descriptor().IsPolicy && c.Mode == core.Zone {
		if _, err := core_model.ComputePolicyRole(r.GetSpec().(core_model.Policy), core_model.NewNamespace(ns, ns == c.SystemNamespace)); err != nil {
			return forbiddenResponse(err.Error())
		}
	}
	switch c.Mode {
	case core.Global:
		resourceOrigin, originPresent := core_model.ResourceOrigin(r.GetMeta())
		if !c.DisableOriginLabelValidation && originPresent && resourceOrigin == mesh_proto.ZoneResourceOrigin {
			return forbiddenResponse(labelsNotAllowedMsg(mesh_proto.ResourceOriginLabel, string(mesh_proto.GlobalResourceOrigin), string(resourceOrigin)))
		}
	// nolint:staticcheck
	case core.Zone, core.Standalone:
		resourceOrigin, originPresent := core_model.ResourceOrigin(r.GetMeta())
		if !c.DisableOriginLabelValidation && ns == c.SystemNamespace {
			if !originPresent || resourceOrigin != mesh_proto.ZoneResourceOrigin {
				return c.resourceIsNotAllowedResponse()
			}
		}
		if originPresent && resourceOrigin == mesh_proto.ZoneResourceOrigin {
			zoneTag, ok := r.GetMeta().GetLabels()[mesh_proto.ZoneTag]
			if ok && zoneTag != c.ZoneName {
				return forbiddenResponse(labelsNotAllowedMsg(mesh_proto.ZoneTag, c.ZoneName, zoneTag))
			}
		}
	}
	return nil
}

func (c *ResourceAdmissionChecker) resourceIsNotAllowedResponse() *admission.Response {
	return &admission.Response{
		AdmissionResponse: v1.AdmissionResponse{
			Allowed: false,
			Result: &metav1.Status{
				Status:  "Failure",
				Message: fmt.Sprintf("Operation not allowed. Applying policies on Zone CP on a system namespace requires '%s' label to be set to '%s'.", mesh_proto.ResourceOriginLabel, mesh_proto.ZoneResourceOrigin),
				Reason:  "Forbidden",
				Code:    403,
				Details: &metav1.StatusDetails{
					Causes: []metav1.StatusCause{
						{
							Type:    "FieldValueInvalid",
							Message: "cannot be empty",
							Field:   "metadata.labels[kuma.io/origin]",
						},
					},
				},
			},
		},
	}
}

func labelsNotAllowedMsg(label, correctValue, actual string) string {
	return fmt.Sprintf("Operation not allowed. '%s' label should have '%s' value, got '%s'", label, correctValue, actual)
}

func resourceTypeNotAllowedMsg(resType core_model.ResourceType, mode core.CpMode) string {
	otherCpMode := ""
	switch mode {
	case core.Zone:
		otherCpMode = core.Global
	case core.Global:
		otherCpMode = core.Zone
	}
	return fmt.Sprintf("Operation not allowed. %s resources like %s can be updated or deleted only "+
		"from the %s control plane and not from a %s control plane.", version.Product, resType, strings.ToUpper(otherCpMode), strings.ToUpper(mode))
}

func forbiddenResponse(msg string) *admission.Response {
	return &admission.Response{
		AdmissionResponse: v1.AdmissionResponse{
			Allowed: false,
			Result: &metav1.Status{
				Status:  "Failure",
				Message: msg,
				Reason:  "Forbidden",
				Code:    403,
			},
		},
	}
}
