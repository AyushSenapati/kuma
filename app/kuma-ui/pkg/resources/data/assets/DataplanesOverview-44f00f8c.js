import{z as P}from"./kongponents.es-c2485d1e.js";import{e as S}from"./production-bc25f6aa.js";import{k as h}from"./kumaApi-7be75404.js";import{L as A}from"./LoadingBox-9c14c0ec.js";import{S as T}from"./StatusBadge-940bb1dd.js";import{O as F,a as N,b as E}from"./OnboardingPage-5db075ab.js";import{d as I,r as b,c as w,M as z,a as y,w as t,o as s,e as n,a4 as L,u as o,g as l,t as d,h as u,f as k,F as M}from"./runtime-dom.esm-bundler-32659b48.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./store-0e68b516.js";const H={key:0,class:"status-loading-box mb-4"},R={key:1},V={class:"mb-4"},U=I({__name:"DataplanesOverview",setup(W){const x=[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],e=b({total:0,data:[]}),i=b(null),D=w(()=>e.value.data.length>0?"Success":"Waiting for DPPs"),m=w(()=>e.value.data.length>0?"The following data plane proxies (DPPs) are connected to the control plane:":null);z(function(){p()}),f();function p(){i.value!==null&&window.clearTimeout(i.value)}async function f(){let r=!1;const c=[];try{const{items:a}=await h.getAllDataplanes({size:10});if(Array.isArray(a))for(const B of a){const{name:v,mesh:_}=B,O=await h.getDataplaneOverviewFromMesh({mesh:_,name:v}),g=S(O.dataplaneInsight);g==="offline"&&(r=!0),c.push({status:g,name:v,mesh:_})}}catch(a){console.error(a)}e.value.data=c,e.value.total=e.value.data.length,r&&(p(),i.value=window.setTimeout(f,1e3))}return(r,c)=>(s(),y(F,null,{header:t(()=>[n(N,null,L({title:t(()=>[l("p",null,d(o(D)),1)]),_:2},[o(m)!==null?{name:"description",fn:t(()=>[l("p",null,d(o(m)),1)]),key:"0"}:void 0]),1024)]),content:t(()=>[e.value.data.length===0?(s(),u("div",H,[n(A)])):(s(),u("div",R,[l("p",V,[l("b",null,"Found "+d(e.value.data.length)+" DPPs:",1)]),k(),n(o(P),{class:"mb-4",fetcher:()=>e.value,headers:x,"disable-pagination":""},{status:t(({rowValue:a})=>[a?(s(),y(T,{key:0,status:a},null,8,["status"])):(s(),u(M,{key:1},[k(`
              —
            `)],64))]),_:1},8,["fetcher"])]))]),navigation:t(()=>[n(E,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":e.value.data.length>0},null,8,["should-allow-next"])]),_:1}))}});const $=C(U,[["__scopeId","data-v-d8337cda"]]);export{$ as default};
