import{d as $,r as t,o as l,q as f,w as o,b as p,e as y,p as q,a1 as z,m,c as _,M as u,N as w,n as E,t as C,I as F,_ as M}from"./index-DxWkv34s.js";const j={class:"policy-list-content"},G={class:"policy-count"},H={class:"policy-list"},J=$({__name:"PolicyTypeListView",setup(K){return(O,n)=>{const D=t("RouteTitle"),R=t("XAction"),P=t("DataCollection"),T=t("DataLoader"),x=t("XCard"),L=t("RouterView"),v=t("DataSource"),A=t("AppView"),B=t("RouteView");return l(),f(B,{name:"policy-list-view",params:{mesh:"",policyPath:"",policy:""}},{default:o(({uri:N,route:d,t:X})=>[p(D,{render:!1,title:X("policies.routes.types.title")},null,8,["title"]),n[2]||(n[2]=y()),p(A,null,{default:o(()=>[p(v,{src:`/mesh-insights/${d.params.mesh}`},{default:o(({data:e})=>[p(v,{src:N(q(z),"/policy-types",{})},{default:o(({data:i,error:b})=>[m("div",j,[p(x,{class:"policy-type-list","data-testid":"policy-type-list"},{default:o(()=>[p(T,{data:[i],errors:[b]},{default:o(()=>[(l(!0),_(u,null,w([typeof(e==null?void 0:e.policies)>"u"?i.policyTypes:i.policyTypes.filter(s=>{var c,a;return!s.policy.isTargetRef&&(((a=(c=e.policies)==null?void 0:c[s.name])==null?void 0:a.total)??0)>0})],s=>(l(),f(P,{key:s,predicate:typeof(e==null?void 0:e.policies)>"u"?void 0:c=>s.length>0||c.policy.isTargetRef,items:i.policyTypes},{default:o(({items:c})=>[(l(!0),_(u,null,w([c.find(a=>a.path===d.params.policyPath)],a=>(l(),_(u,{key:a},[(l(!0),_(u,null,w(c,(r,S)=>{var V,k;return l(),_("div",{key:r.path,class:E(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":a&&a.path===r.path}])},[p(R,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:d.params.mesh,policyPath:r.path}},mount:d.params.policyPath.length===0&&S===0?d.replace:void 0,"data-testid":`policy-type-link-${r.name}`},{default:o(()=>[y(C(r.name),1)]),_:2},1032,["to","mount","data-testid"]),n[0]||(n[0]=y()),m("div",G,C(((k=(V=e==null?void 0:e.policies)==null?void 0:V[r.name])==null?void 0:k.total)??0),1)],2)}),128))],64))),128))]),_:2},1032,["predicate","items"]))),128))]),_:2},1032,["data","errors"])]),_:2},1024),n[1]||(n[1]=y()),m("div",H,[p(L,null,{default:o(({Component:s})=>[(l(),f(F(s),{"policy-types":i==null?void 0:i.policyTypes},null,8,["policy-types"]))]),_:2},1024)])])]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),U=M(J,[["__scopeId","data-v-bb1efe27"]]);export{U as default};
