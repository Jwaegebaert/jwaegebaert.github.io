"use strict";(self.webpackChunkjwaegebaert=self.webpackChunkjwaegebaert||[]).push([[849],{6849:(e,t,r)=>{r.d(t,{K:()=>It});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};var a=r(7294),o=r.t(a,2);var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};function s(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,a++)n[a]=o[i];return n}var l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};function u(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,a++)n[a]=o[i];return n}var c,d=0,f=1,p=2,g="undefined"!=typeof navigator&&/rv:11.0/.test(navigator.userAgent),v={};try{v=window}catch(S){}var h=function(){function e(e){this._rules=[],this._preservedRules=[],this._rulesToInsert=[],this._counter=0,this._keyToClassName={},this._onResetCallbacks=[],this._classNameToArgs={},this._config=l({injectionMode:f,defaultPrefix:"css",namespace:void 0,cspSettings:void 0},e),this._keyToClassName=this._config.classNameCache||{}}return e.getInstance=function(){var t;if(!(c=v.__stylesheet__)||c._lastStyleElement&&c._lastStyleElement.ownerDocument!==document){var r=(null===(t=v)||void 0===t?void 0:t.FabricConfig)||{};c=v.__stylesheet__=new e(r.mergeStyles)}return c},e.prototype.setConfig=function(e){this._config=l(l({},this._config),e)},e.prototype.onReset=function(e){this._onResetCallbacks.push(e)},e.prototype.getClassName=function(e){var t=this._config.namespace;return(t?t+"-":"")+(e||this._config.defaultPrefix)+"-"+this._counter++},e.prototype.cacheClassName=function(e,t,r,n){this._keyToClassName[t]=e,this._classNameToArgs[e]={args:r,rules:n}},e.prototype.classNameFromKey=function(e){return this._keyToClassName[e]},e.prototype.getClassNameCache=function(){return this._keyToClassName},e.prototype.argsFromClassName=function(e){var t=this._classNameToArgs[e];return t&&t.args},e.prototype.insertedRulesFromClassName=function(e){var t=this._classNameToArgs[e];return t&&t.rules},e.prototype.insertRule=function(e,t){var r=this._config.injectionMode!==d?this._getStyleElement():void 0;if(t&&this._preservedRules.push(e),r)switch(this._config.injectionMode){case f:var n=r.sheet;try{n.insertRule(e,n.cssRules.length)}catch(a){}break;case p:r.appendChild(document.createTextNode(e))}else this._rules.push(e);this._config.onInsertRule&&this._config.onInsertRule(e)},e.prototype.getRules=function(e){return(e?this._preservedRules.join(""):"")+this._rules.join("")+this._rulesToInsert.join("")},e.prototype.reset=function(){this._rules=[],this._rulesToInsert=[],this._counter=0,this._classNameToArgs={},this._keyToClassName={},this._onResetCallbacks.forEach((function(e){return e()}))},e.prototype.resetKeys=function(){this._keyToClassName={}},e.prototype._getStyleElement=function(){var e=this;return this._styleElement||"undefined"==typeof document||(this._styleElement=this._createStyleElement(),g||window.requestAnimationFrame((function(){e._styleElement=void 0}))),this._styleElement},e.prototype._createStyleElement=function(){var e=document.head,t=document.createElement("style");t.setAttribute("data-merge-styles","true");var r=this._config.cspSettings;if(r&&r.nonce&&t.setAttribute("nonce",r.nonce),this._lastStyleElement)e.insertBefore(t,this._lastStyleElement.nextElementSibling);else{var n=this._findPlaceholderStyleTag();n?e.insertBefore(t,n.nextElementSibling):e.insertBefore(t,e.childNodes[0])}return this._lastStyleElement=t,t},e.prototype._findPlaceholderStyleTag=function(){var e=document.head;return e?e.querySelector("style[data-merge-styles]"):null},e}();var m,y={};var b={"user-select":1};function x(e,t){var r=function(){var e,t;if(!m){var r="undefined"!=typeof document?document:void 0,n="undefined"!=typeof navigator?navigator:void 0,a=null===(t=null===(e=n)||void 0===e?void 0:e.userAgent)||void 0===t?void 0:t.toLowerCase();m=r?{isWebkit:!(!r||!("WebkitAppearance"in r.documentElement.style)),isMoz:!!(a&&a.indexOf("firefox")>-1),isOpera:!!(a&&a.indexOf("opera")>-1),isMs:!(!n||!/rv:11.0/i.test(n.userAgent)&&!/Edge\/\d./i.test(navigator.userAgent))}:{isWebkit:!0,isMoz:!0,isOpera:!0,isMs:!0}}return m}(),n=e[t];if(b[n]){var a=e[t+1];b[n]&&(r.isWebkit&&e.push("-webkit-"+n,a),r.isMoz&&e.push("-moz-"+n,a),r.isMs&&e.push("-ms-"+n,a),r.isOpera&&e.push("-o-"+n,a))}}var S,k=["column-count","font-weight","flex","flex-grow","flex-shrink","fill-opacity","opacity","order","z-index","zoom"];function w(e,t){var r=e[t],n=e[t+1];if("number"==typeof n){var a=k.indexOf(r)>-1,o=r.indexOf("--")>-1,i=a||o?"":"px";e[t+1]=""+n+i}}var C="left",_="right",E=((S={}).left=_,S.right=C,S),O={"w-resize":"e-resize","sw-resize":"se-resize","nw-resize":"ne-resize"};function T(e,t,r){if(e.rtl){var n=t[r];if(!n)return;var a=t[r+1];if("string"==typeof a&&a.indexOf("@noflip")>=0)t[r+1]=a.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g,"");else if(n.indexOf(C)>=0)t[r]=n.replace(C,_);else if(n.indexOf(_)>=0)t[r]=n.replace(_,C);else if(String(a).indexOf(C)>=0)t[r+1]=a.replace(C,_);else if(String(a).indexOf(_)>=0)t[r+1]=a.replace(_,C);else if(E[n])t[r]=E[n];else if(O[a])t[r+1]=O[a];else switch(n){case"margin":case"padding":t[r+1]=function(e){if("string"==typeof e){var t=e.split(" ");if(4===t.length)return t[0]+" "+t[3]+" "+t[2]+" "+t[1]}return e}(a);break;case"box-shadow":t[r+1]=function(e,t){var r=e.split(" "),n=parseInt(r[t],10);return r[0]=r[0].replace(String(n),String(-1*n)),r.join(" ")}(a,0)}}}function B(e){var t=e&&e["&"];return t?t.displayName:void 0}var P=/\:global\((.+?)\)/g;function I(e,t){return e.indexOf(":global(")>=0?e.replace(P,"$1"):0===e.indexOf(":")?t+e:e.indexOf("&")<0?t+" "+e:e}function A(e,t,r,n){void 0===t&&(t={__order:[]}),0===r.indexOf("@")?L([n],t,r=r+"{"+e):r.indexOf(",")>-1?function(e){if(!P.test(e))return e;for(var t=[],r=/\:global\((.+?)\)/g,n=null;n=r.exec(e);)n[1].indexOf(",")>-1&&t.push([n.index,n.index+n[0].length,n[1].split(",").map((function(e){return":global("+e.trim()+")"})).join(", ")]);return t.reverse().reduce((function(e,t){var r=t[0],n=t[1],a=t[2];return e.slice(0,r)+a+e.slice(n)}),e)}(r).split(",").map((function(e){return e.trim()})).forEach((function(r){return L([n],t,I(r,e))})):L([n],t,I(r,e))}function L(e,t,r){void 0===t&&(t={__order:[]}),void 0===r&&(r="&");var n=h.getInstance(),a=t[r];a||(a={},t[r]=a,t.__order.push(r));for(var o=0,i=e;o<i.length;o++){var s=i[o];if("string"==typeof s){var l=n.argsFromClassName(s);l&&L(l,t,r)}else if(Array.isArray(s))L(s,t,r);else for(var u in s)if(s.hasOwnProperty(u)){var c=s[u];if("selectors"===u){var d=s.selectors;for(var f in d)d.hasOwnProperty(f)&&A(r,t,f,d[f])}else"object"==typeof c?null!==c&&A(r,t,u,c):void 0!==c&&("margin"===u||"padding"===u?D(a,u,c):a[u]=c)}}return t}function D(e,t,r){var n="string"==typeof r?r.split(" "):[r];e[t+"Top"]=n[0],e[t+"Right"]=n[1]||n[0],e[t+"Bottom"]=n[2]||n[0],e[t+"Left"]=n[3]||n[1]||n[0]}function N(e,t){for(var r=[e.rtl?"rtl":"ltr"],n=!1,a=0,o=t.__order;a<o.length;a++){var i=o[a];r.push(i);var s=t[i];for(var l in s)s.hasOwnProperty(l)&&void 0!==s[l]&&(n=!0,r.push(l,s[l]))}return n?r.join(""):void 0}function j(e,t){return t<=0?"":1===t?e:e+j(e,t-1)}function F(e,t){if(!t)return"";var r,n,a,o=[];for(var i in t)t.hasOwnProperty(i)&&"displayName"!==i&&void 0!==t[i]&&o.push(i,t[i]);for(var s=0;s<o.length;s+=2)a=void 0,"-"!==(a=(r=o)[n=s]).charAt(0)&&(r[n]=y[a]=y[a]||a.replace(/([A-Z])/g,"-$1").toLowerCase()),w(o,s),T(e,o,s),x(o,s);for(s=1;s<o.length;s+=4)o.splice(s,1,":",o[s],";");return o.join("")}function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=L(t),a=N(e,n);if(a){var o=h.getInstance(),i={className:o.classNameFromKey(a),key:a,args:t};if(!i.className){i.className=o.getClassName(B(n));for(var s=[],l=0,u=n.__order;l<u.length;l++){var c=u[l];s.push(c,F(e,n[c]))}i.rulesToInsert=s}return i}}function W(e,t){void 0===t&&(t=1);var r=h.getInstance(),n=e.className,a=e.key,o=e.args,i=e.rulesToInsert;if(i){for(var s=0;s<i.length;s+=2){var l=i[s+1];if(l){var u=i[s],c=(u=u.replace(/&/g,j("."+e.className,t)))+"{"+l+"}"+(0===u.indexOf("@")?"}":"");r.insertRule(c)}}r.cacheClassName(n,a,o,i)}}function z(e,t){var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=[],n=[],a=h.getInstance();function o(e){for(var t=0,i=e;t<i.length;t++){var s=i[t];if(s)if("string"==typeof s)if(s.indexOf(" ")>=0)o(s.split(" "));else{var l=a.argsFromClassName(s);l?o(l):-1===r.indexOf(s)&&r.push(s)}else Array.isArray(s)?o(s):"object"==typeof s&&n.push(s)}}return o(e),{classes:r,objects:n}}(e instanceof Array?e:[e]),n=r.classes,a=r.objects;return a.length&&n.push(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=H.apply(void 0,u([e],t));return n?(W(n,e.specificityMultiplier),n.className):""}(t||{},a)),n.join(" ")}var M=!1,G=0,U={empty:!0},R={},V="undefined"==typeof WeakMap?null:WeakMap;function K(){G++}function q(e,t,r){if(void 0===t&&(t=100),void 0===r&&(r=!1),!V)return e;if(!M){var n=h.getInstance();n&&n.onReset&&h.getInstance().onReset(K),M=!0}var a,o=0,i=G;return function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var l=a;(void 0===a||i!==G||t>0&&o>t)&&(a=J(),o=0,i=G),l=a;for(var u=0;u<n.length;u++){var c=Q(n[u]);l.map.has(c)||l.map.set(c,J()),l=l.map.get(c)}return l.hasOwnProperty("value")||(l.value=e.apply(void 0,n),o++),!r||null!==l.value&&void 0!==l.value||(l.value=e.apply(void 0,n)),l.value}}function Q(e){return e?"object"==typeof e||"function"==typeof e?e:(R[e]||(R[e]={val:e}),R[e]):U}function J(){return{map:V?new V:null}}var Y=!1;function $(e){if(!Y&&"undefined"!=typeof document){var t=e;return t&&t.ownerDocument?t.ownerDocument:document}}var Z,X=void 0;try{X=window}catch(At){}function ee(e){if(!Y&&void 0!==X){var t=e;return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:X}}function te(e){var t=null;try{var r=ee();t=r?r.sessionStorage.getItem(e):null}catch(At){}return t}function re(e){Z!==e&&(Z=e)}function ne(){return void 0===Z&&(Z="undefined"!=typeof document&&!!document.documentElement&&"rtl"===document.documentElement.getAttribute("dir")),Z}Z=ne();var ae,oe="isRTL";function ie(e){if(void 0===e&&(e={}),void 0!==e.rtl)return e.rtl;if(void 0===ae){var t=te(oe);null!==t&&function(e,t){void 0===t&&(t=!1);var r=$();r&&r.documentElement.setAttribute("dir",e?"rtl":"ltr");t&&function(e,t){var r;try{null===(r=ee())||void 0===r||r.sessionStorage.setItem(e,t)}catch(At){}}(oe,e?"1":"0");re(ae=e)}(ae="1"===t);var r=$();void 0===ae&&r&&re(ae="rtl"===(r.body&&r.body.getAttribute("dir")||r.documentElement.getAttribute("dir")))}return!!ae}var se=i;function le(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var l=e;return l.isSlot?0===(r=a.Children.toArray(r)).length?l(t):l(i(i({},t),{children:r})):a.createElement.apply(o,s([e,t],r))}function ue(e,t){void 0===t&&(t={});var r=t.defaultProp,n=void 0===r?"children":r;return function(t,r,o,s,l){if(a.isValidElement(r))return r;var u=function(e,t){var r,n;"string"==typeof t||"number"==typeof t||"boolean"==typeof t?((r={})[e]=t,n=r):n=t;return n}(n,r),c=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];for(var a={},o=[],i=0,s=r;i<s.length;i++){var l=s[i];o.push(l&&l.className),se(a,l)}return a.className=z([e,o],{rtl:ie(t)}),a}(s,l,t,u);if(o){if(o.component){var d=o.component;return a.createElement(d,i({},c))}if(o.render)return o.render(c,e)}return a.createElement(e,i({},c))}}var ce=q((function(e){return ue(e)}));function de(e,t){var r={},n=e,a=function(e){if(t.hasOwnProperty(e)){var a=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(a.length>0)throw new Error("Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.");return fe(t[e],r,n[e],n.slots&&n.slots[e],n._defaultStyles&&n._defaultStyles[e],n.theme)};a.isSlot=!0,r[e]=a}};for(var o in t)a(o);return r}function fe(e,t,r,n,a,o){return void 0!==e.create?e.create(t,r,n,a):ce(e)(t,r,n,a,o)}var pe=q((function(e,t){var r=h.getInstance();return t?Object.keys(e).reduce((function(t,n){return t[n]=r.getClassName(e[n]),t}),{}):e}));function ge(e,t,r){return pe(e,void 0!==r?r:t.disableGlobalClassNames)}function ve(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e&&1===e.length&&e[0]&&!e[0].subComponentStyles)return e[0];for(var r={},n={},a=0,o=e;a<o.length;a++){var i=o[a];if(i)for(var s in i)if(i.hasOwnProperty(s)){if("subComponentStyles"===s&&void 0!==i.subComponentStyles){var l=i.subComponentStyles;for(var c in l)l.hasOwnProperty(c)&&(n.hasOwnProperty(c)?n[c].push(l[c]):n[c]=[l[c]]);continue}var d=r[s],f=i[s];r[s]=void 0===d?f:u(Array.isArray(d)?d:[d],Array.isArray(f)?f:[f])}}if(Object.keys(n).length>0){r.subComponentStyles={};var p=r.subComponentStyles,g=function(e){if(n.hasOwnProperty(e)){var t=n[e];p[e]=function(e){return ve.apply(void 0,t.map((function(t){return"function"==typeof t?t(e):t})))}}};for(var c in n)g(c)}return r}var he={},me=void 0;try{me=window}catch(At){}function ye(e,t){if(void 0!==me){var r=me.__packages__=me.__packages__||{};if(!r[e]||!he[e])he[e]=t,(r[e]=r[e]||[]).push(t)}}ye("@uifabric/set-version","6.0.0"),ye("@uifabric/styling","7.24.0");var be=function(){return be=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},be.apply(this,arguments)};var xe=function(){return xe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},xe.apply(this,arguments)};var Se=0,ke=function(){function e(){}return e.getValue=function(e,t){var r=we();return void 0===r[e]&&(r[e]="function"==typeof t?t():t),r[e]},e.setValue=function(e,t){var r=we(),n=r.__callbacks__,a=r[e];if(t!==a){r[e]=t;var o={oldValue:a,value:t,key:e};for(var i in n)n.hasOwnProperty(i)&&n[i](o)}return t},e.addChangeListener=function(e){var t=e.__id__,r=Ce();t||(t=e.__id__=String(Se++)),r[t]=e},e.removeChangeListener=function(e){delete Ce()[e.__id__]},e}();function we(){var e,t=ee()||{};return t.__globalSettings__||(t.__globalSettings__=((e={}).__callbacks__={},e)),t.__globalSettings__}function Ce(){return we().__callbacks__}var _e={settings:{},scopedSettings:{},inCustomizerContext:!1},Ee=ke.getValue("customizations",{settings:{},scopedSettings:{},inCustomizerContext:!1}),Oe=[],Te=function(){function e(){}return e.reset=function(){Ee.settings={},Ee.scopedSettings={}},e.applySettings=function(t){Ee.settings=xe(xe({},Ee.settings),t),e._raiseChange()},e.applyScopedSettings=function(t,r){Ee.scopedSettings[t]=xe(xe({},Ee.scopedSettings[t]),r),e._raiseChange()},e.getSettings=function(e,t,r){void 0===r&&(r=_e);for(var n={},a=t&&r.scopedSettings[t]||{},o=t&&Ee.scopedSettings[t]||{},i=0,s=e;i<s.length;i++){var l=s[i];n[l]=a[l]||r.settings[l]||o[l]||Ee.settings[l]}return n},e.applyBatchedUpdates=function(t,r){e._suppressUpdates=!0;try{t()}catch(S){}e._suppressUpdates=!1,r||e._raiseChange()},e.observe=function(e){Oe.push(e)},e.unobserve=function(e){Oe=Oe.filter((function(t){return t!==e}))},e._raiseChange=function(){e._suppressUpdates||Oe.forEach((function(e){return e()}))},e}(),Be=function(){return Be=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Be.apply(this,arguments)},Pe="undefined"==typeof window?r.g:window,Ie=Pe&&Pe.CSPSettings&&Pe.CSPSettings.nonce,Ae=function(){var e=Pe.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=Be(Be({},e),{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=Be(Be({},e),{registeredThemableStyles:[]}));return Pe.__themeState__=e,e}();function Le(e,t){Ae.loadStyles?Ae.loadStyles(je(e).styleString,e):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],r=document.createElement("style"),n=je(e),a=n.styleString,o=n.themable;r.setAttribute("data-load-themed-styles","true"),Ie&&r.setAttribute("nonce",Ie);r.appendChild(document.createTextNode(a)),Ae.perf.count++,t.appendChild(r);var i=document.createEvent("HTMLEvents");i.initEvent("styleinsert",!0,!1),i.args={newStyle:r},document.dispatchEvent(i);var s={styleElement:r,themableStyle:e};o?Ae.registeredThemableStyles.push(s):Ae.registeredStyles.push(s)}(e)}function De(e){Ae.theme=e,function(){if(Ae.theme){for(var e=[],t=0,r=Ae.registeredThemableStyles;t<r.length;t++){var n=r[t];e.push(n.themableStyle)}e.length>0&&(!function(e){void 0===e&&(e=3);3!==e&&2!==e||(Ne(Ae.registeredStyles),Ae.registeredStyles=[]);3!==e&&1!==e||(Ne(Ae.registeredThemableStyles),Ae.registeredThemableStyles=[])}(1),Le([].concat.apply([],e)))}}()}function Ne(e){e.forEach((function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)}))}function je(e){var t=Ae.theme,r=!1;return{styleString:(e||[]).map((function(e){var n=e.theme;if(n){r=!0;var a=t?t[n]:void 0,o=e.defaultValue||"inherit";return t&&!a&&console&&!(n in t)&&"undefined"!=typeof DEBUG&&DEBUG&&console.warn('Theming value not provided for "'.concat(n,'". Falling back to "').concat(o,'".')),a||o}return e.rawString})).join(""),themable:r}}var Fe,He={themeDarker:"#004578",themeDark:"#005a9e",themeDarkAlt:"#106ebe",themePrimary:"#0078d4",themeSecondary:"#2b88d8",themeTertiary:"#71afe5",themeLight:"#c7e0f4",themeLighter:"#deecf9",themeLighterAlt:"#eff6fc",black:"#000000",blackTranslucent40:"rgba(0,0,0,.4)",neutralDark:"#201f1e",neutralPrimary:"#323130",neutralPrimaryAlt:"#3b3a39",neutralSecondary:"#605e5c",neutralSecondaryAlt:"#8a8886",neutralTertiary:"#a19f9d",neutralTertiaryAlt:"#c8c6c4",neutralQuaternary:"#d2d0ce",neutralQuaternaryAlt:"#e1dfdd",neutralLight:"#edebe9",neutralLighter:"#f3f2f1",neutralLighterAlt:"#faf9f8",accent:"#0078d4",white:"#ffffff",whiteTranslucent40:"rgba(255,255,255,.4)",yellowDark:"#d29200",yellow:"#ffb900",yellowLight:"#fff100",orange:"#d83b01",orangeLight:"#ea4300",orangeLighter:"#ff8c00",redDark:"#a4262c",red:"#e81123",magentaDark:"#5c005c",magenta:"#b4009e",magentaLight:"#e3008c",purpleDark:"#32145a",purple:"#5c2d91",purpleLight:"#b4a0ff",blueDark:"#002050",blueMid:"#00188f",blue:"#0078d4",blueLight:"#00bcf2",tealDark:"#004b50",teal:"#008272",tealLight:"#00b294",greenDark:"#004b1c",green:"#107c10",greenLight:"#bad80a"};!function(e){e.depth0="0 0 0 0 transparent",e.depth4="0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)",e.depth8="0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)",e.depth16="0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)",e.depth64="0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)"}(Fe||(Fe={}));var We,ze,Me,Ge,Ue,Re={elevation4:Fe.depth4,elevation8:Fe.depth8,elevation16:Fe.depth16,elevation64:Fe.depth64,roundedCorner2:"2px",roundedCorner4:"4px",roundedCorner6:"6px"};function Ve(e){h.getInstance().insertRule("@font-face{"+F({rtl:ne()},e)+"}",!0)}!function(e){e.Arabic="Segoe UI Web (Arabic)",e.Cyrillic="Segoe UI Web (Cyrillic)",e.EastEuropean="Segoe UI Web (East European)",e.Greek="Segoe UI Web (Greek)",e.Hebrew="Segoe UI Web (Hebrew)",e.Thai="Leelawadee UI Web",e.Vietnamese="Segoe UI Web (Vietnamese)",e.WestEuropean="Segoe UI Web (West European)",e.Selawik="Selawik Web",e.Armenian="Segoe UI Web (Armenian)",e.Georgian="Segoe UI Web (Georgian)"}(We||(We={})),function(e){e.Arabic="'"+We.Arabic+"'",e.ChineseSimplified="'Microsoft Yahei UI', Verdana, Simsun",e.ChineseTraditional="'Microsoft Jhenghei UI', Pmingliu",e.Cyrillic="'"+We.Cyrillic+"'",e.EastEuropean="'"+We.EastEuropean+"'",e.Greek="'"+We.Greek+"'",e.Hebrew="'"+We.Hebrew+"'",e.Hindi="'Nirmala UI'",e.Japanese="'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka",e.Korean="'Malgun Gothic', Gulim",e.Selawik="'"+We.Selawik+"'",e.Thai="'Leelawadee UI Web', 'Kmer UI'",e.Vietnamese="'"+We.Vietnamese+"'",e.WestEuropean="'"+We.WestEuropean+"'",e.Armenian="'"+We.Armenian+"'",e.Georgian="'"+We.Georgian+"'"}(ze||(ze={})),function(e){e.size10="10px",e.size12="12px",e.size14="14px",e.size16="16px",e.size18="18px",e.size20="20px",e.size24="24px",e.size28="28px",e.size32="32px",e.size42="42px",e.size68="68px",e.mini="10px",e.xSmall="10px",e.small="12px",e.smallPlus="12px",e.medium="14px",e.mediumPlus="16px",e.icon="16px",e.large="18px",e.xLarge="20px",e.xLargePlus="24px",e.xxLarge="28px",e.xxLargePlus="32px",e.superLarge="42px",e.mega="68px"}(Me||(Me={})),function(e){e.light=100,e.semilight=300,e.regular=400,e.semibold=600,e.bold=700}(Ge||(Ge={})),function(e){e.xSmall="10px",e.small="12px",e.medium="16px",e.large="20px"}(Ue||(Ue={}));var Ke,qe="'Segoe UI', '"+We.WestEuropean+"'",Qe={ar:ze.Arabic,bg:ze.Cyrillic,cs:ze.EastEuropean,el:ze.Greek,et:ze.EastEuropean,he:ze.Hebrew,hi:ze.Hindi,hr:ze.EastEuropean,hu:ze.EastEuropean,ja:ze.Japanese,kk:ze.EastEuropean,ko:ze.Korean,lt:ze.EastEuropean,lv:ze.EastEuropean,pl:ze.EastEuropean,ru:ze.Cyrillic,sk:ze.EastEuropean,"sr-latn":ze.EastEuropean,th:ze.Thai,tr:ze.EastEuropean,uk:ze.Cyrillic,vi:ze.Vietnamese,"zh-hans":ze.ChineseSimplified,"zh-hant":ze.ChineseTraditional,hy:ze.Armenian,ka:ze.Georgian};function Je(e,t,r){return{fontFamily:r,MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",fontSize:e,fontWeight:t}}var Ye="language";var $e,Ze,Xe=($e=function(e){if(void 0===e&&(e="localStorage"),void 0===Ke){var t=$(),r="localStorage"===e?function(e){var t=null;try{var r=ee();t=r?r.localStorage.getItem(e):null}catch(At){}return t}(Ye):"sessionStorage"===e?te(Ye):void 0;r&&(Ke=r),void 0===Ke&&t&&(Ke=t.documentElement.getAttribute("lang")),void 0===Ke&&(Ke="en")}return Ke}("sessionStorage"),Ze=function(e){for(var t in Qe)if(Qe.hasOwnProperty(t)&&e&&0===t.indexOf(e))return Qe[t];return qe}($e)+", 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",{tiny:Je(Me.mini,Ge.regular,Ze),xSmall:Je(Me.xSmall,Ge.regular,Ze),small:Je(Me.small,Ge.regular,Ze),smallPlus:Je(Me.smallPlus,Ge.regular,Ze),medium:Je(Me.medium,Ge.regular,Ze),mediumPlus:Je(Me.mediumPlus,Ge.regular,Ze),large:Je(Me.large,Ge.regular,Ze),xLarge:Je(Me.xLarge,Ge.semibold,Ze),xLargePlus:Je(Me.xLargePlus,Ge.semibold,Ze),xxLarge:Je(Me.xxLarge,Ge.semibold,Ze),xxLargePlus:Je(Me.xxLargePlus,Ge.semibold,Ze),superLarge:Je(Me.superLarge,Ge.semibold,Ze),mega:Je(Me.mega,Ge.semibold,Ze)});function et(e,t,r,n){Ve({fontFamily:e="'"+e+"'",src:(void 0!==n?"local('"+n+"'),":"")+"url('"+t+".woff2') format('woff2'),url('"+t+".woff') format('woff')",fontWeight:r,fontStyle:"normal",fontDisplay:"swap"})}function tt(e,t,r,n,a){void 0===n&&(n="segoeui");var o=e+"/"+r+"/"+n;et(t,o+"-light",Ge.light,a&&a+" Light"),et(t,o+"-semilight",Ge.semilight,a&&a+" SemiLight"),et(t,o+"-regular",Ge.regular,a),et(t,o+"-semibold",Ge.semibold,a&&a+" SemiBold"),et(t,o+"-bold",Ge.bold,a&&a+" Bold")}function rt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++){var o=a[n];nt(e||{},o)}return e}function nt(e,t,r){for(var n in void 0===r&&(r=[]),r.push(t),t)if(t.hasOwnProperty(n)&&"__proto__"!==n&&"constructor"!==n&&"prototype"!==n){var a=t[n];if("object"!=typeof a||null===a||Array.isArray(a))e[n]=a;else{var o=r.indexOf(a)>-1;e[n]=o?a:nt(e[n]||{},a,r)}}return r.pop(),e}!function(e){if(e){var t=e+"/fonts";tt(t,We.Thai,"leelawadeeui-thai","leelawadeeui"),tt(t,We.Arabic,"segoeui-arabic"),tt(t,We.Cyrillic,"segoeui-cyrillic"),tt(t,We.EastEuropean,"segoeui-easteuropean"),tt(t,We.Greek,"segoeui-greek"),tt(t,We.Hebrew,"segoeui-hebrew"),tt(t,We.Vietnamese,"segoeui-vietnamese"),tt(t,We.WestEuropean,"segoeui-westeuropean","segoeui","Segoe UI"),tt(t,ze.Selawik,"selawik","selawik"),tt(t,We.Armenian,"segoeui-armenian"),tt(t,We.Georgian,"segoeui-georgian"),et("Leelawadee UI Web",t+"/leelawadeeui-thai/leelawadeeui-semilight",Ge.light),et("Leelawadee UI Web",t+"/leelawadeeui-thai/leelawadeeui-bold",Ge.semibold)}}(function(){var e,t,r;return null!=(r=null===(t=null===(e=ee())||void 0===e?void 0:e.FabricConfig)||void 0===t?void 0:t.fontBaseUrl)?r:"https://static2.sharepointonline.com/files/fabric/assets"}());var at=function(){return at=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},at.apply(this,arguments)};function ot(e,t,r,n,a){return void 0===a&&(a=!1),function(e,t){var r="";!0===t&&(r=" /* @deprecated */");return e.listTextColor=e.listText+r,e.menuItemBackgroundChecked+=r,e.warningHighlight+=r,e.warningText=e.messageText+r,e.successText+=r,e}(it(e,t,at({primaryButtonBorder:"transparent",errorText:n?"#F1707B":"#a4262c",messageText:n?"#F3F2F1":"#323130",messageLink:n?"#6CB8F6":"#005A9E",messageLinkHovered:n?"#82C7FF":"#004578",infoIcon:n?"#C8C6C4":"#605e5c",errorIcon:n?"#F1707B":"#A80000",blockingIcon:n?"#442726":"#FDE7E9",warningIcon:n?"#C8C6C4":"#797775",severeWarningIcon:n?"#FCE100":"#D83B01",successIcon:n?"#92C353":"#107C10",infoBackground:n?"#323130":"#f3f2f1",errorBackground:n?"#442726":"#FDE7E9",blockingBackground:n?"#442726":"#FDE7E9",warningBackground:n?"#433519":"#FFF4CE",severeWarningBackground:n?"#4F2A0F":"#FED9CC",successBackground:n?"#393D1B":"#DFF6DD",warningHighlight:n?"#fff100":"#ffb900",successText:n?"#92c353":"#107C10"},r),n),a)}function it(e,t,r,n,a){var o,i,s;void 0===a&&(a=!1);var l={},u=e||{},c=u.white,d=u.black,f=u.themePrimary,p=u.themeDark,g=u.themeDarker,v=u.themeDarkAlt,h=u.themeLighter,m=u.neutralLight,y=u.neutralLighter,b=u.neutralDark,x=u.neutralQuaternary,S=u.neutralQuaternaryAlt,k=u.neutralPrimary,w=u.neutralSecondary,C=u.neutralSecondaryAlt,_=u.neutralTertiary,E=u.neutralTertiaryAlt,O=u.neutralLighterAlt,T=u.accent;return c&&(l.bodyBackground=c,l.bodyFrameBackground=c,l.accentButtonText=c,l.buttonBackground=c,l.primaryButtonText=c,l.primaryButtonTextHovered=c,l.primaryButtonTextPressed=c,l.inputBackground=c,l.inputForegroundChecked=c,l.listBackground=c,l.menuBackground=c,l.cardStandoutBackground=c),d&&(l.bodyTextChecked=d,l.buttonTextCheckedHovered=d),f&&(l.link=f,l.primaryButtonBackground=f,l.inputBackgroundChecked=f,l.inputIcon=f,l.inputFocusBorderAlt=f,l.menuIcon=f,l.menuHeader=f,l.accentButtonBackground=f),p&&(l.primaryButtonBackgroundPressed=p,l.inputBackgroundCheckedHovered=p,l.inputIconHovered=p),g&&(l.linkHovered=g),v&&(l.primaryButtonBackgroundHovered=v),h&&(l.inputPlaceholderBackgroundChecked=h),m&&(l.bodyBackgroundChecked=m,l.bodyFrameDivider=m,l.bodyDivider=m,l.variantBorder=m,l.buttonBackgroundCheckedHovered=m,l.buttonBackgroundPressed=m,l.listItemBackgroundChecked=m,l.listHeaderBackgroundPressed=m,l.menuItemBackgroundPressed=m,l.menuItemBackgroundChecked=m),y&&(l.bodyBackgroundHovered=y,l.buttonBackgroundHovered=y,l.buttonBackgroundDisabled=y,l.buttonBorderDisabled=y,l.primaryButtonBackgroundDisabled=y,l.disabledBackground=y,l.listItemBackgroundHovered=y,l.listHeaderBackgroundHovered=y,l.menuItemBackgroundHovered=y),x&&(l.primaryButtonTextDisabled=x,l.disabledSubtext=x),S&&(l.listItemBackgroundCheckedHovered=S),_&&(l.disabledBodyText=_,l.variantBorderHovered=(null===(o=r)||void 0===o?void 0:o.variantBorderHovered)||_,l.buttonTextDisabled=_,l.inputIconDisabled=_,l.disabledText=_),k&&(l.bodyText=k,l.actionLink=k,l.buttonText=k,l.inputBorderHovered=k,l.inputText=k,l.listText=k,l.menuItemText=k),O&&(l.bodyStandoutBackground=O,l.defaultStateBackground=O),b&&(l.actionLinkHovered=b,l.buttonTextHovered=b,l.buttonTextChecked=b,l.buttonTextPressed=b,l.inputTextHovered=b,l.menuItemTextHovered=b),w&&(l.bodySubtext=w,l.focusBorder=w,l.inputBorder=w,l.smallInputBorder=w,l.inputPlaceholderText=w),C&&(l.buttonBorder=C),E&&(l.disabledBodySubtext=E,l.disabledBorder=E,l.buttonBackgroundChecked=E,l.menuDivider=E),T&&(l.accentButtonBackground=T),(null===(i=t)||void 0===i?void 0:i.elevation4)&&(l.cardShadow=t.elevation4),!n&&(null===(s=t)||void 0===s?void 0:s.elevation8)?l.cardShadowHovered=t.elevation8:l.variantBorderHovered&&(l.cardShadowHovered="0 0 1px "+l.variantBorderHovered),l=at(at({},l),r)}var st={s2:"4px",s1:"8px",m:"16px",l1:"20px",l2:"32px"};function lt(e,t){void 0===e&&(e={}),void 0===t&&(t=!1);var r=!!e.isInverted;return function(e,t){var r,n,a,o;void 0===t&&(t={});var i=rt({},e,t,{semanticColors:it(t.palette,t.effects,t.semanticColors,void 0===t.isInverted?e.isInverted:t.isInverted)});if((null===(r=t.palette)||void 0===r?void 0:r.themePrimary)&&!(null===(n=t.palette)||void 0===n?void 0:n.accent)&&(i.palette.accent=t.palette.themePrimary),t.defaultFontStyle)for(var s=0,l=Object.keys(i.fonts);s<l.length;s++){var u=l[s];i.fonts[u]=rt(i.fonts[u],t.defaultFontStyle,null===(o=null===(a=t)||void 0===a?void 0:a.fonts)||void 0===o?void 0:o[u])}return t.stylesheets&&(i.stylesheets=(e.stylesheets||[]).concat(t.stylesheets)),i}({palette:He,effects:Re,fonts:Xe,spacing:st,isInverted:r,disableGlobalClassNames:!1,semanticColors:ot(He,Re,void 0,r,t),rtl:void 0},e)}var ut=lt({}),ct=[],dt="theme";function ft(){var e,t,r,n,a,o=ee();(null===(r=null===(t=o)||void 0===t?void 0:t.FabricConfig)||void 0===r?void 0:r.legacyTheme)?function(e,t){var r;void 0===t&&(t=!1);ut=lt(e,t),De(be(be(be(be({},ut.palette),ut.semanticColors),ut.effects),function(e){for(var t={},r=0,n=Object.keys(e.fonts);r<n.length;r++)for(var a=n[r],o=e.fonts[a],i=0,s=Object.keys(o);i<s.length;i++){var l=s[i],u=a+l.charAt(0).toUpperCase()+l.slice(1),c=o[l];"fontSize"===l&&"number"==typeof c&&(c+="px"),t[u]=c}return t}(ut))),Te.applySettings(((r={}).theme=ut,r)),ct.forEach((function(e){try{e(ut)}catch(At){}}))}(o.FabricConfig.legacyTheme):Te.getSettings([dt]).theme||((null===(a=null===(n=o)||void 0===n?void 0:n.FabricConfig)||void 0===a?void 0:a.theme)&&(ut=lt(o.FabricConfig.theme)),Te.applySettings(((e={}).theme=ut,e)))}ft(),ft();var pt=a.createContext({customizations:{inCustomizerContext:!1,settings:{},scopedSettings:{}}});function gt(e,t){void 0===t&&(t={});var r=t.factoryOptions,n=(void 0===r?{}:r).defaultProp,o=function(r){var n,o,s,l,u=(n=t.displayName,o=a.useContext(pt),s=t.fields,l=["theme","styles","tokens"],Te.getSettings(s||l,n,o.customizations)),c=t.state;c&&(r=i(i({},r),c(r)));var d=r.theme||u.theme,f=vt(r,d,t.tokens,u.tokens,r.tokens),p=function(e,t,r){for(var n=[],a=3;a<arguments.length;a++)n[a-3]=arguments[a];return ve.apply(void 0,n.map((function(n){return"function"==typeof n?n(e,t,r):n})))}(r,d,f,t.styles,u.styles,r.styles),g=i(i({},r),{styles:p,tokens:f,_defaultStyles:p,theme:d});return e(g)};return o.displayName=t.displayName||e.name,n&&(o.create=ue(o,{defaultProp:n})),se(o,t.statics),o}function vt(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];for(var a={},o=0,i=r;o<i.length;o++){var l=i[o];l&&(l="function"==typeof l?l(e,t):l,Array.isArray(l)&&(l=vt.apply(void 0,s([e,t],l))),se(a,l))}return a}var ht=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r={},n=0,a=e;n<a.length;n++)for(var o=a[n],i=Array.isArray(o)?o:Object.keys(o),s=0,l=i;s<l.length;s++){var u=l[s];r[u]=1}return r},mt=ht(["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onInput","onSubmit","onLoad","onError","onKeyDown","onKeyDownCapture","onKeyPress","onKeyUp","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onClick","onClickCapture","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onMouseUpCapture","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp","onGotPointerCapture","onLostPointerCapture"]),yt=ht(["accessKey","children","className","contentEditable","dir","draggable","hidden","htmlFor","id","lang","ref","role","style","tabIndex","title","translate","spellCheck","name"]),bt=ht(yt,mt),xt=(ht(bt,["form"]),ht(bt,["height","loop","muted","preload","src","width"])),St=(ht(xt,["poster"]),ht(bt,["start"]),ht(bt,["value"]),ht(bt,["download","href","hrefLang","media","rel","target","type"]),ht(bt,["autoFocus","disabled","form","formAction","formEncType","formMethod","formNoValidate","formTarget","type","value"]));ht(St,["accept","alt","autoCapitalize","autoComplete","checked","dirname","form","height","inputMode","list","max","maxLength","min","multiple","pattern","placeholder","readOnly","required","src","step","size","type","value","width"]),ht(St,["autoCapitalize","cols","dirname","form","maxLength","placeholder","readOnly","required","rows","wrap"]),ht(St,["form","multiple","required"]),ht(bt,["selected","value"]),ht(bt,["cellPadding","cellSpacing"]),ht(bt,["rowSpan","scope"]),ht(bt,["colSpan","headers","rowSpan","scope"]),ht(bt,["span"]),ht(bt,["span"]),ht(bt,["acceptCharset","action","encType","encType","method","noValidate","target"]),ht(bt,["allow","allowFullScreen","allowPaymentRequest","allowTransparency","csp","height","importance","referrerPolicy","sandbox","src","srcDoc","width"]),ht(bt,["alt","crossOrigin","height","src","srcSet","useMap","width"]);function kt(e,t,r){for(var n,a=Array.isArray(t),o={},i=0,s=Object.keys(e);i<s.length;i++){var l=s[i];!(!a&&t[l]||a&&t.indexOf(l)>=0||0===l.indexOf("data-")||0===l.indexOf("aria-"))||r&&-1!==(null===(n=r)||void 0===n?void 0:n.indexOf(l))||(o[l]=e[l])}return o}var wt=function(e,t){return t.spacing.hasOwnProperty(e)?t.spacing[e]:e},Ct=function(e){var t=parseFloat(e),r=isNaN(t)?0:t,n=isNaN(t)?"":t.toString();return{value:r,unit:e.substring(n.toString().length)||"px"}},_t=function(e,t){if(void 0===e||"number"==typeof e||""===e)return e;var r=e.split(" ");return r.length<2?wt(e,t):r.reduce((function(e,r){return wt(e,t)+" "+wt(r,t)}))},Et={start:"flex-start",end:"flex-end"},Ot={root:"ms-Stack",inner:"ms-Stack-inner"},Tt={root:"ms-StackItem"},Bt={start:"flex-start",end:"flex-end"},Pt=gt((function(e){var t=e.children,r=kt(e,bt);return a.Children.count(t)<1?null:le(de(e,{root:"div"}).root,n({},r),t)}),{displayName:"StackItem",styles:function(e,t,r){var n=e.grow,a=e.shrink,o=e.disableShrink,i=e.align,s=e.verticalFill,l=e.order,u=e.className,c=ge(Tt,t);return{root:[t.fonts.medium,c.root,{margin:r.margin,padding:r.padding,height:s?"100%":"auto",width:"auto"},n&&{flexGrow:!0===n?1:n},(o||!n&&!a)&&{flexShrink:0},a&&!o&&{flexShrink:1},i&&{alignSelf:Bt[i]||i},l&&{order:l},u]}}});var It=gt((function(e){var t=e.as,r=void 0===t?"div":t,o=e.disableShrink,i=e.wrap,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["as","disableShrink","wrap"]),l=a.Children.map(e.children,(function(e,t){if(!e)return null;if((i=e)&&"object"==typeof i&&i.type&&i.type.displayName===Pt.displayName){var r={shrink:!o};return a.cloneElement(e,n(n({},r),e.props))}var i;return e})),u=kt(s,bt),c=de(e,{root:r,inner:"div"});return le(c.root,n({},u),i?le(c.inner,null,l):l)}),{displayName:"Stack",styles:function(e,t,r){var a,o,i,s,l,u,c,d=e.verticalFill,f=e.horizontal,p=e.reversed,g=e.grow,v=e.wrap,h=e.horizontalAlign,m=e.verticalAlign,y=e.disableShrink,b=e.className,x=ge(Ot,t),S=r&&r.childrenGap?r.childrenGap:e.gap,k=r&&r.maxHeight?r.maxHeight:e.maxHeight,w=r&&r.maxWidth?r.maxWidth:e.maxWidth,C=r&&r.padding?r.padding:e.padding,_=function(e,t){if(void 0===e||""===e)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if("number"==typeof e)return{rowGap:{value:e,unit:"px"},columnGap:{value:e,unit:"px"}};var r=e.split(" ");if(r.length>2)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if(2===r.length)return{rowGap:Ct(wt(r[0],t)),columnGap:Ct(wt(r[1],t))};var n=Ct(wt(e,t));return{rowGap:n,columnGap:n}}(S,t),E=_.rowGap,O=_.columnGap,T=""+-.5*O.value+O.unit,B=""+-.5*E.value+E.unit,P={textOverflow:"ellipsis"},I={"> *:not(.ms-StackItem)":{flexShrink:y?0:1}};return v?{root:[x.root,{flexWrap:"wrap",maxWidth:w,maxHeight:k,width:"auto",overflow:"visible",height:"100%"},h&&(a={},a[f?"justifyContent":"alignItems"]=Et[h]||h,a),m&&(o={},o[f?"alignItems":"justifyContent"]=Et[m]||m,o),b,{display:"flex"},f&&{height:d?"100%":"auto"}],inner:[x.inner,{display:"flex",flexWrap:"wrap",marginLeft:T,marginRight:T,marginTop:B,marginBottom:B,overflow:"visible",boxSizing:"border-box",padding:_t(C,t),width:0===O.value?"100%":"calc(100% + "+O.value+O.unit+")",maxWidth:"100vw",selectors:n({"> *":n({margin:""+.5*E.value+E.unit+" "+.5*O.value+O.unit},P)},I)},h&&(i={},i[f?"justifyContent":"alignItems"]=Et[h]||h,i),m&&(s={},s[f?"alignItems":"justifyContent"]=Et[m]||m,s),f&&{flexDirection:p?"row-reverse":"row",height:0===E.value?"100%":"calc(100% + "+E.value+E.unit+")",selectors:{"> *":{maxWidth:0===O.value?"100%":"calc(100% - "+O.value+O.unit+")"}}},!f&&{flexDirection:p?"column-reverse":"column",height:"calc(100% + "+E.value+E.unit+")",selectors:{"> *":{maxHeight:0===E.value?"100%":"calc(100% - "+E.value+E.unit+")"}}}]}:{root:[x.root,{display:"flex",flexDirection:f?p?"row-reverse":"row":p?"column-reverse":"column",flexWrap:"nowrap",width:"auto",height:d?"100%":"auto",maxWidth:w,maxHeight:k,padding:_t(C,t),boxSizing:"border-box",selectors:n((l={"> *":P},l[p?"> *:not(:last-child)":"> *:not(:first-child)"]=[f&&{marginLeft:""+O.value+O.unit},!f&&{marginTop:""+E.value+E.unit}],l),I)},g&&{flexGrow:!0===g?1:g},h&&(u={},u[f?"justifyContent":"alignItems"]=Et[h]||h,u),m&&(c={},c[f?"alignItems":"justifyContent"]=Et[m]||m,c),b]}},statics:{Item:Pt}})}}]);