!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=85)}({0:function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var d=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:l,updater:h(f,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var v=null,p=0;function h(e,t){var n,o,r;if(t.singleton){var i=p++;n=v||(v=s(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=s(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=u(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=i}}}},1:function(e,t,n){var o=n(0),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});e.exports=c},2:function(e,t,n){},3:function(e,t,n){"use strict";var o=document.querySelector(".menu-toggle"),r=document.querySelector(".menu-auth"),i=document.querySelector(".gift-td"),c=document.querySelector(".gift-alert-td"),a=document.querySelector(".modal"),u=document.querySelector(".ivent-modal");i.addEventListener("click",(function(){a.classList.toggle("alert-modal-open")})),c.addEventListener("click",(function(){u.classList.toggle("ivent-modal-open")})),o.addEventListener("click",(function(){o.classList.toggle("active"),r.classList.toggle("menu-auth-open"),r.classList.contains("menu-auth-open")?document.body.style.overflow="hidden":document.body.style.overflow="auto"})),document.querySelector(".howlink").addEventListener("click",(function(){r.classList.contains("menu-auth")||r.classList.contains("menu-notauth")?r.classList.add("menu-how"):r.classList.add("menu-auth")})),document.querySelector(".how-back").addEventListener("click",(function(){r.classList.contains("menu-how")&&r.classList.remove("menu-how")}));var s=document.querySelectorAll(".menu-list .menu-list-item");s.forEach((function(e){e.addEventListener("click",(function(){s.forEach((function(e){return e.classList.remove("menu-list-item-active")})),e.classList.add("menu-list-item-active")}))}));var l=document.querySelectorAll(".menu-list-notauth .menu-list-item_notauth");l.forEach((function(e){e.addEventListener("click",(function(){l.forEach((function(e){return e.classList.remove("menu-list-item-active")})),e.classList.add("menu-list-item-active")}))})),document.querySelector(".exit").addEventListener("click",(function(){r.classList.contains("menu-auth")?r.classList.add("menu-notauth"):r.classList.add("menu-auth")}))},85:function(e,t,n){"use strict";n(86),n(1),n(3)},86:function(e,t,n){var o=n(0),r=n(87);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});e.exports=c},87:function(e,t,n){}});