import{d as g,P as w,r as e,o as s,g as n,w as o,h as t,m as k,l as z,E as V,t as h,i as v}from"./index-213666ad.js";import{_ as C}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-bc5fdfc8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-9634fc68.js";import"./toYaml-4e00099e.js";const K=g({__name:"ConfigView",setup(x){const i=w();return(y,A)=>{const l=e("RouteTitle"),m=e("DataSource"),u=e("KCard"),_=e("AppView"),p=e("RouteView");return s(),n(p,{name:"zone-ingress-config-view",params:{zoneIngress:""}},{default:o(({route:r,t:d})=>[t(_,null,{title:o(()=>[k("h2",null,[t(l,{title:d("zone-ingresses.routes.item.navigation.zone-ingress-config-view"),render:!0},null,8,["title"])])]),default:o(()=>[z(),t(u,{class:"mt-4"},{body:o(()=>[t(m,{src:`/zone-ingresses/${r.params.zoneIngress}`},{default:o(({data:a,error:c})=>[c!==void 0?(s(),n(V,{key:0,error:c},null,8,["error"])):a===void 0?(s(),n(h,{key:1})):(s(),n(C,{key:2,id:"code-block-zone-ingress",resource:a,"resource-fetcher":f=>v(i).getZoneIngress({name:r.params.zoneIngress},f),"is-searchable":""},null,8,["resource","resource-fetcher"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{K as default};
