import{S as As,i as Rs,s as js,C as Wo,w as Ys,x as $s,y as Fs,z as Ms,A as Cs,q as Us,o as zs,B as Bs,P as qs,e as l,t as s,k as c,c as n,a as r,h as a,d as t,m as f,b as rt,g as p,I as o,M as Ns}from"./vendor-e6930037.js";import{P as Gs}from"./_posts-39c49aba.js";function Ks(R){let u,E,b,I,d,k,_,it,le,pt,ct,ne,ft,ut,Se,j,dt,He,Y,ht,We,$,mt,Ae,g,Ps=`<code class="language-python"><span class="token keyword">import</span> requests

<span class="token keyword">def</span> <span class="token function">get_latest_server_time</span><span class="token punctuation">(</span>server_url<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>server_url<span class="token punctuation">)</span>
    <span class="token keyword">if</span> resp<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> resp<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">'Unable to get latest time from server'</span><span class="token punctuation">)</span>
</code>`,Re,O,_t,re,kt,vt,ie,wt,yt,je,F,Et,Ye,M,bt,$e,S,Ls=`<code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">"Hello World"</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code>`,Fe,v,It,pe,Ot,xt,ce,Ct,qt,fe,Pt,Lt,Me,U,Tt,Ue,h,Dt,ue,gt,St,de,Ht,Wt,he,At,Rt,me,jt,Yt,_e,$t,Ft,ze,z,ke,Mt,Be,P,Ut,ve,zt,Bt,Ne,H,Ts=`<code class="language-python">$ curl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">5000</span><span class="token operator">/</span>hello
</code>`,Ge,B,Nt,Ke,W,Ds=`<code class="language-python">Hello World
</code>`,Qe,N,Gt,Xe,w,G,Kt,we,Qt,Xt,K,Jt,ye,Vt,Zt,C,eo,Ee,to,oo,be,so,ao,lo,q,no,Ie,ro,io,Oe,po,co,Je,Q,fo,Ve,X,xe,uo,Ze,m,ho,Ce,mo,_o,qe,ko,vo,Pe,wo,yo,Le,Eo,bo,et,J,V,Io,Te,Oo,tt,Z,xo,ot,ee,Co,st,L,A,qo,De,Po,Lo,To,ge,Do;return{c(){u=l("p"),E=s("I have been professionally developing software for 3 years now. And never ever I have worked on a project which was complete in itself. Directly or indirectly, there was a dependency on some code written by some kind OSS developer(s)."),b=c(),I=l("p"),d=s("While using those dependencies, one thing which intrigued me in my initial days was \u201CWhy do people call X a library, and Y a framework?\u201D This post is the answer to that question."),k=c(),_=l("p"),it=s("While reading this post, it\u2019ll be helpful if you keep a framework and a library in mind. If you\u2019re a python developer, I\u2019ll suggest\xA0"),le=l("code"),pt=s("flask"),ct=s("\xA0as a framework and\xA0"),ne=l("code"),ft=s("requests"),ut=s("\xA0as a library. I\u2019ll give examples in Python, wherever required."),Se=c(),j=l("h2"),dt=s("Example Code"),He=c(),Y=l("p"),ht=s("Let\u2019s define a function that fetches the latest time from a given server."),We=c(),$=l("h2"),mt=s("Library"),Ae=c(),g=l("pre"),Re=c(),O=l("p"),_t=s("Simple code, right? Your function utilizes\xA0"),re=l("code"),kt=s("requests"),vt=s("\xA0\u201Clibrary\u201D, which provides a super-helpful method\xA0"),ie=l("code"),wt=s("get"),yt=s(", which abstracts the details like creating a connection to a server, sending the request, unmarshalling the response, etc."),je=c(),F=l("h2"),Et=s("Framework"),Ye=c(),M=l("p"),bt=s("Let\u2019s define a simple API endpoint that returns \u201CHello World\u201D"),$e=c(),S=l("pre"),Fe=c(),v=l("p"),It=s("Here, we defined a function\xA0"),pe=l("code"),Ot=s("hello_world"),xt=s("\xA0and then instructed\xA0the "),ce=l("code"),Ct=s("flask"),qt=s("\xA0to call that function if any request hits at the\xA0"),fe=l("code"),Pt=s("/hello"),Lt=s("\xA0endpoint. Simple enough? Cool, let\u2019s move to the crux of the article"),Me=c(),U=l("h2"),Tt=s("Difference b/w library and framework"),Ue=c(),h=l("p"),Dt=s("Examine the\xA0"),ue=l("code"),gt=s("get_latest_server_time"),St=s("\xA0function we defined in\xA0the "),de=l("code"),Ht=s("Library"),Wt=s("\xA0example. You\u2019re calling the\xA0"),he=l("code"),At=s("requests.get"),Rt=s("\xA0function. It does something under the hood and returns you a\xA0"),me=l("code"),jt=s("Response"),Yt=s("\xA0object. Then, you process the\xA0"),_e=l("code"),$t=s("Response"),Ft=s("\xA0object and take appropriate action. The key thing to note here is"),ze=c(),z=l("blockquote"),ke=l("p"),Mt=s("In case of a library, you are controlling the flow of execution. You are responsible for invoking the code written by some 3rd party."),Be=c(),P=l("p"),Ut=s("Now, let\u2019s move to our framework example. Let\u2019s assume that we started our API server locally, and it is running on port\xA0"),ve=l("code"),zt=s("5000"),Bt=s(". What happens when you do the following curl?"),Ne=c(),H=l("pre"),Ge=c(),B=l("p"),Nt=s("You\u2019ll get the following response"),Ke=c(),W=l("pre"),Qe=c(),N=l("p"),Gt=s("Let\u2019s walk through step-by-step how we got the response."),Xe=c(),w=l("ul"),G=l("li"),Kt=s("We started a server by calling\xA0"),we=l("code"),Qt=s("app.run()"),Xt=c(),K=l("li"),Jt=s("The server is listening to any request which is hitting at\xA0"),ye=l("code"),Vt=s("http://127.0.0.1:5000/"),Zt=c(),C=l("li"),eo=s("If someone requests\xA0"),Ee=l("code"),to=s("http://127.0.0.1:5000/hello"),oo=s(", the server executes the\xA0"),be=l("code"),so=s("hello_world"),ao=s("\xA0method, defined by us."),lo=c(),q=l("li"),no=s("Finally, the server wraps the output of\xA0"),Ie=l("code"),ro=s("hello_world"),io=s("\xA0into a\xA0"),Oe=l("code"),po=s("Response"),co=s("\xA0object and sends it to whoever made that request."),Je=c(),Q=l("p"),fo=s("The key thing to note here is"),Ve=c(),X=l("blockquote"),xe=l("p"),uo=s("In case of a framework, the flask server is controlling the flow of execution. It is responsible for invoking the code written by you."),Ze=c(),m=l("p"),ho=s("The moment\xA0"),Ce=l("code"),mo=s("python"),_o=s("\xA0executes\xA0"),qe=l("code"),ko=s("app.run()"),vo=s("\xA0in our example, the flow of control is transferred to\xA0 "),Pe=l("code"),wo=s("flask"),yo=s(". And after that,\xA0"),Le=l("code"),Eo=s("flask"),bo=s("\xA0is responsible for executing the code written by us."),et=c(),J=l("blockquote"),V=l("p"),Io=s("And that folks, is the difference between a framework and a library.\xA0"),Te=l("strong"),Oo=s("It\u2019s all about the flow of control."),tt=c(),Z=l("p"),xo=s("It doesn\u2019t matter which language you use, the above-mentioned distinction will always hold."),ot=c(),ee=l("h2"),Co=s("Some technical tidbits"),st=c(),L=l("ul"),A=l("li"),qo=s("The technical term for the transfer of flow control to framework is called\xA0"),De=l("strong"),Po=s("Inversion of Control"),Lo=s(". It is a very important principle in software engineering and demands an article of its own. I\u2019ll write one describing it soon."),To=c(),ge=l("li"),Do=s("This may be controversial, but if you think about it, all Operating Systems are frameworks :)"),this.h()},l(e){u=n(e,"P",{});var i=r(u);E=a(i,"I have been professionally developing software for 3 years now. And never ever I have worked on a project which was complete in itself. Directly or indirectly, there was a dependency on some code written by some kind OSS developer(s)."),i.forEach(t),b=f(e),I=n(e,"P",{});var Ro=r(I);d=a(Ro,"While using those dependencies, one thing which intrigued me in my initial days was \u201CWhy do people call X a library, and Y a framework?\u201D This post is the answer to that question."),Ro.forEach(t),k=f(e),_=n(e,"P",{});var te=r(_);it=a(te,"While reading this post, it\u2019ll be helpful if you keep a framework and a library in mind. If you\u2019re a python developer, I\u2019ll suggest\xA0"),le=n(te,"CODE",{});var jo=r(le);pt=a(jo,"flask"),jo.forEach(t),ct=a(te,"\xA0as a framework and\xA0"),ne=n(te,"CODE",{});var Yo=r(ne);ft=a(Yo,"requests"),Yo.forEach(t),ut=a(te,"\xA0as a library. I\u2019ll give examples in Python, wherever required."),te.forEach(t),Se=f(e),j=n(e,"H2",{});var $o=r(j);dt=a($o,"Example Code"),$o.forEach(t),He=f(e),Y=n(e,"P",{});var Fo=r(Y);ht=a(Fo,"Let\u2019s define a function that fetches the latest time from a given server."),Fo.forEach(t),We=f(e),$=n(e,"H2",{});var Mo=r($);mt=a(Mo,"Library"),Mo.forEach(t),Ae=f(e),g=n(e,"PRE",{class:!0});var gs=r(g);gs.forEach(t),Re=f(e),O=n(e,"P",{});var oe=r(O);_t=a(oe,"Simple code, right? Your function utilizes\xA0"),re=n(oe,"CODE",{});var Uo=r(re);kt=a(Uo,"requests"),Uo.forEach(t),vt=a(oe,"\xA0\u201Clibrary\u201D, which provides a super-helpful method\xA0"),ie=n(oe,"CODE",{});var zo=r(ie);wt=a(zo,"get"),zo.forEach(t),yt=a(oe,", which abstracts the details like creating a connection to a server, sending the request, unmarshalling the response, etc."),oe.forEach(t),je=f(e),F=n(e,"H2",{});var Bo=r(F);Et=a(Bo,"Framework"),Bo.forEach(t),Ye=f(e),M=n(e,"P",{});var No=r(M);bt=a(No,"Let\u2019s define a simple API endpoint that returns \u201CHello World\u201D"),No.forEach(t),$e=f(e),S=n(e,"PRE",{class:!0});var Ss=r(S);Ss.forEach(t),Fe=f(e),v=n(e,"P",{});var T=r(v);It=a(T,"Here, we defined a function\xA0"),pe=n(T,"CODE",{});var Go=r(pe);Ot=a(Go,"hello_world"),Go.forEach(t),xt=a(T,"\xA0and then instructed\xA0the "),ce=n(T,"CODE",{});var Ko=r(ce);Ct=a(Ko,"flask"),Ko.forEach(t),qt=a(T,"\xA0to call that function if any request hits at the\xA0"),fe=n(T,"CODE",{});var Qo=r(fe);Pt=a(Qo,"/hello"),Qo.forEach(t),Lt=a(T,"\xA0endpoint. Simple enough? Cool, let\u2019s move to the crux of the article"),T.forEach(t),Me=f(e),U=n(e,"H2",{});var Xo=r(U);Tt=a(Xo,"Difference b/w library and framework"),Xo.forEach(t),Ue=f(e),h=n(e,"P",{});var y=r(h);Dt=a(y,"Examine the\xA0"),ue=n(y,"CODE",{});var Jo=r(ue);gt=a(Jo,"get_latest_server_time"),Jo.forEach(t),St=a(y,"\xA0function we defined in\xA0the "),de=n(y,"CODE",{});var Vo=r(de);Ht=a(Vo,"Library"),Vo.forEach(t),Wt=a(y,"\xA0example. You\u2019re calling the\xA0"),he=n(y,"CODE",{});var Zo=r(he);At=a(Zo,"requests.get"),Zo.forEach(t),Rt=a(y,"\xA0function. It does something under the hood and returns you a\xA0"),me=n(y,"CODE",{});var es=r(me);jt=a(es,"Response"),es.forEach(t),Yt=a(y,"\xA0object. Then, you process the\xA0"),_e=n(y,"CODE",{});var ts=r(_e);$t=a(ts,"Response"),ts.forEach(t),Ft=a(y,"\xA0object and take appropriate action. The key thing to note here is"),y.forEach(t),ze=f(e),z=n(e,"BLOCKQUOTE",{});var os=r(z);ke=n(os,"P",{});var ss=r(ke);Mt=a(ss,"In case of a library, you are controlling the flow of execution. You are responsible for invoking the code written by some 3rd party."),ss.forEach(t),os.forEach(t),Be=f(e),P=n(e,"P",{});var at=r(P);Ut=a(at,"Now, let\u2019s move to our framework example. Let\u2019s assume that we started our API server locally, and it is running on port\xA0"),ve=n(at,"CODE",{});var as=r(ve);zt=a(as,"5000"),as.forEach(t),Bt=a(at,". What happens when you do the following curl?"),at.forEach(t),Ne=f(e),H=n(e,"PRE",{class:!0});var Hs=r(H);Hs.forEach(t),Ge=f(e),B=n(e,"P",{});var ls=r(B);Nt=a(ls,"You\u2019ll get the following response"),ls.forEach(t),Ke=f(e),W=n(e,"PRE",{class:!0});var Ws=r(W);Ws.forEach(t),Qe=f(e),N=n(e,"P",{});var ns=r(N);Gt=a(ns,"Let\u2019s walk through step-by-step how we got the response."),ns.forEach(t),Xe=f(e),w=n(e,"UL",{});var D=r(w);G=n(D,"LI",{});var go=r(G);Kt=a(go,"We started a server by calling\xA0"),we=n(go,"CODE",{});var rs=r(we);Qt=a(rs,"app.run()"),rs.forEach(t),go.forEach(t),Xt=f(D),K=n(D,"LI",{});var So=r(K);Jt=a(So,"The server is listening to any request which is hitting at\xA0"),ye=n(So,"CODE",{});var is=r(ye);Vt=a(is,"http://127.0.0.1:5000/"),is.forEach(t),So.forEach(t),Zt=f(D),C=n(D,"LI",{});var se=r(C);eo=a(se,"If someone requests\xA0"),Ee=n(se,"CODE",{});var ps=r(Ee);to=a(ps,"http://127.0.0.1:5000/hello"),ps.forEach(t),oo=a(se,", the server executes the\xA0"),be=n(se,"CODE",{});var cs=r(be);so=a(cs,"hello_world"),cs.forEach(t),ao=a(se,"\xA0method, defined by us."),se.forEach(t),lo=f(D),q=n(D,"LI",{});var ae=r(q);no=a(ae,"Finally, the server wraps the output of\xA0"),Ie=n(ae,"CODE",{});var fs=r(Ie);ro=a(fs,"hello_world"),fs.forEach(t),io=a(ae,"\xA0into a\xA0"),Oe=n(ae,"CODE",{});var us=r(Oe);po=a(us,"Response"),us.forEach(t),co=a(ae,"\xA0object and sends it to whoever made that request."),ae.forEach(t),D.forEach(t),Je=f(e),Q=n(e,"P",{});var ds=r(Q);fo=a(ds,"The key thing to note here is"),ds.forEach(t),Ve=f(e),X=n(e,"BLOCKQUOTE",{});var hs=r(X);xe=n(hs,"P",{});var ms=r(xe);uo=a(ms,"In case of a framework, the flask server is controlling the flow of execution. It is responsible for invoking the code written by you."),ms.forEach(t),hs.forEach(t),Ze=f(e),m=n(e,"P",{});var x=r(m);ho=a(x,"The moment\xA0"),Ce=n(x,"CODE",{});var _s=r(Ce);mo=a(_s,"python"),_s.forEach(t),_o=a(x,"\xA0executes\xA0"),qe=n(x,"CODE",{});var ks=r(qe);ko=a(ks,"app.run()"),ks.forEach(t),vo=a(x,"\xA0in our example, the flow of control is transferred to\xA0 "),Pe=n(x,"CODE",{});var vs=r(Pe);wo=a(vs,"flask"),vs.forEach(t),yo=a(x,". And after that,\xA0"),Le=n(x,"CODE",{});var ws=r(Le);Eo=a(ws,"flask"),ws.forEach(t),bo=a(x,"\xA0is responsible for executing the code written by us."),x.forEach(t),et=f(e),J=n(e,"BLOCKQUOTE",{});var ys=r(J);V=n(ys,"P",{});var Ho=r(V);Io=a(Ho,"And that folks, is the difference between a framework and a library.\xA0"),Te=n(Ho,"STRONG",{});var Es=r(Te);Oo=a(Es,"It\u2019s all about the flow of control."),Es.forEach(t),Ho.forEach(t),ys.forEach(t),tt=f(e),Z=n(e,"P",{});var bs=r(Z);xo=a(bs,"It doesn\u2019t matter which language you use, the above-mentioned distinction will always hold."),bs.forEach(t),ot=f(e),ee=n(e,"H2",{});var Is=r(ee);Co=a(Is,"Some technical tidbits"),Is.forEach(t),st=f(e),L=n(e,"UL",{});var lt=r(L);A=n(lt,"LI",{});var nt=r(A);qo=a(nt,"The technical term for the transfer of flow control to framework is called\xA0"),De=n(nt,"STRONG",{});var Os=r(De);Po=a(Os,"Inversion of Control"),Os.forEach(t),Lo=a(nt,". It is a very important principle in software engineering and demands an article of its own. I\u2019ll write one describing it soon."),nt.forEach(t),To=f(lt),ge=n(lt,"LI",{});var xs=r(ge);Do=a(xs,"This may be controversial, but if you think about it, all Operating Systems are frameworks :)"),xs.forEach(t),lt.forEach(t),this.h()},h(){rt(g,"class","language-python"),rt(S,"class","language-python"),rt(H,"class","language-python"),rt(W,"class","language-python")},m(e,i){p(e,u,i),o(u,E),p(e,b,i),p(e,I,i),o(I,d),p(e,k,i),p(e,_,i),o(_,it),o(_,le),o(le,pt),o(_,ct),o(_,ne),o(ne,ft),o(_,ut),p(e,Se,i),p(e,j,i),o(j,dt),p(e,He,i),p(e,Y,i),o(Y,ht),p(e,We,i),p(e,$,i),o($,mt),p(e,Ae,i),p(e,g,i),g.innerHTML=Ps,p(e,Re,i),p(e,O,i),o(O,_t),o(O,re),o(re,kt),o(O,vt),o(O,ie),o(ie,wt),o(O,yt),p(e,je,i),p(e,F,i),o(F,Et),p(e,Ye,i),p(e,M,i),o(M,bt),p(e,$e,i),p(e,S,i),S.innerHTML=Ls,p(e,Fe,i),p(e,v,i),o(v,It),o(v,pe),o(pe,Ot),o(v,xt),o(v,ce),o(ce,Ct),o(v,qt),o(v,fe),o(fe,Pt),o(v,Lt),p(e,Me,i),p(e,U,i),o(U,Tt),p(e,Ue,i),p(e,h,i),o(h,Dt),o(h,ue),o(ue,gt),o(h,St),o(h,de),o(de,Ht),o(h,Wt),o(h,he),o(he,At),o(h,Rt),o(h,me),o(me,jt),o(h,Yt),o(h,_e),o(_e,$t),o(h,Ft),p(e,ze,i),p(e,z,i),o(z,ke),o(ke,Mt),p(e,Be,i),p(e,P,i),o(P,Ut),o(P,ve),o(ve,zt),o(P,Bt),p(e,Ne,i),p(e,H,i),H.innerHTML=Ts,p(e,Ge,i),p(e,B,i),o(B,Nt),p(e,Ke,i),p(e,W,i),W.innerHTML=Ds,p(e,Qe,i),p(e,N,i),o(N,Gt),p(e,Xe,i),p(e,w,i),o(w,G),o(G,Kt),o(G,we),o(we,Qt),o(w,Xt),o(w,K),o(K,Jt),o(K,ye),o(ye,Vt),o(w,Zt),o(w,C),o(C,eo),o(C,Ee),o(Ee,to),o(C,oo),o(C,be),o(be,so),o(C,ao),o(w,lo),o(w,q),o(q,no),o(q,Ie),o(Ie,ro),o(q,io),o(q,Oe),o(Oe,po),o(q,co),p(e,Je,i),p(e,Q,i),o(Q,fo),p(e,Ve,i),p(e,X,i),o(X,xe),o(xe,uo),p(e,Ze,i),p(e,m,i),o(m,ho),o(m,Ce),o(Ce,mo),o(m,_o),o(m,qe),o(qe,ko),o(m,vo),o(m,Pe),o(Pe,wo),o(m,yo),o(m,Le),o(Le,Eo),o(m,bo),p(e,et,i),p(e,J,i),o(J,V),o(V,Io),o(V,Te),o(Te,Oo),p(e,tt,i),p(e,Z,i),o(Z,xo),p(e,ot,i),p(e,ee,i),o(ee,Co),p(e,st,i),p(e,L,i),o(L,A),o(A,qo),o(A,De),o(De,Po),o(A,Lo),o(L,To),o(L,ge),o(ge,Do)},p:Ns,d(e){e&&t(u),e&&t(b),e&&t(I),e&&t(k),e&&t(_),e&&t(Se),e&&t(j),e&&t(He),e&&t(Y),e&&t(We),e&&t($),e&&t(Ae),e&&t(g),e&&t(Re),e&&t(O),e&&t(je),e&&t(F),e&&t(Ye),e&&t(M),e&&t($e),e&&t(S),e&&t(Fe),e&&t(v),e&&t(Me),e&&t(U),e&&t(Ue),e&&t(h),e&&t(ze),e&&t(z),e&&t(Be),e&&t(P),e&&t(Ne),e&&t(H),e&&t(Ge),e&&t(B),e&&t(Ke),e&&t(W),e&&t(Qe),e&&t(N),e&&t(Xe),e&&t(w),e&&t(Je),e&&t(Q),e&&t(Ve),e&&t(X),e&&t(Ze),e&&t(m),e&&t(et),e&&t(J),e&&t(tt),e&&t(Z),e&&t(ot),e&&t(ee),e&&t(st),e&&t(L)}}}function Qs(R){let u,E;const b=[R[0],Ao];let I={$$slots:{default:[Ks]},$$scope:{ctx:R}};for(let d=0;d<b.length;d+=1)I=Wo(I,b[d]);return u=new Gs({props:I}),{c(){Ys(u.$$.fragment)},l(d){$s(u.$$.fragment,d)},m(d,k){Fs(u,d,k),E=!0},p(d,[k]){const _=k&1?Ms(b,[k&1&&Cs(d[0]),k&0&&Cs(Ao)]):{};k&2&&(_.$$scope={dirty:k,ctx:d}),u.$set(_)},i(d){E||(Us(u.$$.fragment,d),E=!0)},o(d){zs(u.$$.fragment,d),E=!1},d(d){Bs(u,d)}}}const Ao={title:"Libraries v/s Frameworks",date:"24 February, 2022",categories:["software-engineering","engineering"],description:"An article explaining the difference between libraries and framework. The confusion is very common in software engineering domain. This article attempts to clarify the differences.",author:"Prakash"};function Xs(R,u,E){return R.$$set=b=>{E(0,u=Wo(Wo({},u),qs(b)))},u=qs(u),[u]}class Js extends As{constructor(u){super();Rs(this,u,Xs,Qs,js,{})}}var ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Js,metadata:Ao});export{Js as L,ea as _,Ao as m};