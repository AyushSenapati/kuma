import{d as H,X as J,G as A,i as c,o,a as g,w as e,j as t,g as I,k as a,a1 as U,b as _,H as f,A as b,t as r,e as C,P as W,a2 as B,J as V,K as M,r as Q,_ as Y}from"./index-Dh8cIC_Y.js";import{d as ee}from"./kong-icons.es245-DFixHsMJ.js";import{e as ne}from"./kong-icons.es249-B6BLouOf.js";import{p as te}from"./kong-icons.es337-tGHf14_8.js";import{A as oe}from"./AppCollection-CXZmK54L.js";import{_ as se}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-B-mDvZVQ.js";import{S as ae}from"./StatusBadge-DYx4XEIr.js";import{S as le}from"./SummaryView-1_MRdDY6.js";const ie=["data-testid"],re=H({__name:"ZoneListView",setup(ce){const L=J(),x=A({}),K=A({}),R=k=>{const w="zoneIngress";x.value=k.items.reduce((d,m)=>{var z;const p=(z=m[w])==null?void 0:z.zone;if(typeof p<"u"){typeof d[p]>"u"&&(d[p]={online:[],offline:[]});const v=typeof m[`${w}Insight`].connectedSubscription<"u"?"online":"offline";d[p][v].push(m)}return d},{})},T=k=>{const w="zoneEgress";K.value=k.items.reduce((d,m)=>{var z;const p=(z=m[w])==null?void 0:z.zone;if(typeof p<"u"){typeof d[p]>"u"&&(d[p]={online:[],offline:[]});const v=typeof m[`${w}Insight`].connectedSubscription<"u"?"online":"offline";d[p][v].push(m)}return d},{})};async function Z(k){await L.deleteZone({name:k})}return(k,w)=>{const d=c("RouteTitle"),m=c("DataSource"),p=c("KButton"),z=c("XTeleportTemplate"),v=c("RouterLink"),E=c("XIcon"),X=c("KDropdownItem"),N=c("XDisclosure"),j=c("KDropdown"),q=c("KCard"),G=c("RouterView"),O=c("AppView"),P=c("RouteView");return o(),g(m,{src:"/me"},{default:e(({data:$})=>[$?(o(),g(P,{key:0,name:"zone-cp-list-view",params:{page:1,size:$.pageSize,zone:""}},{default:e(({route:l,t:i,can:h})=>[t(O,null,{title:e(()=>[I("h1",null,[t(d,{title:i("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[a(),t(m,{src:`/zone-cps?page=${l.params.page}&size=${l.params.size}`},{default:e(({data:u,error:D,refresh:F})=>[t(m,{src:"/zone-ingress-overviews?page=1&size=100",onChange:R}),a(),t(m,{src:"/zone-egress-overviews?page=1&size=100",onChange:T}),a(),t(q,null,{default:e(()=>[D!==void 0?(o(),g(U,{key:0,error:D},null,8,["error"])):(o(),_(f,{key:1},[h("create zones")&&((u==null?void 0:u.items)??[]).length>0?(o(),g(z,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[t(p,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[t(b(ee)),a(" "+r(i("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):C("",!0),a(),t(oe,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"state"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":l.params.page,"page-size":l.params.size,total:u==null?void 0:u.total,items:u==null?void 0:u.items,error:D,"empty-state-title":h("create zones")?i("zone-cps.empty_state.title"):void 0,"empty-state-message":h("create zones")?i("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":h("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":h("create zones")?i("zones.index.create"):void 0,"is-selected-row":n=>n.name===l.params.zone,onChange:l.update},W({name:e(({row:n})=>[t(v,{to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:l.params.page,size:l.params.size}}},{default:e(()=>[a(r(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[a(r(b(B)(n.zoneInsight,"version.kumaCp.version",i("common.collection.none"))),1)]),type:e(({row:n})=>[a(r(n.zoneInsight.environment.length>0?n.zoneInsight.environment:"kubernetes"),1)]),ingress:e(({row:n})=>[(o(!0),_(f,null,V([x.value[n.name]||{online:[],offline:[]}],s=>(o(),_(f,null,[a(r(s.online.length)+" / "+r(s.online.length+s.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(o(!0),_(f,null,V([K.value[n.name]||{online:[],offline:[]}],s=>(o(),_(f,null,[a(r(s.online.length)+" / "+r(s.online.length+s.offline.length),1)],64))),256))]),state:e(({row:n})=>[t(ae,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[(o(!0),_(f,null,V([{version_mismatch:!b(B)(n.zoneInsight,"version.kumaCp.kumaCpGlobalCompatible","true"),store_memory:n.zoneInsight.store==="memory"}],s=>(o(),_(f,{key:`${s.version_mismatch}-${s.store_memory}`},[Object.values(s).some(y=>y)?(o(),g(E,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[I("ul",null,[(o(!0),_(f,null,V(s,(y,S)=>(o(),_(f,{key:S},[y?(o(),_("li",{key:0,"data-testid":`warning-${S}`},r(i(`zone-cps.list.${S}`)),9,ie)):C("",!0)],64))),128))])]),_:2},1024)):(o(),_(f,{key:1},[a(r(i("common.collection.none")),1)],64))],64))),128))]),details:e(({row:n})=>[t(v,{class:"details-link","data-testid":"details-link",to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[a(r(i("common.collection.details_link"))+" ",1),t(b(ne),{decorative:"",size:b(M)},null,8,["size"])]),_:2},1032,["to"])]),_:2},[h("create zones")?{name:"actions",fn:e(({row:n})=>[t(j,{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[t(p,{class:"non-visual-button",appearance:"secondary",icon:""},{default:e(()=>[t(b(te))]),_:1})]),items:e(()=>[t(N,null,{default:e(({expanded:s,toggle:y})=>[t(X,{danger:"","data-testid":"dropdown-delete-item",onClick:y},{default:e(()=>[a(r(i("common.collection.actions.delete")),1)]),_:2},1032,["onClick"]),a(),t(z,{to:{name:"modal-layer"}},{default:e(()=>[s?(o(),g(se,{key:0,"confirmation-text":n.name,"delete-function":()=>Z(n.name),"is-visible":"","action-button-text":i("common.delete_modal.proceed_button"),title:i("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:y,onDelete:()=>{y(),F()}},{default:e(()=>[I("p",null,r(i("common.delete_modal.text1",{type:"Zone",name:n.name})),1),a(),I("p",null,r(i("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","delete-function","action-button-text","title","onCancel","onDelete"])):C("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),key:"0"}:void 0]),1032,["page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange"])],64))]),_:2},1024),a(),l.params.zone?(o(),g(G,{key:0},{default:e(n=>[t(le,{onClose:s=>l.replace({name:"zone-cp-list-view",query:{page:l.params.page,size:l.params.size}})},{default:e(()=>[(o(),g(Q(n.Component),{name:l.params.zone,"zone-overview":u==null?void 0:u.items.find(s=>s.name===l.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):C("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):C("",!0)]),_:1})}}}),ye=Y(re,[["__scopeId","data-v-7e3818df"]]);export{ye as default};
