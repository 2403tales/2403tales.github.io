import{S as Ws,i as js,s as Xs,C as La,w as Qs,x as Js,y as Ks,z as Vs,A as Fs,q as Zs,o as gs,B as er,P as Ns,e as s,t as o,k as n,c as r,a as i,h as a,d as l,m as d,b as Ma,g as f,I as e,M as tr}from"./vendor-e6930037.js";import{P as lr}from"./_posts-39c49aba.js";function or(oe){let u,A,C,m,p,v,ae,S,fl,Ce,nl,dl,be,ul,pl,M,hl,De,ml,El,Oe,_l,vt,se,vl,wt,q,ye,wl,kl,kt,L,z,Al,Ie,Cl,bl,Dl,h,Ol,Se,yl,Il,Me,Sl,Ml,Le,Ll,$l,$e,Tl,xl,Te,Gl,Hl,At,$,Pl,xe,Fl,Nl,Ct,re,Bl,bt,ie,Ul,Dt,T,Rl,Ge,Yl,ql,Ot,W,Bs=`<code class="language-undefined">@SQ	SN:ref	LN:45
@SQ	SN:ref2	LN:40
r001	163 ref	7	30  8M4I4M1D3M	=	37	39	TTAGATAAAGAGGATACTG	*	XX:B:S,12561,2,20,112
r002	0	ref	9	30	1S2I6M1P1I1P1I4M2I	*	0	0	AAAAGATAAGGGATAAA	*
r001	83	ref	37	30	9M	=	7	-39	CAGCGCCAT	*
x1	0	ref2	1	30	20M	*	0	0	aggttttataaaacaaataa	????????????????????
x2	0	ref2	2	30	21M	*	0	0	ggttttataaaacaaataatt	?????????????????????
x3	0	ref2	6	30	9M4I13M	*	0	0	ttataaaacAAATaattaagtctaca	??????????????????????????</code>`,yt,ce,zl,It,fe,Wl,St,x,j,He,jl,Xl,Pe,Ql,Jl,X,Fe,Kl,Vl,Ne,Zl,Mt,Q,gl,Be,eo,Lt,E,to,Ue,lo,oo,Re,ao,so,Ye,ro,io,$t,G,co,qe,fo,no,Tt,J,Us=`<code class="language-bash">samtools view sample.sam <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">'&#92;t'</span> <span class="token string">'&#123;print $6&#125;'</span> <span class="token operator">></span> all-cigars</code>`,xt,H,ne,ze,uo,po,ho,y,mo,We,Eo,_o,je,vo,wo,Gt,K,ko,Xe,Ao,Ht,de,Co,Pt,b,bo,Qe,Do,Oo,Je,yo,Io,Ft,ue,V,So,Ke,Mo,Lo,Nt,pe,$o,Bt,he,Ve,To,Ut,Z,Rs=`<code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">samfile</span><span class="token operator">=</span><span class="token string">"sample.sam"</span> <span class="token comment"># Replace sample.sam with whatever your SAM/BAM file name is.</span>
samtools view <span class="token variable">$&#123;samfile&#125;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">'&#92;t'</span> <span class="token string">'&#123;print $0 > $3".sam"&#125;'</span></code>`,Rt,me,xo,Yt,P,I,Go,Ze,Ho,Po,ge,Fo,No,Bo,F,Uo,et,Ro,Yo,g,ee,qo,tt,zo,Wo,jo,w,Xo,lt,Qo,Jo,ot,Ko,Vo,at,Zo,go,qt,D,ea,st,ta,la,rt,oa,aa,zt,N,O,sa,it,ra,ia,ct,ca,fa,ft,na,da,k,ua,nt,pa,ha,dt,ma,Ea,ut,_a,va,Wt,Ee,wa,jt,B,te,ka,pt,Aa,Ca,ba,ht,Da;return{c(){u=s("h2"),A=o("Target audience"),C=n(),m=s("ul"),p=s("li"),v=o("You must know what SAM/BAM file looks like"),ae=n(),S=s("li"),fl=o("You should know how "),Ce=s("code"),nl=o("|"),dl=o(" (pipe) works in "),be=s("code"),ul=o("bash"),pl=n(),M=s("li"),hl=o("You should know how "),De=s("code"),ml=o(">"),El=o(" (output redirection) works in "),Oe=s("code"),_l=o("bash"),vt=n(),se=s("h2"),vl=o("A quick introduction to awk"),wt=n(),q=s("p"),ye=s("code"),wl=o("awk"),kl=o(" is a program which can be used to efficiently slice and dice structured tabular data. By default,"),kt=n(),L=s("ul"),z=s("li"),Al=o("It reads one record at a time and processes it. The default record separator is "),Ie=s("code"),Cl=o("\\n"),bl=o(" (newline). Though this can be changed, we won\u2019t be discussing that here."),Dl=n(),h=s("li"),Ol=o("It splits each record by "),Se=s("code"),yl=o("space"),Il=o(", which is default "),Me=s("code"),Sl=o("Field Separator"),Ml=o(". You can change "),Le=s("code"),Ll=o("Field Separator"),$l=o(" by providing "),$e=s("code"),Tl=o("-F"),xl=o(" flag. This is useful to us, as records in a SAM file are separated by "),Te=s("code"),Gl=o("\\t"),Hl=o("(tabs)."),At=n(),$=s("p"),Pl=o("These two points are enough to get you started with "),xe=s("code"),Fl=o("awk"),Nl=o(". There are a couple of other things you should know too. I\u2019ll use examples to demonstrate them."),Ct=n(),re=s("h2"),Bl=o("Example"),bt=n(),ie=s("h3"),Ul=o("Input"),Dt=n(),T=s("p"),Rl=o("Lets use following SAM file as input. Lets call it "),Ge=s("code"),Yl=o("sample.sam"),ql=o("."),Ot=n(),W=s("pre"),yt=n(),ce=s("h3"),zl=o("Output"),It=n(),fe=s("p"),Wl=o("We expect our script to create two files"),St=n(),x=s("ul"),j=s("li"),He=s("code"),jl=o("ref.sam"),Xl=o(" which contains all the records where reference name is "),Pe=s("code"),Ql=o("ref"),Jl=n(),X=s("li"),Fe=s("code"),Kl=o("ref2.sam"),Vl=o(" which contains all the records where reference name is "),Ne=s("code"),Zl=o("ref2"),Mt=n(),Q=s("h2"),gl=o("Minimal hands on with "),Be=s("code"),eo=o("awk"),Lt=n(),E=s("p"),to=o("As mentioned earlier, "),Ue=s("code"),lo=o("awk"),oo=o(" reads and processes one record at a time. For each record, you use "),Re=s("code"),ao=o("$N"),so=o(" to refer to "),Ye=s("code"),ro=o("Nth"),io=o(" field in your record."),$t=n(),G=s("p"),co=o("Say if you want to extract the CIGAR string for each of the records in the above SAM file, you\u2019ll use "),qe=s("code"),fo=o("$6"),no=o(". Here\u2019s a snippet for the same:"),Tt=n(),J=s("pre"),xt=n(),H=s("ul"),ne=s("li"),ze=s("code"),uo=o("print"),po=o(" is an instruction which simply prints whatever arguments are passed to it."),ho=n(),y=s("li"),mo=o("As mentioned earlier, "),We=s("code"),Eo=o("-F"),_o=o(" is a parameter used to specify the "),je=s("code"),vo=o("Field Separator"),wo=o(" for each record."),Gt=n(),K=s("p"),ko=o("The above snippet will extract all the CIGAR strings and put them in a file named "),Xe=s("code"),Ao=o("all-cigars"),Ht=n(),de=s("h3"),Co=o("Another important thing"),Pt=n(),b=s("p"),bo=o("As mentioned above, "),Qe=s("code"),Do=o("$1"),Oo=o(" refers to 1st column, "),Je=s("code"),yo=o("$2"),Io=o(" to second column etc."),Ft=n(),ue=s("p"),V=s("strong"),So=o("Similarily, "),Ke=s("code"),Mo=o("$0"),Lo=o(" refers to whole record"),Nt=n(),pe=s("h2"),$o=o("Final Code"),Bt=n(),he=s("p"),Ve=s("strong"),To=o("Tested on Ubuntu"),Ut=n(),Z=s("pre"),Rt=n(),me=s("h3"),xo=o("Explanation"),Yt=n(),P=s("ul"),I=s("li"),Go=o("We have moved the "),Ze=s("code"),Ho=o(">"),Po=o(" (output redirection) inside "),ge=s("code"),Fo=o("awk"),No=o("."),Bo=n(),F=s("li"),Uo=o("We are redirecting the output to "),et=s("code"),Ro=o("$3.sam"),Yo=o(". "),g=s("ul"),ee=s("li"),qo=o("Notice the double quotes around "),tt=s("code"),zo=o(".sam"),Wo=o("."),jo=n(),w=s("li"),Xo=o("They\u2019re just a marker for "),lt=s("code"),Qo=o("awk"),Jo=o(" to treat "),ot=s("code"),Ko=o("$3"),Vo=o(" and "),at=s("code"),Zo=o(".sam"),go=o(" as different entities."),qt=n(),D=s("p"),ea=o("So ultimately, we\u2019re simply writing "),st=s("code"),ta=o("$0"),la=o(", which represents the whole record (a whole line in this case), to "),rt=s("code"),oa=o("$3.sam"),aa=o(". Hence,"),zt=n(),N=s("ul"),O=s("li"),sa=o("All the records where "),it=s("code"),ra=o("$3"),ia=o(" is "),ct=s("code"),ca=o("ref"),fa=o(" will be written to a file named "),ft=s("code"),na=o("ref.sam"),da=n(),k=s("li"),ua=o("All records where "),nt=s("code"),pa=o("$3"),ha=o(" is "),dt=s("code"),ma=o("ref2"),Ea=o(" will be written to a file named "),ut=s("code"),_a=o("ref2.sam"),va=o("."),Wt=n(),Ee=s("h2"),wa=o("Benchmarks"),jt=n(),B=s("ul"),te=s("li"),ka=o("It takes ~45 minutes to split a BAM file of 61GB on Intel\xAE Xeon\xAE E5-2698 v3, having clock speed 2.3GHz and turbo speed 3.0GHz. Number of cores doesn\u2019t matter, as "),pt=s("code"),Aa=o("awk"),Ca=o(" uses only one core at a time."),ba=n(),ht=s("li"),Da=o("Your I/O device might make a difference in runtime. SSDs will give you lower runtime as compared to traditional HDDs."),this.h()},l(t){u=r(t,"H2",{});var c=i(u);A=a(c,"Target audience"),c.forEach(l),C=d(t),m=r(t,"UL",{});var _e=i(m);p=r(_e,"LI",{});var Ta=i(p);v=a(Ta,"You must know what SAM/BAM file looks like"),Ta.forEach(l),ae=d(_e),S=r(_e,"LI",{});var mt=i(S);fl=a(mt,"You should know how "),Ce=r(mt,"CODE",{});var xa=i(Ce);nl=a(xa,"|"),xa.forEach(l),dl=a(mt," (pipe) works in "),be=r(mt,"CODE",{});var Ga=i(be);ul=a(Ga,"bash"),Ga.forEach(l),mt.forEach(l),pl=d(_e),M=r(_e,"LI",{});var Et=i(M);hl=a(Et,"You should know how "),De=r(Et,"CODE",{});var Ha=i(De);ml=a(Ha,">"),Ha.forEach(l),El=a(Et," (output redirection) works in "),Oe=r(Et,"CODE",{});var Pa=i(Oe);_l=a(Pa,"bash"),Pa.forEach(l),Et.forEach(l),_e.forEach(l),vt=d(t),se=r(t,"H2",{});var Fa=i(se);vl=a(Fa,"A quick introduction to awk"),Fa.forEach(l),wt=d(t),q=r(t,"P",{});var Oa=i(q);ye=r(Oa,"CODE",{});var Na=i(ye);wl=a(Na,"awk"),Na.forEach(l),kl=a(Oa," is a program which can be used to efficiently slice and dice structured tabular data. By default,"),Oa.forEach(l),kt=d(t),L=r(t,"UL",{});var Xt=i(L);z=r(Xt,"LI",{});var Qt=i(z);Al=a(Qt,"It reads one record at a time and processes it. The default record separator is "),Ie=r(Qt,"CODE",{});var Ba=i(Ie);Cl=a(Ba,"\\n"),Ba.forEach(l),bl=a(Qt," (newline). Though this can be changed, we won\u2019t be discussing that here."),Qt.forEach(l),Dl=d(Xt),h=r(Xt,"LI",{});var _=i(h);Ol=a(_,"It splits each record by "),Se=r(_,"CODE",{});var Ua=i(Se);yl=a(Ua,"space"),Ua.forEach(l),Il=a(_,", which is default "),Me=r(_,"CODE",{});var Ra=i(Me);Sl=a(Ra,"Field Separator"),Ra.forEach(l),Ml=a(_,". You can change "),Le=r(_,"CODE",{});var Ya=i(Le);Ll=a(Ya,"Field Separator"),Ya.forEach(l),$l=a(_," by providing "),$e=r(_,"CODE",{});var qa=i($e);Tl=a(qa,"-F"),qa.forEach(l),xl=a(_," flag. This is useful to us, as records in a SAM file are separated by "),Te=r(_,"CODE",{});var za=i(Te);Gl=a(za,"\\t"),za.forEach(l),Hl=a(_,"(tabs)."),_.forEach(l),Xt.forEach(l),At=d(t),$=r(t,"P",{});var Jt=i($);Pl=a(Jt,"These two points are enough to get you started with "),xe=r(Jt,"CODE",{});var Wa=i(xe);Fl=a(Wa,"awk"),Wa.forEach(l),Nl=a(Jt,". There are a couple of other things you should know too. I\u2019ll use examples to demonstrate them."),Jt.forEach(l),Ct=d(t),re=r(t,"H2",{});var ja=i(re);Bl=a(ja,"Example"),ja.forEach(l),bt=d(t),ie=r(t,"H3",{});var Xa=i(ie);Ul=a(Xa,"Input"),Xa.forEach(l),Dt=d(t),T=r(t,"P",{});var Kt=i(T);Rl=a(Kt,"Lets use following SAM file as input. Lets call it "),Ge=r(Kt,"CODE",{});var Qa=i(Ge);Yl=a(Qa,"sample.sam"),Qa.forEach(l),ql=a(Kt,"."),Kt.forEach(l),Ot=d(t),W=r(t,"PRE",{class:!0});var Ys=i(W);Ys.forEach(l),yt=d(t),ce=r(t,"H3",{});var Ja=i(ce);zl=a(Ja,"Output"),Ja.forEach(l),It=d(t),fe=r(t,"P",{});var Ka=i(fe);Wl=a(Ka,"We expect our script to create two files"),Ka.forEach(l),St=d(t),x=r(t,"UL",{});var Vt=i(x);j=r(Vt,"LI",{});var Zt=i(j);He=r(Zt,"CODE",{});var Va=i(He);jl=a(Va,"ref.sam"),Va.forEach(l),Xl=a(Zt," which contains all the records where reference name is "),Pe=r(Zt,"CODE",{});var Za=i(Pe);Ql=a(Za,"ref"),Za.forEach(l),Zt.forEach(l),Jl=d(Vt),X=r(Vt,"LI",{});var gt=i(X);Fe=r(gt,"CODE",{});var ga=i(Fe);Kl=a(ga,"ref2.sam"),ga.forEach(l),Vl=a(gt," which contains all the records where reference name is "),Ne=r(gt,"CODE",{});var es=i(Ne);Zl=a(es,"ref2"),es.forEach(l),gt.forEach(l),Vt.forEach(l),Mt=d(t),Q=r(t,"H2",{});var ya=i(Q);gl=a(ya,"Minimal hands on with "),Be=r(ya,"CODE",{});var ts=i(Be);eo=a(ts,"awk"),ts.forEach(l),ya.forEach(l),Lt=d(t),E=r(t,"P",{});var U=i(E);to=a(U,"As mentioned earlier, "),Ue=r(U,"CODE",{});var ls=i(Ue);lo=a(ls,"awk"),ls.forEach(l),oo=a(U," reads and processes one record at a time. For each record, you use "),Re=r(U,"CODE",{});var os=i(Re);ao=a(os,"$N"),os.forEach(l),so=a(U," to refer to "),Ye=r(U,"CODE",{});var as=i(Ye);ro=a(as,"Nth"),as.forEach(l),io=a(U," field in your record."),U.forEach(l),$t=d(t),G=r(t,"P",{});var el=i(G);co=a(el,"Say if you want to extract the CIGAR string for each of the records in the above SAM file, you\u2019ll use "),qe=r(el,"CODE",{});var ss=i(qe);fo=a(ss,"$6"),ss.forEach(l),no=a(el,". Here\u2019s a snippet for the same:"),el.forEach(l),Tt=d(t),J=r(t,"PRE",{class:!0});var qs=i(J);qs.forEach(l),xt=d(t),H=r(t,"UL",{});var tl=i(H);ne=r(tl,"LI",{});var Ia=i(ne);ze=r(Ia,"CODE",{});var rs=i(ze);uo=a(rs,"print"),rs.forEach(l),po=a(Ia," is an instruction which simply prints whatever arguments are passed to it."),Ia.forEach(l),ho=d(tl),y=r(tl,"LI",{});var ve=i(y);mo=a(ve,"As mentioned earlier, "),We=r(ve,"CODE",{});var is=i(We);Eo=a(is,"-F"),is.forEach(l),_o=a(ve," is a parameter used to specify the "),je=r(ve,"CODE",{});var cs=i(je);vo=a(cs,"Field Separator"),cs.forEach(l),wo=a(ve," for each record."),ve.forEach(l),tl.forEach(l),Gt=d(t),K=r(t,"P",{});var Sa=i(K);ko=a(Sa,"The above snippet will extract all the CIGAR strings and put them in a file named "),Xe=r(Sa,"CODE",{});var fs=i(Xe);Ao=a(fs,"all-cigars"),fs.forEach(l),Sa.forEach(l),Ht=d(t),de=r(t,"H3",{});var ns=i(de);Co=a(ns,"Another important thing"),ns.forEach(l),Pt=d(t),b=r(t,"P",{});var we=i(b);bo=a(we,"As mentioned above, "),Qe=r(we,"CODE",{});var ds=i(Qe);Do=a(ds,"$1"),ds.forEach(l),Oo=a(we," refers to 1st column, "),Je=r(we,"CODE",{});var us=i(Je);yo=a(us,"$2"),us.forEach(l),Io=a(we," to second column etc."),we.forEach(l),Ft=d(t),ue=r(t,"P",{});var ps=i(ue);V=r(ps,"STRONG",{});var ll=i(V);So=a(ll,"Similarily, "),Ke=r(ll,"CODE",{});var hs=i(Ke);Mo=a(hs,"$0"),hs.forEach(l),Lo=a(ll," refers to whole record"),ll.forEach(l),ps.forEach(l),Nt=d(t),pe=r(t,"H2",{});var ms=i(pe);$o=a(ms,"Final Code"),ms.forEach(l),Bt=d(t),he=r(t,"P",{});var Es=i(he);Ve=r(Es,"STRONG",{});var _s=i(Ve);To=a(_s,"Tested on Ubuntu"),_s.forEach(l),Es.forEach(l),Ut=d(t),Z=r(t,"PRE",{class:!0});var zs=i(Z);zs.forEach(l),Rt=d(t),me=r(t,"H3",{});var vs=i(me);xo=a(vs,"Explanation"),vs.forEach(l),Yt=d(t),P=r(t,"UL",{});var ol=i(P);I=r(ol,"LI",{});var ke=i(I);Go=a(ke,"We have moved the "),Ze=r(ke,"CODE",{});var ws=i(Ze);Ho=a(ws,">"),ws.forEach(l),Po=a(ke," (output redirection) inside "),ge=r(ke,"CODE",{});var ks=i(ge);Fo=a(ks,"awk"),ks.forEach(l),No=a(ke,"."),ke.forEach(l),Bo=d(ol),F=r(ol,"LI",{});var _t=i(F);Uo=a(_t,"We are redirecting the output to "),et=r(_t,"CODE",{});var As=i(et);Ro=a(As,"$3.sam"),As.forEach(l),Yo=a(_t,". "),g=r(_t,"UL",{});var al=i(g);ee=r(al,"LI",{});var sl=i(ee);qo=a(sl,"Notice the double quotes around "),tt=r(sl,"CODE",{});var Cs=i(tt);zo=a(Cs,".sam"),Cs.forEach(l),Wo=a(sl,"."),sl.forEach(l),jo=d(al),w=r(al,"LI",{});var R=i(w);Xo=a(R,"They\u2019re just a marker for "),lt=r(R,"CODE",{});var bs=i(lt);Qo=a(bs,"awk"),bs.forEach(l),Jo=a(R," to treat "),ot=r(R,"CODE",{});var Ds=i(ot);Ko=a(Ds,"$3"),Ds.forEach(l),Vo=a(R," and "),at=r(R,"CODE",{});var Os=i(at);Zo=a(Os,".sam"),Os.forEach(l),go=a(R," as different entities."),R.forEach(l),al.forEach(l),_t.forEach(l),ol.forEach(l),qt=d(t),D=r(t,"P",{});var Ae=i(D);ea=a(Ae,"So ultimately, we\u2019re simply writing "),st=r(Ae,"CODE",{});var ys=i(st);ta=a(ys,"$0"),ys.forEach(l),la=a(Ae,", which represents the whole record (a whole line in this case), to "),rt=r(Ae,"CODE",{});var Is=i(rt);oa=a(Is,"$3.sam"),Is.forEach(l),aa=a(Ae,". Hence,"),Ae.forEach(l),zt=d(t),N=r(t,"UL",{});var rl=i(N);O=r(rl,"LI",{});var le=i(O);sa=a(le,"All the records where "),it=r(le,"CODE",{});var Ss=i(it);ra=a(Ss,"$3"),Ss.forEach(l),ia=a(le," is "),ct=r(le,"CODE",{});var Ms=i(ct);ca=a(Ms,"ref"),Ms.forEach(l),fa=a(le," will be written to a file named "),ft=r(le,"CODE",{});var Ls=i(ft);na=a(Ls,"ref.sam"),Ls.forEach(l),le.forEach(l),da=d(rl),k=r(rl,"LI",{});var Y=i(k);ua=a(Y,"All records where "),nt=r(Y,"CODE",{});var $s=i(nt);pa=a($s,"$3"),$s.forEach(l),ha=a(Y," is "),dt=r(Y,"CODE",{});var Ts=i(dt);ma=a(Ts,"ref2"),Ts.forEach(l),Ea=a(Y," will be written to a file named "),ut=r(Y,"CODE",{});var xs=i(ut);_a=a(xs,"ref2.sam"),xs.forEach(l),va=a(Y,"."),Y.forEach(l),rl.forEach(l),Wt=d(t),Ee=r(t,"H2",{});var Gs=i(Ee);wa=a(Gs,"Benchmarks"),Gs.forEach(l),jt=d(t),B=r(t,"UL",{});var il=i(B);te=r(il,"LI",{});var cl=i(te);ka=a(cl,"It takes ~45 minutes to split a BAM file of 61GB on Intel\xAE Xeon\xAE E5-2698 v3, having clock speed 2.3GHz and turbo speed 3.0GHz. Number of cores doesn\u2019t matter, as "),pt=r(cl,"CODE",{});var Hs=i(pt);Aa=a(Hs,"awk"),Hs.forEach(l),Ca=a(cl," uses only one core at a time."),cl.forEach(l),ba=d(il),ht=r(il,"LI",{});var Ps=i(ht);Da=a(Ps,"Your I/O device might make a difference in runtime. SSDs will give you lower runtime as compared to traditional HDDs."),Ps.forEach(l),il.forEach(l),this.h()},h(){Ma(W,"class","language-undefined"),Ma(J,"class","language-bash"),Ma(Z,"class","language-bash")},m(t,c){f(t,u,c),e(u,A),f(t,C,c),f(t,m,c),e(m,p),e(p,v),e(m,ae),e(m,S),e(S,fl),e(S,Ce),e(Ce,nl),e(S,dl),e(S,be),e(be,ul),e(m,pl),e(m,M),e(M,hl),e(M,De),e(De,ml),e(M,El),e(M,Oe),e(Oe,_l),f(t,vt,c),f(t,se,c),e(se,vl),f(t,wt,c),f(t,q,c),e(q,ye),e(ye,wl),e(q,kl),f(t,kt,c),f(t,L,c),e(L,z),e(z,Al),e(z,Ie),e(Ie,Cl),e(z,bl),e(L,Dl),e(L,h),e(h,Ol),e(h,Se),e(Se,yl),e(h,Il),e(h,Me),e(Me,Sl),e(h,Ml),e(h,Le),e(Le,Ll),e(h,$l),e(h,$e),e($e,Tl),e(h,xl),e(h,Te),e(Te,Gl),e(h,Hl),f(t,At,c),f(t,$,c),e($,Pl),e($,xe),e(xe,Fl),e($,Nl),f(t,Ct,c),f(t,re,c),e(re,Bl),f(t,bt,c),f(t,ie,c),e(ie,Ul),f(t,Dt,c),f(t,T,c),e(T,Rl),e(T,Ge),e(Ge,Yl),e(T,ql),f(t,Ot,c),f(t,W,c),W.innerHTML=Bs,f(t,yt,c),f(t,ce,c),e(ce,zl),f(t,It,c),f(t,fe,c),e(fe,Wl),f(t,St,c),f(t,x,c),e(x,j),e(j,He),e(He,jl),e(j,Xl),e(j,Pe),e(Pe,Ql),e(x,Jl),e(x,X),e(X,Fe),e(Fe,Kl),e(X,Vl),e(X,Ne),e(Ne,Zl),f(t,Mt,c),f(t,Q,c),e(Q,gl),e(Q,Be),e(Be,eo),f(t,Lt,c),f(t,E,c),e(E,to),e(E,Ue),e(Ue,lo),e(E,oo),e(E,Re),e(Re,ao),e(E,so),e(E,Ye),e(Ye,ro),e(E,io),f(t,$t,c),f(t,G,c),e(G,co),e(G,qe),e(qe,fo),e(G,no),f(t,Tt,c),f(t,J,c),J.innerHTML=Us,f(t,xt,c),f(t,H,c),e(H,ne),e(ne,ze),e(ze,uo),e(ne,po),e(H,ho),e(H,y),e(y,mo),e(y,We),e(We,Eo),e(y,_o),e(y,je),e(je,vo),e(y,wo),f(t,Gt,c),f(t,K,c),e(K,ko),e(K,Xe),e(Xe,Ao),f(t,Ht,c),f(t,de,c),e(de,Co),f(t,Pt,c),f(t,b,c),e(b,bo),e(b,Qe),e(Qe,Do),e(b,Oo),e(b,Je),e(Je,yo),e(b,Io),f(t,Ft,c),f(t,ue,c),e(ue,V),e(V,So),e(V,Ke),e(Ke,Mo),e(V,Lo),f(t,Nt,c),f(t,pe,c),e(pe,$o),f(t,Bt,c),f(t,he,c),e(he,Ve),e(Ve,To),f(t,Ut,c),f(t,Z,c),Z.innerHTML=Rs,f(t,Rt,c),f(t,me,c),e(me,xo),f(t,Yt,c),f(t,P,c),e(P,I),e(I,Go),e(I,Ze),e(Ze,Ho),e(I,Po),e(I,ge),e(ge,Fo),e(I,No),e(P,Bo),e(P,F),e(F,Uo),e(F,et),e(et,Ro),e(F,Yo),e(F,g),e(g,ee),e(ee,qo),e(ee,tt),e(tt,zo),e(ee,Wo),e(g,jo),e(g,w),e(w,Xo),e(w,lt),e(lt,Qo),e(w,Jo),e(w,ot),e(ot,Ko),e(w,Vo),e(w,at),e(at,Zo),e(w,go),f(t,qt,c),f(t,D,c),e(D,ea),e(D,st),e(st,ta),e(D,la),e(D,rt),e(rt,oa),e(D,aa),f(t,zt,c),f(t,N,c),e(N,O),e(O,sa),e(O,it),e(it,ra),e(O,ia),e(O,ct),e(ct,ca),e(O,fa),e(O,ft),e(ft,na),e(N,da),e(N,k),e(k,ua),e(k,nt),e(nt,pa),e(k,ha),e(k,dt),e(dt,ma),e(k,Ea),e(k,ut),e(ut,_a),e(k,va),f(t,Wt,c),f(t,Ee,c),e(Ee,wa),f(t,jt,c),f(t,B,c),e(B,te),e(te,ka),e(te,pt),e(pt,Aa),e(te,Ca),e(B,ba),e(B,ht),e(ht,Da)},p:tr,d(t){t&&l(u),t&&l(C),t&&l(m),t&&l(vt),t&&l(se),t&&l(wt),t&&l(q),t&&l(kt),t&&l(L),t&&l(At),t&&l($),t&&l(Ct),t&&l(re),t&&l(bt),t&&l(ie),t&&l(Dt),t&&l(T),t&&l(Ot),t&&l(W),t&&l(yt),t&&l(ce),t&&l(It),t&&l(fe),t&&l(St),t&&l(x),t&&l(Mt),t&&l(Q),t&&l(Lt),t&&l(E),t&&l($t),t&&l(G),t&&l(Tt),t&&l(J),t&&l(xt),t&&l(H),t&&l(Gt),t&&l(K),t&&l(Ht),t&&l(de),t&&l(Pt),t&&l(b),t&&l(Ft),t&&l(ue),t&&l(Nt),t&&l(pe),t&&l(Bt),t&&l(he),t&&l(Ut),t&&l(Z),t&&l(Rt),t&&l(me),t&&l(Yt),t&&l(P),t&&l(qt),t&&l(D),t&&l(zt),t&&l(N),t&&l(Wt),t&&l(Ee),t&&l(jt),t&&l(B)}}}function ar(oe){let u,A;const C=[oe[0],$a];let m={$$slots:{default:[or]},$$scope:{ctx:oe}};for(let p=0;p<C.length;p+=1)m=La(m,C[p]);return u=new lr({props:m}),{c(){Qs(u.$$.fragment)},l(p){Js(u.$$.fragment,p)},m(p,v){Ks(u,p,v),A=!0},p(p,[v]){const ae=v&1?Vs(C,[v&1&&Fs(p[0]),v&0&&Fs($a)]):{};v&2&&(ae.$$scope={dirty:v,ctx:p}),u.$set(ae)},i(p){A||(Zs(u.$$.fragment,p),A=!0)},o(p){gs(u.$$.fragment,p),A=!1},d(p){er(u,p)}}}const $a={series:"Leveraging GNU Core utils in bioinfornmatics",title:"Efficiently Splitting SAM/BAM file by reference name using awk",date:"11 March, 2022",categories:["GNU Tools","shorts","bioinformatics"],description:"An article explaining how to efficiently split a SAM/BAM file using awk",author:"Prakash"};function sr(oe,u,A){return oe.$$set=C=>{A(0,u=La(La({},u),Ns(C)))},u=Ns(u),[u]}class rr extends Ws{constructor(u){super();js(this,u,sr,ar,Xs,{})}}var fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rr,metadata:$a});export{rr as E,fr as _,$a as m};