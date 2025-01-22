import{d as q,r as m,o as t,q as p,w as a,b as u,c as n,K as c,L as f,R as M,e as o,t as h,m as d,p as O,a0 as E,s as g,a1 as A,_ as H}from"./index-TQmXQMPR.js";import{A as J,a as K}from"./AccordionList-C5Shunqq.js";import{P as N}from"./PolicyTypeTag-iww8CZlY.js";import{R as Y}from"./RuleMatchers-CLa7I6ZK.js";const G={key:0,class:"rules"},Q={class:"stack-with-borders mt-4"},U={class:"stack-with-borders mt-4"},W={class:"mt-4"},Z={class:"stack-with-borders"},ee={class:"mt-2"},te=q({__name:"DataPlaneOutboundSummaryOverviewView",props:{data:{},routeName:{}},setup(X){const k=X,R=(v,e)=>v.$resourceMeta.name===e.name&&v.$resourceMeta.namespace===e.namespace&&v.$resourceMeta.zone===e.zone&&(e.resourceSectionName===""||v.$resourceMeta.port===e.port);return(v,e)=>{const S=m("XBadge"),V=m("XAction"),C=m("DataCollection"),D=m("XCodeBlock"),z=m("XCard"),L=m("DataLoader"),x=m("DataSource"),j=m("AppView"),F=m("RouteView");return t(),p(F,{params:{mesh:"",dataPlane:"",connection:""},name:k.routeName},{default:a(({t:T,route:P,uri:I})=>[u(j,null,{default:a(()=>[(t(!0),n(c,null,f([P.params.connection.replace(/-([a-f0-9]){16}$/,"")],B=>(t(),n("div",{key:B,class:"stack-with-borders"},[u(M,{layout:"horizontal"},{title:a(()=>e[0]||(e[0]=[o(`
              Protocol
            `)])),body:a(()=>[u(S,{appearance:"info"},{default:a(()=>[o(h(T(`http.api.value.${["grpc","http","tcp"].find(w=>typeof k.data[w]<"u")}`)),1)]),_:2},1024)]),_:2},1024),e[17]||(e[17]=o()),k.data?(t(),n("div",G,[e[15]||(e[15]=d("h3",null,"Rules",-1)),e[16]||(e[16]=o()),u(x,{src:"/policy-types"},{default:a(({data:w})=>[(t(!0),n(c,null,f([Object.groupBy((w==null?void 0:w.policies)??[],_=>_.name)],_=>(t(),p(L,{key:typeof _,src:I(O(E),"/meshes/:mesh/rules/for/:dataplane",{mesh:P.params.mesh,dataplane:P.params.dataPlane})},{default:a(({data:$})=>[k.data.$resourceMeta.type!==""?(t(),p(C,{key:0,predicate:i=>i.resourceMeta.type==="Mesh"||R(k.data,i),items:$.toResourceRules},{default:a(({items:i})=>[d("div",Q,[(t(!0),n(c,null,f(Object.groupBy(i,s=>s.type),(s,y)=>(t(),n("div",{key:y},[u(N,{"policy-type":y},{default:a(()=>[o(h(y),1)]),_:2},1032,["policy-type"]),e[5]||(e[5]=o()),d("div",U,[(t(!0),n(c,null,f(s.length>1?s.filter(r=>R(k.data,r)):s,r=>(t(),n("div",{key:r},[r.origins.length>0?(t(),p(M,{key:0,layout:"horizontal"},{title:a(()=>e[2]||(e[2]=[o(`
                                      Origin Policies
                                    `)])),body:a(()=>[u(C,{predicate:l=>typeof l.resourceMeta<"u",items:r.origins,empty:!1},{default:a(({items:l})=>[d("ul",null,[(t(!0),n(c,null,f(l,b=>(t(),n("li",{key:JSON.stringify(b)},[Object.keys(_).length>0?(t(),p(V,{key:0,to:{name:"policy-detail-view",params:{policyPath:_[y][0].path,mesh:b.resourceMeta.mesh,policy:b.resourceMeta.name}}},{default:a(()=>[o(h(b.resourceMeta.name),1)]),_:2},1032,["to"])):g("",!0)]))),128))])]),_:2},1032,["predicate","items"])]),_:2},1024)):g("",!0),e[4]||(e[4]=o()),u(D,{class:"mt-2",code:O(A).stringify(r.raw),language:"yaml","show-copy-button":!1},null,8,["code"])]))),128))])]))),128))])]),_:2},1032,["predicate","items"])):(t(),p(C,{key:1,predicate:i=>i.ruleType==="to"&&!["MeshHTTPRoute","MeshTCPRoute"].includes(i.type)&&i.matchers.every(s=>s.key==="kuma.io/service"&&(s.not?s.value!==B:s.value===B)),items:$.rules},{default:a(({items:i})=>[d("div",W,[u(J,{"initially-open":0,"multiple-open":"",class:"stack"},{default:a(()=>[(t(!0),n(c,null,f(Object.groupBy(i,s=>s.type),(s,y)=>(t(),p(z,{key:y},{default:a(()=>[u(K,null,{"accordion-header":a(()=>[u(N,{"policy-type":y},{default:a(()=>[o(h(y)+" ("+h(s.length)+`)
                                  `,1)]),_:2},1032,["policy-type"])]),"accordion-content":a(()=>[d("div",Z,[(t(!0),n(c,null,f(s,r=>(t(),n(c,{key:r},[r.matchers.length>0?(t(),p(M,{key:0,layout:"horizontal"},{title:a(()=>e[6]||(e[6]=[o(`
                                          From
                                        `)])),body:a(()=>[d("p",null,[u(Y,{items:r.matchers},null,8,["items"])])]),_:2},1024)):g("",!0),e[12]||(e[12]=o()),r.origins.length>0?(t(),p(M,{key:1,layout:"horizontal"},{title:a(()=>e[8]||(e[8]=[o(`
                                          Origin Policies
                                        `)])),body:a(()=>[d("ul",null,[(t(!0),n(c,null,f(r.origins,l=>(t(),n("li",{key:`${l.mesh}-${l.name}`},[_[l.type]?(t(),p(V,{key:0,to:{name:"policy-detail-view",params:{mesh:l.mesh,policyPath:_[l.type][0].path,policy:l.name}}},{default:a(()=>[o(h(l.name),1)]),_:2},1032,["to"])):(t(),n(c,{key:1},[o(h(l.name),1)],64))]))),128))])]),_:2},1024)):g("",!0),e[13]||(e[13]=o()),d("div",null,[e[10]||(e[10]=d("dt",null,`
                                          Config
                                        `,-1)),e[11]||(e[11]=o()),d("dd",ee,[d("div",null,[u(D,{code:O(A).stringify(r.raw),language:"yaml","show-copy-button":!1},null,8,["code"])])])])],64))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["predicate","items"]))]),_:2},1032,["src"]))),128))]),_:2},1024)])):g("",!0)]))),128))]),_:2},1024)]),_:1},8,["name"])}}}),re=H(te,[["__scopeId","data-v-5e04b0e7"]]);export{re as default};
