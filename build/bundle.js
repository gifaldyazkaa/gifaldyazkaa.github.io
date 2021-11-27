var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function s(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function m(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function v(){return w("")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:x(t,o,e[o])}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}class j{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)f(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}function C(t){c=t}const _=[],A=[],z=[],S=[],I=Promise.resolve();let L=!1;function M(t){z.push(t)}let O=!1;const E=new Set;function T(){if(!O){O=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];C(e),D(e.$$)}for(C(null),_.length=0;A.length;)A.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];E.has(e)||(E.add(e),e())}z.length=0}while(_.length);for(;S.length;)S.pop()();L=!1,O=!1,E.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const G=new Set;let F;function P(){F={r:0,c:[],p:F}}function H(){F.r||r(F.c),F=F.p}function U(t,e){t&&t.i&&(G.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),F.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function W(t){t&&t.c()}function R(t,e,o,i){const{fragment:a,on_mount:c,on_destroy:s,after_update:m}=t.$$;a&&a.m(e,o),i||M((()=>{const e=c.map(n).filter(l);s?s.push(...e):r(e),t.$$.on_mount=[]})),m.forEach(M)}function X(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(_.push(t),L||(L=!0,I.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,l,i,a,s,m,p=[-1]){const d=c;C(e);const u=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:n.target||d.$$.root};m&&m(u.root);let f=!1;if(u.ctx=l?l(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return u.ctx&&a(u.ctx[t],u.ctx[t]=r)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](r),f&&q(e,t)),n})):[],u.update(),f=!0,r(u.before_update),u.fragment=!!i&&i(u.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);u.fragment&&u.fragment.l(t),t.forEach(h)}else u.fragment&&u.fragment.c();n.intro&&U(e.$$.fragment),R(e,n.target,n.anchor,n.customElement),T()}C(d)}class J{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(n){let o,r,l=[{"aria-hidden":n[2]},{"aria-label":n[1]},{role:"img"},n[3]],i={};for(let t=0;t<l.length;t+=1)i=e(i,l[t]);return{c(){o=$("span"),r=w(n[0]),k(o,i)},m(t,e){f(t,o,e),u(o,r)},p(t,[e]){1&e&&N(r,t[0]),k(o,i=function(t,e){const n={},o={},r={$$scope:1};let l=t.length;for(;l--;){const i=t[l],a=e[l];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[l]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(l,[{"aria-hidden":t[2]},2&e&&{"aria-label":t[1]},{role:"img"},t[3]]))},i:t,o:t,d(t){t&&h(o)}}}function V(t,n,o){let{symbol:r}=n,{label:l=null}=n;const i=!l||null,a={...n};return delete a.symbol,delete a.label,t.$$set=t=>{o(4,n=e(e({},n),p(t))),"symbol"in t&&o(0,r=t.symbol),"label"in t&&o(1,l=t.label)},n=p(n),[r,l,i,a]}class K extends J{constructor(t){super(),Y(this,t,V,Q,i,{symbol:0,label:1})}}function Z(e){let n,o,r,l,i,a,c,s,m;return i=new K({props:{symbol:"👋",label:"wave"}}),{c(){n=$("div"),o=$("h1"),r=$("a"),r.textContent="#",l=b(),W(i.$$.fragment),a=w("\n    Hello there!"),c=b(),s=$("p"),s.textContent="Hello there! Welcome to My Personal Website!",x(r,"href","#greetings"),x(r,"class","hashtag"),x(n,"id","greetings")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(o,l),R(i,o,null),u(o,a),u(n,c),u(n,s),m=!0},p:t,i(t){m||(U(i.$$.fragment,t),m=!0)},o(t){B(i.$$.fragment,t),m=!1},d(t){t&&h(n),X(i)}}}class tt extends J{constructor(t){super(),Y(this,t,null,Z,i,{})}}function et(t){let e,n,o,r,l,i,a,c,s,m,p,d,g,y,v,k,j,C;return l=new K({props:{symbol:"❔",label:"question"}}),{c(){e=$("div"),n=$("h1"),o=$("a"),o.textContent="#",r=b(),W(l.$$.fragment),i=w(" Who am I"),a=b(),c=$("p"),s=w("I'm "),m=w(t[0]),p=w(", "),d=w(t[1]),g=w(" from "),y=w(t[2]),v=w(". Besides being a developer,\n    I have some interest to "),k=w(t[3]),j=w(". Nice to meet you!"),x(o,"href","#introduction"),x(o,"class","hashtag"),x(n,"class","svelte-1e92ilb"),x(e,"id","introduction"),x(e,"class","svelte-1e92ilb")},m(t,h){f(t,e,h),u(e,n),u(n,o),u(n,r),R(l,n,null),u(n,i),u(e,a),u(e,c),u(c,s),u(c,m),u(c,p),u(c,d),u(c,g),u(c,y),u(c,v),u(c,k),u(c,j),C=!0},p(t,[e]){(!C||1&e)&&N(m,t[0]),(!C||2&e)&&N(d,t[1]),(!C||4&e)&&N(y,t[2]),(!C||8&e)&&N(k,t[3])},i(t){C||(U(l.$$.fragment,t),C=!0)},o(t){B(l.$$.fragment,t),C=!1},d(t){t&&h(e),X(l)}}}function nt(t,e,n){let{propsName:o,propsRole:r,propsCountry:l,propsInterest:i}=e;return t.$$set=t=>{"propsName"in t&&n(0,o=t.propsName),"propsRole"in t&&n(1,r=t.propsRole),"propsCountry"in t&&n(2,l=t.propsCountry),"propsInterest"in t&&n(3,i=t.propsInterest)},[o,r,l,i]}class ot extends J{constructor(t){super(),Y(this,t,nt,et,i,{propsName:0,propsRole:1,propsCountry:2,propsInterest:3})}}function rt(t,e,n){const o=t.slice();return o[1]=e[n].emoji,o[2]=e[n].emoji_label,o[3]=e[n].name,o[4]=e[n].url,o[5]=e[n].tooltip_text,o[7]=n,o}function lt(t){let e,n,o,r,l,i,a,c,s,m,p,d=t[7]+1+"",g=t[3]+"";return l=new K({props:{symbol:t[1],label:t[2]}}),{c(){e=$("div"),n=$("a"),o=w(d),r=w(". "),W(l.$$.fragment),i=b(),a=w(g),s=b(),x(n,"href",c=t[4]),x(n,"class","links svelte-1sb8ynx"),x(e,"data-tooltip",m=t[5])},m(t,c){f(t,e,c),u(e,n),u(n,o),u(n,r),R(l,n,null),u(n,i),u(n,a),u(e,s),p=!0},p(t,o){const r={};1&o&&(r.symbol=t[1]),1&o&&(r.label=t[2]),l.$set(r),(!p||1&o)&&g!==(g=t[3]+"")&&N(a,g),(!p||1&o&&c!==(c=t[4]))&&x(n,"href",c),(!p||1&o&&m!==(m=t[5]))&&x(e,"data-tooltip",m)},i(t){p||(U(l.$$.fragment,t),p=!0)},o(t){B(l.$$.fragment,t),p=!1},d(t){t&&h(e),X(l)}}}function it(t){let e,n,o,r,l,i,a,c,s,m;l=new K({props:{symbol:"📚",label:"books"}});let p=t[0],d=[];for(let e=0;e<p.length;e+=1)d[e]=lt(rt(t,p,e));const y=t=>B(d[t],1,1,(()=>{d[t]=null}));return{c(){e=$("div"),n=$("h1"),o=$("a"),o.textContent="#",r=b(),W(l.$$.fragment),i=w(" Projects"),a=b(),c=$("p"),c.textContent="Here are some lists of My Projects!",s=b();for(let t=0;t<d.length;t+=1)d[t].c();x(o,"href","#projects"),x(o,"class","hashtag"),x(e,"id","projects"),x(e,"class","svelte-1sb8ynx")},m(t,p){f(t,e,p),u(e,n),u(n,o),u(n,r),R(l,n,null),u(n,i),u(e,a),u(e,c),u(e,s);for(let t=0;t<d.length;t+=1)d[t].m(e,null);m=!0},p(t,[n]){if(1&n){let o;for(p=t[0],o=0;o<p.length;o+=1){const r=rt(t,p,o);d[o]?(d[o].p(r,n),U(d[o],1)):(d[o]=lt(r),d[o].c(),U(d[o],1),d[o].m(e,null))}for(P(),o=p.length;o<d.length;o+=1)y(o);H()}},i(t){if(!m){U(l.$$.fragment,t);for(let t=0;t<p.length;t+=1)U(d[t]);m=!0}},o(t){B(l.$$.fragment,t),d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)B(d[t]);m=!1},d(t){t&&h(e),X(l),g(d,t)}}}function at(t,e,n){let{propsProject:o}=e;return t.$$set=t=>{"propsProject"in t&&n(0,o=t.propsProject)},[o]}class ct extends J{constructor(t){super(),Y(this,t,at,it,i,{propsProject:0})}}function st(e){let n,o,r,l,i,a,c,s,m,p,d,g,y,v,k,N,j,C,_,A,z,S,I,L,M,O,E,T,D=e[0].family+"",G=e[0].name+"",F=e[1].name+"",P=e[2].name+"",H=e[3].name+"";return i=new K({props:{symbol:"🖥️",label:"computer"}}),d=new K({props:{symbol:e[0].emoji,label:e[0].emojiLabel}}),C=new K({props:{symbol:e[1].emoji,label:e[1].emojiLabel}}),{c(){n=$("div"),o=$("h1"),r=$("a"),r.textContent="#",l=b(),W(i.$$.fragment),a=w(" Environments"),c=b(),s=$("p"),m=w("Now, I've used "),p=$("a"),W(d.$$.fragment),g=b(),y=w(D),v=b(),k=w(G),N=w("\n    for Daily-use. But i have installed\n    "),j=$("a"),W(C.$$.fragment),_=b(),A=w(F),z=w("\n    too at My Machine. For Code Editor, I Mostly use\n    "),S=$("a"),I=w(P),L=w(", Sometimes i\n    used\n    "),M=$("a"),O=w(H),E=w(" when editing Big\n    and Laggy stuffs."),x(r,"href","#environments"),x(r,"class","hashtag"),x(p,"href",e[0].url),x(p,"class","links svelte-b3dhy1"),x(j,"href",e[1].url),x(j,"class","links svelte-b3dhy1"),x(S,"href",e[2].url),x(S,"class","links svelte-b3dhy1"),x(M,"href",e[3].url),x(M,"class","links svelte-b3dhy1"),x(n,"id","environments"),x(n,"class","svelte-b3dhy1")},m(t,e){f(t,n,e),u(n,o),u(o,r),u(o,l),R(i,o,null),u(o,a),u(n,c),u(n,s),u(s,m),u(s,p),R(d,p,null),u(p,g),u(p,y),u(p,v),u(p,k),u(s,N),u(s,j),R(C,j,null),u(j,_),u(j,A),u(s,z),u(s,S),u(S,I),u(s,L),u(s,M),u(M,O),u(s,E),T=!0},p:t,i(t){T||(U(i.$$.fragment,t),U(d.$$.fragment,t),U(C.$$.fragment,t),T=!0)},o(t){B(i.$$.fragment,t),B(d.$$.fragment,t),B(C.$$.fragment,t),T=!1},d(t){t&&h(n),X(i),X(d),X(C)}}}function mt(t,e,n){let{propsData:o}=e;const r=o.os[0],l=o.os[1],i=o.codeEditor[0],a=o.codeEditor[1];return t.$$set=t=>{"propsData"in t&&n(4,o=t.propsData)},[r,l,i,a,o]}class pt extends J{constructor(t){super(),Y(this,t,mt,st,i,{propsData:4})}}function dt(t,e,n){const o=t.slice();return o[2]=e[n].name,o[3]=e[n].url,o[4]=e[n].badgeUrl,o}function ut(t){let e,n,o,r,l;return{c(){e=$("a"),n=$("img"),s(n.src,o=t[4])||x(n,"src",o),x(n,"alt",r=t[2]),x(n,"class","svelte-ac4wiv"),x(e,"href",l=t[3]),x(e,"class","links badges svelte-ac4wiv")},m(t,o){f(t,e,o),u(e,n)},p(t,i){2&i&&!s(n.src,o=t[4])&&x(n,"src",o),2&i&&r!==(r=t[2])&&x(n,"alt",r),2&i&&l!==(l=t[3])&&x(e,"href",l)},d(t){t&&h(e)}}}function ft(t){let e,n,o,r,l,i,a,c,s,m,p,d,y,v,k;l=new K({props:{symbol:"📬",label:"mailbox"}});let j=t[1],C=[];for(let e=0;e<j.length;e+=1)C[e]=ut(dt(t,j,e));return d=new K({props:{symbol:"📩",label:"envelope"}}),{c(){e=$("div"),n=$("h1"),o=$("a"),o.textContent="#",r=b(),W(l.$$.fragment),i=w(" Reach me"),a=b(),c=$("p"),c.textContent="Get in touch with me, and Let's talk together! You can reach me at below",s=b();for(let t=0;t<C.length;t+=1)C[t].c();m=b(),p=$("p"),W(d.$$.fragment),y=w(" E-mail : "),v=w(t[0]),x(o,"href","#reach-me"),x(o,"class","hashtag"),x(p,"id","e-mail"),x(p,"class","svelte-ac4wiv"),x(e,"id","reach-me"),x(e,"class","svelte-ac4wiv")},m(t,h){f(t,e,h),u(e,n),u(n,o),u(n,r),R(l,n,null),u(n,i),u(e,a),u(e,c),u(e,s);for(let t=0;t<C.length;t+=1)C[t].m(e,null);u(e,m),u(e,p),R(d,p,null),u(p,y),u(p,v),k=!0},p(t,[n]){if(2&n){let o;for(j=t[1],o=0;o<j.length;o+=1){const r=dt(t,j,o);C[o]?C[o].p(r,n):(C[o]=ut(r),C[o].c(),C[o].m(e,m))}for(;o<C.length;o+=1)C[o].d(1);C.length=j.length}(!k||1&n)&&N(v,t[0])},i(t){k||(U(l.$$.fragment,t),U(d.$$.fragment,t),k=!0)},o(t){B(l.$$.fragment,t),B(d.$$.fragment,t),k=!1},d(t){t&&h(e),X(l),g(C,t),X(d)}}}function ht(t,e,n){let{propsMail:o,propsUrl:r}=e;return t.$$set=t=>{"propsMail"in t&&n(0,o=t.propsMail),"propsUrl"in t&&n(1,r=t.propsUrl)},[o,r]}class gt extends J{constructor(t){super(),Y(this,t,ht,ft,i,{propsMail:0,propsUrl:1})}}const $t=parseFloat;function yt(t,e=";"){let n;if(Array.isArray(t))n=t.filter((t=>t));else{n=[];for(const e in t)t[e]&&n.push(`${e}:${t[e]}`)}return n.join(e)}function wt(t){let e,n,o,r,l,i,a;function c(t,e){return"string"==typeof t[7][4]?vt:bt}let s=c(t),m=s(t);return{c(){e=y("svg"),n=y("g"),o=y("g"),m.c(),x(o,"transform",t[10]),x(n,"transform",r=`translate(${t[7][0]/2} ${t[7][1]/2})`),x(n,"transform-origin",l=t[7][0]/4+" 0"),x(e,"id",t[0]),x(e,"class",i=d(t[8])+" svelte-1cj2gr0"),x(e,"style",t[9]),x(e,"viewBox",a=`0 0 ${t[7][0]} ${t[7][1]}`),x(e,"aria-hidden","true"),x(e,"role","img"),x(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){f(t,e,r),u(e,n),u(n,o),m.m(o,null)},p(t,p){s===(s=c(t))&&m?m.p(t,p):(m.d(1),m=s(t),m&&(m.c(),m.m(o,null))),1024&p&&x(o,"transform",t[10]),128&p&&r!==(r=`translate(${t[7][0]/2} ${t[7][1]/2})`)&&x(n,"transform",r),128&p&&l!==(l=t[7][0]/4+" 0")&&x(n,"transform-origin",l),1&p&&x(e,"id",t[0]),256&p&&i!==(i=d(t[8])+" svelte-1cj2gr0")&&x(e,"class",i),512&p&&x(e,"style",t[9]),128&p&&a!==(a=`0 0 ${t[7][0]} ${t[7][1]}`)&&x(e,"viewBox",a)},d(t){t&&h(e),m.d()}}}function bt(t){let e,n,o,r,l,i,a,c,s,m;return{c(){e=y("path"),i=y("path"),x(e,"d",n=t[7][4][0]),x(e,"fill",o=t[3]||t[1]||"currentColor"),x(e,"fill-opacity",r=0!=t[6]?t[4]:t[5]),x(e,"transform",l=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),x(i,"d",a=t[7][4][1]),x(i,"fill",c=t[2]||t[1]||"currentColor"),x(i,"fill-opacity",s=0!=t[6]?t[5]:t[4]),x(i,"transform",m=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){f(t,e,n),f(t,i,n)},p(t,p){128&p&&n!==(n=t[7][4][0])&&x(e,"d",n),10&p&&o!==(o=t[3]||t[1]||"currentColor")&&x(e,"fill",o),112&p&&r!==(r=0!=t[6]?t[4]:t[5])&&x(e,"fill-opacity",r),128&p&&l!==(l=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&x(e,"transform",l),128&p&&a!==(a=t[7][4][1])&&x(i,"d",a),6&p&&c!==(c=t[2]||t[1]||"currentColor")&&x(i,"fill",c),112&p&&s!==(s=0!=t[6]?t[5]:t[4])&&x(i,"fill-opacity",s),128&p&&m!==(m=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&x(i,"transform",m)},d(t){t&&h(e),t&&h(i)}}}function vt(t){let e,n,o,r;return{c(){e=y("path"),x(e,"d",n=t[7][4]),x(e,"fill",o=t[1]||t[2]||"currentColor"),x(e,"transform",r=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){f(t,e,n)},p(t,l){128&l&&n!==(n=t[7][4])&&x(e,"d",n),6&l&&o!==(o=t[1]||t[2]||"currentColor")&&x(e,"fill",o),128&l&&r!==(r=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&x(e,"transform",r)},d(t){t&&h(e)}}}function xt(e){let n,o=e[7][4]&&wt(e);return{c(){o&&o.c(),n=v()},m(t,e){o&&o.m(t,e),f(t,n,e)},p(t,[e]){t[7][4]?o?o.p(t,e):(o=wt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&h(n)}}}function kt(t,e,n){let o,r,l,i,{class:a=""}=e,{id:c=""}=e,{style:s=""}=e,{icon:m}=e,{size:p=""}=e,{color:d=""}=e,{fw:u=!1}=e,{pull:f=""}=e,{scale:h=1}=e,{translateX:g=0}=e,{translateY:$=0}=e,{rotate:y=""}=e,{flip:w=!1}=e,{spin:b=!1}=e,{pulse:v=!1}=e,{primaryColor:x=""}=e,{secondaryColor:k=""}=e,{primaryOpacity:N=1}=e,{secondaryOpacity:j=.4}=e,{swapOpacity:C=!1}=e;return t.$$set=t=>{"class"in t&&n(11,a=t.class),"id"in t&&n(0,c=t.id),"style"in t&&n(12,s=t.style),"icon"in t&&n(13,m=t.icon),"size"in t&&n(14,p=t.size),"color"in t&&n(1,d=t.color),"fw"in t&&n(15,u=t.fw),"pull"in t&&n(16,f=t.pull),"scale"in t&&n(17,h=t.scale),"translateX"in t&&n(18,g=t.translateX),"translateY"in t&&n(19,$=t.translateY),"rotate"in t&&n(20,y=t.rotate),"flip"in t&&n(21,w=t.flip),"spin"in t&&n(22,b=t.spin),"pulse"in t&&n(23,v=t.pulse),"primaryColor"in t&&n(2,x=t.primaryColor),"secondaryColor"in t&&n(3,k=t.secondaryColor),"primaryOpacity"in t&&n(4,N=t.primaryOpacity),"secondaryOpacity"in t&&n(5,j=t.secondaryOpacity),"swapOpacity"in t&&n(6,C=t.swapOpacity)},t.$$.update=()=>{8192&t.$$.dirty&&n(7,o=m&&m.icon||[0,0,"",[],""]),12584960&t.$$.dirty&&n(8,r=yt([a,"svelte-fa",b&&"spin",v&&"pulse"]," ")),118784&t.$$.dirty&&n(9,l=function(t,e,n,o){let r,l,i,a,c,s="-.125em";return o&&(c="center",l="1.25em"),n&&(r=n),e&&("lg"==e?(a="1.33333em",i=".75em",s="-.225em"):a="xs"==e?".75em":"sm"==e?".875em":e.replace("x","em")),yt([yt({float:r,width:l,height:"1em","line-height":i,"font-size":a,"text-align":c,"vertical-align":s,"transform-origin":"center",overflow:"visible"}),t])}(s,p,f,u)),4063232&t.$$.dirty&&n(10,i=function(t,e,n,o,r,l=1,i="",a=""){let c=1,s=1;return r&&("horizontal"==r?c=-1:"vertical"==r?s=-1:c=s=-1),yt([`translate(${$t(e)*l}${i},${$t(n)*l}${i})`,`scale(${c*$t(t)},${s*$t(t)})`,o&&`rotate(${o}${a})`]," ")}(h,g,$,y,w,512))},[c,d,x,k,N,j,C,o,r,l,i,a,s,m,p,u,f,h,g,$,y,w,b,v]}class Nt extends J{constructor(t){super(),Y(this,t,kt,xt,i,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}
/*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var jt={prefix:"fas",iconName:"moon",icon:[512,512,[],"f186","M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"]},Ct={prefix:"fas",iconName:"sun",icon:[512,512,[],"f185","M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"]};function _t(e){let n,o;return n=new Nt({props:{icon:jt}}),{c(){W(n.$$.fragment)},m(t,e){R(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){X(n,t)}}}function At(e){let n,o;return n=new Nt({props:{icon:Ct}}),{c(){W(n.$$.fragment)},m(t,e){R(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){X(n,t)}}}function zt(t){let e,n,o,r,l,i,a;const c=[At,_t],s=[];function m(t,e){return t[0]?0:1}return o=m(t),r=s[o]=c[o](t),{c(){e=$("div"),n=$("button"),r.c(),x(n,"id","toggleBtn"),x(n,"class","svelte-m73254"),x(e,"id","btn-toggle"),x(e,"class","svelte-m73254")},m(r,c){var m,p,d,h;f(r,e,c),u(e,n),s[o].m(n,null),l=!0,i||(m=n,p="click",d=t[1],m.addEventListener(p,d,h),a=()=>m.removeEventListener(p,d,h),i=!0)},p(t,[e]){let l=o;o=m(t),o===l?s[o].p(t,e):(P(),B(s[l],1,1,(()=>{s[l]=null})),H(),r=s[o],r?r.p(t,e):(r=s[o]=c[o](t),r.c()),U(r,1),r.m(n,null))},i(t){l||(U(r),l=!0)},o(t){B(r),l=!1},d(t){t&&h(e),s[o].d(),i=!1,a()}}}function St(t,e,n){let o=!1;return[o,()=>{n(0,o=!o),window.document.body.classList.toggle("dark"),"dark"===window.document.body.classList.value?(window.document.querySelector("#color-theme").setAttribute("content","#1A202C"),localStorage.setItem("theme","dark")):(window.document.querySelector("#color-theme").removeAttribute("content"),localStorage.removeItem("theme"))}]}class It extends J{constructor(t){super(),Y(this,t,St,zt,i,{})}}function Lt(t,e,n){const o=t.slice();return o[11]=e[n],o}function Mt(t,e,n){const o=t.slice();return o[14]=e[n],o}function Ot(t,e,n){const o=t.slice();return o[17]=e[n],o}function Et(e){return document.title=e[0],{c:t,m:t,d:t}}function Tt(t){let e;return{c(){e=$("meta"),x(e,"name","description"),x(e,"content",t[3])},m(t,n){f(t,e,n)},p(t,n){8&n&&x(e,"content",t[3])},d(t){t&&h(e)}}}function Dt(t){let e;return{c(){e=$("link"),x(e,"rel","canonical"),x(e,"href",t[5])},m(t,n){f(t,e,n)},p(t,n){32&n&&x(e,"href",t[5])},d(t){t&&h(e)}}}function Gt(t){let e;return{c(){e=$("meta"),x(e,"name","keywords"),x(e,"content",t[4])},m(t,n){f(t,e,n)},p(t,n){16&n&&x(e,"content",t[4])},d(t){t&&h(e)}}}function Ft(t){let e,n,o,r,l,i,a=t[6].title&&Pt(t),c=t[6].description&&Ht(t),s=(t[6].url||t[5])&&Ut(t),m=t[6].type&&Bt(t),p=t[6].article&&Wt(t),d=t[6].images&&t[6].images.length&&Zt(t);return{c(){a&&a.c(),e=b(),c&&c.c(),n=b(),s&&s.c(),o=b(),m&&m.c(),r=b(),p&&p.c(),l=b(),d&&d.c(),i=v()},m(t,u){a&&a.m(t,u),f(t,e,u),c&&c.m(t,u),f(t,n,u),s&&s.m(t,u),f(t,o,u),m&&m.m(t,u),f(t,r,u),p&&p.m(t,u),f(t,l,u),d&&d.m(t,u),f(t,i,u)},p(t,u){t[6].title?a?a.p(t,u):(a=Pt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),t[6].description?c?c.p(t,u):(c=Ht(t),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[6].url||t[5]?s?s.p(t,u):(s=Ut(t),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),t[6].type?m?m.p(t,u):(m=Bt(t),m.c(),m.m(r.parentNode,r)):m&&(m.d(1),m=null),t[6].article?p?p.p(t,u):(p=Wt(t),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),t[6].images&&t[6].images.length?d?d.p(t,u):(d=Zt(t),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},d(t){a&&a.d(t),t&&h(e),c&&c.d(t),t&&h(n),s&&s.d(t),t&&h(o),m&&m.d(t),t&&h(r),p&&p.d(t),t&&h(l),d&&d.d(t),t&&h(i)}}}function Pt(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:title"),x(e,"content",n=t[6].title)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].title)&&x(e,"content",n)},d(t){t&&h(e)}}}function Ht(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:description"),x(e,"content",n=t[6].description)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].description)&&x(e,"content",n)},d(t){t&&h(e)}}}function Ut(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:url"),x(e,"content",n=t[6].url||t[5])},m(t,n){f(t,e,n)},p(t,o){96&o&&n!==(n=t[6].url||t[5])&&x(e,"content",n)},d(t){t&&h(e)}}}function Bt(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:type"),x(e,"content",n=t[6].type.toLowerCase())},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].type.toLowerCase())&&x(e,"content",n)},d(t){t&&h(e)}}}function Wt(t){let e,n,o,r,l,i,a=t[6].article.publishedTime&&Rt(t),c=t[6].article.modifiedTime&&Xt(t),s=t[6].article.expirationTime&&qt(t),m=t[6].article.section&&Yt(t),p=t[6].article.authors&&t[6].article.authors.length&&Jt(t),d=t[6].article.tags&&t[6].article.tags.length&&Vt(t);return{c(){a&&a.c(),e=b(),c&&c.c(),n=b(),s&&s.c(),o=b(),m&&m.c(),r=b(),p&&p.c(),l=b(),d&&d.c(),i=v()},m(t,u){a&&a.m(t,u),f(t,e,u),c&&c.m(t,u),f(t,n,u),s&&s.m(t,u),f(t,o,u),m&&m.m(t,u),f(t,r,u),p&&p.m(t,u),f(t,l,u),d&&d.m(t,u),f(t,i,u)},p(t,u){t[6].article.publishedTime?a?a.p(t,u):(a=Rt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),t[6].article.modifiedTime?c?c.p(t,u):(c=Xt(t),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),t[6].article.expirationTime?s?s.p(t,u):(s=qt(t),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null),t[6].article.section?m?m.p(t,u):(m=Yt(t),m.c(),m.m(r.parentNode,r)):m&&(m.d(1),m=null),t[6].article.authors&&t[6].article.authors.length?p?p.p(t,u):(p=Jt(t),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),t[6].article.tags&&t[6].article.tags.length?d?d.p(t,u):(d=Vt(t),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},d(t){a&&a.d(t),t&&h(e),c&&c.d(t),t&&h(n),s&&s.d(t),t&&h(o),m&&m.d(t),t&&h(r),p&&p.d(t),t&&h(l),d&&d.d(t),t&&h(i)}}}function Rt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:published_time"),x(e,"content",n=t[6].article.publishedTime)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.publishedTime)&&x(e,"content",n)},d(t){t&&h(e)}}}function Xt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:modified_time"),x(e,"content",n=t[6].article.modifiedTime)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.modifiedTime)&&x(e,"content",n)},d(t){t&&h(e)}}}function qt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:expiration_time"),x(e,"content",n=t[6].article.expirationTime)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.expirationTime)&&x(e,"content",n)},d(t){t&&h(e)}}}function Yt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:section"),x(e,"content",n=t[6].article.section)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[6].article.section)&&x(e,"content",n)},d(t){t&&h(e)}}}function Jt(t){let e,n=t[6].article.authors,o=[];for(let e=0;e<n.length;e+=1)o[e]=Qt(Ot(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);f(t,e,n)},p(t,r){if(64&r){let l;for(n=t[6].article.authors,l=0;l<n.length;l+=1){const i=Ot(t,n,l);o[l]?o[l].p(i,r):(o[l]=Qt(i),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){g(o,t),t&&h(e)}}}function Qt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:author"),x(e,"content",n=t[17])},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[17])&&x(e,"content",n)},d(t){t&&h(e)}}}function Vt(t){let e,n=t[6].article.tags,o=[];for(let e=0;e<n.length;e+=1)o[e]=Kt(Mt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);f(t,e,n)},p(t,r){if(64&r){let l;for(n=t[6].article.tags,l=0;l<n.length;l+=1){const i=Mt(t,n,l);o[l]?o[l].p(i,r):(o[l]=Kt(i),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){g(o,t),t&&h(e)}}}function Kt(t){let e,n;return{c(){e=$("meta"),x(e,"property","article:tag"),x(e,"content",n=t[14])},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[14])&&x(e,"content",n)},d(t){t&&h(e)}}}function Zt(t){let e,n=t[6].images,o=[];for(let e=0;e<n.length;e+=1)o[e]=oe(Lt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);f(t,e,n)},p(t,r){if(64&r){let l;for(n=t[6].images,l=0;l<n.length;l+=1){const i=Lt(t,n,l);o[l]?o[l].p(i,r):(o[l]=oe(i),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){g(o,t),t&&h(e)}}}function te(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:image:alt"),x(e,"content",n=t[11].alt)},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[11].alt)&&x(e,"content",n)},d(t){t&&h(e)}}}function ee(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:image:width"),x(e,"content",n=t[11].width.toString())},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[11].width.toString())&&x(e,"content",n)},d(t){t&&h(e)}}}function ne(t){let e,n;return{c(){e=$("meta"),x(e,"property","og:image:height"),x(e,"content",n=t[11].height.toString())},m(t,n){f(t,e,n)},p(t,o){64&o&&n!==(n=t[11].height.toString())&&x(e,"content",n)},d(t){t&&h(e)}}}function oe(t){let e,n,o,r,l,i,a=t[11].alt&&te(t),c=t[11].width&&ee(t),s=t[11].height&&ne(t);return{c(){e=$("meta"),o=b(),a&&a.c(),r=b(),c&&c.c(),l=b(),s&&s.c(),i=v(),x(e,"property","og:image"),x(e,"content",n=t[11].url)},m(t,n){f(t,e,n),f(t,o,n),a&&a.m(t,n),f(t,r,n),c&&c.m(t,n),f(t,l,n),s&&s.m(t,n),f(t,i,n)},p(t,o){64&o&&n!==(n=t[11].url)&&x(e,"content",n),t[11].alt?a?a.p(t,o):(a=te(t),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null),t[11].width?c?c.p(t,o):(c=ee(t),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null),t[11].height?s?s.p(t,o):(s=ne(t),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},d(t){t&&h(e),t&&h(o),a&&a.d(t),t&&h(r),c&&c.d(t),t&&h(l),s&&s.d(t),t&&h(i)}}}function re(t){let e,n,o,r,l,i,a,c=t[7].site&&le(t),s=t[7].title&&ie(t),m=t[7].description&&ae(t),p=t[7].image&&ce(t),d=t[7].imageAlt&&se(t);return{c(){e=$("meta"),n=b(),c&&c.c(),o=b(),s&&s.c(),r=b(),m&&m.c(),l=b(),p&&p.c(),i=b(),d&&d.c(),a=v(),x(e,"name","twitter:card"),x(e,"content","summary_large_image")},m(t,u){f(t,e,u),f(t,n,u),c&&c.m(t,u),f(t,o,u),s&&s.m(t,u),f(t,r,u),m&&m.m(t,u),f(t,l,u),p&&p.m(t,u),f(t,i,u),d&&d.m(t,u),f(t,a,u)},p(t,e){t[7].site?c?c.p(t,e):(c=le(t),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null),t[7].title?s?s.p(t,e):(s=ie(t),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null),t[7].description?m?m.p(t,e):(m=ae(t),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),t[7].image?p?p.p(t,e):(p=ce(t),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null),t[7].imageAlt?d?d.p(t,e):(d=se(t),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},d(t){t&&h(e),t&&h(n),c&&c.d(t),t&&h(o),s&&s.d(t),t&&h(r),m&&m.d(t),t&&h(l),p&&p.d(t),t&&h(i),d&&d.d(t),t&&h(a)}}}function le(t){let e,n;return{c(){e=$("meta"),x(e,"name","twitter:site"),x(e,"content",n=t[7].site)},m(t,n){f(t,e,n)},p(t,o){128&o&&n!==(n=t[7].site)&&x(e,"content",n)},d(t){t&&h(e)}}}function ie(t){let e,n;return{c(){e=$("meta"),x(e,"name","twitter:title"),x(e,"content",n=t[7].title)},m(t,n){f(t,e,n)},p(t,o){128&o&&n!==(n=t[7].title)&&x(e,"content",n)},d(t){t&&h(e)}}}function ae(t){let e,n;return{c(){e=$("meta"),x(e,"name","twitter:description"),x(e,"content",n=t[7].description)},m(t,n){f(t,e,n)},p(t,o){128&o&&n!==(n=t[7].description)&&x(e,"content",n)},d(t){t&&h(e)}}}function ce(t){let e,n;return{c(){e=$("meta"),x(e,"name","twitter:image"),x(e,"content",n=t[7].image)},m(t,n){f(t,e,n)},p(t,o){128&o&&n!==(n=t[7].image)&&x(e,"content",n)},d(t){t&&h(e)}}}function se(t){let e,n;return{c(){e=$("meta"),x(e,"name","twitter:image:alt"),x(e,"content",n=t[7].imageAlt)},m(t,n){f(t,e,n)},p(t,o){128&o&&n!==(n=t[7].imageAlt)&&x(e,"content",n)},d(t){t&&h(e)}}}function me(t){let e,n,o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[8]})+"<"}/script>`;return{c(){e=new j,n=v(),e.a=n},m(t,r){e.m(o,t,r),f(t,n,r)},p(t,n){256&n&&o!==(o=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org",...t[8]})+"<"}/script>`)&&e.p(o)},d(t){t&&h(n),t&&e.d()}}}function pe(t){let e,n,o,r,l,i,a,c,s,p,d,f=t[0]&&Et(t),g=t[3]&&Tt(t),y=t[5]&&Dt(t),w=t[4]&&Gt(t),b=t[6]&&Ft(t),k=t[7]&&re(t),N=t[8]&&me(t);const j=t[10].default,C=function(t,e,n,o){if(t){const r=m(t,e,n,o);return t[0](r)}}(j,t,t[9],null);return{c(){f&&f.c(),e=$("meta"),o=$("meta"),g&&g.c(),l=v(),y&&y.c(),i=v(),w&&w.c(),a=v(),b&&b.c(),c=v(),k&&k.c(),s=v(),N&&N.c(),p=v(),C&&C.c(),x(e,"name","robots"),x(e,"content",n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`),x(o,"name","googlebot"),x(o,"content",r=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`)},m(t,n){f&&f.m(document.head,null),u(document.head,e),u(document.head,o),g&&g.m(document.head,null),u(document.head,l),y&&y.m(document.head,null),u(document.head,i),w&&w.m(document.head,null),u(document.head,a),b&&b.m(document.head,null),u(document.head,c),k&&k.m(document.head,null),u(document.head,s),N&&N.m(document.head,null),u(document.head,p),C&&C.m(document.head,null),d=!0},p(t,[u]){t[0]?f||(f=Et(t),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null),(!d||6&u&&n!==(n=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`))&&x(e,"content",n),(!d||6&u&&r!==(r=`${t[1]?"noindex":"index"},${t[2]?"nofollow":"follow"}`))&&x(o,"content",r),t[3]?g?g.p(t,u):(g=Tt(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[5]?y?y.p(t,u):(y=Dt(t),y.c(),y.m(i.parentNode,i)):y&&(y.d(1),y=null),t[4]?w?w.p(t,u):(w=Gt(t),w.c(),w.m(a.parentNode,a)):w&&(w.d(1),w=null),t[6]?b?b.p(t,u):(b=Ft(t),b.c(),b.m(c.parentNode,c)):b&&(b.d(1),b=null),t[7]?k?k.p(t,u):(k=re(t),k.c(),k.m(s.parentNode,s)):k&&(k.d(1),k=null),t[8]?N?N.p(t,u):(N=me(t),N.c(),N.m(p.parentNode,p)):N&&(N.d(1),N=null),C&&C.p&&(!d||512&u)&&function(t,e,n,o,r,l){if(r){const i=m(e,n,o,l);t.p(i,r)}}(C,j,t,t[9],d?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(j,t[9],u,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[9]),null)},i(t){d||(U(C,t),d=!0)},o(t){B(C,t),d=!1},d(t){f&&f.d(t),h(e),h(o),g&&g.d(t),h(l),y&&y.d(t),h(i),w&&w.d(t),h(a),b&&b.d(t),h(c),k&&k.d(t),h(s),N&&N.d(t),h(p),C&&C.d(t)}}}function de(t,e,n){let{$$slots:o={},$$scope:r}=e,{title:l}=e,{noindex:i=!1}=e,{nofollow:a=!1}=e,{description:c}=e,{keywords:s}=e,{canonical:m}=e,{openGraph:p}=e,{twitter:d}=e,{jsonLd:u}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"noindex"in t&&n(1,i=t.noindex),"nofollow"in t&&n(2,a=t.nofollow),"description"in t&&n(3,c=t.description),"keywords"in t&&n(4,s=t.keywords),"canonical"in t&&n(5,m=t.canonical),"openGraph"in t&&n(6,p=t.openGraph),"twitter"in t&&n(7,d=t.twitter),"jsonLd"in t&&n(8,u=t.jsonLd),"$$scope"in t&&n(9,r=t.$$scope)},[l,i,a,c,s,m,p,d,u,r,o]}class ue extends J{constructor(t){super(),Y(this,t,de,pe,i,{title:0,noindex:1,nofollow:2,description:3,keywords:4,canonical:5,openGraph:6,twitter:7,jsonLd:8})}}function fe(t){let e,n,o,r,l,i,a,c,s,m,p,d,g,y,w,v,k,N;return l=new ue({props:{openGraph:{title:"Home | Gifaldy Azka",description:"Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!",url:"https://gifaldyazka.is-a.dev",type:"website",images:[{url:"https://cdn.upload.systems/uploads/F7WMmXA2.png",width:1365,height:613,alt:"Site Preview"}]},twitter:{site:"@gifaldyazkaa",title:"Home | Gifaldy Azka",description:"Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!",image:"https://cdn.upload.systems/uploads/Q1CGS4P0.png",imageAlt:"Site Preview"}}}),a=new It({}),s=new tt({}),p=new ot({props:{propsName:t[0],propsRole:t[1],propsCountry:t[2],propsInterest:t[3]}}),g=new ct({props:{propsProject:t[5]}}),w=new pt({props:{propsData:t[6]}}),k=new gt({props:{propsMail:t[4],propsUrl:t[7]}}),{c(){e=$("meta"),n=$("meta"),o=$("meta"),r=b(),W(l.$$.fragment),i=b(),W(a.$$.fragment),c=b(),W(s.$$.fragment),m=b(),W(p.$$.fragment),d=b(),W(g.$$.fragment),y=b(),W(w.$$.fragment),v=b(),W(k.$$.fragment),document.title="Home | Gifaldy Azka",x(e,"name","description"),x(e,"content","Hello there! I'm Gifaldy Azka, Fullstack website Developer from Indonesia!"),x(n,"name","og:image"),x(n,"content","https://cdn.upload.systems/uploads/F7WMmXA2.png"),x(o,"name","twitter:image"),x(o,"content","https://cdn.upload.systems/uploads/F7WMmXA2.png")},m(t,h){u(document.head,e),u(document.head,n),u(document.head,o),f(t,r,h),R(l,t,h),f(t,i,h),R(a,t,h),f(t,c,h),R(s,t,h),f(t,m,h),R(p,t,h),f(t,d,h),R(g,t,h),f(t,y,h),R(w,t,h),f(t,v,h),R(k,t,h),N=!0},p(t,[e]){const n={};1&e&&(n.propsName=t[0]),2&e&&(n.propsRole=t[1]),4&e&&(n.propsCountry=t[2]),8&e&&(n.propsInterest=t[3]),p.$set(n);const o={};32&e&&(o.propsProject=t[5]),g.$set(o);const r={};64&e&&(r.propsData=t[6]),w.$set(r);const l={};16&e&&(l.propsMail=t[4]),128&e&&(l.propsUrl=t[7]),k.$set(l)},i(t){N||(U(l.$$.fragment,t),U(a.$$.fragment,t),U(s.$$.fragment,t),U(p.$$.fragment,t),U(g.$$.fragment,t),U(w.$$.fragment,t),U(k.$$.fragment,t),N=!0)},o(t){B(l.$$.fragment,t),B(a.$$.fragment,t),B(s.$$.fragment,t),B(p.$$.fragment,t),B(g.$$.fragment,t),B(w.$$.fragment,t),B(k.$$.fragment,t),N=!1},d(t){h(e),h(n),h(o),t&&h(r),X(l,t),t&&h(i),X(a,t),t&&h(c),X(s,t),t&&h(m),X(p,t),t&&h(d),X(g,t),t&&h(y),X(w,t),t&&h(v),X(k,t)}}}function he(t,e,n){let{name:o,role:r,country:l,interest:i,email:a,projects:c,environment:s,links:m}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"role"in t&&n(1,r=t.role),"country"in t&&n(2,l=t.country),"interest"in t&&n(3,i=t.interest),"email"in t&&n(4,a=t.email),"projects"in t&&n(5,c=t.projects),"environment"in t&&n(6,s=t.environment),"links"in t&&n(7,m=t.links)},[o,r,l,i,a,c,s,m]}return new class extends J{constructor(t){super(),Y(this,t,he,fe,i,{name:0,role:1,country:2,interest:3,email:4,projects:5,environment:6,links:7})}}({target:document.body,props:{name:"Gifaldy Azka",role:"Fullstack website Developer",country:"Indonesia",interest:"Watching anime",email:"falcxxdev (at) pm.me",projects:[{emoji:"⚓",emoji_label:"anchor",name:"湊あくあ Fanpage",url:"https://github.com/gifaldyazkaa/aqua-fanpage",tooltip_text:"湊あくあ Fanpage created with Svelte and Sveltestrap"},{emoji:"🤖",emoji_label:"robot",name:"Exxyll Discord Bot (Archived)",url:"https://github.com/gifaldyazkaa/exxyll-origin",tooltip_text:"Multipurpose Discord Bot with Commands for Fun, Games, Moderation, Utility, and other more!"},{emoji:"🌺",emoji_label:"hibiscus",name:"Wangy-wangy Generator",url:"https://github.com/gifaldyazkaa/wangy-wangy",tooltip_text:"Generator Tools that created for fun and designed for weebs"},{emoji:"🔎",emoji_label:"magnifier",name:"Anime Searcher Discord Bot",url:"https://github.com/gifaldyazkaa/anime-searcher",tooltip_text:"Discord Bot to Search an Anime from Image Source"}],environment:{os:[{name:"ElementaryOS",version:"6 Odin",family:"Linux",emoji:"🐧",emojiLabel:"penguin",url:"https://elementary.io"},{name:"Windows 10",version:"2004",edition:"Home",family:"Windows",emoji:"🪟",emojiLabel:"window",url:"https://www.microsoft.com/p/windows-10-home/d76qx4bznwk4"}],codeEditor:[{name:"Visual Studio Code",url:"https://code.visualstudio.com"},{name:"Sublime Text",url:"https://sublimetext.com"}]},links:[{name:"Discord",url:"https://discord.com/users/788260234409672754",badgeUrl:"https://img.shields.io/badge/-Discord-%235865F2?style=for-the-badge&logo=discord&logoColor=white"},{name:"GitHub",url:"https://github.com/gifaldyazkaa",badgeUrl:"https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white"},{name:"Twitter",url:"https://twitter.com/gifaldyazkaa",badgeUrl:"https://img.shields.io/badge/-Twitter-%231DA1F2?style=for-the-badge&logo=twitter&logoColor=white"},{name:"Instagram",url:"https://instagram.com/falcxxdev",badgeUrl:"https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"},{name:"AniList",url:"https://anilist.co/user/gifaldyazkaa",badgeUrl:"https://img.shields.io/badge/-AniList-%2302A9FF?style=for-the-badge&logo=anilist&logoColor=white"}]}})}();
