import{S as Q,i as U,s as z,e as _,k as q,t as p,O as D,c as h,d as m,m as x,a as w,h as E,b,F as a,g as M,P as G,j as J,Q as K,R as W,T as P}from"../chunks/vendor-8ee6e785.js";function L(o){let n,s,f,r,e,l,H,R,T,y=o[0].name+"",F,A,C,I,j,i,B,c,v,N,O;return document.title=n="Home | "+o[0].name,{c(){s=_("meta"),f=q(),r=_("main"),e=_("section"),l=_("h1"),H=p(`\u{1F44B} Hi,
            `),R=_("br"),T=p(`
            I'm `),F=p(y),A=p(`,
            `),C=_("br"),I=p(`
            Website developer`),j=q(),i=_("button"),B=p("About me \u2192"),this.h()},l(t){const u=D('[data-svelte="svelte-1a8l9em"]',document.head);s=h(u,"META",{name:!0,id:!0,content:!0}),u.forEach(m),f=x(t),r=h(t,"MAIN",{});var S=w(r);e=h(S,"SECTION",{class:!0,id:!0});var k=w(e);l=h(k,"H1",{});var d=w(l);H=E(d,`\u{1F44B} Hi,
            `),R=h(d,"BR",{}),T=E(d,`
            I'm `),F=E(d,y),A=E(d,`,
            `),C=h(d,"BR",{}),I=E(d,`
            Website developer`),d.forEach(m),j=x(k),i=h(k,"BUTTON",{id:!0,class:!0});var g=w(i);B=E(g,"About me \u2192"),g.forEach(m),k.forEach(m),S.forEach(m),this.h()},h(){b(s,"name","theme-color"),b(s,"id","color-theme"),b(s,"content","#FFFFFF"),b(i,"id","button"),b(i,"class","svelte-21ly5t"),b(e,"class","container section greeting svelte-21ly5t"),b(e,"id","home")},m(t,u){a(document.head,s),M(t,f,u),M(t,r,u),a(r,e),a(e,l),a(l,H),a(l,R),a(l,T),a(l,F),a(l,A),a(l,C),a(l,I),a(e,j),a(e,i),a(i,B),v=!0,N||(O=G(i,"click",o[1]),N=!0)},p(t,[u]){(!v||u&1)&&n!==(n="Home | "+t[0].name)&&(document.title=n),(!v||u&1)&&y!==(y=t[0].name+"")&&J(F,y)},i(t){v||(K(()=>{c||(c=W(e,P,{duration:700},!0)),c.run(1)}),v=!0)},o(t){c||(c=W(e,P,{duration:700},!1)),c.run(0),v=!1},d(t){m(s),t&&m(f),t&&m(r),t&&c&&c.end(),N=!1,O()}}}async function Y({fetch:o}){const n=await o("/api/self.json"),{self:s}=await n.json();return n.ok?{props:{self:s}}:{status:n.status,error:new Error("Could not fetch the data")}}function V(o,n,s){let{self:f}=n;const r=()=>{window.location.href="/about"};return o.$$set=e=>{"self"in e&&s(0,f=e.self)},[f,r]}class Z extends Q{constructor(n){super();U(this,n,V,L,z,{self:0})}}export{Z as default,Y as load};