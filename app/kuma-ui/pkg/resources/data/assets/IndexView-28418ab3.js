import{d as G,P,v as D,r as v,o as n,g as u,w as e,h as l,a7 as j,m as x,l as a,i,Y as F,E as J,Z as M,D as c,U as W,j as g,F as V,a9 as q,G as H,k as h,s as X,K as T,$ as Y,W as E,aH as Q,aI as ee,a1 as B,aJ as te,q as oe}from"./index-213666ad.js";import{_ as ne}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-cf7c6f24.js";const ae=["data-testid"],se=G({__name:"IndexView",setup(le){const $=P(),I=D(!1),N=D(!1),k=D("");function A(m){return m.map(z=>{var r;const{name:b}=z,S={name:"zone-cp-detail-view",params:{zone:b}};let y="",w="kubernetes",C=!1,f=!0;(((r=z.zoneInsight)==null?void 0:r.subscriptions)??[]).forEach(s=>{if(s.version&&s.version.kumaCp){y=s.version.kumaCp.version;const{kumaCpGlobalCompatible:p=!0}=s.version.kumaCp;f=p}if(s.config){const p=JSON.parse(s.config);w=p.environment,C=p.store.type==="memory"}});const t=te(z);return{detailViewRoute:S,name:b,status:t,zoneCpVersion:y,type:w,warnings:{version_mismatch:!f,store_memory:C}}})}async function L(){await $.deleteZone({name:k.value})}function R(){I.value=!I.value}function K(m){R(),k.value=m}function O(m){N.value=(m==null?void 0:m.items.length)>0}return(m,z)=>{const b=v("RouteTitle"),S=v("RouterLink"),y=v("DataSource"),w=v("AppView"),C=v("RouteView");return n(),u(y,{src:"/me"},{default:e(({data:f})=>[f?(n(),u(C,{key:0,name:"zone-cp-list-view",params:{page:1,size:f.pageSize}},{default:e(({route:d,t,can:r})=>[l(w,null,j({title:e(()=>[x("h1",null,[l(b,{title:t("zone-cps.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[a(),a(),l(y,{src:`/zone-cps?page=${d.params.page}&size=${d.params.size}`,onChange:O},{default:e(({data:s,error:p,refresh:U})=>[l(i(F),null,{body:e(()=>[p!==void 0?(n(),u(J,{key:0,error:p},null,8,["error"])):(n(),u(M,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(d.params.page),"page-size":parseInt(d.params.size),total:s==null?void 0:s.total,items:s?A(s.items):void 0,error:p,"empty-state-title":r("create zones")?t("zone-cps.empty_state.title"):void 0,"empty-state-message":r("create zones")?t("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":r("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":r("create zones")?t("zones.index.create"):void 0,onChange:d.update},{name:e(({row:o,rowValue:_})=>[l(S,{to:o.detailViewRoute,"data-testid":"detail-view-link"},{default:e(()=>[a(c(_),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({rowValue:o})=>[a(c(o||t("common.collection.none")),1)]),type:e(({rowValue:o})=>[a(c(o||t("common.collection.none")),1)]),status:e(({rowValue:o})=>[o?(n(),u(W,{key:0,status:o},null,8,["status"])):(n(),g(V,{key:1},[a(c(t("common.collection.none")),1)],64))]),warnings:e(({row:o})=>[Object.values(o.warnings).some(_=>_)?(n(),u(i(q),{key:0},{content:e(()=>[x("ul",null,[(n(!0),g(V,null,H(o.warnings,(_,Z)=>(n(),g(V,{key:Z},[_?(n(),g("li",{key:0,"data-testid":`warning-${Z}`},c(t(`zone-cps.list.${Z}`)),9,ae)):h("",!0)],64))),128))])]),default:e(()=>[a(),l(X,{"data-testid":"warning",class:"mr-1",size:i(T),"hide-title":""},null,8,["size"])]),_:2},1024)):(n(),g(V,{key:1},[a(c(t("common.collection.none")),1)],64))]),actions:e(({row:o})=>[l(i(Y),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[l(i(E),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[l(i(Q),{color:i(ee),icon:"more",size:i(T)},null,8,["color","size"])]),_:1})]),items:e(()=>[l(i(B),{item:{to:o.detailViewRoute,label:t("common.collection.actions.view")}},null,8,["item"]),a(),r("create zones")?(n(),u(i(B),{key:0,"has-divider":"","is-dangerous":"","data-testid":"dropdown-delete-item",onClick:_=>K(o.name)},{default:e(()=>[a(c(t("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):h("",!0)]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024),a(),I.value?(n(),u(ne,{key:0,"confirmation-text":k.value,"delete-function":L,"is-visible":"","action-button-text":t("common.delete_modal.proceed_button"),title:t("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:R,onDelete:()=>{R(),U()}},{"body-content":e(()=>[x("p",null,c(t("common.delete_modal.text1",{type:"Zone",name:k.value})),1),a(),x("p",null,c(t("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","action-button-text","title","onDelete"])):h("",!0)]),_:2},1032,["src"])]),_:2},[r("create zones")&&N.value?{name:"actions",fn:e(()=>[l(i(E),{appearance:"primary",icon:"plus",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[a(c(t("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["params"])):h("",!0)]),_:1})}}});const re=oe(se,[["__scopeId","data-v-570e5473"]]);export{re as default};
