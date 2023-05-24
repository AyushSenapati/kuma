import{d as T,u as D,r as o,v as x,a5 as A,S as Z,o as y,j as E,i as h,g as w,e as S,N as b,h as V,f as B}from"./index-389a0ddf.js";import{_ as I}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-56dbd8e1.js";import{D as L}from"./DataOverview-ce883bca.js";import{u as O}from"./index-8c223fc5.js";import{Q as d}from"./QueryParameter-70743f73.js";import"./AccordionList-30f2c27b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-2729f1cb.js";import"./EnvoyData-3bb4e268.js";import"./kongponents.es-0486183b.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-e0fdc5bd.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-9f43de26.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-49465137.js";import"./ErrorBlock-d37185d2.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-1e9eaa23.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-5ea60df9.js";import"./TabsWidget-f4c4d08c.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-704b1dd4.js";import"./StatusBadge-a682bfab.js";const P={class:"zoneegresses"},q={class:"kcard-stack"},C={class:"kcard-border"},F={key:0,class:"kcard-border"},le=T({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,p=O(),k={title:"No Data",message:"There are no Zone Egresses present."},v=D(),i=o(!0),u=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),f=o(null),g=o(l.offset);x(()=>v.params.mesh,function(){v.name==="zone-egress-list-view"&&c(0)}),A(function(){c(l.offset)});async function c(e){var a;g.value=e,d.set("offset",e>0?e:null),i.value=!0,u.value=null;const t=b;try{const{items:s,next:m}=await p.getAllZoneEgressOverviews({size:t,offset:e});f.value=m,n.value.data=N(s??[]),await _({name:l.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?u.value=s:console.error(s)}finally{i.value=!1}}function N(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},m=Z(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:m}})}async function _({name:e}){if(e===void 0){r.value=null,d.set("zoneEgress",null);return}try{r.value=await p.getZoneEgressOverview({name:e}),d.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return y(),E("div",P,[h("div",q,[h("div",C,[w(L,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":S(b),"is-loading":i.value,error:u.value,"empty-state":k,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:f.value,"page-offset":g.value,onTableAction:_,onLoadData:c},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),V(),r.value!==null?(y(),E("div",F,[w(I,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):B("",!0)])])}}});export{le as default};
