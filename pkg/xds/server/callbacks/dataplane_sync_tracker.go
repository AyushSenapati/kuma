package callbacks

import (
	"context"
	stdsync "sync"

	"github.com/kumahq/kuma/pkg/core"
	core_model "github.com/kumahq/kuma/pkg/core/resources/model"
	core_xds "github.com/kumahq/kuma/pkg/core/xds"
	"github.com/kumahq/kuma/pkg/xds/sync"
)

var dataplaneSyncTrackerLog = core.Log.WithName("xds").WithName("dataplane-sync-tracker")

func NewDataplaneSyncTracker(factoryFunc sync.DataplaneWatchdogFactory) DataplaneCallbacks {
	return &dataplaneSyncTracker{
		newDataplaneWatchdog: factoryFunc,
		watchdogs:            map[core_model.ResourceKey]*watchdogState{},
	}
}

var _ DataplaneCallbacks = &dataplaneSyncTracker{}

// dataplaneSyncTracker tracks XDS streams that are connected to the CP and fire up a watchdog.
// Watchdog should be run only once for given dataplane regardless of the number of streams.
// For ADS there is only one stream for DP.
//
// Node info can be (but does not have to be) carried only on the first XDS request. That's why need streamsAssociation map
// that indicates that the stream was already associated

type dataplaneSyncTracker struct {
	newDataplaneWatchdog sync.DataplaneWatchdogFactory

	stdsync.RWMutex // protects access to the fields below
	watchdogs       map[core_model.ResourceKey]*watchdogState
}
type watchdogState struct {
	cancelFunc context.CancelFunc
	stopped    chan struct{}
}

//nolint:contextcheck // it's not clear how the parent go-control-plane context lives
func (t *dataplaneSyncTracker) OnProxyConnected(streamID core_xds.StreamID, dpKey core_model.ResourceKey, _ context.Context, meta core_xds.DataplaneMetadata) error {
	// We use OnProxyConnected because there should be only one watchdog for given dataplane.
	t.Lock()
	defer t.Unlock()

	ctx, cancel := context.WithCancel(context.Background())
	state := &watchdogState{
		cancelFunc: cancel,
		stopped:    make(chan struct{}),
	}
	dataplaneSyncTrackerLog.V(1).Info("starting Watchdog for a Dataplane", "dpKey", dpKey, "streamID", streamID)
	stoppedDone := state.stopped
	go func() {
		defer close(stoppedDone)
		t.newDataplaneWatchdog.New(dpKey, &meta).Start(ctx)
	}()
	t.watchdogs[dpKey] = state
	return nil
}

func (t *dataplaneSyncTracker) OnProxyDisconnected(_ context.Context, streamID core_xds.StreamID, dpKey core_model.ResourceKey) {
	t.RLock()
	dpData := t.watchdogs[dpKey]
	t.RUnlock()

	if dpData != nil {
		dpData.cancelFunc()
		<-dpData.stopped
		dataplaneSyncTrackerLog.V(1).Info("watchdog for a Dataplane stopped", "dpKey", dpKey, "streamID", streamID)
		t.Lock()
		defer t.Unlock()
		delete(t.watchdogs, dpKey)
	}
}
