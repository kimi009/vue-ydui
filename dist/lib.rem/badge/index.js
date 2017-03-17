/*! vue-ydui v0.3.3 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var o=r(55),i=n(o);t.Badge=i.default},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},2:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=l[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(u(n.parts[i],t))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(u(n.parts[i],t));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],a=o[1],s=o[2],u=o[3],d={css:a,media:s,sourceMap:u};r[i]?r[i].parts.push(d):t.push(r[i]={id:i,parts:[d]})}return t}function i(e,t){var r=g(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e,t){var r,n,o;if(t.singleton){var i=v++;r=h||(h=s(t)),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=s(t),n=f.bind(null,r),o=function(){a(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=c(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var s=r[a],u=l[s.id];u.refs--,i.push(u)}if(e){var d=o(e);n(d,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete l[u.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),n=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||n.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},i=function(e,t){var r=e==window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-n,i=o+t.offsetHeight;return o>=0&&o<r||i>0&&i<=r},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(a(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}};t.pageScroll=r,t.isColor=n,t.getScrollview=o,t.checkInview=i,t.addClass=s,t.removeClass=u},23:function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.badge{color:#fff;font-size:12px;position:relative;display:inline-block;border-radius:1000px;line-height:1;padding:3px 6px;white-space:nowrap;background-color:#d0d0d0}.badge-radius{border-radius:2px}.badge-primary{background-color:#04be02;color:#fff}.badge-danger{background-color:#ef4f4f;color:#fff}.badge-warning{background-color:#ffb400;color:#fff}.badge-hollow{background-color:#fbfbfb;color:#b2b2b2}.badge-hollow:after{content:"";width:200%;height:200%;border:1px solid #b2b2b2;position:absolute;top:0;left:0;border-radius:1rem;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5)}.badge-radius:after{border-radius:2px}',""])},44:function(e,t,r){var n=r(23);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},55:function(e,t,r){var n,o;r(44),n=r(140);var i=r(119);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,e.exports=n},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"badge",class:e.typesClass,style:{backgroundColor:e.bgcolor,color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},140:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={name:"yd-badge",props:{type:{validator:function(e){return["primary","danger","warning","hollow"].indexOf(e)>-1}},shape:{validator:function(e){return["circle","square"].indexOf(e)>-1}},color:{validator:function(e){return!e||(0,n.isColor)(e)}},bgcolor:{validator:function(e){return!e||(0,n.isColor)(e)}}},computed:{typesClass:function(){return this.bgcolor?"square"==this.shape?" badge-radius":"":(this.type?"badge-"+this.type:"")+("square"==this.shape?" badge-radius":"")}}}}})});