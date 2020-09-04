/*
 FlexSearch v0.6.30
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(x,L,O){let I;(I=O.define)&&I.amd?I([],function(){return L}):(I=O.modules)?I[x.toLowerCase()]=L:"object"===typeof exports?module.exports=L:O[x]=L})("FlexSearch",function(){function x(a,b){const c=b?b.id:a&&a.id;this.id=c||0===c?c:ja++;this.init(a,b);ca(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].f):Object.keys(this.f)});ca(this,"length",function(){return this.index.length})}function L(a){const b=B();for(const c in a)if(a.hasOwnProperty(c)){const d=
a[c];E(d)?b[c]=d.slice(0):J(d)?b[c]=L(d):b[c]=d}return b}function O(a,b){const c=a.length,d=P(b),e=[];for(let h=0,f=0;h<c;h++){const k=a[h];if(d&&b(k)||!d&&!b[k])e[f++]=k}return e}function I(a,b,c,d,e,h,f,k,g,l){c=da(c,f?0:e,!1,!1,b,g,l);let p;k&&(k=c.page,p=c.next,c=c.result);if(f)a=this.where(f,null,e,c);else{a=c;b=this.j;c=a.length;e=Array(c);for(h=0;h<c;h++)e[h]=b[a[h]];a=e}c=a;d&&(P(d)||(K=d.split(":"),1<K.length?d=ka:(K=K[0],d=la)),c.sort(d));return c=Q(k,p,c)}function ca(a,b,c){Object.defineProperty(a,
b,{get:c})}function r(a){return new RegExp(a,"g")}function M(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function S(a,b,c,d,e,h,f,k){if(b[c])return b[c];e=e?(k-(f||k/1.5))*h+(f||k/1.5)*e:h;b[c]=e;e>=f&&(a=a[k-(e+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=d);return e}function W(a,b){if(a){const c=Object.keys(a);for(let d=0,e=c.length;d<e;d++){const h=c[d],f=a[h];if(f)for(let k=0,g=f.length;k<g;k++)if(f[k]===b){1===g?delete a[h]:f.splice(k,1);break}else J(f[k])&&W(f[k],b)}}}function X(a){let b=
"",c="";var d="";for(let e=0;e<a.length;e++){const h=a[e];if(h!==c)if(e&&"h"===h){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&d||" "===c)b+=h}else b+=h;d=e===a.length-1?"":a[e+1];c=h}return b}function ma(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function la(a,b){a=a[K];b=b[K];return a<b?-1:a>b?1:0}function ka(a,b){const c=K.length;for(let d=0;d<c;d++)a=a[K[d]],b=b[K[d]];return a<b?-1:a>b?1:0}function Q(a,b,c){return a?{page:a,
next:b?""+b:null,result:c}:c}function da(a,b,c,d,e,h,f){let k,g=[];if(!0===c){c="0";var l=""}else l=c&&c.split(":");const p=a.length;if(1<p){const w=B(),t=[];let v,z;var n=0,m;let F;var u=!0;let C,D=0,Y,Z,T,aa;l&&(2===l.length?(T=l,l=!1):l=aa=parseInt(l[0],10));if(f){for(v=B();n<p;n++)if("not"===e[n])for(z=a[n],F=z.length,m=0;m<F;m++)v["@"+z[m]]=1;else Z=n+1;if(N(Z))return Q(c,k,g);n=0}else Y=G(e)&&e;let U;for(;n<p;n++){const na=n===(Z||p)-1;if(!Y||!n)if((m=Y||e&&e[n])&&"and"!==m)if("or"===m)U=!1;
else continue;else U=h=!0;z=a[n];if(F=z.length){if(u)if(C){var q=C.length;for(m=0;m<q;m++){u=C[m];var y="@"+u;f&&v[y]||(w[y]=1,h||(g[D++]=u))}C=null;u=!1}else{C=z;continue}y=!1;for(m=0;m<F;m++){q=z[m];var A="@"+q;const V=h?w[A]||0:n;if(!(!V&&!d||f&&v[A]||!h&&w[A]))if(V===n){if(na){if(!aa||--aa<D)if(g[D++]=q,b&&D===b)return Q(c,D+(l||0),g)}else w[A]=n+1;y=!0}else d&&(A=t[V]||(t[V]=[]),A[A.length]=q)}if(U&&!y&&!d)break}else if(U&&!d)return Q(c,k,z)}if(C)if(n=C.length,f)for(m=l?parseInt(l,10):0;m<n;m++)a=
C[m],v["@"+a]||(g[D++]=a);else g=C;if(d)for(D=g.length,T?(n=parseInt(T[0],10)+1,m=parseInt(T[1],10)+1):(n=t.length,m=0);n--;)if(q=t[n]){for(F=q.length;m<F;m++)if(d=q[m],!f||!v["@"+d])if(g[D++]=d,b&&D===b)return Q(c,n+":"+m,g);m=0}}else!p||e&&"not"===e[0]||(g=a[0],l&&(l=parseInt(l[0],10)));b&&(f=g.length,l&&l>f&&(l=0),l=l||0,k=l+b,k<f?g=g.slice(l,k):(k=0,l&&(g=g.slice(l))));return Q(c,k,g)}function G(a){return"string"===typeof a}function E(a){return a.constructor===Array}function P(a){return"function"===
typeof a}function J(a){return"object"===typeof a}function N(a){return"undefined"===typeof a}function ea(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=B();return b}function B(){return Object.create(null)}const H={encode:"icase",c:"forward",split:/\W+/,cache:!1,async:!1,u:!1,m:!1,a:!1,b:9,threshold:0,depth:0},fa={memory:{encode:"extra",c:"strict",threshold:0,b:1},speed:{encode:"icase",c:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",c:"full",threshold:1,b:3},score:{encode:"extra",c:"strict",
threshold:1,b:9,depth:4},balance:{encode:"balance",c:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",c:"strict",threshold:8,b:9,depth:1}},ba=[];let ja=0;const ha={},ia={};x.create=function(a,b){return new x(a,b)};x.registerMatcher=function(a){for(const b in a)a.hasOwnProperty(b)&&ba.push(r(b),a[b]);return this};x.registerEncoder=function(a,b){R[a]=b.bind(R);return this};x.registerLanguage=function(a,b){ha[a]=b.filter;ia[a]=b.stemmer;return this};x.encode=function(a,b){return R[a](b)};x.prototype.init=
function(a,b){this.o=[];if(b){var c=b.preset;a=b}else a||(a=H),c=a.preset;b={};G(a)?(b=fa[a],a={}):c&&(b=fa[c]);this.c=a.tokenize||b.c||this.c||H.c;this.split=N(c=a.split)?this.split||H.split:G(c)?r(c):c;this.m=a.rtl||this.m||H.m;this.async="undefined"===typeof Promise||N(c=a.async)?this.async||H.async:c;this.threshold=N(c=a.threshold)?b.threshold||this.threshold||H.threshold:c;this.b=N(c=a.resolution)?c=b.b||this.b||H.b:c;c<=this.threshold&&(this.b=this.threshold+1);this.depth="strict"!==this.c||
N(c=a.depth)?b.depth||this.depth||H.depth:c;this.h=(c=N(c=a.encode)?b.encode||H.encode:c)&&R[c]&&R[c].bind(R)||(P(c)?c:this.h||!1);(c=a.matcher)&&this.addMatcher(c);if(c=(b=a.lang)||a.filter){G(c)&&(c=ha[c]);if(E(c)){var d=this.h,e=B();for(var h=0;h<c.length;h++){var f=d?d(c[h]):c[h];e[f]=1}c=e}this.filter=c}if(c=b||a.stemmer){var k;b=G(c)?ia[c]:c;d=this.h;e=[];for(k in b)b.hasOwnProperty(k)&&(h=d?d(k):k,e.push(r(h+"($|\\W)"),d?d(b[k]):b[k]));this.stemmer=k=e}this.a=e=(c=a.doc)?L(c):this.a||H.a;this.l=
ea(this.b-(this.threshold||0));this.g=B();this.f=B();if(e){this.j=B();a.doc=null;k=e.index={};b=e.keys=[];d=e.field;h=e.store;E(e.id)||(e.id=e.id.split(":"));if(h){f=B();if(G(h))f[h]=1;else if(E(h))for(let g=0;g<h.length;g++)f[h[g]]=1;else J(h)&&(f=h);e.store=f}if(d){let g;E(d)||(J(d)?(g=d,e.field=d=Object.keys(d)):e.field=d=[d]);for(e=0;e<d.length;e++)h=d[e],E(h)||(g&&(a=g[h]),b[e]=h,d[e]=h.split(":")),k[h]=new x(a)}a.doc=c}return this};x.prototype.encode=function(a){a&&(ba.length&&(a=M(a,ba)),this.o.length&&
(a=M(a,this.o)),this.h&&(a=this.h(a)),this.stemmer&&(a=M(a,this.stemmer)));return a};x.prototype.addMatcher=function(a){const b=this.o;for(const c in a)a.hasOwnProperty(c)&&b.push(r(c),a[c]);return this};x.prototype.add=function(a,b,c,d,e){if(this.a&&J(a))return this.i("add",a,b);if(b&&G(b)&&(a||0===a)){var h="@"+a;if(this.f[h]&&!d)return this.update(a,b);if(!e){if(this.async){let t=this;h=new Promise(function(v){setTimeout(function(){t.add(a,b,null,d,!0);t=null;v()})});if(c)h.then(c);else return h;
return this}if(c)return this.add(a,b,null,d,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=this.c;e=P(c)?c(b):b.split(this.split);this.filter&&(e=O(e,this.filter));const n=B();n._ctx=B();const m=e.length,u=this.threshold,q=this.depth,y=this.b,A=this.l,w=this.m;for(let t=0;t<m;t++){var f=e[t];if(f){var k=f.length,g=(w?t+1:m-t)/m,l="";switch(c){case "reverse":case "both":for(var p=k;--p;)l=f[p]+l,S(A,n,l,a,w?1:(k-p)/k,g,u,y-1);l="";case "forward":for(p=0;p<k;p++)l+=f[p],S(A,n,l,a,w?(p+1)/
k:1,g,u,y-1);break;case "full":for(p=0;p<k;p++){const v=(w?p+1:k-p)/k;for(let z=k;z>p;z--)l=f.substring(p,z),S(A,n,l,a,v,g,u,y-1)}break;default:if(k=S(A,n,f,a,1,g,u,y-1),q&&1<m&&k>=u)for(k=n._ctx[f]||(n._ctx[f]=B()),f=this.g[f]||(this.g[f]=ea(y-(u||0))),g=t-q,l=t+q+1,0>g&&(g=0),l>m&&(l=m);g<l;g++)g!==t&&S(f,k,e[g],a,0,y-(g<t?t-g:g-t),u,y-1)}}}this.f[h]=1}return this};x.prototype.i=function(a,b,c){if(E(b)){var d=b.length;if(d--){for(var e=0;e<d;e++)this.i(a,b[e]);return this.i(a,b[d],c)}}else{var h=
this.a.index,f=this.a.keys,k=this.a.tag;e=this.a.store;var g;var l=this.a.id;d=b;for(var p=0;p<l.length;p++)d=d[l[p]];if("remove"===a&&(delete this.j[d],l=f.length,l--)){for(b=0;b<l;b++)h[f[b]].remove(d);return h[f[l]].remove(d,c)}if(k){for(g=0;g<k.length;g++){var n=k[g];var m=b;l=n.split(":");for(p=0;p<l.length;p++)m=m[l[p]];m="@"+m}g=this.s[n];g=g[m]||(g[m]=[])}l=this.a.field;for(let u=0,q=l.length;u<q;u++){n=l[u];k=b;for(m=0;m<n.length;m++)k=k[n[m]];n=h[f[u]];m="add"===a?n.add:n.update;u===q-1?
m.call(n,d,k,c):m.call(n,d,k)}if(e){c=Object.keys(e);a=B();for(h=0;h<c.length;h++)if(f=c[h],e[f]){f=f.split(":");let u,q;for(l=0;l<f.length;l++)k=f[l],u=(u||b)[k],q=(q||a)[k]=u}b=a}g&&(g[g.length]=b);this.j[d]=b}return this};x.prototype.update=function(a,b,c){if(this.a&&J(a))return this.i("update",a,b);this.f["@"+a]&&G(b)&&(this.remove(a),this.add(a,b,c,!0));return this};x.prototype.remove=function(a,b,c){if(this.a&&J(a))return this.i("remove",a,b);var d="@"+a;if(this.f[d]){if(!c){if(this.async&&
"function"!==typeof importScripts){let e=this;d=new Promise(function(h){setTimeout(function(){e.remove(a,null,!0);e=null;h()})});if(b)d.then(b);else return d;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<this.b-(this.threshold||0);b++)W(this.l[b],a);this.depth&&W(this.g,a);delete this.f[d]}return this};let K;x.prototype.search=function(a,b,c,d){if(J(b)){if(E(b))for(var e=0;e<b.length;e++)b[e].query=a;else b.query=a;a=b;b=1E3}else b&&P(b)?(c=b,b=1E3):b||0===b||(b=1E3);let h=[],
f=a;let k,g,l;if(J(a)&&!E(a)){c||(c=a.callback)&&(f.callback=null);g=a.sort;k=!1;b=a.limit;var p=a.threshold;l=!1;a=a.query}if(this.a){p=this.a.index;var n=f.bool||"or",m=f.field;let w=n;let t,v;if(m)E(m)||(m=[m]);else if(E(f)){var u=f;m=[];w=[];for(var q=0;q<f.length;q++)d=f[q],e=d.bool||n,m[q]=d.field,w[q]=e,"not"===e?t=!0:"and"===e&&(v=!0)}else m=this.a.keys;n=m.length;for(q=0;q<n;q++)u&&(f=u[q]),k&&!G(f)&&(f.page=null,f.limit=0),h[q]=p[m[q]].search(f,0);if(c)return c(I.call(this,a,w,h,g,b,l,!1,
k,v,t));if(this.async){const z=this;return new Promise(function(F){Promise.all(h).then(function(C){F(I.call(z,a,w,C,g,b,l,!1,k,v,t))})})}return I.call(this,a,w,h,g,b,l,!1,k,v,t)}p||(p=this.threshold||0);if(!d){if(this.async&&"function"!==typeof importScripts){let w=this;p=new Promise(function(t){setTimeout(function(){t(w.search(f,b,null,!0));w=null})});if(c)p.then(c);else return p;return this}if(c)return c(this.search(f,b,null,!0)),this}if(!a||!G(a))return h;f=a;f=this.encode(f);if(!f.length)return h;
c=this.c;c=P(c)?c(f):f.split(this.split);this.filter&&(c=O(c,this.filter));u=c.length;d=!0;e=[];const y=B();let A=0;1<u&&(this.depth&&"strict"===this.c?m=!0:c.sort(ma));if(!m||(n=this.g)){const w=this.b;for(;A<u;A++){let t=c[A];if(t){if(m){if(!q)if(n[t])q=t,y[t]=1;else if(!l)return h;if(l&&A===u-1&&!e.length)m=!1,t=q||t,y[t]=0;else if(!q)continue}if(!y[t]){const v=[];let z=!1,F=0;if(q=m?n[q]:this.l){let C;for(let D=0;D<w-p;D++)if(C=q[D]&&q[D][t])v[F++]=C,z=!0}if(z)q=t,e[e.length]=1<F?v.concat.apply([],
v):v[0];else{d=!1;break}y[t]=1}}}}else d=!1;d&&(h=da(e,b,k,!1));return h};x.prototype.clear=function(){return this.destroy().init()};x.prototype.destroy=function(){this.l=this.g=this.f=null;if(this.a){const a=this.a.keys;for(let b=0;b<a.length;b++)this.a.index[a[b]].destroy();this.a=this.j=null}return this};const oa=function(){const a=r("\\s+"),b=r("[^a-z0-9 ]"),c=[r("[-/]")," ",b,"",a," "];return function(d){return X(M(d.toLowerCase(),c))}}(),R={icase:function(a){return a.toLowerCase()},simple:function(){const a=
r("\\s+"),b=r("[^a-z0-9 ]"),c=r("[-/]"),d=r("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),e=r("[\u00e8\u00e9\u00ea\u00eb]"),h=r("[\u00ec\u00ed\u00ee\u00ef]"),f=r("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),k=r("[\u00f9\u00fa\u00fb\u00fc\u0171]"),g=r("[\u00fd\u0177\u00ff]"),l=r("\u00f1"),p=r("[\u00e7c]"),n=r("\u00df"),m=r(" & "),u=[d,"a",e,"e",h,"i",f,"o",k,"u",g,"y",l,"n",p,"k",n,"s",m," and ",c," ",b,"",a," "];return function(q){q=M(q.toLowerCase(),u);return" "===q?"":q}}(),advanced:function(){const a=
r("ae"),b=r("ai"),c=r("ay"),d=r("ey"),e=r("oe"),h=r("ue"),f=r("ie"),k=r("sz"),g=r("zs"),l=r("ck"),p=r("cc"),n=r("sh"),m=r("th"),u=r("dt"),q=r("ph"),y=r("pf"),A=r("ou"),w=r("uo"),t=[a,"a",b,"ei",c,"ei",d,"ei",e,"o",h,"u",f,"i",k,"s",g,"s",n,"s",l,"k",p,"k",m,"t",u,"t",q,"f",y,"f",A,"o",w,"u"];return function(v,z){if(!v)return v;v=this.simple(v);2<v.length&&(v=M(v,t));z||1<v.length&&(v=X(v));return v}}(),extra:function(){const a=r("p"),b=r("z"),c=r("[cgq]"),d=r("n"),e=r("d"),h=r("[vw]"),f=r("[aeiouy]"),
k=[a,"b",b,"s",c,"k",d,"m",e,"t",h,"f",f,""];return function(g){if(!g)return g;g=this.advanced(g,!0);if(1<g.length){g=g.split(" ");for(let l=0;l<g.length;l++){const p=g[l];1<p.length&&(g[l]=p[0]+M(p.substring(1),k))}g=g.join(" ");g=X(g)}return g}}(),balance:oa};return x}(!1),this);
