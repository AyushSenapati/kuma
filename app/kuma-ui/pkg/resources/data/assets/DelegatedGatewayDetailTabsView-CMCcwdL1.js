import{d as w,i as t,o as u,a as g,w as a,j as s,g as h,a3 as b,k as i,P as f,J as V,t as v}from"./index-Dh8cIC_Y.js";const A=w({__name:"DelegatedGatewayDetailTabsView",setup(x){return(y,R)=>{const c=t("RouteTitle"),r=t("XAction"),l=t("XTabs"),d=t("RouterView"),p=t("AppView"),_=t("RouteView");return u(),g(_,{name:"delegated-gateway-detail-tabs-view",params:{mesh:"",service:""}},{default:a(({route:e,t:o})=>[s(p,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:"delegated-gateway-list-view",params:{mesh:e.params.mesh}},text:o("delegated-gateways.routes.item.breadcrumbs")}]},{title:a(()=>[h("h1",null,[s(b,{text:e.params.service},{default:a(()=>[s(c,{title:o("delegated-gateways.routes.item.title",{name:e.params.service})},null,8,["title"])]),_:2},1032,["text"])])]),default:a(()=>{var m;return[i(),s(l,{selected:(m=e.child())==null?void 0:m.name},f({_:2},[V(e.children,({name:n})=>({name:`${n}-tab`,fn:a(()=>[s(r,{to:{name:n}},{default:a(()=>[i(v(o(`delegated-gateways.routes.item.navigation.${n}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),i(),s(d)]}),_:2},1032,["breadcrumbs"])]),_:1})}}});export{A as default};
