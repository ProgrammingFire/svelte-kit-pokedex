import{C as B,S as j,i as A,s as H,e as v,k as M,t as I,c as w,a as P,n as S,g as y,d as _,b as f,J as K,f as b,H as g,h as L,I as N,j as G,m as J,o as R,x as E,u as C,v as V,K as U,L as z,w as F,M as O,N as Q,r as X}from"../chunks/vendor-4e009423.js";const q=async()=>{const t=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")).json()).results.map((n,c)=>({id:c+1,name:n.name,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c+1}.png`,url:n.url}));D.set(t)},D=B([]);q();function Y(i){let a,o,t,n,c,m,u,d=i[0].id+"",k,p,r=i[0].name+"",$,e;return{c(){a=v("main"),o=v("a"),t=v("img"),m=M(),u=v("h2"),k=I(d),p=I(". "),$=I(r),this.h()},l(l){a=w(l,"MAIN",{});var s=P(a);o=w(s,"A",{class:!0,href:!0});var h=P(o);t=w(h,"IMG",{class:!0,src:!0,alt:!0}),m=S(h),u=w(h,"H2",{class:!0});var x=P(u);k=y(x,d),p=y(x,". "),$=y(x,r),x.forEach(_),h.forEach(_),s.forEach(_),this.h()},h(){f(t,"class","h-60 w-60 "),K(t.src,n=i[0].image)||f(t,"src",n),f(t,"alt",c=i[0].name),f(u,"class","uppercase text-2xl"),f(o,"class","list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"),f(o,"href",e=`/pokemon/${i[0].id}`)},m(l,s){b(l,a,s),g(a,o),g(o,t),g(o,m),g(o,u),g(u,k),g(u,p),g(u,$)},p(l,[s]){s&1&&!K(t.src,n=l[0].image)&&f(t,"src",n),s&1&&c!==(c=l[0].name)&&f(t,"alt",c),s&1&&d!==(d=l[0].id+"")&&L(k,d),s&1&&r!==(r=l[0].name+"")&&L($,r),s&1&&e!==(e=`/pokemon/${l[0].id}`)&&f(o,"href",e)},i:N,o:N,d(l){l&&_(a)}}}function Z(i,a,o){let{pokeman:t}=a;return i.$$set=n=>{"pokeman"in n&&o(0,t=n.pokeman)},[t]}class ee extends j{constructor(a){super();A(this,a,Z,Y,H,{pokeman:0})}}function T(i,a,o){const t=i.slice();return t[4]=a[o],t}function W(i){let a,o;return a=new ee({props:{pokeman:i[4]}}),{c(){G(a.$$.fragment)},l(t){J(a.$$.fragment,t)},m(t,n){R(a,t,n),o=!0},p(t,n){const c={};n&2&&(c.pokeman=t[4]),a.$set(c)},i(t){o||(E(a.$$.fragment,t),o=!0)},o(t){C(a.$$.fragment,t),o=!1},d(t){V(a,t)}}}function te(i){let a,o,t,n,c,m,u,d,k,p=i[1],r=[];for(let e=0;e<p.length;e+=1)r[e]=W(T(i,p,e));const $=e=>C(r[e],1,1,()=>{r[e]=null});return{c(){a=v("h1"),o=I("Welcome to Pokedex Made Using SvelteKit"),t=M(),n=v("input"),c=M(),m=v("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){a=w(e,"H1",{class:!0});var l=P(a);o=y(l,"Welcome to Pokedex Made Using SvelteKit"),l.forEach(_),t=S(e),n=w(e,"INPUT",{class:!0,placeholder:!0}),c=S(e),m=w(e,"DIV",{class:!0});var s=P(m);for(let h=0;h<r.length;h+=1)r[h].l(s);s.forEach(_),this.h()},h(){f(a,"class","text-4xl text-center my-8 uppercase"),f(n,"class","w-full rounded-md text-lg p-4 border-2 border-gray-200"),f(n,"placeholder","Search Pokemon"),f(m,"class","py-4 grid gap-4 md:grid-cols-2 grid-cols-1")},m(e,l){b(e,a,l),g(a,o),b(e,t,l),b(e,n,l),U(n,i[0]),b(e,c,l),b(e,m,l);for(let s=0;s<r.length;s+=1)r[s].m(m,null);u=!0,d||(k=z(n,"input",i[3]),d=!0)},p(e,[l]){if(l&1&&n.value!==e[0]&&U(n,e[0]),l&2){p=e[1];let s;for(s=0;s<p.length;s+=1){const h=T(e,p,s);r[s]?(r[s].p(h,l),E(r[s],1)):(r[s]=W(h),r[s].c(),E(r[s],1),r[s].m(m,null))}for(X(),s=p.length;s<r.length;s+=1)$(s);F()}},i(e){if(!u){for(let l=0;l<p.length;l+=1)E(r[l]);u=!0}},o(e){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)C(r[l]);u=!1},d(e){e&&_(a),e&&_(t),e&&_(n),e&&_(c),e&&_(m),O(r,e),d=!1,k()}}}function ae(i,a,o){let t;Q(i,D,u=>o(2,t=u));let n="",c=[];q();function m(){n=this.value,o(0,n)}return i.$$.update=()=>{i.$$.dirty&5&&(n?o(1,c=t.filter(u=>u.name.toLowerCase().includes(n.toLowerCase()))):o(1,c=[...t]))},[n,c,t,m]}class le extends j{constructor(a){super();A(this,a,ae,te,H,{})}}export{le as default};
