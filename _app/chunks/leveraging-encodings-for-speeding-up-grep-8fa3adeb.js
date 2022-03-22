import{S as Nc,i as Gc,s as Mc,C as Hi,w as Yc,x as Wc,y as $c,z as zc,A as Dc,q as Kc,o as Qc,B as Xc,P as Uc,e as a,t as l,k as f,c as r,a as i,h as s,d as o,m as d,b as F,g as c,I as t,M as Zc}from"./vendor-e6930037.js";import{P as gc}from"./_posts-0ccc0035.js";function Jc(Ce){let p,A,L,T,u,v,I,rt,Kl,Ql,te,Xl,it,Zl,gl,ko,Ie,Jl,So,Ae,Vl,Do,oe,xc='<code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>C</code>',Uo,le,es,nt,ts,xo,se,os,ct,ls,Po,ae,ft,ss,as,Fo,re,Pc='<code class="language-bash"><span class="token function">grep</span> \u2018<span class="token operator">></span>\u2019 in.fasta</code>',Ho,O,rs,dt,is,ns,pt,cs,fs,jo,k,ds,ut,ps,us,ht,hs,vs,qo,Le,ms,Ro,Te,ys,Bo,m,Oe,vt,Es,_s,ws,ke,mt,bs,Cs,Is,Se,yt,As,Ls,Ts,De,Et,Os,ks,No,H,Ss,_t,Ds,Us,wt,xs,Go,Ue,Ps,Mo,Y,bt,Fs,Hs,j,js,Ct,qs,Rs,It,Bs,Ns,Yo,xe,Gs,Wo,Pe,Ms,$o,Fe,ie,Ys,zo,He,Ws,Ko,h,y,At,$s,zs,Lt,Ks,Qs,Tt,Xs,Zs,Ot,gs,Js,Vs,E,kt,ea,ta,St,oa,la,Dt,sa,aa,Ut,ra,ia,na,S,xt,ca,fa,Pt,da,pa,Ft,ua,ha,va,Ht,ma,ya,jt,Ea,Qo,je,_a,Xo,_,wa,qt,ba,Ca,Rt,Ia,Aa,Bt,La,Ta,Zo,q,Nt,Oa,ka,Gt,Sa,Da,go,R,Mt,Ua,xa,Yt,Pa,Fa,Jo,qe,Ha,Vo,W,ja,Wt,qa,Ra,el,$,ne,Ba,$t,Na,Ga,Ma,ce,Ya,zt,Wa,$a,tl,Re,za,ol,z,w,Kt,Ka,Qa,Qt,Xa,Za,Xt,ga,Ja,Zt,Va,er,tr,gt,or,ll,Be,lr,sl,Ne,Jt,sr,al,Ge,ar,rl,Me,rr,il,Ye,fe,ir,nl,de,Vt,nr,cr,cl,We,fr,fl,K,dr,eo,pr,ur,dl,$e,hr,pl,ze,vr,ul,b,to,mr,yr,Ke,Er,oo,lo,_r,wr,pe,br,so,Cr,Ir,Ar,Qe,Lr,ue,ao,Tr,Or,he,kr,ro,Sr,Dr,hl,Q,Ur,io,xr,Pr,vl,Xe,Fr,ml,X,Hr,no,jr,qr,yl,Ze,Rr,El,Z,Br,co,Nr,Gr,_l,D,Mr,fo,Yr,Wr,po,$r,zr,wl,C,Kr,uo,Qr,Xr,ho,Zr,gr,vo,Jr,Vr,bl,ve,ei,mo,ti,Cl,ge,oi,Il,me,Fc='<code class="language-bash"><span class="token function">grep</span> \u2018<span class="token operator">></span>\u2019 in.fasta</code>',Al,U,li,yo,si,ai,Eo,ri,ii,Ll,Je,ni,Tl,ye,Hc=`<code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>C
<span class="token function">grep</span> \u2018<span class="token operator">></span>\u2019 in.fasta</code>`,Ol,x,ci,_o,fi,di,wo,pi,ui,kl,Ve,Ee,hi,bo,vi,mi,Sl,B,yi,Co,Ei,_i,Io,wi,Dl,_e,bi,we,Ci;return{c(){p=a("h1"),A=l("Leveraging encodings to speedup grep"),L=f(),T=a("h2"),u=l("Target Audience"),v=f(),I=a("ul"),rt=a("li"),Kl=l("You know what a FASTA file looks like"),Ql=f(),te=a("li"),Xl=l("You know the "),it=a("em"),Zl=l("bits and bytes"),gl=l(" of storage (pun intended \u{1F61B})"),ko=f(),Ie=a("h2"),Jl=l("TL;DR"),So=f(),Ae=a("p"),Vl=l("Run"),Do=f(),oe=a("pre"),Uo=f(),le=a("p"),es=l("before running your grep statement. Based on your system settings, this might give you a speedup of "),nt=a("strong"),ts=l(">500%."),xo=f(),se=a("h2"),os=l("A quick intro to "),ct=a("code"),ls=l("grep"),Po=f(),ae=a("p"),ft=a("code"),ss=l("grep"),as=l(" is a GNU utility used for searching files for lines that match a given set of patterns. For example, if you wish to retrieve all the headers in a FASTA file, you can do"),Fo=f(),re=a("pre"),Ho=f(),O=a("p"),rs=l("This will retrieve all the lines that contain the character "),dt=a("code"),is=l(">"),ns=l(". Since all the FASTA headers start with "),pt=a("code"),cs=l(">"),fs=l(", this will retrieve all the FASTA headers."),jo=f(),k=a("p"),ds=l("Note that "),ut=a("code"),ps=l(">"),us=l(" can\u2019t occur anywhere else in the FASTA file, apart from the header. Hence, it is guaranteed that only headers will be returned. We can specify a better search pattern, which will restrict the search to return only the lines which start with "),ht=a("code"),hs=l(">"),vs=l(", but that\u2019s out of scope for this article."),qo=f(),Le=a("h2"),ms=l("A quick intro to encodings"),Ro=f(),Te=a("p"),ys=l("Encodings are a way to represent characters in numbers so that they can be understood by a machine. For example, Assume you (arbitrarily) declare that"),Bo=f(),m=a("ul"),Oe=a("li"),vt=a("code"),Es=l("A"),_s=l(" is represented as 65"),ws=f(),ke=a("li"),mt=a("code"),bs=l("H"),Cs=l(" is represented as 72"),Is=f(),Se=a("li"),yt=a("code"),As=l("a"),Ls=l(" is represented as 97"),Ts=f(),De=a("li"),Et=a("code"),Os=l("h"),ks=l(" is represented as 104"),No=f(),H=a("p"),Ss=l("Then, your computer will understand "),_t=a("code"),Ds=l("HahA"),Us=l(" as "),wt=a("code"),xs=l("72 97 104 65"),Go=f(),Ue=a("p"),Ps=l("Note:"),Mo=f(),Y=a("ul"),bt=a("li"),Fs=l("Spaces around numbers are just for illustrative purposes"),Hs=f(),j=a("li"),js=l("The computer will finally store the values in binary format, as it only understands "),Ct=a("code"),qs=l("0s"),Rs=l(" and "),It=a("code"),Bs=l("1s"),Ns=l(". How to calculate binary representation of a given integer is a topic for a separate day"),Yo=f(),xe=a("h2"),Gs=l("ASCII Encoding"),Wo=f(),Pe=a("p"),Ms=l("ASCII is one of the simplest and most common encodings currently in use. It encodes 128 different characters i.e. assigns integer values to 128 different characters."),$o=f(),Fe=a("p"),ie=a("a"),Ys=l("Click here to see the whole table"),zo=f(),He=a("p"),Ws=l("In a nutshell,"),Ko=f(),h=a("ul"),y=a("li"),At=a("code"),$s=l("A"),zs=l(" is represented as 65, "),Lt=a("code"),Ks=l("B"),Qs=l(" as 66, "),Tt=a("code"),Xs=l("C"),Zs=l(" as 67 \u2026 "),Ot=a("code"),gs=l("Z"),Js=l(" as 90"),Vs=f(),E=a("li"),kt=a("code"),ea=l("a"),ta=l(" is represented as 97, "),St=a("code"),oa=l("b"),la=l(" as 98, "),Dt=a("code"),sa=l("c"),aa=l(" as 99 \u2026 "),Ut=a("code"),ra=l("z"),ia=l(" as 122"),na=f(),S=a("li"),xt=a("code"),ca=l("0"),fa=l(" is represented as 48, "),Pt=a("code"),da=l("1"),pa=l(" as 49 \u2026 "),Ft=a("code"),ua=l("9"),ha=l(" as 57"),va=f(),Ht=a("li"),ma=l("Other numbers represent things like space, enter key, backspace, symbols (+, -, etc.) escape sequences (newlines, tabs, null character, etc)."),ya=f(),jt=a("li"),Ea=l("Every ASCII encoded character takes exactly 1 byte of memory."),Qo=f(),je=a("h2"),_a=l("Unicode Character Set"),Xo=f(),_=a("p"),wa=l("If you\u2019ve heard anything about encoding, then you must\u2019ve heard about "),qt=a("code"),ba=l("Unicode"),Ca=l(". The need for "),Rt=a("code"),Ia=l("Unicode"),Aa=l(" arose because "),Bt=a("code"),La=l("ASCII"),Ta=l(" wasn\u2019t designed to handle more than 128 characters."),Zo=f(),q=a("p"),Nt=a("code"),Oa=l("ASCII"),ka=l(" worked perfectly in the 60s and 70s as there were very few computers and even fewer groups using computers. But, with the advent of the internet, and the widespread adoption of computers in different parts of the world, encoding different character sets became a major requirement. For example, computers had no way of understanding Hindi characters like \u0905, \u0906, etc. We needed a way to encode them, and "),Gt=a("code"),Sa=l("Unicode"),Da=l(" provided a way to do just that. It simply mapped a given character to some unique number."),go=f(),R=a("p"),Mt=a("strong"),Ua=l("Note"),xa=l(": "),Yt=a("code"),Pa=l("Unicode"),Fa=l(" doesn\u2019t contain every character from every language."),Jo=f(),qe=a("h2"),Ha=l("UTF-8 encoding"),Vo=f(),W=a("p"),ja=l("As mentioned above, "),Wt=a("code"),qa=l("Unicode"),Ra=l(" just maps a character to a number. It does not specify how that number is stored in the computer. For example, let\u2019s say we decide to"),el=f(),$=a("ul"),ne=a("li"),Ba=l("Represent "),$t=a("code"),Na=l("A"),Ga=l(" as 65"),Ma=f(),ce=a("li"),Ya=l("Represent "),zt=a("code"),Wa=l("\u0906"),$a=l(" as 995."),tl=f(),Re=a("p"),za=l("Now, assuming a byte is an absolute unit of storage, You can store"),ol=f(),z=a("ul"),w=a("li"),Kt=a("code"),Ka=l("A"),Qa=l(" using 1 byte and "),Qt=a("code"),Xa=l("\u0906"),Za=l(" using 2 bytes. (As "),Xt=a("code"),ga=l("65 < 256"),Ja=l(", and "),Zt=a("code"),Va=l("256 < 995 < 256 * 256"),er=l(" )"),tr=f(),gt=a("li"),or=l("both using 2 bytes. In this case, you\u2019ll waste 1 extra byte while storing A"),ll=f(),Be=a("p"),lr=l("The point of this example was to show that one Unicode character can be stored in multiple ways."),sl=f(),Ne=a("blockquote"),Jt=a("p"),sr=l("UTF-8 is one of the ways to store Unicode characters. It is designed to encode millions of characters, while ASCII only encodes 128 characters."),al=f(),Ge=a("p"),ar=l("Another thing to note about UTF-8 is it is compatible with ASCII i.e. any ASCII encoded character is a valid UTF-8 encoded character."),rl=f(),Me=a("p"),rr=l("If you\u2019re a software engineer or are really psyched up about encodings, you should definitely read the following blog post"),il=f(),Ye=a("p"),fe=a("a"),ir=l("The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)"),nl=f(),de=a("h2"),Vt=a("code"),nr=l("LC_"),cr=l(" variables"),cl=f(),We=a("p"),fr=l("Ever tried copy-pasting some non-English (let\u2019s say Hindi) characters from some webpage to your terminal, or tried printing them to your console? You\u2019ll notice that they\u2019ll work."),fl=f(),K=a("p"),dr=l("Who tells your system to expect "),eo=a("code"),pr=l("UTF-8"),ur=l(" encoded characters, and more importantly, how can you change this behavior?"),dl=f(),$e=a("h3"),hr=l("A small experiment"),pl=f(),ze=a("p"),vr=l("Let\u2019s try to answer these questions with an experiment."),ul=f(),b=a("ol"),to=a("li"),mr=l("Open a new terminal instance."),yr=f(),Ke=a("li"),Er=l("Copy \u{1F602}\xA0to your terminal. "),oo=a("ol"),lo=a("li"),_r=l("If you\u2019re using modern OS, you\u2019ll notice that the emoji gets copied perfectly."),wr=f(),pe=a("li"),br=l("Run "),so=a("code"),Cr=l("export LC_ALL=C"),Ir=l(" in your terminal."),Ar=f(),Qe=a("li"),Lr=l("Copy \u{1F602}\xA0again and paste it into your terminal. "),ue=a("ol"),ao=a("li"),Tr=l("This time you\u2019ll notice that emoji doesn\u2019t get copied."),Or=f(),he=a("li"),kr=l("Instead, something like "),ro=a("code"),Sr=l("\uFFFD<009f><0098><0082>"),Dr=l(" shows up."),hl=f(),Q=a("p"),Ur=l("P.S.: Yes, emojis are also characters having some "),io=a("code"),xr=l("Unicode"),Pr=l(" representation \u{1F61B}"),vl=f(),Xe=a("h3"),Fr=l("Explanation"),ml=f(),X=a("p"),Hr=l("So, what happened when we ran "),no=a("code"),jr=l("export LC_ALL=C"),qr=l("?"),yl=f(),Ze=a("p"),Rr=l("Unix/Unix-like systems have multiple environmental variables which control settings related to locale. Things like the format to show dates, the default currency, the default address format, telephone format, etc can be controlled using by setting these environment variables.  This also includes how to interpret and print characters on your terminal."),El=f(),Z=a("p"),Br=l("These variables are initialized while installing your OS. If your OS is modern, then by default, they use some UTF-8 encoding. All of these variables can be set individually or can be set at once using the "),co=a("code"),Nr=l("LC_ALL"),Gr=l(" variable."),_l=f(),D=a("p"),Mr=l("The moment you set "),fo=a("code"),Yr=l("LC_ALL=C"),Wr=l(", your system locale got changed to "),po=a("code"),$r=l("C"),zr=l(", which is the simplest locale. It uses ASCII for encoding the characters. And since ASCII can\u2019t represent \u{1F602}\xA0(an emoji), you end up seeing the mysterious values."),wl=f(),C=a("p"),Kr=l("Run "),uo=a("code"),Qr=l("export LC_ALL=en_GB.UTF-8"),Xr=l(" in your terminal and copy \u{1F602}\xA0again. This time you\u2019ll see the emoji. Why? Because you changed your system locale back to "),ho=a("code"),Zr=l("en_GB.UTF-8"),gr=l(", which uses UTF-8 encoding. (This assumes that you have "),vo=a("code"),Jr=l("en_GB"),Vr=l(" locale available on your system.)"),bl=f(),ve=a("h2"),ei=l("Tying everything together: Speeding up "),mo=a("code"),ti=l("grep"),Cl=f(),ge=a("p"),oi=l("When you run"),Il=f(),me=a("pre"),Al=f(),U=a("p"),li=l("without explicitly specifying any locale, "),yo=a("code"),si=l("grep"),ai=l(" assumes that the file "),Eo=a("code"),ri=l("in.fasta"),ii=l(" contains UTF-8 encoded characters."),Ll=f(),Je=a("p"),ni=l("Instead, if you run"),Tl=f(),ye=a("pre"),Ol=f(),x=a("p"),ci=l(", "),_o=a("code"),fi=l("grep"),di=l(" assumes that "),wo=a("code"),pi=l("in.fasta"),ui=l(" only contains ASCII characters, which is essentially true for most of the use cases in bioinformatics."),kl=f(),Ve=a("blockquote"),Ee=a("p"),hi=l("You may ask what\u2019s the difference between these two cases? The answer lies in the number of characters encoded by UTF-8 and ASCII. UTF-8 encodes over a million characters, while ASCII encodes only 128. And hence, "),bo=a("code"),vi=l("grep"),mi=l(" has to do a lot less processing when it knows that the file contains only ASCII data."),Sl=f(),B=a("p"),yi=l("And due to this, just by simply adding an "),Co=a("code"),Ei=l("export"),_i=l(" statement, you can speed up your grep execution by over "),Io=a("strong"),wi=l("500%"),Dl=f(),_e=a("p"),bi=l("In order to get a detailed benchmark report, you can "),we=a("a"),Ci=l("visit this link"),this.h()},l(e){p=r(e,"H1",{});var n=i(p);A=s(n,"Leveraging encodings to speedup grep"),n.forEach(o),L=d(e),T=r(e,"H2",{});var qi=i(T);u=s(qi,"Target Audience"),qi.forEach(o),v=d(e),I=r(e,"UL",{});var Ul=i(I);rt=r(Ul,"LI",{});var Ri=i(rt);Kl=s(Ri,"You know what a FASTA file looks like"),Ri.forEach(o),Ql=d(Ul),te=r(Ul,"LI",{});var xl=i(te);Xl=s(xl,"You know the "),it=r(xl,"EM",{});var Bi=i(it);Zl=s(Bi,"bits and bytes"),Bi.forEach(o),gl=s(xl," of storage (pun intended \u{1F61B})"),xl.forEach(o),Ul.forEach(o),ko=d(e),Ie=r(e,"H2",{});var Ni=i(Ie);Jl=s(Ni,"TL;DR"),Ni.forEach(o),So=d(e),Ae=r(e,"P",{});var Gi=i(Ae);Vl=s(Gi,"Run"),Gi.forEach(o),Do=d(e),oe=r(e,"PRE",{class:!0});var jc=i(oe);jc.forEach(o),Uo=d(e),le=r(e,"P",{});var Ii=i(le);es=s(Ii,"before running your grep statement. Based on your system settings, this might give you a speedup of "),nt=r(Ii,"STRONG",{});var Mi=i(nt);ts=s(Mi,">500%."),Mi.forEach(o),Ii.forEach(o),xo=d(e),se=r(e,"H2",{});var Ai=i(se);os=s(Ai,"A quick intro to "),ct=r(Ai,"CODE",{});var Yi=i(ct);ls=s(Yi,"grep"),Yi.forEach(o),Ai.forEach(o),Po=d(e),ae=r(e,"P",{});var Li=i(ae);ft=r(Li,"CODE",{});var Wi=i(ft);ss=s(Wi,"grep"),Wi.forEach(o),as=s(Li," is a GNU utility used for searching files for lines that match a given set of patterns. For example, if you wish to retrieve all the headers in a FASTA file, you can do"),Li.forEach(o),Fo=d(e),re=r(e,"PRE",{class:!0});var qc=i(re);qc.forEach(o),Ho=d(e),O=r(e,"P",{});var et=i(O);rs=s(et,"This will retrieve all the lines that contain the character "),dt=r(et,"CODE",{});var $i=i(dt);is=s($i,">"),$i.forEach(o),ns=s(et,". Since all the FASTA headers start with "),pt=r(et,"CODE",{});var zi=i(pt);cs=s(zi,">"),zi.forEach(o),fs=s(et,", this will retrieve all the FASTA headers."),et.forEach(o),jo=d(e),k=r(e,"P",{});var tt=i(k);ds=s(tt,"Note that "),ut=r(tt,"CODE",{});var Ki=i(ut);ps=s(Ki,">"),Ki.forEach(o),us=s(tt," can\u2019t occur anywhere else in the FASTA file, apart from the header. Hence, it is guaranteed that only headers will be returned. We can specify a better search pattern, which will restrict the search to return only the lines which start with "),ht=r(tt,"CODE",{});var Qi=i(ht);hs=s(Qi,">"),Qi.forEach(o),vs=s(tt,", but that\u2019s out of scope for this article."),tt.forEach(o),qo=d(e),Le=r(e,"H2",{});var Xi=i(Le);ms=s(Xi,"A quick intro to encodings"),Xi.forEach(o),Ro=d(e),Te=r(e,"P",{});var Zi=i(Te);ys=s(Zi,"Encodings are a way to represent characters in numbers so that they can be understood by a machine. For example, Assume you (arbitrarily) declare that"),Zi.forEach(o),Bo=d(e),m=r(e,"UL",{});var g=i(m);Oe=r(g,"LI",{});var Ti=i(Oe);vt=r(Ti,"CODE",{});var gi=i(vt);Es=s(gi,"A"),gi.forEach(o),_s=s(Ti," is represented as 65"),Ti.forEach(o),ws=d(g),ke=r(g,"LI",{});var Oi=i(ke);mt=r(Oi,"CODE",{});var Ji=i(mt);bs=s(Ji,"H"),Ji.forEach(o),Cs=s(Oi," is represented as 72"),Oi.forEach(o),Is=d(g),Se=r(g,"LI",{});var ki=i(Se);yt=r(ki,"CODE",{});var Vi=i(yt);As=s(Vi,"a"),Vi.forEach(o),Ls=s(ki," is represented as 97"),ki.forEach(o),Ts=d(g),De=r(g,"LI",{});var Si=i(De);Et=r(Si,"CODE",{});var en=i(Et);Os=s(en,"h"),en.forEach(o),ks=s(Si," is represented as 104"),Si.forEach(o),g.forEach(o),No=d(e),H=r(e,"P",{});var Ao=i(H);Ss=s(Ao,"Then, your computer will understand "),_t=r(Ao,"CODE",{});var tn=i(_t);Ds=s(tn,"HahA"),tn.forEach(o),Us=s(Ao," as "),wt=r(Ao,"CODE",{});var on=i(wt);xs=s(on,"72 97 104 65"),on.forEach(o),Ao.forEach(o),Go=d(e),Ue=r(e,"P",{});var ln=i(Ue);Ps=s(ln,"Note:"),ln.forEach(o),Mo=d(e),Y=r(e,"UL",{});var Pl=i(Y);bt=r(Pl,"LI",{});var sn=i(bt);Fs=s(sn,"Spaces around numbers are just for illustrative purposes"),sn.forEach(o),Hs=d(Pl),j=r(Pl,"LI",{});var ot=i(j);js=s(ot,"The computer will finally store the values in binary format, as it only understands "),Ct=r(ot,"CODE",{});var an=i(Ct);qs=s(an,"0s"),an.forEach(o),Rs=s(ot," and "),It=r(ot,"CODE",{});var rn=i(It);Bs=s(rn,"1s"),rn.forEach(o),Ns=s(ot,". How to calculate binary representation of a given integer is a topic for a separate day"),ot.forEach(o),Pl.forEach(o),Yo=d(e),xe=r(e,"H2",{});var nn=i(xe);Gs=s(nn,"ASCII Encoding"),nn.forEach(o),Wo=d(e),Pe=r(e,"P",{});var cn=i(Pe);Ms=s(cn,"ASCII is one of the simplest and most common encodings currently in use. It encodes 128 different characters i.e. assigns integer values to 128 different characters."),cn.forEach(o),$o=d(e),Fe=r(e,"P",{});var fn=i(Fe);ie=r(fn,"A",{href:!0,rel:!0});var dn=i(ie);Ys=s(dn,"Click here to see the whole table"),dn.forEach(o),fn.forEach(o),zo=d(e),He=r(e,"P",{});var pn=i(He);Ws=s(pn,"In a nutshell,"),pn.forEach(o),Ko=d(e),h=r(e,"UL",{});var P=i(h);y=r(P,"LI",{});var N=i(y);At=r(N,"CODE",{});var un=i(At);$s=s(un,"A"),un.forEach(o),zs=s(N," is represented as 65, "),Lt=r(N,"CODE",{});var hn=i(Lt);Ks=s(hn,"B"),hn.forEach(o),Qs=s(N," as 66, "),Tt=r(N,"CODE",{});var vn=i(Tt);Xs=s(vn,"C"),vn.forEach(o),Zs=s(N," as 67 \u2026 "),Ot=r(N,"CODE",{});var mn=i(Ot);gs=s(mn,"Z"),mn.forEach(o),Js=s(N," as 90"),N.forEach(o),Vs=d(P),E=r(P,"LI",{});var G=i(E);kt=r(G,"CODE",{});var yn=i(kt);ea=s(yn,"a"),yn.forEach(o),ta=s(G," is represented as 97, "),St=r(G,"CODE",{});var En=i(St);oa=s(En,"b"),En.forEach(o),la=s(G," as 98, "),Dt=r(G,"CODE",{});var _n=i(Dt);sa=s(_n,"c"),_n.forEach(o),aa=s(G," as 99 \u2026 "),Ut=r(G,"CODE",{});var wn=i(Ut);ra=s(wn,"z"),wn.forEach(o),ia=s(G," as 122"),G.forEach(o),na=d(P),S=r(P,"LI",{});var be=i(S);xt=r(be,"CODE",{});var bn=i(xt);ca=s(bn,"0"),bn.forEach(o),fa=s(be," is represented as 48, "),Pt=r(be,"CODE",{});var Cn=i(Pt);da=s(Cn,"1"),Cn.forEach(o),pa=s(be," as 49 \u2026 "),Ft=r(be,"CODE",{});var In=i(Ft);ua=s(In,"9"),In.forEach(o),ha=s(be," as 57"),be.forEach(o),va=d(P),Ht=r(P,"LI",{});var An=i(Ht);ma=s(An,"Other numbers represent things like space, enter key, backspace, symbols (+, -, etc.) escape sequences (newlines, tabs, null character, etc)."),An.forEach(o),ya=d(P),jt=r(P,"LI",{});var Ln=i(jt);Ea=s(Ln,"Every ASCII encoded character takes exactly 1 byte of memory."),Ln.forEach(o),P.forEach(o),Qo=d(e),je=r(e,"H2",{});var Tn=i(je);_a=s(Tn,"Unicode Character Set"),Tn.forEach(o),Xo=d(e),_=r(e,"P",{});var J=i(_);wa=s(J,"If you\u2019ve heard anything about encoding, then you must\u2019ve heard about "),qt=r(J,"CODE",{});var On=i(qt);ba=s(On,"Unicode"),On.forEach(o),Ca=s(J,". The need for "),Rt=r(J,"CODE",{});var kn=i(Rt);Ia=s(kn,"Unicode"),kn.forEach(o),Aa=s(J," arose because "),Bt=r(J,"CODE",{});var Sn=i(Bt);La=s(Sn,"ASCII"),Sn.forEach(o),Ta=s(J," wasn\u2019t designed to handle more than 128 characters."),J.forEach(o),Zo=d(e),q=r(e,"P",{});var Lo=i(q);Nt=r(Lo,"CODE",{});var Dn=i(Nt);Oa=s(Dn,"ASCII"),Dn.forEach(o),ka=s(Lo," worked perfectly in the 60s and 70s as there were very few computers and even fewer groups using computers. But, with the advent of the internet, and the widespread adoption of computers in different parts of the world, encoding different character sets became a major requirement. For example, computers had no way of understanding Hindi characters like \u0905, \u0906, etc. We needed a way to encode them, and "),Gt=r(Lo,"CODE",{});var Un=i(Gt);Sa=s(Un,"Unicode"),Un.forEach(o),Da=s(Lo," provided a way to do just that. It simply mapped a given character to some unique number."),Lo.forEach(o),go=d(e),R=r(e,"P",{});var To=i(R);Mt=r(To,"STRONG",{});var xn=i(Mt);Ua=s(xn,"Note"),xn.forEach(o),xa=s(To,": "),Yt=r(To,"CODE",{});var Pn=i(Yt);Pa=s(Pn,"Unicode"),Pn.forEach(o),Fa=s(To," doesn\u2019t contain every character from every language."),To.forEach(o),Jo=d(e),qe=r(e,"H2",{});var Fn=i(qe);Ha=s(Fn,"UTF-8 encoding"),Fn.forEach(o),Vo=d(e),W=r(e,"P",{});var Fl=i(W);ja=s(Fl,"As mentioned above, "),Wt=r(Fl,"CODE",{});var Hn=i(Wt);qa=s(Hn,"Unicode"),Hn.forEach(o),Ra=s(Fl," just maps a character to a number. It does not specify how that number is stored in the computer. For example, let\u2019s say we decide to"),Fl.forEach(o),el=d(e),$=r(e,"UL",{});var Hl=i($);ne=r(Hl,"LI",{});var jl=i(ne);Ba=s(jl,"Represent "),$t=r(jl,"CODE",{});var jn=i($t);Na=s(jn,"A"),jn.forEach(o),Ga=s(jl," as 65"),jl.forEach(o),Ma=d(Hl),ce=r(Hl,"LI",{});var ql=i(ce);Ya=s(ql,"Represent "),zt=r(ql,"CODE",{});var qn=i(zt);Wa=s(qn,"\u0906"),qn.forEach(o),$a=s(ql," as 995."),ql.forEach(o),Hl.forEach(o),tl=d(e),Re=r(e,"P",{});var Rn=i(Re);za=s(Rn,"Now, assuming a byte is an absolute unit of storage, You can store"),Rn.forEach(o),ol=d(e),z=r(e,"UL",{});var Rl=i(z);w=r(Rl,"LI",{});var M=i(w);Kt=r(M,"CODE",{});var Bn=i(Kt);Ka=s(Bn,"A"),Bn.forEach(o),Qa=s(M," using 1 byte and "),Qt=r(M,"CODE",{});var Nn=i(Qt);Xa=s(Nn,"\u0906"),Nn.forEach(o),Za=s(M," using 2 bytes. (As "),Xt=r(M,"CODE",{});var Gn=i(Xt);ga=s(Gn,"65 < 256"),Gn.forEach(o),Ja=s(M,", and "),Zt=r(M,"CODE",{});var Mn=i(Zt);Va=s(Mn,"256 < 995 < 256 * 256"),Mn.forEach(o),er=s(M," )"),M.forEach(o),tr=d(Rl),gt=r(Rl,"LI",{});var Yn=i(gt);or=s(Yn,"both using 2 bytes. In this case, you\u2019ll waste 1 extra byte while storing A"),Yn.forEach(o),Rl.forEach(o),ll=d(e),Be=r(e,"P",{});var Wn=i(Be);lr=s(Wn,"The point of this example was to show that one Unicode character can be stored in multiple ways."),Wn.forEach(o),sl=d(e),Ne=r(e,"BLOCKQUOTE",{});var $n=i(Ne);Jt=r($n,"P",{});var zn=i(Jt);sr=s(zn,"UTF-8 is one of the ways to store Unicode characters. It is designed to encode millions of characters, while ASCII only encodes 128 characters."),zn.forEach(o),$n.forEach(o),al=d(e),Ge=r(e,"P",{});var Kn=i(Ge);ar=s(Kn,"Another thing to note about UTF-8 is it is compatible with ASCII i.e. any ASCII encoded character is a valid UTF-8 encoded character."),Kn.forEach(o),rl=d(e),Me=r(e,"P",{});var Qn=i(Me);rr=s(Qn,"If you\u2019re a software engineer or are really psyched up about encodings, you should definitely read the following blog post"),Qn.forEach(o),il=d(e),Ye=r(e,"P",{});var Xn=i(Ye);fe=r(Xn,"A",{href:!0,rel:!0});var Zn=i(fe);ir=s(Zn,"The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)"),Zn.forEach(o),Xn.forEach(o),nl=d(e),de=r(e,"H2",{});var Di=i(de);Vt=r(Di,"CODE",{});var gn=i(Vt);nr=s(gn,"LC_"),gn.forEach(o),cr=s(Di," variables"),Di.forEach(o),cl=d(e),We=r(e,"P",{});var Jn=i(We);fr=s(Jn,"Ever tried copy-pasting some non-English (let\u2019s say Hindi) characters from some webpage to your terminal, or tried printing them to your console? You\u2019ll notice that they\u2019ll work."),Jn.forEach(o),fl=d(e),K=r(e,"P",{});var Bl=i(K);dr=s(Bl,"Who tells your system to expect "),eo=r(Bl,"CODE",{});var Vn=i(eo);pr=s(Vn,"UTF-8"),Vn.forEach(o),ur=s(Bl," encoded characters, and more importantly, how can you change this behavior?"),Bl.forEach(o),dl=d(e),$e=r(e,"H3",{});var ec=i($e);hr=s(ec,"A small experiment"),ec.forEach(o),pl=d(e),ze=r(e,"P",{});var tc=i(ze);vr=s(tc,"Let\u2019s try to answer these questions with an experiment."),tc.forEach(o),ul=d(e),b=r(e,"OL",{});var V=i(b);to=r(V,"LI",{});var oc=i(to);mr=s(oc,"Open a new terminal instance."),oc.forEach(o),yr=d(V),Ke=r(V,"LI",{});var Ui=i(Ke);Er=s(Ui,"Copy \u{1F602}\xA0to your terminal. "),oo=r(Ui,"OL",{});var lc=i(oo);lo=r(lc,"LI",{});var sc=i(lo);_r=s(sc,"If you\u2019re using modern OS, you\u2019ll notice that the emoji gets copied perfectly."),sc.forEach(o),lc.forEach(o),Ui.forEach(o),wr=d(V),pe=r(V,"LI",{});var Nl=i(pe);br=s(Nl,"Run "),so=r(Nl,"CODE",{});var ac=i(so);Cr=s(ac,"export LC_ALL=C"),ac.forEach(o),Ir=s(Nl," in your terminal."),Nl.forEach(o),Ar=d(V),Qe=r(V,"LI",{});var xi=i(Qe);Lr=s(xi,"Copy \u{1F602}\xA0again and paste it into your terminal. "),ue=r(xi,"OL",{});var Gl=i(ue);ao=r(Gl,"LI",{});var rc=i(ao);Tr=s(rc,"This time you\u2019ll notice that emoji doesn\u2019t get copied."),rc.forEach(o),Or=d(Gl),he=r(Gl,"LI",{});var Ml=i(he);kr=s(Ml,"Instead, something like "),ro=r(Ml,"CODE",{});var ic=i(ro);Sr=s(ic,"\uFFFD<009f><0098><0082>"),ic.forEach(o),Dr=s(Ml," shows up."),Ml.forEach(o),Gl.forEach(o),xi.forEach(o),V.forEach(o),hl=d(e),Q=r(e,"P",{});var Yl=i(Q);Ur=s(Yl,"P.S.: Yes, emojis are also characters having some "),io=r(Yl,"CODE",{});var nc=i(io);xr=s(nc,"Unicode"),nc.forEach(o),Pr=s(Yl," representation \u{1F61B}"),Yl.forEach(o),vl=d(e),Xe=r(e,"H3",{});var cc=i(Xe);Fr=s(cc,"Explanation"),cc.forEach(o),ml=d(e),X=r(e,"P",{});var Wl=i(X);Hr=s(Wl,"So, what happened when we ran "),no=r(Wl,"CODE",{});var fc=i(no);jr=s(fc,"export LC_ALL=C"),fc.forEach(o),qr=s(Wl,"?"),Wl.forEach(o),yl=d(e),Ze=r(e,"P",{});var dc=i(Ze);Rr=s(dc,"Unix/Unix-like systems have multiple environmental variables which control settings related to locale. Things like the format to show dates, the default currency, the default address format, telephone format, etc can be controlled using by setting these environment variables.  This also includes how to interpret and print characters on your terminal."),dc.forEach(o),El=d(e),Z=r(e,"P",{});var $l=i(Z);Br=s($l,"These variables are initialized while installing your OS. If your OS is modern, then by default, they use some UTF-8 encoding. All of these variables can be set individually or can be set at once using the "),co=r($l,"CODE",{});var pc=i(co);Nr=s(pc,"LC_ALL"),pc.forEach(o),Gr=s($l," variable."),$l.forEach(o),_l=d(e),D=r(e,"P",{});var lt=i(D);Mr=s(lt,"The moment you set "),fo=r(lt,"CODE",{});var uc=i(fo);Yr=s(uc,"LC_ALL=C"),uc.forEach(o),Wr=s(lt,", your system locale got changed to "),po=r(lt,"CODE",{});var hc=i(po);$r=s(hc,"C"),hc.forEach(o),zr=s(lt,", which is the simplest locale. It uses ASCII for encoding the characters. And since ASCII can\u2019t represent \u{1F602}\xA0(an emoji), you end up seeing the mysterious values."),lt.forEach(o),wl=d(e),C=r(e,"P",{});var ee=i(C);Kr=s(ee,"Run "),uo=r(ee,"CODE",{});var vc=i(uo);Qr=s(vc,"export LC_ALL=en_GB.UTF-8"),vc.forEach(o),Xr=s(ee," in your terminal and copy \u{1F602}\xA0again. This time you\u2019ll see the emoji. Why? Because you changed your system locale back to "),ho=r(ee,"CODE",{});var mc=i(ho);Zr=s(mc,"en_GB.UTF-8"),mc.forEach(o),gr=s(ee,", which uses UTF-8 encoding. (This assumes that you have "),vo=r(ee,"CODE",{});var yc=i(vo);Jr=s(yc,"en_GB"),yc.forEach(o),Vr=s(ee," locale available on your system.)"),ee.forEach(o),bl=d(e),ve=r(e,"H2",{});var Pi=i(ve);ei=s(Pi,"Tying everything together: Speeding up "),mo=r(Pi,"CODE",{});var Ec=i(mo);ti=s(Ec,"grep"),Ec.forEach(o),Pi.forEach(o),Cl=d(e),ge=r(e,"P",{});var _c=i(ge);oi=s(_c,"When you run"),_c.forEach(o),Il=d(e),me=r(e,"PRE",{class:!0});var Rc=i(me);Rc.forEach(o),Al=d(e),U=r(e,"P",{});var st=i(U);li=s(st,"without explicitly specifying any locale, "),yo=r(st,"CODE",{});var wc=i(yo);si=s(wc,"grep"),wc.forEach(o),ai=s(st," assumes that the file "),Eo=r(st,"CODE",{});var bc=i(Eo);ri=s(bc,"in.fasta"),bc.forEach(o),ii=s(st," contains UTF-8 encoded characters."),st.forEach(o),Ll=d(e),Je=r(e,"P",{});var Cc=i(Je);ni=s(Cc,"Instead, if you run"),Cc.forEach(o),Tl=d(e),ye=r(e,"PRE",{class:!0});var Bc=i(ye);Bc.forEach(o),Ol=d(e),x=r(e,"P",{});var at=i(x);ci=s(at,", "),_o=r(at,"CODE",{});var Ic=i(_o);fi=s(Ic,"grep"),Ic.forEach(o),di=s(at," assumes that "),wo=r(at,"CODE",{});var Ac=i(wo);pi=s(Ac,"in.fasta"),Ac.forEach(o),ui=s(at," only contains ASCII characters, which is essentially true for most of the use cases in bioinformatics."),at.forEach(o),kl=d(e),Ve=r(e,"BLOCKQUOTE",{});var Lc=i(Ve);Ee=r(Lc,"P",{});var zl=i(Ee);hi=s(zl,"You may ask what\u2019s the difference between these two cases? The answer lies in the number of characters encoded by UTF-8 and ASCII. UTF-8 encodes over a million characters, while ASCII encodes only 128. And hence, "),bo=r(zl,"CODE",{});var Tc=i(bo);vi=s(Tc,"grep"),Tc.forEach(o),mi=s(zl," has to do a lot less processing when it knows that the file contains only ASCII data."),zl.forEach(o),Lc.forEach(o),Sl=d(e),B=r(e,"P",{});var Oo=i(B);yi=s(Oo,"And due to this, just by simply adding an "),Co=r(Oo,"CODE",{});var Oc=i(Co);Ei=s(Oc,"export"),Oc.forEach(o),_i=s(Oo," statement, you can speed up your grep execution by over "),Io=r(Oo,"STRONG",{});var kc=i(Io);wi=s(kc,"500%"),kc.forEach(o),Oo.forEach(o),Dl=d(e),_e=r(e,"P",{});var Fi=i(_e);bi=s(Fi,"In order to get a detailed benchmark report, you can "),we=r(Fi,"A",{href:!0,rel:!0});var Sc=i(we);Ci=s(Sc,"visit this link"),Sc.forEach(o),Fi.forEach(o),this.h()},h(){F(oe,"class","language-bash"),F(re,"class","language-bash"),F(ie,"href","https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html"),F(ie,"rel","nofollow"),F(fe,"href","https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/"),F(fe,"rel","nofollow"),F(me,"class","language-bash"),F(ye,"class","language-bash"),F(we,"href","https://www.inmotionhosting.com/support/website/speed-up-grep-searches-with-lc-all/"),F(we,"rel","nofollow")},m(e,n){c(e,p,n),t(p,A),c(e,L,n),c(e,T,n),t(T,u),c(e,v,n),c(e,I,n),t(I,rt),t(rt,Kl),t(I,Ql),t(I,te),t(te,Xl),t(te,it),t(it,Zl),t(te,gl),c(e,ko,n),c(e,Ie,n),t(Ie,Jl),c(e,So,n),c(e,Ae,n),t(Ae,Vl),c(e,Do,n),c(e,oe,n),oe.innerHTML=xc,c(e,Uo,n),c(e,le,n),t(le,es),t(le,nt),t(nt,ts),c(e,xo,n),c(e,se,n),t(se,os),t(se,ct),t(ct,ls),c(e,Po,n),c(e,ae,n),t(ae,ft),t(ft,ss),t(ae,as),c(e,Fo,n),c(e,re,n),re.innerHTML=Pc,c(e,Ho,n),c(e,O,n),t(O,rs),t(O,dt),t(dt,is),t(O,ns),t(O,pt),t(pt,cs),t(O,fs),c(e,jo,n),c(e,k,n),t(k,ds),t(k,ut),t(ut,ps),t(k,us),t(k,ht),t(ht,hs),t(k,vs),c(e,qo,n),c(e,Le,n),t(Le,ms),c(e,Ro,n),c(e,Te,n),t(Te,ys),c(e,Bo,n),c(e,m,n),t(m,Oe),t(Oe,vt),t(vt,Es),t(Oe,_s),t(m,ws),t(m,ke),t(ke,mt),t(mt,bs),t(ke,Cs),t(m,Is),t(m,Se),t(Se,yt),t(yt,As),t(Se,Ls),t(m,Ts),t(m,De),t(De,Et),t(Et,Os),t(De,ks),c(e,No,n),c(e,H,n),t(H,Ss),t(H,_t),t(_t,Ds),t(H,Us),t(H,wt),t(wt,xs),c(e,Go,n),c(e,Ue,n),t(Ue,Ps),c(e,Mo,n),c(e,Y,n),t(Y,bt),t(bt,Fs),t(Y,Hs),t(Y,j),t(j,js),t(j,Ct),t(Ct,qs),t(j,Rs),t(j,It),t(It,Bs),t(j,Ns),c(e,Yo,n),c(e,xe,n),t(xe,Gs),c(e,Wo,n),c(e,Pe,n),t(Pe,Ms),c(e,$o,n),c(e,Fe,n),t(Fe,ie),t(ie,Ys),c(e,zo,n),c(e,He,n),t(He,Ws),c(e,Ko,n),c(e,h,n),t(h,y),t(y,At),t(At,$s),t(y,zs),t(y,Lt),t(Lt,Ks),t(y,Qs),t(y,Tt),t(Tt,Xs),t(y,Zs),t(y,Ot),t(Ot,gs),t(y,Js),t(h,Vs),t(h,E),t(E,kt),t(kt,ea),t(E,ta),t(E,St),t(St,oa),t(E,la),t(E,Dt),t(Dt,sa),t(E,aa),t(E,Ut),t(Ut,ra),t(E,ia),t(h,na),t(h,S),t(S,xt),t(xt,ca),t(S,fa),t(S,Pt),t(Pt,da),t(S,pa),t(S,Ft),t(Ft,ua),t(S,ha),t(h,va),t(h,Ht),t(Ht,ma),t(h,ya),t(h,jt),t(jt,Ea),c(e,Qo,n),c(e,je,n),t(je,_a),c(e,Xo,n),c(e,_,n),t(_,wa),t(_,qt),t(qt,ba),t(_,Ca),t(_,Rt),t(Rt,Ia),t(_,Aa),t(_,Bt),t(Bt,La),t(_,Ta),c(e,Zo,n),c(e,q,n),t(q,Nt),t(Nt,Oa),t(q,ka),t(q,Gt),t(Gt,Sa),t(q,Da),c(e,go,n),c(e,R,n),t(R,Mt),t(Mt,Ua),t(R,xa),t(R,Yt),t(Yt,Pa),t(R,Fa),c(e,Jo,n),c(e,qe,n),t(qe,Ha),c(e,Vo,n),c(e,W,n),t(W,ja),t(W,Wt),t(Wt,qa),t(W,Ra),c(e,el,n),c(e,$,n),t($,ne),t(ne,Ba),t(ne,$t),t($t,Na),t(ne,Ga),t($,Ma),t($,ce),t(ce,Ya),t(ce,zt),t(zt,Wa),t(ce,$a),c(e,tl,n),c(e,Re,n),t(Re,za),c(e,ol,n),c(e,z,n),t(z,w),t(w,Kt),t(Kt,Ka),t(w,Qa),t(w,Qt),t(Qt,Xa),t(w,Za),t(w,Xt),t(Xt,ga),t(w,Ja),t(w,Zt),t(Zt,Va),t(w,er),t(z,tr),t(z,gt),t(gt,or),c(e,ll,n),c(e,Be,n),t(Be,lr),c(e,sl,n),c(e,Ne,n),t(Ne,Jt),t(Jt,sr),c(e,al,n),c(e,Ge,n),t(Ge,ar),c(e,rl,n),c(e,Me,n),t(Me,rr),c(e,il,n),c(e,Ye,n),t(Ye,fe),t(fe,ir),c(e,nl,n),c(e,de,n),t(de,Vt),t(Vt,nr),t(de,cr),c(e,cl,n),c(e,We,n),t(We,fr),c(e,fl,n),c(e,K,n),t(K,dr),t(K,eo),t(eo,pr),t(K,ur),c(e,dl,n),c(e,$e,n),t($e,hr),c(e,pl,n),c(e,ze,n),t(ze,vr),c(e,ul,n),c(e,b,n),t(b,to),t(to,mr),t(b,yr),t(b,Ke),t(Ke,Er),t(Ke,oo),t(oo,lo),t(lo,_r),t(b,wr),t(b,pe),t(pe,br),t(pe,so),t(so,Cr),t(pe,Ir),t(b,Ar),t(b,Qe),t(Qe,Lr),t(Qe,ue),t(ue,ao),t(ao,Tr),t(ue,Or),t(ue,he),t(he,kr),t(he,ro),t(ro,Sr),t(he,Dr),c(e,hl,n),c(e,Q,n),t(Q,Ur),t(Q,io),t(io,xr),t(Q,Pr),c(e,vl,n),c(e,Xe,n),t(Xe,Fr),c(e,ml,n),c(e,X,n),t(X,Hr),t(X,no),t(no,jr),t(X,qr),c(e,yl,n),c(e,Ze,n),t(Ze,Rr),c(e,El,n),c(e,Z,n),t(Z,Br),t(Z,co),t(co,Nr),t(Z,Gr),c(e,_l,n),c(e,D,n),t(D,Mr),t(D,fo),t(fo,Yr),t(D,Wr),t(D,po),t(po,$r),t(D,zr),c(e,wl,n),c(e,C,n),t(C,Kr),t(C,uo),t(uo,Qr),t(C,Xr),t(C,ho),t(ho,Zr),t(C,gr),t(C,vo),t(vo,Jr),t(C,Vr),c(e,bl,n),c(e,ve,n),t(ve,ei),t(ve,mo),t(mo,ti),c(e,Cl,n),c(e,ge,n),t(ge,oi),c(e,Il,n),c(e,me,n),me.innerHTML=Fc,c(e,Al,n),c(e,U,n),t(U,li),t(U,yo),t(yo,si),t(U,ai),t(U,Eo),t(Eo,ri),t(U,ii),c(e,Ll,n),c(e,Je,n),t(Je,ni),c(e,Tl,n),c(e,ye,n),ye.innerHTML=Hc,c(e,Ol,n),c(e,x,n),t(x,ci),t(x,_o),t(_o,fi),t(x,di),t(x,wo),t(wo,pi),t(x,ui),c(e,kl,n),c(e,Ve,n),t(Ve,Ee),t(Ee,hi),t(Ee,bo),t(bo,vi),t(Ee,mi),c(e,Sl,n),c(e,B,n),t(B,yi),t(B,Co),t(Co,Ei),t(B,_i),t(B,Io),t(Io,wi),c(e,Dl,n),c(e,_e,n),t(_e,bi),t(_e,we),t(we,Ci)},p:Zc,d(e){e&&o(p),e&&o(L),e&&o(T),e&&o(v),e&&o(I),e&&o(ko),e&&o(Ie),e&&o(So),e&&o(Ae),e&&o(Do),e&&o(oe),e&&o(Uo),e&&o(le),e&&o(xo),e&&o(se),e&&o(Po),e&&o(ae),e&&o(Fo),e&&o(re),e&&o(Ho),e&&o(O),e&&o(jo),e&&o(k),e&&o(qo),e&&o(Le),e&&o(Ro),e&&o(Te),e&&o(Bo),e&&o(m),e&&o(No),e&&o(H),e&&o(Go),e&&o(Ue),e&&o(Mo),e&&o(Y),e&&o(Yo),e&&o(xe),e&&o(Wo),e&&o(Pe),e&&o($o),e&&o(Fe),e&&o(zo),e&&o(He),e&&o(Ko),e&&o(h),e&&o(Qo),e&&o(je),e&&o(Xo),e&&o(_),e&&o(Zo),e&&o(q),e&&o(go),e&&o(R),e&&o(Jo),e&&o(qe),e&&o(Vo),e&&o(W),e&&o(el),e&&o($),e&&o(tl),e&&o(Re),e&&o(ol),e&&o(z),e&&o(ll),e&&o(Be),e&&o(sl),e&&o(Ne),e&&o(al),e&&o(Ge),e&&o(rl),e&&o(Me),e&&o(il),e&&o(Ye),e&&o(nl),e&&o(de),e&&o(cl),e&&o(We),e&&o(fl),e&&o(K),e&&o(dl),e&&o($e),e&&o(pl),e&&o(ze),e&&o(ul),e&&o(b),e&&o(hl),e&&o(Q),e&&o(vl),e&&o(Xe),e&&o(ml),e&&o(X),e&&o(yl),e&&o(Ze),e&&o(El),e&&o(Z),e&&o(_l),e&&o(D),e&&o(wl),e&&o(C),e&&o(bl),e&&o(ve),e&&o(Cl),e&&o(ge),e&&o(Il),e&&o(me),e&&o(Al),e&&o(U),e&&o(Ll),e&&o(Je),e&&o(Tl),e&&o(ye),e&&o(Ol),e&&o(x),e&&o(kl),e&&o(Ve),e&&o(Sl),e&&o(B),e&&o(Dl),e&&o(_e)}}}function Vc(Ce){let p,A;const L=[Ce[0],ji];let T={$$slots:{default:[Jc]},$$scope:{ctx:Ce}};for(let u=0;u<L.length;u+=1)T=Hi(T,L[u]);return p=new gc({props:T}),{c(){Yc(p.$$.fragment)},l(u){Wc(p.$$.fragment,u)},m(u,v){$c(p,u,v),A=!0},p(u,[v]){const I=v&1?zc(L,[v&1&&Dc(u[0]),v&0&&Dc(ji)]):{};v&2&&(I.$$scope={dirty:v,ctx:u}),p.$set(I)},i(u){A||(Kc(p.$$.fragment,u),A=!0)},o(u){Qc(p.$$.fragment,u),A=!1},d(u){Xc(p,u)}}}const ji={series:"Leveraging GNU Core utils in bioinfornmatics",title:"Leveraging encodings for speeding up grep",date:"21 March, 2022",categories:["GNU Tools","bioinformatics","encodings"],description:"An article explaining how to leverage encodings to improve grep performance by over 500%",author:"Prakash"};function ef(Ce,p,A){return Ce.$$set=L=>{A(0,p=Hi(Hi({},p),Uc(L)))},p=Uc(p),[p]}class tf extends Nc{constructor(p){super();Gc(this,p,ef,Vc,Mc,{})}}var sf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tf,metadata:ji});export{tf as L,sf as _,ji as m};
