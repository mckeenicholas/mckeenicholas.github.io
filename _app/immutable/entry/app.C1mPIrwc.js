const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Bd4KX4wg.js","../chunks/scheduler.BTyvKu73.js","../chunks/index.BH7PSYXr.js","../chunks/index.DPxzp6Le.js","../chunks/entry.xNLbFrCC.js","../chunks/Icon.C2b9PZdl.js","../chunks/spread.CgU5AtxT.js","../chunks/index.CsKowy4z.js","../chunks/utils.sV_qMyFj.js","../chunks/stores.B7oGB59x.js","../chunks/index.BUCqQRry.js","../chunks/updater.CeLzqhK2.js","../assets/0.CbaNYG16.css","../nodes/1.75OjZbUc.js","../nodes/2.BwlzfkQl.js","../chunks/LinkText.BzUtEE0-.js","../chunks/index.tKd8CO-P.js","../nodes/3.CjKv9S0o.js","../nodes/4.Te94UvPh.js","../assets/4.K_CfqR9u.css","../nodes/5.BO1RfMSZ.js"])))=>i.map(i=>d[i]);
import{s as j,a as q,C as p,g as B,i as E,f as h,G as U,H as M,e as G,c as H,b as J,m as S,I as d,t as K,d as W,j as z,J as D,K as P,L as F}from"../chunks/scheduler.BTyvKu73.js";import{S as Q,i as X,b as g,e as I,t as w,g as N,c as R,a as O,m as L,d as A}from"../chunks/index.BH7PSYXr.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},y=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");r=Promise.allSettled(n.map(l=>{if(l=Z(l,s),l in T)return;T[l]=!0;const a=l.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(!!s)for(let k=t.length-1;k>=0;k--){const v=t[k];if(v.href===l&&(!a||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${_}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Y,a||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),a)return new Promise((k,v)=>{m.addEventListener("load",k),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function u(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return r.then(t=>{for(const i of t||[])i.status==="rejected"&&u(i.reason);return e().catch(u)})},re={};function $(o){let e,n,s;var r=o[1][0];function u(t,i){return{props:{data:t[3],form:t[2]}}}return r&&(e=P(r,u(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),E(t,n,i),s=!0},p(t,i){if(i&2&&r!==(r=t[1][0])){if(e){N();const c=e;g(c.$$.fragment,1,0,()=>{A(c,1)}),I()}r?(e=P(r,u(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const c={};i&8&&(c.data=t[3]),i&4&&(c.form=t[2]),e.$set(c)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,s;var r=o[1][0];function u(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=P(r,u(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),E(t,n,i),s=!0},p(t,i){if(i&2&&r!==(r=t[1][0])){if(e){N();const c=e;g(c.$$.fragment,1,0,()=>{A(c,1)}),I()}r?(e=P(r,u(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const c={};i&8&&(c.data=t[3]),i&8215&&(c.$$scope={dirty:i,ctx:t}),e.$set(c)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,s;var r=o[1][1];function u(t,i){return{props:{data:t[4],form:t[2]}}}return r&&(e=P(r,u(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),E(t,n,i),s=!0},p(t,i){if(i&2&&r!==(r=t[1][1])){if(e){N();const c=e;g(c.$$.fragment,1,0,()=>{A(c,1)}),I()}r?(e=P(r,u(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const c={};i&16&&(c.data=t[4]),i&4&&(c.form=t[2]),e.$set(c)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[10](null),e&&A(e,t)}}}function V(o){let e,n=o[6]&&C(o);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(h),this.h()},h(){S(e,"id","svelte-announcer"),S(e,"aria-live","assertive"),S(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(s,r){E(s,e,r),n&&n.m(e,null)},p(s,r){s[6]?n?n.p(s,r):(n=C(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&h(e),n&&n.d()}}}function C(o){let e;return{c(){e=K(o[7])},l(n){e=W(n,o[7])},m(n,s){E(n,e,s)},p(n,s){s&128&&z(e,n[7])},d(n){n&&h(e)}}}function te(o){let e,n,s,r,u;const t=[x,$],i=[];function c(a,_){return a[1][1]?0:1}e=c(o),n=i[e]=t[e](o);let l=o[5]&&V(o);return{c(){n.c(),s=q(),l&&l.c(),r=p()},l(a){n.l(a),s=B(a),l&&l.l(a),r=p()},m(a,_){i[e].m(a,_),E(a,s,_),l&&l.m(a,_),E(a,r,_),u=!0},p(a,[_]){let b=e;e=c(a),e===b?i[e].p(a,_):(N(),g(i[b],1,1,()=>{i[b]=null}),I(),n=i[e],n?n.p(a,_):(n=i[e]=t[e](a),n.c()),w(n,1),n.m(s.parentNode,s)),a[5]?l?l.p(a,_):(l=V(a),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},i(a){u||(w(n),u=!0)},o(a){g(n),u=!1},d(a){a&&(h(s),h(r)),i[e].d(a),l&&l.d(a)}}}function ne(o,e,n){let{stores:s}=e,{page:r}=e,{constructors:u}=e,{components:t=[]}=e,{form:i}=e,{data_0:c=null}=e,{data_1:l=null}=e;U(s.page.notify);let a=!1,_=!1,b=null;M(()=>{const f=s.page.subscribe(()=>{a&&(n(6,_=!0),F().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),f});function m(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function v(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return o.$$set=f=>{"stores"in f&&n(8,s=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,u=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,i=f.form),"data_0"in f&&n(3,c=f.data_0),"data_1"in f&&n(4,l=f.data_1)},o.$$.update=()=>{o.$$.dirty&768&&s.page.set(r)},[t,u,i,c,l,a,_,b,s,r,m,k,v]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,j,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>y(()=>import("../nodes/0.Bd4KX4wg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>y(()=>import("../nodes/1.75OjZbUc.js"),__vite__mapDeps([13,1,2,9,4,3]),import.meta.url),()=>y(()=>import("../nodes/2.BwlzfkQl.js"),__vite__mapDeps([14,1,2,15,16,6,8,3,11]),import.meta.url),()=>y(()=>import("../nodes/3.CjKv9S0o.js"),__vite__mapDeps([17,1,2,15,6,5]),import.meta.url),()=>y(()=>import("../nodes/4.Te94UvPh.js"),__vite__mapDeps([18,1,2,5,6,3,8,7,19]),import.meta.url),()=>y(()=>import("../nodes/5.BO1RfMSZ.js"),__vite__mapDeps([20,1,2,7,6,8,3,16,11,10,5,15]),import.meta.url)],ce=[],le={"/":[2],"/contact":[3],"/photos":[4],"/projects":[5]},fe={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{le as dictionary,fe as hooks,re as matchers,ae as nodes,oe as root,ce as server_loads};