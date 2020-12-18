var app=function(){"use strict";function t(){}const n=t=>t;function s(t,n){for(const s in n)t[s]=n[s];return t}function e(t){return t()}function a(){return Object.create(null)}function l(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...s){if(null==n)return t;const e=n.subscribe(...s);return e.unsubscribe?()=>e.unsubscribe():e}function c(t,n,s){t.$$.on_destroy.push(i(n,s))}function p(t,n,s,e){if(t){const a=d(t,n,s,e);return t[0](a)}}function d(t,n,e,a){return t[1]&&a?s(e.ctx.slice(),t[1](a(n))):e.ctx}function u(t,n,s,e,a,l,r){const o=function(t,n,s,e){if(t[2]&&e){const a=t[2](e(s));if(void 0===n.dirty)return a;if("object"==typeof a){const t=[],s=Math.max(n.dirty.length,a.length);for(let e=0;e<s;e+=1)t[e]=n.dirty[e]|a[e];return t}return n.dirty|a}return n.dirty}(n,e,a,l);if(o){const a=d(n,s,e,r);t.p(a,o)}}function m(t,n,s=n){return t.set(s),n}function f(n){return n&&r(n.destroy)?n.destroy:t}const h="undefined"!=typeof window;let g=h?()=>window.performance.now():()=>Date.now(),$=h?t=>requestAnimationFrame(t):t;const b=new Set;function x(t){b.forEach((n=>{n.c(t)||(b.delete(n),n.f())})),0!==b.size&&$(x)}function y(t){let n;return 0===b.size&&$(x),{promise:new Promise((s=>{b.add(n={c:t,f:s})})),abort(){b.delete(n)}}}function j(t,n){t.appendChild(n)}function w(t,n,s){t.insertBefore(n,s||null)}function v(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function k(){return E(" ")}function q(){return E("")}function C(t,n,s,e){return t.addEventListener(n,s,e),()=>t.removeEventListener(n,s,e)}function L(t,n,s){null==s?t.removeAttribute(n):t.getAttribute(n)!==s&&t.setAttribute(n,s)}function P(t,n,s,e){t.style.setProperty(n,s,e?"important":"")}function S(t,n,s){t.classList[s?"add":"remove"](n)}class I{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,s=null){this.e||(this.e=_(n.nodeName),this.t=n,this.h(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)w(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}const O=new Set;let T,A=0;function M(t,n,s,e,a,l,r,o=0){const i=16.666/e;let c="{\n";for(let t=0;t<=1;t+=i){const e=n+(s-n)*l(t);c+=100*t+`%{${r(e,1-e)}}\n`}const p=c+`100% {${r(s,1-s)}}\n}`,d=`__svelte_${function(t){let n=5381,s=t.length;for(;s--;)n=(n<<5)-n^t.charCodeAt(s);return n>>>0}(p)}_${o}`,u=t.ownerDocument;O.add(u);const m=u.__svelte_stylesheet||(u.__svelte_stylesheet=u.head.appendChild(_("style")).sheet),f=u.__svelte_rules||(u.__svelte_rules={});f[d]||(f[d]=!0,m.insertRule(`@keyframes ${d} ${p}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${e}ms linear ${a}ms 1 both`,A+=1,d}function H(t,n){const s=(t.style.animation||"").split(", "),e=s.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),a=s.length-e.length;a&&(t.style.animation=e.join(", "),A-=a,A||$((()=>{A||(O.forEach((t=>{const n=t.__svelte_stylesheet;let s=n.cssRules.length;for(;s--;)n.deleteRule(s);t.__svelte_rules={}})),O.clear())})))}function N(t){T=t}function G(t){(function(){if(!T)throw new Error("Function called outside component initialization");return T})().$$.on_mount.push(t)}const z=[],D=[],R=[],B=[],W=Promise.resolve();let F=!1;function J(t){R.push(t)}let K=!1;const Q=new Set;function U(){if(!K){K=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];N(n),V(n.$$)}for(N(null),z.length=0;D.length;)D.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];Q.has(n)||(Q.add(n),n())}R.length=0}while(z.length);for(;B.length;)B.pop()();F=!1,K=!1,Q.clear()}}function V(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}let X;function Y(t,n,s){t.dispatchEvent(function(t,n){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,!1,!1,n),s}(`${n?"intro":"outro"}${s}`))}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function st(){tt.r||l(tt.c),tt=tt.p}function et(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function at(t,n,s,e){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),e&&(s&&t.d(1),e())})),t.o(n)}}const lt={duration:0};function rt(s,e,a,o){let i=e(s,a),c=o?0:1,p=null,d=null,u=null;function m(){u&&H(s,u)}function f(t,n){const s=t.b-c;return n*=Math.abs(s),{a:c,b:t.b,d:s,duration:n,start:t.start,end:t.start+n,group:t.group}}function h(e){const{delay:a=0,duration:r=300,easing:o=n,tick:h=t,css:$}=i||lt,b={start:g()+a,b:e};e||(b.group=tt,tt.r+=1),p||d?d=b:($&&(m(),u=M(s,c,e,r,a,o,$)),e&&h(0,1),p=f(b,r),J((()=>Y(s,e,"start"))),y((t=>{if(d&&t>d.start&&(p=f(d,r),d=null,Y(s,p.b,"start"),$&&(m(),u=M(s,c,p.b,p.duration,0,o,i.css))),p)if(t>=p.end)h(c=p.b,1-c),Y(s,p.b,"end"),d||(p.b?m():--p.group.r||l(p.group.c)),p=null;else if(t>=p.start){const n=t-p.start;c=p.a+p.d*o(n/p.duration),h(c,1-c)}return!(!p&&!d)})))}return{run(t){r(i)?(X||(X=Promise.resolve(),X.then((()=>{X=null}))),X).then((()=>{i=i(),h(t)})):h(t)},end(){m(),p=d=null}}}const ot="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function it(t){t&&t.c()}function ct(t,n,s){const{fragment:a,on_mount:o,on_destroy:i,after_update:c}=t.$$;a&&a.m(n,s),J((()=>{const n=o.map(e).filter(r);i?i.push(...n):l(n),t.$$.on_mount=[]})),c.forEach(J)}function pt(t,n){const s=t.$$;null!==s.fragment&&(l(s.on_destroy),s.fragment&&s.fragment.d(n),s.on_destroy=s.fragment=null,s.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(z.push(t),F||(F=!0,W.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ut(n,s,e,r,o,i,c=[-1]){const p=T;N(n);const d=s.props||{},u=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:o,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:a(),dirty:c,skip_bound:!1};let m=!1;if(u.ctx=e?e(n,d,((t,s,...e)=>{const a=e.length?e[0]:s;return u.ctx&&o(u.ctx[t],u.ctx[t]=a)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](a),m&&dt(n,t)),s})):[],u.update(),m=!0,l(u.before_update),u.fragment=!!r&&r(u.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);u.fragment&&u.fragment.l(t),t.forEach(v)}else u.fragment&&u.fragment.c();s.intro&&et(n.$$.fragment),ct(n,s.target,s.anchor),U()}N(p)}class mt{$destroy(){pt(this,1),this.$destroy=t}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function ht(n,s=t){let e;const a=[];function l(t){if(o(n,t)&&(n=t,e)){const t=!ft.length;for(let t=0;t<a.length;t+=1){const s=a[t];s[1](),ft.push(s,n)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(r,o=t){const i=[r,o];return a.push(i),1===a.length&&(e=s(l)||t),r(n),()=>{const t=a.indexOf(i);-1!==t&&a.splice(t,1),0===a.length&&(e(),e=null)}}}}function gt(t){const n=t-1;return n*n*n+1}function $t(t){return"[object Date]"===Object.prototype.toString.call(t)}function bt(t,n){if(t===n||t!=t)return()=>t;const s=typeof t;if(s!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=n.map(((n,s)=>bt(t[s],n)));return t=>s.map((n=>n(t)))}if("object"===s){if(!t||!n)throw new Error("Object cannot be null");if($t(t)&&$t(n)){t=t.getTime();const s=(n=n.getTime())-t;return n=>new Date(t+n*s)}const s=Object.keys(n),e={};return s.forEach((s=>{e[s]=bt(t[s],n[s])})),t=>{const n={};return s.forEach((s=>{n[s]=e[s](t)})),n}}if("number"===s){const s=n-t;return n=>t+n*s}throw new Error(`Cannot interpolate ${s} values`)}function xt(n){let s,e,a,l,r,o,i,c,p,d,u,m,f,h,g,$;return{c(){s=_("h2"),s.textContent="Getting Started",e=k(),a=_("h1"),a.textContent="svelte-image-imgix",l=k(),r=_("p"),r.innerHTML='Lazy loading images from Imgix. Heavily inspired by <a href="https://github.com/matyunya/svelte-image">svelte-image</a>.',o=k(),i=_("p"),i.innerHTML='<a href="https://perspective-software.github.io/svelte-image-imgix/">Documentation &amp; Demo</a>',c=k(),p=_("h2"),p.textContent="Installation",d=k(),u=_("p"),u.innerHTML="<code>npm i svelte-image-imgix -D</code>",m=k(),f=_("p"),f.textContent="Enjoy:",h=k(),$=q(),L(s,"id","getting-started"),L(a,"id","svelte-image-imgix"),L(p,"id","installation"),g=new I($)},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n),w(t,l,n),w(t,r,n),w(t,o,n),w(t,i,n),w(t,c,n),w(t,p,n),w(t,d,n),w(t,u,n),w(t,m,n),w(t,f,n),w(t,h,n),g.m(jt,t,n),w(t,$,n)},p:t,i:t,o:t,d(t){t&&v(s),t&&v(e),t&&v(a),t&&v(l),t&&v(r),t&&v(o),t&&v(i),t&&v(c),t&&v(p),t&&v(d),t&&v(u),t&&v(m),t&&v(f),t&&v(h),t&&v($),t&&g.d()}}}const yt={layout:"default",title:!1},jt='<pre><code class="language-jsx">&lt;script&gt;\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>\n&lt;/script&gt;\n\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://example.imgix.net/myimage.jpg&quot;</span> /&gt;</span></span></code></pre>\n';class wt extends mt{constructor(t){super(),ut(this,t,null,xt,o,{})}}function vt(n){let s,e,a;return{c(){s=_("h1"),s.textContent="Page not found!",e=k(),a=_("p"),a.innerHTML='<a href="/">Go to start page</a>',L(s,"id","page-not-found"),L(s,"class","svelte-aiue6m"),L(a,"class","svelte-aiue6m")},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n)},p:t,i:t,o:t,d(t){t&&v(s),t&&v(e),t&&v(a)}}}const _t={layout:"no_sidebar"};const Et=t=>({}),kt=t=>({}),qt=t=>({}),Ct=t=>({});function Lt(t){let n,s,e,a,l;const r=t[1].result,o=p(r,t,t[0],Ct),i=t[1].code,c=p(i,t,t[0],kt);return{c(){n=_("div"),s=_("div"),o&&o.c(),e=k(),a=_("div"),c&&c.c(),L(s,"class","result"),L(a,"class","code"),L(n,"class","example")},m(t,r){w(t,n,r),j(n,s),o&&o.m(s,null),j(n,e),j(n,a),c&&c.m(a,null),l=!0},p(t,[n]){o&&o.p&&1&n&&u(o,r,t,t[0],n,qt,Ct),c&&c.p&&1&n&&u(c,i,t,t[0],n,Et,kt)},i(t){l||(et(o,t),et(c,t),l=!0)},o(t){at(o,t),at(c,t),l=!1},d(t){t&&v(n),o&&o.d(t),c&&c.d(t)}}}function Pt(t,n,s){let{$$slots:e={},$$scope:a}=n;return t.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,e]}class St extends mt{constructor(t){super(),ut(this,t,Pt,Lt,o,{})}}function It(t){let n,s,e;return{c(){n=_("iframe"),L(n,"slot","result"),P(n,"height",t[2]+"px"),L(n,"title","Result"),L(n,"scrolling","no"),L(n,"sandbox","allow-same-origin allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-scripts"),L(n,"srcdoc",t[3]),L(n,"class","svelte-y9biys")},m(a,l){w(a,n,l),t[7](n),s||(e=C(n,"load",t[4]),s=!0)},p(t,s){4&s&&P(n,"height",t[2]+"px")},d(a){a&&v(n),t[7](null),s=!1,e()}}}function Ot(t){let n,s,e=t[0].trim()+"";return{c(){n=_("pre"),s=_("code"),L(n,"slot","code"),L(n,"class","hljs svelte-y9biys")},m(t,a){w(t,n,a),j(n,s),s.innerHTML=e},p(t,n){1&n&&e!==(e=t[0].trim()+"")&&(s.innerHTML=e)},d(t){t&&v(n)}}}function Tt(n){let s;return{c(){s=k()},m(t,n){w(t,s,n)},p:t,d(t){t&&v(s)}}}function At(t){let n,s;return n=new St({props:{$$slots:{default:[Tt],code:[Ot],result:[It]},$$scope:{ctx:t}}}),{c(){it(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p(t,[s]){const e={};1031&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(et(n.$$.fragment,t),s=!0)},o(t){at(n.$$.fragment,t),s=!1},d(t){pt(n,t)}}}let Mt=1;function Ht(t,n,s){let{name:e}=n,{code:a}=n,{height:l=!1}=n;const r=Number.isInteger(l);let o,i=Mt++,c=r?l:70;return window.addEventListener("message",(function(t){t.data.iframe_id&&t.data.iframe_id===i&&!r&&t.data.hasOwnProperty("HEIGHT")&&s(2,c=t.data.HEIGHT)})),t.$$set=t=>{"name"in t&&s(5,e=t.name),"code"in t&&s(0,a=t.code),"height"in t&&s(6,l=t.height)},[a,o,c,"<!doctype html>\n<html style=\"height: auto !important\">\n    <head>\n        <meta charset='utf-8'>\n        <base href='/svelte-image-imgix/' />\n        <link rel='stylesheet' href='examples.css'>\n        <script defer src='examples.js'><\/script>\n    </head>\n    <body style=\"height: auto !important\"></body>\n</html>",function(){o.contentWindow.postMessage({COMPONENT:e,iframe_id:i},"*")},e,l,function(t){D[t?"unshift":"push"]((()=>{o=t,s(1,o)}))}]}class Nt extends mt{constructor(t){super(),ut(this,t,Ht,At,o,{name:5,code:0,height:6})}}function Gt(n){let s,e,a,l;return a=new Nt({props:{name:"Ex_0_48a21ba780b74640849bd7b0f2cfaa64",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png&quot;</span> /&gt;</span></span>',height:!1}}),{c(){s=_("h2"),s.textContent="Basic",e=k(),it(a.$$.fragment),L(s,"id","basic")},m(t,n){w(t,s,n),w(t,e,n),ct(a,t,n),l=!0},p:t,i(t){l||(et(a.$$.fragment,t),l=!0)},o(t){at(a.$$.fragment,t),l=!1},d(t){t&&v(s),t&&v(e),pt(a,t)}}}const zt={};function Dt(n){let s,e,a,l;return a=new Nt({props:{name:"Ex_0_7e314d3b9170fde59d3690ffa51c8894",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">Image</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png&quot;</span>\n    <span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;10&quot;</span>\n/&gt;</span></span>',height:!1}}),{c(){s=_("h2"),s.textContent="Blur",e=k(),it(a.$$.fragment),L(s,"id","blur")},m(t,n){w(t,s,n),w(t,e,n),ct(a,t,n),l=!0},p:t,i(t){l||(et(a.$$.fragment,t),l=!0)},o(t){at(a.$$.fragment,t),l=!1},d(t){t&&v(s),t&&v(e),pt(a,t)}}}const Rt={};function Bt(n){let s,e,a,l,r,o;return r=new Nt({props:{name:"Ex_0_7e2ae2b5cd8eb754eb0b98424979de4f",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">Image</span>\n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png&quot;</span>\n    <span class="hljs-attr">ratio</span>=<span class="hljs-string">&quot;100%&quot;</span>\n    <span class="hljs-attr">imgixParams</span>=</span></span><span class="javascript">&#123;&#123; <span class="hljs-attr">ar</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">fit</span>: <span class="hljs-string">&#x27;crop&#x27;</span> &#125;&#125;</span><span class="xml"><span class="hljs-tag">\n/&gt;</span></span>',height:!1}}),{c(){s=_("h2"),s.textContent="Ratio",e=k(),a=_("p"),a.textContent="Ratio is usually calculated by the placeholder dimensions, but you can pass it manually if needed.\nIf you do so, make sure your imgix image also has the correct ratio.",l=k(),it(r.$$.fragment),L(s,"id","ratio")},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n),w(t,l,n),ct(r,t,n),o=!0},p:t,i(t){o||(et(r.$$.fragment,t),o=!0)},o(t){at(r.$$.fragment,t),o=!1},d(t){t&&v(s),t&&v(e),t&&v(a),t&&v(l),pt(r,t)}}}const Wt={};function Ft(n){let s,e,a,l,r,o,i,c,p,d;return r=new Nt({props:{name:"Ex_0_2598bb70b22c9a37706a7493c6e6887f",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">Image</span> \n    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png&quot;</span>\n    <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom&quot;</span>\n    <span class="hljs-attr">placeholderClassName</span>=<span class="hljs-string">&quot;custom&quot;</span>\n/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span></span><span class="css">\n    <span class="hljs-selector-pseudo">:global(.custom)</span> &#123;\n        <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">16px</span>;\n    &#125;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>',height:!1}}),p=new Nt({props:{name:"Ex_1_2598bb70b22c9a37706a7493c6e6887f",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://perspective.imgix.net/5fda1f79ff701a001f5bd215.png&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span></span><span class="css">\n    <span class="hljs-selector-class">.wrapper</span> &#123;\n        <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">16px</span>;\n        <span class="hljs-attribute">overflow</span>: hidden;\n        <span class="hljs-attribute">line-height</span>: <span class="hljs-number">0</span>;\n    &#125;\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span>',height:!1}}),{c(){s=_("h2"),s.textContent="Styling",e=k(),a=_("p"),a.innerHTML='<strong>Why do applied classes need to be <code>global</code>?</strong>\nLong answer: <a href="https://github.com/sveltejs/svelte/issues/2870">https://github.com/sveltejs/svelte/issues/2870</a>',l=k(),it(r.$$.fragment),o=k(),i=_("p"),i.textContent="Another to style your image would be wrapping it:",c=k(),it(p.$$.fragment),L(s,"id","styling")},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n),w(t,l,n),ct(r,t,n),w(t,o,n),w(t,i,n),w(t,c,n),ct(p,t,n),d=!0},p:t,i(t){d||(et(r.$$.fragment,t),et(p.$$.fragment,t),d=!0)},o(t){at(r.$$.fragment,t),at(p.$$.fragment,t),d=!1},d(t){t&&v(s),t&&v(e),t&&v(a),t&&v(l),pt(r,t),t&&v(o),t&&v(i),t&&v(c),pt(p,t)}}}const Jt={};function Kt(n){let s,e,a,l,r,o,i,c;return{c(){s=_("h2"),s.textContent="Getting Started",e=k(),a=_("p"),a.innerHTML="<code>npm i svelte-image-imgix -D</code>",l=k(),r=_("p"),r.textContent="Enjoy:",o=k(),c=q(),L(s,"id","getting-started"),i=new I(c)},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n),w(t,l,n),w(t,r,n),w(t,o,n),i.m(Ut,t,n),w(t,c,n)},p:t,i:t,o:t,d(t){t&&v(s),t&&v(e),t&&v(a),t&&v(l),t&&v(r),t&&v(o),t&&v(c),t&&i.d()}}}const Qt={},Ut='<pre><code class="language-jsx">&lt;script&gt;\n    <span class="hljs-keyword">import</span> &#123; Image &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;svelte-image-imgix&#x27;</span>\n&lt;/script&gt;\n\n<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://example.imgix.net/myimage.jpg&quot;</span> /&gt;</span></span></code></pre>\n';function Vt(n){let s,e,a;return{c(){s=_("h1"),s.textContent="Properties",e=k(),a=_("dl"),a.innerHTML="<dt>src</dt><dd><dfn>string</dfn></dd><dd>required</dd><dd>Imgix image url</dd><dt>alt</dt><dd><dfn>string</dfn></dd><dd>optional</dd><dd>alt image text</dd><dt>ratio</dt><dd><dfn>string</dfn></dd><dd>optional</dd><dd>ratio percentage (e.g. 16/9 -&gt; 56.25%) if not provided, ratio will be calculated from the placeholder image</dd><dt>sizes</dt><dd><dfn>string</dfn></dd><dd>optional</dd><dd>image sizes to pick from srcset (default: <code>&#39;(max-width: 1000px) 100vw, 1000px&#39;</code>)</dd><dt>imgixParams</dt><dd><dfn>object</dfn></dd><dd>optional</dd><dd>Imgix parameters that will be appended to the src and the placeholder</dd><dt>placeholderSize</dt><dd><dfn>number</dfn></dd><dd>optional</dd><dd>Natural width of the placeholder image in px (default: <code>120</code>)</dd><dt>blur</dt><dd><dfn>number</dfn></dd><dd>optional</dd><dd>Placeholder blur amount (default: <code>500</code>)</dd><dt>offset</dt><dd><dfn>number</dfn></dd><dd>optional</dd><dd>svelte-waypoint offset (default: <code>0</code>)</dd><dt>threshold</dt><dd><dfn>number</dfn></dd><dd>optional</dd><dd>svelte-waypoint threshold (default: <code>1.0</code>)</dd><dt>lazy</dt><dd><dfn>boolean</dfn></dd><dd>optional</dd><dd>enable/disabled svelte-waypoint lazy loading (default: <code>true</code>)</dd><dt>className</dt><dd><dfn>string</dfn></dd><dd>optional</dd><dd>CSS class applied to the final image</dd><dt>placeholderClassName</dt><dd><dfn>string</dfn></dd><dd>optional</dd><dd>CSS class applied to the placeholder image</dd>",L(s,"id","properties"),L(a,"class","properties")},m(t,n){w(t,s,n),w(t,e,n),w(t,a,n)},p:t,i:t,o:t,d(t){t&&v(s),t&&v(e),t&&v(a)}}}const Xt={};const Yt=ht(nn());function Zt(t){history.pushState({},"",""===t?en():t),Yt.set(t.split("#")[0])}function tn(){Yt.set(nn())}function nn(){let t=location.pathname;return t=function(t){const n=en();t.startsWith(n)&&(t=t.slice(n.length));t.startsWith("/")&&(t=t.slice(1));t.endsWith("/")&&(t=t.slice(0,-1));return t}(t),t}function sn(t){const n=t.target.closest("a");if(!n)return;const s=n.getAttribute("href");if(s){if(!/^\w+:\/\//.test(s))return t.preventDefault(),/^\/$/.test(s)?Zt(""):Zt(s);n.setAttribute("target","_blank")}}function en(){let t=(document.querySelector("base")||{}).href.replace(window.location.origin,"").slice(0,-1);return""===t?"/":t}const an=[{url:"",component:wt,title:yt.hasOwnProperty("title")?yt.title:"Getting Started",meta:yt},{url:"sd:error",component:class extends mt{constructor(t){super(),ut(this,t,null,vt,o,{})}},title:_t.hasOwnProperty("title")?_t.title:"Page not found!",meta:_t},{url:"examples/basic",component:class extends mt{constructor(t){super(),ut(this,t,null,Gt,o,{})}},title:zt.hasOwnProperty("title")?zt.title:"Basic",meta:zt},{url:"examples/blur",component:class extends mt{constructor(t){super(),ut(this,t,null,Dt,o,{})}},title:Rt.hasOwnProperty("title")?Rt.title:"Blur",meta:Rt},{url:"examples/ratio",component:class extends mt{constructor(t){super(),ut(this,t,null,Bt,o,{})}},title:Wt.hasOwnProperty("title")?Wt.title:"Ratio",meta:Wt},{url:"examples/styling",component:class extends mt{constructor(t){super(),ut(this,t,null,Ft,o,{})}},title:Jt.hasOwnProperty("title")?Jt.title:"Styling",meta:Jt},{url:"getting-started",component:class extends mt{constructor(t){super(),ut(this,t,null,Kt,o,{})}},title:Qt.hasOwnProperty("title")?Qt.title:"Getting Started",meta:Qt},{url:"index",component:wt,title:yt.hasOwnProperty("title")?yt.title:"Getting Started",meta:yt},{url:"properties",component:class extends mt{constructor(t){super(),ut(this,t,null,Vt,o,{})}},title:Xt.hasOwnProperty("title")?Xt.title:"Properties",meta:Xt}],ln=an.filter((t=>"sd:error"===t.url))[0],rn=function(n,s,e){const a=!Array.isArray(n),o=a?[n]:n,c=s.length<2;return{subscribe:ht(e,(n=>{let e=!1;const p=[];let d=0,u=t;const m=()=>{if(d)return;u();const e=s(a?p[0]:p,n);c?n(e):u=r(e)?e:t},f=o.map(((t,n)=>i(t,(t=>{p[n]=t,d&=~(1<<n),e&&m()}),(()=>{d|=1<<n}))));return e=!0,m(),function(){l(f),u()}})).subscribe}}(Yt,(t=>{const n=an.filter((n=>n.url===t));return n.length>0?n[0]:ln}));var on="svelte-image-imgix";function cn(n){let s;return{c(){s=_("h1"),s.innerHTML='<img src="static/logo.png" alt="Logo" class="svelte-4jsf9m"/>',L(s,"id","logo")},m(t,n){w(t,s,n)},p:t,i:t,o:t,d(t){t&&v(s)}}}class pn extends mt{constructor(t){super(),ut(this,t,null,cn,o,{})}}function dn(n){let s;return{c(){s=_("ul"),s.innerHTML='<li><a href="https://github.com/Perspective-Software/svelte-image-imgix">Github</a></li>'},m(t,n){w(t,s,n)},p:t,i:t,o:t,d(t){t&&v(s)}}}class un extends mt{constructor(t){super(),ut(this,t,null,dn,o,{})}}function mn(n){let s,e,a,l,r,o;return e=new pn({}),r=new un({}),{c(){s=_("section"),it(e.$$.fragment),a=k(),l=_("section"),it(r.$$.fragment)},m(t,n){w(t,s,n),ct(e,s,null),w(t,a,n),w(t,l,n),ct(r,l,null),o=!0},p:t,i(t){o||(et(e.$$.fragment,t),et(r.$$.fragment,t),o=!0)},o(t){at(e.$$.fragment,t),at(r.$$.fragment,t),o=!1},d(t){t&&v(s),pt(e),t&&v(a),t&&v(l),pt(r)}}}class fn extends mt{constructor(t){super(),ut(this,t,null,mn,o,{})}}function hn(n){let s;return{c(){s=_("ul"),s.innerHTML='<li><a href="getting-started">Getting Started</a></li> \n<li><a href="properties">Properties</a></li> \n<li>Examples<ul><li><a href="examples/basic">Basic</a></li> \n<li><a href="examples/styling">Styling</a></li> \n<li><a href="examples/ratio">Ratio</a></li> \n<li><a href="examples/blur">Blur</a></li></ul></li> \n<li><a href="https://github.com/Perspective-Software/svelte-image-imgix">Github</a></li>'},m(t,n){w(t,s,n)},p:t,i:t,o:t,d(t){t&&v(s)}}}class gn extends mt{constructor(t){super(),ut(this,t,null,hn,o,{})}}function $n(n){let s,e;return s=new gn({}),{c(){it(s.$$.fragment)},m(t,n){ct(s,t,n),e=!0},p:t,i(t){e||(et(s.$$.fragment,t),e=!0)},o(t){at(s.$$.fragment,t),e=!1},d(t){pt(s,t)}}}class bn extends mt{constructor(t){super(),ut(this,t,null,$n,o,{})}}function xn(t){let n,s,e;var a=t[0].component;return a&&(s=new a({})),{c(){n=_("article"),s&&it(s.$$.fragment)},m(t,a){w(t,n,a),s&&ct(s,n,null),e=!0},p(t,[e]){if(a!==(a=t[0].component)){if(s){nt();const t=s;at(t.$$.fragment,1,0,(()=>{pt(t,1)})),st()}a?(s=new a({}),it(s.$$.fragment),et(s.$$.fragment,1),ct(s,n,null)):s=null}},i(t){e||(s&&et(s.$$.fragment,t),e=!0)},o(t){s&&at(s.$$.fragment,t),e=!1},d(t){t&&v(n),s&&pt(s)}}}function yn(t,n,s){let e;return c(t,rn,(t=>s(0,e=t))),rn.subscribe((()=>{window.scrollTo(0,0)})),[e]}class jn extends mt{constructor(t){super(),ut(this,t,yn,xn,o,{})}}const{document:wn}=ot;function vn(t){let n,s,e;return s=new jn({}),{c(){n=_("main"),it(s.$$.fragment),L(n,"class","fullscreen"),S(n,"mobile",t[2])},m(t,a){w(t,n,a),ct(s,n,null),e=!0},p(t,s){4&s&&S(n,"mobile",t[2])},i(t){e||(et(s.$$.fragment,t),e=!0)},o(t){at(s.$$.fragment,t),e=!1},d(t){t&&v(n),pt(s)}}}function _n(t){let n,s,e,a,l,r=t[2]&&En(t),o=(!t[2]||t[1])&&kn(t);return a=new jn({}),{c(){r&&r.c(),n=k(),o&&o.c(),s=k(),e=_("main"),it(a.$$.fragment),S(e,"mobile",t[2])},m(t,i){r&&r.m(t,i),w(t,n,i),o&&o.m(t,i),w(t,s,i),w(t,e,i),ct(a,e,null),l=!0},p(t,a){t[2]?r?r.p(t,a):(r=En(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null),!t[2]||t[1]?o?6&a&&et(o,1):(o=kn(t),o.c(),et(o,1),o.m(s.parentNode,s)):o&&(nt(),at(o,1,1,(()=>{o=null})),st()),4&a&&S(e,"mobile",t[2])},i(t){l||(et(o),et(a.$$.fragment,t),l=!0)},o(t){at(o),at(a.$$.fragment,t),l=!1},d(t){r&&r.d(t),t&&v(n),o&&o.d(t),t&&v(s),t&&v(e),pt(a)}}}function En(t){let n,s,e,a,l;return{c(){n=_("button"),s=_("img"),s.src!==(e="assets/burger.svg")&&L(s,"src","assets/burger.svg"),L(s,"alt","Open Menu"),P(s,"transform","rotate("+t[3]+"deg)"),L(n,"class","showNav")},m(e,r){var o;w(e,n,r),j(n,s),a||(l=C(n,"click",(o=t[13],function(t){return t.stopPropagation(),o.call(this,t)})),a=!0)},p(t,n){8&n&&P(s,"transform","rotate("+t[3]+"deg)")},d(t){t&&v(n),a=!1,l()}}}function kn(t){let n,s,e,a,r,o,i,c;return s=new bn({}),{c(){n=_("nav"),it(s.$$.fragment)},m(l,r){w(l,n,r),ct(s,n,null),o=!0,i||(c=[f(e=t[7].call(null,n)),f(a=t[8].call(null,n))],i=!0)},i(e){o||(et(s.$$.fragment,e),J((()=>{r||(r=rt(n,t[6],{},!0)),r.run(1)})),o=!0)},o(e){at(s.$$.fragment,e),r||(r=rt(n,t[6],{},!1)),r.run(0),o=!1},d(t){t&&v(n),pt(s),t&&r&&r.end(),i=!1,l(c)}}}function qn(t){let n,s,e,a,l,r,o,i,c,p;J(t[12]),wn.title=n=t[4],a=new fn({});let d="no_sidebar"===t[5]&&vn(t),u="default"===t[5]&&_n(t);return{c(){s=k(),e=_("header"),it(a.$$.fragment),l=k(),d&&d.c(),r=k(),u&&u.c(),o=q()},m(n,m){w(n,s,m),w(n,e,m),ct(a,e,null),w(n,l,m),d&&d.m(n,m),w(n,r,m),u&&u.m(n,m),w(n,o,m),i=!0,c||(p=C(window,"resize",t[12]),c=!0)},p(t,[s]){(!i||16&s)&&n!==(n=t[4])&&(wn.title=n),"no_sidebar"===t[5]?d?(d.p(t,s),32&s&&et(d,1)):(d=vn(t),d.c(),et(d,1),d.m(r.parentNode,r)):d&&(nt(),at(d,1,1,(()=>{d=null})),st()),"default"===t[5]?u?(u.p(t,s),32&s&&et(u,1)):(u=_n(t),u.c(),et(u,1),u.m(o.parentNode,o)):u&&(nt(),at(u,1,1,(()=>{u=null})),st())},i(t){i||(et(a.$$.fragment,t),et(d),et(u),i=!0)},o(t){at(a.$$.fragment,t),at(d),at(u),i=!1},d(t){t&&v(s),t&&v(e),pt(a),t&&v(l),d&&d.d(t),t&&v(r),u&&u.d(t),t&&v(o),c=!1,p()}}}function Cn(t,e,a){let l,r,o;c(t,rn,(t=>a(11,o=t)));let i=0,p=!1;const d=ht(!0);c(t,d,(t=>a(2,l=t)));const u=function(t,e={}){const a=ht(t);let l,r=t;function o(o,i){if(null==t)return a.set(t=o),Promise.resolve();r=o;let c=l,p=!1,{delay:d=0,duration:u=400,easing:m=n,interpolate:f=bt}=s(s({},e),i);if(0===u)return c&&(c.abort(),c=null),a.set(t=r),Promise.resolve();const h=g()+d;let $;return l=y((n=>{if(n<h)return!0;p||($=f(t,o),"function"==typeof u&&(u=u(t,o)),p=!0),c&&(c.abort(),c=null);const s=n-h;return s>u?(a.set(t=o),!1):(a.set(t=$(m(s/u))),!0)})),l.promise}return{set:o,update:(n,s)=>o(n(r,t),s),subscribe:a.subscribe}}(0,{duration:200,easing:gt});c(t,u,(t=>a(3,r=t)));let f,h;return t.$$.update=()=>{1&t.$$.dirty&&m(d,l=i<800,l),6&t.$$.dirty&&a(1,p=!!l&&p),2&t.$$.dirty&&m(u,r=p?180:0,r),2048&t.$$.dirty&&a(4,f=o.title?o.title+" — "+on:on),2048&t.$$.dirty&&a(5,h=o.meta.layout?o.meta.layout:"default")},[i,p,l,r,f,h,function(t){const n=gt,s=getComputedStyle(t),e=parseFloat(s.width);return{delay:10,duration:200,easing:n,css:t=>`overflow: hidden;width: ${t*e}px;`}},function(t){return{destroy:rn.subscribe((n=>{const s=n.url||"/";t.querySelectorAll("a").forEach((t=>{t.getAttribute("href")===s?t.classList.add("active"):t.classList.remove("active")}))}))}},function(t){const n=()=>a(1,p=!1);return document.body.addEventListener("click",n),{destroy(){document.body.removeEventListener("click",n)}}},d,u,o,function(){a(0,i=window.innerWidth)},()=>a(1,p=!p)]}class Ln extends mt{constructor(t){super(),ut(this,t,Cn,qn,o,{})}}function Pn(n){let s,e;return s=new Ln({}),{c(){it(s.$$.fragment)},m(t,n){ct(s,t,n),e=!0},p:t,i(t){e||(et(s.$$.fragment,t),e=!0)},o(t){at(s.$$.fragment,t),e=!1},d(t){pt(s,t)}}}function Sn(t){return G((()=>(addEventListener("click",sn),addEventListener("popstate",tn),function(){removeEventListener("click",sn),removeEventListener("popstate",tn)}))),[]}return new class extends mt{constructor(t){super(),ut(this,t,Sn,Pn,o,{})}}({target:document.body,props:{}})}();
