!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/change-update-urls"]=t():e["utils/change-update-urls"]=t()}(self,(function(){return function(){"use strict";var e={251:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{name:"替换更新链接",icon:"mdi-file-replace-outline",disabled:e.busy},on:{click:function(t){return e.replaceBranch()}}})};o._withStripped=!0;var r=coreApis.settings,i=coreApis.toast,s=coreApis.utils.log,a=coreApis.ui;var l=function(e,t,n,o,r,i,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}(Vue.extend({components:{DefaultWidget:a.DefaultWidget},data:()=>({busy:!1}),methods:{async replaceBranch(){const e=window.prompt("输入希望替换成的分支名称");if(e){this.busy=!0;try{const{options:t}=(0,r.getComponentSettings)("autoUpdate");Object.values(t.urls).forEach((t=>{Object.values(t).forEach((t=>{const n=/^(https:\/\/github\.com\/.+\/Bilibili-Evolved\/raw\/)(.+?)(\/)/;if(n.test(t.url))return void(t.url=t.url.replace(n,`$1${e}$3`));const o=/^(https:\/\/raw\.githubusercontent\.com\/.+\/Bilibili-Evolved\/)(.+?)(\/)/;if(o.test(t.url))return void(t.url=t.url.replace(o,`$1${e}$3`));const r=/^(https:\/\/cdn\.jsdelivr\.net\/gh\/.+\/Bilibili-Evolved@)(.+?)(\/)/;r.test(t.url)?t.url=t.url.replace(r,`$1${e}$3`):console.log("skip record",t)}))})),i.Toast.info("替换完成","替换更新链接",3e3)}catch(e){(0,s.logError)(e)}finally{this.busy=!1}}}}}),o,[],!1,null,null,null);l.options.__file="registry/lib/components/utils/change-update-urls/Widget.vue";var c=l.exports}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.d(o,{component:function(){return e}});const e={name:"changeUpdateUrls",displayName:"更新链接替换",description:"批量更换已安装功能的更新链接的分支, 对本地安装的功能无效.",entry:none,tags:[componentsTags.utils],widget:{component:()=>Promise.resolve().then(n.bind(n,251)).then((e=>e.default))},commitHash:"3a57b001d007f25eb1afa92ad7739984164abf56"}}(),o=o.component}()}));