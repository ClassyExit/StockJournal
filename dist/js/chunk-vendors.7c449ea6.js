(self["webpackChunkstock_journal"]=self["webpackChunkstock_journal"]||[]).push([[998],{9662:function(e,t,n){var c=n(7854),r=n(614),i=n(6330),C=c.TypeError;e.exports=function(e){if(r(e))return e;throw C(i(e)+" is not a function")}},6077:function(e,t,n){var c=n(7854),r=n(614),i=c.String,C=c.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw C("Can't set "+i(e)+" as a prototype")}},1223:function(e,t,n){var c=n(5112),r=n(30),i=n(3070).f,C=c("unscopables"),s=Array.prototype;void 0==s[C]&&i(s,C,{configurable:!0,value:r(null)}),e.exports=function(e){s[C][e]=!0}},5787:function(e,t,n){var c=n(7854),r=n(7976),i=c.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var c=n(7854),r=n(111),i=c.String,C=c.TypeError;e.exports=function(e){if(r(e))return e;throw C(i(e)+" is not an object")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var c,r,i,C=n(4019),s=n(9781),a=n(7854),o=n(614),l=n(111),h=n(2597),u=n(648),f=n(6330),d=n(8880),z=n(8052),p=n(3070).f,M=n(7976),m=n(9518),L=n(7674),v=n(5112),V=n(9711),H=a.Int8Array,g=H&&H.prototype,y=a.Uint8ClampedArray,b=y&&y.prototype,w=H&&m(H),S=g&&m(g),k=Object.prototype,E=a.TypeError,_=v("toStringTag"),I=V("TYPED_ARRAY_TAG"),A=V("TYPED_ARRAY_CONSTRUCTOR"),T=C&&!!L&&"Opera"!==u(a.opera),O=!1,x={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8},N=function(e){if(!l(e))return!1;var t=u(e);return"DataView"===t||h(x,t)||h(R,t)},P=function(e){if(!l(e))return!1;var t=u(e);return h(x,t)||h(R,t)},D=function(e){if(P(e))return e;throw E("Target is not a typed array")},j=function(e){if(o(e)&&(!L||M(w,e)))return e;throw E(f(e)+" is not a typed array constructor")},U=function(e,t,n,c){if(s){if(n)for(var r in x){var i=a[r];if(i&&h(i.prototype,e))try{delete i.prototype[e]}catch(C){try{i.prototype[e]=t}catch(o){}}}S[e]&&!n||z(S,e,n?t:T&&g[e]||t,c)}},F=function(e,t,n){var c,r;if(s){if(L){if(n)for(c in x)if(r=a[c],r&&h(r,e))try{delete r[e]}catch(i){}if(w[e]&&!n)return;try{return z(w,e,n?t:T&&w[e]||t)}catch(i){}}for(c in x)r=a[c],!r||r[e]&&!n||z(r,e,t)}};for(c in x)r=a[c],i=r&&r.prototype,i?d(i,A,r):T=!1;for(c in R)r=a[c],i=r&&r.prototype,i&&d(i,A,r);if((!T||!o(w)||w===Function.prototype)&&(w=function(){throw E("Incorrect invocation")},T))for(c in x)a[c]&&L(a[c],w);if((!T||!S||S===k)&&(S=w.prototype,T))for(c in x)a[c]&&L(a[c].prototype,S);if(T&&m(b)!==S&&L(b,S),s&&!h(S,_))for(c in O=!0,p(S,_,{get:function(){return l(this)?this[I]:void 0}}),x)a[c]&&d(a[c],I,c);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_CONSTRUCTOR:A,TYPED_ARRAY_TAG:O&&I,aTypedArray:D,aTypedArrayConstructor:j,exportTypedArrayMethod:U,exportTypedArrayStaticMethod:F,isView:N,isTypedArray:P,TypedArray:w,TypedArrayPrototype:S}},1318:function(e,t,n){var c=n(5656),r=n(1400),i=n(6244),C=function(e){return function(t,n,C){var s,a=c(t),o=i(a),l=r(C,o);if(e&&n!=n){while(o>l)if(s=a[l++],s!=s)return!0}else for(;o>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:C(!0),indexOf:C(!1)}},4326:function(e,t,n){var c=n(1702),r=c({}.toString),i=c("".slice);e.exports=function(e){return i(r(e),8,-1)}},648:function(e,t,n){var c=n(7854),r=n(1694),i=n(614),C=n(4326),s=n(5112),a=s("toStringTag"),o=c.Object,l="Arguments"==C(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=r?C:function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=o(e),a))?n:l?C(t):"Object"==(c=C(t))&&i(t.callee)?"Arguments":c}},7741:function(e,t,n){var c=n(1702),r=Error,i=c("".replace),C=function(e){return String(r(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(C);e.exports=function(e,t){if(a&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=i(e,s,"");return e}},9920:function(e,t,n){var c=n(2597),r=n(3887),i=n(1236),C=n(3070);e.exports=function(e,t,n){for(var s=r(t),a=C.f,o=i.f,l=0;l<s.length;l++){var h=s[l];c(e,h)||n&&c(n,h)||a(e,h,o(t,h))}}},8544:function(e,t,n){var c=n(7293);e.exports=!c((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var c=n(9781),r=n(3070),i=n(9114);e.exports=c?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var c=n(614),r=n(8880),i=n(6339),C=n(3072);e.exports=function(e,t,n,s){s||(s={});var a=s.enumerable,o=void 0!==s.name?s.name:t;return c(n)&&i(n,o,s),s.global?a?e[t]=n:C(t,n):(s.unsafe?e[t]&&(a=!0):delete e[t],a?e[t]=n:r(e,t,n)),e}},3072:function(e,t,n){var c=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t}},9781:function(e,t,n){var c=n(7293);e.exports=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var c=n(7854),r=n(111),i=c.document,C=r(i)&&r(i.createElement);e.exports=function(e){return C?i.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var c=n(5005);e.exports=c("navigator","userAgent")||""},7392:function(e,t,n){var c,r,i=n(7854),C=n(8113),s=i.process,a=i.Deno,o=s&&s.versions||a&&a.version,l=o&&o.v8;l&&(c=l.split("."),r=c[0]>0&&c[0]<4?1:+(c[0]+c[1])),!r&&C&&(c=C.match(/Edge\/(\d+)/),(!c||c[1]>=74)&&(c=C.match(/Chrome\/(\d+)/),c&&(r=+c[1]))),e.exports=r},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var c=n(7293),r=n(9114);e.exports=!c((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},2109:function(e,t,n){var c=n(7854),r=n(1236).f,i=n(8880),C=n(8052),s=n(3072),a=n(9920),o=n(4705);e.exports=function(e,t){var n,l,h,u,f,d,z=e.target,p=e.global,M=e.stat;if(l=p?c:M?c[z]||s(z,{}):(c[z]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(d=r(l,h),u=d&&d.value):u=l[h],n=o(p?h:z+(M?".":"#")+h,e.forced),!n&&void 0!==u){if(typeof f==typeof u)continue;a(f,u)}(e.sham||u&&u.sham)&&i(f,"sham",!0),C(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var c=n(4374),r=Function.prototype,i=r.apply,C=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(c?C.bind(i):function(){return C.apply(i,arguments)})},4374:function(e,t,n){var c=n(7293);e.exports=!c((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var c=n(4374),r=Function.prototype.call;e.exports=c?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){var c=n(9781),r=n(2597),i=Function.prototype,C=c&&Object.getOwnPropertyDescriptor,s=r(i,"name"),a=s&&"something"===function(){}.name,o=s&&(!c||c&&C(i,"name").configurable);e.exports={EXISTS:s,PROPER:a,CONFIGURABLE:o}},1702:function(e,t,n){var c=n(4374),r=Function.prototype,i=r.bind,C=r.call,s=c&&i.bind(C,C);e.exports=c?function(e){return e&&s(e)}:function(e){return e&&function(){return C.apply(e,arguments)}}},5005:function(e,t,n){var c=n(7854),r=n(614),i=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(c[e]):c[e]&&c[e][t]}},8173:function(e,t,n){var c=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:c(n)}},7854:function(e,t,n){var c=function(e){return e&&e.Math==Math&&e};e.exports=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var c=n(1702),r=n(7908),i=c({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(r(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var c=n(5005);e.exports=c("document","documentElement")},4664:function(e,t,n){var c=n(9781),r=n(7293),i=n(317);e.exports=!c&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var c=n(7854),r=n(1702),i=n(7293),C=n(4326),s=c.Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==C(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var c=n(614),r=n(111),i=n(7674);e.exports=function(e,t,n){var C,s;return i&&c(C=t.constructor)&&C!==n&&r(s=C.prototype)&&s!==n.prototype&&i(e,s),e}},2788:function(e,t,n){var c=n(1702),r=n(614),i=n(5465),C=c(Function.toString);r(i.inspectSource)||(i.inspectSource=function(e){return C(e)}),e.exports=i.inspectSource},8340:function(e,t,n){var c=n(111),r=n(8880);e.exports=function(e,t){c(t)&&"cause"in t&&r(e,"cause",t.cause)}},9909:function(e,t,n){var c,r,i,C=n(8536),s=n(7854),a=n(1702),o=n(111),l=n(8880),h=n(2597),u=n(5465),f=n(6200),d=n(3501),z="Object already initialized",p=s.TypeError,M=s.WeakMap,m=function(e){return i(e)?r(e):c(e,{})},L=function(e){return function(t){var n;if(!o(t)||(n=r(t)).type!==e)throw p("Incompatible receiver, "+e+" required");return n}};if(C||u.state){var v=u.state||(u.state=new M),V=a(v.get),H=a(v.has),g=a(v.set);c=function(e,t){if(H(v,e))throw new p(z);return t.facade=e,g(v,e,t),t},r=function(e){return V(v,e)||{}},i=function(e){return H(v,e)}}else{var y=f("state");d[y]=!0,c=function(e,t){if(h(e,y))throw new p(z);return t.facade=e,l(e,y,t),t},r=function(e){return h(e,y)?e[y]:{}},i=function(e){return h(e,y)}}e.exports={set:c,get:r,has:i,enforce:m,getterFor:L}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var c=n(7293),r=n(614),i=/#|\.prototype\./,C=function(e,t){var n=a[s(e)];return n==l||n!=o&&(r(t)?c(t):!!t)},s=C.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=C.data={},o=C.NATIVE="N",l=C.POLYFILL="P";e.exports=C},111:function(e,t,n){var c=n(614);e.exports=function(e){return"object"==typeof e?null!==e:c(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var c=n(7854),r=n(5005),i=n(614),C=n(7976),s=n(3307),a=c.Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&C(t.prototype,a(e))}},6244:function(e,t,n){var c=n(7466);e.exports=function(e){return c(e.length)}},6339:function(e,t,n){var c=n(7293),r=n(614),i=n(2597),C=n(9781),s=n(6530).CONFIGURABLE,a=n(2788),o=n(9909),l=o.enforce,h=o.get,u=Object.defineProperty,f=C&&!c((function(){return 8!==u((function(){}),"length",{value:8}).length})),d=String(String).split("String"),z=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||s&&e.name!==t)&&u(e,"name",{value:t,configurable:!0}),f&&n&&i(n,"arity")&&e.length!==n.arity&&u(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?C&&u(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var c=l(e);return i(c,"source")||(c.source=d.join("string"==typeof t?t:"")),e};Function.prototype.toString=z((function(){return r(this)&&h(this).source||a(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var c=+e;return(c>0?n:t)(c)}},133:function(e,t,n){var c=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&c&&c<41}))},8536:function(e,t,n){var c=n(7854),r=n(614),i=n(2788),C=c.WeakMap;e.exports=r(C)&&/native code/.test(i(C))},6277:function(e,t,n){var c=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:c(e)}},30:function(e,t,n){var c,r=n(9670),i=n(6048),C=n(748),s=n(3501),a=n(490),o=n(317),l=n(6200),h=">",u="<",f="prototype",d="script",z=l("IE_PROTO"),p=function(){},M=function(e){return u+d+h+e+u+"/"+d+h},m=function(e){e.write(M("")),e.close();var t=e.parentWindow.Object;return e=null,t},L=function(){var e,t=o("iframe"),n="java"+d+":";return t.style.display="none",a.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(M("document.F=Object")),e.close(),e.F},v=function(){try{c=new ActiveXObject("htmlfile")}catch(t){}v="undefined"!=typeof document?document.domain&&c?m(c):L():m(c);var e=C.length;while(e--)delete v[f][C[e]];return v()};s[z]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p[f]=r(e),n=new p,p[f]=null,n[z]=e):n=v(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var c=n(9781),r=n(3353),i=n(3070),C=n(9670),s=n(5656),a=n(1956);t.f=c&&!r?Object.defineProperties:function(e,t){C(e);var n,c=s(t),r=a(t),o=r.length,l=0;while(o>l)i.f(e,n=r[l++],c[n]);return e}},3070:function(e,t,n){var c=n(7854),r=n(9781),i=n(4664),C=n(3353),s=n(9670),a=n(4948),o=c.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",f="configurable",d="writable";t.f=r?C?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var c=h(e,t);c&&c[d]&&(e[t]=n.value,n={configurable:f in n?n[f]:c[f],enumerable:u in n?n[u]:c[u],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(c){}if("get"in n||"set"in n)throw o("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var c=n(9781),r=n(6916),i=n(5296),C=n(9114),s=n(5656),a=n(4948),o=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=c?h:function(e,t){if(e=s(e),t=a(t),l)try{return h(e,t)}catch(n){}if(o(e,t))return C(!r(i.f,e,t),e[t])}},8006:function(e,t,n){var c=n(6324),r=n(748),i=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return c(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var c=n(7854),r=n(2597),i=n(614),C=n(7908),s=n(6200),a=n(8544),o=s("IE_PROTO"),l=c.Object,h=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=C(e);if(r(t,o))return t[o];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},7976:function(e,t,n){var c=n(1702);e.exports=c({}.isPrototypeOf)},6324:function(e,t,n){var c=n(1702),r=n(2597),i=n(5656),C=n(1318).indexOf,s=n(3501),a=c([].push);e.exports=function(e,t){var n,c=i(e),o=0,l=[];for(n in c)!r(s,n)&&r(c,n)&&a(l,n);while(t.length>o)r(c,n=t[o++])&&(~C(l,n)||a(l,n));return l}},1956:function(e,t,n){var c=n(6324),r=n(748);e.exports=Object.keys||function(e){return c(e,r)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,r=c&&!n.call({1:2},1);t.f=r?function(e){var t=c(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var c=n(1702),r=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=c(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(C){}return function(n,c){return r(n),i(c),t?e(n,c):n.__proto__=c,n}}():void 0)},2140:function(e,t,n){var c=n(7854),r=n(6916),i=n(614),C=n(111),s=c.TypeError;e.exports=function(e,t){var n,c;if("string"===t&&i(n=e.toString)&&!C(c=r(n,e)))return c;if(i(n=e.valueOf)&&!C(c=r(n,e)))return c;if("string"!==t&&i(n=e.toString)&&!C(c=r(n,e)))return c;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var c=n(5005),r=n(1702),i=n(8006),C=n(5181),s=n(9670),a=r([].concat);e.exports=c("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=C.f;return n?a(t,n(e)):t}},2626:function(e,t,n){var c=n(3070).f;e.exports=function(e,t,n){n in e||c(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e,t,n){var c=n(7854),r=c.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},6200:function(e,t,n){var c=n(2309),r=n(9711),i=c("keys");e.exports=function(e){return i[e]||(i[e]=r(e))}},5465:function(e,t,n){var c=n(7854),r=n(3072),i="__core-js_shared__",C=c[i]||r(i,{});e.exports=C},2309:function(e,t,n){var c=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.7",mode:c?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var c=n(9303),r=Math.max,i=Math.min;e.exports=function(e,t){var n=c(e);return n<0?r(n+t,0):i(n,t)}},5656:function(e,t,n){var c=n(8361),r=n(4488);e.exports=function(e){return c(r(e))}},9303:function(e,t,n){var c=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:c(t)}},7466:function(e,t,n){var c=n(9303),r=Math.min;e.exports=function(e){return e>0?r(c(e),9007199254740991):0}},7908:function(e,t,n){var c=n(7854),r=n(4488),i=c.Object;e.exports=function(e){return i(r(e))}},4590:function(e,t,n){var c=n(7854),r=n(3002),i=c.RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},3002:function(e,t,n){var c=n(7854),r=n(9303),i=c.RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},7593:function(e,t,n){var c=n(7854),r=n(6916),i=n(111),C=n(2190),s=n(8173),a=n(2140),o=n(5112),l=c.TypeError,h=o("toPrimitive");e.exports=function(e,t){if(!i(e)||C(e))return e;var n,c=s(e,h);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||C(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var c=n(7593),r=n(2190);e.exports=function(e){var t=c(e,"string");return r(t)?t:t+""}},1694:function(e,t,n){var c=n(5112),r=c("toStringTag"),i={};i[r]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var c=n(7854),r=n(648),i=c.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e,t,n){var c=n(7854),r=c.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},9711:function(e,t,n){var c=n(1702),r=0,i=Math.random(),C=c(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+C(++r+i,36)}},3307:function(e,t,n){var c=n(133);e.exports=c&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var c=n(9781),r=n(7293);e.exports=c&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var c=n(7854),r=n(2309),i=n(2597),C=n(9711),s=n(133),a=n(3307),o=r("wks"),l=c.Symbol,h=l&&l["for"],u=a?l:l&&l.withoutSetter||C;e.exports=function(e){if(!i(o,e)||!s&&"string"!=typeof o[e]){var t="Symbol."+e;s&&i(l,e)?o[e]=l[e]:o[e]=a&&h?h(t):u(t)}return o[e]}},9191:function(e,t,n){"use strict";var c=n(5005),r=n(2597),i=n(8880),C=n(7976),s=n(7674),a=n(9920),o=n(2626),l=n(9587),h=n(6277),u=n(8340),f=n(7741),d=n(2914),z=n(9781),p=n(1913);e.exports=function(e,t,n,M){var m="stackTraceLimit",L=M?2:1,v=e.split("."),V=v[v.length-1],H=c.apply(null,v);if(H){var g=H.prototype;if(!p&&r(g,"cause")&&delete g.cause,!n)return H;var y=c("Error"),b=t((function(e,t){var n=h(M?t:e,void 0),c=M?new H(e):new H;return void 0!==n&&i(c,"message",n),d&&i(c,"stack",f(c.stack,2)),this&&C(g,this)&&l(c,this,b),arguments.length>L&&u(c,arguments[L]),c}));if(b.prototype=g,"Error"!==V?s?s(b,y):a(b,y,{name:!0}):z&&m in H&&(o(b,H,m),o(b,H,"prepareStackTrace")),a(b,H),!p)try{g.name!==V&&i(g,"name",V),g.constructor=b}catch(w){}return b}}},2262:function(e,t,n){"use strict";var c=n(2109),r=n(7908),i=n(6244),C=n(9303),s=n(1223);c({target:"Array",proto:!0},{at:function(e){var t=r(this),n=i(t),c=C(e),s=c>=0?c:n+c;return s<0||s>=n?void 0:t[s]}}),s("at")},6699:function(e,t,n){"use strict";var c=n(2109),r=n(1318).includes,i=n(7293),C=n(1223),s=i((function(){return!Array(1).includes()}));c({target:"Array",proto:!0,forced:s},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),C("includes")},1703:function(e,t,n){var c=n(2109),r=n(7854),i=n(2104),C=n(9191),s="WebAssembly",a=r[s],o=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=C(e,t,o),c({global:!0,constructor:!0,arity:1,forced:o},n)},h=function(e,t){if(a&&a[e]){var n={};n[e]=C(s+"."+e,t,o),c({target:s,stat:!0,constructor:!0,arity:1,forced:o},n)}};l("Error",(function(e){return function(t){return i(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),l("URIError",(function(e){return function(t){return i(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},4506:function(e,t,n){"use strict";var c=n(2109),r=n(1702),i=n(4488),C=n(9303),s=n(1340),a=n(7293),o=r("".charAt),l=a((function(){return"\ud842"!=="𠮷".at(-2)}));c({target:"String",proto:!0,forced:l},{at:function(e){var t=s(i(this)),n=t.length,c=C(e),r=c>=0?c:n+c;return r<0||r>=n?void 0:o(t,r)}})},8675:function(e,t,n){"use strict";var c=n(260),r=n(6244),i=n(9303),C=c.aTypedArray,s=c.exportTypedArrayMethod;s("at",(function(e){var t=C(this),n=r(t),c=i(e),s=c>=0?c:n+c;return s<0||s>=n?void 0:t[s]}))},3462:function(e,t,n){"use strict";var c=n(7854),r=n(6916),i=n(260),C=n(6244),s=n(4590),a=n(7908),o=n(7293),l=c.RangeError,h=c.Int8Array,u=h&&h.prototype,f=u&&u.set,d=i.aTypedArray,z=i.exportTypedArrayMethod,p=!o((function(){var e=new Uint8ClampedArray(2);return r(f,e,{length:1,0:3},1),3!==e[1]})),M=p&&i.NATIVE_ARRAY_BUFFER_VIEWS&&o((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));z("set",(function(e){d(this);var t=s(arguments.length>1?arguments[1]:void 0,1),n=a(e);if(p)return r(f,this,n,t);var c=this.length,i=C(n),o=0;if(i+t>c)throw l("Wrong length");while(o<i)this[t+o]=n[o++]}),!p||M)},2801:function(e,t,n){"use strict";var c=n(2109),r=n(5005),i=n(9114),C=n(3070).f,s=n(2597),a=n(5787),o=n(9587),l=n(6277),h=n(3678),u=n(7741),f=n(1913),d="DOMException",z=r("Error"),p=r(d),M=function(){a(this,m);var e=arguments.length,t=l(e<1?void 0:arguments[0]),n=l(e<2?void 0:arguments[1],"Error"),c=new p(t,n),r=z(t);return r.name=d,C(c,"stack",i(1,u(r.stack,1))),o(c,this,M),c},m=M.prototype=p.prototype,L="stack"in z(d),v="stack"in new p(1,2),V=L&&!v;c({global:!0,constructor:!0,forced:f||V},{DOMException:V?M:p});var H=r(d),g=H.prototype;if(g.constructor!==H)for(var y in f||C(g,"constructor",i(1,H)),h)if(s(h,y)){var b=h[y],w=b.s;s(H,w)||C(H,w,i(6,b.c))}},453:function(e,t,n){"use strict";n.d(t,{w9:function(){return Ge},Xb:function(){return ft},h8:function(){return vt},v0:function(){return Lc},aF:function(){return lt},LS:function(){return ut},e5:function(){return dt},w7:function(){return Lt},gQ:function(){return Mt},ck:function(){return pt}});n(1703),n(6699);var c=n(223),r=n(9684);function i(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n}Object.create;Object.create;var C=n(5168),s=n(7142);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o=a,l=new c.LL("auth","Firebase",a()),h=new C.Yd("@firebase/auth");function u(e,...t){h.logLevel<=C["in"].ERROR&&h.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw p(e,...t)}function d(e,...t){return p(e,...t)}function z(e,t,n){const r=Object.assign(Object.assign({},o()),{[t]:n}),i=new c.LL("auth","Firebase",r);return i.create(t,{appName:e.name})}function p(e,...t){if("string"!==typeof e){const n=t[0],c=[...t.slice(1)];return c[0]&&(c[0].appName=e.name),e._errorFactory.create(n,...c)}return l.create(e,...t)}function M(e,t,...n){if(!e)throw p(t,...n)}function m(e){const t="INTERNAL ASSERTION FAILED: "+e;throw u(t),new Error(t)}function L(e,t){e||m(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new Map;function V(e){L(e instanceof Function,"Expected a class definition");let t=v.get(e);return t?(L(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,v.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,c.vZ)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function g(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],c=(Array.isArray(n)?n:[n]).map(V);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(c,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===w()||"https:"===w()}function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(b()||(0,c.ru)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,L(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,c.uI)()||(0,c.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){L(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},T=new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,r,i={}){return R(e,i,(async()=>{let i={},C={};r&&("GET"===t?C=r:i={body:JSON.stringify(r)});const s=(0,c.xO)(Object.assign({key:e.config.apiKey},C)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),I.fetch()(P(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function R(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new D(e),c=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await c.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(c.ok&&!("errorMessage"in i))return i;{const t=c.ok?i.errorMessage:i.error.message,[n,C]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(C)throw z(e,s,C);f(e,s)}}catch(i){if(i instanceof c.ZR)throw i;f(e,"network-request-failed")}}async function N(e,t,n,c,r={}){const i=await x(e,t,n,c,r);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function P(e,t,n,c){const r=`${t}${n}?${c}`;return e.config.emulator?_(e.config,r):`${e.config.apiScheme}://${r}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(d(this.auth,"network-request-failed"))),T.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const c={appName:e.name};n.email&&(c.email=n.email),n.phoneNumber&&(c.phoneNumber=n.phoneNumber);const r=d(e,t,c);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=(0,c.m9)(e),r=await n.getIdToken(t),i=K(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const C="object"===typeof i.firebase?i.firebase:void 0,s=null===C||void 0===C?void 0:C["sign_in_provider"];return{claims:i,token:r,authTime:q($(i.auth_time)),issuedAtTime:q($(i.iat)),expirationTime:q($(i.exp)),signInProvider:s||null,signInSecondFactor:(null===C||void 0===C?void 0:C["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function K(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return u("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,c.tV)(n);return e?JSON.parse(e):(u("Failed to decode base64 JWT payload"),null)}catch(i){return u("Caught error parsing JWT payload as JSON",i),null}}function W(e){const t=K(e);return M(t,"internal-error"),M("undefined"!==typeof t.exp,"internal-error"),M("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof c.ZR&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,c=await e.getIdToken(),r=await G(e,F(n,{idToken:c}));M(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const C=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],s=ee(e.providerData,C),a=e.isAnonymous,o=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!a&&o,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,c.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await R(e,{},(async()=>{const n=(0,c.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,C=P(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",I.fetch()(C,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M("undefined"!==typeof e.idToken,"internal-error"),M("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:c,expiresIn:r}=await ne(e,t);this.updateTokensAndExpiration(n,c,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:c,expirationTime:r}=t,i=new ce;return n&&(M("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),c&&(M("string"===typeof c,"internal-error",{appName:e}),i.accessToken=c),r&&(M("number"===typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){M("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:c}=e,r=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=c,this.accessToken=c.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new J(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,c,r,i,C,s,a,o;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(c=t.email)&&void 0!==c?c:void 0,u=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,d=null!==(C=t.tenantId)&&void 0!==C?C:void 0,z=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,p=null!==(a=t.createdAt)&&void 0!==a?a:void 0,m=null!==(o=t.lastLoginAt)&&void 0!==o?o:void 0,{uid:L,emailVerified:v,isAnonymous:V,providerData:H,stsTokenManager:g}=t;M(L&&g,e,"internal-error");const y=ce.fromJSON(this.name,g);M("string"===typeof L,e,"internal-error"),re(l,e.name),re(h,e.name),M("boolean"===typeof v,e,"internal-error"),M("boolean"===typeof V,e,"internal-error"),re(u,e.name),re(f,e.name),re(d,e.name),re(z,e.name),re(p,e.name),re(m,e.name);const b=new ie({uid:L,auth:e,email:h,emailVerified:v,displayName:l,isAnonymous:V,photoURL:f,phoneNumber:u,tenantId:d,stsTokenManager:y,createdAt:p,lastLoginAt:m});return H&&Array.isArray(H)&&(b.providerData=H.map((e=>Object.assign({},e)))),z&&(b._redirectEventId=z),b}static async _fromIdTokenResponse(e,t,n=!1){const c=new ce;c.updateFromServerResponse(t);const r=new ie({uid:t.localId,auth:e,stsTokenManager:c,isAnonymous:n});return await Q(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ce.type="NONE";const se=Ce;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class oe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:c,name:r}=this.auth;this.fullUserKey=ae(this.userKey,c.apiKey,r),this.fullPersistenceKey=ae("persistence",c.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new oe(V(se),e,n);const c=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=c[0]||V(se);const i=ae(n,e.config.apiKey,e.name);let C=null;for(const o of t)try{const t=await o._get(i);if(t){const n=ie._fromJSON(e,t);o!==r&&(C=n),r=o;break}}catch(a){}const s=c.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],C&&await r._set(i,C.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(a){}}))),new oe(r,e,n)):new oe(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pe(t))return"Blackberry";if(Me(t))return"Webos";if(ue(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ze(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,c.z$)()){return/firefox\//i.test(e)}function ue(e=(0,c.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,c.z$)()){return/crios\//i.test(e)}function de(e=(0,c.z$)()){return/iemobile/i.test(e)}function ze(e=(0,c.z$)()){return/android/i.test(e)}function pe(e=(0,c.z$)()){return/blackberry/i.test(e)}function Me(e=(0,c.z$)()){return/webos/i.test(e)}function me(e=(0,c.z$)()){return/iphone|ipad|ipod/i.test(e)}function Le(e=(0,c.z$)()){var t;return me(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ve(){return(0,c.w1)()&&10===document.documentMode}function Ve(e=(0,c.z$)()){return me(e)||ze(e)||Me(e)||pe(e)||/windows phone/i.test(e)||de(e)}function He(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t=[]){let n;switch(e){case"Browser":n=le((0,c.z$)());break;case"Worker":n=`${le((0,c.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,c)=>{try{const c=e(t);n(c)}catch(r){c(r)}}));n.onAbort=t,this.queue.push(n);const c=this.queue.length-1;return()=>{this.queue[c]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(c){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new ye(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=V(t)),this._initializationPromise=this.queue((async()=>{var n,c;if(!this._deleted&&(this.persistenceManager=await oe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(c=this.currentUser)||void 0===c?void 0:c.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let c=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===c||void 0===c?void 0:c._redirectEventId,C=await this.tryRedirectSignIn(e);n&&n!==i||!(null===C||void 0===C?void 0:C.user)||(c=C.user,r=!0)}if(!c)return this.directlySetCurrentUser(null);if(!c._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(c)}catch(i){c=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return c?this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,c.m9)(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(V(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new c.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&V(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await oe.create(this,[V(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,c){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return M(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,c):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ge(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function we(e){return(0,c.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,c.ne)((e=>this.observer=e))}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return m("not implemented")}_getIdTokenResponse(e){return m("not implemented")}_linkToIdToken(e,t){return m("not implemented")}_getReauthenticationResolver(e){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _e(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}async function Ie(e,t){return x(e,"POST","/v1/accounts:sendOobCode",O(e,t))}async function Ae(e,t){return Ie(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Te(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function Oe(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ke{constructor(e,t,n,c=null){super("password",n),this._email=e,this._password=t,this._tenantId=c}static _fromEmailAndPassword(e,t){return new xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _e(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Te(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="http://localhost";class Pe extends ke{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:c}=t,r=i(t,["providerId","signInMethod"]);if(!n||!c)return null;const C=new Pe(n,c);return C.idToken=r.idToken||void 0,C.accessToken=r.accessToken||void 0,C.secret=r.secret,C.nonce=r.nonce,C.pendingToken=r.pendingToken||null,C}_getIdTokenResponse(e){const t=this.buildRequest();return Re(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Re(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Re(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,c.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function je(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function Ue(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Fe={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,n),Fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends ke{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return je(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:c}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:c}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:c,temporaryProof:r}=e;return n||t||c||r?new Be({verificationId:t,verificationCode:n,phoneNumber:c,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ke(e){const t=(0,c.zd)((0,c.pd)(e))["link"],n=t?(0,c.zd)((0,c.pd)(t))["deep_link_id"]:null,r=(0,c.zd)((0,c.pd)(e))["deep_link_id"],i=r?(0,c.zd)((0,c.pd)(r))["link"]:null;return i||r||n||t||e}class We{constructor(e){var t,n,r,i,C,s;const a=(0,c.zd)((0,c.pd)(e)),o=null!==(t=a["apiKey"])&&void 0!==t?t:null,l=null!==(n=a["oobCode"])&&void 0!==n?n:null,h=$e(null!==(r=a["mode"])&&void 0!==r?r:null);M(o&&l&&h,"argument-error"),this.apiKey=o,this.operation=h,this.code=l,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(C=a["languageCode"])&&void 0!==C?C:null,this.tenantId=null!==(s=a["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=Ke(e);try{return new We(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=We.parseLink(t);return M(n,"argument-error"),xe._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Xe{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(c){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Xe{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch(t){return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com",Ze.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Xe{constructor(){super("twitter.com")}static credential(e,t){return Pe._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return et.credential(t,n)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t){return N(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.TWITTER_SIGN_IN_METHOD="twitter.com",et.PROVIDER_ID="twitter.com";class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,c=!1){const r=await ie._fromIdTokenResponse(e,n,c),i=ct(n),C=new nt({user:r,providerId:i,_tokenResponse:n,operationType:t});return C}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const c=ct(n);return new nt({user:e,providerId:c,_tokenResponse:n,operationType:t})}}function ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends c.ZR{constructor(e,t,n,c){var r;super(t.code,t.message),this.operationType=n,this.user=c,Object.setPrototypeOf(this,rt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,c){return new rt(e,t,n,c)}}function it(e,t,n,c){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw rt._fromErrorAndOperation(e,n,t,c);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t,n=!1){const c=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nt._forOperation(e,"link",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t,n=!1){const{auth:c}=e,r="reauthenticate";try{const i=await G(e,it(c,r,t,e),n);M(i.idToken,c,"internal-error");const C=K(i.idToken);M(C,c,"internal-error");const{sub:s}=C;return M(e.uid===s,c,"user-mismatch"),nt._forOperation(e,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(c,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const c="signIn",r=await it(e,c,t),i=await nt._fromIdTokenResponse(e,c,r);return n||await e._updateCurrentUser(i.user),i}async function ot(e,t){return at(we(e),t)}async function lt(e,t){return st((0,c.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t,n){var c;M((null===(c=n.url)||void 0===c?void 0:c.length)>0,e,"invalid-continue-uri"),M("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n){const r=(0,c.m9)(e),i={requestType:"PASSWORD_RESET",email:t};n&&ht(r,i,n),await Ae(r,i)}async function ft(e,t,n){const c=we(e),r=await tt(c,{returnSecureToken:!0,email:t,password:n}),i=await nt._fromIdTokenResponse(c,"signIn",r);return await c._updateCurrentUser(i.user),i}function dt(e,t,n){return ot((0,c.m9)(e),Ge.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zt(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,c.m9)(e),i=await r.getIdToken(),C={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},s=await G(r,zt(r.auth,C));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Mt(e,t){return mt((0,c.m9)(e),null,t)}async function mt(e,t,n){const{auth:c}=e,r=await e.getIdToken(),i={idToken:r,returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const C=await G(e,Ee(c,i));await e._updateTokensIfNecessary(C,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){return(0,c.m9)(e).signOut()}async function vt(e){return(0,c.m9)(e).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function Ht(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}new WeakMap;const gt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gt,"1"),this.storage.removeItem(gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=(0,c.z$)();return ue(e)||me(e)}const wt=1e3,St=10;class kt extends yt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&He(),this.fallbackToPolling=Ve(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),c=this.localCache[t];n!==c&&e(t,c,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(n);if(e.newValue!==c)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const c=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ve()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(c,St):c()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const c of Array.from(n))c(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kt.type="LOCAL";const Et=kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends yt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_t.type="SESSION";const It=_t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Tt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:c,data:r}=t.data,i=this.handlersMap[c];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:c});const C=Array.from(i).map((async e=>e(t.origin,r))),s=await At(C);t.ports[0].postMessage({status:"done",eventId:n,eventType:c,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e="",t=10){let n="";for(let c=0;c<t;c++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.receivers=[];class xt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const c="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!c)throw new Error("connection_unavailable");let r,i;return new Promise(((C,s)=>{const a=Ot("",20);c.port1.start();const o=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:c,onMessage(e){const t=e;if(t.data.eventId===a)switch(t.data.status){case"ack":clearTimeout(o),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),C(t.data.response);break;default:clearTimeout(o),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),c.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[c.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function Nt(e){Rt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return"undefined"!==typeof Rt()["WorkerGlobalScope"]&&"function"===typeof Rt()["importScripts"]}async function Dt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ut(){return Pt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="firebaseLocalStorageDb",qt=1,Bt="firebaseLocalStorage",$t="fbase_key";class Kt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Wt(e,t){return e.transaction([Bt],t?"readwrite":"readonly").objectStore(Bt)}function Gt(){const e=indexedDB.deleteDatabase(Ft);return new Kt(e).toPromise()}function Yt(){const e=indexedDB.open(Ft,qt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Bt,{keyPath:$t})}catch(c){n(c)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Bt)?t(n):(n.close(),await Gt(),t(await Yt()))}))}))}async function Xt(e,t,n){const c=Wt(e,!0).put({[$t]:t,value:n});return new Kt(c).toPromise()}async function Jt(e,t){const n=Wt(e,!1).get(t),c=await new Kt(n).toPromise();return void 0===c?null:c.value}function Qt(e,t){const n=Wt(e,!0).delete(t);return new Kt(n).toPromise()}const Zt=800,en=3;class tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Yt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>en)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Ut()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dt(),!this.activeServiceWorker)return;this.sender=new xt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yt();return await Xt(e,gt,"1"),await Qt(e,gt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Qt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Wt(e,!1).getAll();return new Kt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:c,value:r}of e)n.add(c),JSON.stringify(this.localCache[c])!==JSON.stringify(r)&&(this.notifyListeners(c,r),t.push(c));for(const c of Object.keys(this.localCache))this.localCache[c]&&!n.has(c)&&(this.notifyListeners(c,null),t.push(c));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const c of Array.from(n))c(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tn.type="LOCAL";const nn=tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function rn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function sn(e){return new Promise(((t,n)=>{const c=document.createElement("script");c.setAttribute("src",e),c.onload=t,c.onerror=e=>{const t=d("internal-error");t.customData=e,n(t)},c.type="text/javascript",c.charset="UTF-8",Cn().appendChild(c)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
an("rcb"),new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on="recaptcha";async function ln(e,t,n){var c;const r=await n.verify();try{let i;if(M("string"===typeof r,e,"argument-error"),M(n.type===on,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){M("enroll"===t.type,e,"internal-error");const n=await Vt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{M("signin"===t.type,e,"internal-error");const n=(null===(c=i.multiFactorHint)||void 0===c?void 0:c.uid)||i.multiFactorUid;M(n,e,"missing-multi-factor-info");const C=await cn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return C.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:i.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e){this.providerId=hn.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return ln(this.auth,e,(0,c.m9)(t))}static credential(e,t){return Be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hn.credentialFromTaggedObject(t)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Be._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function un(e,t){return t?V(t):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.PROVIDER_ID="phone",hn.PHONE_SIGN_IN_METHOD="phone";class fn extends ke{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Re(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dn(e){return at(e.auth,new fn(e),e.bypassAuthState)}function zn(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),st(n,new fn(e),e.bypassAuthState)}async function pn(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),Ct(n,new fn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,n,c,r=!1){this.auth=e,this.resolver=n,this.user=c,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:c,tenantId:r,error:i,type:C}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:c||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(C)(s))}catch(a){this.reject(a)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return zn;default:f(this.auth,"internal-error")}}resolve(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new E(2e3,1e4);class Ln extends Mn{constructor(e,t,n,c,r){super(e,t,c,r),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){L(1===this.filter.length,"Popup operations only handle one event");const e=Ot();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(d(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mn.get())};e()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="pendingRedirect",Vn=new Map;class Hn extends Mn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const t=await gn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(e,t){const n=wn(t),c=bn(e);if(!await c._isAvailable())return!1;const r="true"===await c._get(n);return await c._remove(n),r}function yn(e,t){Vn.set(e._key(),t)}function bn(e){return V(e._redirectPersistence)}function wn(e){return ae(vn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t,n=!1){const c=we(e),r=un(c,t),i=new Hn(c,r,n),C=await i.execute();return C&&!n&&(delete C.user._redirectEventId,await c._persistUserIfCurrent(C.user),await c._setRedirectUser(null,t)),C}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=6e5;class En{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!An(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!In(e)){const c=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(d(this.auth,c))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function In({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function An(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xn=/^https?/;async function Rn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tn(e);for(const c of t)try{if(Nn(c))return}catch(n){}f(e,"unauthorized-domain")}function Nn(e){const t=y(),{protocol:n,hostname:c}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===c?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===c}if(!xn.test(n))return!1;if(On.test(e))return c===e;const r=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(c)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new E(3e4,6e4);function Dn(){const e=Rt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise(((t,n)=>{var c,r,i;function C(){Dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dn(),n(d(e,"network-request-failed"))},timeout:Pn.get()})}if(null===(r=null===(c=Rt().gapi)||void 0===c?void 0:c.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Rt().gapi)||void 0===i?void 0:i.load)){const t=an("iframefcb");return Rt()[t]=()=>{gapi.load?C():n(d(e,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}C()}})).catch((e=>{throw Un=null,e}))}let Un=null;function Fn(e){return Un=Un||jn(e),Un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new E(5e3,15e3),Bn="__/auth/iframe",$n="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gn(e){const t=e.config;M(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_(t,$n):`https://${e.config.authDomain}/${Bn}`,i={apiKey:t.apiKey,appName:e.name,v:r.Jn},C=Wn.get(e.config.apiHost);C&&(i.eid=C);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,c.xO)(i).slice(1)}`}async function Yn(e){const t=await Fn(e),n=Rt().gapi;return M(n,e,"internal-error"),t.open({where:document.body,url:Gn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,c)=>{await t.restyle({setHideOnLeave:!1});const r=d(e,"network-request-failed"),i=Rt().setTimeout((()=>{c(r)}),qn.get());function C(){Rt().clearTimeout(i),n(t)}t.ping(C).then(C,(()=>{c(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Qn=600,Zn="_blank",ec="http://localhost";class tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nc(e,t,n,r=Jn,i=Qn){const C=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const o=Object.assign(Object.assign({},Xn),{width:r.toString(),height:i.toString(),top:C,left:s}),l=(0,c.z$)().toLowerCase();n&&(a=fe(l)?Zn:n),he(l)&&(t=t||ec,o.scrollbars="yes");const h=Object.entries(o).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Le(l)&&"_self"!==a)return cc(t||"",a),new tc(null);const u=window.open(t||"",a,h);M(u,e,"popup-blocked");try{u.focus()}catch(f){}return new tc(u)}function cc(e,t){const n=document.createElement("a");n.href=e,n.target=t;const c=document.createEvent("MouseEvent");c.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(c)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="__/auth/handler",ic="emulator/auth/handler";function Cc(e,t,n,i,C,s){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.Jn,eventId:C};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,c.xb)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Xe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];return`${sc(e)}?${(0,c.xO)(o).slice(1)}`}function sc({config:e}){return e.emulator?_(e,ic):`https://${e.authDomain}/${rc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class oc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=It,this._completeRedirectFn=Sn,this._overrideRedirectResult=yn}async _openPopup(e,t,n,c){var r;L(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=Cc(e,t,n,y(),c);return nc(e,i,Ot())}async _openRedirect(e,t,n,c){return await this._originValidation(e),Nt(Cc(e,t,n,y(),c)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(L(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Yn(e),n=new En(e);return t.register("authEvent",(t=>{M(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const c=n.onEvent(t.authEvent);return{status:c?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ac,{type:ac},(n=>{var c;const r=null===(c=null===n||void 0===n?void 0:n[0])||void 0===c?void 0:c[ac];void 0!==r&&t(!!r),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ve()||ue()||me()}}const lc=oc;class hc{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return m("unexpected MultiFactorSessionType")}}}class uc extends hc{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uc(e)}_finalizeEnroll(e,t,n){return Ht(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fc{constructor(){}static assertion(e){return uc._fromCredential(e)}}fc.FACTOR_ID="phone";var dc="@firebase/auth",zc="0.20.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mc(e){(0,r.Xd)(new s.wA("auth",((t,{options:n})=>{const c=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:C}=c.options;return((t,c)=>{M(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),M(!(null===C||void 0===C?void 0:C.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:C,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ge(e)},s=new be(t,c,r);return g(s,n),s})(c,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const c=e.getProvider("auth-internal");c.initialize()}))),(0,r.Xd)(new s.wA("auth-internal",(e=>{const t=we(e.getProvider("auth").getImmediate());return(e=>new pc(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(dc,zc,Mc(e)),(0,r.KN)(dc,zc,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e=(0,r.Mq)()){const t=(0,r.qX)(e,"auth");return t.isInitialized()?t.getImmediate():H(e,{popupRedirectResolver:lc,persistence:[nn,Et,It]})}mc("Browser")},223:function(e,t,n){"use strict";n.d(t,{$s:function(){return D},BH:function(){return o},L:function(){return s},LL:function(){return H},Mn:function(){return p},ZR:function(){return V},b$:function(){return f},d:function(){return d},eu:function(){return m},hl:function(){return M},m9:function(){return j},ne:function(){return I},pd:function(){return _},ru:function(){return u},tV:function(){return a},uI:function(){return h},vZ:function(){return w},w1:function(){return z},xO:function(){return k},xb:function(){return b},z$:function(){return l},zI:function(){return L},zd:function(){return E}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=function(e){const t=[];let n=0;for(let c=0;c<e.length;c++){let r=e.charCodeAt(c);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&c+1<e.length&&56320===(64512&e.charCodeAt(c+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++c)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,c=0;while(n<e.length){const r=e[n++];if(r<128)t[c++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[c++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=e[n++],C=e[n++],s=e[n++],a=((7&r)<<18|(63&i)<<12|(63&C)<<6|63&s)-65536;t[c++]=String.fromCharCode(55296+(a>>10)),t[c++]=String.fromCharCode(56320+(1023&a))}else{const i=e[n++],C=e[n++];t[c++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&C)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let r=0;r<e.length;r+=3){const t=e[r],i=r+1<e.length,C=i?e[r+1]:0,s=r+2<e.length,a=s?e[r+2]:0,o=t>>2,l=(3&t)<<4|C>>4;let h=(15&C)<<2|a>>6,u=63&a;s||(u=64,i||(h=64)),c.push(n[o],n[l],n[h],n[u])}return c.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],i=r<e.length,C=i?n[e.charAt(r)]:0;++r;const s=r<e.length,a=s?n[e.charAt(r)]:64;++r;const o=r<e.length,l=o?n[e.charAt(r)]:64;if(++r,null==t||null==C||null==a||null==l)throw Error();const h=t<<2|C>>4;if(c.push(h),64!==a){const e=C<<4&240|a>>2;if(c.push(e),64!==l){const e=a<<6&192|l;c.push(e)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},C=function(e){const t=c(e);return i.encodeByteArray(t,!0)},s=function(e){return C(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function u(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function z(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){return l().indexOf("MSAppHost/")>=0}function M(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const c="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(c);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(c),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function L(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class V extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=v,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},c=`${this.service}/${e}`,r=this.errors[e],i=r?g(r,n):"Error",C=`${this.serviceName}: ${i} (${c}).`,s=new V(c,C,n);return s}}function g(e,t){return e.replace(y,((e,n)=>{const c=t[n];return null!=c?String(c):`<${n}?>`}))}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function w(e,t){if(e===t)return!0;const n=Object.keys(e),c=Object.keys(t);for(const r of n){if(!c.includes(r))return!1;const n=e[r],i=t[r];if(S(n)&&S(i)){if(!w(n,i))return!1}else if(n!==i)return!1}for(const r of c)if(!n.includes(r))return!1;return!0}function S(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t=[];for(const[n,c]of Object.entries(e))Array.isArray(c)?c.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(c));return t.length?"&"+t.join("&"):""}function E(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,c]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(c)}})),t}function _(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=new A(e,t);return n.subscribe.bind(n)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let c;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");c=T(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===c.next&&(c.next=O),void 0===c.error&&(c.error=O),void 0===c.complete&&(c.complete=O);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch(e){}})),this.observers.push(c),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function T(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function O(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x=1e3,R=2,N=144e5,P=.5;function D(e,t=x,n=R){const c=t*Math.pow(n,e),r=Math.round(P*c*(Math.random()-.5)*2);return Math.min(N,c+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}},1129:function(e,t,n){n(1703),n(6699),
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v({projectId:e}){return`${f}/projects/${e}/installations`}function V(e){return{token:e.token,requestStatus:2,expiresIn:w(e.expiresIn),creationTime:Date.now()}}async function H(e,t){const n=await t.json(),c=n.error;return m.create("request-failed",{requestName:e,serverCode:c.code,serverMessage:c.message,serverStatus:c.status})}function g({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function y(e,{refreshToken:t}){const n=g(e);return n.append("Authorization",S(t)),n}async function b(e){const t=await e();return t.status>=500&&t.status<600?e():t}function w(e){return Number(e.replace("s","000"))}function S(e){return`${u} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const c=v(e),r=g(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const C={fid:n,authVersion:u,appId:e.appId,sdkVersion:h},s={method:"POST",headers:r,body:JSON.stringify(C)},a=await b((()=>fetch(c,s)));if(a.ok){const e=await a.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:V(e.authToken)};return t}throw await H("Create Installation",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=/^[cdef][\w-]{21}$/,A="";function T(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=O(e);return I.test(n)?n:A}catch(e){return A}}function O(e){const t=_(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Map;function N(e,t){const n=x(e);P(n,t),D(n,t)}function P(e,t){const n=R.get(e);if(n)for(const c of n)c(t)}function D(e,t){const n=U();n&&n.postMessage({key:e,fid:t}),F()}let j=null;function U(){return!j&&"BroadcastChannel"in self&&(j=new BroadcastChannel("[Firebase] FID Change"),j.onmessage=e=>{P(e.data.key,e.data.fid)}),j}function F(){0===R.size&&j&&(j.close(),j=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="firebase-installations-database",B=1,$="firebase-installations-store";let K=null;function W(){return K||(K=(0,s.X3)(q,B,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}})),K}async function G(e,t){const n=x(e),c=await W(),r=c.transaction($,"readwrite"),i=r.objectStore($),C=await i.get(n);return await i.put(t,n),await r.done,C&&C.fid===t.fid||N(e,t.fid),t}async function Y(e){const t=x(e),n=await W(),c=n.transaction($,"readwrite");await c.objectStore($).delete(t),await c.done}async function X(e,t){const n=x(e),c=await W(),r=c.transaction($,"readwrite"),i=r.objectStore($),C=await i.get(n),s=t(C);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||C&&C.fid===s.fid||N(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){let t;const n=await X(e.appConfig,(n=>{const c=Q(n),r=Z(e,c);return t=r.registrationPromise,r.installationEntry}));return n.fid===A?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Q(e){const t=e||{fid:T(),registrationStatus:0};return ce(t)}function Z(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},c=ee(e,n);return{installationEntry:n,registrationPromise:c}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await k(e,t);return G(e.appConfig,n)}catch(n){throw L(n)&&409===n.customData.serverCode?await Y(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await E(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await J(e);return n||t}return t}function ne(e){return X(e,(e=>{if(!e)throw m.create("installation-not-found");return ce(e)}))}function ce(e){return re(e)?{fid:e.fid,registrationStatus:0}:e}function re(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie({appConfig:e,heartbeatServiceProvider:t},n){const c=Ce(e,n),r=y(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const C={installation:{sdkVersion:h,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(C)},a=await b((()=>fetch(c,s)));if(a.ok){const e=await a.json(),t=V(e);return t}throw await H("Generate Auth Token",a)}function Ce(e,{fid:t}){return`${v(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t=!1){let n;const c=await X(e.appConfig,(c=>{if(!he(c))throw m.create("not-registered");const r=c.authToken;if(!t&&ue(r))return c;if(1===r.requestStatus)return n=ae(e,t),c;{if(!navigator.onLine)throw m.create("app-offline");const t=de(c);return n=le(e,t),t}})),r=n?await n:c.authToken;return r}async function ae(e,t){let n=await oe(e.appConfig);while(1===n.authToken.requestStatus)await E(100),n=await oe(e.appConfig);const c=n.authToken;return 0===c.requestStatus?se(e,t):c}function oe(e){return X(e,(e=>{if(!he(e))throw m.create("not-registered");const t=e.authToken;return ze(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function le(e,t){try{const n=await ie(e,t),c=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,c),n}catch(n){if(!L(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await Y(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function ue(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}function de(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ze(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(e){const t=e,{installationEntry:n,registrationPromise:c}=await J(t);return c?c.catch(console.error):se(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t=!1){const n=e;await me(n);const c=await se(n,t);return c.token}async function me(e){const{registrationPromise:t}=await J(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){if(!e||!e.options)throw ve("App Configuration");if(!e.name)throw ve("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ve(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ve(e){return m.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="installations",He="installations-internal",ge=e=>{const t=e.getProvider("app").getImmediate(),n=Le(t),r=(0,c.qX)(t,"heartbeat"),i={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return i},ye=e=>{const t=e.getProvider("app").getImmediate(),n=(0,c.qX)(t,Ve).getImmediate(),r={getId:()=>pe(n),getToken:e=>Me(n,e)};return r};function be(){(0,c.Xd)(new C.wA(Ve,ge,"PUBLIC")),(0,c.Xd)(new C.wA(He,ye,"PRIVATE"))}be(),(0,c.KN)(a,o),(0,c.KN)(a,o,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="analytics",Se="firebase_id",ke="origin",Ee=6e4,_e="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ie="https://www.googletagmanager.com/gtag/js",Ae=new r.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Oe(e,t){const n=document.createElement("script");n.src=`${Ie}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function xe(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Re(e,t,n,c,r,i){const C=c[r];try{if(C)await t[C];else{const e=await Te(n),c=e.find((e=>e.measurementId===r));c&&await t[c.appId]}}catch(s){Ae.error(s)}e("config",r,i)}async function Ne(e,t,n,c,r){try{let i=[];if(r&&r["send_to"]){let e=r["send_to"];Array.isArray(e)||(e=[e]);const c=await Te(n);for(const n of e){const e=c.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){i=[];break}i.push(r)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",c,r||{})}catch(i){Ae.error(i)}}function Pe(e,t,n,c){async function r(r,i,C){try{"event"===r?await Ne(e,t,n,i,C):"config"===r?await Re(e,t,n,c,i,C):e("set",i)}catch(s){Ae.error(s)}}return r}function De(e,t,n,c,r){let i=function(...e){window[c].push(arguments)};return window[r]&&"function"===typeof window[r]&&(i=window[r]),window[r]=Pe(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function je(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ie))return t;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Fe=new i.LL("analytics","Analytics",Ue),qe=30,Be=1e3;class $e{constructor(e={},t=Be){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ke=new $e;function We(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ge(e){var t;const{appId:n,apiKey:c}=e,r={method:"GET",headers:We(c)},i=_e.replace("{app-id}",n),C=await fetch(i,r);if(200!==C.status&&304!==C.status){let e="";try{const n=await C.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(s){}throw Fe.create("config-fetch-failed",{httpStatus:C.status,responseMessage:e})}return C.json()}async function Ye(e,t=Ke,n){const{appId:c,apiKey:r,measurementId:i}=e.options;if(!c)throw Fe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:c};throw Fe.create("no-api-key")}const C=t.getThrottleMetadata(c)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Ze;return setTimeout((async()=>{s.abort()}),void 0!==n?n:Ee),Xe({appId:c,apiKey:r,measurementId:i},C,s,t)}async function Xe(e,{throttleEndTimeMillis:t,backoffCount:n},c,r=Ke){const{appId:C,measurementId:s}=e;try{await Je(c,t)}catch(a){if(s)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:C,measurementId:s};throw a}try{const t=await Ge(e);return r.deleteThrottleMetadata(C),t}catch(a){if(!Qe(a)){if(r.deleteThrottleMetadata(C),s)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:C,measurementId:s};throw a}const t=503===Number(a.customData.httpStatus)?(0,i.$s)(n,r.intervalMillis,qe):(0,i.$s)(n,r.intervalMillis),o={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return r.setThrottleMetadata(C,o),Ae.debug(`Calling attemptFetch again in ${t} millis`),Xe(e,o,c,r)}}function Je(e,t){return new Promise(((n,c)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(i),c(Fe.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Qe(e){if(!(e instanceof i.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Ze{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(){if(!(0,i.hl)())return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,i.eu)()}catch(e){return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function tt(e,t,n,c,r,i,C){var s;const a=Ye(e);a.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ae.error(e))),t.push(a);const o=et().then((e=>e?c.getId():void 0)),[l,h]=await Promise.all([a,o]);je()||Oe(i,l.measurementId),r("js",new Date);const u=null!==(s=null===C||void 0===C?void 0:C.config)&&void 0!==s?s:{};return u[ke]="firebase",u.update=!0,null!=h&&(u[Se]=h),r("config",l.measurementId,u),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.app=e}_delete(){return delete ct[this.app.options.appId],Promise.resolve()}}let ct={},rt=[];const it={};let Ct,st,at="dataLayer",ot="gtag",lt=!1;function ht(){const e=[];if((0,i.ru)()&&e.push("This is a browser extension environment."),(0,i.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function ut(e,t,n){ht();const c=e.options.appId;if(!c)throw Fe.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Fe.create("no-api-key");Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ct[c])throw Fe.create("already-exists",{id:c});if(!lt){xe(at);const{wrappedGtag:e,gtagCore:t}=De(ct,rt,it,at,ot);st=e,Ct=t,lt=!0}ct[c]=tt(e,rt,it,t,Ct,at,n);const r=new nt(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n,c,r){if(r&&r.global)e("event",n,c);else{const r=await t,i=Object.assign(Object.assign({},c),{send_to:r});e("event",n,i)}}function dt(e=(0,c.Mq)()){e=(0,i.m9)(e);const t=(0,c.qX)(e,we);return t.isInitialized()?t.getImmediate():zt(e)}function zt(e,t={}){const n=(0,c.qX)(e,we);if(n.isInitialized()){const e=n.getImmediate();if((0,i.vZ)(t,n.getOptions()))return e;throw Fe.create("already-initialized")}const r=n.initialize({options:t});return r}function pt(e,t,n,c){e=(0,i.m9)(e),ft(st,ct[e.app.options.appId],t,n,c).catch((e=>Ae.error(e)))}const Mt="@firebase/analytics",mt="0.7.9";function Lt(){function e(e){try{const t=e.getProvider(we).getImmediate();return{logEvent:(e,n,c)=>pt(t,e,n,c)}}catch(t){throw Fe.create("interop-component-reg-failed",{reason:t})}}(0,c.Xd)(new C.wA(we,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),c=e.getProvider("installations-internal").getImmediate();return ut(n,c,t)}),"PUBLIC")),(0,c.Xd)(new C.wA("analytics-internal",e,"PRIVATE")),(0,c.KN)(Mt,mt),(0,c.KN)(Mt,mt,"esm2017")}Lt()},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return c.ZF}});var c=n(9684),r="firebase",i="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,c.KN)(r,i,"app")},5866:function(e,t,n){"use strict";n.d(t,{LS:function(){return c.LS},Xb:function(){return c.Xb},aF:function(){return c.aF},e5:function(){return c.e5},gQ:function(){return c.gQ},h8:function(){return c.h8},v0:function(){return c.v0},w7:function(){return c.w7},w9:function(){return c.w9}});var c=n(453)},6035:function(e,t,n){"use strict";n.d(t,{hJ:function(){return vl},oe:function(){return dh},JU:function(){return Vl},QT:function(){return oh},PL:function(){return hh},ad:function(){return yl},IO:function(){return Ch},pl:function(){return uh},r7:function(){return fh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var c,r=n(9684),i=n(7142),C=n(5168),s=n(223),a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},o={},l=l||{},h=a||self;function u(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function d(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function z(e){return Object.prototype.hasOwnProperty.call(e,p)&&e[p]||(e[p]=++M)}var p="closure_uid_"+(1e9*Math.random()>>>0),M=0;function m(e,t,n){return e.call.apply(e.bind,arguments)}function L(e,t,n){if(!e)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,c),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function v(e,t,n){return v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:L,v.apply(null,arguments)}function V(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function H(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,c){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}function g(){this.s=this.s,this.o=this.o}var y=0,b={};g.prototype.s=!1,g.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=y)){var e=z(this);delete b[e]}},g.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},S=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const c=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<c;i++)i in r&&t.call(n,r[i],i,e)};function k(e){e:{var t=Kn;const n=e.length,c="string"===typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in c&&t.call(void 0,c[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function E(e){return Array.prototype.concat.apply([],arguments)}function _(e){const t=e.length;if(0<t){const n=Array(t);for(let c=0;c<t;c++)n[c]=e[c];return n}return[]}function I(e){return/^[\s\xa0]*$/.test(e)}var A,T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function O(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var R=h.navigator;if(R){var N=R.userAgent;if(N){A=N;break e}}A=""}function P(e,t,n){for(const c in e)t.call(n,e[c],c,e)}function D(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(e,t){let n,c;for(let r=1;r<arguments.length;r++){for(n in c=arguments[r],c)e[n]=c[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}}function F(e){return F[" "](e),e}function q(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=u;var B,$=O(A,"Opera"),K=O(A,"Trident")||O(A,"MSIE"),W=O(A,"Edge"),G=W||K,Y=O(A,"Gecko")&&!(O(A.toLowerCase(),"webkit")&&!O(A,"Edge"))&&!(O(A,"Trident")||O(A,"MSIE"))&&!O(A,"Edge"),X=O(A.toLowerCase(),"webkit")&&!O(A,"Edge");function J(){var e=h.document;return e?e.documentMode:void 0}e:{var Q="",Z=function(){var e=A;return Y?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):X?/WebKit\/(\S+)/.exec(e):$?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Z&&(Q=Z?Z[1]:""),K){var ee=J();if(null!=ee&&ee>parseFloat(Q)){B=String(ee);break e}}B=Q}var te,ne={};function ce(){return q((function(){let e=0;const t=T(String(B)).split("."),n=T("9").split("."),c=Math.max(t.length,n.length);for(let C=0;0==e&&C<c;C++){var r=t[C]||"",i=n[C]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;e=x(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||x(0==r[2].length,0==i[2].length)||x(r[2],i[2]),r=r[3],i=i[3]}while(0==e)}return 0<=e}))}if(h.document&&K){var re=J();te=re||(parseInt(B,10)||void 0)}else te=void 0;var ie=te,Ce=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",u,t),h.removeEventListener("test",u,t)}catch(n){}return e}();function se(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ae(e,t){if(se.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Y){e:{try{F(t.nodeName);var r=!0;break e}catch(i){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,c?(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:oe[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ae.Z.h.call(this)}}se.prototype.h=function(){this.defaultPrevented=!0},H(ae,se);var oe={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),he=0;function ue(e,t,n,c,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!c,this.ia=r,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function de(e){this.src=e,this.g={},this.h=0}function ze(e,t){var n=t.type;if(n in e.g){var c,r=e.g[n],i=w(r,t);(c=0<=i)&&Array.prototype.splice.call(r,i,1),c&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function pe(e,t,n,c){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==c)return r}return-1}de.prototype.add=function(e,t,n,c,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var C=pe(e,t,c,r);return-1<C?(t=e[C],n||(t.fa=!1)):(t=new ue(t,this.src,i,!!c,r),t.fa=n,e.push(t)),t};var Me="closure_lm_"+(1e6*Math.random()|0),me={};function Le(e,t,n,c,r){if(c&&c.once)return He(e,t,n,c,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Le(e,t[i],n,c,r);return null}return n=Ee(n),e&&e[le]?e.N(t,n,d(c)?!!c.capture:!!c,r):ve(e,t,n,!1,c,r)}function ve(e,t,n,c,r,i){if(!t)throw Error("Invalid event type");var C=d(r)?!!r.capture:!!r,s=Se(e);if(s||(e[Me]=s=new de(e)),n=s.add(t,n,c,C,i),n.proxy)return n;if(c=Ve(),n.proxy=c,c.src=e,c.listener=n,e.addEventListener)Ce||(r=C),void 0===r&&(r=!1),e.addEventListener(t.toString(),c,r);else if(e.attachEvent)e.attachEvent(be(t.toString()),c);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(c)}return n}function Ve(){function e(n){return t.call(e.src,e.listener,n)}var t=we;return e}function He(e,t,n,c,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)He(e,t[i],n,c,r);return null}return n=Ee(n),e&&e[le]?e.O(t,n,d(c)?!!c.capture:!!c,r):ve(e,t,n,!0,c,r)}function ge(e,t,n,c,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ge(e,t[i],n,c,r);else c=d(c)?!!c.capture:!!c,n=Ee(n),e&&e[le]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=pe(i,n,c,r),-1<n&&(fe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Se(e))&&(t=e.g[t.toString()],e=-1,t&&(e=pe(t,n,c,r)),(n=-1<e?t[e]:null)&&ye(n))}function ye(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[le])ze(t.i,e);else{var n=e.type,c=e.proxy;t.removeEventListener?t.removeEventListener(n,c,e.capture):t.detachEvent?t.detachEvent(be(n),c):t.addListener&&t.removeListener&&t.removeListener(c),(n=Se(t))?(ze(n,e),0==n.h&&(n.src=null,t[Me]=null)):fe(e)}}}function be(e){return e in me?me[e]:me[e]="on"+e}function we(e,t){if(e.ca)e=!0;else{t=new ae(t,this);var n=e.listener,c=e.ia||e.src;e.fa&&ye(e),e=n.call(c,t)}return e}function Se(e){return e=e[Me],e instanceof de?e:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(e){return"function"===typeof e?e:(e[ke]||(e[ke]=function(t){return e.handleEvent(t)}),e[ke])}function _e(){g.call(this),this.i=new de(this),this.P=this,this.I=null}function Ie(e,t){var n,c=e.I;if(c)for(n=[];c;c=c.I)n.push(c);if(e=e.P,c=t.type||t,"string"===typeof t)t=new se(t,e);else if(t instanceof se)t.target=t.target||e;else{var r=t;t=new se(c,e),U(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var C=t.g=n[i];r=Ae(C,c,!0,t)&&r}if(C=t.g=e,r=Ae(C,c,!0,t)&&r,r=Ae(C,c,!1,t)&&r,n)for(i=0;i<n.length;i++)C=t.g=n[i],r=Ae(C,c,!1,t)&&r}function Ae(e,t,n,c){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var C=t[i];if(C&&!C.ca&&C.capture==n){var s=C.listener,a=C.ia||C.src;C.fa&&ze(e.i,C),r=!1!==s.call(a,c)&&r}}return r&&!c.defaultPrevented}H(_e,g),_e.prototype[le]=!0,_e.prototype.removeEventListener=function(e,t,n,c){ge(this,e,t,n,c)},_e.prototype.M=function(){if(_e.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],c=0;c<n.length;c++)fe(n[c]);delete t.g[e],t.h--}}this.I=null},_e.prototype.N=function(e,t,n,c){return this.i.add(String(e),t,!1,n,c)},_e.prototype.O=function(e,t,n,c){return this.i.add(String(e),t,!0,n,c)};var Te=h.JSON.stringify;function Oe(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){h.setTimeout((()=>{throw e}),0)}function je(e,t){Re||Ue(),Fe||(Re(),Fe=!0),qe.add(e,t)}function Ue(){var e=h.Promise.resolve(void 0);Re=function(){e.then(Be)}}var Fe=!1,qe=new xe;function Be(){for(var e;e=Oe();){try{e.h.call(e.g)}catch(n){De(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function $e(e,t){_e.call(this),this.h=e||1,this.g=t||h,this.j=v(this.kb,this),this.l=Date.now()}function Ke(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=v(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=v(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ge(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}H($e,_e),c=$e.prototype,c.da=!1,c.S=null,c.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ie(this,"tick"),this.da&&(Ke(this),this.start()))}},c.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){$e.Z.M.call(this),Ke(this),delete this.g};class Ye extends g{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(e){g.call(this),this.h=e,this.g={}}H(Xe,g);var Je=[];function Qe(e,t,n,c){Array.isArray(n)||(n&&(Je[0]=n.toString()),n=Je);for(var r=0;r<n.length;r++){var i=Le(t,n[r],c||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ze(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ye(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,c,r,i){e.info((function(){if(e.g)if(i)for(var C="",s=i.split("&"),a=0;a<s.length;a++){var o=s[a].split("=");if(1<o.length){var l=o[0];o=o[1];var h=l.split("_");C=2<=h.length&&"type"==h[1]?C+(l+"=")+o+"&":C+(l+"=redacted&")}}else C=null;else C=i;return"XMLHTTP REQ ("+c+") [attempt "+r+"]: "+t+"\n"+n+"\n"+C}))}function nt(e,t,n,c,r,i,C){e.info((function(){return"XMLHTTP RESP ("+c+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+C}))}function ct(e,t,n,c){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+it(e,n)+(c?" "+c:"")}))}function rt(e,t){e.info((function(){return"TIMEOUT: "+t}))}function it(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var c=n[e];if(!(2>c.length)){var r=c[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var C=1;C<r.length;C++)r[C]=""}}}return Te(n)}catch(s){return t}}Xe.prototype.M=function(){Xe.Z.M.call(this),Ze(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var Ct={},st=null;function at(){return st=st||new _e}function ot(e){se.call(this,Ct.Ma,e)}function lt(e){const t=at();Ie(t,new ot(t,e))}function ht(e,t){se.call(this,Ct.STAT_EVENT,e),this.stat=t}function ut(e){const t=at();Ie(t,new ht(t,e))}function ft(e,t){se.call(this,Ct.Na,e),this.size=t}function dt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Ct.Ma="serverreachability",H(ot,se),Ct.STAT_EVENT="statevent",H(ht,se),Ct.Na="timingevent",H(ft,se);var zt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},pt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Mt(){}function mt(e){return e.h||(e.h=e.i())}function Lt(){}Mt.prototype.h=null;var vt,Vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ht(){se.call(this,"d")}function gt(){se.call(this,"c")}function yt(){}function bt(e,t,n,c){this.l=e,this.j=t,this.m=n,this.X=c||1,this.V=new Xe(this),this.P=St,e=G?125:void 0,this.W=new $e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}H(Ht,se),H(gt,se),H(yt,Mt),yt.prototype.g=function(){return new XMLHttpRequest},yt.prototype.i=function(){return{}},vt=new yt;var St=45e3,kt={},Et={};function _t(e,t,n){e.K=1,e.v=tn(Yt(t)),e.s=n,e.U=!0,It(e,null)}function It(e,t){e.F=Date.now(),xt(e),e.A=Yt(e.v);var n=e.A,c=e.X;Array.isArray(c)||(c=[String(c)]),Mn(n.h,"t",c),e.C=0,n=e.l.H,e.h=new wt,e.g=gc(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ye(v(e.Ia,e,e.g),e.O)),Qe(e.V,e.g,"readystatechange",e.gb),t=e.H?D(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),lt(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Tt(e,t,n){let c,r=!0;for(;!e.I&&e.C<n.length;){if(c=Ot(e,n),c==Et){4==t&&(e.o=4,ut(14),r=!1),ct(e.j,e.m,null,"[Incomplete Response]");break}if(c==kt){e.o=4,ut(15),ct(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}ct(e.j,e.m,c,null),jt(e,c)}At(e)&&c!=Et&&c!=kt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ut(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),zc(t),t.L=!0,ut(11))):(ct(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Pt(e))}function Ot(e,t){var n=e.C,c=t.indexOf("\n",n);return-1==c?Et:(n=Number(t.substring(n,c)),isNaN(n)?kt:(c+=1,c+n>t.length?Et:(t=t.substr(c,n),e.C=c+n,t)))}function xt(e){e.Y=Date.now()+e.P,Rt(e,e.P)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=dt(v(e.eb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||mc(e.l,e)}function Dt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.W),Ze(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||bn(n.i,e)))if(n.I=e.N,!e.J&&bn(n.i,e)&&3==n.G){try{var c=n.Ca.g.parse(t)}catch(o){c=null}if(Array.isArray(c)&&3==c.length){var r=c;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Mc(n),ic(n)}dc(n),ut(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=dt(v(n.ab,n),6e3));if(1>=yn(n.i)&&n.ka){try{n.ka()}catch(o){}n.ka=void 0}}else vc(n,11)}else if((e.J||n.g==e)&&Mc(n),!I(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.U=o[0],o=o[1],2==n.G)if("c"==o[0]){n.J=o[1],n.la=o[2];const t=o[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=o[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const l=o[5];null!=l&&"number"===typeof l&&0<l&&(c=1.5*l,n.K=c,n.h.info("backChannelRequestTimeoutMs_="+c)),c=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=c.i;!i.g&&(O(e,"spdy")||O(e,"quic")||O(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(wn(i,i.h),i.h=null))}if(c.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(c.sa=e,en(c.F,c.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),c=n;var C=e;if(c.oa=Hc(c,c.H?c.la:null,c.W),C.J){Sn(c.i,C);var s=C,a=c.K;a&&s.setTimeout(a),s.B&&(Nt(s),xt(s)),c.g=C}else fc(c);0<n.l.length&&ac(n)}else"stop"!=o[0]&&"close"!=o[0]||vc(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?vc(n,7):rc(n):"noop"!=o[0]&&n.j&&n.j.wa(o),n.A=0)}lt(4)}catch(o){}}function Ut(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,c=0;c<n;c++)t.push(e[c]);return t}for(c in t=[],n=0,e)t[n++]=e[c];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)S(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var c=e.length,r=0;r<c;r++)n.push(r)}else for(r in n=[],c=0,e)n[c++]=r;c=Ut(e),r=c.length;for(var i=0;i<r;i++)t.call(void 0,c[i],n&&n[i],e)}}function qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var c=0;c<n;c+=2)this.set(arguments[c],arguments[c+1])}else if(e)if(e instanceof qt)for(n=e.T(),c=0;c<n.length;c++)this.set(n[c],e.get(n[c]));else for(c in e)this.set(c,e[c])}function Bt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var c=e.g[t];$t(e.h,c)&&(e.g[n++]=c),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)c=e.g[t],$t(r,c)||(e.g[n++]=c,r[c]=1),t++;e.g.length=n}}function $t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}c=bt.prototype,c.setTimeout=function(e){this.P=e},c.gb=function(e){e=e.target;const t=this.L;t&&3==Qn(e)?t.l():this.Ia(e)},c.Ia=function(e){try{if(e==this.g)e:{const l=Qn(this.g);var t=this.g.Da();const u=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==t||lt(8==t||0>=u?3:2),Nt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var c=Zn(this.g);e="";var r=c.length,i=4==Qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Pt(this);var C="";break t}this.h.i=new h.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(c[t],{stream:i&&t==r-1});c.splice(0,r),this.h.g+=e,this.C=0,C=this.h.g}else C=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var s,a=this.g;if((s=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(s)){var o=s;break t}}o=null}if(!(n=o)){this.i=!1,this.o=3,ut(12),Dt(this),Pt(this);break e}ct(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Tt(this,l,C),G&&this.i&&3==l&&(Qe(this.V,this.W,"tick",this.fb),this.W.start())):(ct(this.j,this.m,C,null),jt(this,C)),4==l&&Dt(this),this.i&&!this.I&&(4==l?mc(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<C.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Dt(this),Pt(this)}}}catch(l){}},c.fb=function(){if(this.g){var e=Qn(this.g),t=this.g.ga();this.C<t.length&&(Nt(this),Tt(this,e,t),this.i&&4!=e&&xt(this))}},c.cancel=function(){this.I=!0,Dt(this)},c.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(rt(this.j,this.A),2!=this.K&&(lt(3),ut(17)),Dt(this),this.o=2,Pt(this)):Rt(this,this.Y-e)},c=qt.prototype,c.R=function(){Bt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},c.T=function(){return Bt(this),this.g.concat()},c.get=function(e,t){return $t(this.h,e)?this.h[e]:t},c.set=function(e,t){$t(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},c.forEach=function(e,t){for(var n=this.T(),c=0;c<n.length;c++){var r=n[c],i=this.get(r);e.call(t,i,r,this)}};var Kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var c=e[n].indexOf("="),r=null;if(0<=c){var i=e[n].substring(0,c);r=e[n].substring(c+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Gt){this.g=void 0!==t?t:e.g,Xt(this,e.j),this.s=e.s,Jt(this,e.i),Qt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new qt(t.g),n.h=t.h),Zt(this,n),this.o=e.o}else e&&(n=String(e).match(Kt))?(this.g=!!t,Xt(this,n[1]||"",!0),this.s=rn(n[2]||""),Jt(this,n[3]||"",!0),Qt(this,n[4]),this.l=rn(n[5]||"",!0),Zt(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Yt(e){return new Gt(e)}function Xt(e,t,n){e.j=n?rn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Jt(e,t,n){e.i=n?rn(t,!0):t}function Qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Zt(e,t,n){t instanceof fn?(e.h=t,Ln(e.h,e.g)):(n||(t=Cn(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Gt?Yt(e):new Gt(e,void 0)}function cn(e,t,n,c){var r=new Gt(null,void 0);return e&&Xt(r,e),t&&Jt(r,t),n&&Qt(r,n),c&&(r.l=c),r}function rn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Cn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,sn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function sn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Cn(t,an,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Cn(t,an,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Cn(n,"/"==n.charAt(0)?ln:on,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Cn(n,un)),e.join("")};var an=/[#\/\?@]/g,on=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,un=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function dn(e){e.g||(e.g=new qt,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function zn(e,t){dn(e),t=mn(e,t),$t(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,$t(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Bt(e)))}function pn(e,t){return dn(e),t=mn(e,t),$t(e.g.h,t)}function Mn(e,t,n){zn(e,t),0<n.length&&(e.i=null,e.g.set(mn(e,t),_(n)),e.h+=n.length)}function mn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ln(e,t){t&&!e.j&&(dn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(zn(this,t),Mn(this,n,e))}),e)),e.j=t}c=fn.prototype,c.add=function(e,t){dn(this),this.i=null,e=mn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){dn(this),this.g.forEach((function(n,c){S(n,(function(n){e.call(t,n,c,this)}),this)}),this)},c.T=function(){dn(this);for(var e=this.g.R(),t=this.g.T(),n=[],c=0;c<t.length;c++)for(var r=e[c],i=0;i<r.length;i++)n.push(t[c]);return n},c.R=function(e){dn(this);var t=[];if("string"===typeof e)pn(this,e)&&(t=E(t,this.g.get(mn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=E(t,e[n])}return t},c.set=function(e,t){return dn(this),this.i=null,e=mn(this,e),pn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var c=t[n],r=encodeURIComponent(String(c));c=this.R(c);for(var i=0;i<c.length;i++){var C=r;""!==c[i]&&(C+="="+encodeURIComponent(String(c[i]))),e.push(C)}}return this.i=e.join("&")};var vn=class{constructor(e,t){this.h=e,this.g=t}};function Vn(e){this.l=e||Hn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hn=10;function gn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function yn(e){return e.h?1:e.g?e.g.size:0}function bn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function wn(e,t){e.g?e.g.add(t):e.h=t}function Sn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function kn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _(e.i)}function En(){}function _n(){this.g=new En}function In(e,t,n){const c=n||"";try{Ft(e,(function(e,n){let r=e;d(e)&&(r=Te(e)),t.push(c+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(c+"type="+encodeURIComponent("_badmap")),r}}function An(e,t){const n=new et;if(h.Image){const c=new Image;c.onload=V(Tn,n,c,"TestLoadImage: loaded",!0,t),c.onerror=V(Tn,n,c,"TestLoadImage: error",!1,t),c.onabort=V(Tn,n,c,"TestLoadImage: abort",!1,t),c.ontimeout=V(Tn,n,c,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){c.ontimeout&&c.ontimeout()}),1e4),c.src=e}else t(!1)}function Tn(e,t,n,c,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(c)}catch(i){}}function On(e){this.l=e.$b||null,this.j=e.ib||!1}function xn(e,t){_e.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vn.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},En.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},En.prototype.parse=function(e){return h.JSON.parse(e,void 0)},H(On,Mt),On.prototype.g=function(){return new xn(this.l,this.j)},On.prototype.i=function(e){return function(){return e}}({}),H(xn,_e);var Rn=0;function Nn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Dn(e)}function Dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}c=xn.prototype,c.open=function(e,t){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Dn(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Rn},c.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},c.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pn(this):Dn(this),3==this.readyState&&Nn(this)}},c.Ua=function(e){this.g&&(this.response=this.responseText=e,Pn(this))},c.Ta=function(e){this.g&&(this.response=e,Pn(this))},c.ha=function(){this.g&&Pn(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=h.JSON.parse;function Un(e){_e.call(this),this.headers=new qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}H(Un,_e);var Fn="",qn=/^https?$/i,Bn=["POST","PUT"];function $n(e){return K&&ce()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Kn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gn(e),Xn(e)}function Gn(e){e.D||(e.D=!0,Ie(e,"complete"),Ie(e,"error"))}function Yn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Qn(e)||2!=e.ba()))if(e.v&&4==Qn(e))We(e.Fa,0,e);else if(Ie(e,"readystatechange"),4==Qn(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var c;if(c=0===a){var r=String(e.H).match(Kt)[1]||null;if(!r&&h.self&&h.self.location){var i=h.self.location.protocol;r=i.substr(0,i.length-1)}c=!qn.test(r?r.toLowerCase():"")}n=c}if(n)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var C=2<Qn(e)?e.g.statusText:""}catch(s){C=""}e.j=C+" ["+e.ba()+"]",Gn(e)}}finally{Xn(e)}}}function Xn(e,t){if(e.g){Jn(e);const c=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||Ie(e,"ready");try{c.onreadystatechange=r}catch(n){}}}function Jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Qn(e){return e.g?e.g.readyState:0}function Zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ec(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tc(e,t,n){e:{for(c in n){var c=!1;break e}c=!0}c||(n=ec(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nc(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function cc(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nc("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nc("baseRetryDelayMs",5e3,e),this.$a=nc("retryDelaySeedMs",1e4,e),this.Ya=nc("forwardChannelMaxRetries",2,e),this.ra=nc("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Vn(e&&e.concurrentRequestLimit),this.Ca=new _n,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function rc(e){if(Cc(e),3==e.G){var t=e.V++,n=Yt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hc(e,n),t=new bt(e,e.h,t,void 0),t.K=2,t.v=tn(Yt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=gc(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xt(t)}Vc(e)}function ic(e){e.g&&(zc(e),e.g.cancel(),e.g=null)}function Cc(e){ic(e),e.u&&(h.clearTimeout(e.u),e.u=null),Mc(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function sc(e,t){e.l.push(new vn(e.Za++,t)),3==e.G&&ac(e)}function ac(e){gn(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function oc(e,t){return!(yn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=dt(v(e.Ha,e,t),Lc(e,e.C)),e.C++,!0))}function lc(e,t){var n;n=t?t.m:e.V++;const c=Yt(e.F);en(c,"SID",e.J),en(c,"RID",n),en(c,"AID",e.U),hc(e,c),e.o&&e.s&&tc(c,e.o,e.s),n=new bt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=uc(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),wn(e.i,n),_t(n,c,t)}function hc(e,t){e.j&&Ft({},(function(e,n){en(t,n,e)}))}function uc(e,t,n){n=Math.min(e.l.length,n);var c=e.j?v(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let C=0;C<n;C++){let n=r[C].h;const s=r[C].g;if(n-=t,0>n)t=Math.max(0,r[C].h-100),i=!1;else try{In(s,e,"req"+n+"_")}catch(Jc){c&&c(s)}}if(i){c=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,c}function fc(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function dc(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=dt(v(e.Ga,e),Lc(e,e.A)),e.A++,!0)}function zc(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function pc(e){e.g=new bt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Yt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hc(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tc(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Yt(t)),n.s=null,n.U=!0,It(n,e)}function Mc(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function mc(e,t){var n=null;if(e.g==t){Mc(e),zc(e),e.g=null;var c=2}else{if(!bn(e.i,t))return;n=t.D,Sn(e.i,t),c=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==c){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;c=at(),Ie(c,new ft(c,n,t,r)),ac(e)}else fc(e);else if(r=t.o,3==r||0==r&&0<e.I||!(1==c&&oc(e,t)||2==c&&dc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:vc(e,5);break;case 4:vc(e,10);break;case 3:vc(e,6);break;default:vc(e,2)}}function Lc(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function vc(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var c=v(e.jb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xt(n,"https"),tn(n)),An(n.toString(),c)}else ut(2);e.G=0,e.j&&e.j.va(t),Vc(e),Cc(e)}function Vc(e){e.G=0,e.I=-1,e.j&&(0==kn(e.i).length&&0==e.l.length||(e.i.i.length=0,_(e.l),e.l.length=0),e.j.ua())}function Hc(e,t,n){let c=nn(n);if(""!=c.i)t&&Jt(c,t+"."+c.i),Qt(c,c.m);else{const e=h.location;c=cn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&P(e.aa,(function(e,t){en(c,t,e)})),t=e.D,n=e.sa,t&&n&&en(c,t,n),en(c,"VER",e.ma),hc(e,c),c}function gc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Un(new On({ib:!0})):new Un(e.qa),t.L=e.H,t}function yc(){}function bc(){if(K&&!(10<=Number(ie)))throw Error("Environmental error: no available transport.")}function wc(e,t){_e.call(this),this.g=new cc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ec(this)}function Sc(e){Ht.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function kc(){gt.call(this),this.status=1}function Ec(e){this.g=e}c=Un.prototype,c.ea=function(e,t,n,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?mt(this.u):mt(vt),this.g.onreadystatechange=v(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Wn(this,i)}e=n||"";const r=new qt(this.headers);c&&Ft(c,(function(e,t){r.set(t,e)})),c=k(r.T()),n=h.FormData&&e instanceof h.FormData,!(0<=w(Bn,t))||c||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wn(this,i)}},c.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),Xn(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Un.Z.M.call(this)},c.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},c.cb=function(){Yn(this)},c.ba=function(){try{return 2<Qn(this)?this.g.status:-1}catch(e){return-1}},c.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},c.Da=function(){return this.m},c.La=function(){return"string"===typeof this.j?this.j:String(this.j)},c=cc.prototype,c.ma=8,c.G=1,c.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},c.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new bt(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=D(i),U(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var c=this.l[n];if(c="__data__"in c.g&&(c=c.g.__data__,"string"===typeof c)?c.length:void 0,void 0===c)break;if(t+=c,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=uc(this,r,t),n=Yt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hc(this,n),this.o&&i&&tc(n,this.o,i),wn(this.i,r),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),r.$=!0,_t(r,n,null)):_t(r,n,t),this.G=2}}else 3==this.G&&(e?lc(this,e):0==this.l.length||gn(this.i)||lc(this))},c.Ga=function(){if(this.u=null,pc(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=dt(v(this.bb,this),e)}},c.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ut(10),ic(this),pc(this))},c.ab=function(){null!=this.v&&(this.v=null,ic(this),dc(this),ut(19))},c.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ut(2)):(this.h.info("Failed to ping google.com"),ut(1))},c=yc.prototype,c.xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Oa=function(){},bc.prototype.g=function(e,t){return new wc(e,t)},H(wc,_e),wc.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(v(e.hb,e,t))),ut(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Hc(e,null,e.W),ac(e)},wc.prototype.close=function(){rc(this.g)},wc.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,sc(this.g,t)}else this.v?(t={},t.__data__=Te(e),sc(this.g,t)):sc(this.g,e)},wc.prototype.M=function(){this.g.j=null,delete this.j,rc(this.g),delete this.g,wc.Z.M.call(this)},H(Sc,Ht),H(kc,gt),H(Ec,yc),Ec.prototype.xa=function(){Ie(this.g,"a")},Ec.prototype.wa=function(e){Ie(this.g,new Sc(e))},Ec.prototype.va=function(e){Ie(this.g,new kc(e))},Ec.prototype.ua=function(){Ie(this.g,"b")},bc.prototype.createWebChannel=bc.prototype.g,wc.prototype.send=wc.prototype.u,wc.prototype.open=wc.prototype.m,wc.prototype.close=wc.prototype.close,zt.NO_ERROR=0,zt.TIMEOUT=8,zt.HTTP_ERROR=6,pt.COMPLETE="complete",Lt.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",_e.prototype.listen=_e.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var _c=o.createWebChannelTransport=function(){return new bc},Ic=o.getStatEventTarget=function(){return at()},Ac=o.ErrorCode=zt,Tc=o.EventType=pt,Oc=o.Event=Ct,xc=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rc=o.FetchXmlHttpFactory=On,Nc=o.WebChannel=Lt,Pc=o.XhrIo=Un;const Dc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jc.UNAUTHENTICATED=new jc(null),jc.GOOGLE_CREDENTIALS=new jc("google-credentials-uid"),jc.FIRST_PARTY=new jc("first-party-uid"),jc.MOCK_USER=new jc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Uc="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new C.Yd("@firebase/firestore");function qc(){return Fc.logLevel}function Bc(e,...t){if(Fc.logLevel<=C["in"].DEBUG){const n=t.map(Wc);Fc.debug(`Firestore (${Uc}): ${e}`,...n)}}function $c(e,...t){if(Fc.logLevel<=C["in"].ERROR){const n=t.map(Wc);Fc.error(`Firestore (${Uc}): ${e}`,...n)}}function Kc(e,...t){if(Fc.logLevel<=C["in"].WARN){const n=t.map(Wc);Fc.warn(`Firestore (${Uc}): ${e}`,...n)}}function Wc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e="Unexpected state"){const t=`FIRESTORE (${Uc}) INTERNAL ASSERTION FAILED: `+e;throw $c(t),new Error(t)}function Yc(e,t){e||Gc()}function Xc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qc extends s.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jc.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(e){this.t=e,this.currentUser=jc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const c=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Zc;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zc,e.enqueueRetryable((()=>c(this.currentUser)))};const i=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await c(this.currentUser)}))},C=e=>{Bc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>C(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?C(e):(Bc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zc)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Bc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yc("string"==typeof t.accessToken),new er(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yc(null===e||"string"==typeof e),new jc(e)}}class cr{constructor(e,t,n){this.type="FirstParty",this.user=jc.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const c=e.auth.getAuthHeaderValueForFirstParty([]);c&&this.headers.set("Authorization",c),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class rr{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new cr(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ir{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cr{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Bc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Bc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const c=e=>{Bc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>c(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?c(e):Bc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Yc("string"==typeof e.token),this.p=e.token,new ir(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let c=0;c<e;c++)n[c]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr.A=-1;class or{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const c=ar(40);for(let r=0;r<c.length;++r)n.length<20&&c[r]<t&&(n+=e.charAt(c[r]%e.length))}return n}}function lr(e,t){return e<t?-1:e>t?1:0}function hr(e,t,n){return e.length===t.length&&e.every(((e,c)=>n(e,t[c])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Qc(Jc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Qc(Jc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Qc(Jc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qc(Jc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ur.fromMillis(Date.now())}static fromDate(e){return ur.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ur(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?lr(this.nanoseconds,e.nanoseconds):lr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fr(e)}static min(){return new fr(new ur(0,0))}static max(){return new fr(new ur(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gc(),void 0===n?n=e.length-t:n>e.length-t&&Gc(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Mr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let c=0;c<n;c++){const n=e.get(c),r=t.get(c);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class mr extends Mr{construct(e,t,n){return new mr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Qc(Jc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new mr(t)}static emptyPath(){return new mr([])}}const Lr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vr extends Mr{construct(e,t,n){return new vr(e,t,n)}static isValidIdentifier(e){return Lr.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new vr(["__name__"])}static fromServerFormat(e){const t=[];let n="",c=0;const r=()=>{if(0===n.length)throw new Qc(Jc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;c<e.length;){const t=e[c];if("\\"===t){if(c+1===e.length)throw new Qc(Jc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[c+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Qc(Jc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,c+=2}else"`"===t?(i=!i,c++):"."!==t||i?(n+=t,c++):(r(),c++)}if(r(),i)throw new Qc(Jc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vr(t)}static emptyPath(){return new vr([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.fields=e,e.sort(vr.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Hr(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return lr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hr.EMPTY_BYTE_STRING=new Hr("");const gr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(e){if(Yc(!!e),"string"==typeof e){let t=0;const n=gr.exec(e);if(Yc(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const c=new Date(e);return{seconds:Math.floor(c.getTime()/1e3),nanos:t}}return{seconds:br(e.seconds),nanos:br(e.nanos)}}function br(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function wr(e){return"string"==typeof e?Hr.fromBase64String(e):Hr.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kr(e){const t=e.mapValue.fields.__previous_value__;return Sr(t)?kr(t):t}function Er(e){const t=yr(e.mapValue.fields.__local_write_time__.timestampValue);return new ur(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,n,c,r,i,C,s){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=c,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=C,this.useFetchStreams=s}}class Ir{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ir("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){return null==e}function Tr(e){return 0===e&&1/e==-1/0}function Or(e){return"number"==typeof e&&Number.isInteger(e)&&!Tr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.path=e}static fromPath(e){return new xr(mr.fromString(e))}static fromName(e){return new xr(mr.fromString(e).popFirst(5))}static empty(){return new xr(mr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===mr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return mr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xr(new mr(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Sr(e)?4:Xr(e)?9007199254740991:10:Gc()}function Pr(e,t){if(e===t)return!0;const n=Nr(e);if(n!==Nr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Er(e).isEqual(Er(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=yr(e.timestampValue),c=yr(t.timestampValue);return n.seconds===c.seconds&&n.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return wr(e.bytesValue).isEqual(wr(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return br(e.geoPointValue.latitude)===br(t.geoPointValue.latitude)&&br(e.geoPointValue.longitude)===br(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return br(e.integerValue)===br(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=br(e.doubleValue),c=br(t.doubleValue);return n===c?Tr(n)===Tr(c):isNaN(n)&&isNaN(c)}return!1}(e,t);case 9:return hr(e.arrayValue.values||[],t.arrayValue.values||[],Pr);case 10:return function(e,t){const n=e.mapValue.fields||{},c=t.mapValue.fields||{};if(dr(n)!==dr(c))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===c[r]||!Pr(n[r],c[r])))return!1;return!0}(e,t);default:return Gc()}}function Dr(e,t){return void 0!==(e.values||[]).find((e=>Pr(e,t)))}function jr(e,t){if(e===t)return 0;const n=Nr(e),c=Nr(t);if(n!==c)return lr(n,c);switch(n){case 0:case 9007199254740991:return 0;case 1:return lr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=br(e.integerValue||e.doubleValue),c=br(t.integerValue||t.doubleValue);return n<c?-1:n>c?1:n===c?0:isNaN(n)?isNaN(c)?0:-1:1}(e,t);case 3:return Ur(e.timestampValue,t.timestampValue);case 4:return Ur(Er(e),Er(t));case 5:return lr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=wr(e),c=wr(t);return n.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),c=t.split("/");for(let r=0;r<n.length&&r<c.length;r++){const e=lr(n[r],c[r]);if(0!==e)return e}return lr(n.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=lr(br(e.latitude),br(t.latitude));return 0!==n?n:lr(br(e.longitude),br(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],c=t.values||[];for(let r=0;r<n.length&&r<c.length;++r){const e=jr(n[r],c[r]);if(e)return e}return lr(n.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Rr.mapValue&&t===Rr.mapValue)return 0;if(e===Rr.mapValue)return 1;if(t===Rr.mapValue)return-1;const n=e.fields||{},c=Object.keys(n),r=t.fields||{},i=Object.keys(r);c.sort(),i.sort();for(let C=0;C<c.length&&C<i.length;++C){const e=lr(c[C],i[C]);if(0!==e)return e;const t=jr(n[c[C]],r[i[C]]);if(0!==t)return t}return lr(c.length,i.length)}(e.mapValue,t.mapValue);default:throw Gc()}}function Ur(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return lr(e,t);const n=yr(e),c=yr(t),r=lr(n.seconds,c.seconds);return 0!==r?r:lr(n.nanos,c.nanos)}function Fr(e){return qr(e)}function qr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=yr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?wr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,xr.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const c of e.values||[])n?n=!1:t+=",",t+=qr(c);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",c=!0;for(const r of t)c?c=!1:n+=",",n+=`${r}:${qr(e.fields[r])}`;return n+"}"}(e.mapValue):Gc();var t,n}function Br(e){return!!e&&"integerValue"in e}function $r(e){return!!e&&"arrayValue"in e}function Kr(e){return!!e&&"nullValue"in e}function Wr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gr(e){return!!e&&"mapValue"in e}function Yr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Yr(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Yr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xr(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(e){this.value=e}static empty(){return new Jr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yr(t)}setAll(e){let t=vr.emptyPath(),n={},c=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,c),n={},c=[],t=r.popLast()}e?n[r.lastSegment()]=Yr(e):c.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,c)}delete(e){const t=this.field(e.popLast());Gr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let c=t.mapValue.fields[e.get(n)];Gr(c)&&c.mapValue.fields||(c={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=c),t=c}return t.mapValue.fields}applyChanges(e,t,n){zr(t,((t,n)=>e[t]=n));for(const c of n)delete e[c]}clone(){return new Jr(Yr(this.value))}}function Qr(e){const t=[];return zr(e.fields,((e,n)=>{const c=new vr([e]);if(Gr(n)){const e=Qr(n.mapValue).fields;if(0===e.length)t.push(c);else for(const n of e)t.push(c.child(n))}else t.push(c)})),new Vr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zr{constructor(e,t,n,c,r,i){this.key=e,this.documentType=t,this.version=n,this.readTime=c,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Zr(e,0,fr.min(),fr.min(),Jr.empty(),0)}static newFoundDocument(e,t,n){return new Zr(e,1,t,fr.min(),n,0)}static newNoDocument(e,t){return new Zr(e,2,t,fr.min(),Jr.empty(),0)}static newUnknownDocument(e,t){return new Zr(e,3,t,fr.min(),Jr.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ei{constructor(e,t,n,c){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=c}}ei.UNKNOWN_ID=-1;function ti(e,t){const n=e.toTimestamp().seconds,c=e.toTimestamp().nanoseconds+1,r=fr.fromTimestamp(1e9===c?new ur(n+1,0):new ur(n,c));return new ci(r,xr.empty(),t)}function ni(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(fr.min(),xr.empty(),-1)}static max(){return new ci(fr.max(),xr.empty(),-1)}}function ri(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=xr.comparator(e.documentKey,t.documentKey),0!==n?n:lr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.comparator=e,this.root=t||si.EMPTY}insert(e,t){return new ii(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,si.BLACK,null,null))}remove(e){return new ii(this.comparator,this.root.remove(e,this.comparator).copy(null,null,si.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const c=this.comparator(e,n.key);if(0===c)return t+n.left.size;c<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,n,c){this.isReverse=c,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&c&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class si{constructor(e,t,n,c,r){this.key=e,this.value=t,this.color=null!=n?n:si.RED,this.left=null!=c?c:si.EMPTY,this.right=null!=r?r:si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,c,r){return new si(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=c?c:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let c=this;const r=n(e,c.key);return c=r<0?c.copy(null,null,null,c.left.insert(e,t,n),null):0===r?c.copy(null,t,null,null,null):c.copy(null,null,null,null,c.right.insert(e,t,n)),c.fixUp()}removeMin(){if(this.left.isEmpty())return si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,c=this;if(t(e,c.key)<0)c.left.isEmpty()||c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.remove(e,t),null);else{if(c.left.isRed()&&(c=c.rotateRight()),c.right.isEmpty()||c.right.isRed()||c.right.left.isRed()||(c=c.moveRedRight()),0===t(e,c.key)){if(c.right.isEmpty())return si.EMPTY;n=c.right.min(),c=c.copy(n.key,n.value,null,null,c.right.removeMin())}c=c.copy(null,null,null,null,c.right.remove(e,t))}return c.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gc();if(this.right.isRed())throw Gc();const e=this.left.check();if(e!==this.right.check())throw Gc();return e+(this.isRed()?0:1)}}si.EMPTY=null,si.RED=!0,si.BLACK=!1,si.EMPTY=new class{constructor(){this.size=0}get key(){throw Gc()}get value(){throw Gc()}get color(){throw Gc()}get left(){throw Gc()}get right(){throw Gc()}copy(e,t,n,c,r){return this}insert(e,t,n){return new si(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ai{constructor(e){this.comparator=e,this.data=new ii(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const c=n.getNext();if(this.comparator(c.key,e[1])>=0)return;t(c.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oi(this.data.getIterator())}getIteratorFrom(e){return new oi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ai))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,c=n.getNext().key;if(0!==this.comparator(e,c))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ai(this.comparator);return t.data=e,t}}class oi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e,t=null,n=[],c=[],r=null,i=null,C=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=c,this.limit=r,this.startAt=i,this.endAt=C,this.P=null}}function hi(e,t=null,n=[],c=[],r=null,i=null,C=null){return new li(e,t,n,c,r,i,C)}function ui(e){const t=Xc(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Fr(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ar(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Fr(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Fr(e))).join(",")),t.P=e}return t.P}function fi(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Fr(t.value)}`;var t})).join(", ")}]`),Ar(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Fr(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Fr(e))).join(",")),`Target(${t})`}function di(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Si(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],c=t.filters[r],n.op!==c.op||!n.field.isEqual(c.field)||!Pr(n.value,c.value))return!1;var n,c;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ei(e.startAt,t.startAt)&&Ei(e.endAt,t.endAt)}function zi(e){return xr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class pi extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Mi(e,t,n):"array-contains"===t?new Vi(e,n):"in"===t?new Hi(e,n):"not-in"===t?new gi(e,n):"array-contains-any"===t?new yi(e,n):new pi(e,t,n)}static V(e,t,n){return"in"===t?new mi(e,n):new Li(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(jr(t,this.value)):null!==t&&Nr(this.value)===Nr(t)&&this.v(jr(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gc()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Mi extends pi{constructor(e,t,n){super(e,t,n),this.key=xr.fromName(n.referenceValue)}matches(e){const t=xr.comparator(e.key,this.key);return this.v(t)}}class mi extends pi{constructor(e,t){super(e,"in",t),this.keys=vi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Li extends pi{constructor(e,t){super(e,"not-in",t),this.keys=vi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>xr.fromName(e.referenceValue)))}class Vi extends pi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $r(t)&&Dr(t.arrayValue,this.value)}}class Hi extends pi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Dr(this.value.arrayValue,t)}}class gi extends pi{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Dr(this.value.arrayValue,t)}}class yi extends pi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$r(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Dr(this.value.arrayValue,e)))}}class bi{constructor(e,t){this.position=e,this.inclusive=t}}class wi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Si(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ki(e,t,n){let c=0;for(let r=0;r<e.position.length;r++){const i=t[r],C=e.position[r];if(c=i.field.isKeyField()?xr.comparator(xr.fromName(C.referenceValue),n.key):jr(C,n.data.field(i.field)),"desc"===i.dir&&(c*=-1),0!==c)break}return c}function Ei(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Pr(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t=null,n=[],c=[],r=null,i="F",C=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=c,this.limit=r,this.limitType=i,this.startAt=C,this.endAt=s,this.D=null,this.C=null,this.startAt,this.endAt}}function Ii(e,t,n,c,r,i,C,s){return new _i(e,t,n,c,r,i,C,s)}function Ai(e){return new _i(e)}function Ti(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Oi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function xi(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ri(e){return null!==e.collectionGroup}function Ni(e){const t=Xc(e);if(null===t.D){t.D=[];const e=xi(t),n=Oi(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new wi(e)),t.D.push(new wi(vr.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new wi(vr.keyField(),e))}}}return t.D}function Pi(e){const t=Xc(e);if(!t.C)if("F"===t.limitType)t.C=hi(t.path,t.collectionGroup,Ni(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Ni(t)){const t="desc"===r.dir?"asc":"desc";e.push(new wi(r.field,t))}const n=t.endAt?new bi(t.endAt.position,t.endAt.inclusive):null,c=t.startAt?new bi(t.startAt.position,t.startAt.inclusive):null;t.C=hi(t.path,t.collectionGroup,e,t.filters,t.limit,n,c)}return t.C}function Di(e,t,n){return new _i(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ji(e,t){return di(Pi(e),Pi(t))&&e.limitType===t.limitType}function Ui(e){return`${ui(Pi(e))}|lt:${e.limitType}`}function Fi(e){return`Query(target=${fi(Pi(e))}; limitType=${e.limitType})`}function qi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):xr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const c=ki(e,t,n);return e.inclusive?c<=0:c<0}(e.startAt,Ni(e),t))&&!(e.endAt&&!function(e,t,n){const c=ki(e,t,n);return e.inclusive?c>=0:c>0}(e.endAt,Ni(e),t))}(e,t)}function Bi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $i(e){return(t,n)=>{let c=!1;for(const r of Ni(e)){const e=Ki(r,t,n);if(0!==e)return e;c=c||r.field.isKeyField()}return 0}}function Ki(e,t,n){const c=e.field.isKeyField()?xr.comparator(t.key,n.key):function(e,t,n){const c=t.data.field(e),r=n.data.field(e);return null!==c&&null!==r?jr(c,r):Gc()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return c;case"desc":return-1*c;default:return Gc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(t)?"-0":t}}function Gi(e){return{integerValue:""+e}}function Yi(e,t){return Or(t)?Gi(t):Wi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 *