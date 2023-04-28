import{m as g,y as C,i as P,x as y,P as q,H as b,L as k,E as A,G as x,r as R,Q as T,R as N,T as S}from"./entry.7d0f722a.js";const p=globalThis.requestIdleCallback||(t=>{const a=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(e)},1)}),E=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),L=t=>{const a=g();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{p(t)}):p(t)};async function _(t,a=C()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(t))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>_(t,a));a._routePreloaded.add(t);const o=a.resolve(t).matched.map(s=>{var n;return(n=s.components)==null?void 0:n.default}).filter(s=>typeof s=="function");for(const s of o){const n=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const w=(...t)=>t.find(a=>a!==void 0),B="noopener noreferrer";function I(t){const a=t.componentName||"NuxtLink";return P({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:o}){const s=C(),n=y(()=>e.to||e.href||""),f=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||q(n.value,!0)),h=b(!1),i=b(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!D()){const d=g();let c,l=null;k(()=>{const m=O();L(()=>{c=p(()=>{var v;(v=i==null?void 0:i.value)!=null&&v.tagName&&(l=m.observe(i.value,async()=>{l==null||l(),l=null;const u=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",u).catch(()=>{}),!f.value&&_(n.value,s).catch(()=>{})]),h.value=!0}))})})}),A(()=>{c&&E(c),l==null||l(),l=null})}return()=>{var m,v;if(!f.value)return x(R("RouterLink"),{ref:u=>{i.value=u==null?void 0:u.$el},to:n.value,...h.value&&!e.custom?{class:e.prefetchedClass||t.prefetchedClass}:{},activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom,rel:e.rel},o.default);const r=typeof n.value=="object"?((m=s.resolve(n.value))==null?void 0:m.href)??null:n.value||null,d=e.target||null,c=e.noRel?null:w(e.rel,t.externalRelAttribute,r?B:"")||null,l=()=>S(r,{replace:e.replace});return e.custom?o.default?o.default({href:r,navigate:l,get route(){if(!r)return;const u=T(r);return{path:u.pathname,fullPath:u.pathname,get query(){return N(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:c,target:d,isExternal:f.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:i,href:r,rel:c,target:d},(v=o.default)==null?void 0:v.call(o))}}})}const V=I({componentName:"NuxtLink"});function O(){const t=g();if(t._observer)return t._observer;let a=null;const e=new Map,o=(n,f)=>(a||(a=new IntersectionObserver(h=>{for(const i of h){const r=e.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&r&&r()}})),e.set(n,f),a.observe(n),()=>{e.delete(n),a.unobserve(n),e.size===0&&(a.disconnect(),a=null)});return t._observer={observe:o}}function D(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{V as _};
