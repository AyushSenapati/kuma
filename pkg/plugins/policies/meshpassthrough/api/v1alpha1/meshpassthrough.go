// +kubebuilder:object:generate=true
package v1alpha1

import (
	common_api "github.com/kumahq/kuma/api/common/v1alpha1"
)

// +kuma:policy:is_policy=true
type MeshPassthrough struct {
	// TargetRef is a reference to the resource the policy takes an effect on.
	// The resource could be either a real store object or virtual resource
	// defined in-place.
	TargetRef *common_api.TargetRef `json:"targetRef,omitempty"`
	// MeshPassthrough configuration.
	Default Conf `json:"default,omitempty"`
}

type Conf struct {
	// Defines the passthrough behavior. Possible values: `All`, `None`, `Matched`
	// When `All` or `None` `appendMatch` has no effect.
	// If not specified then the default value is "Matched".
	PassthroughMode *PassthroughMode `json:"passthroughMode,omitempty"`
	// AppendMatch is a list of destinations that should be allowed through the sidecar.
	AppendMatch *[]Match `json:"appendMatch,omitempty"`
}

// +kubebuilder:validation:Enum=All;Matched;None
type PassthroughMode string

// +kubebuilder:validation:Enum=Domain;IP;CIDR
type MatchType string

// +kubebuilder:validation:Enum=tcp;tls;grpc;http;http2;mysql
type ProtocolType string

const (
	TcpProtocol   ProtocolType = "tcp"
	TlsProtocol   ProtocolType = "tls"
	GrpcProtocol  ProtocolType = "grpc"
	HttpProtocol  ProtocolType = "http"
	Http2Protocol ProtocolType = "http2"
	MysqlProtocol ProtocolType = "mysql"
)

type Match struct {
	// Type of the match, one of `Domain`, `IP` or `CIDR` is available.
	Type MatchType `json:"type"`
	// Value for the specified Type.
	Value string `json:"value"`
	// Port defines the port to which a user makes a request.
	Port *uint32 `json:"port,omitempty"`
	// Protocol defines the communication protocol. Possible values: `tcp`, `tls`, `grpc`, `http`, `http2`, `mysql`.
	// +kubebuilder:default=tcp
	// +kubebuilder:validation:Optional
	Protocol ProtocolType `json:"protocol"`
}
