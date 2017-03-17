/*! vue-ydui v0.3.3 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var r=n(80),i=o(r);e.Popup=i.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},2:function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=f[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(u(o.parts[i],e));f[o.id]={id:o.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},o=0;o<t.length;o++){var r=t[o],i=r[0],s=r[1],a=r[2],u=r[3],p={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(p):e.push(n[i]={id:i,parts:[p]})}return e}function i(t,e){var n=h(),o=g[g.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t,e){var n,o,r;if(e.singleton){var i=v++;n=m||(m=a(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=a(e),o=l.bind(null,n),r=function(){s(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function p(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function l(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return o(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=f[a.id];u.refs--,i.push(u)}if(t){var p=r(t);o(p,e)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete f[u.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),o=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||o.test(t)},r=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},i=function(t,e){var n=t==window?document.body.offsetHeight:t.offsetHeight,o=t===window?0:t.getBoundingClientRect().top,r=e.getBoundingClientRect().top-o,i=r+e.offsetHeight;return r>=0&&r<n||i>0&&i<=n},s=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},a=function(t,e){s(t,e)||(t.className=""==t.className?e:t.className+" "+e)},u=function(t,e){if(s(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}};e.pageScroll=n,e.isColor=o,e.getScrollview=r,e.checkInview=i,e.addClass=a,e.removeClass=u},28:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".m-popup{position:fixed;background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;pointer-events:none}.m-popup.popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.m-popup.popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.m-popup.popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.m-popup.popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.m-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .1s;transition:all .1s;border-radius:2px;pointer-events:none}.m-popup-center.popup-show{pointer-events:auto;opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.m-popup-mask{background-color:rgba(0,0,0,.4);position:fixed;z-index:1500;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},49:function(t,e,n){var o=n(28);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},80:function(t,e,n){var o,r;n(49),o=n(165);var i=n(130);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"m-popup-mask",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),n("div",{class:t.classes(),style:t.styles()},[t._t("default")],2)])},staticRenderFns:[]}},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);e.default={name:"yd-popup",data:function(){return{show:!1}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"50%"},width:{type:String,default:"50%"},value:{type:Boolean,default:!1}},watch:{value:function(t){t&&this.isIOS&&(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.show=t}},methods:{styles:function(){return"left"==this.position||"right"==this.position?{width:this.width}:"bottom"==this.position?{width:"100%",height:this.height}:{width:this.width}},classes:function(){return("center"==this.position?"m-popup-center ":"m-popup ")+(this.show?"popup-show ":"")+"popup-"+this.position},close:function(){this.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.show=!1,this.$emit("input",!1)}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el),this.isIOS=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}}})});