(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[881],{8172:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(e){return!!e&&!!e[T]}function s(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[Z]||!!e.constructor[Z]||l(e)||d(e))}function o(e,t,n){void 0===n&&(n=!1),0===a(e)?(n?Object.keys:J)(e).forEach((function(i){n&&"symbol"==typeof i||t(i,e[i],e)})):e.forEach((function(n,i){return t(i,n,e)}))}function a(e){var t=e[T];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:l(e)?2:d(e)?3:0}function c(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,n){var i=a(e);2===i?e.set(t,n):3===i?(e.delete(t),e.add(n)):e[t]=n}function l(e){return K&&e instanceof Map}function d(e){return R&&e instanceof Set}function f(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=L(e);delete t[T];for(var n=J(t),i=0;i<n.length;i++){var r=n[i],s=t[r];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[r]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){Object.isFrozen(e)||r(e)||!s(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=p),Object.freeze(e),t&&o(e,(function(e,t){return v(t,!0)}),!0))}function p(){i(2)}function b(e){var t=V[e];return t||i(19,e),t}function m(){return E}function j(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function g(e){y(e),e.p.forEach(O),e.p=null}function y(e){e===E&&(E=e.l)}function x(e){return E={p:[],l:E,h:e,m:!0,_:0}}function O(e){var t=e[T];0===t.i||1===t.i?t.j():t.O=!0}function P(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||b("ES5").S(t,e,r),r?(n[T].P&&(g(t),i(4)),s(e)&&(e=w(t,e),t.l||N(t,e)),t.u&&b("Patches").M(n[T],e,t.u,t.s)):e=w(t,n,[]),g(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function w(e,t,n){if(null==(i=t)||"object"!=typeof i||Object.isFrozen(i))return t;var i,r=t[T];if(!r)return o(t,(function(i,s){return k(e,r,t,i,s,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return N(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var s=4===r.i||5===r.i?r.o=h(r.k):r.o;o(s,(function(t,i){return k(e,r,s,t,i,n)})),N(e,s,!1),n&&e.u&&b("Patches").R(r,n,e.u,e.s)}return r.o}function k(e,t,n,i,o,a){if(r(o)){var l=w(e,o,a&&t&&3!==t.i&&!c(t.D,i)?a.concat(i):void 0);if(u(n,i,l),!r(l))return;e.m=!1}if(s(o)&&!Object.isFrozen(o)){if(!e.h.N&&e._<1)return;w(e,o),t&&t.A.l||N(e,o)}}function N(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&v(t,n)}function A(e,t){var n=e[T];return(n?f(n):e)[t]}function S(e){e.P||(e.P=!0,e.l&&S(e.l))}function D(e){e.o||(e.o=h(e.t))}function _(e,t,n){var i=l(t)?b("MapSet").T(t,n):d(t)?b("MapSet").F(t,n):e.g?function(e,t){var n=Array.isArray(e),i={i:n?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},r=i,s=X;n&&(r=[i],s=q);var o=Proxy.revocable(r,s),a=o.revoke,c=o.proxy;return i.k=c,i.j=a,c}(t,n):b("ES5").J(t,n);return(n?n.A:m()).p.push(i),i}function C(e){return r(e)||i(22,e),function e(t){if(!s(t))return t;var n,i=t[T],r=a(t);if(i){if(!i.P&&(i.i<4||!b("ES5").K(i)))return i.t;i.I=!0,n=F(t,r),i.I=!1}else n=F(t,r);return o(n,(function(t,r){i&&function(e,t){return 2===a(e)?e.get(t):e[t]}(i.t,t)===r||u(n,t,e(r))})),3===r?new Set(n):n}(e)}function F(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}function M(){function e(e,t){function n(){this.constructor=e}o(e,t),e.prototype=(n.prototype=t.prototype,new n)}function t(e){e.o||(e.D=new Map,e.o=new Map(e.t))}function n(e){e.o||(e.o=new Set,e.t.forEach((function(t){if(s(t)){var n=_(e.A.h,t,e);e.p.set(t,n),e.o.add(n)}else e.o.add(t)})))}function r(e){e.O&&i(3,JSON.stringify(f(e)))}var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},a=function(){function n(e,t){return this[T]={i:2,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,D:void 0,t:e,k:this,C:!1,O:!1},this}e(n,Map);var i=n.prototype;return Object.defineProperty(i,"size",{get:function(){return f(this[T]).size}}),i.has=function(e){return f(this[T]).has(e)},i.set=function(e,n){var i=this[T];return r(i),f(i).has(e)&&f(i).get(e)===n||(t(i),S(i),i.D.set(e,!0),i.o.set(e,n),i.D.set(e,!0)),this},i.delete=function(e){if(!this.has(e))return!1;var n=this[T];return r(n),t(n),S(n),n.D.set(e,!1),n.o.delete(e),!0},i.clear=function(){var e=this[T];return r(e),t(e),S(e),e.D=new Map,e.o.clear()},i.forEach=function(e,t){var n=this;f(this[T]).forEach((function(i,r){e.call(t,n.get(r),r,n)}))},i.get=function(e){var n=this[T];r(n);var i=f(n).get(e);if(n.I||!s(i))return i;if(i!==n.t.get(e))return i;var o=_(n.A.h,i,n);return t(n),n.o.set(e,o),o},i.keys=function(){return f(this[T]).keys()},i.values=function(){var e,t=this,n=this.keys();return(e={})[$]=function(){return t.values()},e.next=function(){var e=n.next();return e.done?e:{done:!1,value:t.get(e.value)}},e},i.entries=function(){var e,t=this,n=this.keys();return(e={})[$]=function(){return t.entries()},e.next=function(){var e=n.next();if(e.done)return e;var i=t.get(e.value);return{done:!1,value:[e.value,i]}},e},i[$]=function(){return this.entries()},n}(),c=function(){function t(e,t){return this[T]={i:3,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,t:e,k:this,p:new Map,O:!1,C:!1},this}e(t,Set);var i=t.prototype;return Object.defineProperty(i,"size",{get:function(){return f(this[T]).size}}),i.has=function(e){var t=this[T];return r(t),t.o?!!t.o.has(e)||!(!t.p.has(e)||!t.o.has(t.p.get(e))):t.t.has(e)},i.add=function(e){var t=this[T];return r(t),this.has(e)||(n(t),S(t),t.o.add(e)),this},i.delete=function(e){if(!this.has(e))return!1;var t=this[T];return r(t),n(t),S(t),t.o.delete(e)||!!t.p.has(e)&&t.o.delete(t.p.get(e))},i.clear=function(){var e=this[T];return r(e),n(e),S(e),e.o.clear()},i.values=function(){var e=this[T];return r(e),n(e),e.o.values()},i.entries=function(){var e=this[T];return r(e),n(e),e.o.entries()},i.keys=function(){return this.values()},i[$]=function(){return this.values()},i.forEach=function(e,t){for(var n=this.values(),i=n.next();!i.done;)e.call(t,i.value,i.value,this),i=n.next()},t}();!function(e,t){V[e]=t}("MapSet",{T:function(e,t){return new a(e,t)},F:function(e,t){return new c(e,t)}})}n.d(t,{MD:function(){return M}});var I,E,z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,R="undefined"!=typeof Set,U="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=z?Symbol("immer-nothing"):((I={})["immer-nothing"]=!0,I),Z=z?Symbol("immer-draftable"):"__$immer_draftable",T=z?Symbol("immer-state"):"__$immer_state",$="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",J="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,L=Object.getOwnPropertyDescriptors||function(e){var t={};return J(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},V={},X={get:function(e,t){if(t===T)return e;var n=f(e);if(!c(n,t))return function(e,t,n){if(n in t)for(var i=Object.getPrototypeOf(t);i;){var r,s=Object.getOwnPropertyDescriptor(i,n);if(s)return"value"in s?s.value:null===(r=s.get)||void 0===r?void 0:r.call(e.k);i=Object.getPrototypeOf(i)}}(e,n,t);var i=n[t];return e.I||!s(i)?i:i===A(e.t,t)?(D(e),e.o[t]=_(e.A.h,i,e)):i},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,A(f(e),t))&&void 0!==n)return!0;D(e),S(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==A(e.t,t)||t in e.t?(e.D[t]=!1,D(e),S(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=f(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:i.enumerable,value:n[t]}:i},defineProperty:function(){i(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){i(12)}},q={};o(X,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return X.deleteProperty.call(this,e[0],t)},q.set=function(e,t,n){return X.set.call(this,e[0],t,n,e[0])};var B=function(){function e(e){this.g=U,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var r=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=r);for(var i=arguments.length,s=Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return o.produce(e,(function(e){var i;return(i=t).call.apply(i,[n,e].concat(s))}))}}var a;if("function"!=typeof t&&i(6),void 0!==n&&"function"!=typeof n&&i(7),s(e)){var c=x(this),u=_(this,e,void 0),l=!0;try{a=t(u),l=!1}finally{l?g(c):y(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return j(c,n),P(e,c)}),(function(e){throw g(c),e})):(j(c,n),P(a,c))}if(!e||"object"!=typeof e){if((a=t(e))===W)return;return void 0===a&&(a=e),this.N&&v(a,!0),a}i(21,e)},t.produceWithPatches=function(e,t){var n,i,r=this;return"function"==typeof e?function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];return r.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(i))}))}:[this.produce(e,t,(function(e,t){n=e,i=t})),n,i]},t.createDraft=function(e){s(e)||i(8),r(e)&&(e=C(e));var t=x(this),n=_(this,e,void 0);return n[T].C=!0,y(t),n},t.finishDraft=function(e,t){var n=(e&&e[T]).A;return j(n,t),P(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!U&&i(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var i=t[n];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}var s=b("Patches").$;return r(e)?s(e,t):this.produce(e,(function(e){return s(e,t.slice(n+1))}))},e}(),G=new B,H=G.produce;G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G),t.ZP=H},1570:function(e,t){t.w=function(e){return e}},5996:function(e,t,n){"use strict";var i=n(5893);n(7363),t.Z=()=>(0,i.jsx)("div",Object.assign({className:"container text-center",title:"Loading..."},{children:(0,i.jsx)("i",{className:"fas fa-sync fa-spin"},void 0)}),void 0)},9147:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893),r=(n(7363),n(88)),s=e=>{const t=["page-item"];return e.active&&t.push("active"),e.disabled&&t.push("disabled"),e.className&&t.push(e.className),(0,i.jsx)("li",Object.assign({className:t.join(" "),title:e.title,onClick:t=>{t.preventDefault(),!e.disabled&&e.onClick&&e.onClick()}},{children:(0,i.jsx)("a",Object.assign({href:"#",className:"page-link","aria-disabled":e.disabled},{children:e.children}),void 0)}),void 0)};var o=e=>{const{page:t,totalPages:n,onChange:o}=e;return n<1?null:(0,i.jsxs)("ul",Object.assign({className:"pagination"},{children:[(0,i.jsxs)(s,Object.assign({title:(0,r.t)("vendor.datatable.prev"),disabled:1===t,onClick:()=>o(t-1)},{children:["‹",(0,i.jsx)("span",Object.assign({className:"d-inline d-sm-none ml-1"},{children:(0,r.t)("vendor.datatable.prev")}),void 0)]}),void 0),n<8?Array.from({length:n}).map(((e,n)=>(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",active:t===n+1,onClick:()=>o(n+1)},{children:n+1}),n))):(0,i.jsxs)(i.Fragment,{children:[t<4?[1,2,3,4].map((e=>(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",active:t===e,onClick:()=>o(e)},{children:e}),e))):(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",onClick:()=>o(1)},{children:"1"}),void 0),(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",disabled:!0},{children:"..."}),void 0),t>3&&t<n-2&&(0,i.jsxs)(i.Fragment,{children:[[t-1,t,t+1].map((e=>(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",active:t===e,onClick:()=>o(e)},{children:e}),e))),(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",disabled:!0},{children:"..."}),void 0)]},void 0),n-t<3?[n-3,n-2,n-1,n].map((e=>(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",active:t===e,onClick:()=>o(e)},{children:e}),e))):(0,i.jsx)(s,Object.assign({className:"d-none d-sm-block",onClick:()=>o(n)},{children:n}),void 0)]},void 0),(0,i.jsxs)(s,Object.assign({title:(0,r.t)("vendor.datatable.next"),disabled:t===n,onClick:()=>o(t+1)},{children:[(0,i.jsx)("span",Object.assign({className:"d-inline d-sm-none mr-1"},{children:(0,r.t)("vendor.datatable.next")}),void 0),"›"]}),void 0)]}),void 0)}},7881:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var i=n(5893),r=n(7363),s=n(1570),o=n(8172),a=n(57),c=n(88),u=n(6703),l=n(2065),d=n(5996),f=n(9147),h=e=>{const{plugin:t,isInstalling:n}=e,r=Object.entries(t.dependencies.all),s=Object.keys(t.dependencies.unsatisfied);return(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",Object.assign({style:{width:"18%"}},{children:[(0,i.jsx)("div",{children:(0,i.jsx)("b",{children:t.title},void 0)},void 0),(0,i.jsx)("div",{children:t.name},void 0)]}),void 0),(0,i.jsx)("td",Object.assign({style:{width:"37%"}},{children:t.description}),void 0),(0,i.jsx)("td",{children:t.author},void 0),(0,i.jsx)("td",{children:t.version},void 0),(0,i.jsx)("td",Object.assign({style:{width:"100px"}},{children:0===r.length?(0,i.jsx)("i",{children:(0,c.t)("admin.noDependencies")},void 0):(0,i.jsx)("div",Object.assign({className:"d-flex flex-column"},{children:r.map((([e,t])=>{const n=["mb-1","badge","bg-"+(s.includes(e)?"red":"green")];return(0,i.jsxs)("span",Object.assign({className:n.join(" ")},{children:[e,": ",t]}),e)}))}),void 0)}),void 0),(0,i.jsx)("td",Object.assign({style:{width:"12%"}},{children:t.can_update?(0,i.jsx)("button",Object.assign({className:"btn btn-success",disabled:n,onClick:e.onUpdate},{children:n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-spinner fa-spin mr-1"},void 0),(0,c.t)("admin.pluginUpdating")]},void 0):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-sync-alt mr-1"},void 0),(0,c.t)("admin.updatePlugin")]},void 0)}),void 0):(0,i.jsx)("button",Object.assign({className:"btn btn-default",disabled:e.isInstalling||!!t.installed,onClick:e.onInstall},{children:n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-spinner fa-spin mr-1"},void 0),(0,c.t)("admin.pluginInstalling")]},void 0):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-download mr-1"},void 0),(0,c.t)("admin.installPlugin")]},void 0)}),void 0)}),void 0)]},void 0)};(0,o.MD)();var v=(0,s.w)((()=>{const[e,t]=(0,a.x)([]),[n,s]=(0,r.useState)(!0),[o,v]=(0,r.useState)(""),[p,b]=(0,r.useState)(1),[m,j]=(0,r.useState)(1),[g,y]=(0,a.x)((()=>new Set)),x=(0,r.useMemo)((()=>e.filter((e=>e.name.includes(o)||e.title.includes(o)))),[e,o]);(0,r.useEffect)((()=>{(async()=>{s(!0);const e=await u.U2("/admin/plugins/market/list");t((()=>e)),j(Math.ceil(e.length/10)),s(!1)})()}),[]);const O=async(e,n)=>{y((t=>{t.add(e.name)}));const{code:r,message:s,data:o={reason:[]}}=await u.v_("/admin/plugins/market/download",{name:e.name});0===r?(l.A.success(s),t((e=>{e[n].can_update=!1,e[n].installed=e[n].version}))):(0,l.K)({mode:"alert",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:s},void 0),(0,i.jsx)("ul",{children:o.reason.map(((e,t)=>(0,i.jsx)("li",{children:e},t)))},void 0)]},void 0)}),y((t=>{t.delete(e.name)}))},P=x.slice(10*(p-1),10*p);return(0,i.jsxs)("div",Object.assign({className:"card"},{children:[(0,i.jsx)("div",Object.assign({className:"card-header"},{children:(0,i.jsx)("input",{type:"text",className:"form-control",placeholder:(0,c.t)("vendor.datatable.search"),value:o,onChange:t=>{const n=t.target.value;v(n),b(1);const i=e.filter((e=>e.name.includes(n)||e.title.includes(n)));j(Math.ceil(i.length/10))}},void 0)}),void 0),n?(0,i.jsx)("div",Object.assign({className:"card-body"},{children:(0,i.jsx)(d.Z,{},void 0)}),void 0):0===x.length?(0,i.jsx)("div",Object.assign({className:"card-body text-center"},{children:(0,c.t)("general.noResult")}),void 0):(0,i.jsx)("div",Object.assign({className:"card-body table-responsive p-0"},{children:(0,i.jsxs)("table",Object.assign({className:"table table-striped"},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,c.t)("admin.pluginTitle")},void 0),(0,i.jsx)("th",{children:(0,c.t)("admin.pluginDescription")},void 0),(0,i.jsx)("th",{children:(0,c.t)("admin.pluginAuthor")},void 0),(0,i.jsx)("th",{children:(0,c.t)("admin.pluginVersion")},void 0),(0,i.jsx)("th",{children:(0,c.t)("admin.pluginDependencies")},void 0),(0,i.jsx)("th",{children:(0,c.t)("admin.operationsTitle")},void 0)]},void 0)},void 0),(0,i.jsx)("tbody",{children:P.map(((e,t)=>(0,i.jsx)(h,{plugin:e,isInstalling:g.has(e.name),onInstall:()=>O(e,10*(p-1)+t),onUpdate:()=>(async(e,t)=>{try{await(0,l.K)({text:(0,c.t)("admin.confirmUpdate",{plugin:e.title,old:e.installed,new:e.version})})}catch(e){return}O(e,t)})(e,10*(p-1)+t)},e.name)))},void 0)]}),void 0)}),void 0),(0,i.jsx)("div",Object.assign({className:"card-footer"},{children:(0,i.jsx)("div",Object.assign({className:"float-right"},{children:(0,i.jsx)(f.Z,{page:p,totalPages:m,onChange:b},void 0)}),void 0)}),void 0)]}),void 0)}))},57:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var i=n(8172),r=n(7363);function s(e){var t=(0,r.useState)(e),n=t[1];return[t[0],(0,r.useCallback)((function(e){n((0,i.ZP)(e))}),[])]}}}]);