import{_ as g}from"./CodeBlock.vue_vue_type_style_index_0_lang-82a953a2.js";import{C as _}from"./TextWithCopyButton-cd7aaea4.js";import{_ as x}from"./StatusInfo.vue_vue_type_script_setup_true_lang-096c7a30.js";import{g as b}from"./RouteView.vue_vue_type_script_setup_true_lang-0a949fda.js";import{t as v}from"./toYaml-4e00099e.js";import{d as q,r as s,s as f,o as F,c as S,w as c,a as d,u as h,b as k,t as T}from"./index-d7a51e8c.js";const Y=q({__name:"ResourceCodeBlock",props:{id:{type:String,required:!0},resourceFetcher:{type:Function,required:!0},resourceFetcherWatchKey:{type:[String,Number],required:!1,default:null},codeMaxHeight:{type:String,required:!1,default:null},isSearchable:{type:Boolean,required:!1,default:!1}},setup(n){const r=n,i=b(),u=s(""),t=s(!1),o=s(null);f(()=>r.resourceFetcherWatchKey,function(e,a){e!==a&&e!==null&&l()}),f(()=>r.resourceFetcher,function(){l()},{immediate:!0});async function l(){t.value=!0,o.value=null;try{const e=await r.resourceFetcher();u.value=m(e)}catch(e){e instanceof Error?o.value=e:console.error(e)}finally{t.value=!1}}async function p(){const e=await r.resourceFetcher({format:"kubernetes"});return m(e)}function m(e){const{creationTime:a,modificationTime:B,...y}=e;return v(y)}return(e,a)=>(F(),S(x,{"is-loading":t.value,error:o.value},{default:c(()=>[d(g,{id:n.id,language:"yaml",code:u.value,"is-searchable":r.isSearchable,"query-key":r.id,"code-max-height":r.codeMaxHeight},{"secondary-actions":c(()=>[d(_,{"get-text":p,"copy-text":h(i).t("common.copyKubernetesText")},{default:c(()=>[k(T(h(i).t("common.copyKubernetesShortText")),1)]),_:1},8,["copy-text"])]),_:1},8,["id","code","is-searchable","query-key","code-max-height"])]),_:1},8,["is-loading","error"]))}});export{Y as _};