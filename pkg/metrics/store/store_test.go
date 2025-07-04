package metrics_test

import (
	"context"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	core_mesh "github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	core_store "github.com/kumahq/kuma/pkg/core/resources/store"
	core_metrics "github.com/kumahq/kuma/pkg/metrics"
	metrics_store "github.com/kumahq/kuma/pkg/metrics/store"
	store_memory "github.com/kumahq/kuma/pkg/plugins/resources/memory"
	test_metrics "github.com/kumahq/kuma/pkg/test/metrics"
)

var _ = Describe("Metered Store", func() {
	var metrics core_metrics.Metrics
	var store core_store.ResourceStore

	BeforeEach(func() {
		m, err := core_metrics.NewMetrics("Zone")
		metrics = m
		Expect(err).ToNot(HaveOccurred())
		memoryStore := store_memory.NewStore()
		store, err = metrics_store.NewMeteredStore(memoryStore, metrics)
		Expect(err).ToNot(HaveOccurred())

		// setup test data
		err = memoryStore.Create(context.Background(), core_mesh.NewMeshResource(), core_store.CreateByKey(model.DefaultMesh, model.NoMesh))
		Expect(err).ToNot(HaveOccurred())
	})

	It("should public metrics of Get", func() {
		// when
		err := store.Get(context.Background(), core_mesh.NewMeshResource(), core_store.GetByKey(model.DefaultMesh, model.NoMesh))

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(test_metrics.FindMetric(metrics, "store", "operation", "get", "resource_type", "Mesh").GetHistogram().GetSampleCount()).To(Equal(uint64(1)))
	})

	It("should public metrics of List", func() {
		// when
		err := store.List(context.Background(), &core_mesh.MeshResourceList{}, core_store.ListByMesh(model.DefaultMesh))

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(test_metrics.FindMetric(metrics, "store", "operation", "list", "resource_type", "Mesh").GetHistogram().GetSampleCount()).To(Equal(uint64(1)))
	})

	It("should public metrics of Delete", func() {
		// when
		err := store.Delete(context.Background(), core_mesh.NewMeshResource(), core_store.DeleteByKey(model.DefaultMesh, model.NoMesh))

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(test_metrics.FindMetric(metrics, "store", "operation", "delete", "resource_type", "Mesh").GetHistogram().GetSampleCount()).To(Equal(uint64(1)))
	})

	It("should public metrics of Update", func() {
		// when
		mesh := core_mesh.NewMeshResource()
		err := store.Get(context.Background(), mesh, core_store.GetByKey(model.DefaultMesh, model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		// when
		err = store.Update(context.Background(), mesh)

		// then
		Expect(err).ToNot(HaveOccurred())
		Expect(test_metrics.FindMetric(metrics, "store", "operation", "get", "resource_type", "Mesh").GetHistogram().GetSampleCount()).To(Equal(uint64(1)))
		Expect(test_metrics.FindMetric(metrics, "store", "operation", "update", "resource_type", "Mesh").GetHistogram().GetSampleCount()).To(Equal(uint64(1)))
	})

	It("should public metrics of Update conflict", func() {
		// when
		mesh := core_mesh.NewMeshResource()
		anotherMesh := core_mesh.NewMeshResource()
		err := store.Get(context.Background(), mesh, core_store.GetByKey(model.DefaultMesh, model.NoMesh))
		Expect(err).ToNot(HaveOccurred())
		err = store.Get(context.Background(), anotherMesh, core_store.GetByKey(model.DefaultMesh, model.NoMesh))
		Expect(err).ToNot(HaveOccurred())

		// when
		err = store.Update(context.Background(), mesh)
		Expect(err).ToNot(HaveOccurred())
		err = store.Update(context.Background(), anotherMesh)

		// then
		Expect(err).To(MatchError(core_store.ErrorResourceConflict(core_mesh.MeshType, model.DefaultMesh, model.NoMesh)))
		Expect(test_metrics.FindMetric(metrics, "store_conflicts", "resource_type", "Mesh").GetCounter().GetValue()).To(Equal(1.0))
	})

	It("should public metrics of Create conflict", func() {
		// when
		err := store.Create(context.Background(), core_mesh.NewMeshResource(), core_store.CreateByKey(model.DefaultMesh, model.NoMesh))

		// then
		Expect(err).To(MatchError(core_store.ErrorResourceAlreadyExists(core_mesh.MeshType, model.DefaultMesh, model.NoMesh)))
		Expect(test_metrics.FindMetric(metrics, "store_conflicts", "resource_type", "Mesh").GetCounter().GetValue()).To(Equal(1.0))
	})
})
