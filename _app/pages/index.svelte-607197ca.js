var w=Object.defineProperty,I=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var v=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,b=(a,e)=>{for(var t in e||(e={}))N.call(e,t)&&v(a,t,e[t]);if(g)for(var t of g(e))P.call(e,t)&&v(a,t,e[t]);return a},k=(a,e)=>I(a,L(e));import{_ as S}from"../chunks/chromedriver-vs-geckodriver-dealing-with-pdf-urls-8f0f0d77.js";import{_ as U}from"../chunks/efficiently-splitting-sam-or-bam-file-by-reference-name-using-awk-31b73929.js";import{_ as $}from"../chunks/js-quirks-sorting-array-of-numbers-0e4f6d31.js";import{_ as j}from"../chunks/leveraging-encodings-for-speeding-up-grep-561341ca.js";import{_ as A}from"../chunks/library-vs-framework-979bb997.js";import{_ as C}from"../chunks/python-functions-on-steroids-8b41b4e4.js";import{S as D,i as F,s as H,e as m,t as M,k as E,c as f,a as h,h as O,d as _,m as q,b as R,g as p,I as c,M as d,N as z,O as B}from"../chunks/vendor-e6930037.js";import"../chunks/_posts-39c49aba.js";function y(a,e,t){const r=a.slice();return r[3]=e[t],r}function x(a){let e,t,r=a[3].title+"",s,l,i;return{c(){e=m("li"),t=m("a"),s=M(r),i=E(),this.h()},l(o){e=f(o,"LI",{});var n=h(e);t=f(n,"A",{href:!0});var u=h(t);s=O(u,r),u.forEach(_),i=q(n),n.forEach(_),this.h()},h(){R(t,"href",l=a[3].link)},m(o,n){p(o,e,n),c(e,t),c(t,s),c(e,i)},p:d,d(o){o&&_(e)}}}function G(a){let e,t,r=a[0],s=[];for(let l=0;l<r.length;l+=1)s[l]=x(y(a,r,l));return{c(){e=E(),t=m("ul");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){z('[data-svelte="svelte-1tspco8"]',document.head).forEach(_),e=q(l),t=f(l,"UL",{});var o=h(t);for(let n=0;n<s.length;n+=1)s[n].l(o);o.forEach(_),this.h()},h(){document.title="Home | 2403tales"},m(l,i){p(l,e,i),p(l,t,i);for(let o=0;o<s.length;o+=1)s[o].m(t,null)},p(l,[i]){if(i&1){r=l[0];let o;for(o=0;o<r.length;o+=1){const n=y(l,r,o);s[o]?s[o].p(n,i):(s[o]=x(n),s[o].c(),s[o].m(t,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},i:d,o:d,d(l){l&&_(e),l&&_(t),B(s,l)}}}function J(a){const e=s=>s.replace(".md","").replace("../","/"),t={"./posts/chromedriver-vs-geckodriver-dealing-with-pdf-urls.md":S,"./posts/efficiently-splitting-sam-or-bam-file-by-reference-name-using-awk.md":U,"./posts/js-quirks-sorting-array-of-numbers.md":$,"./posts/leveraging-encodings-for-speeding-up-grep.md":j,"./posts/library-vs-framework.md":A,"./posts/python-functions-on-steroids.md":C};let r=[];for(let s in t){const l=t[s];r.push(k(b({},l.metadata),{link:e(s)}))}return[r]}class te extends D{constructor(e){super();F(this,e,J,G,H,{})}}export{te as default};