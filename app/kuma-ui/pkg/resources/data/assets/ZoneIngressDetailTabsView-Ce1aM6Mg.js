import{d as x,r as e,o as c,q as p,w as t,b as o,c as C,s as D,e as m,Q as R,L as T,t as X,G as y}from"./index-TQmXQMPR.js";const B={key:0},S=x({__name:"ZoneIngressDetailTabsView",setup(k){return(A,i)=>{const _=e("RouteTitle"),d=e("XCopyButton"),u=e("XAction"),z=e("XTabs"),b=e("RouterView"),w=e("DataLoader"),f=e("AppView"),g=e("DataSource"),V=e("RouteView");return c(),p(V,{name:"zone-ingress-detail-tabs-view",params:{zone:"",zoneIngress:""}},{default:t(({route:n,t:s})=>[o(g,{src:`/zone-ingress-overviews/${n.params.zoneIngress}`},{default:t(({data:a,error:v})=>[o(f,{docs:s("zone-ingresses.href.docs"),breadcrumbs:[{to:{name:"zone-cp-list-view"},text:s("zone-cps.routes.item.breadcrumbs")},{to:{name:"zone-cp-detail-view",params:{zone:n.params.zone}},text:n.params.zone},{to:{name:"zone-ingress-list-view",params:{zone:n.params.zone}},text:s("zone-ingresses.routes.item.breadcrumbs")}]},{title:t(()=>[a?(c(),C("h1",B,[o(d,{text:a.name},{default:t(()=>[o(_,{title:s("zone-ingresses.routes.item.title",{name:a.name})},null,8,["title"])]),_:2},1032,["text"])])):D("",!0)]),default:t(()=>[i[1]||(i[1]=m()),o(w,{data:[a],errors:[v]},{default:t(()=>{var l;return[o(z,{selected:(l=n.child())==null?void 0:l.name,"data-testid":"zone-ingress-tabs"},R({_:2},[T(n.children,({name:r})=>({name:`${r}-tab`,fn:t(()=>[o(u,{to:{name:r}},{default:t(()=>[m(X(s(`zone-ingresses.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),i[0]||(i[0]=m()),o(b,null,{default:t(r=>[(c(),p(y(r.Component),{data:a},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{S as default};
