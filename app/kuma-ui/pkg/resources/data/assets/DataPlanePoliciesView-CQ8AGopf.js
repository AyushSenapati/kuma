import{A as G,a as T}from"./AccordionList-B1dMR4wG.js";import{d as j,e as g,o as e,c as a,k as r,b as s,H as i,J as y,t as d,a as l,w as t,p as S,m,Q as J,L as Q,M as Y,q as z,l as X,a2 as M,j as U,A as W,n as Z,a3 as E,a4 as ee,E as te}from"./index-DS1MbHFW.js";import{S as ae}from"./SummaryView-DMFcs5u7.js";import{P as q}from"./PolicyTypeTag-C4Aspmxb.js";import{T as F}from"./TagList-B9J5tqq0.js";import{R as se}from"./RuleMatchers-C11YU2jq.js";const I=v=>(Q("data-v-c6fda729"),v=v(),Y(),v),ne={class:"policies-list"},le={class:"mesh-gateway-policy-list"},oe=I(()=>r("h3",{class:"mb-2"},`
        Gateway policies
      `,-1)),ie={key:0},ce=I(()=>r("h3",{class:"mt-6 mb-2"},`
        Listeners
      `,-1)),re=I(()=>r("b",null,"Host",-1)),de=I(()=>r("h4",{class:"mt-2 mb-2"},`
                Routes
              `,-1)),pe={class:"dataplane-policy-header"},ue=I(()=>r("b",null,"Route",-1)),me=I(()=>r("b",null,"Service",-1)),_e={key:0,class:"badge-list"},he={class:"mt-1"},ye=j({__name:"BuiltinGatewayPolicies",props:{gatewayDataplane:{},types:{}},setup(v){const $=v;return(P,L)=>{const R=g("XAction"),w=g("XBadge");return e(),a("div",ne,[r("div",le,[oe,s(),P.gatewayDataplane.routePolicies.length>0?(e(),a("ul",ie,[(e(!0),a(i,null,y(P.gatewayDataplane.routePolicies,(o,p)=>{var c;return e(),a("li",{key:p},[r("span",null,d(o.type),1),s(`:

          `),l(R,{to:{name:"policy-detail-view",params:{mesh:o.mesh,policyPath:((c=$.types[o.type])==null?void 0:c.path)??"",policy:o.name}}},{default:t(()=>[s(d(o.name),1)]),_:2},1032,["to"])])}),128))])):S("",!0),s(),ce,s(),r("div",null,[(e(!0),a(i,null,y(P.gatewayDataplane.listenerEntries,(o,p)=>(e(),a("div",{key:p},[r("div",null,[r("div",null,[re,s(": "+d(o.hostName)+":"+d(o.port)+" ("+d(o.protocol)+`)
            `,1)]),s(),o.routeEntries.length>0?(e(),a(i,{key:0},[de,s(),l(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y(o.routeEntries,(c,k)=>(e(),m(G,{key:k},J({"accordion-header":t(()=>{var n;return[r("div",pe,[r("div",null,[r("div",null,[ue,s(": "),l(R,{to:{name:"policy-detail-view",params:{mesh:c.route.mesh,policyPath:((n=$.types[c.route.type])==null?void 0:n.path)??"",policy:c.route.name}}},{default:t(()=>[s(d(c.route.name),1)]),_:2},1032,["to"])]),s(),r("div",null,[me,s(": "+d(c.service),1)])]),s(),c.origins.length>0?(e(),a("div",_e,[(e(!0),a(i,null,y(c.origins,(_,C)=>(e(),m(w,{key:`${p}-${C}`},{default:t(()=>[s(d(_.type),1)]),_:2},1024))),128))])):S("",!0)])]}),_:2},[c.origins.length>0?{name:"accordion-content",fn:t(()=>[r("ul",he,[(e(!0),a(i,null,y(c.origins,(n,_)=>{var C;return e(),a("li",{key:`${p}-${_}`},[s(d(n.type)+`:

                        `,1),l(R,{to:{name:"policy-detail-view",params:{mesh:n.mesh,policyPath:((C=$.types[n.type])==null?void 0:C.path)??"",policy:n.name}}},{default:t(()=>[s(d(n.name),1)]),_:2},1032,["to"])])}),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):S("",!0)])]))),128))])])])}}}),fe=z(ye,[["__scopeId","data-v-c6fda729"]]),ge={class:"policy-type-heading"},ke={class:"policy-list"},be={key:0},ve=j({__name:"PolicyTypeEntryList",props:{items:{},types:{}},setup(v){const $=v;function P({headerKey:L}){return{class:`cell-${L}`}}return(L,R)=>{const w=g("XAction"),o=g("XCodeBlock"),p=g("KTable");return e(),m(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y(L.items,(c,k)=>(e(),m(G,{key:k},{"accordion-header":t(()=>[r("h3",ge,[l(q,{"policy-type":c.type},{default:t(()=>[s(d(c.type)+" ("+d(c.connections.length)+`)
          `,1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[r("div",ke,[l(p,{class:"policy-type-table",fetcher:()=>({data:c.connections,total:c.connections.length}),headers:[{label:"From",key:"sourceTags"},{label:"To",key:"destinationTags"},{label:"On",key:"name"},{label:"Conf",key:"config"},{label:"Origin policies",key:"origins"}],"cell-attrs":P,"disable-pagination":"","is-clickable":""},{sourceTags:t(({row:n})=>[n.sourceTags.length>0?(e(),m(F,{key:0,class:"tag-list","should-truncate":"",tags:n.sourceTags},null,8,["tags"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),destinationTags:t(({row:n})=>[n.destinationTags.length>0?(e(),m(F,{key:0,class:"tag-list","should-truncate":"",tags:n.destinationTags},null,8,["tags"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),name:t(({row:n})=>[n.name!==null?(e(),a(i,{key:0},[s(d(n.name),1)],64)):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),origins:t(({row:n})=>[n.origins.length>0?(e(),a("ul",be,[(e(!0),a(i,null,y(n.origins,(_,C)=>{var u;return e(),a("li",{key:`${k}-${C}`},[l(w,{to:{name:"policy-detail-view",params:{mesh:_.mesh,policyPath:((u=$.types[_.type])==null?void 0:u.path)??"",policy:_.name}}},{default:t(()=>[s(d(_.name),1)]),_:2},1032,["to"])])}),128))])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),config:t(({row:n})=>[n.config?(e(),m(o,{key:0,code:X(M).stringify(n.config),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),a(i,{key:1},[s(`
                —
              `)],64))]),_:2},1032,["fetcher"])])]),_:2},1024))),128))]),_:1})}}}),$e=z(ve,[["__scopeId","data-v-53f1d6e8"]]),we={class:"policy-type-heading"},Ce={key:0,class:"matcher"},Pe={key:1},Ae={key:0},Be=j({__name:"RuleList",props:{rules:{},types:{}},setup(v){const{t:$}=U(),P=v;return(L,R)=>{const w=g("XCodeBlock");return e(),m(T,{"initially-open":[],"multiple-open":""},{default:t(()=>[(e(!0),a(i,null,y([P.rules.reduce((o,p)=>(typeof o[p.type]>"u"&&(o[p.type]=[]),o[p.type].push(p),o),{})],o=>(e(),a(i,{key:o},[(e(!0),a(i,null,y(o,(p,c)=>(e(),m(G,{key:c},{"accordion-header":t(()=>[r("h3",we,[l(q,{"policy-type":c},{default:t(()=>[s(d(c),1)]),_:2},1032,["policy-type"])])]),"accordion-content":t(()=>[(e(!0),a(i,null,y([p.some(k=>k.matchers.length>0)],k=>(e(),a("div",{key:k,class:"policy-list"},[l(W,{class:Z(["policy-type-table",{"has-matchers":k}]),items:p,headers:[...k?[{label:"Matchers",key:"matchers"}]:[],{label:"Origin policies",key:"origins"},{label:"Conf",key:"config"}]},{matchers:t(({row:n})=>[n.matchers.length>0?(e(),a("span",Ce,[l(se,{items:n.matchers},null,8,["items"])])):(e(),a("i",Pe,d(X($)("data-planes.routes.item.matches_everything")),1))]),origins:t(({row:n})=>[n.origins.length>0?(e(),a("ul",Ae,[(e(!0),a(i,null,y(n.origins,(_,C)=>{var u;return e(),a("li",{key:`${c}-${C}`},[l(E,{to:{name:"data-plane-policy-summary-view",params:{mesh:_.mesh,policyPath:((u=P.types[_.type])==null?void 0:u.path)??"",policy:_.name}}},{default:t(()=>[s(d(_.name),1)]),_:2},1032,["to"])])}),128))])):(e(),a(i,{key:1},[s(d(X($)("common.collection.none")),1)],64))]),config:t(({row:n})=>[Object.keys(n.raw).length>0?(e(),m(w,{key:0,code:X(M).stringify(n.raw),language:"yaml","show-copy-button":!1},null,8,["code"])):(e(),a(i,{key:1},[s(d(X($)("common.collection.none")),1)],64))]),_:2},1032,["class","items","headers"])]))),128))]),_:2},1024))),128))],64))),128))]),_:1})}}}),H=z(Be,[["__scopeId","data-v-39d2dd11"]]),Re={class:"stack"},Le={class:"mb-2"},Ve={key:0},Ke=j({__name:"DataPlanePoliciesView",props:{data:{}},setup(v){const $=v;return(P,L)=>{const R=g("RouteTitle"),w=g("KCard"),o=g("DataCollection"),p=g("DataLoader"),c=g("DataSource"),k=g("RouterView"),n=g("AppView"),_=g("RouteView");return e(),m(_,{name:"data-plane-policies-view",params:{mesh:"",dataPlane:""}},{default:t(({can:C,route:u,t:V,uri:x})=>[l(R,{render:!1,title:V("data-planes.routes.item.navigation.data-plane-policies-view")},null,8,["title"]),s(),l(n,null,{default:t(()=>[r("div",Re,[l(c,{src:"/policy-types"},{default:t(({data:A,error:O})=>[(e(!0),a(i,null,y([((A==null?void 0:A.policies)??[]).reduce((B,b)=>Object.assign(B,{[b.name]:b}),{})],B=>(e(),a(i,{key:typeof B},[l(p,{src:x(X(ee),"/meshes/:mesh/rules/for/:dataplane",{mesh:u.params.mesh,dataplane:u.params.dataPlane}),data:[A],errors:[O]},{default:t(({data:b})=>[l(o,{items:b.rules},{default:t(()=>[(e(),a(i,null,y(["proxy","to"],f=>l(o,{key:f,items:b.rules,predicate:h=>h.ruleType===f,comparator:(h,N)=>h.type.localeCompare(N.type),empty:!1},{default:t(({items:h})=>[l(w,null,{default:t(()=>[r("h3",null,d(V(`data-planes.routes.item.rules.${f}`)),1),s(),l(H,{class:"mt-2",rules:h,types:B,"data-testid":`${f}-rule-list`},null,8,["rules","types","data-testid"])]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])),64)),s(),l(o,{items:b.rules,predicate:f=>f.ruleType==="from",comparator:(f,h)=>f.type.localeCompare(h.type),empty:!1},{default:t(({items:f})=>[l(w,null,{default:t(()=>[r("h3",Le,d(V("data-planes.routes.item.rules.from")),1),s(),(e(!0),a(i,null,y([Object.groupBy(f,h=>h.inbound.port)],h=>(e(),a(i,{key:h},[(e(!0),a(i,null,y(Object.entries(h).sort(([N],[K])=>Number(K)-Number(N)),([N,K],D)=>(e(),a("div",{key:D},[r("h4",null,d(V("data-planes.routes.item.port",{port:N})),1),s(),l(H,{class:"mt-2",rules:K,types:B,"data-testid":`from-rule-list-${D}`},null,8,["rules","types","data-testid"])]))),128))],64))),128))]),_:2},1024)]),_:2},1032,["items","predicate","comparator"])]),_:2},1032,["items"])]),_:2},1032,["src","data","errors"]),s(),C("use zones")?S("",!0):(e(),a("div",Ve,[$.data.dataplaneType==="builtin"?(e(),m(p,{key:0,src:`/meshes/${u.params.mesh}/dataplanes/${u.params.dataPlane}/gateway-dataplane-policies`,data:[A],errors:[O]},{default:t(({data:b})=>[b?(e(),m(o,{key:0,items:b.routePolicies,empty:!1},{default:t(()=>[r("h3",null,d(V("data-planes.routes.item.legacy_policies")),1),s(),l(w,{class:"mt-4"},{default:t(()=>[l(fe,{types:B,"gateway-dataplane":b,"data-testid":"builtin-gateway-dataplane-policies"},null,8,["types","gateway-dataplane"])]),_:2},1024)]),_:2},1032,["items"])):S("",!0)]),_:2},1032,["src","data","errors"])):(e(),m(p,{key:1,src:`/meshes/${u.params.mesh}/dataplanes/${u.params.dataPlane}/sidecar-dataplane-policies`,data:[A],errors:[O]},{default:t(({data:b})=>[l(o,{predicate:f=>{var h;return((h=B[f.type])==null?void 0:h.isTargetRefBased)===!1},items:b.policyTypeEntries,empty:!1},{default:t(({items:f})=>[r("h3",null,d(V("data-planes.routes.item.legacy_policies")),1),s(),l(w,{class:"mt-4"},{default:t(()=>[l($e,{items:f,types:B,"data-testid":"sidecar-dataplane-policies"},null,8,["items","types"])]),_:2},1024)]),_:2},1032,["predicate","items"])]),_:2},1032,["src","data","errors"]))]))],64))),128))]),_:2},1024)]),s(),l(k,null,{default:t(({Component:A})=>[u.child()?(e(),m(ae,{key:0,onClose:O=>u.replace({name:"data-plane-policies-view",params:{mesh:u.params.mesh,dataPlane:u.params.dataPlane}})},{default:t(()=>[(e(),m(te(A)))]),_:2},1032,["onClose"])):S("",!0)]),_:2},1024)]),_:2},1024)]),_:1})}}});export{Ke as default};
