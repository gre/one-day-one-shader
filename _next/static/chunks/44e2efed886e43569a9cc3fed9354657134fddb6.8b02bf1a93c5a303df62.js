(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),c=n("FYa8"),u=n("/0+H");function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e=!1){const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(((e,t)=>{const n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){const t=f[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):a=!1}}}return a}}()).reverse().map(((e,t)=>{const n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h({children:e}){const t=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}h.rewind=()=>{};var m=h;t.default=m},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");class o extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("7KCV");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),a=n("elyg"),s=n("nOHt"),c=n("vNVm");const u={};function i(e,t,n,r){if(!e)return;if(!(0,a.isLocalURL)(t))return;e.prefetch(t,n,r).catch((e=>{0}));const o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}var l=function(e){const t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",{href:l,as:d}=o.default.useMemo((()=>{const[t,n]=(0,a.resolveHref)(r,e.href,!0);return{href:t,as:e.as?(0,a.resolveHref)(r,e.as):n||t}}),[r,e.href,e.as]);let{children:f,replace:p,shallow:h,scroll:m,locale:y}=e;"string"===typeof f&&(f=o.default.createElement("a",null,f));const g=o.Children.only(f),v=g&&"object"===typeof g&&g.ref,[M,_]=(0,c.useIntersection)({rootMargin:"200px"}),b=o.default.useCallback((e=>{M(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,M]);(0,o.useEffect)((()=>{const e=_&&t&&(0,a.isLocalURL)(l),r="undefined"!==typeof y?y:n&&n.locale,o=u[l+"%"+d+(r?"%"+r:"")];e&&!o&&i(n,l,d,{locale:r})}),[d,l,_,y,t,n]);const w={ref:b,onClick:e=>{g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,c,u){const{nodeName:i}=e.currentTarget;("A"!==i||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:s,locale:u,scroll:c}))}(e,n,l,d,p,h,m,y)},onMouseEnter:e=>{(0,a.isLocalURL)(l)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),i(n,l,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){const e="undefined"!==typeof y?y:n&&n.locale,t=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,e,n&&n.locales,n&&n.domainLocales);w.href=t||(0,a.addBasePath)((0,a.addLocale)(d,e,n&&n.defaultLocale))}return o.default.cloneElement(g,w)};t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vNVm:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!a,c=(0,r.useRef)(),[u,i]=(0,r.useState)(!1),l=(0,r.useCallback)((t=>{c.current&&(c.current(),c.current=void 0),n||u||t&&t.tagName&&(c.current=function(e,t,n){const{id:r,observer:o,elements:a}=function(e){const t=e.rootMargin||"";let n=s.get(t);if(n)return n;const r=new Map,o=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n);return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(t,(e=>e&&i(e)),{rootMargin:e}))}),[n,e,u]);return(0,r.useEffect)((()=>{if(!a&&!u){const e=(0,o.requestIdleCallback)((()=>i(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[u]),[l,u]};var r=n("q1tI"),o=n("0G5g");const a="undefined"!==typeof IntersectionObserver;const s=new Map}}]);