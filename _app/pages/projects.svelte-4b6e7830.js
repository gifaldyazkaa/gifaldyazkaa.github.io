import{S as $,i as x,s as ee,e as b,t as d,k as V,c as k,a as y,h as p,m as q,d as h,b as n,g as U,F as t,j as Q,O as te,Q as ae,R as W,U as se,T as X}from"../chunks/vendor-8ee6e785.js";function Y(c,a,l){const e=c.slice();return e[2]=a[l].name,e[3]=a[l].description,e[4]=a[l].repo_name,e[5]=a[l].demo_url,e[6]=a[l].img_preview,e[7]=a[l].emoji,e[9]=l,e}function Z(c){let a,l,e=c[9]+1+"",f,E,R=c[7]+"",z,I,m=c[2]+"",C,M,G,u=c[3]+"",D,P,j,g,w,S,A,o,r,H,s,v,O,T;return{c(){a=b("div"),l=b("h1"),f=d(e),E=d(". "),z=d(R),I=V(),C=d(m),M=V(),G=b("p"),D=d(u),P=V(),j=b("p"),g=b("a"),w=d("Demo"),A=d(` |
                `),o=b("a"),r=d("View on GitHub"),s=d(`
                |
                `),v=b("a"),O=d("Preview"),this.h()},l(_){a=k(_,"DIV",{class:!0});var i=y(a);l=k(i,"H1",{class:!0});var F=y(l);f=p(F,e),E=p(F,". "),z=p(F,R),I=q(F),C=p(F,m),F.forEach(h),M=q(i),G=k(i,"P",{class:!0});var B=y(G);D=p(B,u),B.forEach(h),P=q(i),j=k(i,"P",{class:!0});var N=y(j);g=k(N,"A",{href:!0,target:!0,class:!0});var J=y(g);w=p(J,"Demo"),J.forEach(h),A=p(N,` |
                `),o=k(N,"A",{href:!0,target:!0,class:!0});var K=y(o);r=p(K,"View on GitHub"),K.forEach(h),s=p(N,`
                |
                `),v=k(N,"A",{href:!0,target:!0,class:!0});var L=y(v);O=p(L,"Preview"),L.forEach(h),N.forEach(h),i.forEach(h),this.h()},h(){n(l,"class","svelte-1vo0hvj"),n(G,"class","svelte-1vo0hvj"),n(g,"href",S=c[5]),n(g,"target","_blank"),n(g,"class","svelte-1vo0hvj"),n(o,"href",H="https://github.com/gifaldyazkaa/"+c[4]),n(o,"target","_blank"),n(o,"class","svelte-1vo0hvj"),n(v,"href",T=c[6]),n(v,"target","_blank"),n(v,"class","svelte-1vo0hvj"),n(j,"class","svelte-1vo0hvj"),n(a,"class","list svelte-1vo0hvj")},m(_,i){U(_,a,i),t(a,l),t(l,f),t(l,E),t(l,z),t(l,I),t(l,C),t(a,M),t(a,G),t(G,D),t(a,P),t(a,j),t(j,g),t(g,w),t(j,A),t(j,o),t(o,r),t(j,s),t(j,v),t(v,O)},p(_,i){i&2&&R!==(R=_[7]+"")&&Q(z,R),i&2&&m!==(m=_[2]+"")&&Q(C,m),i&2&&u!==(u=_[3]+"")&&Q(D,u),i&2&&S!==(S=_[5])&&n(g,"href",S),i&2&&H!==(H="https://github.com/gifaldyazkaa/"+_[4])&&n(o,"href",H),i&2&&T!==(T=_[6])&&n(v,"href",T)},d(_){_&&h(a)}}}function le(c){let a,l,e,f,E,R,z,I,m,C,M,G,u,D,P,j,g,w,S;document.title=a="Projects | "+c[0].name;let A=c[1],o=[];for(let r=0;r<A.length;r+=1)o[r]=Z(Y(c,A,r));return{c(){l=V(),e=b("section"),f=b("h2"),E=d("Projects"),R=V(),z=b("hr"),I=V(),m=b("p"),C=d("Some projects that i've been working on"),M=V();for(let r=0;r<o.length;r+=1)o[r].c();G=V(),u=b("p"),D=d("These projects are listed depending on GitHub Pins at "),P=b("a"),j=d("My GitHub Profile"),g=d("."),this.h()},l(r){te('[data-svelte="svelte-yg2cfa"]',document.head).forEach(h),l=q(r),e=k(r,"SECTION",{class:!0,id:!0});var s=y(e);f=k(s,"H2",{class:!0});var v=y(f);E=p(v,"Projects"),v.forEach(h),R=q(s),z=k(s,"HR",{}),I=q(s),m=k(s,"P",{id:!0,class:!0});var O=y(m);C=p(O,"Some projects that i've been working on"),O.forEach(h),M=q(s);for(let i=0;i<o.length;i+=1)o[i].l(s);G=q(s),u=k(s,"P",{id:!0,class:!0});var T=y(u);D=p(T,"These projects are listed depending on GitHub Pins at "),P=k(T,"A",{href:!0,target:!0,class:!0});var _=y(P);j=p(_,"My GitHub Profile"),_.forEach(h),g=p(T,"."),T.forEach(h),s.forEach(h),this.h()},h(){n(f,"class","section__title svelte-1vo0hvj"),n(m,"id","description"),n(m,"class","svelte-1vo0hvj"),n(P,"href","https://github.com/gifaldyazkaa"),n(P,"target","_blank"),n(P,"class","svelte-1vo0hvj"),n(u,"id","info"),n(u,"class","svelte-1vo0hvj"),n(e,"class","container section section__height"),n(e,"id","projects")},m(r,H){U(r,l,H),U(r,e,H),t(e,f),t(f,E),t(e,R),t(e,z),t(e,I),t(e,m),t(m,C),t(e,M);for(let s=0;s<o.length;s+=1)o[s].m(e,null);t(e,G),t(e,u),t(u,D),t(u,P),t(P,j),t(u,g),S=!0},p(r,[H]){if((!S||H&1)&&a!==(a="Projects | "+r[0].name)&&(document.title=a),H&2){A=r[1];let s;for(s=0;s<A.length;s+=1){const v=Y(r,A,s);o[s]?o[s].p(v,H):(o[s]=Z(v),o[s].c(),o[s].m(e,G))}for(;s<o.length;s+=1)o[s].d(1);o.length=A.length}},i(r){S||(ae(()=>{w||(w=W(e,X,{duration:500},!0)),w.run(1)}),S=!0)},o(r){w||(w=W(e,X,{duration:500},!1)),w.run(0),S=!1},d(r){r&&h(l),r&&h(e),se(o,r),r&&w&&w.end()}}}async function ne({fetch:c}){const a=await c("/api/projects.json"),l=await c("/api/self.json"),{projects:e}=await a.json(),{self:f}=await l.json();return a.ok&&l.ok?{props:{self:f,projects:e}}:{status:a.status,error:new Error("Could not fetch the data")}}function re(c,a,l){let{self:e,projects:f}=a;return c.$$set=E=>{"self"in E&&l(0,e=E.self),"projects"in E&&l(1,f=E.projects)},[e,f]}class ce extends ${constructor(a){super();x(this,a,re,le,ee,{self:0,projects:1})}}export{ce as default,ne as load};
