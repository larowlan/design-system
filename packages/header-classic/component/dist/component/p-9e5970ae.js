let t,e,n=0,o=!1,l=!1,s=!1,r=!1;const c="undefined"!=typeof window?window:{},i=c.document||{head:{}},a={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,m=t=>u.get(t),p=(t,e)=>u.set(e.l=t,e),$=(t,e)=>e in t,d=t=>console.error(t),y=new Map,h=new Map,w=[],b=[],v=[],_=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&a.t?k(j):a.raf(j))},g=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(l){d(l)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},j=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){d(e)}t.length=0})(w);const t=2==(6&a.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;g(b,t),g(v,t),b.length>0&&(v.push(...b),b.length=0),(o=w.length+b.length+v.length>0)?a.raf(j):n=0},k=t=>Promise.resolve().then(t),M=_(b,!0),R={},S=t=>"object"==(t=typeof t)||"function"===t,P=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_component("./p-73bc5e11.js").then(()=>{a.s=c.__stencil_cssshim}),U=()=>{a.s=c.__stencil_cssshim;const t=Array.from(i.querySelectorAll("script")).find(t=>new RegExp("/component(\\.esm)?\\.js($|\\?|#)").test(t.src)||"component"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href)).href,L(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_component("./p-3b66a627.js").then(()=>e))},L=(t,e)=>{const n=`__sc_import_${"component".replace(/\s|-/g,"_")}`;try{c[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const l=new Map;c[n]=o=>{const s=new URL(o,t).href;let r=l.get(s);if(!r){const t=i.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(c[n].m),t.remove()}}),l.set(s,r),i.head.appendChild(t)}return r}}},O=new WeakMap,x=t=>"sc-"+t,T=(t,e,...n)=>{let o=null,l=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof t&&!S(o))&&(o=String(o)),s&&r?c[c.length-1].i+=o:c.push(s?C(null,o):o),r=s)};if(i(n),e){e.name&&(l=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,A);const a=C(t,null);return a.u=e,c.length>0&&(a.p=c),a.$=l,a},C=(t,e)=>({t:0,h:t,i:e,v:null,p:null,u:null,$:null}),E={},A={forEach:(t,e)=>t.map(F).forEach(e),map:(t,e)=>t.map(F).map(e).map(H)},F=t=>({vattrs:t.u,vchildren:t.p,vkey:t._,vname:t.$,vtag:t.h,vtext:t.i}),H=t=>{const e=C(t.vtag,t.vtext);return e.u=t.vattrs,e.p=t.vchildren,e._=t.vkey,e.$=t.vname,e},N=(t,e,n,o,l,s)=>{if(n===o)return;let r=$(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,l=q(n),s=q(o);e.remove(...l.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!l.includes(t)))}else if(r||"o"!==e[0]||"n"!==e[1]){const c=S(o);if((r||c&&null!==o)&&!l)try{if(t.tagName.includes("-"))t[e]=o;else{let l=null==o?"":o;"list"===e?r=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(f){}null==o||!1===o?t.removeAttribute(e):(!r||4&s||l)&&!c&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):$(c,i)?i.slice(2):i[2]+e.slice(3),n&&a.rel(t,e,n,!1),o&&a.ael(t,e,o,!1)},W=/\s/,q=t=>t?t.split(W):[],B=(t,e,n,o)=>{const l=11===e.v.nodeType&&e.v.host?e.v.host:e.v,s=t&&t.u||R,r=e.u||R;for(o in s)o in r||N(l,o,s[o],void 0,n,e.t);for(o in r)N(l,o,s[o],r[o],n,e.t)},V=(n,o,s)=>{let c,a,f,u=o.p[s],m=0;if(l||(r=!0,"slot"===u.h&&(u.t|=u.p?2:1)),null!==u.i)c=u.v=i.createTextNode(u.i);else if(1&u.t)c=u.v=i.createTextNode("");else if(c=u.v=i.createElement(2&u.t?"slot-fb":u.h),B(null,u,!1),u.p)for(m=0;m<u.p.length;++m)a=V(n,u,m),a&&c.appendChild(a);return c["s-hn"]=e,3&u.t&&(c["s-sr"]=!0,c["s-cr"]=t,c["s-sn"]=u.$||"",f=n&&n.p&&n.p[s],f&&f.h===u.h&&n.v&&z(n.v,!1)),c},z=(t,n)=>{a.t|=1;const o=t.childNodes;for(let l=o.length-1;l>=0;l--){const t=o[l];t["s-hn"]!==e&&t["s-ol"]&&(K(t).insertBefore(t,J(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),n&&z(t,n)}a.t&=-2},D=(t,e,n,o,l,s)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;l<=s;++l)o[l]&&(r=V(null,n,l),r&&(o[l].v=r,c.insertBefore(r,J(e))))},G=(t,e,n,o,l)=>{for(;e<=n;++e)(o=t[e])&&(s=!0,(l=o.v)["s-ol"]?l["s-ol"].remove():z(l,!0),l.remove())},I=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),J=t=>t&&t["s-ol"]||t,K=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Q=(t,e)=>{const n=e.v=t.v,o=t.p,l=e.p,s=e.i;let r;null===s?("slot"===e.h||B(t,e,!1),null!==o&&null!==l?((t,e,n,o)=>{let l,s=0,r=0,c=e.length-1,i=e[0],a=e[c],f=o.length-1,u=o[0],m=o[f];for(;s<=c&&r<=f;)null==i?i=e[++s]:null==a?a=e[--c]:null==u?u=o[++r]:null==m?m=o[--f]:I(i,u)?(Q(i,u),i=e[++s],u=o[++r]):I(a,m)?(Q(a,m),a=e[--c],m=o[--f]):I(i,m)?("slot"!==i.h&&"slot"!==m.h||z(i.v.parentNode,!1),Q(i,m),t.insertBefore(i.v,a.v.nextSibling),i=e[++s],m=o[--f]):I(a,u)?("slot"!==i.h&&"slot"!==m.h||z(a.v.parentNode,!1),Q(a,u),t.insertBefore(a.v,i.v),a=e[--c],u=o[++r]):(l=V(e&&e[r],n,r),u=o[++r],l&&K(i.v).insertBefore(l,J(i.v)));s>c?D(t,null==o[f+1]?null:o[f+1].v,n,o,r,f):r>f&&G(e,s,c)})(n,o,e,l):null!==l?(null!==t.i&&(n.textContent=""),D(n,null,e,l,0,l.length-1)):null!==o&&G(o,0,o.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:t.i!==s&&(n.data=s)},X=t=>{let e,n,o,l,s,r,c=t.childNodes;for(n=0,o=c.length;n<o;n++)if(e=c[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,l=0;l<o;l++)if(c[l]["s-hn"]!==e["s-hn"])if(r=c[l].nodeType,""!==s){if(1===r&&s===c[l].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[l].textContent.trim()){e.hidden=!0;break}X(e)}},Y=[],Z=t=>{let e,n,o,l,r,c,i=0,a=t.childNodes,f=a.length;for(;i<f;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"]))for(o=n.parentNode.childNodes,l=e["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(tt(n,l)?(r=Y.find(t=>t.g===n),s=!0,n["s-sn"]=n["s-sn"]||l,r?r.j=e:Y.push({j:e,g:n}),n["s-sr"]&&Y.forEach(t=>{tt(t.g,n["s-sn"])&&(r=Y.find(t=>t.g===n),r&&(t.j=r.j))})):Y.some(t=>t.g===n)||Y.push({g:n}));1===e.nodeType&&Z(e)}},tt=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,et=(t,e)=>{e&&!t.k&&e["s-p"].push(new Promise(e=>t.k=e))},nt=(t,e,n,o)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.l,s=()=>ot(t,e,n,l,o);return et(e,e.M),ct(void 0,()=>M(s))},ot=(n,o,c,f,u)=>{const m=n["s-rc"];u&&((t,e)=>{((t,e)=>{let n=x(e.R),o=h.get(n);if(t=11===t.nodeType?t:i,o)if("string"==typeof o){let e,l=O.get(t=t.head||t);l||O.set(t,l=new Set),l.has(n)||(e=i.createElement("style"),e.innerHTML=o,t.insertBefore(e,t.querySelector("link")),l&&l.add(n))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o])})(t.getRootNode(),e)})(n,c),((n,o,c,f)=>{e=n.tagName;const u=o.S||C(null,null),m=(p=f)&&p.h===E?f:T(null,null,f);var p;if(m.h=null,m.t|=4,o.S=m,m.v=u.v=n,t=n["s-cr"],l=!1,s=!1,Q(u,m),r){let t,e,n,o,l,s;Z(m.v);let r=0;for(;r<Y.length;r++)t=Y[r],e=t.g,e["s-ol"]||(n=i.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(a.t|=1,r=0;r<Y.length;r++)if(t=Y[r],e=t.g,t.j){for(o=t.j.parentNode,l=t.j.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&o===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){l=s;break}(!l&&o!==e.parentNode||e.nextSibling!==l)&&e!==l&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),o.insertBefore(e,l))}else 1===e.nodeType&&(e.hidden=!0);a.t&=-2}s&&X(m.v),Y.length=0})(n,o,0,lt(f)),o.t&=-17,o.t|=2,m&&(m.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>st(n,o,c);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},lt=t=>{try{t=t.render()}catch(e){d(e)}return t},st=(t,e,n)=>{const o=e.M;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.P(t),o||rt()),e.k&&(e.k(),e.k=void 0),512&e.t&&k(()=>nt(t,e,n,!1)),e.t&=-517},rt=()=>{i.documentElement.classList.add("hydrated"),a.t|=2},ct=(t,e)=>t&&t.then?t.then(e):e(),it=(t,e,n)=>{if(e.U){const o=Object.entries(e.U),l=t.prototype;if(o.forEach(([t,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(l,t,{get(){return e=t,m(this).L.get(e);var e},set(n){((t,e,n,o)=>{const l=m(this),s=l.O,r=l.L.get(e),c=l.t,i=l.l;var a,f;f=o.U[e][0],(n=null==(a=n)||S(a)?a:4&f?"false"!==a&&(""===a||!!a):a)===r||8&c&&void 0!==r||(l.L.set(e,n),i&&2==(18&c)&&nt(s,l,o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;l.attributeChangedCallback=function(t,n,o){a.jmp(()=>{const n=e.get(t);this[n]=(null!==o||"boolean"!=typeof this[n])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,n])=>{const o=n[1]||t;return e.set(o,t),o})}}return t},at=(t,e={})=>{const n=[],o=e.exclude||[],l=i.head,s=c.customElements,r=l.querySelector("meta[charset]"),p=i.createElement("style"),$=[];i.querySelectorAll("[sty-id]");let w,b=!0;Object.assign(a,e),a.o=new URL(e.resourcesUrl||"./",i.baseURI).href,e.syncQueue&&(a.t|=4),t.forEach(t=>t[1].forEach(e=>{const l={t:e[0],R:e[1],U:e[2],T:e[3]};l.U=e[2];const r=l.R,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,O:t,L:new Map};e.C=new Promise(t=>e.P=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this)}connectedCallback(){w&&(clearTimeout(w),w=null),b?$.push(this):a.jmp(()=>((t,e)=>{if(0==(1&a.t)){const n=()=>{},o=m(t);if(!(1&o.t)){o.t|=1,4&e.t&&(t=>{const e=t["s-cr"]=i.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){et(o,o.M=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),k(()=>(async(t,e,n,o,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=(t=>{const e=t.R.replace(/-/g,"_"),n=t.A,o=y.get(n);return o?o[e]:__sc_import_component(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),d)})(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(it(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(c){d(c)}e.t&=-9,t()}const t=x(n.R);if(!h.has(t)&&l.style){const e=()=>{};((t,e,n)=>{let o=h.get(t);f&&n?(o=o||new CSSStyleSheet,o.replace(e)):o=e,h.set(t,o)})(t,l.style,!!(1&n.t)),e()}}const s=e.M,r=()=>nt(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,o,e))}n()}})(this,l))}disconnectedCallback(){a.jmp(()=>{})}forceUpdate(){((t,e)=>{{const n=m(t);n.O.isConnected&&2==(18&n.t)&&nt(t,n,e,!1)}})(this,l)}componentOnReady(){return m(this).C}};l.A=t[0],o.includes(r)||s.get(r)||(n.push(r),s.define(r,it(c,l,1)))})),p.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),l.insertBefore(p,r?r.nextSibling:l.firstChild),b=!1,$.length>0?$.forEach(t=>t.connectedCallback()):a.jmp(()=>w=setTimeout(rt,30,"timeout"))};export{E as H,P as a,at as b,T as h,U as p,p as r};