import{S as Ws,i as zs,s as Xs,C as ds,w as Js,x as Ks,y as Qs,z as Vs,A as $s,q as Ys,o as Zs,B as ne,P as qs,e as p,t,k as d,c,a as l,h as a,d as s,m as k,b as gn,g as i,I as e,M as se}from"./vendor-e6930037.js";import{P as ee}from"./_posts-0ccc0035.js";function te(H){let r,v,_,g,u,f,m,B,yn,En,j,Pn,an,T,bn,on,F,Bs=`<code class="language-python"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options

options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--headless"</span><span class="token punctuation">)</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token string">'./chromedriver'</span><span class="token punctuation">,</span> options<span class="token operator">=</span>options<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">save_pdf</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> fname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>urls<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">:</span>
        <span class="token comment"># Navigate browser to URL containing relevant button</span>
        driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># If the button exists, click it</span>
        x <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token triple-quoted-string string">'''//input[@value='Click here']'''</span><span class="token punctuation">)</span>
        x<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> NoSuchElementException<span class="token punctuation">:</span>
        <span class="token comment"># If it doesn't, we're on PDF page</span>
        <span class="token keyword">pass</span>
    <span class="token comment"># Finally, save the PDF at the current URL to a file named xxxx.pdf</span>
    save_pdf<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_url<span class="token punctuation">,</span> <span class="token string">'xxxx.pdf'</span><span class="token punctuation">)</span></code>`,pn,L,Dn,cn,y,xn,G,Fn,Cn,N,In,Hn,ln,E,Tn,W,Ln,On,z,Sn,Rn,rn,P,An,X,Mn,Un,J,$n,qn,un,h,Bn,K,jn,Gn,Q,Nn,Wn,V,zn,Xn,Y,Jn,Kn,dn,O,Qn,kn,b,Vn,Z,Yn,Zn,nn,ns,ss,hn,w,es,sn,ts,as,en,os,ps,tn,cs,ls,fn,C,js=`<code class="language-python"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>firefox<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options  <span class="token comment"># This changed</span>

options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">"--headless"</span><span class="token punctuation">)</span>
<span class="token comment"># Ensure that geckodriver executable is in PATH</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Firefox<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>  <span class="token comment"># This changed</span>


<span class="token keyword">def</span> <span class="token function">save_pdf</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> fname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>urls<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> urls<span class="token punctuation">:</span>
        <span class="token comment"># Navigate browser to URL containing relevant button</span>
        driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># If the button exists, click it</span>
        x <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>By<span class="token punctuation">.</span>XPATH<span class="token punctuation">,</span> <span class="token triple-quoted-string string">'''//input[@value='Click here']'''</span><span class="token punctuation">)</span>
        x<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> NoSuchElementException<span class="token punctuation">:</span>
        <span class="token comment"># If it doesn't, we're on PDF page</span>
        <span class="token keyword">pass</span>
    <span class="token comment"># Finally, save the PDF at the current URL to a file named xxxx.pdf</span>
    save_pdf<span class="token punctuation">(</span>driver<span class="token punctuation">.</span>current_url<span class="token punctuation">,</span> <span class="token string">'xxxx.pdf'</span><span class="token punctuation">)</span>
</code>`,wn,S,is,mn,R,rs,vn,A,I,us;return{c(){r=p("h2"),v=t("Background"),_=d(),g=p("p"),u=t("Recently, I was working on a simple scraping task. I had to write a program that goes through a bunch of URLs and for every URL,"),f=d(),m=p("ul"),B=p("li"),yn=t("Click on a button that redirects to a PDF"),En=d(),j=p("li"),Pn=t("Download the final PDF"),an=d(),T=p("p"),bn=t("Here\u2019s the piece of code I was using"),on=d(),F=p("pre"),pn=d(),L=p("h2"),Dn=t("Problem Statement"),cn=d(),y=p("p"),xn=t("The code is straightforward, and it worked fine when the headless mode was off. However, the moment headless mode was turned on, something spooky started to happen. Plain HTML pages containing the "),G=p("code"),Fn=t("Click here"),Cn=t(" button were being downloaded instead of PDFs. Given this fact, one might conclude that "),N=p("code"),In=t("x.click()"),Hn=t(" was not executing properly."),ln=d(),E=p("p"),Tn=t("But astonishingly, PDFs were getting downloaded, just with some gibberish names (like "),W=p("code"),Ln=t("3487938nfhabalkvt.pdf"),On=t("). I was confused, because if my "),z=p("code"),Sn=t("save_pdf"),Rn=t(" module was downloading the HTML pages, who was downloading the PDFs??"),rn=d(),P=p("p"),An=t("And after 8 hours of debugging and researching, I concluded that "),X=p("code"),Mn=t("chromedriver"),Un=t(" was the culprit! It was the one downloading the PDFs. The next question was why? And the closest answer I could find after hours of research was that "),J=p("code"),$n=t("chromedriver"),qn=t(" doesn\u2019t support opening the PDFs, and hence the default behavior is to download the PDF whenever it encounters a link containing a PDF."),un=d(),h=p("p"),Bn=t("And the worst part, "),K=p("code"),jn=t("driver.current_url"),Gn=t(" still points to the link which redirects you to the PDF, not the actual PDF link \u{1F616}. So that\u2019s why, when "),Q=p("code"),Nn=t("save_pdf"),Wn=t(" was getting called, it actually downloaded the HTML page, and since "),V=p("code"),zn=t("x.click()"),Xn=t(" happened, the "),Y=p("code"),Jn=t("chromedriver"),Kn=t(" was downloading the PDFs separately, and assigning the name which it got from the server."),dn=d(),O=p("h2"),Qn=t("Solution"),kn=d(),b=p("p"),Vn=t("On a hunch, I just changed "),Z=p("code"),Yn=t("chromedriver"),Zn=t(" to "),nn=p("code"),ns=t("geckodriver"),ss=t(" (Webdriver for Firefox), and everything worked. Here\u2019s the new snippet which worked"),hn=d(),w=p("p"),es=t("P.S.: To get "),sn=p("code"),ts=t("geckodriver"),as=t(" to work, you need to add directory containing "),en=p("code"),os=t("geckodriver"),ps=t(" to "),tn=p("code"),cs=t("PATH"),ls=t("."),fn=d(),C=p("pre"),wn=d(),S=p("h2"),is=t("Related links"),mn=d(),R=p("p"),rs=t("There were tons of links that I visited, but this one gives you enough information to diagnose the problem"),vn=d(),A=p("p"),I=p("a"),us=t("https://github.com/puppeteer/puppeteer/issues/1872"),this.h()},l(n){r=c(n,"H2",{});var o=l(r);v=a(o,"Background"),o.forEach(s),_=k(n),g=c(n,"P",{});var hs=l(g);u=a(hs,"Recently, I was working on a simple scraping task. I had to write a program that goes through a bunch of URLs and for every URL,"),hs.forEach(s),f=k(n),m=c(n,"UL",{});var _n=l(m);B=c(_n,"LI",{});var fs=l(B);yn=a(fs,"Click on a button that redirects to a PDF"),fs.forEach(s),En=k(_n),j=c(_n,"LI",{});var ws=l(j);Pn=a(ws,"Download the final PDF"),ws.forEach(s),_n.forEach(s),an=k(n),T=c(n,"P",{});var ms=l(T);bn=a(ms,"Here\u2019s the piece of code I was using"),ms.forEach(s),on=k(n),F=c(n,"PRE",{class:!0});var Gs=l(F);Gs.forEach(s),pn=k(n),L=c(n,"H2",{});var vs=l(L);Dn=a(vs,"Problem Statement"),vs.forEach(s),cn=k(n),y=c(n,"P",{});var M=l(y);xn=a(M,"The code is straightforward, and it worked fine when the headless mode was off. However, the moment headless mode was turned on, something spooky started to happen. Plain HTML pages containing the "),G=c(M,"CODE",{});var _s=l(G);Fn=a(_s,"Click here"),_s.forEach(s),Cn=a(M," button were being downloaded instead of PDFs. Given this fact, one might conclude that "),N=c(M,"CODE",{});var gs=l(N);In=a(gs,"x.click()"),gs.forEach(s),Hn=a(M," was not executing properly."),M.forEach(s),ln=k(n),E=c(n,"P",{});var U=l(E);Tn=a(U,"But astonishingly, PDFs were getting downloaded, just with some gibberish names (like "),W=c(U,"CODE",{});var ys=l(W);Ln=a(ys,"3487938nfhabalkvt.pdf"),ys.forEach(s),On=a(U,"). I was confused, because if my "),z=c(U,"CODE",{});var Es=l(z);Sn=a(Es,"save_pdf"),Es.forEach(s),Rn=a(U," module was downloading the HTML pages, who was downloading the PDFs??"),U.forEach(s),rn=k(n),P=c(n,"P",{});var $=l(P);An=a($,"And after 8 hours of debugging and researching, I concluded that "),X=c($,"CODE",{});var Ps=l(X);Mn=a(Ps,"chromedriver"),Ps.forEach(s),Un=a($," was the culprit! It was the one downloading the PDFs. The next question was why? And the closest answer I could find after hours of research was that "),J=c($,"CODE",{});var bs=l(J);$n=a(bs,"chromedriver"),bs.forEach(s),qn=a($," doesn\u2019t support opening the PDFs, and hence the default behavior is to download the PDF whenever it encounters a link containing a PDF."),$.forEach(s),un=k(n),h=c(n,"P",{});var D=l(h);Bn=a(D,"And the worst part, "),K=c(D,"CODE",{});var Ds=l(K);jn=a(Ds,"driver.current_url"),Ds.forEach(s),Gn=a(D," still points to the link which redirects you to the PDF, not the actual PDF link \u{1F616}. So that\u2019s why, when "),Q=c(D,"CODE",{});var xs=l(Q);Nn=a(xs,"save_pdf"),xs.forEach(s),Wn=a(D," was getting called, it actually downloaded the HTML page, and since "),V=c(D,"CODE",{});var Fs=l(V);zn=a(Fs,"x.click()"),Fs.forEach(s),Xn=a(D," happened, the "),Y=c(D,"CODE",{});var Cs=l(Y);Jn=a(Cs,"chromedriver"),Cs.forEach(s),Kn=a(D," was downloading the PDFs separately, and assigning the name which it got from the server."),D.forEach(s),dn=k(n),O=c(n,"H2",{});var Is=l(O);Qn=a(Is,"Solution"),Is.forEach(s),kn=k(n),b=c(n,"P",{});var q=l(b);Vn=a(q,"On a hunch, I just changed "),Z=c(q,"CODE",{});var Hs=l(Z);Yn=a(Hs,"chromedriver"),Hs.forEach(s),Zn=a(q," to "),nn=c(q,"CODE",{});var Ts=l(nn);ns=a(Ts,"geckodriver"),Ts.forEach(s),ss=a(q," (Webdriver for Firefox), and everything worked. Here\u2019s the new snippet which worked"),q.forEach(s),hn=k(n),w=c(n,"P",{});var x=l(w);es=a(x,"P.S.: To get "),sn=c(x,"CODE",{});var Ls=l(sn);ts=a(Ls,"geckodriver"),Ls.forEach(s),as=a(x," to work, you need to add directory containing "),en=c(x,"CODE",{});var Os=l(en);os=a(Os,"geckodriver"),Os.forEach(s),ps=a(x," to "),tn=c(x,"CODE",{});var Ss=l(tn);cs=a(Ss,"PATH"),Ss.forEach(s),ls=a(x,"."),x.forEach(s),fn=k(n),C=c(n,"PRE",{class:!0});var Ns=l(C);Ns.forEach(s),wn=k(n),S=c(n,"H2",{});var Rs=l(S);is=a(Rs,"Related links"),Rs.forEach(s),mn=k(n),R=c(n,"P",{});var As=l(R);rs=a(As,"There were tons of links that I visited, but this one gives you enough information to diagnose the problem"),As.forEach(s),vn=k(n),A=c(n,"P",{});var Ms=l(A);I=c(Ms,"A",{href:!0,rel:!0});var Us=l(I);us=a(Us,"https://github.com/puppeteer/puppeteer/issues/1872"),Us.forEach(s),Ms.forEach(s),this.h()},h(){gn(F,"class","language-python"),gn(C,"class","language-python"),gn(I,"href","https://github.com/puppeteer/puppeteer/issues/1872"),gn(I,"rel","nofollow")},m(n,o){i(n,r,o),e(r,v),i(n,_,o),i(n,g,o),e(g,u),i(n,f,o),i(n,m,o),e(m,B),e(B,yn),e(m,En),e(m,j),e(j,Pn),i(n,an,o),i(n,T,o),e(T,bn),i(n,on,o),i(n,F,o),F.innerHTML=Bs,i(n,pn,o),i(n,L,o),e(L,Dn),i(n,cn,o),i(n,y,o),e(y,xn),e(y,G),e(G,Fn),e(y,Cn),e(y,N),e(N,In),e(y,Hn),i(n,ln,o),i(n,E,o),e(E,Tn),e(E,W),e(W,Ln),e(E,On),e(E,z),e(z,Sn),e(E,Rn),i(n,rn,o),i(n,P,o),e(P,An),e(P,X),e(X,Mn),e(P,Un),e(P,J),e(J,$n),e(P,qn),i(n,un,o),i(n,h,o),e(h,Bn),e(h,K),e(K,jn),e(h,Gn),e(h,Q),e(Q,Nn),e(h,Wn),e(h,V),e(V,zn),e(h,Xn),e(h,Y),e(Y,Jn),e(h,Kn),i(n,dn,o),i(n,O,o),e(O,Qn),i(n,kn,o),i(n,b,o),e(b,Vn),e(b,Z),e(Z,Yn),e(b,Zn),e(b,nn),e(nn,ns),e(b,ss),i(n,hn,o),i(n,w,o),e(w,es),e(w,sn),e(sn,ts),e(w,as),e(w,en),e(en,os),e(w,ps),e(w,tn),e(tn,cs),e(w,ls),i(n,fn,o),i(n,C,o),C.innerHTML=js,i(n,wn,o),i(n,S,o),e(S,is),i(n,mn,o),i(n,R,o),e(R,rs),i(n,vn,o),i(n,A,o),e(A,I),e(I,us)},p:se,d(n){n&&s(r),n&&s(_),n&&s(g),n&&s(f),n&&s(m),n&&s(an),n&&s(T),n&&s(on),n&&s(F),n&&s(pn),n&&s(L),n&&s(cn),n&&s(y),n&&s(ln),n&&s(E),n&&s(rn),n&&s(P),n&&s(un),n&&s(h),n&&s(dn),n&&s(O),n&&s(kn),n&&s(b),n&&s(hn),n&&s(w),n&&s(fn),n&&s(C),n&&s(wn),n&&s(S),n&&s(mn),n&&s(R),n&&s(vn),n&&s(A)}}}function ae(H){let r,v;const _=[H[0],ks];let g={$$slots:{default:[te]},$$scope:{ctx:H}};for(let u=0;u<_.length;u+=1)g=ds(g,_[u]);return r=new ee({props:g}),{c(){Js(r.$$.fragment)},l(u){Ks(r.$$.fragment,u)},m(u,f){Qs(r,u,f),v=!0},p(u,[f]){const m=f&1?Vs(_,[f&1&&$s(u[0]),f&0&&$s(ks)]):{};f&2&&(m.$$scope={dirty:f,ctx:u}),r.$set(m)},i(u){v||(Ys(r.$$.fragment,u),v=!0)},o(u){Zs(r.$$.fragment,u),v=!1},d(u){ne(r,u)}}}const ks={title:"Chromedriver v/s GeckoDriver: Dealing with PDF URLs",date:"11 August, 2022",categories:["Web Scraping","Data Mining","Selenium","engineering","data"],description:"How PDFs are handled by Chromedriver and Geckodriver in headless mode",author:"Prakash"};function oe(H,r,v){return H.$$set=_=>{v(0,r=ds(ds({},r),qs(_)))},r=qs(r),[r]}class pe extends Ws{constructor(r){super();zs(this,r,oe,ae,Xs,{})}}var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe,metadata:ks});export{pe as C,ie as _,ks as m};
