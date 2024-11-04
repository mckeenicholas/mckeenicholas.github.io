import{s as Z,C as J,i as K,f as P,v as L,w as T,x as ve,M as O,J as ce,p as oe,e as ye,c as ge,b as ke,N as W,O as C,u as ie,q as se,r as ae,z as Ae,P as Be,A as Ge}from"./scheduler.BTyvKu73.js";import{S as je,i as Ve,g as Pe,b as w,e as Te,t as B,c as Je,a as qe,m as Re,d as Ue}from"./index.BH7PSYXr.js";import{g as ue,a as Ke}from"./spread.CgU5AtxT.js";import{t as De,e as Fe,c as de}from"./utils.sV_qMyFj.js";var be=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,N=e=>!e||typeof e!="object"||Object.keys(e).length===0,He=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function Ne(e,t){e.forEach(function(l){Array.isArray(l)?Ne(l,t):t.push(l)})}function Oe(e){let t=[];return Ne(e,t),t}var Ce=(...e)=>Oe(e).filter(Boolean),Me=(e,t)=>{let l={},o=Object.keys(e),r=Object.keys(t);for(let n of o)if(r.includes(n)){let a=e[n],c=t[n];typeof a=="object"&&typeof c=="object"?l[n]=Me(a,c):Array.isArray(a)||Array.isArray(c)?l[n]=Ce(c,a):l[n]=c+" "+a}else l[n]=e[n];for(let n of r)o.includes(n)||(l[n]=t[n]);return l},me=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),Ie={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},ze=e=>e||void 0,U=(...e)=>ze(Oe(e).filter(Boolean).join(" ")),te=null,z={},re=!1,R=(...e)=>t=>t.twMerge?((!te||re)&&(re=!1,te=N(z)?De:Fe({...z,extend:{theme:z.theme,classGroups:z.classGroups,conflictingClassGroupModifiers:z.conflictingClassGroupModifiers,conflictingClassGroups:z.conflictingClassGroups,...z.extend}})),ze(te(U(e)))):U(e),_e=(e,t)=>{for(let l in t)e.hasOwnProperty(l)?e[l]=U(e[l],t[l]):e[l]=t[l];return e},Le=(e,t)=>{let{extend:l=null,slots:o={},variants:r={},compoundVariants:n=[],compoundSlots:a=[],defaultVariants:c={}}=e,s={...Ie,...t},h=l!=null&&l.base?U(l.base,e?.base):e?.base,i=l!=null&&l.variants&&!N(l.variants)?Me(r,l.variants):r,u=l!=null&&l.defaultVariants&&!N(l.defaultVariants)?{...l.defaultVariants,...c}:c;!N(s.twMergeConfig)&&!He(s.twMergeConfig,z)&&(re=!0,z=s.twMergeConfig);let g=N(l?.slots),k=N(o)?{}:{base:U(e?.base,g&&l?.base),...o},G=g?k:_e({...l?.slots},N(k)?{base:e?.base}:k),E=N(l?.compoundVariants)?n:Ce(l?.compoundVariants,n),M=j=>{if(N(i)&&N(o)&&g)return R(h,j?.class,j?.className)(s);if(E&&!Array.isArray(E))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof E}`);if(a&&!Array.isArray(a))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);let X=(d,m,b=[],p)=>{let _=b;if(typeof m=="string")_=_.concat(me(m).split(" ").map(v=>`${d}:${v}`));else if(Array.isArray(m))_=_.concat(m.reduce((v,y)=>v.concat(`${d}:${y}`),[]));else if(typeof m=="object"&&typeof p=="string"){for(let v in m)if(m.hasOwnProperty(v)&&v===p){let y=m[v];if(y&&typeof y=="string"){let A=me(y);_[p]?_[p]=_[p].concat(A.split(" ").map(V=>`${d}:${V}`)):_[p]=A.split(" ").map(V=>`${d}:${V}`)}else Array.isArray(y)&&y.length>0&&(_[p]=y.reduce((A,V)=>A.concat(`${d}:${V}`),[]))}}return _},D=(d,m=i,b=null,p=null)=>{var _;let v=m[d];if(!v||N(v))return null;let y=(_=p?.[d])!=null?_:j?.[d];if(y===null)return null;let A=be(y),V=Array.isArray(s.responsiveVariants)&&s.responsiveVariants.length>0||s.responsiveVariants===!0,q=u?.[d],S=[];if(typeof A=="object"&&V)for(let[ee,fe]of Object.entries(A)){let we=v[fe];if(ee==="initial"){q=fe;continue}Array.isArray(s.responsiveVariants)&&!s.responsiveVariants.includes(ee)||(S=X(ee,we,S,b))}let Se=A!=null&&typeof A!="object"?A:be(q),$=v[Se||"false"];return typeof S=="object"&&typeof b=="string"&&S[b]?_e(S,$):S.length>0?(S.push($),S):$},Y=()=>i?Object.keys(i).map(d=>D(d,i)):null,x=(d,m)=>{if(!i||typeof i!="object")return null;let b=new Array;for(let p in i){let _=D(p,i,d,m),v=d==="base"&&typeof _=="string"?_:_&&_[d];v&&(b[b.length]=v)}return b},F={};for(let d in j)j[d]!==void 0&&(F[d]=j[d]);let H=(d,m)=>{var b;let p=typeof j?.[d]=="object"?{[d]:(b=j[d])==null?void 0:b.initial}:{};return{...u,...F,...p,...m}},I=(d=[],m)=>{let b=[];for(let{class:p,className:_,...v}of d){let y=!0;for(let[A,V]of Object.entries(v)){let q=H(A,m);if(Array.isArray(V)){if(!V.includes(q[A])){y=!1;break}}else if(q[A]!==V){y=!1;break}}y&&(p&&b.push(p),_&&b.push(_))}return b},f=d=>{let m=I(E,d);if(!Array.isArray(m))return m;let b={};for(let p of m)if(typeof p=="string"&&(b.base=R(b.base,p)(s)),typeof p=="object")for(let[_,v]of Object.entries(p))b[_]=R(b[_],v)(s);return b},Ee=d=>{if(a.length<1)return null;let m={};for(let{slots:b=[],class:p,className:_,...v}of a){if(!N(v)){let y=!0;for(let A of Object.keys(v)){let V=H(A,d)[A];if(V===void 0||(Array.isArray(v[A])?!v[A].includes(V):v[A]!==V)){y=!1;break}}if(!y)continue}for(let y of b)m[y]=m[y]||[],m[y].push([p,_])}return m};if(!N(o)||!g){let d={};if(typeof G=="object"&&!N(G))for(let m of Object.keys(G))d[m]=b=>{var p,_;return R(G[m],x(m,b),((p=f(b))!=null?p:[])[m],((_=Ee(b))!=null?_:[])[m],b?.class,b?.className)(s)};return d}return R(h,Y(),I(E),j?.class,j?.className)(s)},Q=()=>{if(!(!i||typeof i!="object"))return Object.keys(i)};return M.variantKeys=Q(),M.extend=l,M.base=h,M.slots=G,M.variants=i,M.defaultVariants=u,M.compoundSlots=a,M.compoundVariants=E,M};function We(e,t){const l=[];return t.builders.forEach(o=>{const r=o.action(e);r&&l.push(r)}),{destroy:()=>{l.forEach(o=>{o.destroy&&o.destroy()})}}}function pe(e){const t={};return e.forEach(l=>{Object.keys(l).forEach(o=>{o!=="action"&&(t[o]=l[o])})}),t}function Ze(e){let t=e[1]?"a":"button",l,o,r=(e[1]?"a":"button")&&le(e);return{c(){r&&r.c(),l=J()},l(n){r&&r.l(n),l=J()},m(n,a){r&&r.m(n,a),K(n,l,a),o=!0},p(n,a){n[1],t?Z(t,n[1]?"a":"button")?(r.d(1),r=le(n),t=n[1]?"a":"button",r.c(),r.m(l.parentNode,l)):r.p(n,a):(r=le(n),t=n[1]?"a":"button",r.c(),r.m(l.parentNode,l))},i(n){o||(B(r,n),o=!0)},o(n){w(r,n),o=!1},d(n){n&&P(l),r&&r.d(n)}}}function Qe(e){let t=e[1]?"a":"button",l,o,r=(e[1]?"a":"button")&&ne(e);return{c(){r&&r.c(),l=J()},l(n){r&&r.l(n),l=J()},m(n,a){r&&r.m(n,a),K(n,l,a),o=!0},p(n,a){n[1],t?Z(t,n[1]?"a":"button")?(r.d(1),r=ne(n),t=n[1]?"a":"button",r.c(),r.m(l.parentNode,l)):r.p(n,a):(r=ne(n),t=n[1]?"a":"button",r.c(),r.m(l.parentNode,l))},i(n){o||(B(r,n),o=!0)},o(n){w(r,n),o=!1},d(n){n&&P(l),r&&r.d(n)}}}function le(e){let t,l,o,r,n;const a=e[7].default,c=oe(a,e,e[6],null);let s=[{type:l=e[1]?void 0:e[2]},{href:e[1]},{tabindex:"0"},e[5],e[4]],h={};for(let i=0;i<s.length;i+=1)h=T(h,s[i]);return{c(){t=ye(e[1]?"a":"button"),c&&c.c(),this.h()},l(i){t=ge(i,((e[1]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var u=ke(t);c&&c.l(u),u.forEach(P),this.h()},h(){W(e[1]?"a":"button")(t,h)},m(i,u){K(i,t,u),c&&c.m(t,null),e[21](t),o=!0,r||(n=[C(t,"click",e[14]),C(t,"change",e[15]),C(t,"keydown",e[16]),C(t,"keyup",e[17]),C(t,"mouseenter",e[18]),C(t,"mouseleave",e[19])],r=!0)},p(i,u){c&&c.p&&(!o||u&64)&&ie(c,a,i,i[6],o?ae(a,i[6],u,null):se(i[6]),null),W(i[1]?"a":"button")(t,h=ue(s,[(!o||u&6&&l!==(l=i[1]?void 0:i[2]))&&{type:l},(!o||u&2)&&{href:i[1]},{tabindex:"0"},u&32&&i[5],i[4]]))},i(i){o||(B(c,i),o=!0)},o(i){w(c,i),o=!1},d(i){i&&P(t),c&&c.d(i),e[21](null),r=!1,Ae(n)}}}function ne(e){let t,l,o,r,n,a;const c=e[7].default,s=oe(c,e,e[6],null);let h=[{type:l=e[1]?void 0:e[2]},{href:e[1]},{tabindex:"0"},pe(e[3]),e[5],e[4]],i={};for(let u=0;u<h.length;u+=1)i=T(i,h[u]);return{c(){t=ye(e[1]?"a":"button"),s&&s.c(),this.h()},l(u){t=ge(u,((e[1]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,tabindex:!0});var g=ke(t);s&&s.l(g),g.forEach(P),this.h()},h(){W(e[1]?"a":"button")(t,i)},m(u,g){K(u,t,g),s&&s.m(t,null),e[20](t),r=!0,n||(a=[C(t,"click",e[8]),C(t,"change",e[9]),C(t,"keydown",e[10]),C(t,"keyup",e[11]),C(t,"mouseenter",e[12]),C(t,"mouseleave",e[13]),Be(o=We.call(null,t,{builders:e[3]}))],n=!0)},p(u,g){s&&s.p&&(!r||g&64)&&ie(s,c,u,u[6],r?ae(c,u[6],g,null):se(u[6]),null),W(u[1]?"a":"button")(t,i=ue(h,[(!r||g&6&&l!==(l=u[1]?void 0:u[2]))&&{type:l},(!r||g&2)&&{href:u[1]},{tabindex:"0"},g&8&&pe(u[3]),g&32&&u[5],u[4]])),o&&Ge(o.update)&&g&8&&o.update.call(null,{builders:u[3]})},i(u){r||(B(s,u),r=!0)},o(u){w(s,u),r=!1},d(u){u&&P(t),s&&s.d(u),e[20](null),n=!1,Ae(a)}}}function Xe(e){let t,l,o,r;const n=[Qe,Ze],a=[];function c(s,h){return s[3]&&s[3].length?0:1}return t=c(e),l=a[t]=n[t](e),{c(){l.c(),o=J()},l(s){l.l(s),o=J()},m(s,h){a[t].m(s,h),K(s,o,h),r=!0},p(s,[h]){let i=t;t=c(s),t===i?a[t].p(s,h):(Pe(),w(a[i],1,1,()=>{a[i]=null}),Te(),l=a[t],l?l.p(s,h):(l=a[t]=n[t](s),l.c()),B(l,1),l.m(o.parentNode,o))},i(s){r||(B(l),r=!0)},o(s){w(l),r=!1},d(s){s&&P(o),a[t].d(s)}}}function Ye(e,t,l){const o=["href","type","builders","el"];let r=L(t,o),{$$slots:n={},$$scope:a}=t,{href:c=void 0}=t,{type:s=void 0}=t,{builders:h=[]}=t,{el:i=void 0}=t;const u={"data-button-root":""};function g(f){O.call(this,e,f)}function k(f){O.call(this,e,f)}function G(f){O.call(this,e,f)}function E(f){O.call(this,e,f)}function M(f){O.call(this,e,f)}function Q(f){O.call(this,e,f)}function j(f){O.call(this,e,f)}function X(f){O.call(this,e,f)}function D(f){O.call(this,e,f)}function Y(f){O.call(this,e,f)}function x(f){O.call(this,e,f)}function F(f){O.call(this,e,f)}function H(f){ce[f?"unshift":"push"](()=>{i=f,l(0,i)})}function I(f){ce[f?"unshift":"push"](()=>{i=f,l(0,i)})}return e.$$set=f=>{t=T(T({},t),ve(f)),l(5,r=L(t,o)),"href"in f&&l(1,c=f.href),"type"in f&&l(2,s=f.type),"builders"in f&&l(3,h=f.builders),"el"in f&&l(0,i=f.el),"$$scope"in f&&l(6,a=f.$$scope)},[i,c,s,h,u,r,a,n,g,k,G,E,M,Q,j,X,D,Y,x,F,H,I]}let xe=class extends je{constructor(t){super(),Ve(this,t,Ye,Xe,Z,{href:1,type:2,builders:3,el:0})}};function $e(e){let t;const l=e[5].default,o=oe(l,e,e[8],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,n){o&&o.m(r,n),t=!0},p(r,n){o&&o.p&&(!t||n&256)&&ie(o,l,r,r[8],t?ae(l,r[8],n,null):se(r[8]),null)},i(r){t||(B(o,r),t=!0)},o(r){w(o,r),t=!1},d(r){o&&o.d(r)}}}function et(e){let t,l;const o=[{builders:e[3]},{class:de(he({variant:e[1],size:e[2],className:e[0]}))},{type:"button"},e[4]];let r={$$slots:{default:[$e]},$$scope:{ctx:e}};for(let n=0;n<o.length;n+=1)r=T(r,o[n]);return t=new xe({props:r}),t.$on("click",e[6]),t.$on("keydown",e[7]),{c(){Je(t.$$.fragment)},l(n){qe(t.$$.fragment,n)},m(n,a){Re(t,n,a),l=!0},p(n,[a]){const c=a&31?ue(o,[a&8&&{builders:n[3]},a&7&&{class:de(he({variant:n[1],size:n[2],className:n[0]}))},o[2],a&16&&Ke(n[4])]):{};a&256&&(c.$$scope={dirty:a,ctx:n}),t.$set(c)},i(n){l||(B(t.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),l=!1},d(n){Ue(t,n)}}}function tt(e,t,l){const o=["class","variant","size","builders"];let r=L(t,o),{$$slots:n={},$$scope:a}=t,{class:c=void 0}=t,{variant:s="default"}=t,{size:h="default"}=t,{builders:i=[]}=t;function u(k){O.call(this,e,k)}function g(k){O.call(this,e,k)}return e.$$set=k=>{t=T(T({},t),ve(k)),l(4,r=L(t,o)),"class"in k&&l(0,c=k.class),"variant"in k&&l(1,s=k.variant),"size"in k&&l(2,h=k.size),"builders"in k&&l(3,i=k.builders),"$$scope"in k&&l(8,a=k.$$scope)},[c,s,h,i,r,n,u,g,a]}class st extends je{constructor(t){super(),Ve(this,t,tt,et,Z,{class:0,variant:1,size:2,builders:3})}}const he=Le({base:"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"background text-primary-foreground hover:bg-secondary",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{st as B};
