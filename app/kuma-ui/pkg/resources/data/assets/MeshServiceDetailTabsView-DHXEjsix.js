import{d as D,r as e,o as c,q as p,w as s,b as a,p as R,aq as T,c as X,s as y,e as i,Q as B,L as S,t as k,G as A}from"./index-TQmXQMPR.js";const L={key:0},$=D({__name:"MeshServiceDetailTabsView",setup(N){return(g,n)=>{const _=e("RouteTitle"),d=e("XCopyButton"),u=e("XAction"),h=e("XTabs"),v=e("RouterView"),f=e("DataLoader"),w=e("AppView"),b=e("DataSource"),V=e("RouteView");return c(),p(V,{name:"mesh-service-detail-tabs-view",params:{mesh:"",service:""}},{default:s(({route:t,t:r,uri:x})=>[a(b,{src:x(R(T),"/meshes/:mesh/mesh-service/:name",{mesh:t.params.mesh,name:t.params.service})},{default:s(({data:m,error:C})=>[a(w,{docs:r("services.mesh-service.href.docs"),breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:t.params.mesh}},text:t.params.mesh},{to:{name:"mesh-service-list-view",params:{mesh:t.params.mesh}},text:r("services.routes.mesh-service-list-view.title")}]},{title:s(()=>[m?(c(),X("h1",L,[a(d,{text:t.params.service},{default:s(()=>[a(_,{title:r("services.routes.item.title",{name:m.name})},null,8,["title"])]),_:2},1032,["text"])])):y("",!0)]),default:s(()=>[n[1]||(n[1]=i()),a(f,{data:[m],errors:[C]},{default:s(()=>{var l;return[a(h,{selected:(l=t.child())==null?void 0:l.name},B({_:2},[S(t.children,({name:o})=>({name:`${o}-tab`,fn:s(()=>[a(u,{to:{name:o}},{default:s(()=>[i(k(r(`services.routes.item.navigation.${o}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),n[0]||(n[0]=i()),a(v,null,{default:s(o=>[(c(),p(A(o.Component),{data:m},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{$ as default};
