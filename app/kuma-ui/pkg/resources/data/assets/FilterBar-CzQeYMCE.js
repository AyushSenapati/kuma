var W=Object.defineProperty;var Y=(e,t,i)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var k=(e,t,i)=>Y(e,typeof t!="symbol"?t+"":t,i);import{d as j,I as B,c as _,o as u,a as G,w as P,b as f,t as y,e as L,n as J,r as X,p as O,f as E,g as a,s as ee,L as b,T as te,S as ie,aw as re,h as se,j as C,a6 as ne,k as h,z as x,ax as oe,M,i as ae,ay as le,az as ue,l as q,F as ce,B as de,A as fe}from"./index-DDa3g5X3.js";const ge=e=>(O("data-v-af95c2b7"),e=e(),E(),e),pe=["aria-hidden"],he={key:0,"data-testid":"kui-icon-svg-title"},me=ge(()=>a("path",{d:"M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z",fill:"currentColor"},null,-1)),ve=j({__name:"ChevronRightIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:B,validator:e=>{if(typeof e=="number"&&e>0)return!0;if(typeof e=="string"){const t=String(e).replace(/px/gi,""),i=Number(t);if(i&&!isNaN(i)&&Number.isInteger(i)&&i>0)return!0}return!1}},as:{type:String,required:!1,default:"span"}},setup(e){const t=e,i=_(()=>{if(typeof t.size=="number"&&t.size>0)return`${t.size}px`;if(typeof t.size=="string"){const c=String(t.size).replace(/px/gi,""),o=Number(c);if(o&&!isNaN(o)&&Number.isInteger(o)&&o>0)return`${o}px`}return B}),g=_(()=>({boxSizing:"border-box",color:t.color,display:t.display,height:i.value,lineHeight:"0",width:i.value}));return(c,o)=>(u(),G(X(e.as),{"aria-hidden":e.decorative?"true":void 0,class:"kui-icon chevron-right-icon","data-testid":"kui-icon-wrapper-chevron-right-icon",style:J(g.value)},{default:P(()=>[(u(),f("svg",{"aria-hidden":e.decorative?"true":void 0,"data-testid":"kui-icon-svg-chevron-right-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg"},[e.title?(u(),f("title",he,y(e.title),1)):L("",!0),me],8,pe))]),_:1},8,["aria-hidden","style"]))}}),be=ee(ve,[["__scopeId","data-v-af95c2b7"]]),ye=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class Se{constructor(t,i){k(this,"commands");k(this,"keyMap");k(this,"boundTriggerShortcuts");this.commands=i,this.keyMap=Object.fromEntries(Object.entries(t).map(([g,c])=>[g.toLowerCase(),c])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(t){_e(t,this.keyMap,this.commands)}}function _e(e,t,i){const g=we(e.code),c=[e.ctrlKey?"ctrl":"",e.shiftKey?"shift":"",e.altKey?"alt":"",g].filter(S=>S!=="").join("+"),o=t[c];if(!o)return;const p=i[o];p.isAllowedContext&&!p.isAllowedContext(e)||(p.shouldPreventDefaultAction&&e.preventDefault(),!(p.isDisabled&&p.isDisabled())&&p.trigger(e))}function we(e){return ye.includes(e)?"":e.replace(/^Key/,"").toLowerCase()}let D=0;const ke=(e="unique")=>(D++,`${e}-${D}`),xe=e=>(O("data-v-7a0290e4"),e=e(),E(),e),Ie=xe(()=>a("span",{class:"visually-hidden"},"Focus filter",-1)),Ce={class:"filter-bar-icon"},Le=["for"],Ne=["id","placeholder"],Fe={key:0,class:"suggestion-box","data-testid":"filter-bar-suggestion-box"},Te={class:"suggestion-list"},ze={key:0,class:"filter-bar-error"},$e={key:0},Ae=["title","data-filter-field"],Be={class:"visually-hidden"},Me=j({__name:"FilterBar",props:{fields:{},placeholder:{default:""},query:{default:""},id:{default:()=>ke("filter-bar")}},emits:["change"],setup(e,{emit:t}){const i=e,g=b(),c=t,o=r=>{r!=null&&r.target&&(c("change",new FormData(r.target)),m.value=!1)},p=r=>{c("change",new FormData(g.value))},S=b(null),d=b(null),N=b(null),m=b(!1),v=b(i.query);te(()=>i.query,r=>{v.value=r});const w=b(0),F=_(()=>Object.keys(i.fields)),T=_(()=>Object.entries(i.fields).slice(0,5).map(([r,s])=>({fieldName:r,...s}))),z=_(()=>F.value.length>0?`Filter by ${F.value.join(", ")}`:"Filter"),K=_(()=>i.placeholder??z.value),R={ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},V={jumpToNextSuggestion:{trigger:()=>A(1),isAllowedContext(r){return d.value!==null&&r.composedPath().includes(d.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:()=>A(-1),isAllowedContext(r){return d.value!==null&&r.composedPath().includes(d.value)},shouldPreventDefaultAction:!0}},$=new Se(R,V);ie(function(){$.registerListener()}),re(function(){$.unRegisterListener()});function A(r){const s=T.value.length;let l=w.value+r;l===-1&&(l=s),w.value=l%(s+1)}function H(){d.value instanceof HTMLInputElement&&d.value.focus()}function U(r){const l=r.currentTarget.getAttribute("data-filter-field");l&&d.value instanceof HTMLInputElement&&Z(d.value,l)}function Z(r,s){const l=v.value===""||v.value.endsWith(" ")?"":" ";v.value+=l+s+":",r.focus(),w.value=0}function Q(r){r.relatedTarget===null&&(m.value=!1),S.value instanceof HTMLElement&&r.relatedTarget instanceof Node&&!S.value.contains(r.relatedTarget)&&(m.value=!1)}return(r,s)=>{const l=se("search");return u(),f("div",{ref_key:"filterBar",ref:S,class:"filter-bar","data-testid":"filter-bar"},[C(l,null,{default:P(()=>[a("form",{ref_key:"$form",ref:g,onSubmit:ne(o,["prevent"])},[a("button",{class:"focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"filter-bar-focus-filter-input-button",onClick:H},[Ie,h(),a("span",Ce,[C(x(oe),{decorative:"","data-testid":"filter-bar-filter-icon","hide-title":"",size:x(M)},null,8,["size"])])]),h(),a("label",{for:`${i.id}-filter-bar-input`,class:"visually-hidden"},[ae(r.$slots,"default",{},()=>[h(y(z.value),1)],!0)],8,Le),h(),le(a("input",{id:`${i.id}-filter-bar-input`,ref_key:"filterInput",ref:d,"onUpdate:modelValue":s[0]||(s[0]=n=>v.value=n),class:"filter-bar-input",type:"search",placeholder:K.value,"data-testid":"filter-bar-filter-input",name:"s",onFocus:s[1]||(s[1]=n=>m.value=!0),onInput:s[2]||(s[2]=n=>m.value=!0),onBlur:Q,onSearch:s[3]||(s[3]=n=>{n.target.value.length===0&&(p(n),m.value=!0)})},null,40,Ne),[[ue,v.value]]),h(),m.value?(u(),f("div",Fe,[a("div",Te,[N.value!==null?(u(),f("p",ze,y(N.value.message),1)):(u(),f("button",{key:1,type:"submit",class:q(["submit-query-button",{"submit-query-button-is-selected":w.value===0}]),"data-testid":"filter-bar-submit-query-button"},`
              Submit `+y(v.value),3)),h(),(u(!0),f(ce,null,de(T.value,(n,I)=>(u(),f("div",{key:`${i.id}-${I}`,class:q(["suggestion-list-item",{"suggestion-list-item-is-selected":w.value===I+1}])},[a("b",null,y(n.fieldName),1),n.description!==""?(u(),f("span",$e,": "+y(n.description),1)):L("",!0),h(),a("button",{class:"apply-suggestion-button",title:`Add ${n.fieldName}:`,type:"button","data-filter-field":n.fieldName,"data-testid":"filter-bar-apply-suggestion-button",onClick:U},[a("span",Be,"Add "+y(n.fieldName)+":",1),h(),C(x(be),{decorative:"","hide-title":"",size:x(M)},null,8,["size"])],8,Ae)],2))),128))])])):L("",!0)],544)]),_:3})],512)}}}),je=fe(Me,[["__scopeId","data-v-7a0290e4"]]);export{je as F};
