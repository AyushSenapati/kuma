import{d as b,y as A,h as o,o as w,b as T,j as e,w as t,z as n,k as s,t as i,x as X,g as l,C as x,D as B,a as k,e as D,F as P,E as S,G as R,H as $,J as K,A as L}from"./index-DDa3g5X3.js";import{A as V}from"./AppCollection-pwUkwDr1.js";import{d as N}from"./kong-icons.es245-CrXl3oxy.js";import{S as I}from"./StatusBadge-D31NB8fs.js";const E=b({__name:"MeshInsightsList",props:{items:{}},setup(z){const{t:c}=A(),m=z;return(p,f)=>{const d=o("XAction"),u=o("DataCollection");return w(),T("div",null,[e(u,{items:m.items??[void 0],type:"meshes"},{default:t(()=>{var h;return[e(V,{headers:[{label:n(c)("meshes.components.mesh-insights-list.name"),key:"name"},{label:n(c)("meshes.components.mesh-insights-list.services"),key:"services"},{label:n(c)("meshes.components.mesh-insights-list.dataplanes"),key:"dataplanes"}],items:m.items,total:(h=m.items)==null?void 0:h.length},{name:t(({row:a})=>[e(d,{to:{name:"mesh-detail-view",params:{mesh:a.name}}},{default:t(()=>[s(i(a.name),1)]),_:2},1032,["to"])]),services:t(({row:a})=>[s(i(a.services.internal),1)]),dataplanes:t(({row:a})=>[s(i(a.dataplanesByType.standard.online)+" / "+i(a.dataplanesByType.standard.total),1)]),_:1},8,["headers","items","total"])]}),_:1},8,["items"])])}}}),F=b({__name:"ZoneControlPlanesList",props:{items:{}},setup(z){const{t:c}=A(),m=X(),p=z;return(f,d)=>{const u=o("XAction"),h=o("DataCollection"),a=o("KButton"),y=o("XTeleportTemplate");return w(),T(P,null,[l("div",x(B(f.$attrs)),[e(h,{items:p.items??[void 0],type:n(m)("create zones")?"zone-cps-crud":"zone-cps"},{default:t(()=>{var g;return[e(V,{headers:[{label:n(c)("zone-cps.components.zone-control-planes-list.name"),key:"name"},{label:n(c)("zone-cps.components.zone-control-planes-list.status"),key:"status"}],items:p.items,total:(g=p.items)==null?void 0:g.length},{name:t(({row:_})=>[e(u,{to:{name:"zone-cp-detail-view",params:{zone:_.name}}},{default:t(()=>[s(i(_.name),1)]),_:2},1032,["to"])]),status:t(({row:_})=>[e(I,{status:_.state},null,8,["status"])]),_:1},8,["headers","items","total"])]}),_:1},8,["items","type"])],16),s(),n(m)("create zones")&&p.items?(w(),k(y,{key:0,to:{name:p.items.length>0?"control-plane-detail-view-zone-actions":"zone-cps-crud-x-empty-state-actions"}},{default:t(()=>[e(a,{appearance:"primary",to:{name:"zone-create-view"}},{default:t(()=>[e(n(N)),s(" "+i(n(c)("zones.index.create")),1)]),_:1})]),_:1},8,["to"])):D("",!0)],64)}}}),j={class:"stack"},G={class:"columns"},H={class:"card-header"},J={class:"card-title"},M={class:"card-actions"},Z={class:"card-header"},q={class:"card-title"},O=b({__name:"ControlPlaneDetailView",setup(z){const c=S();return(m,p)=>{const f=o("RouteTitle"),d=o("DataLoader"),u=o("XAction"),h=o("XTeleportSlot"),a=o("KCard"),y=o("AppView"),g=o("RouteView");return w(),k(g,{name:"home"},{default:t(({can:_,t:v,uri:C})=>[e(y,null,{title:t(()=>[l("h1",null,[e(f,{title:v("main-overview.routes.item.title")},null,8,["title"])])]),default:t(()=>[s(),l("div",j,[e(d,{src:C(n(R),"/global-insight",{})},{default:t(({data:r})=>[e(n(c),{"can-use-zones":_("use zones"),"global-insight":r},null,8,["can-use-zones","global-insight"])]),_:2},1032,["src"]),s(),l("div",G,[_("use zones")?(w(),k(a,{key:0},{default:t(()=>[e(d,{src:C(n($),"/zone-cps",{},{page:1,size:10})},{loadable:t(({data:r})=>[l("div",H,[l("div",J,[l("h2",null,i(v("main-overview.detail.zone_control_planes.title")),1),s(),e(u,{to:{name:"zone-cp-list-view"}},{default:t(()=>[s(i(v("main-overview.detail.health.view_all")),1)]),_:2},1024)]),s(),l("div",M,[e(h,{name:"control-plane-detail-view-zone-actions"})])]),s(),e(F,{"data-testid":"zone-control-planes-details",items:r==null?void 0:r.items},null,8,["items"])]),_:2},1032,["src"])]),_:2},1024)):D("",!0),s(),e(a,null,{default:t(()=>[e(d,{src:C(n(K),"/mesh-insights",{},{page:1,size:10})},{loadable:t(({data:r})=>[l("div",Z,[l("div",q,[l("h2",null,i(v("main-overview.detail.meshes.title")),1),s(),e(u,{to:{name:"mesh-list-view"}},{default:t(()=>[s(i(v("main-overview.detail.health.view_all")),1)]),_:2},1024)])]),s(),e(E,{"data-testid":"meshes-details",items:r==null?void 0:r.items},null,8,["items"])]),_:2},1032,["src"])]),_:2},1024)])])]),_:2},1024)]),_:1})}}}),ee=L(O,[["__scopeId","data-v-621ff37e"]]);export{ee as default};
