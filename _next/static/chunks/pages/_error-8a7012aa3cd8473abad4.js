_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},"/a9y":function(e,t,n){"use strict";var r=n("AroE");t.__esModule=!0,t.default=void 0;var a=r(n("q1tI")),o=r(n("8Kt/"));const s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i({res:e,err:t}){return{statusCode:e&&e.statusCode?e.statusCode:t?t.statusCode:404}}class u extends a.default.Component{render(){const{statusCode:e}=this.props,t=this.props.title||s[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:d.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e,": ",t)),a.default.createElement("div",null,a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?a.default.createElement("h1",{style:d.h1},e):null,a.default.createElement("div",{style:d.desc},a.default.createElement("h2",{style:d.h2},t,"."))))}}t.default=u,u.displayName="ErrorPage",u.getInitialProps=i,u.origGetInitialProps=i;const d={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(o=n("Xuae"))&&o.__esModule?o:{default:o},u=n("lwAK"),d=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(e=!1){const t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce(((e,t)=>{const n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return a=>{let o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;const t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){const t=h[e];if(a.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?o=!1:n.add(t);else{const e=a.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):o=!1}}}return o}}()).reverse().map(((e,n)=>{const o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:o})}))}function g({children:e}){const t=(0,s.useContext)(u.AmpStateContext),n=(0,s.useContext)(d.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}g.rewind=()=>{};var y=g;t.default=y},AroE:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;const a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");class a extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=a},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["04ac",0,1]]]);