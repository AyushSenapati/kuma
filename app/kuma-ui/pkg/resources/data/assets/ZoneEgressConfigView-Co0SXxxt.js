import{_ as E}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-DZ0Kye1K.js";import{d as x,i as a,o as n,a as r,w as s,j as t,g as k,k as w,a1 as R,a9 as V,e as z}from"./index-Dh8cIC_Y.js";import"./CodeBlock-CYJBrrQC.js";import"./toYaml-DB9FPXFY.js";const $=x({__name:"ZoneEgressConfigView",setup(v){return(y,F)=>{const m=a("RouteTitle"),i=a("DataSource"),g=a("KCard"),_=a("AppView"),u=a("RouteView");return n(),r(u,{name:"zone-egress-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:s(({route:e,t:f})=>[t(_,null,{title:s(()=>[k("h2",null,[t(m,{title:f("zone-egresses.routes.item.navigation.zone-egress-config-view")},null,8,["title"])])]),default:s(()=>[w(),t(g,null,{default:s(()=>[t(i,{src:`/zone-egresses/${e.params.zoneEgress}`},{default:s(({data:l,error:d})=>[d!==void 0?(n(),r(R,{key:0,error:d},null,8,["error"])):l===void 0?(n(),r(V,{key:1})):(n(),r(E,{key:2,resource:l.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:s(({copy:o,copying:h})=>[h?(n(),r(i,{key:0,src:`/zone-egresses/${e.params.zoneEgress}/as/kubernetes?no-store`,onChange:c=>{o(p=>p(c))},onError:c=>{o((p,C)=>C(c))}},null,8,["src","onChange","onError"])):z("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{$ as default};
