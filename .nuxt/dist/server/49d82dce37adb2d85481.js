exports.ids=[2],exports.modules={35:function(t,e,o){var content=o(37);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("0f97d30e",content,!0,t)}},36:function(t,e,o){"use strict";o.r(e);var r=o(35),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,function(){return r[t]})}(d);e.default=n.a},37:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".page-grid[data-v-0dfe6898]{display:grid;grid-gap:32px}.standard-grid[data-v-0dfe6898]{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));grid-auto-rows:360px;grid-gap:32px}.feature-tile[data-v-0dfe6898]{height:360px}.feature-tile[data-v-0dfe6898],.standard-tile[data-v-0dfe6898]{display:flex;justify-content:center;align-items:center;background:#fff}",""])},38:function(t,e,o){"use strict";o.r(e);var r={data:()=>({story:{content:{}}}),mounted(){this.$storybridge.on(["input","published","change"],t=>{"input"==t.action?t.story.id===this.story.id&&(this.story.content=t.story.content):t.slugChanged||window.location.reload()})},asyncData(t){let e=!1;(t.query._storyblok||t.isDev||"undefined"!=typeof window&&window.localStorage.getItem("_storyblok_draft_mode"))&&("undefined"!=typeof window&&(window.localStorage.setItem("_storyblok_draft_mode","1"),window.location==window.parent.location&&window.localStorage.removeItem("_storyblok_draft_mode")),e=!0);let o=e?"draft":"published",path="/"==t.route.path?"home":t.route.path;return function({api:t,cacheVersion:e,errorCallback:o,version:r,path:path}){return t.get(`cdn/stories/${path}`,{version:r,cv:e}).then(t=>t.data).catch(t=>{t.response?(console.error(t.response.data),o({statusCode:t.response.status,message:t.response.data})):(console.error(t),o({statusCode:404,message:"Failed to receive content form api"}))})}({version:o,api:t.app.$storyapi,cacheVersion:t.store.state.cacheVersion,errorCallback:t.error,path:path})}},n=o(1);var component=Object(n.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-grid"},[this._ssrNode('<div class="sub-header" data-v-0dfe6898><h1 data-v-0dfe6898>Logos</h1></div> <div class="sub-header" data-v-0dfe6898><h3 data-v-0dfe6898>OUR LOGO</h3></div> '),this.story.content.component?e(this._f("dashify")(this.story.content.component),{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],2)},[],!1,function(t){var e=o(36);e.__inject__&&e.__inject__(t)},"0dfe6898","d387bd2e");e.default=component.exports}};
//# sourceMappingURL=49d82dce37adb2d85481.js.map