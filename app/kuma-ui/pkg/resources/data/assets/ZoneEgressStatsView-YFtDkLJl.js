import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-tRYalrx0.js";import{d as m,a as t,o as l,b as _,w as a,e as s,m as g,f as u}from"./index-SPSPfmv7.js";import"./index-FZCiQto1.js";import"./CodeBlock-Qqaga0NX.js";import"./ErrorBlock-Dpzurd_o.js";import"./TextWithCopyButton-lWuYw9Vs.js";import"./CopyButton-Kejus1zY.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang--WLxH0yR.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-ZeuYTsyP.js";const M=m({__name:"ZoneEgressStatsView",setup(f){return(h,x)=>{const n=t("RouteTitle"),r=t("KCard"),p=t("AppView"),i=t("RouteView");return l(),_(i,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[s(p,null,{title:a(()=>[g("h2",null,[s(n,{title:c("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"])])]),default:a(()=>[u(),s(r,null,{default:a(()=>[s(d,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{M as default};