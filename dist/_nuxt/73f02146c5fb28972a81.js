(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(t,e,o){var content=o(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("0f97d30e",content,!0,{sourceMap:!1})},190:function(t,e,o){"use strict";var n=o(189);o.n(n).a},191:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".page-grid[data-v-0dfe6898]{display:grid;grid-gap:32px}.standard-grid[data-v-0dfe6898]{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));grid-auto-rows:360px;grid-gap:32px}.feature-tile[data-v-0dfe6898]{height:360px}.feature-tile[data-v-0dfe6898],.standard-tile[data-v-0dfe6898]{display:flex;justify-content:center;align-items:center;background:#fff}",""])},193:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):e.slugChanged||window.location.reload()})},asyncData:function(t){var e=!1;(t.query._storyblok||t.isDev||"undefined"!=typeof window&&window.localStorage.getItem("_storyblok_draft_mode"))&&("undefined"!=typeof window&&(window.localStorage.setItem("_storyblok_draft_mode","1"),window.location==window.parent.location&&window.localStorage.removeItem("_storyblok_draft_mode")),e=!0);var o=e?"draft":"published",path="/"==t.route.path?"home":t.route.path;return function(t){var e=t.api,o=t.cacheVersion,n=t.errorCallback,r=t.version,path=t.path;return e.get("cdn/stories/".concat(path),{version:r,cv:o}).then(function(t){return t.data}).catch(function(t){t.response?(console.error(t.response.data),n({statusCode:t.response.status,message:t.response.data})):(console.error(t),n({statusCode:404,message:"Failed to receive content form api"}))})}({version:o,api:t.app.$storyapi,cacheVersion:t.store.state.cacheVersion,errorCallback:t.error,path:path})}},r=(o(190),o(3)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-grid"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.story.content.component?o(t._f("dashify")(t.story.content.component),{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sub-header"},[e("h1",[this._v("Logos")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sub-header"},[e("h3",[this._v("OUR LOGO")])])}],!1,null,"0dfe6898",null);e.default=component.exports}}]);