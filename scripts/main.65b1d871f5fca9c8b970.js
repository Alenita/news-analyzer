!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=143)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(58))},function(t,n,e){var r=e(0),o=e(11),i=e(28),c=e(54),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(22).f,i=e(12),c=e(10),u=e(19),a=e(49),s=e(42);t.exports=function(t,n){var e,f,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(h?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(5),o=e(33),i=e(4),c=e(20),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(50),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(11),i=e(12),c=e(8),u=e(19),a=e(34),s=e(35),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!f&&t[n]&&(s=!0):delete t[n],s?t[n]=e:i(t,n,e)):s?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(t,n,e){var r=e(26),o=e(59);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(5),o=e(7),i=e(21);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return o})),e.d(n,"f",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"e",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"g",(function(){return s})),e.d(n,"h",(function(){return f}));var r="https://newsapi.org/v2/everything?q=",o="language=ru",i="sortBy=popularity&pageSize=100&apiKey=fdcf2a49f0244b3c881bd85278fbfb6b",c=3,u=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],a="https://api.github.com/repos",s="Alenita",f="news-analyzer"},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(40),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports={}},function(t,n,e){var r=e(0),o=e(12);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(5),o=e(48),i=e(21),c=e(16),u=e(20),a=e(8),s=e(33),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(0),o=e(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(11),o=e(28),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r,o,i=e(0),c=e(44),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10),o=Date.prototype,i=o.toString,c=o.getTime;new Date(NaN)+""!="Invalid Date"&&r(o,"toString",(function(){var t=c.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,e){var r=e(5),o=e(3),i=e(25);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(11);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,c=e(60),u=e(0),a=e(2),s=e(12),f=e(8),l=e(27),p=e(18),v=u.WeakMap;if(c){var d=new v,h=d.get,y=d.has,g=d.set;r=function(t,n){return g.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(8),o=e(16),i=e(51).indexOf,c=e(18);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(15);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(23);t.exports=function(t){return Object(r(t))}},,function(t,n,e){var r=e(3),o=e(13),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(36),o=e(24).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(9);t.exports=r("document","documentElement")},function(t,n,e){var r=e(9);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(6),o=e(5);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(7).f})},function(t,n,e){var r=e(3),o=e(1),i=e(30),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},,function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(8),o=e(61),i=e(22),c=e(7);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(16),o=e(17),i=e(52),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(4),o=e(69),i=e(24),c=e(18),u=e(43),a=e(25),s=e(27)("IE_PROTO"),f=function(){},l=function(){var t,n=a("iframe"),e=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[s]=t):e=l(),void 0===n?e:o(e,n)},c[s]=!0},function(t,n,e){var r=e(36),o=e(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(31),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(19),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(34),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(9),o=e(41),i=e(53),c=e(4);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){"use strict";var r=e(15),o=e(2),i=[].slice,c={},u=function(t,n,e){if(!(n in c)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";c[n]=Function("C,a","return new C("+r.join(",")+")")}return c[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),c=function(){var r=e.concat(i.call(arguments));return this instanceof c?u(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(c.prototype=n.prototype),c}},function(t,n,e){var r=e(10),o=e(82),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){var r=e(13),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(0),u=e(3),a=e(13),s=e(37),f=e(43),l=e(25),p=e(67),v=c.location,d=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},S=function(t){return function(){w(t)}},j=function(t){w(t.data)},O=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(b),b},h=function(t){delete x[t]},"process"==a(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=j,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(O)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(r=O,c.addEventListener("message",j,!1))),t.exports={set:d,clear:h}},function(t,n,e){var r=e(44);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(15),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r=e(5),o=e(7),i=e(4),c=e(56);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(37),o=e(40),i=e(38),c=e(17),u=e(57),a=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var g,m,b=i(v),x=o(b),w=r(d,h,3),S=c(x.length),j=0,O=y||u,_=n?O(v,S):e?O(v,0):void 0;S>j;j++)if((p||j in x)&&(m=w(g=x[j],j,b),t))if(n)_[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:a.call(_,g)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(32);var r=e(14);function o(t){var n=document.createElement("time");n.setAttribute("datetime",t);var e=new Date(t);return console.log(e),n.textContent=e.getDate()+" "+r.e[e.getMonth()]+", "+e.getFullYear(),n.classList.add("extra-text"),n}},function(t,n,e){"use strict";var r,o,i,c,u=e(6),a=e(26),s=e(0),f=e(9),l=e(73),p=e(10),v=e(83),d=e(11),h=e(74),y=e(84),g=e(2),m=e(15),b=e(85),x=e(13),w=e(86),S=e(90),j=e(75),O=e(66).set,_=e(91),E=e(76),P=e(92),C=e(68),T=e(93),M=e(35),k=e(42),A=e(1),L=e(30),I=A("species"),D="Promise",F=M.get,N=M.set,R=M.getterFor(D),q=l,U=s.TypeError,W=s.document,z=s.process,B=d("inspectSource"),J=f("fetch"),K=C.f,Y=K,G="process"==x(z),H=!!(W&&W.createEvent&&s.dispatchEvent),Z=k(D,(function(){var t=B(q)!==String(q);if(66===L)return!0;if(!t&&!G&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!q.prototype.finally)return!0;if(L>=51&&/native code/.test(q))return!1;var n=q.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[I]=e,!(n.then((function(){}))instanceof e)})),$=Z||!S((function(t){q.all(t).catch((function(){}))})),Q=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},V=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;_((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,v=f.reject,d=f.domain;try{l?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),s=!0)),u===f.promise?v(U("Promise-chain cycle")):(a=Q(u))?a.call(u,p,v):p(u)):v(o)}catch(t){d&&!s&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},X=function(t,n,e){var r,o;H?((r=W.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:n,reason:e},(o=s["on"+t])?o(r):"unhandledrejection"===t&&P("Unhandled promise rejection",e)},tt=function(t,n){O.call(s,(function(){var e,r=n.value;if(nt(n)&&(e=T((function(){G?z.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),n.rejection=G||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){O.call(s,(function(){G?z.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,V(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw U("Promise can't be resolved itself");var o=Q(e);o?_((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,V(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};Z&&(q=function(t){b(this,q,D),m(t),r.call(this);var n=F(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){N(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(q.prototype,{then:function(t,n){var e=R(this),r=K(j(this,q));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=G?z.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&V(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=F(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},C.f=K=function(t){return t===q||t===i?new o(t):Y(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new q((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof J&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(q,J.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:Z},{Promise:q}),h(q,D,!1,!0),y(D),i=f(D),u({target:D,stat:!0,forced:Z},{reject:function(t){var n=K(this);return n.reject.call(void 0,t),n.promise}}),u({target:D,stat:!0,forced:a||Z},{resolve:function(t){return E(a&&this===i?q:this,t)}}),u({target:D,stat:!0,forced:$},{all:function(t){var n=this,e=K(n),r=e.resolve,o=e.reject,i=T((function(){var e=m(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,s=!1;i.push(void 0),u++,e.call(n,t).then((function(t){s||(s=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=K(n),r=e.reject,o=T((function(){var o=m(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(7).f,o=e(8),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(4),o=e(15),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(4),o=e(2),i=e(68);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";var r=e(20),o=e(7),i=e(21);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){e(6)({target:"Function",proto:!0},{bind:e(62)})},function(t,n,e){e(6)({target:"Object",stat:!0},{setPrototypeOf:e(80)})},function(t,n,e){var r=e(4),o=e(81);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(64),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){var r=e(10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(9),o=e(7),i=e(1),c=e(5),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(4),o=e(87),i=e(17),c=e(37),u=e(88),a=e(89),s=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,f,l){var p,v,d,h,y,g,m,b=c(n,e,f?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=f?b(r(m=t[d])[0],m[1]):b(t[d]))&&y instanceof s)return y;return new s(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=a(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,n,e){var r=e(1),o=e(65),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(64),o=e(65),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(4);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r,o,i,c,u,a,s,f,l=e(0),p=e(22).f,v=e(13),d=e(66).set,h=e(67),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),w=x&&x.value;w||(r=function(){var t,n;for(b&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:y&&!h?(u=!0,a=document.createTextNode(""),new y(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){d.call(l,r)}),t.exports=w||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(6),o=e(9),i=e(15),c=e(4),u=e(2),a=e(55),s=e(62),f=e(3),l=o("Reflect","construct"),p=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),v=!f((function(){l((function(){}))})),d=p||v;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,n){i(t),c(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!p)return l(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var o=e.prototype,f=a(u(o)?o:Object.prototype),d=Function.apply.call(t,f,n);return u(d)?d:f}})},function(t,n,e){"use strict";var r=e(10),o=e(4),i=e(3),c=e(96),u=RegExp.prototype,a=u.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(4);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(5),o=e(7).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(6),o=e(3),i=e(31),c=e(2),u=e(38),a=e(17),s=e(77),f=e(57),l=e(46),p=e(1),v=e(30),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var n,e,r,o,i,c=u(this),l=f(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},,,function(t,n,e){n.f=e(1)},,,,,function(t,n,e){"use strict";var r=e(6),o=e(26),i=e(73),c=e(9),u=e(75),a=e(76),s=e(10);r({target:"Promise",proto:!0,real:!0},{finally:function(t){var n=u(this,c("Promise")),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",c("Promise").prototype.finally)},function(t,n,e){},function(t,n,e){"use strict";var r=e(6),o=e(0),i=e(9),c=e(26),u=e(5),a=e(54),s=e(3),f=e(8),l=e(31),p=e(2),v=e(4),d=e(38),h=e(16),y=e(20),g=e(21),m=e(55),b=e(56),x=e(41),w=e(109),S=e(53),j=e(22),O=e(7),_=e(48),E=e(12),P=e(10),C=e(11),T=e(27),M=e(18),k=e(28),A=e(1),L=e(101),I=e(110),D=e(74),F=e(35),N=e(70).forEach,R=T("hidden"),q=A("toPrimitive"),U=F.set,W=F.getterFor("Symbol"),z=Object.prototype,B=o.Symbol,J=i("JSON","stringify"),K=j.f,Y=O.f,G=w.f,H=_.f,Z=C("symbols"),$=C("op-symbols"),Q=C("string-to-symbol-registry"),V=C("symbol-to-string-registry"),X=C("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,et=u&&s((function(){return 7!=m(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=K(z,n);r&&delete z[n],Y(t,n,e),r&&t!==z&&Y(z,n,r)}:Y,rt=function(t,n){var e=Z[t]=m(B.prototype);return U(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},ot=a&&"symbol"==typeof B.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},it=function(t,n,e){t===z&&it($,n,e),v(t);var r=y(n,!0);return v(e),f(Z,r)?(e.enumerable?(f(t,R)&&t[R][r]&&(t[R][r]=!1),e=m(e,{enumerable:g(0,!1)})):(f(t,R)||Y(t,R,g(1,{})),t[R][r]=!0),et(t,r,e)):Y(t,r,e)},ct=function(t,n){v(t);var e=h(n),r=b(e).concat(ft(e));return N(r,(function(n){u&&!ut.call(e,n)||it(t,n,e[n])})),t},ut=function(t){var n=y(t,!0),e=H.call(this,n);return!(this===z&&f(Z,n)&&!f($,n))&&(!(e||!f(this,n)||!f(Z,n)||f(this,R)&&this[R][n])||e)},at=function(t,n){var e=h(t),r=y(n,!0);if(e!==z||!f(Z,r)||f($,r)){var o=K(e,r);return!o||!f(Z,r)||f(e,R)&&e[R][r]||(o.enumerable=!0),o}},st=function(t){var n=G(h(t)),e=[];return N(n,(function(t){f(Z,t)||f(M,t)||e.push(t)})),e},ft=function(t){var n=t===z,e=G(n?$:h(t)),r=[];return N(e,(function(t){!f(Z,t)||n&&!f(z,t)||r.push(Z[t])})),r};(a||(P((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=k(t),e=function(t){this===z&&e.call($,t),f(this,R)&&f(this[R],n)&&(this[R][n]=!1),et(this,n,g(1,t))};return u&&nt&&et(z,n,{configurable:!0,set:e}),rt(n,t)}).prototype,"toString",(function(){return W(this).tag})),_.f=ut,O.f=it,j.f=at,x.f=w.f=st,S.f=ft,u&&(Y(B.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),c||P(z,"propertyIsEnumerable",ut,{unsafe:!0})),L.f=function(t){return rt(A(t),t)}),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:B}),N(b(X),(function(t){I(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(f(Q,n))return Q[n];var e=B(n);return Q[n]=e,V[e]=n,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(V,t))return V[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?m(t):ct(m(t),n)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(d(t))}}),J)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=B();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ot(n))return n}),o[1]=n,J.apply(null,o)}});B.prototype[q]||E(B.prototype,q,B.prototype.valueOf),D(B,"Symbol"),M[R]=!0},function(t,n,e){var r=e(16),o=e(41).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(50),o=e(8),i=e(101),c=e(7).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){"use strict";var r=e(6),o=e(5),i=e(0),c=e(8),u=e(2),a=e(7).f,s=e(49),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(p,f);var v=p.prototype=f.prototype;v.constructor=p;var d=v.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=d.call(t);if(c(l,t))return"";var e=h?n.slice(7,-1):n.replace(y,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){"use strict";var r=e(6),o=e(2),i=e(31),c=e(52),u=e(17),a=e(16),s=e(77),f=e(46),l=e(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,n){var e,r,f,d=a(this),h=u(d.length),y=c(t,h),g=c(void 0===n?h:n,h);if(i(d)&&("function"!=typeof(e=d.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[l])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(d,y,g);for(r=new(void 0===e?Array:e)(v(g-y,0)),f=0;y<g;y++,f++)y in d&&s(r,f,d[y]);return r.length=f,r}})},function(t,n,e){var r=e(6),o=e(114);r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},function(t,n,e){"use strict";var r=e(3),o=e(115).start,i=Math.abs,c=Date.prototype,u=c.getTime,a=c.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))}))||!r((function(){a.call(new Date(NaN))}))?function(){if(!isFinite(u.call(this)))throw RangeError("Invalid time value");var t=this.getUTCFullYear(),n=this.getUTCMilliseconds(),e=t<0?"-":t>9999?"+":"";return e+o(i(t),e?6:4,0)+"-"+o(this.getUTCMonth()+1,2,0)+"-"+o(this.getUTCDate(),2,0)+"T"+o(this.getUTCHours(),2,0)+":"+o(this.getUTCMinutes(),2,0)+":"+o(this.getUTCSeconds(),2,0)+"."+o(n,3,0)+"Z"}:a},function(t,n,e){var r=e(17),o=e(116),i=e(23),c=Math.ceil,u=function(t){return function(n,e,u){var a,s,f=String(i(n)),l=f.length,p=void 0===u?" ":String(u),v=r(e);return v<=l||""==p?f:(a=v-l,(s=o.call(p,c(a/p.length))).length>a&&(s=s.slice(0,a)),t?f+s:s+f)}};t.exports={start:u(!1),end:u(!0)}},function(t,n,e){"use strict";var r=e(29),o=e(23);t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(32),e(78),e(79),e(63),e(72),e(106),e(94),e(95),e(107),e(108),e(111),e(97),e(45);var r=e(14);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=document.querySelector(".search-results__more-cards"),c=function(){function t(n,e,o){var c=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=n,this.data=e,this.cardPortion=r.b,this.lastCard=0,this.card=o,i.onclick=function(){return c.render()}}var n,e,c;return n=t,(e=[{key:"checkBalance",value:function(){this.lastCard>=this.data.length&&i.classList.remove("search-results__more-cards_visible")}},{key:"addCards",value:function(){var t=this.card.apply(this,arguments),n=t.cardElement;this.list.appendChild(n)}},{key:"render",value:function(){for(var t=this.data,n=this.lastCard;n<Math.min(this.lastCard+this.cardPortion,t.length);n++){var e=t[n];this.addCards(e.url,e.urlToImage,e.publishedAt,e.title,e.description,e.source.name)}this.lastCard=this.lastCard+this.cardPortion,this.checkBalance()}}])&&o(n.prototype,e),c&&o(n,c),t}(),u=e(71);function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.cardElement=this.createCard.apply(this,arguments)}var n,e,r;return n=t,(e=[{key:"createCard",value:function(t,n,e,r,o,i){var c=document.createElement("li");c.classList.add("search-results__item");var a=document.createElement("a");a.classList.add("search-results__card-link"),a.setAttribute("href","".concat(t)),a.setAttribute("target","_blank");var s=document.createElement("img");s.classList.add("search-results__image"),s.setAttribute("alt","Не удалось загрузить фотографию"),s.src="".concat(n),s.addEventListener("error",(function(){s.src="https://dummyimage.com/600x400/cf2dcf/000000&text=Image+not+found"}));var f=document.createElement("div");f.classList.add("search-results__column");var l=document.createElement("div");l.classList.add("search-results__description");var p=document.createElement("h3");p.classList.add("search-results__card-title"),p.textContent=r;var v=document.createElement("p");v.classList.add("search-results__text"),v.textContent=o;var d=document.createElement("p");d.classList.add("search-results__source"),d.textContent=i;var h=Object(u.a)(e);return c.appendChild(a),a.appendChild(s),a.appendChild(f),f.appendChild(l),l.appendChild(h),l.appendChild(p),l.appendChild(v),f.appendChild(d),c}}])&&a(n.prototype,e),r&&a(n,r),t}();e(98),e(112),e(113);function f(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.lan=e,this.parameters=r}var n,e,r;return n=t,(e=[{key:"getCards",value:function(t){var n=new Date,e=new Date(n.getTime()-5184e5).toISOString().slice(0,10),r=n.toISOString().slice(0,10);return fetch("".concat(this.baseUrl).concat(t,"&from=").concat(e,"&to=").concat(r,"&language=ru&").concat(this.parameters)).then((function(t){return t.ok?Promise.resolve(t.json()):Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){console.log(t)}))}}])&&f(n.prototype,e),r&&f(n,r),t}();function p(t,n,e){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&v(o,e.prototype),o}).apply(null,arguments)}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var d=document.querySelector(".search__input"),h=document.querySelector(".search__submit"),y=document.querySelector(".search__form"),g=document.querySelector(".not-found"),m=document.querySelector(".preloader"),b=document.querySelector(".search-results__list"),x=document.querySelector(".search-results"),w=new l(r.a,r.d,r.f),S=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return p(s,n)},j=document.querySelector(".search-results__more-cards"),O=0;function _(t){t?m.classList.add("preloader_visible"):m.classList.remove("preloader_visible")}function E(t){localStorage.clear(),function(){for(;b.firstChild;)b.removeChild(b.firstChild)}(),t.preventDefault(),x.classList.add("search-results_visible"),_(!0),h.setAttribute("disabled",!0),O=1,d.validity.valid?w.getCards(d.value).then((function(t){var n,e,r;P(t.articles),new c(b,t.articles,S).render(),n=d.value,e=t,r=JSON.stringify(e),localStorage.clear(),localStorage.setItem("info",r),localStorage.setItem("findingWord",n)})).catch((function(t){console.log(t),x.classList.remove("search-results_visible")})).finally((function(){h.removeAttribute("disabled"),_(!1)})):(h.removeAttribute("disabled"),_(!1),x.classList.remove("search-results_visible"))}function P(t){0==t.length?(localStorage.clear(),g.classList.add("not-found_visible"),x.classList.remove("search-results_visible")):(g.classList.remove("not-found_visible"),x.classList.add("search-results_visible"),j.classList.add("search-results__more-cards_visible"))}if(!O&&null!==localStorage.getItem("info")){d.value=localStorage.getItem("findingWord");var C=JSON.parse(localStorage.getItem("info"));x.classList.add("search-results_visible"),P(C.articles),new c(b,C.articles,S).render()}y.addEventListener("submit",(function(t){return E(t)}))}]);
//# sourceMappingURL=main.65b1d871f5fca9c8b970.js.map