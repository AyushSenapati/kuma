import{_ as E}from"./PolicySummary.vue_vue_type_script_setup_true_lang-BO9Mx0B7.js";import{_ as k}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-Bdzp--wy.js";import{d as D,r as t,o as l,q as m,w as o,b as s,m as d,e as p,t as u,c as L,Q as X,L as b,s as _,_ as v}from"./index-TQmXQMPR.js";const F={key:0},A=D({__name:"DataPlanePolicySummaryView",setup(B){return(M,r)=>{const h=t("RouteTitle"),g=t("XAction"),C=t("XSelect"),x=t("XLayout"),y=t("DataSource"),S=t("DataLoader"),w=t("AppView"),V=t("RouteView");return l(),m(V,{name:"data-plane-policy-summary-view",params:{mesh:"",policyPath:"",policy:"",codeSearch:"",codeFilter:!1,codeRegExp:!1,format:"structured"}},{default:o(({route:e,t:c})=>[s(y,{src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}`},{default:o(({data:n,error:$})=>[s(w,null,{title:o(()=>[d("h2",null,[s(g,{to:{name:"policy-detail-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath,policy:e.params.policy}}},{default:o(()=>[s(h,{title:c("policies.routes.item.title",{name:e.params.policy})},null,8,["title"])]),_:2},1032,["to"])])]),default:o(()=>[r[2]||(r[2]=p()),s(S,{data:[n],errors:[$]},{default:o(()=>[n?(l(),m(E,{key:0,policy:n,format:e.params.format},{header:o(()=>[d("header",null,[s(x,{type:"separated",size:"max"},{default:o(()=>[d("h3",null,u(c("policies.routes.item.config")),1),r[0]||(r[0]=p()),n.spec?(l(),L("div",F,[s(C,{label:c("policies.routes.item.format"),selected:e.params.format,onChange:a=>{e.update({format:a})}},X({_:2},[b(["structured","yaml"],a=>({name:`${a}-option`,fn:o(()=>[p(u(c(`policies.routes.item.formats.${a}`)),1)])}))]),1032,["label","selected","onChange"])])):_("",!0)]),_:2},1024)])]),default:o(()=>[r[1]||(r[1]=p()),s(k,{resource:n.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:P})=>[P?(l(),m(y,{key:0,src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/as/kubernetes?no-store`,onChange:i=>{a(f=>f(i))},onError:i=>{a((f,R)=>R(i))}},null,8,["src","onChange","onError"])):_("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["policy","format"])):_("",!0)]),_:2},1032,["data","errors"])]),_:2},1024)]),_:2},1032,["src"])]),_:1})}}}),T=v(A,[["__scopeId","data-v-f160a30f"]]);export{T as default};
