/*!
 * w-data-collector v1.0.8
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("path"),require("fs")):"function"==typeof define&&define.amd?define(["path","fs"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-data-collector"]=r(t.path,t.fs)}(this,(function(t,r){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),o=e(r);function a(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){var r={exports:{}};return t(r,r.exports),r.exports}var s=f((function(t){var r=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,r,e){var n=v;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return z()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=E(i,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===v)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var c=l(t,r,e);if("normal"===c.type){if(n=e.done?d:h,c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=d,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var v="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function b(){}function g(){}function _(){}var j={};f(j,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(L([])));w&&w!==e&&n.call(w,a)&&(j=w);var O=_.prototype=b.prototype=Object.create(j);function x(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,a,i,c){var f=l(t[o],t,a);if("throw"!==f.type){var s=f.arg,v=s.value;return v&&"object"===u(v)&&n.call(v,"__await")?r.resolve(v.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(v).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(f.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:z}}function z(){return{value:r,done:!0}}return g.prototype=_,f(O,"constructor",_),f(_,"constructor",g),g.displayName=f(_,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(S.prototype),f(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new S(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),f(O,c,"Generator"),f(O,a,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),f=n.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"===("undefined"==typeof globalThis?"undefined":u(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),l=s;var v=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t};var h=function(t){return function(r,e,n){for(var o=-1,a=Object(r),i=n(r),u=i.length;u--;){var c=i[t?u:++o];if(!1===e(a[c],c,a))break}return r}}();var p=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},d="object"==u(c)&&c&&c.Object===Object&&c,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,b=d||y||Function("return this")(),g=b.Symbol,_=Object.prototype,j=_.hasOwnProperty,m=_.toString,w=g?g.toStringTag:void 0;var O=function(t){var r=j.call(t,w),e=t[w];try{t[w]=void 0;var n=!0}catch(t){}var o=m.call(t);return n&&(r?t[w]=e:delete t[w]),o},x=Object.prototype.toString;var S=function(t){return x.call(t)},E=g?g.toStringTag:void 0;var k=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?O(t):S(t)};var T=function(t){return null!=t&&"object"==u(t)};var A=function(t){return T(t)&&"[object Arguments]"==k(t)},L=Object.prototype,z=L.hasOwnProperty,N=L.propertyIsEnumerable,P=A(function(){return arguments}())?A:function(t){return T(t)&&z.call(t,"callee")&&!N.call(t,"callee")},F=P,I=Array.isArray;var B=function(){return!1},M=f((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e?b.Buffer:void 0,a=(o?o.isBuffer:void 0)||B;t.exports=a})),$=/^(?:0|[1-9]\d*)$/;var C=function(t,r){var e=u(t);return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&$.test(t))&&t>-1&&t%1==0&&t<r};var D=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},G={};G["[object Float32Array]"]=G["[object Float64Array]"]=G["[object Int8Array]"]=G["[object Int16Array]"]=G["[object Int32Array]"]=G["[object Uint8Array]"]=G["[object Uint8ClampedArray]"]=G["[object Uint16Array]"]=G["[object Uint32Array]"]=!0,G["[object Arguments]"]=G["[object Array]"]=G["[object ArrayBuffer]"]=G["[object Boolean]"]=G["[object DataView]"]=G["[object Date]"]=G["[object Error]"]=G["[object Function]"]=G["[object Map]"]=G["[object Number]"]=G["[object Object]"]=G["[object RegExp]"]=G["[object Set]"]=G["[object String]"]=G["[object WeakMap]"]=!1;var R=function(t){return T(t)&&D(t.length)&&!!G[k(t)]};var U=function(t){return function(r){return t(r)}},q=f((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,o=n&&n.exports===e&&d.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),V=q&&q.isTypedArray,W=V?U(V):R,Y=Object.prototype.hasOwnProperty;var H=function(t,r){var e=I(t),n=!e&&F(t),o=!e&&!n&&M(t),a=!e&&!n&&!o&&W(t),i=e||n||o||a,u=i?p(t.length,String):[],c=u.length;for(var f in t)!r&&!Y.call(t,f)||i&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||C(f,c))||u.push(f);return u},J=Object.prototype;var K=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)};var Q=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),X=Object.prototype.hasOwnProperty;var Z=function(t){if(!K(t))return Q(t);var r=[];for(var e in Object(t))X.call(t,e)&&"constructor"!=e&&r.push(e);return r};var tt=function(t){var r=u(t);return null!=t&&("object"==r||"function"==r)};var rt=function(t){if(!tt(t))return!1;var r=k(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var et=function(t){return null!=t&&D(t.length)&&!rt(t)};var nt=function(t){return et(t)?H(t):Z(t)};var ot=function(t,r){return function(e,n){if(null==e)return e;if(!et(e))return t(e,n);for(var o=e.length,a=r?o:-1,i=Object(e);(r?a--:++a<o)&&!1!==n(i[a],a,i););return e}}((function(t,r){return t&&h(t,r,nt)}));var at=function(t){return t};var it=function(t){return"function"==typeof t?t:at};var ut=function(t,r){return(I(t)?v:ot)(t,it(r))};var ct=function(t){return"symbol"==u(t)||T(t)&&"[object Symbol]"==k(t)},ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var lt,vt=function(t,r){if(I(t))return!1;var e=u(t);return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!ct(t))||(st.test(t)||!ft.test(t)||null!=r&&t in Object(r))},ht=b["__core-js_shared__"],pt=(lt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+lt:"";var dt=function(t){return!!pt&&pt in t},yt=Function.prototype.toString;var bt=function(t){if(null!=t){try{return yt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},gt=/^\[object .+?Constructor\]$/,_t=Function.prototype,jt=Object.prototype,mt=_t.toString,wt=jt.hasOwnProperty,Ot=RegExp("^"+mt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xt=function(t){return!(!tt(t)||dt(t))&&(rt(t)?Ot:gt).test(bt(t))};var St=function(t,r){return null==t?void 0:t[r]};var Et=function(t,r){var e=St(t,r);return xt(e)?e:void 0},kt=Et(Object,"create");var Tt=function(){this.__data__=kt?kt(null):{},this.size=0};var At=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Lt=Object.prototype.hasOwnProperty;var zt=function(t){var r=this.__data__;if(kt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return Lt.call(r,t)?r[t]:void 0},Nt=Object.prototype.hasOwnProperty;var Pt=function(t){var r=this.__data__;return kt?void 0!==r[t]:Nt.call(r,t)};var Ft=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=kt&&void 0===r?"__lodash_hash_undefined__":r,this};function It(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}It.prototype.clear=Tt,It.prototype.delete=At,It.prototype.get=zt,It.prototype.has=Pt,It.prototype.set=Ft;var Bt=It;var Mt=function(){this.__data__=[],this.size=0};var $t=function(t,r){return t===r||t!=t&&r!=r};var Ct=function(t,r){for(var e=t.length;e--;)if($t(t[e][0],r))return e;return-1},Dt=Array.prototype.splice;var Gt=function(t){var r=this.__data__,e=Ct(r,t);return!(e<0)&&(e==r.length-1?r.pop():Dt.call(r,e,1),--this.size,!0)};var Rt=function(t){var r=this.__data__,e=Ct(r,t);return e<0?void 0:r[e][1]};var Ut=function(t){return Ct(this.__data__,t)>-1};var qt=function(t,r){var e=this.__data__,n=Ct(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Vt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Vt.prototype.clear=Mt,Vt.prototype.delete=Gt,Vt.prototype.get=Rt,Vt.prototype.has=Ut,Vt.prototype.set=qt;var Wt=Vt,Yt=Et(b,"Map");var Ht=function(){this.size=0,this.__data__={hash:new Bt,map:new(Yt||Wt),string:new Bt}};var Jt=function(t){var r=u(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Kt=function(t,r){var e=t.__data__;return Jt(r)?e["string"==typeof r?"string":"hash"]:e.map};var Qt=function(t){var r=Kt(this,t).delete(t);return this.size-=r?1:0,r};var Xt=function(t){return Kt(this,t).get(t)};var Zt=function(t){return Kt(this,t).has(t)};var tr=function(t,r){var e=Kt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function rr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}rr.prototype.clear=Ht,rr.prototype.delete=Qt,rr.prototype.get=Xt,rr.prototype.has=Zt,rr.prototype.set=tr;var er=rr;function nr(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function e(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return e.cache=a.set(o,i)||a,i};return e.cache=new(nr.Cache||er),e}nr.Cache=er;var or=nr;var ar=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ir=/\\(\\)?/g,ur=function(t){var r=or(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(ar,(function(t,e,n,o){r.push(n?o.replace(ir,"$1"):e||t)})),r}));var cr=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},fr=g?g.prototype:void 0,sr=fr?fr.toString:void 0;var lr=function t(r){if("string"==typeof r)return r;if(I(r))return cr(r,t)+"";if(ct(r))return sr?sr.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e};var vr=function(t){return null==t?"":lr(t)};var hr=function(t,r){return I(t)?t:vt(t,r)?[t]:ur(vr(t))};var pr=function(t){if("string"==typeof t||ct(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var dr=function(t,r){for(var e=0,n=(r=hr(r,t)).length;null!=t&&e<n;)t=t[pr(r[e++])];return e&&e==n?t:void 0};var yr=function(t,r,e){var n=null==t?void 0:dr(t,r);return void 0===n?e:n},br=Et(b,"DataView"),gr=Et(b,"Promise"),_r=Et(b,"Set"),jr=Et(b,"WeakMap"),mr="[object Map]",wr="[object Promise]",Or="[object Set]",xr="[object WeakMap]",Sr="[object DataView]",Er=bt(br),kr=bt(Yt),Tr=bt(gr),Ar=bt(_r),Lr=bt(jr),zr=k;(br&&zr(new br(new ArrayBuffer(1)))!=Sr||Yt&&zr(new Yt)!=mr||gr&&zr(gr.resolve())!=wr||_r&&zr(new _r)!=Or||jr&&zr(new jr)!=xr)&&(zr=function(t){var r=k(t),e="[object Object]"==r?t.constructor:void 0,n=e?bt(e):"";if(n)switch(n){case Er:return Sr;case kr:return mr;case Tr:return wr;case Ar:return Or;case Lr:return xr}return r});var Nr=zr;var Pr=function(t){return"string"==typeof t||!I(t)&&T(t)&&"[object String]"==k(t)};var Fr=function(t){return function(r){return null==r?void 0:r[t]}},Ir=Fr("length"),Br=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Mr=function(t){return Br.test(t)},$r="[\\ud800-\\udfff]",Cr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Dr="\\ud83c[\\udffb-\\udfff]",Gr="[^\\ud800-\\udfff]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ur="[\\ud800-\\udbff][\\udc00-\\udfff]",qr="(?:"+Cr+"|"+Dr+")"+"?",Vr="[\\ufe0e\\ufe0f]?",Wr=Vr+qr+("(?:\\u200d(?:"+[Gr,Rr,Ur].join("|")+")"+Vr+qr+")*"),Yr="(?:"+[Gr+Cr+"?",Cr,Rr,Ur,$r].join("|")+")",Hr=RegExp(Dr+"(?="+Dr+")|"+Yr+Wr,"g");var Jr=function(t){for(var r=Hr.lastIndex=0;Hr.test(t);)++r;return r};var Kr=function(t){return Mr(t)?Jr(t):Ir(t)};var Qr=function(t){if(null==t)return 0;if(et(t))return Pr(t)?Kr(t):t.length;var r=Nr(t);return"[object Map]"==r||"[object Set]"==r?t.size:Z(t).length};function Xr(t){return"[object Object]"===Object.prototype.toString.call(t)}function Zr(t){return"[object String]"===Object.prototype.toString.call(t)}function te(t){return!(!Zr(t)||""===t)}function re(t){var r=!1;return te(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}function ee(t,r){return!!Xr(t)&&(!(!te(r)&&!re(r))&&r in t)}function ne(t){if(Xr(t)){for(var r in t)return!0;return!1}return!1}function oe(t){var r=Object.prototype.toString.call(t);return"[object Function]"===r||"[object AsyncFunction]"===r}var ae=function(t){return!0===t||!1===t||T(t)&&"[object Boolean]"==k(t)};function ie(t){return ae(t)}var ue=function(){this.__data__=new Wt,this.size=0};var ce=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var fe=function(t){return this.__data__.get(t)};var se=function(t){return this.__data__.has(t)};var le=function(t,r){var e=this.__data__;if(e instanceof Wt){var n=e.__data__;if(!Yt||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new er(n)}return e.set(t,r),this.size=e.size,this};function ve(t){var r=this.__data__=new Wt(t);this.size=r.size}ve.prototype.clear=ue,ve.prototype.delete=ce,ve.prototype.get=fe,ve.prototype.has=se,ve.prototype.set=le;var he=ve;var pe=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var de=function(t){return this.__data__.has(t)};function ye(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new er;++r<e;)this.add(t[r])}ye.prototype.add=ye.prototype.push=pe,ye.prototype.has=de;var be=ye;var ge=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var _e=function(t,r){return t.has(r)};var je=function(t,r,e,n,o,a){var i=1&e,u=t.length,c=r.length;if(u!=c&&!(i&&c>u))return!1;var f=a.get(t),s=a.get(r);if(f&&s)return f==r&&s==t;var l=-1,v=!0,h=2&e?new be:void 0;for(a.set(t,r),a.set(r,t);++l<u;){var p=t[l],d=r[l];if(n)var y=i?n(d,p,l,r,t,a):n(p,d,l,t,r,a);if(void 0!==y){if(y)continue;v=!1;break}if(h){if(!ge(r,(function(t,r){if(!_e(h,r)&&(p===t||o(p,t,e,n,a)))return h.push(r)}))){v=!1;break}}else if(p!==d&&!o(p,d,e,n,a)){v=!1;break}}return a.delete(t),a.delete(r),v},me=b.Uint8Array;var we=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e};var Oe=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},xe=g?g.prototype:void 0,Se=xe?xe.valueOf:void 0;var Ee=function(t,r,e,n,o,a,i){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new me(t),new me(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return $t(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var u=we;case"[object Set]":var c=1&n;if(u||(u=Oe),t.size!=r.size&&!c)return!1;var f=i.get(t);if(f)return f==r;n|=2,i.set(t,r);var s=je(u(t),u(r),n,o,a,i);return i.delete(t),s;case"[object Symbol]":if(Se)return Se.call(t)==Se.call(r)}return!1};var ke=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t};var Te=function(t,r,e){var n=r(t);return I(t)?n:ke(n,e(t))};var Ae=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var i=t[e];r(i,e,t)&&(a[o++]=i)}return a};var Le=function(){return[]},ze=Object.prototype.propertyIsEnumerable,Ne=Object.getOwnPropertySymbols,Pe=Ne?function(t){return null==t?[]:(t=Object(t),Ae(Ne(t),(function(r){return ze.call(t,r)})))}:Le;var Fe=function(t){return Te(t,nt,Pe)},Ie=Object.prototype.hasOwnProperty;var Be=function(t,r,e,n,o,a){var i=1&e,u=Fe(t),c=u.length;if(c!=Fe(r).length&&!i)return!1;for(var f=c;f--;){var s=u[f];if(!(i?s in r:Ie.call(r,s)))return!1}var l=a.get(t),v=a.get(r);if(l&&v)return l==r&&v==t;var h=!0;a.set(t,r),a.set(r,t);for(var p=i;++f<c;){var d=t[s=u[f]],y=r[s];if(n)var b=i?n(y,d,s,r,t,a):n(d,y,s,t,r,a);if(!(void 0===b?d===y||o(d,y,e,n,a):b)){h=!1;break}p||(p="constructor"==s)}if(h&&!p){var g=t.constructor,_=r.constructor;g==_||!("constructor"in t)||!("constructor"in r)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(h=!1)}return a.delete(t),a.delete(r),h},Me="[object Arguments]",$e="[object Array]",Ce="[object Object]",De=Object.prototype.hasOwnProperty;var Ge=function(t,r,e,n,o,a){var i=I(t),u=I(r),c=i?$e:Nr(t),f=u?$e:Nr(r),s=(c=c==Me?Ce:c)==Ce,l=(f=f==Me?Ce:f)==Ce,v=c==f;if(v&&M(t)){if(!M(r))return!1;i=!0,s=!1}if(v&&!s)return a||(a=new he),i||W(t)?je(t,r,e,n,o,a):Ee(t,r,c,e,n,o,a);if(!(1&e)){var h=s&&De.call(t,"__wrapped__"),p=l&&De.call(r,"__wrapped__");if(h||p){var d=h?t.value():t,y=p?r.value():r;return a||(a=new he),o(d,y,e,n,a)}}return!!v&&(a||(a=new he),Be(t,r,e,n,o,a))};var Re=function t(r,e,n,o,a){return r===e||(null==r||null==e||!T(r)&&!T(e)?r!=r&&e!=e:Ge(r,e,n,o,t,a))};var Ue=function(t,r,e,n){var o=e.length,a=o,i=!n;if(null==t)return!a;for(t=Object(t);o--;){var u=e[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=e[o])[0],f=t[c],s=u[1];if(i&&u[2]){if(void 0===f&&!(c in t))return!1}else{var l=new he;if(n)var v=n(f,s,c,t,r,l);if(!(void 0===v?Re(s,f,3,n,l):v))return!1}}return!0};var qe=function(t){return t==t&&!tt(t)};var Ve=function(t){for(var r=nt(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,qe(o)]}return r};var We=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}};var Ye=function(t){var r=Ve(t);return 1==r.length&&r[0][2]?We(r[0][0],r[0][1]):function(e){return e===t||Ue(e,t,r)}};var He=function(t,r){return null!=t&&r in Object(t)};var Je=function(t,r,e){for(var n=-1,o=(r=hr(r,t)).length,a=!1;++n<o;){var i=pr(r[n]);if(!(a=null!=t&&e(t,i)))break;t=t[i]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&D(o)&&C(i,o)&&(I(t)||F(t))};var Ke=function(t,r){return null!=t&&Je(t,r,He)};var Qe=function(t,r){return vt(t)&&qe(r)?We(pr(t),r):function(e){var n=yr(e,t);return void 0===n&&n===r?Ke(e,t):Re(r,n,3)}};var Xe=function(t){return function(r){return dr(r,t)}};var Ze=function(t){return vt(t)?Fr(pr(t)):Xe(t)};var tn=function(t){return"function"==typeof t?t:null==t?at:"object"==u(t)?I(t)?Qe(t[0],t[1]):Ye(t):Ze(t)};var rn=function(t,r){var e=-1,n=et(t)?Array(t.length):[];return ot(t,(function(t,o,a){n[++e]=r(t,o,a)})),n};var en=function(t,r){return(I(t)?cr:rn)(t,tn(r))},nn=Array.prototype.join;var on=function(t,r){return null==t?"":nn.call(t,r)};function an(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=1;function a(t){var i=[],u=o.default.readdirSync(t);return ut(u,(function(u){var c=n.default.resolve(t,u),f=null;try{f=o.default.statSync(c)}catch(t){}f&&f.isDirectory()?(i.push({isFolder:!0,level:e,path:c,name:n.default.basename(c)}),((e+=1)<=r||null===r)&&(i=i.concat(a(c))),e-=1):i.push({isFolder:!1,level:e,path:c,name:n.default.basename(c)})})),i}return a(t)}function un(t,r,e){if(!te(t))return"";if(!te(r))return"";if(!Zr(e))return"";var n=new RegExp(r,"g");return String(t).replace(n,e)}function cn(t){var r=en(t,(function(t){var r="import {name} from '{src}'";return r=un(r,"{name}",t.name),r=un(r,"{src}",t.src)}));return on(r,"\n")}function fn(t){var r=en(t,(function(t){var r="    {name},";return r=un(r,"{name}",t.name)}));return on(r,"\n")}var sn=function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+r];return a},ln=/\s/;var vn=function(t){for(var r=t.length;r--&&ln.test(t.charAt(r)););return r},hn=/^\s+/;var pn=function(t){return t?t.slice(0,vn(t)+1).replace(hn,""):t},dn=/^[-+]0x[0-9a-f]+$/i,yn=/^0b[01]+$/i,bn=/^0o[0-7]+$/i,gn=parseInt;var _n=function(t){if("number"==typeof t)return t;if(ct(t))return NaN;if(tt(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=tt(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=pn(t);var e=yn.test(t);return e||bn.test(t)?gn(t.slice(2),e?2:8):dn.test(t)?NaN:+t},jn=1/0;var mn=function(t){return t?(t=_n(t))===jn||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var wn=function(t){var r=mn(t),e=r%1;return r==r?e?r-e:r:0};var On=function(t,r,e){var n=null==t?0:t.length;return n?(r=e||void 0===r?1:wn(r),sn(t,r<0?0:r,n)):[]};function xn(t,r){var e,n,o,a,i=(o=new Promise((function(){e=arguments[0],n=arguments[1]})),o.resolve=e,o.reject=n,o);if(a=t,"[object Array]"!==Object.prototype.toString.call(a)&&!Xr(t))return i.reject("rs is not array or object"),i;var u=!1;if(Xr(t)){u=!0;var c=[];ut(t,(function(t,r){c.push({k:r,v:t})})),t=c}oe(r)||(r=function(t){return t});var f=-1,s=[];return t.reduce((function(t,e){return t.then((function(t){s.push(t);var n=f+=1,o=e;return u&&(n=e.k,o=e.v),oe(r)?r(o,n):o}))}),Promise.resolve()).then((function(t){s.push(t),s=On(s),i.resolve(s)})).catch((function(t){i.reject(t)})),i}function Sn(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=yr(r,"fdModels");if(!te(e)){var o=n.default.resolve();e="".concat(o,"/models")}var a=yr(r,"genModelsByTabs");if(!oe(a))throw new Error("opt.genModelsByTabs is not a function, it needs to import from 'w-orm-reladb/src/genModelsByTabs.mjs'");var i={};ut(t,(function(t,r){i[r]=t.settings})),a(e,i)}function En(){return En=i(l.mark((function t(r,e){var n,o,a,u=arguments;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:{},ie(o=yr(n,"useGenModels"))||(o=!1),o&&(Sn(r,n),console.log("genModels done")),a=nt(r),t.next=7,xn(a,function(){var t=i(l.mark((function t(n){return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!oe(yr(r,"".concat(n,".funTest")))){t.next=4;break}return t.next=4,r[n].funTest(e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}());case 7:console.log("genTestdata done",a);case 8:case"end":return t.stop()}}),t)}))),En.apply(this,arguments)}var kn={build:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=yr(r,"useSaveToDb");ie(e)||(e=!0);var n=yr(r,"useCreateStorage");ie(n)||(n=!1);var o=t.keyTable,a=t.tableNameCht,u=t.tableNameEng,c=t.settings,f=t.parser,s=t.funNew,v=t.funTest;if(!te(o))throw new Error("invalid keyTable[".concat(o,"]"));if(te(a)||(a=o),te(u)||(u=o),!ne(c))throw new Error("invalid settings");oe(f)||(f=null),oe(s)||(s=null);var h=null;oe(v)&&(h=function(){var t=i(l.mark((function t(r){var a;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ne(r)){t.next=2;break}throw new Error("invalid wo");case 2:if(ee(r,o)){t.next=5;break}throw console.log(r),new Error("keyTable[".concat(o,"] is not in wo"));case 5:a=[],t.prev=6,a=v(),t.next=14;break;case 10:throw t.prev=10,t.t0=t.catch(6),console.log("keyTable[".concat(o,"] funTest catch"),t.t0),new Error(t.t0);case 14:if(0!==Qr(a)){t.next=16;break}return t.abrupt("return");case 16:if(!e){t.next=22;break}if(!n){t.next=20;break}return t.next=20,r[o].createStorage();case 20:return t.next=22,r[o].save(a);case 22:case"end":return t.stop()}}),t,null,[[6,10]])})));return function(r){return t.apply(this,arguments)}}());var p={},d={};ut(nt(c),(function(t){var r=yr(c,"".concat(t,".name"),"");te(r)&&(p[t]=r);var e=yr(c,"".concat(t,".type"),"");te(e)&&(d[t]=e)}));var y={keyTable:o,tableNameCht:a,tableNameEng:u,settings:c,keys:nt(c),kpType:d,kpHead:p,parser:f,funNew:s,funTest:v,funTestSave:h};return y},genIndex:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=yr(e,"fpBuild");te(a)||(a="w-data-collector/src/build.mjs");var i=yr(e,"fnIndex");te(i)||(i="index.mjs");var u=yr(e,"useSaveToDb");ie(u)||(u=!0);var c=yr(e,"useCreateStorage");ie(c)||(c=!1);var f=an(t),s=en(f,(function(t){var e=t.name;e=un(e,".mjs",""),e=un(e,".js","");var o=n.default.relative(r,t.path);return o=o.replace(/\\/g,"/"),{name:e,src:o="./".concat(o)}})),l="{cimps}\nimport build from '{fpBuild}'\n\n\nlet cs = {\n{cnms}\n}\n\n//ds\nlet ds = {}\nfor (let k in cs) {\n    ds[k] = build(cs[k], { useSaveToDb: ".concat(u,", useCreateStorage: ").concat(c," })\n}\n\n\nexport default ds\n"),v=cn(s),h=fn(s);l=un(l,"{cimps}",v),l=un(l,"{cnms}",h),l=un(l,"{fpBuild}",a);var p=n.default.resolve(r,i);o.default.writeFileSync(p,l,"utf8"),console.log("genIndex done")},genTestdata:function(t,r){return En.apply(this,arguments)}};return kn}));
//# sourceMappingURL=w-data-collector.umd.js.map
