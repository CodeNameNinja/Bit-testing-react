if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-08f5dbf1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"7f95b7ecf3bf599ea0d302e4d8e69e77"},{url:"/static/css/245.c7ef94cf.css",revision:null},{url:"/static/js/245.377f56cf.js",revision:null},{url:"/static/js/245.377f56cf.js.LICENSE.txt",revision:"f68f065ba7a7fd7d500cc2f3df8273be"},{url:"/static/js/main.6541dc6d.js",revision:null},{url:"/static/js/runtime-main.49a394e4.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("public/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
