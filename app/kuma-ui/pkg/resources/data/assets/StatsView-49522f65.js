import{E as l}from"./EnvoyData-500188cc.js";import{g as m}from"./dataplane-0a086c06.js";import{d as _,r as e,o as d,g,w as t,h as s,m as f,l as w,i as z}from"./index-213666ad.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-9634fc68.js";const x=_({__name:"StatsView",props:{data:{}},setup(o){const n=o;return(V,h)=>{const a=e("RouteTitle"),r=e("KCard"),i=e("AppView"),p=e("RouteView");return d(),g(p,{name:"zone-ingress-stats-view",params:{zoneIngress:""}},{default:t(({route:c,t:u})=>[s(i,null,{title:t(()=>[f("h2",null,[s(a,{title:u("zone-ingresses.routes.item.navigation.zone-ingress-stats-view"),render:!0},null,8,["title"])])]),default:t(()=>[w(),s(r,null,{body:t(()=>[s(l,{status:z(m)(n.data.zoneIngressInsight),resource:"Zone",src:`/zone-ingresses/${c.params.zoneIngress}/data-path/stats`,"query-key":"envoy-data-stats-zone-ingress"},null,8,["status","src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{x as default};
