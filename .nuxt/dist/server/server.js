module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"982fb201a31cab3fa7b9",2:"9831ef3a25ac1fc688d4",3:"6524f43e51a20fd2931e"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick(function(){throw t})},r(r.s=20)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(t,e){return f.call(e),m(t,e)}}else{var x=h.beforeCreate;h.beforeCreate=x?[].concat(x,f):[f]}return{exports:t,options:h}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return r})},function(t,e){t.exports=require("vuex")},function(t,e,n){var content=n(23);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("b675d82e",content,!0,t)}},function(t,e,n){var content=n(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("17cfdfa9",content,!0,t)}},function(t,e,n){var content=n(27);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("c05eed64",content,!0,t)}},function(t,e,n){var content=n(29);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("aab9a468",content,!0,t)}},function(t,e,n){var content=n(32);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("09d2f542",content,!0,t)}},function(t,e,n){var content=n(34);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("481a65a4",content,!0,t)}},function(t,e,n){var content=n(36);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("4c726456",content,!0,t)}},function(t,e,n){var content=n(38);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("1d399f83",content,!0,t)}},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("storyblok-js-client")},function(t,e){t.exports=require("storyblok-vue")},function(t,e,n){t.exports=n(40)},function(t,e,n){"use strict";n.r(e);n(0);e.default=function({store:t}){t.state.cacheVersion||t.dispatch("loadCacheVersion")}},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".sidenav-container[data-v-70eea83a]{background:#202020;height:100vh;width:240px;position:fixed}.sidenav-links[data-v-70eea83a]{display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;width:100%;padding:0}a[data-v-70eea83a]{font-family:proxima-nova,sans-serif;font-size:18px;color:#fff;box-sizing:border-box;text-decoration:none;width:100%;display:block;padding:19px 15px}a[data-v-70eea83a]:hover{-webkit-transition:all .3s ease-out;background:#2a2a2a;transition:all .3s ease-out}",""])},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}h1{font-family:Crimson Text,serif;font-weight:400;font-size:48px;line-height:57px;color:#1b1b1b}h1,h3{font-style:normal}h3{font-family:proxima-nova,sans-serif;font-weight:600;font-size:12px;line-height:18px;letter-spacing:2px;text-transform:uppercase;color:#202020}*,:after,:before{box-sizing:border-box;margin:0}.main-grid{background:#f8f8f8;display:grid;grid-template-columns:240px 1fr [main] 6fr 1fr}main{padding:148px 0;grid-column:main}",""])},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);e.default=(()=>new o.a.Store({state:{cacheVersion:""},mutations:{setCacheVersion(t,e){t.cacheVersion=e}},actions:{loadCacheVersion({commit:t}){return this.$storyapi.get("cdn/spaces/me").then(e=>{t("setCacheVersion",e.data.space.version)})}}}))},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".gridtest[data-v-52790084]{display:grid;grid-gap:32px;grid-template-columns:1fr 1fr}",""])},function(t,e,n){"use strict";n.r(e);var r=n(10),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".image[data-v-b3cff240]{text-align:center;grid-column:span 1}img[data-v-b3cff240]{width:100%;height:auto;border-radius:4px;-o-object-fit:cover;object-fit:cover;background-color:none}",""])},function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".asset-featured[data-v-697d1dd3]{grid-column:span 2}img[data-v-697d1dd3]{width:100%;height:auto;border-radius:4px;-o-object-fit:cover;object-fit:cover;background-color:none}",""])},function(t,e,n){"use strict";n.r(e);var r=n(12),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".section-header[data-v-2e26a1b0]{grid-column:span 2}",""])},function(t,e){t.exports=require("debug")},function(t,e,n){"use strict";n.r(e);var r=n(14),o=n(0),c=n.n(o),l=n(15),d=n.n(l);const f={};f.setCacheVersion=n(21),f.setCacheVersion=f.setCacheVersion.default||f.setCacheVersion;var h=f;function m(t){return t.then(t=>t.default||t)}function x(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function v(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).map(r=>(e&&e.push(n),t.components[r]))))}function y(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,e,n,r)=>("function"!=typeof t||t.options||(t=await t()),n.components[r]=x(t),n.components[r])))}async function _(t){if(t)return await y(t),{...t,meta:v(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function w(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=((e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],o=c[1]);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))}),t.context.beforeNuxtRender=(t=>e.beforeRenderFns.push(t)));const[n,r]=await Promise.all([_(e.route),_(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!!e.isHMR,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function k(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>k(t.slice(1),e))}function C(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function j(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=r||{},c=o.pretty?S:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let o;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(o=c(r[t]),!e[i].test(o))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(o)+"`");path+=(0===t?n.prefix:n.delimiter)+o}}else{if(o=n.asterisk?encodeURI(r).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):c(r),!e[i].test(o))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+o+'"');path+=n.prefix+o}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=$.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(o,f),o=f+e.length,d){path+=d[1];continue}const h=t[o],m=l[2],x=l[3],v=l[4],y=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const k=null!=m&&null!=h&&h!==m,C="+"===_||"*"===_,j="?"===_||"*"===_,$=l[2]||c,pattern=v||y;n.push({name:x||r++,prefix:m||"",delimiter:$,optional:j,repeat:C,partial:k,asterisk:!!w,pattern:pattern?E(pattern):w?".*":"[^"+N($)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function S(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function E(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var O=n(16),T=n.n(O),R=n(13),P=n.n(R);const A=()=>m(n.e(2).then(n.bind(null,48))),M=()=>m(n.e(1).then(n.bind(null,49))),L=()=>m(n.e(3).then(n.bind(null,47)));c.a.use(P.a);const z=function(t,e,n){let r=!1;return t.matched.length<2&&t.matched.every(t=>!1!==t.components.default.options.scrollToTop)?r={x:0,y:0}:t.matched.some(t=>t.components.default.options.scrollToTop)&&(r={x:0,y:0}),n&&(r=n),new Promise(e=>{window.$nuxt.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var V=n(17),U={...n.n(V).a,name:"NoSsr"},D={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,f={};I.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};B.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(r))});const m=h.beforeEnter;h.beforeEnter=(t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(r,t)});let x=[t("router-view",data)];return n.keepAlive&&(x=[t("keep-alive",{props:n.keepAliveProps},x)]),t("transition",{props:f,on:h},x)}};const I=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],B=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var F={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},K=n(1);var H=Object(K.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=n(22);e.__inject__&&e.__inject__(t)},null,"57c8f774").exports,W={name:"Nuxt",components:{NuxtChild:D,NuxtError:H},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||j(this.$route.matched[0].path)(this.$route.params);const t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},X={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var J=Object(K.a)(X,void 0,void 0,!1,function(t){var e=n(24);e.__inject__&&e.__inject__(t)},null,"008030b0").exports;var Z={components:{Sidenav:Object(K.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav-container"},[t._ssrNode('<ul class="sidenav-links" data-v-70eea83a>',"</ul>",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/logos"}},[t._v("Logos")]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/colours"}},[t._v("Colours")]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/typography"}},[t._v("Typography")])],2)])},[],!1,function(t){var e=n(26);e.__inject__&&e.__inject__(t)},"70eea83a","365db2a8").exports}};const Y={_default:Object(K.a)(Z,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-grid"},[e("Sidenav"),this._ssrNode(" "),this._ssrNode("<main>","</main>",[e("nuxt")],1)],2)},[],!1,function(t){var e=n(28);e.__inject__&&e.__inject__(t)},null,"6dd60bb6").exports};var G={head:{title:"vue-nuxt-storyblok-boilerplate",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js Storyblok Boilerplate"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Crimson+Text"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Proxima+Nova"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&Y["_"+t]||(t="default"),this.layoutName=t,this.layout=Y["_"+t],this.layout},loadLayout:t=>(t&&Y["_"+t]||(t="default"),Promise.resolve(Y["_"+t]))},components:{NuxtLoading:J}},Q=n(4),tt=n.n(Q);c.a.use(tt.a);const et=console;let nt={};(nt=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),it(t,e)}(n(30),"store/index.js")).modules=nt.modules||{};const ot=nt instanceof Function?nt:()=>new tt.a.Store(Object.assign({strict:!1},nt));function it(t,e){if(t.state&&"function"!=typeof t.state){et.warn(`'state' should be a method that returns an object in ${e}`);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}var st=n(18),at=n.n(st),ct=n(19),ut=n.n(ct);const lt={install(){c.a.prototype.$storyapi||(c.a.prototype.$storyapi=new at.a({accessToken:"q6bXKsW90M76NxZmqWHOKwtt",cache:{clear:"auto",type:"memory"},timeout:0}),c.a.prototype.$storybridge={doLoadScript:!0,proxy:null,on:function(t,e,n){(n=n||{}).accessToken="q6bXKsW90M76NxZmqWHOKwtt",this.load(()=>{window.storyblok.init(n),window.storyblok.on(t,t=>{"input"==t.action&&(t.story.content=this.proxy.addComments(t.story.content,t.story.id)),e(t)})})},load:function(t,e){if("function"!=typeof e&&(e=function(){}),window.location!=window.parent.location){if(!this.doLoadScript)return window.storyblok?void t():void e("The Storyblok bridge script is already loading.");this.doLoadScript=!1,function(t,e){if(document.getElementById("storyblok-javascript-bridge"))return e();var script=document.createElement("script");script.async=!0,script.src=t,script.id="storyblok-javascript-bridge",script.onerror=function(){e(new Error("Failed to load"+t))},script.onload=function(){e()},document.getElementsByTagName("head")[0].appendChild(script)}("https://app.storyblok.com/f/storyblok-latest.js",()=>{c.a.prototype.$storybridge.proxy=window.storyblok,t()})}else e("You are not in the edit mode.")}})}};c.a.use(lt),c.a.use(ut.a);var pt=t=>{const{app:e,store:n}=t;e.$storyapi=c.a.prototype.$storyapi,t.$storyapi=c.a.prototype.$storyapi,e.$storybridge=c.a.prototype.$storybridge,t.$storybridge=c.a.prototype.$storybridge,n&&(n.$storyapi=c.a.prototype.$storyapi)},ft={props:["blok"]};var ht=Object(K.a)(ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"gridtest"},t._l(t.blok.body,function(e){return n(t._f("dashify")(e.component),{key:e._uid,tag:"component",attrs:{blok:e}})}),1)},[],!1,function(t){var e=n(31);e.__inject__&&e.__inject__(t)},"52790084","3df3da83").exports,mt={props:["blok"]},xt=Object(K.a)(mt,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"teaser"},[this._ssrNode(this._ssrEscape(this._s(this.blok.headline)))])},[],!1,null,null,"f51daa78").exports,vt={props:["blok"]},yt=Object(K.a)(vt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"grid"},t._l(t.blok.columns,function(e){return n(t._f("dashify")(e.component),{key:e._uid,tag:"component",attrs:{blok:e}})}),1)},[],!1,null,null,"1daecfba").exports,_t={props:["blok"]};var gt=Object(K.a)(_t,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"image"},[this._ssrNode("<img"+this._ssrAttr("src",this.blok.image)+" data-v-b3cff240>")])},[],!1,function(t){var e=n(33);e.__inject__&&e.__inject__(t)},"b3cff240","1a212d17").exports,bt={props:["blok"]};var wt=Object(K.a)(bt,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"asset-featured"},[this._ssrNode("<a"+this._ssrAttr("href",this.blok.image)+" download data-v-697d1dd3><img"+this._ssrAttr("src",this.blok.image)+" data-v-697d1dd3></a>")])},[],!1,function(t){var e=n(35);e.__inject__&&e.__inject__(t)},"697d1dd3","2490e57f").exports,kt={props:["blok"]};var Ct=Object(K.a)(kt,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],staticClass:"section-header"},[this._ssrNode("<h3 data-v-2e26a1b0>"+this._ssrEscape(this._s(this.blok.text))+"</h3>")])},[],!1,function(t){var e=n(37);e.__inject__&&e.__inject__(t)},"2e26a1b0","502f4be4").exports;c.a.component("blok-page",ht),c.a.component("blok-teaser",xt),c.a.component("blok-grid",yt),c.a.component("blok-image",gt),c.a.component("blok-asset-featured",wt),c.a.component("blok-section-header",Ct),c.a.filter("resize",(image,t)=>void 0!==image?"//img2.storyblok.com/"+t+image.replace("//a.storyblok.com",""):null),c.a.filter("dashify",function(t){if(void 0===t)return"undefined";return"blok-"+t.toString().replace(/([A-Z])/g," $1").trim().toLowerCase().replace(/[ _]/g,"-")}),c.a.component(U.name,U),c.a.component(D.name,D),c.a.component("NChild",D),c.a.component(W.name,W),c.a.use(T.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const jt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function $t(t){const e=await new P.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:z,routes:[{path:"/",component:A,name:"index"},{path:"/:logos",component:M,children:[{path:"",component:L,name:"logos"}]}],fallback:!1}),n=ot(t);n.$router=e;const r=n.registerModule;n.registerModule=((path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e)));const o={router:e,store:n,nuxt:{defaultTransition:jt,transitions:[jt],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},jt,{name:t}):Object.assign({},jt,t):jt),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=!!e,e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...G};n.app=o;const l=t?t.next:t=>o.router.push(t);let d;if(t)d=e.resolve(t.url).route;else{const path=function(base,t){let path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}(e.options.base);d=e.resolve(path).route}await w(o,{route:d,next:l,error:o.nuxt.error.bind(o),store:n,payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,n[t]=o[t];const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof pt&&await pt(o.context,f),t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await _(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{app:o,store:n,router:e}}var St={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(St.name,St),c.a.component("NLink",St),global.fetch||(global.fetch=d.a);const Nt=n(39)("nuxt:render");Nt.color=4;const Et=()=>new c.a({render:t=>t("div")}),Ot=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=(async t=>{t.redirected=!1,t.next=Ot(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:e,router:n,store:r}=await $t(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:m,nuxtState:t.nuxt}))),t.nuxt.state=r.state},d=async()=>{const n="function"==typeof H.layout?H.layout(e.context):H.layout;return t.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},f=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),d()),m=v(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw Nt("error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return Et();if(t.nuxt.error)return d();let y=["setCacheVersion"];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await k(y,e.context),t.redirected)return Et();if(t.nuxt.error)return d();let _=m.length?m[0].options.layout:H.layout;if("function"==typeof _&&(_=_(e.context)),await o.loadLayout(_),t.nuxt.error)return d();if(_=o.setLayout(_),t.nuxt.layout=o.layoutName,y=[],(_=x(_)).options.middleware&&(y=y.concat(_.options.middleware)),m.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await k(y,e.context),t.redirected)return Et();if(t.nuxt.error)return d();let w=!0;try{for(const t of m)if("function"==typeof t.options.validate&&!(w=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),d()}if(!w)return t._generate&&(t.nuxt.serverRendered=!1),f();if(!m.length)return f();const j=await Promise.all(m.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=j.map(t=>t[0]||{}),t.redirected?Et():t.nuxt.error?d():(await l(),o)})}]);
//# sourceMappingURL=server.js.map