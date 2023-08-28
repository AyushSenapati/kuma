import{g as $,w as E,p as L,q as x,K as N,f as I,A as B,o as T,E as V,s as A,t as S,_ as O}from"./RouteView.vue_vue_type_script_setup_true_lang-fbd72064.js";import{d as w,u as K,r as U,o as c,e as f,h as o,w as t,F as R,s as q,n as F,b as e,g as s,t as l,q as p,G as C,a as m,Y as b,f as v,V as G,D as Y,v as H,H as X}from"./index-73ac0e73.js";import{P as Z}from"./PolicyTypeTag-6b0dc9d9.js";import{n as j}from"./notEmpty-7f452b20.js";import{_ as J}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0d00e209.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-367da69d.js";const M={class:"policy-list-content"},Q={class:"policy-count"},W={class:"policy-list"},D={class:"stack"},ee={class:"description"},te={class:"description-content"},ae={class:"description-actions"},se={class:"visually-hidden"},oe={key:0},ie=w({__name:"PolicyList",props:{pageNumber:{},pageSize:{},policyTypes:{},currentPolicyType:{},policyCollection:{},policyError:{},meshInsight:{}},emits:["change"],setup(P,{emit:d}){const a=P,{t:n}=$(),g=K();return(u,y)=>{const h=U("RouterLink");return c(),f("div",M,[o(e(C),{class:"policy-type-list","data-testid":"policy-type-list"},{body:t(()=>[(c(!0),f(R,null,q(a.policyTypes,(r,_)=>{var i,k,z;return c(),f("div",{key:_,class:F(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":r.path===a.currentPolicyType.path}])},[o(h,{class:"policy-type-link",to:{name:"policies-list-view",params:{mesh:e(g).params.mesh,policyPath:r.path}},"data-testid":`policy-type-link-${r.name}`},{default:t(()=>[s(l(r.name),1)]),_:2},1032,["to","data-testid"]),s(),p("div",Q,l(((z=(k=(i=a.meshInsight)==null?void 0:i.policies)==null?void 0:k[r.name])==null?void 0:z.total)??0),1)],2)}),128))]),_:1}),s(),p("div",W,[p("div",D,[o(e(C),null,{body:t(()=>[p("div",ee,[p("div",te,[p("h3",null,[o(Z,{"policy-type":a.currentPolicyType.name},{default:t(()=>[s(l(e(n)("policies.collection.title",{name:a.currentPolicyType.name})),1)]),_:1},8,["policy-type"])]),s(),p("p",null,l(e(n)("policies.collection.description")),1)]),s(),p("div",ae,[a.currentPolicyType.isExperimental?(c(),m(e(b),{key:0,appearance:"warning"},{default:t(()=>[s(l(e(n)("policies.collection.beta")),1)]),_:1})):v("",!0),s(),a.currentPolicyType.isInbound?(c(),m(e(b),{key:1,appearance:"neutral"},{default:t(()=>[s(l(e(n)("policies.collection.inbound")),1)]),_:1})):v("",!0),s(),a.currentPolicyType.isOutbound?(c(),m(e(b),{key:2,appearance:"neutral"},{default:t(()=>[s(l(e(n)("policies.collection.outbound")),1)]),_:1})):v("",!0),s(),o(E,{href:e(n)("policies.href.docs",{name:a.currentPolicyType.name}),"data-testid":"policy-documentation-link"},{default:t(()=>[p("span",se,l(e(n)("common.documentation")),1)]),_:1},8,["href"])])])]),_:1}),s(),o(e(C),null,{body:t(()=>{var r,_;return[o(L,{class:"policy-collection","data-testid":"policy-collection","empty-state-message":e(n)("common.emptyState.message",{type:`${a.currentPolicyType.name} policies`}),"empty-state-cta-to":e(n)("policies.href.docs",{name:a.currentPolicyType.name}),"empty-state-cta-text":e(n)("common.documentation"),headers:[{label:"Name",key:"name"},a.currentPolicyType.isTargetRefBased?{label:"Target ref",key:"targetRef"}:void 0,{label:"Actions",key:"actions",hideLabel:!0}].filter(e(j)),"page-number":a.pageNumber,"page-size":a.pageSize,total:(r=a.policyCollection)==null?void 0:r.total,items:(_=a.policyCollection)==null?void 0:_.items,error:a.policyError,onChange:y[0]||(y[0]=i=>d("change",i))},{name:t(({rowValue:i})=>[o(h,{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:a.currentPolicyType.path,policy:i}}},{default:t(()=>[s(l(i),1)]),_:2},1032,["to"])]),targetRef:t(({row:i})=>[a.currentPolicyType.isTargetRefBased?(c(),m(e(b),{key:0,appearance:"neutral"},{default:t(()=>[s(l(i.spec.targetRef.kind),1),i.spec.targetRef.name?(c(),f("span",oe,[s(":"),p("b",null,l(i.spec.targetRef.name),1)])):v("",!0)]),_:2},1024)):(c(),f(R,{key:1},[s(l(e(n)("common.detail.none")),1)],64))]),actions:t(({row:i})=>[o(e(G),{class:"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[o(e(Y),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[o(e(H),{color:e(x),icon:"more",size:e(N)},null,8,["color","size"])]),_:1})]),items:t(()=>[o(e(X),{item:{to:{name:"policy-detail-view",params:{mesh:e(g).params.mesh,policyPath:a.currentPolicyType.path,policy:i.name}},label:e(n)("common.collection.actions.view")}},null,8,["item"])]),_:2},1024)]),_:1},8,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error"])]}),_:1})])])])}}});const ce=I(ie,[["__scopeId","data-v-fcbfa7aa"]]),de=w({__name:"PolicyListView",props:{page:{},size:{}},setup(P){const d=P,{t:a}=$();return(n,g)=>(c(),m(O,{name:"policies-list-view"},{default:t(({route:u})=>[o(B,null,{title:t(()=>[p("h2",null,[o(J,{title:e(a)("policies.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[s(),o(T,{src:"/*/policy-types"},{default:t(({data:y,error:h})=>[h?(c(),m(V,{key:0,error:h},null,8,["error"])):y===void 0?(c(),m(A,{key:1})):y.policies.length===0?(c(),m(S,{key:2})):(c(),m(T,{key:3,src:`/meshes/${u.params.mesh}/policy-path/${u.params.policyPath}?page=${d.page}&size=${d.size}`},{default:t(({data:r,error:_})=>[o(T,{src:`/mesh-insights/${u.params.mesh}`},{default:t(({data:i})=>[o(ce,{"page-number":d.page,"page-size":d.size,"current-policy-type":y.policies.find(k=>k.path===u.params.policyPath)??y.policies[0],"policy-types":y.policies,"mesh-insight":i,"policy-collection":r,"policy-error":_,onChange:u.update},null,8,["page-number","page-size","current-policy-type","policy-types","mesh-insight","policy-collection","policy-error","onChange"])]),_:2},1032,["src"])]),_:2},1032,["src"]))]),_:2},1024)]),_:2},1024)]),_:1}))}});export{de as default};
