(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/MXg":function(e,t,r){var o=r("ZkmD");e.exports=function(){var e=o();return{get:function(t,r){var o=e(t);return o.hasOwnProperty("value")?o.value:r},set:function(t,r){return e(t).value=r,this},has:function(t){return"value"in e(t)},delete:function(t){return delete e(t).value}}}},"005v":function(e,t){var r=function(e){void 0==e&&(e=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};r.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&e)>>>16)<<16)+1812433253*(65535&e)+this.mti,this.mt[this.mti]>>>=0}},r.prototype.init_by_array=function(e,t){var r,o,i;for(this.init_seed(19650218),r=1,o=0,i=this.N>t?this.N:t;i;i--){var n=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1664525*((4294901760&n)>>>16)<<16)+1664525*(65535&n))+e[o]+o,this.mt[r]>>>=0,o++,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),o>=t&&(o=0)}for(i=this.N-1;i;i--){n=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1566083941*((4294901760&n)>>>16)<<16)+1566083941*(65535&n))-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1)}this.mt[0]=2147483648},r.prototype.random_int=function(){var e,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var r;for(this.mti==this.N+1&&this.init_seed(5489),r=0;r<this.N-this.M;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+this.M]^e>>>1^t[1&e];for(;r<this.N-1;r++)e=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+(this.M-this.N)]^e>>>1^t[1&e];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^t[1&e],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0},r.prototype.random_int31=function(){return this.random_int()>>>1},r.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},r.prototype.random=function(){return this.random_int()*(1/4294967296)},r.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},r.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},e.exports=r},"033R":function(e,t,r){"use strict";var o=r("TBio");e.exports=function(e){var t=["'use strict'","var CACHED={}"],r=[],i=e.funcName+"_cwise_thunk";t.push(["return function ",i,"(",e.shimArgs.join(","),"){"].join(""));for(var n=[],a=[],s=[["array",e.arrayArgs[0],".shape.slice(",Math.max(0,e.arrayBlockIndices[0]),e.arrayBlockIndices[0]<0?","+e.arrayBlockIndices[0]+")":")"].join("")],c=[],l=[],f=0;f<e.arrayArgs.length;++f){var p=e.arrayArgs[f];r.push(["t",p,"=array",p,".dtype,","r",p,"=array",p,".order"].join("")),n.push("t"+p),n.push("r"+p),a.push("t"+p),a.push("r"+p+".join()"),s.push("array"+p+".data"),s.push("array"+p+".stride"),s.push("array"+p+".offset|0"),f>0&&(c.push("array"+e.arrayArgs[0]+".shape.length===array"+p+".shape.length+"+(Math.abs(e.arrayBlockIndices[0])-Math.abs(e.arrayBlockIndices[f]))),l.push("array"+e.arrayArgs[0]+".shape[shapeIndex+"+Math.max(0,e.arrayBlockIndices[0])+"]===array"+p+".shape[shapeIndex+"+Math.max(0,e.arrayBlockIndices[f])+"]"))}for(e.arrayArgs.length>1&&(t.push("if (!("+c.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"),t.push("for(var shapeIndex=array"+e.arrayArgs[0]+".shape.length-"+Math.abs(e.arrayBlockIndices[0])+"; shapeIndex--\x3e0;) {"),t.push("if (!("+l.join(" && ")+")) throw new Error('cwise: Arrays do not all have the same shape!')"),t.push("}")),f=0;f<e.scalarArgs.length;++f)s.push("scalar"+e.scalarArgs[f]);return r.push(["type=[",a.join(","),"].join()"].join("")),r.push("proc=CACHED[type]"),t.push("var "+r.join(",")),t.push(["if(!proc){","CACHED[type]=proc=compile([",n.join(","),"])}","return proc(",s.join(","),")}"].join("")),e.debug&&console.log("-----Generated thunk:\n"+t.join("\n")+"\n----------"),new Function("compile",t.join("\n"))(o.bind(void 0,e))}},"0GS4":function(e,t,r){"use strict";var o=r("63NL"),i=r("o/2B");function n(e){return new Function("y","return function(){return y}")(e)}function a(e,t){for(var r=new Array(e),o=0;o<e;++o)r[o]=t;return r}e.exports=function(e,t,r,s){function c(e,t,r){switch(r){case"bool":case"int":case"sampler2D":case"samplerCube":return"gl.uniform1i(locations["+t+"],obj"+e+")";case"float":return"gl.uniform1f(locations["+t+"],obj"+e+")";default:var o=r.indexOf("vec");if(!(0<=o&&o<=1&&r.length===4+o)){if(0===r.indexOf("mat")&&4===r.length){var n;if((n=r.charCodeAt(r.length-1)-48)<2||n>4)throw new i("","Invalid uniform dimension type for matrix "+name+": "+r);return"gl.uniformMatrix"+n+"fv(locations["+t+"],false,obj"+e+")"}throw new i("","Unknown uniform data type for "+name+": "+r)}if((n=r.charCodeAt(r.length-1)-48)<2||n>4)throw new i("","Invalid data type");switch(r.charAt(0)){case"b":case"i":return"gl.uniform"+n+"iv(locations["+t+"],obj"+e+")";case"v":return"gl.uniform"+n+"fv(locations["+t+"],obj"+e+")";default:throw new i("","Unrecognized data type for vector "+name+": "+r)}}}function l(e,t){if("object"!==typeof t)return[[e,t]];var r=[];for(var o in t){var i=t[o],n=e;parseInt(o)+""===o?n+="["+o+"]":n+="."+o,"object"===typeof i?r.push.apply(r,l(n,i)):r.push([n,i])}return r}function f(t){for(var o=["return function updateProperty(obj){"],i=l("",t),n=0;n<i.length;++n){var a=i[n],f=a[0],p=a[1];s[p]&&o.push(c(f,p,r[p].type))}return o.push("return obj}"),new Function("gl","locations",o.join("\n"))(e,s)}function p(o,c,l){if("object"===typeof l){var p=u(l);Object.defineProperty(o,c,{get:n(p),set:f(l),enumerable:!0,configurable:!1})}else s[l]?Object.defineProperty(o,c,{get:(d=l,new Function("gl","wrapper","locations","return function(){return gl.getUniform(wrapper.program,locations["+d+"])}")(e,t,s)),set:f(l),enumerable:!0,configurable:!1}):o[c]=function(e){switch(e){case"bool":return!1;case"int":case"sampler2D":case"samplerCube":case"float":return 0;default:var t=e.indexOf("vec");if(0<=t&&t<=1&&e.length===4+t){if((r=e.charCodeAt(e.length-1)-48)<2||r>4)throw new i("","Invalid data type");return"b"===e.charAt(0)?a(r,!1):a(r,0)}if(0===e.indexOf("mat")&&4===e.length){var r;if((r=e.charCodeAt(e.length-1)-48)<2||r>4)throw new i("","Invalid uniform dimension type for matrix "+name+": "+e);return a(r*r,0)}throw new i("","Unknown uniform data type for "+name+": "+e)}}(r[l].type);var d}function u(e){var t;if(Array.isArray(e)){t=new Array(e.length);for(var r=0;r<e.length;++r)p(t,r,e[r])}else for(var o in t={},e)p(t,o,e[o]);return t}var d=o(r,!0);return{get:n(u(d)),set:f(d),enumerable:!0,configurable:!0}}},"1BqX":function(e,t,r){"use strict";t.uniforms=function(e,t){for(var r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),o=[],i=0;i<r;++i){var a=e.getActiveUniform(t,i);if(a){var s=n(e,a.type);if(a.size>1)for(var c=0;c<a.size;++c)o.push({name:a.name.replace("[0]","["+c+"]"),type:s});else o.push({name:a.name,type:s})}}return o},t.attributes=function(e,t){for(var r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),o=[],i=0;i<r;++i){var a=e.getActiveAttrib(t,i);a&&o.push({name:a.name,type:n(e,a.type)})}return o};var o={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube"},i=null;function n(e,t){if(!i){var r=Object.keys(o);i={};for(var n=0;n<r.length;++n){var a=r[n];i[e[a]]=o[a]}}return i[t]}},"38ab":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let r=e.__glReactGlobalVisitor=e.__glReactGlobalVisitor||[];var o={add(e){r.push(e)},remove(e){const t=r.indexOf(e);-1!==t&&r.splice(t,1)},get:()=>r};t.default=o}).call(this,r("ntbh"))},"49sm":function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},"4Z/T":function(e,t,r){var o;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function n(e){return s(l(e),arguments)}function a(e,t){return n.apply(null,[e].concat(t||[]))}function s(e,t){var r,o,a,s,c,l,f,p,u,d=1,v=e.length,h="";for(o=0;o<v;o++)if("string"===typeof e[o])h+=e[o];else if("object"===typeof e[o]){if((s=e[o]).keys)for(r=t[d],a=0;a<s.keys.length;a++){if(void 0==r)throw new Error(n('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));r=r[s.keys[a]]}else r=s.param_no?t[s.param_no]:t[d++];if(i.not_type.test(s.type)&&i.not_primitive.test(s.type)&&r instanceof Function&&(r=r()),i.numeric_arg.test(s.type)&&"number"!==typeof r&&isNaN(r))throw new TypeError(n("[sprintf] expecting number but found %T",r));switch(i.number.test(s.type)&&(p=r>=0),s.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,s.width?parseInt(s.width):0);break;case"e":r=s.precision?parseFloat(r).toExponential(s.precision):parseFloat(r).toExponential();break;case"f":r=s.precision?parseFloat(r).toFixed(s.precision):parseFloat(r);break;case"g":r=s.precision?String(Number(r.toPrecision(s.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=s.precision?r.substring(0,s.precision):r;break;case"t":r=String(!!r),r=s.precision?r.substring(0,s.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=s.precision?r.substring(0,s.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=s.precision?r.substring(0,s.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}i.json.test(s.type)?h+=r:(!i.number.test(s.type)||p&&!s.sign?u="":(u=p?"+":"-",r=r.toString().replace(i.sign,"")),l=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",f=s.width-(u+r).length,c=s.width&&f>0?l.repeat(f):"",h+=s.align?u+r+c:"0"===l?u+c+r:c+u+r)}return h}var c=Object.create(null);function l(e){if(c[e])return c[e];for(var t,r=e,o=[],n=0;r;){if(null!==(t=i.text.exec(r)))o.push(t[0]);else if(null!==(t=i.modulo.exec(r)))o.push("%");else{if(null===(t=i.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){n|=1;var a=[],s=t[2],l=[];if(null===(l=i.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(l[1]);""!==(s=s.substring(l[0].length));)if(null!==(l=i.key_access.exec(s)))a.push(l[1]);else{if(null===(l=i.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(l[1])}t[2]=a}else n|=2;if(3===n)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}r=r.substring(t[0].length)}return c[e]=o}t.sprintf=n,t.vsprintf=a,"undefined"!==typeof window&&(window.sprintf=n,window.vsprintf=a,void 0===(o=function(){return{sprintf:n,vsprintf:a}}.call(t,r,t,e))||(e.exports=o))}()},"5lXm":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=0,()=>++o);t.default=i},"5rLZ":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),n=(o=r("17x9"))&&o.__esModule?o:{default:o};function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=e=>{var t,r;return r=t=class extends i.Component{constructor(...e){super(...e),c(this,"context",void 0)}getGLSize(){const{props:{width:e,height:t},context:{glSizable:r}}=this;if(e&&t)return[e,t];const[o,i]=r.getGLSize();return[e||o,t||i]}getChildContext(){return{glSizable:this}}render(){const{onConnectSizeComponentRef:t}=this.props,[r,o]=this.getGLSize();return i.default.createElement(e,s({ref:t},this.props,{width:r,height:o}))}},c(t,"displayName",`connectSize(${e.displayName||e.name||"?"})`),c(t,"propTypes",{width:n.default.number,height:n.default.number}),c(t,"contextTypes",{glSizable:n.default.object.isRequired}),c(t,"childContextTypes",{glSizable:n.default.object.isRequired}),r};t.default=l},"63NL":function(e,t,r){"use strict";e.exports=function(e,t){for(var r={},o=0;o<e.length;++o)for(var i=e[o].name.split("."),n=r,a=0;a<i.length;++a){var s=i[a].split("[");if(s.length>1){s[0]in n||(n[s[0]]=[]),n=n[s[0]];for(var c=1;c<s.length;++c){var l=parseInt(s[c]);c<s.length-1||a<i.length-1?(l in n||(c<s.length-1?n[l]=[]:n[l]={}),n=n[l]):n[l]=t?o:e[o].type}}else a<i.length-1?(s[0]in n||(n[s[0]]={}),n=n[s[0]]):n[s[0]]=t?o:e[o].type}return r}},"6v/u":function(e,t){e.exports=function(e){return atob(e)}},"8e5R":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{onSurfaceMount(e){}onSurfaceUnmount(e){}onSurfaceGLContextChange(e,t){}onSurfaceDrawSkipped(e){}onSurfaceDrawStart(e){}onSurfaceDrawError(e){return!1}onSurfaceDrawEnd(e){}onNodeDrawSkipped(e){}onNodeDrawStart(e){}onNodeSyncDeps(e,t,r){}onNodeDraw(e,t){}onNodeDrawEnd(e){}}},"9fJb":function(e,t,r){var o=r("GTa7");e.exports=o.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"])},"9tIV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=a(r("JwSf")),n=a(r("M/JY"));function a(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p extends o.Component{constructor(...e){super(...e),f(this,"_node",void 0),f(this,"_onRef",(e=>{this._node=e}))}getNodeRef(){return this._node}render(){const e=this.props,{children:t}=e,r=l(e,["children"]);return o.default.createElement(i.default,c({},r,{ref:this._onRef,shader:n.default,blendFunc:{src:"one",dst:"one minus src alpha"},uniformsOptions:{t:{interpolation:"linear"}},uniforms:{t:t}}))}}var u=p;t.default=u},AAS3:function(e,t,r){var o=r("hYYf");e.exports=function(e,t){var r=o(t),i=[];return i=(i=i.concat(r(e))).concat(r(null))}},B9vp:function(e,t,r){var o=r("4Z/T").sprintf,i=r("tCpK"),n=r("st01"),a=r("kR76");e.exports=function(e,t,r){"use strict";var s=n(t)||"of unknown name (see npm glsl-shader-name)",c="unknown type";void 0!==r&&(c=r===i.FRAGMENT_SHADER?"fragment":"vertex");for(var l=o("Error compiling %s shader %s:\n",c,s),f=o("%s%s",l,e),p=e.split("\n"),u={},d=0;d<p.length;d++){var v=p[d];if(""!==v&&"\0"!==v){var h=parseInt(v.split(":")[2]);if(isNaN(h))throw new Error(o("Could not parse error: %s",v));u[h]=v}}var m=a(t).split("\n");for(d=0;d<m.length;d++)if(u[d+3]||u[d+2]||u[d+1]){var g=m[d];if(l+=g+"\n",u[d+1]){var x=u[d+1];x=x.substr(x.split(":",3).join(":").length+1).trim(),l+=o("^^^ %s\n\n",x)}}return{long:l.trim(),short:f.trim()}}},BEtg:function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},BkhO:function(e,t,r){var o=r("Xs3h");o=o.slice().filter((function(e){return!/^(gl\_|texture)/.test(e)})),e.exports=o.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"])},Cz5J:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(e,t,r)=>{let o;return"webgl2"!==r&&"auto"!==r||(o=e.getContext("webgl2",t)),o||"webgl"!==r&&"auto"!==r||(o=e.getContext("webgl",t)||e.getContext("webgl-experimental",t)||e.getContext("experimental-webgl",t)),o};t.default=o},EEdt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("TGEO");class i extends o.WebGLTextureLoaderAsyncHashCache{canLoad(e){return e instanceof HTMLVideoElement}inputHash(e){return e}loadNoCache(e){const{gl:t}=this,{width:r,height:o}=e;let i;return{dispose:()=>{clearTimeout(i)},promise:new Promise(((r,o)=>{const n=()=>{if(e.videoWidth>0){const o=t.createTexture(),{videoWidth:i,videoHeight:n}=e;t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),r({texture:o,width:i,height:n})}else i=setTimeout(n,100)};n()}))}}update(e){const{gl:t}=this,r=this.get(e);r&&(t.bindTexture(t.TEXTURE_2D,r.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e))}}o.globalRegistry.add(i);var n=i;t.default=n},F16p:function(e,t,r){"use strict";e.exports=function(e,t,r){return 0===e.length?e:t?(r||e.sort(t),function(e,t){for(var r=1,o=e.length,i=e[0],n=e[0],a=1;a<o;++a)if(n=i,t(i=e[a],n)){if(a===r){r++;continue}e[r++]=i}return e.length=r,e}(e,t)):(r||e.sort(),function(e){for(var t=1,r=e.length,o=e[0],i=e[0],n=1;n<r;++n,i=o)if(i=o,(o=e[n])!==i){if(n===t){t++;continue}e[t++]=o}return e.length=t,e}(e))}},FRc1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=a(r("JwSf")),n=a(r("M/JY"));function a(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p extends o.Component{constructor(...e){super(...e),f(this,"_node",void 0),f(this,"_onRef",(e=>{this._node=e}))}getNodeRef(){return this._node}render(){const e=this.props,{children:t}=e,r=l(e,["children"]);return o.default.createElement(i.default,c({},r,{ref:this._onRef,shader:n.default,blendFunc:{src:"one",dst:"one minus src alpha"},uniformsOptions:{t:{interpolation:"nearest"}},uniforms:{t:t}}))}}var u=p;t.default=u},GTa7:function(e,t){e.exports=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]},H7XF:function(e,t,r){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],o=t[1];return 3*(r+o)/4-o},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new n(function(e,t,r){return 3*(t+r)/4-r}(0,a,s)),f=0,p=s>0?a-4:a;for(r=0;r<p;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],c[f++]=t>>16&255,c[f++]=t>>8&255,c[f++]=255&t;2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,c[f++]=255&t);1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,c[f++]=t>>8&255,c[f++]=255&t);return c},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,n=[],a=16383,s=0,c=r-i;s<c;s+=a)n.push(f(e,s,s+a>c?c:s+a));1===i?(t=e[r-1],n.push(o[t>>2]+o[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],n.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return n.join("")};for(var o=[],i=[],n="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=a.length;s<c;++s)o[s]=a[s],i[a.charCodeAt(s)]=s;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function f(e,t,r){for(var i,n,a=[],s=t;s<r;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(n=i)>>18&63]+o[n>>12&63]+o[n>>6&63]+o[63&n]);return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},HDXh:function(e,t,r){"use strict";(function(e){var o=r("H7XF"),i=r("kVK+"),n=r("49sm");function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=c.prototype:(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,r){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c))return new c(e,t,r);if("number"===typeof e){if("string"===typeof t)throw new Error("If encoding is specified then the first argument must be a string");return p(this,e)}return l(this,e,t,r)}function l(e,t,r,o){if("number"===typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,o){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(o||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===o?new Uint8Array(t):void 0===o?new Uint8Array(t,r):new Uint8Array(t,r,o);c.TYPED_ARRAY_SUPPORT?(e=t).__proto__=c.prototype:e=u(e,t);return e}(e,t,r,o):"string"===typeof t?function(e,t,r){"string"===typeof r&&""!==r||(r="utf8");if(!c.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var o=0|v(t,r),i=(e=s(e,o)).write(t,r);i!==o&&(e=e.slice(0,i));return e}(e,t,r):function(e,t){if(c.isBuffer(t)){var r=0|d(t.length);return 0===(e=s(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!==typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!==typeof t.length||(o=t.length)!==o?s(e,0):u(e,t);if("Buffer"===t.type&&n(t.data))return u(e,t.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function f(e){if("number"!==typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function p(e,t){if(f(t),e=s(e,t<0?0:0|d(t)),!c.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function u(e,t){var r=t.length<0?0:0|d(t.length);e=s(e,r);for(var o=0;o<r;o+=1)e[o]=255&t[o];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function v(e,t){if(c.isBuffer(e))return e.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!==typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(e).length;default:if(o)return q(e).length;t=(""+t).toLowerCase(),o=!0}}function h(e,t,r){var o=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return A(this,t,r);case"utf8":case"utf-8":return T(this,t,r);case"ascii":return I(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return z(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function m(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}function g(e,t,r,o,i){if(0===e.length)return-1;if("string"===typeof r?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof t&&(t=c.from(t,o)),c.isBuffer(t))return 0===t.length?-1:x(e,t,r,o,i);if("number"===typeof t)return t&=255,c.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):x(e,[t],r,o,i);throw new TypeError("val must be string, number or Buffer")}function x(e,t,r,o,i){var n,a=1,s=e.length,c=t.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,r/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var f=-1;for(n=r;n<s;n++)if(l(e,n)===l(t,-1===f?0:n-f)){if(-1===f&&(f=n),n-f+1===c)return f*a}else-1!==f&&(n-=n-f),f=-1}else for(r+c>s&&(r=s-c),n=r;n>=0;n--){for(var p=!0,u=0;u<c;u++)if(l(e,n+u)!==l(t,u)){p=!1;break}if(p)return n}return-1}function y(e,t,r,o){r=Number(r)||0;var i=e.length-r;o?(o=Number(o))>i&&(o=i):o=i;var n=t.length;if(n%2!==0)throw new TypeError("Invalid hex string");o>n/2&&(o=n/2);for(var a=0;a<o;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a}function b(e,t,r,o){return G(q(t,e.length-r),e,r,o)}function w(e,t,r,o){return G(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,o)}function _(e,t,r,o){return w(e,t,r,o)}function S(e,t,r,o){return G(F(t),e,r,o)}function E(e,t,r,o){return G(function(e,t){for(var r,o,i,n=[],a=0;a<e.length&&!((t-=2)<0);++a)o=(r=e.charCodeAt(a))>>8,i=r%256,n.push(i),n.push(o);return n}(t,e.length-r),e,r,o)}function z(e,t,r){return 0===t&&r===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,r))}function T(e,t,r){r=Math.min(e.length,r);for(var o=[],i=t;i<r;){var n,a,s,c,l=e[i],f=null,p=l>239?4:l>223?3:l>191?2:1;if(i+p<=r)switch(p){case 1:l<128&&(f=l);break;case 2:128===(192&(n=e[i+1]))&&(c=(31&l)<<6|63&n)>127&&(f=c);break;case 3:n=e[i+1],a=e[i+2],128===(192&n)&&128===(192&a)&&(c=(15&l)<<12|(63&n)<<6|63&a)>2047&&(c<55296||c>57343)&&(f=c);break;case 4:n=e[i+1],a=e[i+2],s=e[i+3],128===(192&n)&&128===(192&a)&&128===(192&s)&&(c=(15&l)<<18|(63&n)<<12|(63&a)<<6|63&s)>65535&&c<1114112&&(f=c)}null===f?(f=65533,p=1):f>65535&&(f-=65536,o.push(f>>>10&1023|55296),f=56320|1023&f),o.push(f),i+=p}return function(e){var t=e.length;if(t<=R)return String.fromCharCode.apply(String,e);var r="",o=0;for(;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=R));return r}(o)}t.Buffer=c,t.SlowBuffer=function(e){+e!=e&&(e=0);return c.alloc(+e)},t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"===typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}(),t.kMaxLength=a(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,r){return l(null,e,t,r)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(e,t,r){return function(e,t,r,o){return f(t),t<=0?s(e,t):void 0!==r?"string"===typeof o?s(e,t).fill(r,o):s(e,t).fill(r):s(e,t)}(null,e,t,r)},c.allocUnsafe=function(e){return p(null,e)},c.allocUnsafeSlow=function(e){return p(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){if(!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,o=t.length,i=0,n=Math.min(r,o);i<n;++i)if(e[i]!==t[i]){r=e[i],o=t[i];break}return r<o?-1:o<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!n(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=c.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(o,i),i+=a.length}return o},c.byteLength=v,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?T(this,0,e):h.apply(this,arguments)},c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,r,o,i){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),t<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&t>=r)return 0;if(o>=i)return-1;if(t>=r)return 1;if(this===e)return 0;for(var n=(i>>>=0)-(o>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(n,a),l=this.slice(o,i),f=e.slice(t,r),p=0;p<s;++p)if(l[p]!==f[p]){n=l[p],a=f[p];break}return n<a?-1:a<n?1:0},c.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},c.prototype.write=function(e,t,r,o){if(void 0===t)o="utf8",r=this.length,t=0;else if(void 0===r&&"string"===typeof t)o=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===o&&(o="utf8")):(o=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var n=!1;;)switch(o){case"hex":return y(this,e,t,r);case"utf8":case"utf-8":return b(this,e,t,r);case"ascii":return w(this,e,t,r);case"latin1":case"binary":return _(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(n)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),n=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function I(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(127&e[i]);return o}function P(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(e[i]);return o}function A(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var i="",n=t;n<r;++n)i+=B(e[n]);return i}function O(e,t,r){for(var o=e.slice(t,r),i="",n=0;n<o.length;n+=2)i+=String.fromCharCode(o[n]+256*o[n+1]);return i}function C(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,r,o,i,n){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<n)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}function L(e,t,r,o){t<0&&(t=65535+t+1);for(var i=0,n=Math.min(e.length-r,2);i<n;++i)e[r+i]=(t&255<<8*(o?i:1-i))>>>8*(o?i:1-i)}function j(e,t,r,o){t<0&&(t=4294967295+t+1);for(var i=0,n=Math.min(e.length-r,4);i<n;++i)e[r+i]=t>>>8*(o?i:3-i)&255}function N(e,t,r,o,i,n){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(e,t,r,o,n){return n||N(e,0,r,4),i.write(e,t,r,o,23,4),r+4}function M(e,t,r,o,n){return n||N(e,0,r,8),i.write(e,t,r,o,52,8),r+8}c.prototype.slice=function(e,t){var r,o=this.length;if((e=~~e)<0?(e+=o)<0&&(e=0):e>o&&(e=o),(t=void 0===t?o:~~t)<0?(t+=o)<0&&(t=0):t>o&&(t=o),t<e&&(t=e),c.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=c.prototype;else{var i=t-e;r=new c(i,void 0);for(var n=0;n<i;++n)r[n]=this[n+e]}return r},c.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var o=this[e],i=1,n=0;++n<t&&(i*=256);)o+=this[e+n]*i;return o},c.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var o=this[e+--t],i=1;t>0&&(i*=256);)o+=this[e+--t]*i;return o},c.prototype.readUInt8=function(e,t){return t||C(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){return t||C(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||C(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){return t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var o=this[e],i=1,n=0;++n<t&&(i*=256);)o+=this[e+n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},c.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var o=t,i=1,n=this[e+--o];o>0&&(i*=256);)n+=this[e+--o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},c.prototype.readInt8=function(e,t){return t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){t||C(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){t||C(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||C(e,4,this.length),i.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return t||C(e,4,this.length),i.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||C(e,8,this.length),i.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return t||C(e,8,this.length),i.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,r,o){(e=+e,t|=0,r|=0,o)||D(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,n=0;for(this[t]=255&e;++n<r&&(i*=256);)this[t+n]=e/i&255;return t+r},c.prototype.writeUIntBE=function(e,t,r,o){(e=+e,t|=0,r|=0,o)||D(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,n=1;for(this[t+i]=255&e;--i>=0&&(n*=256);)this[t+i]=e/n&255;return t+r},c.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):L(this,e,t,!0),t+2},c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):L(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):j(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t|=0,!o){var i=Math.pow(2,8*r-1);D(this,e,t,r,i-1,-i)}var n=0,a=1,s=0;for(this[t]=255&e;++n<r&&(a*=256);)e<0&&0===s&&0!==this[t+n-1]&&(s=1),this[t+n]=(e/a>>0)-s&255;return t+r},c.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t|=0,!o){var i=Math.pow(2,8*r-1);D(this,e,t,r,i-1,-i)}var n=r-1,a=1,s=0;for(this[t+n]=255&e;--n>=0&&(a*=256);)e<0&&0===s&&0!==this[t+n+1]&&(s=1),this[t+n]=(e/a>>0)-s&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):L(this,e,t,!0),t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):L(this,e,t,!1),t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):j(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,r){return U(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return U(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,o){if(r||(r=0),o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var i,n=o-r;if(this===e&&r<t&&t<o)for(i=n-1;i>=0;--i)e[i+t]=this[i+r];else if(n<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<n;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+n),t);return n},c.prototype.fill=function(e,t,r,o){if("string"===typeof e){if("string"===typeof t?(o=t,t=0,r=this.length):"string"===typeof r&&(o=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==o&&"string"!==typeof o)throw new TypeError("encoding must be a string");if("string"===typeof o&&!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o)}else"number"===typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var n;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"===typeof e)for(n=t;n<r;++n)this[n]=e;else{var a=c.isBuffer(e)?e:q(new c(e,o).toString()),s=a.length;for(n=0;n<r-t;++n)this[n+t]=a[n%s]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function B(e){return e<16?"0"+e.toString(16):e.toString(16)}function q(e,t){var r;t=t||1/0;for(var o=e.length,i=null,n=[],a=0;a<o;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&n.push(239,191,189);continue}if(a+1===o){(t-=3)>-1&&n.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&n.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&n.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;n.push(r)}else if(r<2048){if((t-=2)<0)break;n.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return n}function F(e){return o.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(k,"")).length<2)return"";for(;e.length%4!==0;)e+="=";return e}(e))}function G(e,t,r,o){for(var i=0;i<o&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}}).call(this,r("ntbh"))},HbIt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e){var t,r,o;o=void 0,(r="gl")in(t=this)?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,this.gl=e}dispose(){}canLoad(e){return!1}load(e){return Promise.reject("load() is not implemented")}get(e){return null}update(e){}}},IDFI:function(e,t,r){"use strict";e.exports=function(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=r;return t}},IrQ8:function(e,t,r){"use strict";t.shader=function(e,t,r){return f(e).getShaderReference(t,r)},t.program=function(e,t,r,o,i){return f(e).getProgram(t,r,o,i)};var o=r("o/2B"),i=r("B9vp"),n=new("undefined"===typeof WeakMap?r("/MXg"):WeakMap),a=0;function s(e,t,r,o,i,n,a){this.id=e,this.src=t,this.type=r,this.shader=o,this.count=n,this.programs=[],this.cache=a}function c(e){this.gl=e,this.shaders=[{},{}],this.programs={}}s.prototype.dispose=function(){if(0===--this.count){for(var e=this.cache,t=e.gl,r=this.programs,o=0,i=r.length;o<i;++o){var n=e.programs[r[o]];n&&(delete e.programs[o],t.deleteProgram(n))}t.deleteShader(this.shader),delete e.shaders[this.type===t.FRAGMENT_SHADER|0][this.src]}};var l=c.prototype;function f(e){var t=n.get(e);return t||(t=new c(e),n.set(e,t)),t}l.getShaderReference=function(e,t){var r=this.gl,n=this.shaders[e===r.FRAGMENT_SHADER|0],c=n[t];if(c&&r.isShader(c.shader))c.count+=1;else{var l=function(e,t,r){var n=e.createShader(t);if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var a=e.getShaderInfoLog(n);try{var s=i(a,r,t)}catch(c){throw console.warn("Failed to format compiler error: "+c),new o(a,"Error compiling shader:\n"+a)}throw new o(a,s.short,s.long)}return n}(r,e,t);c=n[t]=new s(a++,t,e,l,[],1,this)}return c},l.getProgram=function(e,t,r,i){var n=[e.id,t.id,r.join(":"),i.join(":")].join("@"),a=this.programs[n];return a&&this.gl.isProgram(a)||(this.programs[n]=a=function(e,t,r,i,n){var a=e.createProgram();e.attachShader(a,t),e.attachShader(a,r);for(var s=0;s<i.length;++s)e.bindAttribLocation(a,n[s],i[s]);if(e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)){var c=e.getProgramInfoLog(a);throw new o(c,"Error linking program: "+c)}return a}(this.gl,e.shader,t.shader,r,i),e.programs.push(n),t.programs.push(n)),a}},JwSf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(r("QLaP")),i=v(r("q1tI")),n=h(r("17x9")),a=h(r("zqV6")),s=h(r("tbvF")),c=h(r("nXQg")),l=h(r("dLFq")),f=v(r("laZL")),p=h(r("Um7X")),u=h(r("5lXm"));function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function v(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const y={zero:"ZERO",one:"ONE","src color":"SRC_COLOR","one minus src color":"ONE_MINUS_SRC_COLOR","src alpha":"SRC_ALPHA","one minus src alpha":"ONE_MINUS_SRC_ALPHA","dst color":"DST_COLOR","one minus dst color":"ONE_MINUS_DST_COLOR","dst alpha":"DST_ALPHA","one minus dst alpha":"ONE_MINUS_DST_ALPHA","constant color":"CONSTANT_COLOR","one minus constant color":"ONE_MINUS_CONSTANT_COLOR","constant alpha":"CONSTANT_ALPHA","one minus constant alpha":"ONE_MINUS_CONSTANT_ALPHA","src alpha saturate":"SRC_ALPHA_SATURATE"},b=({width:e,height:t},{glSizable:r})=>{if(e&&t)return[e,t];const[o,i]=r.getGLSize();return[e||o,t||i]},w=(e,t)=>{if(t in e)return e[t];if(t in y){const r=y[t];if(r in e)return e[r]}console.warn("Invalid blendFunc. Got:",t)},_=(e,t)=>{switch(t){case"clamp to edge":return e.CLAMP_TO_EDGE;case"repeat":return e.REPEAT;case"mirrored repeat":return e.MIRRORED_REPEAT;default:return console.warn("Invalid wrap. Got:",t),e.CLAMP_TO_EDGE}},S=(e,t,r)=>{var o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);var i=e.createTexture();if(!i)throw new Error("createTexture returned null");return e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{handle:o,color:i,bind:()=>{e.bindFramebuffer(e.FRAMEBUFFER,o),e.viewport(0,0,t,r)},syncSize:(o,n)=>{o===t&&n===r||(t=o,r=n,e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,n,0,e.RGBA,e.UNSIGNED_BYTE,null))},dispose:()=>{e.deleteFramebuffer(o),e.deleteTexture(i)}}},E={interpolation:"linear",wrap:["clamp to edge","clamp to edge"]},z=(e,t)=>{const r=g(g({},E),t);let o,i,n=((e,t)=>{switch(t){case"linear":return e.LINEAR;case"nearest":return e.NEAREST;default:return console.warn("Invalid interpolation. Got:",t),e.LINEAR}})(e,r.interpolation);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n),Array.isArray(r.wrap)?2!==r.wrap.length?(console.warn("textureOptions wrap: should be an array of 2 values. Got:",r.wrap),o=i=e.CLAMP_TO_EDGE):(o=_(e,r.wrap[0]),i=_(e,r.wrap[1])):o=i=_(e,r.wrap),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,i)},T={shader:n.default.object.isRequired,uniformsOptions:n.default.object,uniforms:n.default.object,ignoreUnusedUniforms:n.default.any,sync:n.default.bool,width:n.default.number,height:n.default.number,children:n.default.any,backbuffering:n.default.bool,blendFunc:n.default.object,clear:n.default.object,onDraw:n.default.func};class R extends i.Component{constructor(...e){super(...e),x(this,"drawProps",this.props),x(this,"context",void 0),x(this,"framebuffer",void 0),x(this,"backbuffer",void 0),x(this,"_needsRedraw",!1),x(this,"capturePixelsArray",void 0),x(this,"id",(0,u.default)()),x(this,"uniformsBus",{}),x(this,"dependencies",[]),x(this,"dependents",[]),x(this,"_resolveElement",((e,t,r)=>{if(!i.default.isValidElement(t)){if("function"!==typeof t)return;if(t=t(this.redraw),!i.default.isValidElement(t))return}return i.default.createElement(l.default,{key:e+(r?"."+r:""),uniform:e,index:r},t)})),x(this,"_renderUniformElement",(e=>{const{uniforms:t}=this.props;let r=t[e];return Array.isArray(r)?r.map(((t,r)=>this._resolveElement(e,t,r))):this._resolveElement(e,r,0)})),x(this,"redraw",(()=>{this._needsRedraw||(this._needsRedraw=!0,this.dependents.forEach((e=>e.redraw())))})),x(this,"flush",(()=>{this.context.glSurface._draw()})),x(this,"_latestShaderInfo",void 0),x(this,"_shader",void 0)}getChildContext(){return{glParent:this,glSizable:this}}componentDidMount(){const{glSurface:{gl:e}}=this.context;e&&this._prepareGLObjects(e),this.context.glParent._addGLNodeChild(this),this.redraw(),this.props.sync&&this.flush()}componentWillUnmount(){const{capturePixelsArray:e}=this;this._destroyGLObjects(),e&&a.default.freeUint8(e),this._needsRedraw=!1,this.context.glParent._removeGLNodeChild(this),this.dependencies.forEach((e=>e._removeDependent(this)))}_syncNextDrawProps(e,t){const r=b(e,t);this.framebuffer&&this.framebuffer.syncSize(...r),this.backbuffer&&this.backbuffer.syncSize(...r),(0,o.default)(e.backbuffering===this.drawProps.backbuffering,"Node backbuffering prop must not changed. (not yet supported)"),this.drawProps=e}render(){const{children:e,uniforms:t}=this.props,{glSurface:{RenderLessElement:r}}=this.context;return i.default.createElement(r,null,e,Object.keys(t).map(this._renderUniformElement))}componentDidUpdate(){this._syncNextDrawProps(this.props,this.context),this.redraw(),this.props.sync&&this.flush()}getGLShortName(){const{shader:e}=this.drawProps;return`Node(${(0,f.isShaderIdentifier)(e)?f.default.getShortName(e):"<inline>"})`}getGLName(){const{shader:e}=this.drawProps,t=(0,f.isShaderIdentifier)(e)?f.default.getName(e):"<inline>";return`Node#${this.id}(${t})`}getGLSize(){return b(this.drawProps,this.context)}getGLOutput(){const{framebuffer:e}=this;return(0,o.default)(e,"Node#getGLOutput: framebuffer is not defined. It cannot be called on a root Node"),e.color}getGLBackbufferOutput(){const{backbuffer:e}=this;return(0,o.default)(e,"Node#getGLBackbufferOutput: backbuffer is not defined. Make sure `backbuffering` prop is defined"),e.color}setDrawProps(e){const t=g(g({},this.drawProps),e);this._syncNextDrawProps(t,this.context),this.redraw(),t.sync&&this.flush()}capture(e,t,r,i){const[n,a]=this.getGLSize(),{gl:c}=this.context.glSurface;(0,o.default)(c,"gl is no longer available"),void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=n-e),void 0===i&&(i=a-t),(0,o.default)(e>=0&&e+r<=n&&t>=0&&t+i<=a,"capture(%s,%s,%s,%s): requested rectangle is out of bounds (%s,%s)",e,t,r,i,n,a);const l=r*i*4,f=this._captureAlloc(l);return this._bind(),c.readPixels(e,t,r,i,c.RGBA,c.UNSIGNED_BYTE,f),(0,s.default)(f,[i,r,4]).step(-1,1,1).transpose(1,0,2)}_destroyGLObjects(){const{glSurface:e}=this.context;if(e.glIsAvailable()){const{framebuffer:e,backbuffer:t,_shader:r}=this;r&&r.dispose(),e&&e.dispose(),t&&t.dispose()}delete this._shader,delete this.framebuffer,delete this.backbuffer}_prepareGLObjects(e){const[t,r]=this.getGLSize(),{glParent:i,glSurface:n}=this.context;if(i===n)(0,o.default)(!this.drawProps.backbuffering,"`backbuffering` is currently not supported for a Root Node. Try to wrap %s in a <LinearCopy> or <NearestCopy>.",this.getGLName());else{const o=S(e,t,r);if(this.framebuffer=o,this.drawProps.backbuffering){const o=S(e,t,r);this.backbuffer=o}}}_onContextLost(){this.dependencies.forEach((e=>e._onContextLost())),this._destroyGLObjects()}_onContextRestored(e){this._prepareGLObjects(e),this.dependencies.forEach((t=>t._onContextRestored(e))),this._needsRedraw=!0}_addGLNodeChild(e){}_removeGLNodeChild(e){}_addUniformBus(e,t,r){(this.uniformsBus[t]||(this.uniformsBus[t]=[]))[r]=e}_removeUniformBus(e,t,r){const o=this.uniformsBus[t]||(this.uniformsBus[t]=[]);o[r]===e&&(o[r]=null)}_addDependent(e){-1===this.dependents.indexOf(e)&&((0,p.default)(this,e),this.dependents.push(e))}_removeDependent(e){const t=this.dependents.indexOf(e);-1!==t&&this.dependents.splice(t,1)}_syncDependencies(e){const t=this.dependencies,r=e.filter((e=>-1===t.indexOf(e))),o=t.filter((t=>-1===e.indexOf(t)));return r.forEach((e=>e._addDependent(this))),o.forEach((e=>e._removeDependent(this))),this.dependencies=e,[r,o]}_bind(){this.framebuffer?this.framebuffer.bind():this.context.glSurface._bindRootNode()}_captureAlloc(e){let{capturePixelsArray:t}=this;t&&e!==t.length&&(a.default.freeUint8(t),t=null);const r=t||a.default.mallocUint8(e);return this.capturePixelsArray=r,r}_getShader(e){const{glSurface:t}=this.context,r=this.getGLName();if((0,o.default)(e,r+": shader prop must be provided"),(0,f.isShaderIdentifier)(e))return t._getShader(e);const i=(0,f.shaderDefinitionToShaderInfo)((0,f.ensureShaderDefinition)(e," in "+r),r),n=this._latestShaderInfo;let a=this._shader;return a&&n&&(0,f.shaderInfoEquals)(n,i)||(a&&(a.dispose(),delete this._shader),a=t._makeShader(i),this._latestShaderInfo=i,this._shader=a),a}_draw(){const{glSurface:e}=this.context,{gl:t}=e,r=e.getVisitors(),i=this.getGLName();if(!t||!this._needsRedraw)return void r.forEach((e=>e.onNodeDrawSkipped(this)));const{backbuffering:n,uniforms:a,uniformsOptions:s,shader:f,blendFunc:p,clear:u,onDraw:d,ignoreUnusedUniforms:v}=this.drawProps;if(!this.framebuffer){const{glSizable:e}=this.context,[t,r]=e.getGLSize(),[n,a]=this.getGLSize();(0,o.default)(n===t&&a===r,i+" is root but have overrided {width=%s,height=%s} which doesn't match Surface size {width=%s,height=%s}. Try to wrap your Node in a <NearestCopy> or <LinearCopy>",n,a,t,r)}const h=this._getShader(f);this._needsRedraw=!1;const{types:m}=h,g=[],x=[];let y=0;const b=Object.keys(m.uniforms),_=Object.keys(a),{uniformsBus:S}=this;for(let o in S)o in a||_.push(o);const E=new Map,T=(r,n,a)=>{let s,f,p=r;if("function"===typeof p&&(p=p(this.redraw)),p){if((e=>"Backbuffer"===e?(console.warn('Backbuffer is deprecated, use Uniform.Backbuffer instead: `import {Uniform} from "gl-react"`'),!0):e===c.default.Backbuffer)(p))this.drawProps.backbuffering||console.warn(`${i}, uniform ${a}: you must set \`backbuffering\` on Node when using Backbuffer`),f={glNode:this,glNodePickBackbuffer:!0};else if((e=>e&&"object"===typeof e&&"BackbufferFrom"===e.type)(p)){(0,o.default)("object"===typeof p,"invalid backbufferFromNode. Got: %s",p);let e=p.node;e instanceof l.default&&(e=e.getGLRenderableNode(),(0,o.default)(e,"backbufferFromNode(bus) but bus.getGLRenderableNode() is %s",e)),(0,o.default)(e instanceof R,"invalid backbufferFromNode(obj): obj must be an instanceof Node or Bus. Got: %s",p),e.drawProps.backbuffering||console.warn(`${i}, uniform ${a}: you must set \`backbuffering\` on the Node referenced in backbufferFrom(${e.getGLName()})`),f={glNode:e,glNodePickBackbuffer:!0}}else if(p instanceof R)s=p,f={glNode:p};else if(p instanceof l.default){const e=p.getGLRenderableNode();if(e)s=e,f={glNode:e};else{s=p;const e=p.getGLRenderableContent();e?p=e:(console.warn(`${i}, uniform ${a}: child is not renderable. Got:`,e),f={directTexture:null})}}}else void 0===p&&console.warn(`${i}, uniform '${a}' is undefined.If you explicitely want to clear a texture, set it to null.`);if(!f&&p){const{loader:t,input:r}=e._resolveTextureLoader(p);if(t){const e=t.get(r);if(e)t.update(r),f={directTexture:e.texture,directTextureSize:[e.width,e.height]};else{const e=t.load(r);x.push(e)}}else console.warn(`${i}, uniform ${a}: no loader found for value`,r,p)}s&&g.push(s);const u=f?n:null;return{getMetaInfo:()=>({initialObj:r,obj:p,dependency:s,textureOptions:u}),getSize:()=>{const e=[2,2];return f?"directTextureSize"in f?f.directTextureSize:f.glNode?f.glNode.getGLSize():e:e},prepare:()=>{const r=f&&(f.directTexture||f.glNode&&(f.glNodePickBackbuffer?f.glNode.getGLBackbufferOutput():f.glNode.getGLOutput()))||e.getEmptyTexture();if(E.has(r))return E.get(r);const o=y++;return t.activeTexture(t.TEXTURE0+o),t.bindTexture(t.TEXTURE_2D,r),z(t,u),E.set(r,o),o}}},I=_.map((e=>{const t=m.uniforms[e];if(!t){return!0===v||v instanceof Array&&v.includes(e)||console.warn(`${i} uniform '${e}' is not declared, nor used, in your shader code`),{key:e,value:void 0}}const r=a[e];if(b.splice(b.indexOf(e),1),"sampler2D"===t){const o=S[e],{getMetaInfo:i,prepare:n}=T(o&&o[0]||r,s[e],e);return{key:e,type:t,getMetaInfo:i,prepare:n}}if(r===c.default.Resolution)return{key:e,type:t,value:this.getGLSize()};if((n=r)&&"object"===typeof n&&"TextureSize"===n.type){(0,o.default)(r&&"object"===typeof r,"unexpected textureSize object. Got: %s",r);const{getSize:n}=T(r.obj,null,e),a=n();a||console.warn(`${i}, uniform ${e}: texture size is undetermined`);const s=r.ratio?a?a[0]/a[1]:1:a||[0,0];return{key:e,type:t,value:s}}if(Array.isArray(t)&&"sampler2D"===t[0]){let o;const n=S[e],a=((e,t)=>{const r=[],o=Math.max(e.length,t.length);for(let i=0;i<o;i++)r[i]=t[i]||e[i];return r})(Array.isArray(r)?r:[],Array.isArray(n)?n:[]);a.length?a.length!==t.length?(console.warn(`${i}, uniform '${e}' should be an array of exactly ${t.length} textures (not ${a.length}).`),o=t.map((()=>null))):o=a:(console.warn(`${i}, uniform '${e}' should be an array of textures.`),o=t.map((()=>null)));const c=s[e],l=o.map(((t,r)=>T(t,c,e+"["+r+"]")));return{key:e,type:t,getMetaInfo:()=>l.reduce(((e,t)=>e.concat(t.getMetaInfo())),[]),prepare:()=>l.map((e=>e.prepare()))}}return void 0===r&&console.warn(`${i}, uniform '${e}' is undefined.`),{key:e,type:t,value:r};var n}));if(0!==b.length&&console.warn(i+": Missing uniforms: "+b.map((e=>`'${e}'`)).join(", ")+"\nall uniforms must be provided because implementations might share and reuse a Shader Program"),x.length>0)return Promise.all(x).then(this.redraw),void r.forEach((e=>e.onNodeDrawSkipped(this)));r.forEach((e=>e.onNodeDrawStart(this)));const[P,A]=this._syncDependencies(g);if(r.forEach((e=>e.onNodeSyncDeps(this,P,A))),n){const{backbuffer:e,framebuffer:t}=this;this.backbuffer=t,e&&(this.framebuffer=e)}if(this.dependencies.forEach((e=>e._draw())),r.forEach((e=>e.onNodeDraw(this,I))),h.bind(),this._bind(),I.forEach((e=>{const t=e.prepare?e.prepare():e.value;void 0!==t&&(h.uniforms[e.key]=t)})),p){const e=w(t,p.src),r=w(t,p.dst);e&&r&&t.blendFunc(e,r)}u&&(t.clearColor(...u.color),t.clear(t.COLOR_BUFFER_BIT)),t.drawArrays(t.TRIANGLES,0,3),d&&d(),r.forEach((e=>e.onNodeDrawEnd(this)))}}t.default=R,x(R,"propTypes",T),x(R,"defaultProps",{uniformsOptions:{},uniforms:{},blendFunc:{src:"src alpha",dst:"one minus src alpha"},clear:{color:[0,0,0,0]}}),x(R,"contextTypes",{glParent:n.default.object.isRequired,glSurface:n.default.object.isRequired,glSizable:n.default.object.isRequired}),x(R,"childContextTypes",{glParent:n.default.object.isRequired,glSizable:n.default.object.isRequired})},KN1S:function(e,t,r){"use strict";var o=r("0GS4"),i=r("fpEm"),n=r("63NL"),a=r("IrQ8"),s=r("1BqX"),c=r("o/2B");function l(e){this.gl=e,this.gl.lastAttribCount=0,this._vref=this._fref=this._relink=this.vertShader=this.fragShader=this.program=this.attributes=this.uniforms=this.types=null}var f=l.prototype;function p(e,t){return e.name<t.name?-1:1}f.bind=function(){var e;this.program||this._relink();var t=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES),r=this.gl.lastAttribCount;if(t>r)for(e=r;e<t;e++)this.gl.enableVertexAttribArray(e);else if(r>t)for(e=t;e<r;e++)this.gl.disableVertexAttribArray(e);this.gl.lastAttribCount=t,this.gl.useProgram(this.program)},f.dispose=function(){for(var e=this.gl.lastAttribCount,t=0;t<e;t++)this.gl.disableVertexAttribArray(t);this.gl.lastAttribCount=0,this._fref&&this._fref.dispose(),this._vref&&this._vref.dispose(),this.attributes=this.types=this.vertShader=this.fragShader=this.program=this._relink=this._fref=this._vref=null},f.update=function(e,t,r,l){if(!t||1===arguments.length){var f=e;e=f.vertex,t=f.fragment,r=f.uniforms,l=f.attributes}var u=this,d=u.gl,v=u._vref;u._vref=a.shader(d,d.VERTEX_SHADER,e),v&&v.dispose(),u.vertShader=u._vref.shader;var h=this._fref;if(u._fref=a.shader(d,d.FRAGMENT_SHADER,t),h&&h.dispose(),u.fragShader=u._fref.shader,!r||!l){var m=d.createProgram();if(d.attachShader(m,u.fragShader),d.attachShader(m,u.vertShader),d.linkProgram(m),!d.getProgramParameter(m,d.LINK_STATUS)){var g=d.getProgramInfoLog(m);throw new c(g,"Error linking program:"+g)}r=r||s.uniforms(d,m),l=l||s.attributes(d,m),d.deleteProgram(m)}(l=l.slice()).sort(p);var x,y=[],b=[],w=[];for(x=0;x<l.length;++x){var _=l[x];if(_.type.indexOf("mat")>=0){for(var S=0|_.type.charAt(_.type.length-1),E=new Array(S),z=0;z<S;++z)E[z]=w.length,b.push(_.name+"["+z+"]"),"number"===typeof _.location?w.push(_.location+z):Array.isArray(_.location)&&_.location.length===S&&"number"===typeof _.location[z]?w.push(0|_.location[z]):w.push(-1);y.push({name:_.name,type:_.type,locations:E})}else y.push({name:_.name,type:_.type,locations:[w.length]}),b.push(_.name),"number"===typeof _.location?w.push(0|_.location):w.push(-1)}var T=0;for(x=0;x<w.length;++x)if(w[x]<0){for(;w.indexOf(T)>=0;)T+=1;w[x]=T}var R=new Array(r.length);function I(){u.program=a.program(d,u._vref,u._fref,b,w);for(var e=0;e<r.length;++e)R[e]=d.getUniformLocation(u.program,r[e].name)}I(),u._relink=I,u.types={uniforms:n(r),attributes:n(l)},u.attributes=i(d,u,y,w),Object.defineProperty(u,"uniforms",o(d,u,r,R))},e.exports=function(e,t,r,o,i){var n=new l(e);return n.update(t,r,o,i),n}},LhdL:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r("OTww"))&&o.__esModule?o:{default:o};t.default=class{constructor(e,t=i.default){!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"loaders",void 0),this.loaders=t.get().map((t=>new t(e)))}dispose(){this.loaders.forEach((e=>e.dispose()))}resolve(e){return this.loaders.find((t=>t.canLoad(e)))}}},"M/JY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r("dEu3"));function i(e){return e&&e.__esModule?e:{default:e}}var n=i(r("laZL")).default.create({copy:{frag:o.default`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main(){
  gl_FragColor=texture2D(t,uv);
}`}}).copy;t.default=n},Ni9w:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(){var e,t,r;r=[],(t="_loaders")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}add(e){this._loaders.push(e),this._loaders.sort(((e,t)=>("number"===typeof t.priority?t.priority:0)-("number"===typeof e.priority?e.priority:0)))}remove(e){const t=this._loaders.indexOf(e);-1!==t&&this._loaders.splice(t,1)}get(){return this._loaders}}},O8XB:function(e,t,r){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n,a,s,c,l=u(r("tbvF")),f=u(r("Ytbt")),p=u(r("zqV6"));function u(e){return e&&e.__esModule?e:{default:e}}"undefined"===typeof e&&(o.Buffer=(n=i=class{},c=t=>t instanceof e,(s="isBuffer")in(a=i)?Object.defineProperty(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,n));t.default=(e,t,r,o)=>{const i="undefined"!==typeof WebGLRenderingContext&&e instanceof WebGLRenderingContext;let n=r.dtype,a=r.shape.slice(),s=e.getParameter(e.MAX_TEXTURE_SIZE);if(a[0]<0||a[0]>s||a[1]<0||a[1]>s)throw new Error("gl-react: Invalid texture size");let c=function(e,t){return 3===e.length?1===t[2]&&t[1]===e[0]*e[2]&&t[0]===e[2]:1===t[0]&&t[1]===e[0]}(a,r.stride.slice()),u=0;"float32"===n?u=e.FLOAT:"float64"===n?(u=e.FLOAT,c=!1,n="float32"):"uint8"===n?u=e.UNSIGNED_BYTE:(u=e.UNSIGNED_BYTE,c=!1,n="uint8");let d,v=0,h=0;if(2===a.length)h=v=e.LUMINANCE,a=[a[0],a[1],1],r=(0,l.default)(r.data,a,[r.stride[0],r.stride[1],1],r.offset);else{if(3!==a.length)throw new Error("gl-texture2d: Invalid shape for texture");if(1===a[2])h=v=e.ALPHA,i||(o=!1);else if(2===a[2])h=v=e.LUMINANCE_ALPHA,i||(o=!1);else if(3===a[2])v=e.RGB,h=i?e.RGB:e.RGB32F;else{if(4!==a[2])throw new Error("gl-texture2d: Invalid shape for pixel coords");v=e.RGBA,h=i?e.RGBA:e.RGBA32F}}u!==e.FLOAT||o||(u=e.UNSIGNED_BYTE,c=!1);let m,g=r.size;if(c)d=0===r.offset&&r.data.length===g?r.data:r.data.subarray(r.offset,r.offset+g);else{let t=[a[2],a[2]*a[0],1];if("float32"!==n&&"float64"!==n||u!==e.UNSIGNED_BYTE){m=p.default.malloc(g,n);let e=(0,l.default)(m,a,t,0);f.default.assign(e,r)}else{m=p.default.malloc(g,"uint8"),function(e,t){f.default.muls(e,t,255)}((0,l.default)(m,a,t,0),r)}d=m.subarray(0,g)}e.texImage2D(e.TEXTURE_2D,0,h,a[0],a[1],0,v,u,d),m&&p.default.free(m)}}).call(this,r("HDXh").Buffer,r("ntbh"))},OTww:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r("Ni9w"))&&o.__esModule?o:{default:o};const n="undefined"===typeof window?e:window,a="__webglTextureLoader_registry";var s=n[a]||(n[a]=new i.default);t.default=s}).call(this,r("ntbh"))},QLaP:function(e,t,r){"use strict";e.exports=function(e,t,r,o,i,n,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,n,a,s],f=0;(c=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},QM7d:function(e,t,r){"use strict";var o=r("033R");function i(){this.argTypes=[],this.shimArgs=[],this.arrayArgs=[],this.arrayBlockIndices=[],this.scalarArgs=[],this.offsetArgs=[],this.offsetArgIndex=[],this.indexArgs=[],this.shapeArgs=[],this.funcName="",this.pre=null,this.body=null,this.post=null,this.debug=!1}e.exports=function(e){var t=new i;t.pre=e.pre,t.body=e.body,t.post=e.post;var r=e.args.slice(0);t.argTypes=r;for(var n=0;n<r.length;++n){var a=r[n];if("array"===a||"object"===typeof a&&a.blockIndices){if(t.argTypes[n]="array",t.arrayArgs.push(n),t.arrayBlockIndices.push(a.blockIndices?a.blockIndices:0),t.shimArgs.push("array"+n),n<t.pre.args.length&&t.pre.args[n].count>0)throw new Error("cwise: pre() block may not reference array args");if(n<t.post.args.length&&t.post.args[n].count>0)throw new Error("cwise: post() block may not reference array args")}else if("scalar"===a)t.scalarArgs.push(n),t.shimArgs.push("scalar"+n);else if("index"===a){if(t.indexArgs.push(n),n<t.pre.args.length&&t.pre.args[n].count>0)throw new Error("cwise: pre() block may not reference array index");if(n<t.body.args.length&&t.body.args[n].lvalue)throw new Error("cwise: body() block may not write to array index");if(n<t.post.args.length&&t.post.args[n].count>0)throw new Error("cwise: post() block may not reference array index")}else if("shape"===a){if(t.shapeArgs.push(n),n<t.pre.args.length&&t.pre.args[n].lvalue)throw new Error("cwise: pre() block may not write to array shape");if(n<t.body.args.length&&t.body.args[n].lvalue)throw new Error("cwise: body() block may not write to array shape");if(n<t.post.args.length&&t.post.args[n].lvalue)throw new Error("cwise: post() block may not write to array shape")}else{if("object"!==typeof a||!a.offset)throw new Error("cwise: Unknown argument type "+r[n]);t.argTypes[n]="offset",t.offsetArgs.push({array:a.array,offset:a.offset}),t.offsetArgIndex.push(n)}}if(t.arrayArgs.length<=0)throw new Error("cwise: No array arguments specified");if(t.pre.args.length>r.length)throw new Error("cwise: Too many arguments in pre() block");if(t.body.args.length>r.length)throw new Error("cwise: Too many arguments in body() block");if(t.post.args.length>r.length)throw new Error("cwise: Too many arguments in post() block");return t.debug=!!e.printCode||!!e.debug,t.funcName=e.funcName||"cwise",t.blockSize=e.blockSize||64,o(t)}},RjOF:function(e,t,r){"use strict";var o,i="";e.exports=function(e,t){if("string"!==typeof e)throw new TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var r=e.length*t;if(o!==e||"undefined"===typeof o)o=e,i="";else if(i.length>=r)return i.substr(0,r);for(;r>i.length&&t>1;)1&t&&(i+=e),t>>=1,e+=e;return i=(i+=e).substr(0,r)}},Ry8g:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{const t=e.getExtension("WEBGL_lose_context");t&&t.loseContext()}},SMLl:function(e,t,r){"use strict";var o=r("RjOF");e.exports=function(e,t,r){return o(r="undefined"!==typeof r?r+"":" ",t)+e}},TBio:function(e,t,r){"use strict";var o=r("F16p");function i(e,t,r){var o,i,n=e.length,a=t.arrayArgs.length,s=t.indexArgs.length>0,c=[],l=[],f=0,p=0;for(o=0;o<n;++o)l.push(["i",o,"=0"].join(""));for(i=0;i<a;++i)for(o=0;o<n;++o)p=f,f=e[o],0===o?l.push(["d",i,"s",o,"=t",i,"p",f].join("")):l.push(["d",i,"s",o,"=(t",i,"p",f,"-s",p,"*t",i,"p",p,")"].join(""));for(l.length>0&&c.push("var "+l.join(",")),o=n-1;o>=0;--o)f=e[o],c.push(["for(i",o,"=0;i",o,"<s",f,";++i",o,"){"].join(""));for(c.push(r),o=0;o<n;++o){for(p=f,f=e[o],i=0;i<a;++i)c.push(["p",i,"+=d",i,"s",o].join(""));s&&(o>0&&c.push(["index[",p,"]-=s",p].join("")),c.push(["++index[",f,"]"].join(""))),c.push("}")}return c.join("\n")}function n(e,t,r){for(var o=e.body,i=[],n=[],a=0;a<e.args.length;++a){var s=e.args[a];if(!(s.count<=0)){var c=new RegExp(s.name,"g"),l="",f=t.arrayArgs.indexOf(a);switch(t.argTypes[a]){case"offset":var p=t.offsetArgIndex.indexOf(a);f=t.offsetArgs[p].array,l="+q"+p;case"array":l="p"+f+l;var u="l"+a,d="a"+f;if(0===t.arrayBlockIndices[f])1===s.count?"generic"===r[f]?s.lvalue?(i.push(["var ",u,"=",d,".get(",l,")"].join("")),o=o.replace(c,u),n.push([d,".set(",l,",",u,")"].join(""))):o=o.replace(c,[d,".get(",l,")"].join("")):o=o.replace(c,[d,"[",l,"]"].join("")):"generic"===r[f]?(i.push(["var ",u,"=",d,".get(",l,")"].join("")),o=o.replace(c,u),s.lvalue&&n.push([d,".set(",l,",",u,")"].join(""))):(i.push(["var ",u,"=",d,"[",l,"]"].join("")),o=o.replace(c,u),s.lvalue&&n.push([d,"[",l,"]=",u].join("")));else{for(var v=[s.name],h=[l],m=0;m<Math.abs(t.arrayBlockIndices[f]);m++)v.push("\\s*\\[([^\\]]+)\\]"),h.push("$"+(m+1)+"*t"+f+"b"+m);if(c=new RegExp(v.join(""),"g"),l=h.join("+"),"generic"===r[f])throw new Error("cwise: Generic arrays not supported in combination with blocks!");o=o.replace(c,[d,"[",l,"]"].join(""))}break;case"scalar":o=o.replace(c,"Y"+t.scalarArgs.indexOf(a));break;case"index":o=o.replace(c,"index");break;case"shape":o=o.replace(c,"shape")}}}return[i.join("\n"),o,n.join("\n")].join("\n").trim()}function a(e){for(var t=new Array(e.length),r=!0,o=0;o<e.length;++o){var i=e[o],n=i.match(/\d+/);n=n?n[0]:"",0===i.charAt(0)?t[o]="u"+i.charAt(1)+n:t[o]=i.charAt(0)+n,o>0&&(r=r&&t[o]===t[o-1])}return r?t[0]:t.join("")}e.exports=function(e,t){for(var r=t[1].length-Math.abs(e.arrayBlockIndices[0])|0,s=new Array(e.arrayArgs.length),c=new Array(e.arrayArgs.length),l=0;l<e.arrayArgs.length;++l)c[l]=t[2*l],s[l]=t[2*l+1];var f=[],p=[],u=[],d=[],v=[];for(l=0;l<e.arrayArgs.length;++l){e.arrayBlockIndices[l]<0?(u.push(0),d.push(r),f.push(r),p.push(r+e.arrayBlockIndices[l])):(u.push(e.arrayBlockIndices[l]),d.push(e.arrayBlockIndices[l]+r),f.push(0),p.push(e.arrayBlockIndices[l]));for(var h=[],m=0;m<s[l].length;m++)u[l]<=s[l][m]&&s[l][m]<d[l]&&h.push(s[l][m]-u[l]);v.push(h)}var g=["SS"],x=["'use strict'"],y=[];for(m=0;m<r;++m)y.push(["s",m,"=SS[",m,"]"].join(""));for(l=0;l<e.arrayArgs.length;++l){g.push("a"+l),g.push("t"+l),g.push("p"+l);for(m=0;m<r;++m)y.push(["t",l,"p",m,"=t",l,"[",u[l]+m,"]"].join(""));for(m=0;m<Math.abs(e.arrayBlockIndices[l]);++m)y.push(["t",l,"b",m,"=t",l,"[",f[l]+m,"]"].join(""))}for(l=0;l<e.scalarArgs.length;++l)g.push("Y"+l);if(e.shapeArgs.length>0&&y.push("shape=SS.slice(0)"),e.indexArgs.length>0){var b=new Array(r);for(l=0;l<r;++l)b[l]="0";y.push(["index=[",b.join(","),"]"].join(""))}for(l=0;l<e.offsetArgs.length;++l){var w=e.offsetArgs[l],_=[];for(m=0;m<w.offset.length;++m)0!==w.offset[m]&&(1===w.offset[m]?_.push(["t",w.array,"p",m].join("")):_.push([w.offset[m],"*t",w.array,"p",m].join("")));0===_.length?y.push("q"+l+"=0"):y.push(["q",l,"=",_.join("+")].join(""))}var S=o([].concat(e.pre.thisVars).concat(e.body.thisVars).concat(e.post.thisVars));for((y=y.concat(S)).length>0&&x.push("var "+y.join(",")),l=0;l<e.arrayArgs.length;++l)x.push("p"+l+"|=0");e.pre.body.length>3&&x.push(n(e.pre,e,c));var E=n(e.body,e,c),z=function(e){for(var t=0,r=e[0].length;t<r;){for(var o=1;o<e.length;++o)if(e[o][t]!==e[0][t])return t;++t}return t}(v);z<r?x.push(function(e,t,r,o){for(var n=t.length,a=r.arrayArgs.length,s=r.blockSize,c=r.indexArgs.length>0,l=[],f=0;f<a;++f)l.push(["var offset",f,"=p",f].join(""));for(f=e;f<n;++f)l.push(["for(var j"+f+"=SS[",t[f],"]|0;j",f,">0;){"].join("")),l.push(["if(j",f,"<",s,"){"].join("")),l.push(["s",t[f],"=j",f].join("")),l.push(["j",f,"=0"].join("")),l.push(["}else{s",t[f],"=",s].join("")),l.push(["j",f,"-=",s,"}"].join("")),c&&l.push(["index[",t[f],"]=j",f].join(""));for(f=0;f<a;++f){for(var p=["offset"+f],u=e;u<n;++u)p.push(["j",u,"*t",f,"p",t[u]].join(""));l.push(["p",f,"=(",p.join("+"),")"].join(""))}for(l.push(i(t,r,o)),f=e;f<n;++f)l.push("}");return l.join("\n")}(z,v[0],e,E)):x.push(i(v[0],e,E)),e.post.body.length>3&&x.push(n(e.post,e,c)),e.debug&&console.log("-----Generated cwise routine for ",t,":\n"+x.join("\n")+"\n----------");var T=[e.funcName||"unnamed","_cwise_loop_",s[0].join("s"),"m",z,a(c)].join("");return new Function(["function ",T,"(",g.join(","),"){",x.join("\n"),"} return ",T].join(""))()}},TGEO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebGLTextureLoader",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"WebGLTextureLoaderAsyncHashCache",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"WebGLTextureLoaderSyncHashCache",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"LoadersRegistry",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"LoaderResolver",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"globalRegistry",{enumerable:!0,get:function(){return c.default}});var o=l(r("HbIt")),i=l(r("cDsr")),n=l(r("VYxY")),a=l(r("Ni9w")),s=l(r("LhdL")),c=l(r("OTww"));function l(e){return e&&e.__esModule?e:{default:e}}},TKux:function(e,t,r){"use strict";r.d(t,"b",(function(){return ha})),r.d(t,"c",(function(){return ma})),r.d(t,"a",(function(){return ga}));var o={};r.r(o),r.d(o,"n",(function(){return ue})),r.d(o,"title",(function(){return de})),r.d(o,"Shader",(function(){return ve}));var i={};r.r(i),r.d(i,"n",(function(){return me})),r.d(i,"title",(function(){return ge})),r.d(i,"exportSize",(function(){return xe})),r.d(i,"exportStart",(function(){return ye})),r.d(i,"exportEnd",(function(){return be})),r.d(i,"exportFramePerSecond",(function(){return we})),r.d(i,"exportSpeed",(function(){return _e})),r.d(i,"Shader",(function(){return Se}));var n={};r.r(n),r.d(n,"n",(function(){return ze})),r.d(n,"title",(function(){return Te})),r.d(n,"Shader",(function(){return Re}));var a={};r.r(a),r.d(a,"n",(function(){return De})),r.d(a,"title",(function(){return Le})),r.d(a,"Shader",(function(){return Ne}));var s={};r.r(s),r.d(s,"n",(function(){return ke})),r.d(s,"title",(function(){return Be})),r.d(s,"Shader",(function(){return qe}));var c={};r.r(c),r.d(c,"n",(function(){return Ge})),r.d(c,"title",(function(){return He})),r.d(c,"Shader",(function(){return Ve}));var l={};r.r(l),r.d(l,"n",(function(){return Ye})),r.d(l,"title",(function(){return We})),r.d(l,"Shader",(function(){return Ke}));var f={};r.r(f),r.d(f,"n",(function(){return Qe})),r.d(f,"title",(function(){return Ze})),r.d(f,"Shader",(function(){return Je}));var p={};r.r(p),r.d(p,"n",(function(){return tt})),r.d(p,"title",(function(){return rt})),r.d(p,"exportSize",(function(){return ot})),r.d(p,"exportStart",(function(){return it})),r.d(p,"exportEnd",(function(){return nt})),r.d(p,"exportFramePerSecond",(function(){return at})),r.d(p,"exportSpeed",(function(){return st})),r.d(p,"Shader",(function(){return ct}));var u={};r.r(u),r.d(u,"n",(function(){return ft})),r.d(u,"title",(function(){return pt})),r.d(u,"Shader",(function(){return ut}));var d={};r.r(d),r.d(d,"n",(function(){return vt})),r.d(d,"title",(function(){return ht})),r.d(d,"Shader",(function(){return mt}));var v={};r.r(v),r.d(v,"n",(function(){return xt})),r.d(v,"title",(function(){return yt})),r.d(v,"Shader",(function(){return bt}));var h={};r.r(h),r.d(h,"n",(function(){return _t})),r.d(h,"title",(function(){return St})),r.d(h,"Shader",(function(){return Et}));var m={};r.r(m),r.d(m,"n",(function(){return Tt})),r.d(m,"title",(function(){return Rt})),r.d(m,"Shader",(function(){return It}));var g={};r.r(g),r.d(g,"n",(function(){return kt})),r.d(g,"title",(function(){return Bt})),r.d(g,"Shader",(function(){return qt}));var x={};r.r(x),r.d(x,"n",(function(){return Vt})),r.d(x,"title",(function(){return Xt})),r.d(x,"Shader",(function(){return Yt}));var y={};r.r(y),r.d(y,"n",(function(){return Kt})),r.d(y,"title",(function(){return $t})),r.d(y,"Shader",(function(){return Qt}));var b={};r.r(b),r.d(b,"n",(function(){return Jt})),r.d(b,"title",(function(){return er})),r.d(b,"Shader",(function(){return tr}));var w={};r.r(w),r.d(w,"n",(function(){return or})),r.d(w,"title",(function(){return ir})),r.d(w,"Shader",(function(){return nr}));var _={};r.r(_),r.d(_,"n",(function(){return sr})),r.d(_,"title",(function(){return cr})),r.d(_,"Shader",(function(){return lr}));var S={};r.r(S),r.d(S,"n",(function(){return ur})),r.d(S,"title",(function(){return dr})),r.d(S,"Shader",(function(){return vr}));var E={};r.r(E),r.d(E,"n",(function(){return gr})),r.d(E,"title",(function(){return xr})),r.d(E,"Shader",(function(){return yr}));var z={};r.r(z),r.d(z,"n",(function(){return wr})),r.d(z,"title",(function(){return _r})),r.d(z,"Shader",(function(){return Sr}));var T={};r.r(T),r.d(T,"n",(function(){return zr})),r.d(T,"title",(function(){return Tr})),r.d(T,"Shader",(function(){return Rr}));var R={};r.r(R),r.d(R,"n",(function(){return Pr})),r.d(R,"title",(function(){return Ar})),r.d(R,"Shader",(function(){return Or}));var I={};r.r(I),r.d(I,"n",(function(){return Lr})),r.d(I,"title",(function(){return jr})),r.d(I,"Shader",(function(){return Nr}));var P={};r.r(P),r.d(P,"n",(function(){return kr})),r.d(P,"title",(function(){return Br})),r.d(P,"exportSize",(function(){return qr})),r.d(P,"exportStart",(function(){return Fr})),r.d(P,"exportEnd",(function(){return Gr})),r.d(P,"exportFramePerSecond",(function(){return Hr})),r.d(P,"exportSpeed",(function(){return Vr})),r.d(P,"Shader",(function(){return Xr}));var A={};r.r(A),r.d(A,"n",(function(){return Kr})),r.d(A,"title",(function(){return $r})),r.d(A,"Shader",(function(){return Qr}));var O={};r.r(O),r.d(O,"n",(function(){return eo})),r.d(O,"title",(function(){return to})),r.d(O,"Shader",(function(){return ro}));var C={};r.r(C),r.d(C,"n",(function(){return io})),r.d(C,"title",(function(){return no})),r.d(C,"Shader",(function(){return ao}));var D={};r.r(D),r.d(D,"n",(function(){return co})),r.d(D,"title",(function(){return lo})),r.d(D,"Shader",(function(){return fo}));var L={};r.r(L),r.d(L,"n",(function(){return uo})),r.d(L,"title",(function(){return vo})),r.d(L,"Shader",(function(){return mo}));var j={};r.r(j),r.d(j,"n",(function(){return xo})),r.d(j,"title",(function(){return yo})),r.d(j,"Shader",(function(){return bo}));var N={};r.r(N),r.d(N,"n",(function(){return _o})),r.d(N,"title",(function(){return So})),r.d(N,"Shader",(function(){return Eo}));var U={};r.r(U),r.d(U,"n",(function(){return To})),r.d(U,"title",(function(){return Ro})),r.d(U,"Shader",(function(){return Io}));var M={};r.r(M),r.d(M,"n",(function(){return Oo})),r.d(M,"title",(function(){return Co})),r.d(M,"Shader",(function(){return Do}));var k={};r.r(k),r.d(k,"n",(function(){return No})),r.d(k,"title",(function(){return Uo})),r.d(k,"Shader",(function(){return Mo}));var B={};r.r(B),r.d(B,"n",(function(){return Bo})),r.d(B,"title",(function(){return qo})),r.d(B,"Shader",(function(){return Fo}));var q={};r.r(q),r.d(q,"n",(function(){return Vo})),r.d(q,"title",(function(){return Xo})),r.d(q,"Shader",(function(){return Yo}));var F={};r.r(F),r.d(F,"n",(function(){return Ko})),r.d(F,"title",(function(){return $o})),r.d(F,"Shader",(function(){return Qo}));var G={};r.r(G),r.d(G,"n",(function(){return Jo})),r.d(G,"title",(function(){return ei})),r.d(G,"Shader",(function(){return ti}));var H={};r.r(H),r.d(H,"n",(function(){return oi})),r.d(H,"title",(function(){return ii})),r.d(H,"Shader",(function(){return ni}));var V={};r.r(V),r.d(V,"n",(function(){return si})),r.d(V,"title",(function(){return ci})),r.d(V,"Shader",(function(){return li}));var X={};r.r(X),r.d(X,"n",(function(){return ui})),r.d(X,"title",(function(){return di})),r.d(X,"Shader",(function(){return vi}));var Y={};r.r(Y),r.d(Y,"n",(function(){return mi})),r.d(Y,"title",(function(){return gi})),r.d(Y,"Shader",(function(){return xi}));var W={};r.r(W),r.d(W,"n",(function(){return bi})),r.d(W,"title",(function(){return wi})),r.d(W,"Shader",(function(){return _i}));var K={};r.r(K),r.d(K,"n",(function(){return Ei})),r.d(K,"title",(function(){return zi})),r.d(K,"Shader",(function(){return Ti}));var $={};r.r($),r.d($,"n",(function(){return Ii})),r.d($,"title",(function(){return Pi})),r.d($,"Shader",(function(){return Ai}));var Q={};r.r(Q),r.d(Q,"n",(function(){return Ci})),r.d(Q,"title",(function(){return Di})),r.d(Q,"exportSize",(function(){return Li})),r.d(Q,"exportStart",(function(){return ji})),r.d(Q,"exportEnd",(function(){return Ni})),r.d(Q,"exportFramePerSecond",(function(){return Ui})),r.d(Q,"exportSpeed",(function(){return Mi})),r.d(Q,"Shader",(function(){return ki}));var Z={};r.r(Z),r.d(Z,"n",(function(){return Fi})),r.d(Z,"title",(function(){return Gi})),r.d(Z,"Shader",(function(){return Hi}));var J={};r.r(J),r.d(J,"n",(function(){return Xi})),r.d(J,"title",(function(){return Yi})),r.d(J,"exportSize",(function(){return Wi})),r.d(J,"exportStart",(function(){return Ki})),r.d(J,"exportEnd",(function(){return $i})),r.d(J,"exportFramePerSecond",(function(){return Qi})),r.d(J,"exportSpeed",(function(){return Zi})),r.d(J,"Shader",(function(){return Ji}));var ee={};r.r(ee),r.d(ee,"n",(function(){return tn})),r.d(ee,"title",(function(){return rn})),r.d(ee,"Shader",(function(){return on}));var te={};r.r(te),r.d(te,"n",(function(){return an})),r.d(te,"title",(function(){return sn})),r.d(te,"Shader",(function(){return cn}));var re={};r.r(re),r.d(re,"n",(function(){return fn})),r.d(re,"title",(function(){return pn})),r.d(re,"Shader",(function(){return un}));var oe={};r.r(oe),r.d(oe,"n",(function(){return vn})),r.d(oe,"title",(function(){return hn})),r.d(oe,"exportSize",(function(){return mn})),r.d(oe,"exportStart",(function(){return gn})),r.d(oe,"exportEnd",(function(){return xn})),r.d(oe,"exportFramePerSecond",(function(){return yn})),r.d(oe,"exportSpeed",(function(){return bn})),r.d(oe,"Shader",(function(){return wn}));var ie={};r.r(ie),r.d(ie,"n",(function(){return Sn})),r.d(ie,"title",(function(){return En})),r.d(ie,"Shader",(function(){return zn}));var ne={};r.r(ne),r.d(ne,"n",(function(){return Rn})),r.d(ne,"title",(function(){return In})),r.d(ne,"exportSize",(function(){return Pn})),r.d(ne,"exportStart",(function(){return An})),r.d(ne,"exportEnd",(function(){return On})),r.d(ne,"exportFramePerSecond",(function(){return Cn})),r.d(ne,"exportSpeed",(function(){return Dn})),r.d(ne,"Shader",(function(){return Ln}));var ae={};r.r(ae),r.d(ae,"exportSize",(function(){return Mn})),r.d(ae,"exportStart",(function(){return kn})),r.d(ae,"exportEnd",(function(){return Bn})),r.d(ae,"exportFramePerSecond",(function(){return qn})),r.d(ae,"exportSpeed",(function(){return Fn})),r.d(ae,"exportMP4vb",(function(){return Gn})),r.d(ae,"n",(function(){return Hn})),r.d(ae,"title",(function(){return Vn})),r.d(ae,"nfts",(function(){return Xn})),r.d(ae,"Shader",(function(){return Wn}));var se={};r.r(se),r.d(se,"n",(function(){return Qn})),r.d(se,"title",(function(){return Zn})),r.d(se,"description",(function(){return Jn})),r.d(se,"Shader",(function(){return ea}));var ce={};r.r(ce),r.d(ce,"n",(function(){return oa})),r.d(ce,"title",(function(){return ia})),r.d(ce,"Shader",(function(){return na}));var le={};r.r(le),r.d(le,"n",(function(){return sa})),r.d(le,"title",(function(){return ca})),r.d(le,"exportEnd",(function(){return la})),r.d(le,"exportFramePerSecond",(function(){return fa})),r.d(le,"preload",(function(){return pa})),r.d(le,"Shader",(function(){return ua}));var fe=r("nKUr"),pe=r("rr/c");const ue=1,de="Hello 2020",ve=({time:e})=>Object(fe.jsx)(pe.Node,{shader:he.day001,uniforms:{time:e}}),he=pe.Shaders.create({day001:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
float vingt (vec2 p) {
  p *= 1.1;
  p -= 0.1;
  return step(0.3, p.x) * step(p.x, 0.5) * 
  step(0.5, p.y) * step(p.y, 1.0) +
  step(0., p.x) * step(p.x, 0.2) * 
  step(0., p.y) * step(p.y, 0.5) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0., p.y) * step(p.y, 0.2) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0.4, p.y) * step(p.y, 0.6) +
  step(0., p.x) * step(p.x, 0.5) * 
  step(0.8, p.y) * step(p.y, 1.0) +
  step(0.6, p.x) * step(p.x, 1.0) * 
  step(0.1, p.y) * step(p.y, 0.9) -
  step(0.7, p.x) * step(p.x, 0.9) * 
  step(0.2, p.y) * step(p.y, 0.8);
}
void main() {
  vec2 p = uv + 0.1 * vec2(cos(uv.x*10.+time*0.1), sin(1.0+uv.y*10.+time*0.2));
  p -= 0.2 * pow(time*0.1, 1.3);
  vec2 r = p * (0.1+pow(0.2*time, 1.2));
  float s = vingt(mod(r, 1.0)) * step(mod(r.x, 4.0), 2.0) * step(mod(r.y, 2.0), 1.0);
  gl_FragColor = vec4(
    mix(
      vec3(1., 1., 1.),
      vec3(uv.x, uv.y, 0.5 + 0.2 * cos(time)),
      step(0.5, s)
    ), 1.0);
}`}}),me=2,ge="stripes",xe=400,ye=0,be=60,we=24,_e=1,Se=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Ee.node,uniforms:{time:e}}),Ee=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define GIF
 
float shape (vec2 p, float d) {
  float t = 0.5 + time * 0.05;
  t = pow(t, 2.);
  t += d * 0.003 * pow(t, 1.1);
  p -= 0.5;
  p /= 2.0;
  p *= mat2(cos(t), -sin(t), sin(t), cos(t));
  p += 0.5;
  t *= 2.;
  vec2 c = p - vec2(.5+0.2*cos(t), .5-0.2*sin(t));
  p *= length(c);
  float m = mod(p.x * 5.* smoothstep(0., 5., t) + t * c.y, 1.0);
  return step(length(vec2(m, p.y) - .5), .42);
}

void main() {
  vec3 c = vec3(0.);
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.0;
      c += vec3(
        shape(uvP, -1.),
        shape(uvP, 0.),
        shape(uvP, 1.)
      );
    }
  }
  c /= 4.;
  #ifdef GIF
  c *= smoothstep(60., 59., time) * smoothstep(0., 1., time);
  #endif
  gl_FragColor = vec4(c, 1.0);
}`}}),ze=3,Te="zephyr",Re=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Ie.node,uniforms:{time:e}}),Ie=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float flower (vec2 p, float n, float s, float r) {
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float d = length(p);
  float amp = (1. + 0.5 * cos((r + a * n) * 2. * PI)) / 3.;
  return step(d, s * amp);
}

float helios (vec2 p, float n, float s, float r) {
  return step(
    length(p) - step(length(p), 0.03),
    s * fract(r + n * (0.5 + 0.5 * atan(p.y, p.x) / PI)));
}

vec2 pattern (vec2 p, vec2 m) {
  float f = 0.5 * m.y * step(1., mod(0.5 + p.x / m.x, 2.));
  p.y += f;
  p = mod(p + m / 2., m) - m / 2.;
  return p;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 clr (float f) {
  float c = cos(time);
  f += 0.2 * (1. + sign(c) * pow(abs(c), 0.2));
  return palette(
    f,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    vec3(0.0, 0.2, 0.3)
  );
}

void main() {
  vec3 c = mix(
    mix(
      clr(0.2),
      clr(0.18),
      helios(uv - 0.5, 5., 0.4, 0.2 * time)
    ),
    clr(.2 + .1 * cos(6. * time + floor(10.0 * uv.y + 0.5))),
    flower(pattern(uv, vec2(0.2)), 5., 0.1, time)
  );
  gl_FragColor = vec4(c, 1.0);
}`}});var Pe=r("q1tI"),Ae=r.n(Pe);const Oe=pe.Shaders.create({InitGameOfLife:{frag:pe.GLSL`
  precision highp float;
  uniform float seed;
  // i
  varying vec2 uv;
  float random (vec2 uv) {
    return fract(sin(dot(uv + seed, vec2(12.9898,78.233))) * 43758.5453);
  }
  // i
  void main() {
    gl_FragColor = vec4(vec3(step(0.5, random(uv))), 1.0);
  }`},GameOfLife:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float size;
  uniform sampler2D t; // the previous world state
  void main() {
    float prev = step(0.5, texture2D(t, uv).r);
    float c = 1.0 / size;
    float sum =
    step(0.5, texture2D(t, uv + vec2(-1.0, -1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2(-1.0,  0.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2(-1.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 0.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0,  1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0,  0.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 1.0, -1.0)*c).r) +
    step(0.5, texture2D(t, uv + vec2( 0.0, -1.0)*c).r);
    float next = prev==1.0 && sum >= 2.0 && sum <= 3.0 || sum == 3.0 ? 1.0 : 0.0;
    gl_FragColor = vec4(vec3(next), 1.0);
  }`}}),Ce=Ae.a.memo((({tick:e,size:t,refreshEveryTicks:r})=>e%(r||1/0)===0?Object(fe.jsx)(pe.Node,{shader:Oe.InitGameOfLife,uniforms:{seed:Math.random()},width:t,height:t,backbuffering:!0,sync:!0}):Object(fe.jsx)(pe.Node,{shader:Oe.GameOfLife,width:t,height:t,backbuffering:!0,sync:!0,uniforms:{t:pe.Uniform.Backbuffer,size:t}}))),De=4,Le="Ray of Life";let je;const Ne=({time:e})=>{je||(je=e);const t=e-je,r=Math.floor(10*t),o=r+25,i=10*(1+Math.floor(r/50)),n=10*(1+Math.floor(o/50));return Object(fe.jsx)(Ue,{time:e,a:Object(fe.jsx)(pe.NearestCopy,{children:Object(fe.jsx)(Ce,{refreshEveryTicks:50,tick:r,size:i})}),b:Object(fe.jsx)(pe.NearestCopy,{children:Object(fe.jsx)(Ce,{refreshEveryTicks:50,tick:o,size:n})})})},Ue=({a:e,b:t,time:r})=>Object(fe.jsx)(pe.Node,{uniforms:{a:e,b:t,time:r},shader:Me.main}),Me=pe.Shaders.create({main:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D a, b;

const float PI = ${Math.PI};

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  float t = mod(time * 0.2, 2.);
  vec2 p = uv - .5;
  float x = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float y = mod((sqrt(1.6 * length(p)) - 2. * time / 5.), 2.);
  x = mod(x + 0.1 * y, 1.);
  float y1 = fract(y);
  float y2 = fract(y - 1.);
  float sa = step(1., y);
  float sb = step(y, 1.);
  float wallA = texture2D(a, vec2(x, y1)).r;
  float wallB = texture2D(b, vec2(x, y2)).r;
  float fade = smoothstep(.01, .011, length(p));
  vec3 c =
    palette(
      .5 +
      fade * (
      0.02 * step(fract(20. * x), 0.5) +
      .1 * sa * wallA -
      .1 * sb * wallB ),
      vec3(.8),
      vec3(.5),
      vec3(.3, .9, .9),
      vec3(0.8, 0.3, 0.2)
    );
  gl_FragColor = vec4(c, 1.0);
}`}}),ke=5,Be="Here We Go Again",qe=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Fe.node,uniforms:{time:e}}),Fe=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

float opRepF(in float p, in float s) {
  return mod(p+s*0.5,s)-s*0.5;
}
vec2 opRep(in vec2 p, in float s) {
  return mod(p+s*0.5,s)-s*0.5;
}

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float box (vec3 p, vec3 c) {
  return length(max(abs(p)-c,0.));
}

float smin( float a, float b, float k ) {
  float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
  return mix( b, a, h ) - k*h*(1.0-h);
}

float smax(float a,float b, float k) {
    return -smin(-a,-b,k);
}

float shape (vec3 p) {
  float a = box(p, vec3(3.));
  float b = sphere(p, 3.8);
  return max(-b, a);
}

float shape2 (vec3 p) {
  vec3 w = vec3(p);
  p.xy = opRep(p.xy, 2.);
  p.z = opRepF(p.z, 2.);
  float s = sphere(p, 1.4 + 0.6 * cos(6. * time));
  s = max(s, box(w, vec3(3.)));
  return s;
}

float SDF(vec3 p) {
  float s = 99.;
  p.x -= 3.;
  p.zy *= rot(cos(time / 5.));
  p.zx *= rot(cos(time / 2.));
  p.yx *= rot(0.5 * sin(time / 3.));
  p.z = opRepF(p.z, 20.);
  p.z -= 3.;
  p.x = opRepF(p.x, 20.);
  p.x -= 3.;
  float s1 = min(s, shape(p));
  p.z += 7.;
  p.x += 7.;
  float s2 = min(s, shape2(p));
  return min(s1, s2);
}

void main() {
  vec3 p = vec3 (0., 0., -14.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  vec3 c =
    pow(smoothstep(50., 0., p.z), 3.) *
    sqrt(vec3(1. - shad));
  gl_FragColor = vec4(c,1.0);
}`}}),Ge=6,He="Bestagons",Ve=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Xe.node,uniforms:{time:e}}),Xe=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float SEED = ${Math.random()};

// from http://glslsandbox.com/e#43182.0
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
///////////////////////////////////////////


vec4 scene (vec4 h) {
  vec2 p = h.xy;
  vec2 id = h.zw;
  float one = step(0., p.x+s.y*p.y) * step(0., s.y*p.y-p.x);
  float two = step(0., p.x-s.y*p.y) * step(0., p.x);
  float thr = step(p.x+s.y*p.y, 0.) * step(p.x, 0.);
  float special =
      step(mod(id.y, 4.), mod(id.x, 3.5)) *
      step(mod(id.x + 3.*id.y, 5.), 0.5);
  vec3 c =
  palette(
    0.1 * one + 0.2 * two + 0.3 * thr,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    vec3(
      mod(id.y * 73.6, 1.) * special * smoothstep(1.0, 0.0, cos(time + 0.1 * uv.x)),
      0.8 * fract((id)*0.01))
  );
  return vec4(c, 1.0);
}

void main() {
  vec2 p = 1000.0 * SEED + 0.3 * time + 5. * uv;
  gl_FragColor = scene(getHex(p));
}`}}),Ye=7,We="Worms party",Ke=({time:e})=>Object(fe.jsx)(pe.Node,{shader:$e.node,uniforms:{time:e}}),$e=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// from http://glslsandbox.com/e#43182.0
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
///////////////////////////////////////////

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}

vec2 id;

float SDF(vec3 p) {
  // The whole 3D objects are defined in this function
  p.z += 3. + cos(0.5 * time);
  p.yz *= rot(-1. + 0.1 * pow(.5 + .5*cos(0.9 * time), 4.) + 0.2 * cos(.08 * time));
  p.xz *= rot(.1 * time);
  vec4 h = getHex(p.xz);
  id = h.zw;
  p.x = h.x;
  p.z = h.y;
  p.x += 0.1 * sin(4.*(p.z + p.y + time - 0.03 * id.x));
  return sdSegment(p.xyz, 3., 0.25);
}

void main() {
  vec3 p = vec3 (0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }

  // Coloring
  vec3 c =
    pow(smoothstep(50., 0., p.z), 3.) *
    // it was pretty hard to get a nice palette.
    // not satisfied with current result..
    palette(
      shad,
      vec3(.5),
      vec3(.5),
      vec3(1., 0.2, 0.),
      vec3(
        0.6,
        0.5  + 0.5 * cos(time + 10. * length(id)),
        0.3 + 0.2 * cos(.7*time + 13. * length(id))
      )) *
    sqrt(vec3(1. - shad));
  gl_FragColor = vec4(c,1.0);
}`}}),Qe=8,Ze="moontains",Je=({time:e})=>Object(fe.jsx)(pe.Node,{shader:et.node,uniforms:{time:e}}),et=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

//////// https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in vec2 c, float h )
{
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(c.x/c.y,-1.0);
    
  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
/////////

vec3 clr (float f) {
  return palette(
    f,
    vec3(0.5),
    vec3(0.5),
    vec3(1.00, 1.00, 1.00),
    //vec3(0.3, 0.6, 1.)
    vec3(0.3, 0.15, 1.)
  );
}

float SDF(vec3 p) {
  p.z += 4.;
  p.y -= 2.;
  p.x += 4. + .2 * cos(2. * time);
  float s = sdCone(p, vec2(1. + .1 *  cos(p.z*8. - 5.*time), 2.), 6.) - .5;
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  cos(p.z*13. - 9.*time), 2.), 6.)-.8);
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  sin(p.z*11. - 7.*time), 2.), 6.)-.9);
  p.x -= 3.;
  s = min(s, sdCone(p, vec2(1. + .1 *  sin(p.z*10. - 5.*time), 2.), 6.)-.5);
  p.x -= -15. + 20. * fract(.1 * time);
  p.z -= 3.;
  p.y -= 5. + .3 * cos(2. * time);
  s = min(s, max(0.6-length(p-vec3(0.3, 0.1, 0.1)), length(p)-0.6));
  return s;
}

void main() {
  vec3 p = vec3 (0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  
  // Coloring
  vec3 c =
    clr(p.z * 0.2) *
    pow(smoothstep(50., 0., p.z), 3.) *
    vec3(sqrt(1. - shad));
  gl_FragColor = vec4(c,1.0);
}
`}}),tt=9,rt="Virus",ot=400,it=16.3,nt=26,at=24,st=.8,ct=({time:e})=>Object(fe.jsx)(pe.Node,{shader:lt.node,uniforms:{time:e}}),lt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float sdParticle( vec3 p, float d, float dist ) {
  return opSmoothUnion(
    length(p) - d,
    sdSegment(p.yxz+vec3(0.,dist,0.), dist, 0.2 * d),
    0.2
  );
}

// badly failing at making a "good" radial repeat
vec3 opRepeatPolar (vec3 p, float n, float R, float offsetA) {
  float SCALE = n/(2. * PI);
  vec2 pos2d = p.xz;
  float r = length(pos2d) / R;
  pos2d = vec2(log(r), offsetA + atan(p.z, p.x)) * SCALE;
  pos2d.y = fract(pos2d.y) - 0.5;
  return vec3(pos2d, SCALE * p.y / r);
}

vec3 opRep( in vec3 p, in vec3 c ) {
  vec3 q = mod(p+0.5*c,c)-0.5*c;
  return q;
}

float sdVirus (vec3 p, vec3 gp) {
  p.yz *= rot(-1.4 + 0.1 * cos((0.2 + gp.z * 0.001) * time));
  p.xz *= rot(0.01 * gp.z + 0.3 * cos(1. + 0.3 * time + 0.1 * gp.z));
  p.xy *= rot(.02 * gp.z + 0.3 * sin(0.4 * time));
  float s = sdSphere(p, 2.);
  p.y = abs(p.y);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p, 18., 2.2, 0.),
    0.2,
    0.4
  ), 0.2);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 1., 0.), 14., 1.9, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 1.7, 0.), 10., 1.5, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 2.1, 0.), 6., 0.6, .2),
    0.18,
    0.0
  ), 0.2);
  return s;
}

float SDF(vec3 p) {
  vec3 gp = p;
  float SCALE = 6./PI;
  p.xy *= rot(.04 * time);
  float s = sdVirus(p, gp);
  p -= vec3(4., 4., 4.);
  p.xy *= rot(p.z * .05);
  p.yz *= rot(p.z * .01);
  p.x += 0.7 * time;
  p.y += 0.8 * time;
  p.z -= time;
  float dist = 10. * smoothstep(10., 0., time);
  p = opRep(p, vec3(9.4 + dist, 6.4 + dist, 10. + dist));
  s = min(s, mix(99., sdVirus(p, gp), step(1., gp.z)));
  return s;
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float z, float shad) {
  float p = sqrt(1. - shad);
  vec3 c =
  palette(p,
    vec3(.5, .4, .9),
    vec3(.6),
    vec3(0.6, 0.5, 0.4),
    vec3(0.3-time, 0.5, 0.9))
  * p
  * smoothstep(30., 5., z);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  float edge = min(min(uv.x, 1.-uv.x), min(uv.y, 1.-uv.y));
  gl_FragColor = vec4(
    mix(
      color(p.z, shad),
      color(0., 0.5),
      step(edge, 0.02)
    )
    , 1.0);
}
`}}),ft=10,pt="ring",ut=({time:e})=>Object(fe.jsx)(pe.Node,{shader:dt.node,uniforms:{time:e}}),dt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float REP;

float SDF(vec3 p, float nb) {
  p.z -= 5. + 2. * cos(3. * time);

  pR(p.yz, abs(0.6 * cos(0.2 * time)));

  pR(p.xy, 0.7 * time);
  
  float middle = sdSphere(p, 1.5);
  float m = pModPolar(p.xy, 3. + mod(floor(1337.9 * floor(nb)), 8.));
  p.x -= time;

  REP = pMod1(p.x, 4.);
  p.y += 20.;
  float s = sdSegment(p, 40., 0.3);
  p.y -= 20.;
  float bounce = cos(REP+ 2. * m + 12. * time);
  s = opSmoothUnion(s, sdSphere(p - vec3(.0, .0, .3 * bounce), (1. + 0.3 * bounce) * smoothstep(.5, .4, sin(0.2 * time))), 0.3);

  p.x -= 2.;

  pR(p.yz, 10. * time);

  s = min(s, sdBox(p, vec3(0.2)));

  return opSmoothUnion(middle, s, 0.3);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float d, float shad) {
  vec3 c =
  palette(fract(0.5 + 0.01 * time * REP),
    vec3(.6),
    vec3(.6),
    vec3(1.),
    vec3(0.6, 0.4, 0.2))
  * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  float nb = 0.2 * time;
  for (int i=0; i<60; i++) {
    float d = SDF(p, nb);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    smoothstep(0.02, 0.04, abs(fract(nb+0.02))) *
    color(length(p.xy), shad),
    1.0);
}
`}}),vt=11,ht="magic mouse",mt=({time:e})=>Object(fe.jsx)(pe.Node,{shader:gt.node,uniforms:{time:e}}),gt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float opMouse (vec3 p) {
  return opSmoothUnion(
    sdSphere(p, 1.),
    min(
      sdSphere(p + vec3(-.8, 0., .8), 0.5),
      sdSphere(p + vec3(.8, 0., .8), 0.5)
    ),
    0.1
  );
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

float REP;
float POL;
float BIG;

float SDF(vec3 p) {
  vec3 bp = p;
  pR(bp.yz, 0.9);
  pR(bp.xy, 2. * time);
  float bigMouse = opMouse(bp);
  BIG = step(bigMouse, 0.001);
  p.x -= 20. + 3. * cos(time) + 0.2 * time;
  p.y -= 4.;
  p.z -= 7. + 0.1 * time;
  pR(p.yz, 0.6 + abs(0.4 * cos(0.15 * time)));
  pR(p.xy, 0.8 * time);
  float n = 10. + time;
  POL = pModPolar(p.xy, n);
  p.x -= time;
  REP = pMod1(p.x, 10. - 4. * smoothstep(0., 30., time));
  p.z += abs(2. * cos(
    time *
    (2. + 0.2 * REP + POL/n)
  ));
  return opSmoothUnion(
    opMouse(p),
    bigMouse,
    3.
  );
}

vec3 color (float d, float shad) {
  vec3 c =
  mix(
  palette((0.2) * POL,
    vec3(1.),
    vec3(0.5),
    vec3(1., 1., 1. - 0.7 * REP),
    vec3(0.9, 0.2, 0.6)),
    vec3(1.2),
    BIG
  )
  * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    color(length(p.xy), shad),
    1.0);
}
`}}),xt=12,yt="floor is lava",bt=({time:e})=>Object(fe.jsx)(pe.Node,{shader:wt.node,uniforms:{time:e}}),wt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

float SDF(vec3 p) {
  pR(p.yz, 2.5 + 0.3 * abs(0.8 + cos(time)));
  pR(p.xz, 2.);
  float s = 4. * cos(0.2 * p.x + 2. * time) * sin(0.1 * p.z + 1.3 * time);
  pR(p.xz, 1.);
  s += 1.6 * cos(0.2 * p.x + 5. * time) * cos(0.5 * p.z + time);
  pR(p.xz, 0.1 * time);
  s += 0.6 * cos(0.7 * p.x + 1. * time) * sin(0.9 * p.z);
  pR(p.xz, time);
  s += 0.4 * length(p);
  s += -p.y + 3.;
  return s;
}

vec3 color (float d, float shad) {
  vec3 c = palette(
    shad,
    vec3(.5),
    vec3(.5),
    vec3(0.0, 0.8, 0.9),
    vec3(0.1, 0.9, 0.4 * fract(3. * time))
  ) * sqrt(1. - shad);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  gl_FragColor = vec4(
    color(p.z, shad),
    1.0);
}
`}}),_t=13,St="chip",Et=({time:e})=>Object(fe.jsx)(pe.Node,{shader:zt.node,uniforms:{time:e}}),zt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.6),
    vec3(.3),
    vec3(1.),
    vec3(.2, .55, .75)
  );
}

void main() {
  vec2 p = uv - .5;
  vec2 ap = abs(p);
  float rect = max(ap.x, ap.y) - .2; // rect
  float m = 8.;
  float squircle = pow(pow(ap.x, m) + pow(ap.y, m), 1./m) - .2; // squircle
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  vec3 glow =
    step(0., rect) *
    ( pow(smoothstep(0.3, 0., squircle), 8.)
      + 0.2 * smoothstep(0.02, 0., rect)
      - 0.3 ) *
    color(a + 0.8 + 0.1 * time);
  vec3 shade =
    step(rect, 0.) * 0.4 * (.05 + vec3(p.y - p.x));
  gl_FragColor = vec4(shade + glow, 1.0);
}
`}}),Tt=14,Rt="seizure",It=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Pt.node,uniforms:{time:e}}),Pt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.6 + .1 * cos(.3 * time)),
    vec3(1.),
    vec3(0.22, 0.5, 0.77)
  );
}

void main() {
  float tri = max(
    0.2 - uv.y,
    max( 0.6 * uv.y - uv.x - 0.,
         0.6 * uv.y + uv.x - 1.));
  tri = max(-step(fract(time), 0.5), tri); // blink 500ms
  gl_FragColor = vec4(
    step(tri, 0.) * color(1.6 * (uv.y + time)) +
    step(0., tri) * color(sqrt(max(tri, 0.)) - 2. * time),
    1.0);
}
`}}),At=pe.Shaders.create({blur1D:{frag:pe.GLSL`precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform vec2 direction, resolution;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main () {
  gl_FragColor = blur9(t, uv, resolution, direction);
}`}});var Ot=({width:e,height:t,pixelRatio:r,direction:o,children:i})=>Object(fe.jsx)(pe.Node,{shader:At.blur1D,width:e,height:t,pixelRatio:r,uniforms:{direction:o,resolution:pe.Uniform.Resolution,t:i}});const Ct=Math.sqrt(2)/2;var Dt=(e,t,r)=>{const o=2*t*Math.ceil(e/2)/r;switch((e-1)%4){case 0:return[o,0];case 1:return[0,o];case 2:return[o*Ct,o*Ct];case 3:return[o*Ct,-o*Ct]}};const Lt=({width:e,height:t,pixelRatio:r,factor:o,children:i,passes:n,directionForPass:a})=>{const s=c=>c<=0?i:Object(fe.jsx)(Ot,{width:e,height:t,pixelRatio:r,direction:a(c,o,n),children:s(c-1)});return s(n)};Lt.defaultProps={passes:2,directionForPass:Dt};var jt=Lt;const Nt=pe.Shaders.create({blur1D:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, map;
uniform vec2 direction, resolution;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.3846153846) * direction;
  vec2 off2 = vec2(3.2307692308) * direction;
  color += texture2D(image, uv) * 0.2270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
  return color;
}

void main () {
  gl_FragColor = blur9(t, uv, resolution, direction * texture2D(map, uv).rg);
}`}});var Ut=({width:e,height:t,map:r,pixelRatio:o,direction:i,children:n})=>Object(fe.jsx)(pe.Node,{shader:Nt.blur1D,width:e,height:t,pixelRatio:o,uniforms:{direction:i,resolution:pe.Uniform.Resolution,t:n,map:r}});const Mt=({width:e,height:t,map:r,pixelRatio:o,factor:i,children:n,passes:a,directionForPass:s})=>{const c=l=>l<=0?n:Object(fe.jsx)(Ut,{width:e,height:t,map:r,pixelRatio:o,direction:s(l,i,a),children:c(l-1)});return c(a)};Mt.defaultProps={passes:2,directionForPass:Dt};const kt=15,Bt="parametric",qt=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Gt,{persistence:.98+.02*Math.cos(e)+-.8*Math.exp(-e),children:Object(fe.jsx)(jt,{passes:4,factor:.2,children:Object(fe.jsx)(Ft,{time:e})})})}),Ft=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Ht.node,uniforms:{time:e}}),Gt=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Ht.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Ht=pe.Shaders.create({persistence:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, back;
uniform float persistence;
void main () {
  gl_FragColor =
    texture2D(t, uv) + persistence*texture2D(back, uv);
}
    `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 parametric (in float t) {
  return vec2(
    sin(PI * t) + 0.8 * sin(4. * PI * t) + sin(128. * PI * t) * 0.5,
    cos(PI * t) + 0.8 * cos(4. * PI * t) + cos(128. * PI * t) * 0.5
  );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.4),
    vec3(.4),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

void main() {
  // this implement some variations of scale/speed/size to make it more trippy
  float base = mod(time, 30.);
  vec2 p = mix(2., 6., smoothstep(0., 10., base)) * (uv - .5);
  float speed = smoothstep(0., 5., base) * 3.;
  float size = 0.01 + 0.1 * smoothstep(8., 0., base);
  // interpolation of parametric function
  vec3 clr = vec3(0.);
  for (float f = 0.; f<1.; f+=1./500.) {
    float t = time + f/60.;
    vec2 c = parametric(speed * t);
    float m = smoothstep(1.1 * size, size, length(p - c));
    if (m > .0) {
      clr = m * color(t);
      break;
    }
  }
  gl_FragColor = vec4(clr, 1.0);
}
`}}),Vt=16,Xt="reuleaux",Yt=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Wt.node,uniforms:{time:e}}),Wt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float sdReuleaux(vec3 p, float edge) {
  p.y -= edge / 6.;
  p.z -= edge / 6.;
  float h = edge * sqrt(3.) / 2.;
  float a = sphere(p - vec3(0., h / 2., 0.), edge);
  float b = sphere(p + vec3(.5 * edge, h / 2., 0.), edge);
  float c = sphere(p + vec3(-.5 * edge, h / 2., 0.), edge);
  float d = sphere(p + vec3(0., 0., h), edge);
  return max(max(max(a, b), c), d);
}

float shape(vec3 p, float edge, float diverge) {
  float h = edge * sqrt(3.) / 2.;
  float a = sdReuleaux(p + diverge * vec3(0., -h / 2.-edge / 6., -edge / 6.), edge);
  float b = sdReuleaux(p + diverge * vec3(.5 * edge, h / 2. - edge / 6., -edge / 6.), edge);
  float c = sdReuleaux(p + diverge * vec3(-.5 * edge, h / 2.- edge / 6., -edge / 6.), edge);
  float d = sdReuleaux(p + diverge * vec3(0., 0.-edge / 6., h-edge / 6.), edge);
  return min(min(min(a, b), c), d);
}

float SDF(vec3 p) {
  p.yz *= rot(PI/3.);
  p.y += 3.;
  float m = mod(time, 2.2);
  float t1 = min(m, 1.);
  float t2 = max(0., min(m - 1., 1.));
  t1 *= smoothstep(2.1, 1.9, m);
  t2 *= smoothstep(2.1, 1.9, m);
  p.yz *= rot(-PI/3. * t2);
  return shape(p, 3., 2. * (t1 - t2));
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.8),
    vec3(.8),
    vec3(1., .8, .9),
    vec3(.1, .3, .7)
  );
}

void main() {
  vec3 p = vec3(0., 0., -10.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<60; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/60.;
      break;
    }
    p += d * dir * 0.5;
  }
  vec3 c =
    pow(smoothstep(10., -3., p.z), 4.) *
    sqrt(1. - shad) *
    color(0.5 * time);
  gl_FragColor = vec4(c, 1.0);
}`}}),Kt=17,$t="screws",Qt=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Zt.node,uniforms:{time:e}}),Zt=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0, height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));

	// distance to tip
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}

	// distance to base ring
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}

float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

float sphere (vec3 p, float r) {
  return length(p)-r;
}

float box (vec3 p, vec3 c) {
  return length(max(abs(p)-c,0.));
}

float opU( float d1, float d2 ) {
	return min(d1, d2);
}

float opD( float d1, float d2 ) {
	return max(d1, -d2);
}

float opSmoothSubtraction( float d1, float d2, float k ) {
    float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
    return mix( d2, -d1, h ) + k*h*(1.0-h); }

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void opDig (inout vec3 p, float dig, float k) {
  p.y -= 1.5;
  p.y += dig * 2.2;
  pR(p.xz, dig * k * .5 * PI);
}

float sdScrewHead (vec3 p, vec2 id, float screwW) {
  float r1 = random(id * .01);
  float w = .4;
  float h = .02 * (1. + mod(floor(r1 * 13.), 2.));
  float h2 = .3 * step(r1, .5);
  float sw = 0.5 + 0.5 * step(r1, .3);
  p.y -= 1.;
  vec3 pcut = p - vec3(.0, .1, 0.);
  float cut = box(pcut, vec3(.5 * sw, .04, .02));
  pcut.x -= 10. * step(r1, .7);
  pR(pcut.xz, PI/2.);
  cut = opU(cut, box(pcut, vec3(.5, .04, .02)));
  float head = fCylinder(p + vec3(.0, h2, 0.), 0.12 + screwW, h2);

  if (mod(29. * r1, 7.) < 1.) {
    pModPolar(p.xz, 6.);
    h += .02;
    p.y -= h;
    head = opU(head, box(p, vec3(w * .7, h, w * .7)));
    p.y += h;
    h *= 0.4;
  }
  else {
    head = opU(head, opD(sphere(vec3(1., 4., 1.) * p, w), p.y));
  }
  head = opU(head, fCylinder(p + vec3(.0, h/2., 0.), w, h));

  float s = opSmoothSubtraction(cut, head, .05);
  return s;
}

float sdScrew (vec3 p, float w, float k) {
  float bottom = fCone((p + vec3(.0, 1., .0)) * vec3(1., -1., 1.), w, 3. * w);
  float c = cos(k*p.y);
  float s = sin(k*p.y);
  mat2  m = mat2(c,-s,s,c);
  p.xz *= m;
  return opU(
    box(p, vec3(.2, 1., w)),
    bottom
  );
}

float SDF(vec3 p) {
  // plane floor
  float res = p.y;
  // repeat
  vec2 id = vec2(
    pMod1(p.x, 2.),
    pModInterval1(p.z, 2., -2., 1.)
  );
  float dig = .5 + .5 * cos(0.5 * time * (random(id) + 0.1 * (0.7 * id.x + 2. * id.y - 3.)));
  float k = 8. + 8. * random(id * .001);
  float w = .08 + 0.04 * mod(id.x, 3.);
  // card
  float card = opD(
    box(p, vec3(.8, 0.05, .8)),
    fCylinder(p, 2. * w, .1)
  );
  res = opU(res, card);
  p.y -= .05;
  // screw
  opDig(p, dig, k);
  res = opU(res, sdScrewHead(p, id, w));
  res = opU(res, sdScrew(p, w, k));
  return res;
}

vec3 color (vec3 p) {
  vec3 col =
    vec3(.3) +
    step(.01, p.y) * vec3(.3) +
    step(.11, p.y) * mix(
      vec3(.4, .2, -0.2),
      vec3(.0),
      step(fract(0.25 + (p.x + p.z)/4.), 0.5)
    );

  return col;
}

float raycast( in vec3 ro, in vec3 rd ) {
  float res = -1.0;
  float t = 0.;
  for(int i=0; i<200; i++ ) {
    float h = SDF( ro+rd*t );
    if( abs(h)<(0.0001*t) ) {
        res = t;
        break;
    }
    t += h * .5;
  }
  return res;
}

float calcSoftshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax ) {
    // bounding volume
    float res = 1.0;
    float t = mint;
    for( int i=0; i<24; i++ ) {
		float h = SDF( ro + rd*t );
        float s = clamp(8.0*h/t,0.0,1.0);
        res = min( res, s*s*(3.0-2.0*s) );
        t += clamp( h, 0.02, 0.2 );
        if( res<0.004 ) break;
    }
    return clamp( res, 0.0, 1.0 );
}

vec3 calcNormal( in vec3 pos ) {
  vec2 e = vec2(1.0,-1.0)*0.5773*0.0005;
  return normalize( e.xyy*SDF( pos + e.xyy ) +
          e.yyx*SDF( pos + e.yyx ) +
          e.yxy*SDF( pos + e.yxy ) +
          e.xxx*SDF( pos + e.xxx ));
}

float calcAO( in vec3 pos, in vec3 nor ) {
	float occ = 0.0;
  float sca = 1.0;
  for( int i=0; i<5; i++ ) {
      float h = 0.01 + 0.12*float(i)/4.0;
      float d = SDF( pos + h*nor );
      occ += (h-d)*sca;
      sca *= 0.95;
      if( occ>0.35 ) break;
  }
  return clamp( 1.0 - 3.0*occ, 0.0, 1.0 ) * (0.5+0.5*nor.y);
}

void main() {
  vec3 p = vec3(0., 0., 0.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  p.y += 3.5;
  p.x -= 1.5 - time;
  p.z -= 1.5;
  pR(dir.yz, -.9);
  pR(dir.xz, 0.5 * PI + 0.2 * cos(0.5 * time));

  float t = raycast(p, dir);
  vec3 pos = p + t * dir;
  vec3 nor = calcNormal(pos);
  vec3 ref = reflect(dir, nor);
  float occ = calcAO(pos, nor);

  vec3 lin = vec3(0.0);
  vec3 col = color(pos);
  // sun
  {
    float phase = sin(PI * time / 30.);
    vec3  lig = normalize( vec3(-0.5, 0.4 + phase, -0.7) );
    vec3  hal = normalize( lig - dir );
    float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
  // if( dif>0.0001 )
	      dif *= calcSoftshadow( pos, lig, 0.02, 2.5 );
float spe = pow( clamp( dot( nor, hal ), 0.0, 1.0 ),16.0);
          spe *= dif;
          spe *= 0.04+0.96*pow(clamp(1.0-dot(hal,lig),0.0,1.0),5.0);
    lin += col*1.4*dif*vec3(1.30,1.00,0.70);
  }
  // sky
  {
    float dif = sqrt(clamp( 0.5+0.5*nor.y, 0.0, 1.0 ));
          dif *= occ;
    float spe = smoothstep( -0.2, 0.2, ref.y );
          spe *= dif;
          spe *= 0.04+0.96 * pow(clamp(1.0+dot(nor,dir),0.0,1.0), 5.0 );
          spe *= calcSoftshadow( pos, ref, 0.02, 2.5 );
    lin += col*0.9*dif*vec3(0.8,0.8,1.);
  }
  col = lin;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`}}),Jt=18,er="queen",tr=({time:e})=>Object(fe.jsx)(pe.Node,{shader:rr.node,uniforms:{time:e}}),rr=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
float merge (float a, float b) {
  return min(1., a + b);
}
float flower (vec2 p, float n, float s) {
  float a = 0.5 + 0.5 * atan(p.y, p.x) / PI;
  float d = length(p);
  float amp = (1.4 + cos((a * n) * 2. * PI)) / 3.;
  float co = cos(PI/4.);
  float si = sin(PI/4.);
  p *= mat2(co,si,-si,co);
  p = abs(p);
  return smoothstep(0.01 + 0.5 * s, 0.5 * s, max(p.x, p.y)) * smoothstep(d-.01, d+.01, s * amp);
}
float flowerDot (vec2 p, float s) {
  p = abs(p);
  return smoothstep(0.06, 0.05, length(4. * p - s));
}
float circle (vec2 p) {
  return smoothstep(.04, .03, abs(length(p-.5) - .44));
}
float edgeShape (vec2 p) {
  p = 2. * abs(p-.5);
  float a = max(p.x, p.y);
  float b = min(p.x, p.y);
  return smoothstep(.54, .56, a * b * abs(cos(13. * a - 6. * b)));
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1., 1., 0.8),
    vec3(.5, .3, .5)
  );
}

vec3 tile (vec2 p, vec2 g) {
  vec3 c = color(.3);
  c = mix(c, color(.4), merge(circle(p), circle(fract(p + .5))));
  c = mix(c, color(.6), merge(flower(p-.5, 4., 0.35), flowerDot(p-.5, 0.35)));
  c = mix(c, color(.2 + .15 * abs(cos(time + 0.05 * (g.x + g.y)))), edgeShape(p));
  return c;
}

void main() {
  vec2 g = (uv * 2. + vec2(0.01, -0.1) * time) * (1. + 0.01 * cos(time) + 0.01 * time);
  vec2 pos = fract(g);
  gl_FragColor = vec4(tile(pos, g), 1.0);

}`}}),or=19,ir="they were six",nr=({time:e})=>Object(fe.jsx)(pe.Node,{shader:ar.node,uniforms:{time:e}}),ar=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
// from http://glslsandbox.com/e#43182.0 / 007 example
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// utilities from classical SDF
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
//////
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.7, .9, smoothstep(-1., 1., cos(4. * time + uv.y))),
    vec3(.1, .2, .3)
  );
}

vec3 tile (vec2 p, vec2 g) {
  float r1 = pModPolar(p, 6.); // we start by projecting our hex system into 6 triangles
  p.x -= 1./3.; // move to center of the triangle
  pR(p, (mod(r1, 2.) - .5) * PI / 3.); // depending on oddity, we will rotate counter or clockwise
  float r2 = 1. + pModPolar(p, 3.); // then split again the triangle by 3
  // color index in grid system, see explanation at the end of this file
  float index = mod(2. + mod(3. - mod(floor(.5*(r1 + 5.)), 3.), 3.) - r2, 3.);
  return color(0.1 * index); // pick color from palette!
}

float blob (vec2 p, float t) {
  float cycle = sin(11. * t);
  float cycle2 = cos(.1 * t);
  float climb = mod(.2 * t, 1.8);
  float stopAt = .8;
  // bounce jumps
  p -= vec2(
    .04 * sign(cycle) * pow(abs(cycle), 0.25) * step(climb, stopAt),
    .1 + 0.1 * pow(abs(cycle), 0.5) * step(climb, stopAt)
    + min(stopAt, climb)
    - step(stopAt, climb) * (climb - stopAt) * .82
  );
  vec2 disf = vec2(1./(0.9 - 0.3 * abs(cycle) * step(climb, stopAt)), 1.);
  return smoothstep(.024, .025, length(p * disf));
}

void main() {
  float t = time * smoothstep(0., 10., time);
  // hex grid
  vec2 g = uv * 3. + vec2(0., 0.5 * t);
  vec4 r = getHex(g);
  vec3 c = tile(r.xy * vec2(1., -1.), r.zw);
  // adding blobs
  float nb = step(8., t) + step(19., t) + step(25., t) + 3. * step(30., t);
  vec2 p = uv + vec2(.08, .0);
  float f = pMod1(p.x, 1. / 6.);
  p += step(nb + .1, f);
  c = mix(vec3(1.), c, blob(p, t + (1337. * f)));
  gl_FragColor = vec4(c, 1.0);
}`}}),sr=20,cr="trippy tiles",lr=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(fr,{persistence:.85,children:Object(fe.jsx)(pe.Node,{shader:pr.node,uniforms:{time:e}})})}),fr=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:pr.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),pr=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};
// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
// from http://glslsandbox.com/e#43182.0 / 007 example
#define SQRT3 1.7320508
const vec2 s = vec2(1.0, SQRT3);
float hex(in vec2 p){
  p = abs(p);
  return max(dot(p, s*.5), p.x);
}
vec4 getHex(vec2 p) {
  vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
  vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
  return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
}
// utilities from classical SDF
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a)) * r;
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
//////
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.5, .2 + mod(.03 * time + 0.2, .3), .8 - mod(.01 * time, .4))
  );
}

vec3 tile (vec2 p, float t) {
  float r1 = pModPolar(p, 6.);
  p.x -= 1./3.;
  pR(p, t);
  float r2 = 1. + pModPolar(p, 3.);
  float index = mod(r2 + mod(-r1, floor(2. + mod(3. * t, 3.))), 3.);
  return color(0.25 * index);
}

void main() {
  float t = pow(0.1 * time, 1.6);
  vec2 p = uv - .5;
  pR(p, .1 * t);
  vec2 g = p * (2. + floor(mod(.2 * time, 4.))) + vec2(0., .2 * t);
  vec4 r = getHex(g);
  vec3 c = tile(r.xy * vec2(1., -1.), t);
  gl_FragColor = vec4(c, 1.0);
}`}}),ur=21,dr="HODL",vr=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(hr,{persistence:Math.min(.99,.015*e),time:e,children:Object(fe.jsx)(pe.Node,{shader:mr.node,uniforms:{time:e}})})}),hr=({children:e,persistence:t,time:r})=>Object(fe.jsx)(pe.Node,{shader:mr.shakePersistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t,time:r}}),mr=pe.Shaders.create({shakePersistence:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t, back;
uniform float time;
uniform float persistence;
mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}
void main () {
  gl_FragColor = 1.02 * mix(
    texture2D(t, uv),
    texture2D(back, uv + vec2(.0, 0.005) * rot(pow(time, 1.5))),
    persistence
  );
}
    `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
const float PI = ${Math.PI};

float rect2d (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float d2d (vec2 p, float w, float h) {
  return min(rect2d(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float bitcoin2d (vec2 p) {
  p.y -= 0.1;
  p.x += .02;
  float inner = d2d(p, 0.04, 0.06);
  float outer = d2d(p, 0.1, 0.1);
  float top = max(-inner, outer);
  top = min(top, rect2d(p - vec2(-.12, .08), vec2(.02)));
  top = min(top, rect2d(p - vec2(-.06, .14), vec2(.02, .04)));
  top = min(top, rect2d(p - vec2(.04, .14), vec2(.02, .04)));
  p.x -= .01;
  p.y += 0.2;
  inner = d2d(p, 0.04, 0.06);
  outer = d2d(p, 0.11, 0.12);
  float bottom = max(-inner, outer);
  bottom = min(bottom, rect2d(p - vec2(-.13, -.09), vec2(.03)));
  bottom = min(bottom, rect2d(p - vec2(-.06, -.16), vec2(.02, .04)));
  bottom = min(bottom, rect2d(p - vec2(.04, -.16), vec2(.02, .04)));
  float f = min(top, bottom);
  return f;
}

vec3 cBase = vec3(.8, .5, .0);
vec3 cMain = vec3(1., .8, .6);
vec3 cSec = vec3(.9, .6, .1);

void main() {
  vec2 p = uv - .5;
  p.y -= 0.05 * min(1., time * .02);
  p *= 1.2;
  float phase = cos(pow(.2 * time, 1.8));
  p.x /= .02 + .98 * abs(phase);
  float shape = mix(bitcoin2d(p), 1., step(phase, .0));
  float d = length(p);
  vec3 c =
    smoothstep(.3, .7, length(uv-.5)) * cBase * .3 +
    step(shape, 0.01) * step(0., shape) * cMain +
    step(0.013, shape) * step(d, 0.41) * mix(cBase, cSec, smoothstep(.003, .002, abs(mod(d, .02)-.01))) +
    step(0.013, shape) * step(d, 0.48) * smoothstep(.011, .01, abs(d-.43)) * cMain;
  gl_FragColor = vec4(c * ((.3 * phase + .7 * abs(phase)) + .4), 1.0);
}`}}),gr=22,xr="atoms",yr=({time:e})=>Object(fe.jsx)(pe.Node,{shader:br.node,uniforms:{time:e,t:"/images/einstein-tongue-out.jpg"}}),br=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D t;

const float PI = ${Math.PI};

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    .8 - .8 * t,
    vec3(.5),
    vec3(.5),
    vec3(.4, .7, .6),
    vec3(.1, .1, .2)
  );
}

void main() {
  float rez = max(1., 64. - 8. * floor(.03 * time));
  vec2 g = mod(uv * rez, rez);
  g -= rez / 2.;
  g += .5 * rez * vec2(cos(1.5 + .5 * time), sin(.5 * time)) * smoothstep(20., 10., time);
  g *= min(1., pow(.02 + .012 * time, 1.8));
  g += rez / 2.;
  vec2 l = fract(g);
  vec2 gf = floor(g) + .5;
  g -= rez / 2.;
  g *= .8 + .2 * pow(time * .05, 1.2) * cos(.3 * time) * length(g / rez) * .5 * (1. + pow(time * .01, 1.3) * vec2(cos(g.x + .9 * time), sin(g.y + 1.1 * time)));
  g += rez / 2.;
  float r = texture2D(t, g / rez).r;
  float rf = texture2D(t, gf / rez).r;
  vec3 c = smoothstep(.01, .0, length(l-.5) - r * 0.5) * mix(color(rf), vec3(rf), min(1., .002 * time));
  gl_FragColor = vec4(c, 1.);
}`}}),wr=23,_r="Hexacubes",Sr=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Er.node,uniforms:{time:e}}),Er=pe.Shaders.create({node:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform float time;
  const float PI = ${Math.PI};
  // https://iquilezles.org/www/articles/palettes/palettes.htm
  vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
  }
  // from http://glslsandbox.com/e#43182.0 / 007 example
  #define SQRT3 1.7320508
  const vec2 s = vec2(1.0, SQRT3);
  float hex(in vec2 p){
    p = abs(p);
    return max(dot(p, s*.5), p.x);
  }
  vec4 getHex(vec2 p) {
    vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;
    vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);
    return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + 9.73);
  }
  // utilities from classical SDF
  float pModPolar(inout vec2 p, float repetitions) {
    float angle = 2.*PI/repetitions;
    float a = atan(p.y, p.x) + angle/2.;
    float r = length(p);
    float c = floor(a/angle);
    a = mod(a,angle) - angle/2.;
    p = vec2(cos(a), sin(a)) * r;
    if (abs(c) >= (repetitions/2.)) c = abs(c);
    return c;
  }
  void pR(inout vec2 p, float a) {
    p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
  }
    //////
  vec3 color (float t) {
    return palette(
      t,
      vec3(.5),
      vec3(.5),
      vec3(1.),
      vec3(.9, .1, .2)
    );
  }

  float tile (vec2 p, vec2 g, vec2 g2) {
    pR(p, PI / 6.);
    float r1 = pModPolar(p, 3.);
    p.x -= 1./3.;
    float change = smoothstep(-.5, 1., cos(time));
    pR(p, change * PI / 3.);
    float r2 = 1. + pModPolar(p, 3.);
    float index = mod(r1 + r2, 3.);
    return index;
  }

  void main() {
    vec2 p = uv - .5;
    p.x += .1 * time;
    vec2 g = p * 2.;
    vec4 r = getHex(g);
    vec4 r2 = getHex(g + vec2(-.2 * time, .4 * time));
    float i = tile(r.xy, r.zw, r2.zw);
    float sz = 0.03;
    pR(g, PI/3.);
    float m = smoothstep(.48, .52, mod(g.x, sz) / sz);
    vec3 c = color(
      .5 * smoothstep(.45, .5, abs(fract(.1 * time)-.5)) +
      i * .1 +
      0.02 * m +
      -0.1 * (r2.z - r2.w));
    gl_FragColor = vec4(c, 1.0);
  }
      `}}),zr=24,Tr="dark cubes",Rr=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Ir.node,uniforms:{time:e}}),Ir=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

uniform bool cameraMode;
uniform vec3 origin;
uniform mat3 rotation;

#define MAX_DIST 	60.
#define MIN_DIST	.001

const float PI = ${Math.PI};
const float PI2 = ${2*Math.PI};

vec2 opU (vec2 a, vec2 b) {
  return (a.x<b.x) ? a : b;
}
vec2 opI (vec2 a, vec2 b) {
  return (a.x>b.x) ? a : b;
}

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float vmax(vec3 v) {
  return max(max(v.x, v.y), v.z);
}

float fBox(vec3 p, vec3 b, float r) {
	vec3 d = abs(p) - b;
  return length(max(d, vec3(0))) + vmax(min(d, vec3(0)))-r;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec2 shape (vec3 p, float a, float b) {
  float m = abs(2. + .3 * a + .4 * b);
  m *= step(2., mod(2.7 * a + 13.3 * b, 4.));
  vec2 o = vec2(fBox(p, vec3(1.), .0), m);
  pR(p.xy, .05 * time + .2 * a);
  pR(p.yz, -.2 * time - .4 * b);
  pR(p.xz, .4 * time + .1 * a - b);
  p *= 1. + .5 * cos(2. * time + .1 * a);
  p.xy += .2 * vec2(cos(.2 * time - a * 3.), sin(.3 * time + b));
  o = opI(o, vec2(fBox(p, vec3(1.), .0), m));
  return o;
}

vec2 map(vec3 p) {
  vec2 o = vec2(MAX_DIST, 0.);
  p.x -= 1. + .5 * time;
  p.y += 14. * sqrt(smoothstep(20., 2., time));
  pR(p.yz, PI/6.);
  pR(p.xz, .05 * time);
  float a = pMod1(p.z, 4.);
  float b = pMod1(p.x, 5.);
  o = opU(o, vec2(p.y, 1.));
  p.y -= 1.8 + .7 * cos(2. * time + 2. * (b + a));
  o = opU(o, shape(p, a, b));
  return o;
}


// Boilerplate inspired from https://www.shadertoy.com/view/WscBDS

// Tetrahedron technique @iq
// https://www.iquilezles.org/www/articles/normalsSDF
vec3 getNormal(vec3 p, float t){
    float e = MIN_DIST *t;
    vec2 h = vec2(1.,-1.)*.57735027;
    return normalize( h.xyy*map( p + h.xyy*e ).x +
					  h.yyx*map( p + h.yyx*e ).x +
					  h.yxy*map( p + h.yxy*e ).x +
					  h.xxx*map( p + h.xxx*e ).x );
}

vec2 marcher(vec3 ro, vec3 rd, int maxsteps) {
	float d = 0.;
    float m = -1.;
    for(int i=0; i<300; i++){
      if (i>maxsteps) break;
    	vec2 t = map(ro + rd * d);
        if(abs(t.x)<d*MIN_DIST||d>MAX_DIST) break;
        d += i<64 ? t.x*.45 : t.x * .85;
        m  = t.y;
    }
	return vec2(d,m);
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
    vec3 l = normalize(lpos-p);
    float dif = clamp(dot(n,l),.01 , 1.);
    float shadow = marcher(p + n * .01, l, 128).x;
    if(shadow < length(p -  lpos)) dif *= .25;
    return dif;
}

vec3 camera(vec3 lp, vec3 ro, vec2 uv) {
	vec3 cf = normalize(lp - ro),
         cr = normalize(cross(vec3(0,1,0),cf)),
         cu = normalize(cross(cf,cr)),
         c  = ro + cf *.85,
         i  = c + uv.x * cr + uv.y * cu,
         rd = i - ro;
    return rd;
}


vec3 shp;
vec2 sid,sip,bid;
float saveHash, ti, tf, tg;
vec3 thp;
vec2 tip,fid;
float thsh;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return clamp(palette(
    t,
    vec3(.4),
    vec3(.9),
    vec3(.3, .5, .6),
    vec3(1., .6, .4)
  ), 0., 1.);
}

vec3 getColor(float m) {
  if (m < 2.) return vec3(.0);
  return color(m*.2);
}

vec4 mainImage() {
    vec3 C = vec3(0.),
        FC =  vec3(.2);
    vec3 lp = vec3(0.,0.,0.),
         ro = vec3(2.25,2.15,11.5);
	vec3 rd = camera(lp,ro,uv-.5);
  vec2 t = marcher(ro,rd, 256);
  thsh = saveHash;
  thp = shp;
	tip = sip;

  if(t.x<MAX_DIST){
  	vec3 p = ro + rd * t.x;
  	vec3 n = getNormal(p, t.x);
      vec3 lpos = vec3(1.5,2.5, 16.25);
  	float diff = getDiff(p, n, lpos);
		vec3 h = getColor(t.y);
      C+=diff * h;
      if(t.y>0.){
      	vec3 rr=reflect(rd,n);
          vec2 tr = marcher(p ,rr, 192);
		thsh = saveHash;
          thp = shp;
          tip = sid;
          if(tr.x<MAX_DIST){
              p += rr*tr.x;
              n = getNormal(p,tr.x);
              diff = getDiff(p,n,lpos);
              h = max(getColor(tr.y),FC);
              C+=(diff * h)*.4;

              if(t.y>0.){
                  rr=reflect(rr,n);
                  tr = marcher(p ,rr, 192);
                  thsh = saveHash;
                  thp = shp;
                  tip = sid;
                  if(tr.x<MAX_DIST){
                      p += rr*tr.x;
                      n = getNormal(p,tr.x);
                      diff = getDiff(p,n,lpos);
                      h = max(getColor(tr.y),FC);
                      C+=(diff * h)*.4;
                  }
              }

          }
      }
    }
    C = mix( C, FC, 1.-exp(-.00015*t.x*t.x*t.x));
    return vec4(pow(C, vec3(0.4545)),1.0);
}

void main() {
  gl_FragColor = mainImage();
}`}}),Pr=25,Ar="Mandelbrot",Or=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Cr,{persistence:.9,children:Object(fe.jsx)(jt,{passes:4,factor:.1,children:Object(fe.jsx)(pe.Node,{shader:Dr.node,uniforms:{time:e}})})})}),Cr=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Dr.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Dr=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  float ti = 2. * time + 10.;
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.7, .5 + .1 * cos(.01 * ti), .5),
    vec3(.5 + .2 * sin(-.07 * ti), .6 + .1 * cos(.01 * ti), .7 + .1 * sin(.3 + .03 * ti))
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 400.; iter += 1.) {
    p = vec2(p.x * p.x - p.y * p.y, 2. * p.x * p.y) + init;
    if (length(p) >= 2.0) {
      return iter / 400.;
    }
  }
  return 1.;
}

void main() {
  float acc = pow(smoothstep(0., 30., time), 1.4); // 0->1 for first 30s
  float zoom = .5 + .2 * pow(time, 1.8) * acc; // zoom in
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, .1 * time * (1. - acc)); // rotate a bit on the center
  init += vec2(.335, .388); // offset to center
  gl_FragColor = vec4(color(mandelbrot(init)), 1.0);
}
`}}),Lr=26,jr="fumes",Nr=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Ur,{persistence:.9,children:Object(fe.jsx)(jt,{passes:4,factor:Math.min(.6,.01*e),children:Object(fe.jsx)(pe.Node,{shader:Mr.node,uniforms:{time:e}})})})}),Ur=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Mr.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Mr=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  float ti = 2. * time + 60.;
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(0.5, .5 + .5 * cos(.01 * ti), 1.),
    vec3(.8 + .2 * sin(-.07 * ti), .1 + .05 * cos(.02 * ti), .1 + .1 * sin(.3 + .03 * ti))
  );
}

float gre1 (vec2 init, float t) {
  vec2 p = init;
  for (float iter = 0.; iter < 200.; iter += 1.) {
    p = vec2(
      (1. + cos(t)) * p.x * p.x - 2. *  p.y * p.y + .1 * cos(.1 * t),
      (3. + sin(t)) * p.x * p.y - .2 * cos(.3 * t + p.y)
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 200.;
    }
  }
  return 0.;
}

void main() {
  float t = .1 * time;
  float zoom = 1. + .2 * t;
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, -PI/2. + .05 * time);
  init -= vec2(.8, .0);
  gl_FragColor = vec4(color(pow(gre1(init, t), .5)), 1.0);
}
`}}),kr=27,Br="real burning ship",qr=400,Fr=0,Gr=60,Hr=12,Vr=2,Xr=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Yr,{persistence:.8+.05*Math.random(),time:e,children:Object(fe.jsx)(pe.Node,{shader:Wr.node,uniforms:{time:e}})})}),Yr=({children:e,persistence:t,time:r})=>Object(fe.jsx)(pe.Node,{shader:Wr.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t,time:r}}),Wr=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  uniform float time;
  void main () {
    vec2 offset = vec2(0.002 * (cos(2. * time) + 0.4 * sin(5. * time)), -0.006);
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv + offset),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

float tt = time;

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.7, .2 + min(.1, .01 * tt), .2)
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 400.; iter += 1.) {
    p = vec2(
      p.x * p.x - p.y * p.y,
      2. * abs(p.x * p.y) + 0.0003 * tt
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 400.;
    }
  }
  return -1.;
}

void main() {
  float zoom = 20.;
  vec2 init = 2. * (uv - .5) / zoom;
  init.x *= -1.;
  pR(init, -3.14);
  init += vec2(-1.76, -.03 - 0.0003 * tt);
  float f = mandelbrot(init);
  vec3 clr = color(f); // vec3(1.-pow(f, 0.5)))
  vec3 c = mix(clr, vec3(0.), step(f, -0.1));

  #if ${0}
  c *= smoothstep(59., 58., time);
  #endif
  gl_FragColor = vec4(c, 1.0);
}
`}}),Kr=28,$r="No, I'M Batman",Qr=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Zr,{persistence:.5+.48*Math.min(1,e/60),children:Object(fe.jsx)(pe.Node,{shader:Jr.node,uniforms:{time:e}})})}),Zr=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Jr.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Jr=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  uniform float time;
  void main () {
    vec2 offset = vec2(0.);
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv + offset),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t - 0.3 + time / 60.,
    vec3(.5),
    vec3(.5),
    vec3(.3, 1.,.8),
    vec3(.8, .3, .7)
  );
}

float mandelbrot (vec2 init) {
  vec2 p = init;
  for (float iter = 0.; iter < 200.; iter += 1.) {
    p = vec2(
      abs(p.x * p.x - p.y * p.y),
      2. * p.x * p.y
    ) + init;
    if (length(p) >= 2.0) {
      return iter / 200.;
    }
  }
  return -1.;
}

void main() {
  float zooming = pow(smoothstep(0., 30., time), 1.5);
  float rotating = smoothstep(20., 30., time);
  float zoom = .4 + 21.6 * pow(fract(.2 * time * zooming), 2.);
  vec2 init = 2. * (uv - .5);
  init /= zoom;
  pR(init, min(40., time-20.) * time * rotating);
  init += vec2(0., 1.788);
  pR(init, -PI/2.);
  float f = mandelbrot(init);
  vec3 clr = color(mix(step(f, 1.), f, rotating));
  vec3 c = mix(clr, vec3(0.), step(f, -0.1));
  gl_FragColor = vec4(c, 1.0);
}
`}}),eo=29,to="sdBitcoin(p)",ro=({time:e})=>Object(fe.jsx)(pe.Node,{shader:oo.node,uniforms:{time:e}}),oo=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

const float PI = ${Math.PI};

float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

void main() {
  vec2 p = uv - .5;
  p *= 1.5 + cos(time);
  float shape = sdBitcoin(p);
  float d = length(p);
  vec3 c =
    smoothstep(.005, 0., shape) * vec3(1.);
  c += 0.5 * smoothstep(.25, .2, fract(shape*15. + 0.5));
  gl_FragColor = vec4(c, 1.0);
}`}}),io=30,no="21 millions",ao=({time:e})=>Object(fe.jsx)(pe.Node,{shader:so.node,uniforms:{time:e,numberInCirculation:18557031}}),so=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float numberInCirculation;

#define SIZE 275.

float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

float sdBitcoin (in vec3 p, in float L, in float sz) {
  p.y += 0.05;
  p.y -= min(L, max(0.0, p.y));
  float plane = abs(p.y);
  return max(sdBitcoin2D(p.xz / sz), plane);
}

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

const vec3 rep = vec3(.65, .3, .5);

float unzooming = (.5 + .5 * cos(2.8 + .2 * time)) * smoothstep(5., 10., time);

vec2 map (vec3 p) {
  vec3 id = vec3(
    pModInterval1(p.x, rep.x, 0., SIZE),
    pModInterval1(p.y, rep.y, -SIZE, 0.),
    pModInterval1(p.z, rep.z, 0., SIZE)
  );
  float a = numberInCirculation/SIZE;
  float b = a/SIZE;
  float circ = step(SIZE + id.y - b, 0.);
  float d = sdBitcoin2D(.8 * (id.zx / SIZE - .5));
  float sz = 1. - 0.5 * step(d, 0.) - 0.3 * abs(cos(3. * time + d * 20.)) - .23* unzooming;
  p.y += 0.05 * cos(.8 * id.x + .7 *  time) * sin(.7 * id.z + .5 * time);
  p.x += 0.05 * cos(8. * id.y + .5 * time) * sin(4.7 * id.z + .3 * time);
  p.z += 0.05 * cos(7. * id.x + .6 * time) * sin(8. * id.y + .4 * time);
  return vec2(
    sdBitcoin(p.zyx, .1, sz)
    , 1. + circ);
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return mix(
    vec3(1.),
    vec3(246./255., 145./255., 29./255.),
    step(material, 1.5)
  );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  vec3 origin = vec3(-.1, 1., .1);
  origin += vec3(-100. - time, 200. - 2. * time, time) * pow(unzooming, 2.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  vec3 poi = rep * vec3(SIZE, -SIZE, SIZE) * smoothstep(.0, .5, unzooming);
  dir = lookAt(origin, poi) * dir;
  float material = 0.;
  vec3 p = origin;
  for (int i=0; i<400; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * mix(.5, .9, unzooming);
    if (hit.x < 0.001) {
      material = hit.y;
      break;
    }
  }
  vec3 n = normal(p);
  vec3 lpos = vec3(0., 5., -4.);
  vec3 c = color(material) * getDiff(p, n, lpos);
  gl_FragColor = vec4(c, 1.0);
}`}}),co=31,lo="alien tower",fo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:po.node,uniforms:{time:e,numberInCirculation:18557031}}),po=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform float numberInCirculation;

vec2 map (vec3 p);

#define PI ${Math.PI}

// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

// GRE's

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float sdReuleaux(vec3 p, float edge, float L) {
  p.y -= min(L, max(0.0, p.y));
  p.z -= edge / 6.;
  float h = edge * sqrt(3.) / 2.;
  float a = length(p - vec3(0., 0., h / 2.)) - edge;
  float b = length(p + vec3(.5 * edge, 0., h / 2.)) - edge;
  float c = length(p + vec3(-.5 * edge, 0., h / 2.)) - edge;
  return max(max(max(a, b), c), abs(p.y));
}

float sdSegment(vec3 p, float s, float L) {
  p.y -= min(L, max(0.0, p.y));
  return max(length(p)-s, abs(p.y));
}

vec2 map (vec3 p) {
  float s = p.y; // ground
  for (float f=0.; f<20.; f+=1.) {
    float t = .4 * time - f * pow(1. + .6 * time, .5) + f * pow(1. + .8 * time - sin(time), .2);
    p.xz -= .075 * vec2(cos(-t), sin(-t));
    pR(p.xz, t / 3. + PI / 2.);
    float cut = .55 * smoothstep(.8, 1., sin(time - (.03 + 0.0002 * time) * f))-length(p.xz);
    s = min(s, max(sdReuleaux(p, 1., .1), cut));
    p.y -= .11 + 0.0005 * time;
  }
  return vec2(s, 1.);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  float glitch = 0.0001 * time; // NB intentional glitch over time of the raymarcher
  vec2 t = vec2(999., 0.);
  for (int i=0; i<70; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.01 + glitch) {
      t = hit;
      break;
    }
  }
  return t;
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return vec3(1.);
}

void main() {
  float zoom = sin(.2 * time);
  vec3 origin = vec3(0., 4., -3.2 + .4 * zoom);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  pR(dir.yz, -.6 + .05 * zoom);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.5);
  c += color(hit.y) * vec3(.6, .4, .3) * getDiff(p, n, vec3(-2., 5., -4.));
  c += color(hit.y) * vec3(.2, .4, .5) * getDiff(p, n, vec3(2., 5., -4.));
  c *= ambientOcclusion(p, n, 2., 1.);
  gl_FragColor = vec4(c, 1.0);
}`}}),uo=32,vo="GoL valley";let ho;const mo=({time:e})=>{ho||(ho=e);const t=e-ho,r=Math.floor(12*t);return Object(fe.jsx)(pe.Node,{shader:go.node,uniforms:{time:e,t:Object(fe.jsx)(Ce,{refreshEveryTicks:100,tick:r,size:100})}})},go=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D t;

vec2 map (vec3 p);

#define PI ${Math.PI}
#define SIZE_F ${100}.

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// GRE's

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float sdSegment(vec3 p, float s, float L) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - s;
}

vec2 map (vec3 p) {
  p.y -= .02 * pow(abs(.5 * SIZE_F - p.x + .3 * sin(.3 * p.z + time)), 2.);
  float s = p.y; // ground
  float x = pModInterval1(p.x, 1., 0., SIZE_F);
  p.z += .5 * mod(x, 2.);
  vec2 id = vec2(x, pModInterval1(p.z, 1., 0., SIZE_F));
  vec4 lk = texture2D(t, id / SIZE_F);
  s = min(s, sdSegment(p, .4, lk.r));
  return vec2(s, 1.);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x - map(p-eps.xyy).x,
		map(p+eps.yxy).x - map(p-eps.yxy).x,
		map(p+eps.yyx).x - map(p-eps.yyx).x
	));
}

float getDiff(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<100; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * .7;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  return vec3(1.);
}

void main() {
  float zoom = cos(.2 * time);
  vec3 origin = vec3(SIZE_F/2., 9. - 5. * zoom, .5 * zoom - 2.);
  vec3 dir = normalize(vec3(uv - .5, 1. + .5 * zoom));
  pR(dir.yz, -.3 + .1 * zoom);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.);
  c += color(hit.y) * vec3(.5, .2, .1) * getDiff(p, n, vec3(0., 5., -4.));
  c += color(hit.y) * vec3(.5, .5, .7) * getDiff(p, n, vec3(SIZE_F, 5., -4.));
  c += color(hit.y) * vec3(2., 1.6, 1.) * getDiff(p, n, vec3(.5 * SIZE_F, 5., .3 * SIZE_F));
  c += .5;
  float a = ambientOcclusion(p, n, 1.5, 0.8);
  c *= a;
  c = mix(c, vec3(.9) + .1 * a, pow(clamp(.025 * length(origin - p), 0., 1.), 1.4));
  gl_FragColor = vec4(c, 1.0);
}`}}),xo=33,yo="x(x+32y)%(tN+1)%n";const bo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:wo.node,uniforms:{time:e}}),wo=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.1, .3, .4)
  );
}

float cell (vec2 p) {
  float m = 2. + floor(.05 * time);
  return mod(mod(p.x * (p.x + 32. * p.y), m * floor(time) + 1.), m);
}

void main() {
  float unzoom = 32. + 2. * time;
  vec2 offset = vec2(-.25 * unzoom, -2. * pow(time, 1.3));
  vec3 c = color(.1 * cell(floor(uv * unzoom + offset)));
  gl_FragColor = vec4(c, 1.0);
}`}}),_o=34,So="\u230a2cos(x)sin(y+t)\u230b%7";const Eo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:zo.node,uniforms:{time:e}}),zo=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.6, 1., .4),
    vec3(.9, .2, .7)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(floor(2. * cos(p.x) * sin(p.y + time)), 7.);
}

void main() {
  float unzoom = 32.;
  vec2 offset = time * vec2(1., -1.);
  vec2 p = uv * unzoom + offset;
  pR(p, PI/4.);
  vec3 c = color(.1 * floor(.2 * time) + (.1 + .005 * time) * cell(floor(p)));
  gl_FragColor = vec4(c, 1.0);
}`}}),To=35,Ro="aie confiance",Io=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Po,{persistence:.6,children:Object(fe.jsx)(pe.Node,{shader:Ao.node,uniforms:{time:e}})})}),Po=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Ao.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Ao=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      persistence
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t, float l) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.3, .5, .7),
    vec3(.5 * (time - .4 * l), .5, .3)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(p.x * p.y, 3.);
}

void main() {
  vec2 offset = time * vec2(.5, -2. - .01 * time);
  vec2 center = uv - .5;
  float a = atan(center.y, center.x);
  float l = pow(length(center), 1. / (4. + min(50., .2 * time)));
  vec2 p = vec2(a * 2.025, l * 40.) + offset;
  pR(p, PI/4.);
  vec3 c = color(cell(floor(p)), l);
  gl_FragColor = vec4(c, 1.0);
}`}}),Oo=36,Co="crois en moi",Do=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Lo,{children:Object(fe.jsx)(pe.Node,{shader:jo.node,uniforms:{time:e}})})}),Lo=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:jo.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),jo=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor = mix(
      texture2D(t, uv),
      texture2D(back, uv),
      .6 + .5 * length(uv-.5)
    );
  }
      `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(.9, 1., .7),
    vec3(.1, .6, .3)
  );
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float cell (vec2 p) {
  return mod(p.x * p.x + 6. * p.y, 4.);
}

void main() {
  vec2 offset = vec2(0., -time * 3.);
  vec2 center = uv - .5;
  float a = atan(center.y, center.x);
  float l = pow(length(center), .1);
  vec2 p = vec2(a * .9, l * 40.) + offset;
  pR(p, PI/4.);
  float n = .01 * time + .1 * pow(abs(sin(time)), 4.);
  vec3 c = color(2. + .1 * time + n * cell(floor(p)));
  gl_FragColor = vec4(c, 1.0);
}`}}),No=37,Uo="sdBrick",Mo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:ko.node,uniforms:{time:e}}),ko=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

#define PI ${Math.PI}

// https://mercury.sexy/hg_sdf/

float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) {
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}

float vmax(vec2 v) {
	return max(v.x, v.y);
}

float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}

float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}

float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 getColor (float t) {
  return palette(
    fract(floor(t * 16.)/16.),
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.1, .4, .7)
  );
}


// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}


// GRE's

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float sdBrick(vec3 p, float w, float h) {
  p.y -= .5;
  float s = fBox(p, vec3(w / 2., .5, h / 2.));
  p.x += w / 2. + .5;
  p.z += h / 2. + .5;
  p.y -= .6;
  pModInterval1(p.x, 1., 1., w);
  pModInterval1(p.z, 1., 1., h);
  s = min(s, fCylinder(p, .2, .1));
  return s;
}

vec3 move (vec3 p, float z, float y) {
  float r = step(mod(y, 2.), 0.);
  pR(p.xz, r * PI/2.);
  p.z += z;
  p.y -= y;
  return p;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  pR(p.xz, PI/4.);
  float speed = .5;
  float P = 50. * speed;
  float phase = floor(time / P);
  for (float y=0.; y<=5.; y+=1.) {
    for (float z=-2.; z<=2.; z+=1.) {
      float id = 2. + z + 5. * y;
      float tId = id * speed;
      float t2 = mod(time, 50. * speed);
      float t = mod(t2>25.*speed ? 50.-t2 : t2, 25. * speed);
      if (t < tId) continue;
      float animating = step(t, tId + speed);
      float m = fract(t / speed) * animating;
      vec3 q = move(p, z, y);
      q.y -= pow((animating - m) * 3., 2.);
      s = opU(s, vec2(sdBrick(q, 5., 1.), 2. + (1. + phase) * id));
    }
  }
  return s;
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<70; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}


vec3 color (float material) {
  if (material == 0.) return vec3(0.);
  if (material == 1.) return vec3(1.);
  return getColor(.03 * material);
}

void main() {
  vec3 origin = vec3(0., 8., -8.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  pR(dir.yz, -.6);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = .2 * color(hit.y);
  c += color(hit.y) * vec3(.7, .7, 1.) * diffuse(p, n, vec3(-5., 10., -6.));
  c += color(hit.y) * vec3(1., .7, .7) * diffuse(p, n, vec3(10., 10., -2.));
  c += color(hit.y) * vec3(.5) * diffuse(p, n, vec3(0., 10., -50.));
  c *= ambientOcclusion(p, n, 2., 1.5);
  c += smoothstep(5., 20., p.z);
  gl_FragColor = vec4(c, 1.0);
}`}}),Bo=38,qo="Golden mandelbulb",Fo=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Go,{persistence:.5,children:Object(fe.jsx)(pe.Node,{shader:Ho.node,uniforms:{time:e}})})}),Go=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Ho.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Ho=pe.Shaders.create({persistence:{frag:pe.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);


void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// FROM https://www.shadertoy.com/view/4sdGWN

#define HASHSCALE1 .1031

float hash(float p) {
	vec3 p3  = fract(vec3(p) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}
vec3 randomSphereDir(vec2 rnd) {
	float s = rnd.x*PI*2.;
	float t = rnd.y*2.-1.;
	return vec3(sin(s), cos(s), t) / sqrt(1.0 + t * t);
}
vec3 randomHemisphereDir(vec3 dir, float i) {
	vec3 v = randomSphereDir( vec2(hash(i+1.), hash(i+2.)) );
	return v * sign(dot(v, dir));
}

float ambientOcclusion( in vec3 p, in vec3 n, in float maxDist, in float falloff ) {
  const int nbIte = 12;
  const float nbIteInv = 1./float(nbIte);
  const float rad = 1.-1.*nbIteInv;
  float ao = 0.0;
  for( int i=0; i<nbIte; i++ ) {
    float l = hash(float(i))*maxDist;
    vec3 rd = normalize(n+randomHemisphereDir(n, l )*rad)*l;
    ao += (l - max(map( p + rd ).x, 0.)) / maxDist * falloff;
  }
  return clamp( 1.-ao*nbIteInv, 0., 1.);
}

// huge kudos to https://www.iquilezles.org/www/articles/mandelbulb/mandelbulb.htm
vec2 mandelbulb(vec3 p) {
  vec3 w = p;
  float dz = 1.;
  float m = dot(w,w);
  float index = 0.;
  for (int i=0; i<6; i++) {
    dz = 8.0*pow(sqrt(m),7.0)*dz + 1.0;
    float x = w.x; float x2 = x*x; float x4 = x2*x2;
    float y = w.y; float y2 = y*y; float y4 = y2*y2;
    float z = w.z; float z2 = z*z; float z4 = z2*z2;

    float k3 = x2 + z2;
    float k2 = inversesqrt( k3*k3*k3*k3*k3*k3*k3 );
    float k1 = x4 + y4 + z4 - 6.0*y2*z2 - 6.0*x2*y2 + 2.0*z2*x2;
    float k4 = x2 - y2 + z2;

    w.x =  64.0*x*y*z*(x2-z2)*k4*(x4-6.0*x2*z2+z4)*k1*k2;
    w.y = -16.0*y2*k3*k4*k4 + k1*k1;
    w.z = -8.0*y*k4*(x4*x4 - 28.0*x4*x2*z2 + 70.0*x4*z4 - 28.0*x2*z2*z4 + z4*z4)*k1*k2;

    w += p;

    m = dot(w,w);
    if (m>256.) break;
    index += 1.;
  }

  return vec2(0.25*log(m)*sqrt(m)/dz, 2. + index);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  p.y -= 1.;
  pR(p.xz, .05 * time);
  pR(p.yz, -.1 * time);
  s = opU(s, mandelbulb(p));
  return s;
}

vec3 color (float t) {
  if (t < 2.) return vec3(.9);
  return palette(
    .1 * t + time * step(mod(time, 10.), 5.),
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.5, .4, .2)
  );
}

void main() {
  vec3 origin = vec3(0., 3., -2.8);
  origin *= .7 + .3 * cos(.2 * time);
  vec3 clr = vec3(0.);
  // Anti aliasing
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.;
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      pR(dir.yz, -.5);
      vec3 p = origin;
      vec2 hit = marcher(p, dir);
      vec3 n = normal(p);
      vec3 c = vec3(0.);
      c += color(hit.y) * vec3(1., .5, .2) * diffuse(p, n, vec3(-5., 6., -4.));
      c += color(hit.y) * vec3(.2, .5, 1.) * diffuse(p, n, vec3(5., 6., -4.));
      c += color(hit.y) * vec3(.6) * diffuse(p, n, vec3(0., 8., -2.));
      c *= ambientOcclusion(p, n, 1.8, 1.2);
      c += smoothstep(5., 10., p.z);
      clr += c;
    }
  }
  clr /= 4.;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Vo=39,Xo="metaballs",Yo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Wo.node,uniforms:{time:e}}),Wo=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  float ground = p.y;
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.3 * vec3(sin(3. + .5 * time), sin(.6 * time), cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), -sin(.8 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(1.+time), cos(-time), sin(.8 * time))) - .2);
  return vec2(min(ground, d), 0.);
}

void main() {
  vec3 origin = vec3(0., 4., -3.);
  vec3 clr = vec3(0.);
  // anti aliasing
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      vec2 uvP = uv;
      uvP += vec2(x, y) / 800.;
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      pR(dir.yz, -.8);
      vec3 p = origin;
      vec2 hit = marcher(p, dir);
      vec3 n = normal(p);
      vec3 c = vec3(0.2);
      vec3 lamp1 = vec3(-6., 8., -4.);
      c += vec3(1., .7, .5) * diffuse(p, n, lamp1)
      * softshadow(p, normalize(lamp1 - p), 0.02, 10., 3.);
      vec3 lamp2 = vec3(6., 8., -4.);
      c += vec3(.5, .6, .7) * diffuse(p, n, lamp2)
        * softshadow(p, normalize(lamp2 - p), 0.02, 10., 20.);
      clr += c;
    }
  }
  clr /= 4.;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Ko=40,$o="pen-o-plasma",Qo=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Zo.node,uniforms:{time:e}}),Zo=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// HG_SDF
float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}

float vmax(vec2 v) {
	return max(v.x, v.y);
}

float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}

float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}

float vmin(vec2 v) {
	return min(v.x, v.y);
}

float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}

float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}

float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 map (vec3 p) {
  float t = .3 * time;
  vec2 s = vec2(p.y, 0.); // ground
  p.y -= 2.;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(cos(t), sin(.9 * t), 0.)) - .1);
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(cos(.8 * t), 0., -sin(t))) - .1);
  d = fOpUnionSoft(.5, d, length(p+.8 * vec3(0., -cos(t), sin(.7 * t))) - .1);
  pR(p.xy, t);
  pR(p.xz, t);
  d = fOpUnionSoft(.3, d, fBox(p, vec3(.3)));
  s = opU(s, vec2(d, 1.));
  return s;
}

vec3 color (float t, float m) {
  vec2 d = uv * 50.;
  vec2 id = floor(d);
  vec2 c = d - id;
  float l = .1 * mix(1.5, .9, sqrt(t));
  float s1 = smoothstep(.8 * l, l, abs(c.x-c.y));
  float s2 = smoothstep(.8 * l, l, abs(c.x-1.+c.y));
  float mul = 1. + step(t, .5);
  l *= mul;
  float s3 = smoothstep(.8 * l, l, length(fract(c * mul) - .5));
  float s = 1.;
  if (t < .4) s=min(s, s1);
  if (t < .6) s=min(s, s2);
  if (t < .2 || t > .6) s = min(s, s3);
  if (mod(t, .2)>.1 && mod(id.x+id.y, 2.)<1.) s=1.;
  return vec3(s);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

void main() {
  vec3 origin = vec3(0., 4., -2.);
  vec3 clr = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.8);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = vec3(0.);
  float d = 2. + 1.6 * cos(.2 * time);
  vec3 lamp1 = d * vec3(0., 10., 2.);
  float v = 1.;
  c +=
    vec3(v, .0, .0)
    * diffuse(p, n, lamp1)
    * softshadow(p, normalize(lamp1 - p), 2., 10., 8.);

  vec3 lamp2 = d * vec3(-4., 5., -3.);
  c +=
    vec3(.0, .0, v)
    * diffuse(p, n, lamp2)
    * softshadow(p, normalize(lamp2 - p), 2., 10., 8.);

  vec3 lamp3 = d * vec3(4., 5., -3.);
  c +=
    vec3(.0, v, .0)
    * diffuse(p, n, lamp3)
    * softshadow(p, normalize(lamp3 - p), 2., 10., 8.);

  c = mix(c, vec3(1.), color((c.r+c.g+c.b)/3., hit.y));

  clr += c;

  gl_FragColor = vec4(clr, 1.0);
}`}}),Jo=41,ei="reflection",ti=({time:e})=>Object(fe.jsx)(pe.Node,{shader:ri.node,uniforms:{time:e}}),ri=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);
vec3 shade (vec2 m);
float glossyness (float m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

// gre's
vec3 reflection (vec3 p, vec3 n, float maxDist) {
  vec3 o = vec3(0.);
  float bounced = 0.;
  vec3 dir = n;
  vec2 r;
  float total = 0.;
  for (int i=0; i<4; i++) {
    dir = reflect(dir, n);
    r = marcher(p, dir);
    bounced += r.x;
    if (bounced > maxDist) break;
    p += r.x * dir;
    n = normal(p);
    o += lighting(r, p, n, dir) * clamp((maxDist - bounced) / maxDist, 0., 1.);
    total += 1.;
    p += dir; // we need to progress a bit more to not have ray staying at same pos
    if (glossyness(r.y)<=.0) {
      break;
    }
  }
	return o / total;
}

float glossyness(float m) {
  return 0.8 * step(.8, m);
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return palette(
    (m - 1.) * .3,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec2 map (vec3 p) {
  vec2 ground = vec2(p.y, 0.1);
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(3. + .5 * time), .0, cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), .0)) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(.0, cos(-time), sin(.8 * time))) - .2);
  vec2 metaballs = vec2(d, 1.);

  pR(p.xz, .5 * time);

  vec2 s = opU(ground, metaballs);

  return s;
}

float specularStrength (float m) {
  if (m < 1.) return 0.0;
  return 4.0;
}
float specularPow (float m) {
  return 64.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 emitColor(vec2 hit) {
  float m = hit.y;
  return vec3(0.);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = emitColor(hit);
  vec3 lamp1 = vec3(-6., 8., -4.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * diffuse(p, n, lamp1)
      * softshadow(p, ldir1, 0.02, 10., 4.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(6., 8., -4.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.5, .6, .7) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2)
    * softshadow(p, ldir2, 0.02, 10., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.7);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  float glossy = glossyness(hit.y); // TODO fresnel
  c = mix(c, reflection(p, n, 10.), glossy);
  gl_FragColor = vec4(c, 1.0);
}`}}),oi=42,ii="reflection party",ni=({time:e})=>Object(fe.jsx)(pe.Node,{shader:ai.node,uniforms:{time:e}}),ai=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);
vec3 shade (vec2 m);
float glossyness (float m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

// from HG_SDF
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}

float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fCapsule(vec3 p, float r, float c) {
	return mix(length(p.xz) - r, length(vec3(p.x, abs(p.y) - c, p.z)) - r, step(c, abs(p.y)));
}
float fTorus(vec3 p, float smallRadius, float largeRadius) {
	return length(vec2(length(p.xz) - largeRadius, p.y)) - smallRadius;
}
float fHexagonCircumcircle(vec3 p, vec2 h) {
	vec3 q = abs(p);
	return max(q.y - h.y, max(q.x*sqrt(3.)*0.5 + q.z*0.5, q.z) - h.x);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001) {
      t = hit;
      break;
    }
  }
  return t;
}

// gre's
vec3 reflection (vec3 p, vec3 n, float maxDist) {
  vec3 o = vec3(0.);
  float bounced = 0.;
  vec3 dir = n;
  vec2 r;
  float total = 0.;
  for (int i=0; i<4; i++) {
    dir = reflect(dir, n);
    r = marcher(p, dir);
    bounced += r.x;
    if (bounced > maxDist) break;
    p += r.x * dir;
    n = normal(p);
    o += lighting(r, p, n, dir) * clamp((maxDist - bounced) / maxDist, 0., 1.);
    total += 1.;
    p += dir; // we need to progress a bit more to not have ray staying at same pos
    if (glossyness(r.y)<=.0) {
      break;
    }
  }
	return o / total;
}

float glossyness(float m) {
  return 0.8 * step(.8, m);
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return palette(
    (m - 1.) * .3,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.0, .33, .66)
  );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec2 map (vec3 p) {
  vec2 ground = vec2(p.y, 0.1);
  p.y -= 1.5;
  float d = length(p) - .2;
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(sin(3. + .5 * time), .0, cos(.7 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.4 * vec3(cos(time), sin(time), cos(.6 * time))) - .2);
  d = fOpUnionSoft(.5, d, length(p+.5 * vec3(-sin(.9 * time), cos(1.1 * time), .0)) - .2);
  d = fOpUnionSoft(.5, d, length(p+.6 * vec3(.0, cos(-time), sin(.8 * time))) - .2);
  vec2 metaballs = vec2(d, 1.);

  pR(p.xz, .5 * time);

  p.y += .5;
  vec2 s = opU(ground, metaballs);
  p.x += 1.;
  s = opU(s, vec2(fBox(p, vec3(.3)), 2.));
  p.z += 2.;
  s = opU(s, vec2(fCapsule(p, .3, .5), 3.));
  p.x -= 2.;
  s = opU(s, vec2(fTorus(p.xzy, .1, .3), 4.));
  p.z -= 2.;
  {
    vec3 w = p;
    pR(w.xz, 2. * time);
    s = opU(s, vec2(fHexagonCircumcircle(w, vec2(.3, .4)), 5.));
  }

  return s;
}

float specularStrength (float m) {
  if (m < 1.) return 0.0;
  return 6.0;
}
float specularPow (float m) {
  return 128.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

float dayTime = .5 + .5 * cos(.2 * time);

vec3 emitColor(vec2 hit) {
  float m = hit.y;
  if (m >= 1. && mod(pow(time, 1.2) + m, 5.) < .9) {
    return mix(0., 1., smoothstep(.2, .15, dayTime)) * shade(hit);
  }
  return vec3(0.);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  float lightOn = smoothstep(.1, .5, dayTime);
  vec3 c = emitColor(hit);
  vec3 lamp1 = vec3(-6., 8., -4.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    lightOn *
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * diffuse(p, n, lamp1)
      * softshadow(p, ldir1, 0.02, 10., 4.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(6., 8., -4.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    lightOn *
    vec3(.5, .6, .7) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2)
    * softshadow(p, ldir2, 0.02, 10., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.7);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  float glossy = glossyness(hit.y); // TODO fresnel
  c = mix(c, reflection(p, n, 10.), glossy);
  gl_FragColor = vec4(c, 1.0);
}`}}),si=43,ci="irreconcilable queens",li=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(fi,{persistence:.4,children:Object(fe.jsx)(pe.Node,{shader:pi.node,uniforms:{time:e}})})}),fi=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:pi.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),pi=pe.Shaders.create({persistence:{frag:pe.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<80; i++) {
    vec2 hit = map(p);
    p += dir * hit.x;
    if (hit.x < 0.001 || p.z > 20.) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float inOutCubic (float t) {
  return mix(4.*t*t*t, (t-1.)*(2.*t-2.)*(2.*t-2.)+1., step(.5, t));
}

float specularStrength (float m) {
  if (m<1.) return .1;
  return 5.0;
}
float specularPow (float m) {
  return 32.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 1., -6.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .5) * (
      // ambient
      0.2 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, ldir1, 0.02, 8., 16.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(4., 8., -7.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.6, .7, .9) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, ldir2, 0.02, 8., 12.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return vec3(mix(.05, 1., fract(m) * 2.));
}
// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.04, 4.4)), m);
}

vec2 sdChessPiece(vec3 p, float id, float white) {
  return vec2(sdChessQueen((p - vec3(0., 1.4, 0.)) / 1.4), id + .5 * white);
}

vec2 map (vec3 p) {
  // animation timings
  float phase = mod(time, 4.);
  float whiteMove = inOutCubic(min(
      1.5 * min(1., phase),
      max(0., 1. - 1.5 * max(0., phase-2.))
    ));
  phase -= 1.;
  float blackMove = inOutCubic(min(
      min(1., 1.5 * max(0., phase)),
      max(0., 1. - 1.5 * max(0., phase-2.))
    ));

  vec2 s = vec2(p.y, 0.1); // ground
  p.y -= .04;
  s = opU(s, sdChessboard(p));
  p.y -= .04;
  p.xz += vec2(3.5);
  p.x -= 3.;
  s = opU(s, sdChessPiece(p - vec3(whiteMove, 0., 0.), 10., 0.5));
  p.z -= 7.;
  s = opU(s, sdChessPiece(p - vec3(blackMove, 0., 0.), 10., 0.));
  return s;
}

void main() {
  vec3 origin = vec3(0., 2., -6.);
  origin.x += sin(2. * PI * time / 4.);
  vec3 c = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.));
  pR(dir.yz, -.4);
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),ui=44,di="royal meeting",vi=({time:e})=>Object(fe.jsx)(pe.Node,{shader:hi.node,uniforms:{time:e}}),hi=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
#define PI ${Math.PI}

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  vec2 t = vec2(999., 0.);
  for (int i=0; i<100; i++) {
    vec2 hit = map(p);
    p += dir * hit.x * .8;
    if (hit.x < 0.001 || p.z > 20.) {
      t = hit;
      break;
    }
  }
  return t;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float inOutCubic (float t) {
  return mix(4.*t*t*t, (t-1.)*(2.*t-2.)*(2.*t-2.)+1., step(.5, t));
}

float specularStrength (float m) {
  if (m<1.) return .1;
  if (m<10.) return .5;
  return 1.0;
}
float specularPow (float m) {
  return 8.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 4., -6.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(.6, .7, .8) * (
      // ambient
      0.25 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(0., 8., -7.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(1., .7, .5) * (
    // ambient
    0.05 +
    // diffuse
    shade(hit)
    * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, ldir2, 0.02, 8., 20.) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  return vec3(mix(.05, 1., fract(m) * 2.));
}
// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.04, 4.4)), m);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  if (id == 10.) s = sdChessKing((p - vec3(0., 1.4, 0.)) / 1.4);
  if (id == 11.) s = sdChessQueen((p - vec3(0., 1.4, 0.)) / 1.4);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  pR(p.xz, .1 * time);
  p.y -= .04;
  s = opU(s, sdChessboard(p));
  p.y -= .04;
  p.xz += vec2(3.5);
  float x = pModInterval1(p.x, 1., 0., 8.);
  float y = pModInterval1(p.z, 1., 0., 8.);
  float id = 10. + step(1., mod(x, 2.));
  float m = sdChessPieceId(id, 0.5 * step(mod(x+y, 2.), .9));
  float hill = step(3., x) * step(x, 4.) * step(3., y) * step(y, 4.);
  // tradeoff: as we use pMod, we need to give the marcher a fake distance to next cell..
  float piece = mix(.4, sdChessPiece(p, id), hill);
  s = opU(s, vec2(piece, m));
  return s;
}

void main() {
  vec3 origin = vec3(0., 3., -3.);
  vec3 c = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  pR(dir.yz, -.6);
  #if 0
  // debug ortho camera
  origin += vec3(2. * (uvP - .5), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),mi=45,gi="wood pawns army",xi=({time:e})=>Object(fe.jsx)(pe.Node,{shader:yi.node,uniforms:{time:e,wood:"/images/seamless-wood-background-1.jpg"}}),yi=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m, vec3 p);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .1;
  if (m<10.) return .1;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 3., -6.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(.6, .7, .8) * (
      // ambient
      0.105+
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, lamp1dir, 0.02, 8., 20.) +
      // specular
      .5 * specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 7., -7.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(1., .85, .7) * (
    // ambient
    0.05 +
    // diffuse
    shade(hit, p)
    * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
    * softshadow(p, lamp2dir, 0.02, 8., 20.) +
    // specular
    specular(n, hit.y, lamp2dir, dir, 30.)
  );
  vec3 lamp3 = vec3(0., 8., 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.3) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit, p)
    * (.5 + .5 *diffuse(p, n, lamp3)) // half lambert
    +
    // specular
    specular(n, hit.y, lamp3dir, dir, 80.)
  );
  return c;
}

vec3 shade (vec2 hit, vec3 p) {
  float m = hit.y;
  if (m < 1.) return vec3(1.);
  float wFactor = fract(m) * 2.;
  p *= 1.2;
  vec2 tUV = vec2(
    fract(p.x + .3 * p.y),
    fract(p.z - .7 * p.y)
  );
  float piece = step(10.,m);
  vec3 c = mix(
    vec3(.18, .05, .03),
    vec3(.7, .5, .3) + piece * vec3(.3, .45, .4),
    wFactor);
  vec3 t = texture2D(wood, tUV).r * c;
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    fCone(p * vec3(1., -1., 1.), .12, .5),
    fCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    fCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}


// tiles are of 1m x 1m
vec2 sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.38, manhattan),
    o
  );
  return vec2(fBox(p, vec3(4.4, 0.2, 4.4)), m);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  p.y -= .1;
  s = opU(s, sdChessboard(p));
  p.y -= .1;
  p.xz += vec2(3.5);
  float x = pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  float id = 15.;
  float m = sdChessPieceId(id, 0.5 * step(y, 3.5));
  float selected = step(1., abs(y-3.5));
  // tradeoff: as we use pMod, we need to give the marcher a fake distance to next cell..
  float piece = mix(0.4, sdChessPiece(p, id), selected);
  s = opU(s, vec2(piece, m));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float zoom = .5 + .5 * cos(.3 * time);
  origin = vec3(0., 3. + 5. * zoom, 0.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  // debug ortho camera
  #if 0
  origin += vec3(3. * (uvP - .5)- vec2(0., 2.), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  origin.x = 6. * cos(.2 * time);
  origin.z = 10. * sin(.3 * time);
  dir = lookAt(origin, vec3(0., 1., -1.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),bi=46,wi="Bank of Bicoin",_i=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Si.node,uniforms:{time:e}}),Si=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m, vec3 p);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCone(vec3 p, float radius, float height) {
	vec2 q = vec2(length(p.xz), p.y);
	vec2 tip = q - vec2(0., height);
	vec2 mantleDir = normalize(vec2(height, radius));
	float mantle = dot(tip, mantleDir);
	float d = max(mantle, -q.y);
	float projected = dot(tip, vec2(mantleDir.y, -mantleDir.x));
	if ((q.y > height) && (projected < 0.)) {
		d = max(d, length(tip));
	}
	if ((q.x > radius) && (projected > length(vec2(height, radius)))) {
		d = max(d, length(q - vec2(radius, 0.)));
	}
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  return 0.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-6., 10., -6.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(1., .7, .4) * (
      // ambient
      0.1+
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, lamp1dir, 0.02, 8., 12.) +
      // specular
      specular(n, hit.y, lamp1dir, dir, 40.)
    );
  vec3 lamp2 = vec3(4., 6., 6.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    .8 * vec3(.0,.6,1.) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 8., 30.) +
      // specular
      specular(n, hit.y, lamp2dir, dir, 40.)
    );
  return c;
}

vec3 shade (vec2 hit, vec3 p) {
  float m = hit.y;
  if (m==0.1) return vec3(.7);
  if (m==2.) return vec3(.2);
  return vec3(1.);
}

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

float sdBitcoin (in vec3 p, in float L, in float sz) {
  p.y += 0.05;
  p.y -= min(L, max(0.0, p.y));
  float plane = abs(p.y);
  return max(sdBitcoin2D(-p.xz / sz), plane);
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, 0.1); // ground
  float f = min(
    sdBitcoin((p+vec3(.5,0.,0.)).zyx, 1.5, 1.),
    sdBitcoin((p-vec3(.5,0.,0.)).zyx * vec3(-1.,1.,1.), 1.8, 1.)
  );
  f = fOpUnionSoft(.1, f, sdBitcoin(p, 2., 2.));
  f = min(f, sdSegment(p - vec3(.16, 0., -.02), 2.5, .01));
  s = opU(s, vec2(f, 1.));
  s = opU(s, vec2(
    min(
      sdBitcoin((p-vec3(-1.5,0.,.5)).zyx, .1, 20.),
      sdBox(p-vec3(.01, 0., 0.), vec3(.12, .05, 2.))
    )
  , 2.));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 6., 0.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  // debug ortho camera
  #if 0
  origin += vec3(3. * (uvP - .5)- vec2(0., 2.), 0.);
  dir = vec3(0., 0., 1.);
  #endif
  origin.x += 6. * sin(.5 + .2 * time);
  origin.z += 4. * cos(.2 * time);
  dir = lookAt(origin, vec3(0., 1., 0.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),Ei=47,zi="glow experiment",Ti=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Ri.node,uniforms:{time:e}}),Ri=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

vec2 map (vec3 p);
vec3 shade (vec2 m);
vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

// glowing is an output that contains the rgb color that is glowing with a alpha that contains how much it's glowing (not bounded)
vec2 marcher (inout vec3 p, vec3 dir, inout vec4 glowing) {
  vec2 hit = vec2(999., 0.);
  float t = 0.;
  float ph = 0.;
  float tA = 0.;
  vec3 tC = vec3(0.);

  for (int i=0; i<150; i++) {
    vec2 h = map(p + t * dir);
    h.x = min(.3, h.x);
    t += h.x;
    if (h.x < .001 || p.z > 20.) {
      hit = h;
      break;
    }
    if (h.y > 1.) {
      float a = .8 * ph * pow(smoothstep(.8, .0, h.x), 16.);
      ph = h.x;
      tC += a * shade(h);
      tA += a;
    }
  }

  glowing = vec4(tC / tA, min(1., tA));

  p += t * dir;
  return hit;
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 clr = shade(hit);
  float glow = step(1., hit.y);
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-6., 12., -4.);
  vec3 lamp1dir = normalize(lamp1 - p);
  vec3 lamp2 = vec3(6., 6., -4.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c = .8 * glow * clr;
  c +=
    .6 *
    (.45 * cos(time) + .5) *
    vec3(1., .7, .5) * (
      // ambient
      0.1 +
      // diffuse
      clr *
      // glow have half lambert
      mix(diffuse(p, n, lamp1), 1., .5 * glow)  *
      // glow don't receive shadows
      mix(softshadow(p, lamp1dir, 0.02, 8., 20.), 1., glow)
    );
  c +=
    .8 *
    (.45 * sin(2. * time) + .5) *
    vec3(.1, .4, .6) * (
      // ambient
      0.1 +
      // diffuse
      clr *
      // glow have half lambert
      mix(diffuse(p, n, lamp2), 1., .5 * glow)  *
      // glow don't receive shadows
      mix(softshadow(p, lamp2dir, 0.02, 8., 10.), 1., glow)
    );
  return c;
}

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t + time,
    vec3(.5),
    vec3(.5),
    vec3(1., 1.1, 1.),
    vec3(.1, .3, .5)
  );
}

vec3 shade (vec2 hit) {
  float m = hit.y;
  if (m<1.) return vec3(m);
  return vec3(color(fract(m)));
}

vec2 map (vec3 p) {
  vec2 s = vec2(p.y, .7); // ground
  p.y -= .5;
  // non glowing objects
  s = opU(s, vec2(fBox(p, vec3(.5)), .4));
  s = opU(s, vec2(fBox(p+vec3(1.2, 0.1, 1.2), vec3(.4)), 2.2));
  s = opU(s, vec2(fBox(p+vec3(-1.2, 0.1, 1.2), vec3(.4)), 2.7));

  // glowing objects
  p.y -= .6;
  s = opU(s, vec2(fSphere(p, .3), 2.));
  s = opU(s, vec2(fSphere(p+vec3(1.2, -1. + .8 * cos(time), 1.2), .3), 2.2));
  s = opU(s, vec2(fSphere(p+vec3(-1.2, -1. + .8 * sin(time), 1.2), .3), 2.7));
  s = opU(s, vec2(sdSegment((p+vec3(1., 0.6, 1.2)).zxy, 2., .05), 2.2+.5*smoothstep(-1., 1., p.x + .5 * cos(time))));
  pR(p.xz, time);
  pR(p.xy, .5);
  s = opU(s, vec2(sdSegment(p.zxy, 4., .05), 2.));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 10., -9.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  origin.x += 6. * sin(.5 + .2 * time);
  dir = lookAt(origin, vec3(0., 0., 0.)) * dir;
  vec3 p = origin;
  vec4 glowing = vec4(0.);
  vec2 hit = marcher(p, dir, glowing);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  if (glowing.a>0.) {
    c = mix(c, glowing.rgb, glowing.a);
  }
  gl_FragColor = vec4(c, 1.0);
}`}}),Ii=48,Pi="Starry Night",Ai=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Oi.node,uniforms:{time:e,img:"/images/seamless-wood2.jpg"}}),Oi=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D img;

#define PI ${Math.PI}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(
      .68 + .03 * cos(2. + .8 * time),
      .75 + .05 * sin(.6 * time),
      .25 + .07 * cos(.5 * time)
    )
  );
}

void main() {
  vec2 p = uv - .5;
  float t = pow(time * .2, 1.4);
  float a = (atan(p.y, p.x)/PI+1.)/2.;
  float b = pow(fract((3. + 2. * cos(.5 * t)) * length(p)- t), 2.);
  vec3 clr = mix(
    color(texture2D(img, vec2(a, b)).r),
    color(.5),
    smoothstep(.09, .08, length(p) + .01 * cos(time + a * 6. * PI + sin(a * 8. * PI - time) - cos(a * 10. * PI + pow(time-10., 1.4))))
  );
  gl_FragColor = vec4(clr, 1.0);
}`}}),Ci=49,Di="chinese lantern",Li=400,ji=0,Ni=20,Ui=24,Mi=1.1,ki=({time:e})=>Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)(Bi,{persistence:.8,children:Object(fe.jsx)(pe.Node,{shader:qi.node,uniforms:{time:e}})})}),Bi=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:qi.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),qi=pe.Shaders.create({persistence:{frag:pe.GLSL`
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t, back;
    uniform float persistence;
    void main () {
      gl_FragColor = mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
    }
        `},node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec2 map (vec3 p);


void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec2 opU (vec2 a, vec2 b) {
  if (a.x < b.x) return a;
  return b;
}

#define PI ${Math.PI}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

// huge kudos to https://www.iquilezles.org/www/articles/mandelbulb/mandelbulb.htm
vec2 mandelbulb(vec3 p) {
  vec3 w = p;
  float dz = 1.;
  float m = dot(w,w);
  float index = 0.;
  for (int i=0; i<4; i++) {
    dz = 8.0*pow(sqrt(m),7.0)*dz + 1.0;
    float x = w.x; float x2 = x*x; float x4 = x2*x2;
    float y = w.y; float y2 = y*y; float y4 = y2*y2;
    float z = w.z; float z2 = z*z; float z4 = z2*z2;

    float k3 = x2 + z2;
    float k2 = inversesqrt( k3*k3*k3*k3*k3*k3*k3 );
    float k1 = x4 + y4 + z4 - 6.0*y2*z2 - 6.0*x2*y2 + 2.0*z2*x2;
    float k4 = x2 - y2 + z2;

    k1 += .4 * sin(.9 * time);
    k4 += (.05 + pow(.005 * time, .5)) * cos(.8 * time);

    w.x =  64.0*x*y*z*(x2-z2)*k4*(x4-6.0*x2*z2+z4)*k1*k2;
    w.y = -16.0*y2*k3*k4*k4 + k1*k1;
    w.z = -8.0*y*k4*(x4*x4 - 28.0*x4*x2*z2 + 70.0*x4*z4 - 28.0*x2*z2*z4 + z4*z4)*k1*k2;

    w += p * (.5 + 2. * pow(smoothstep(.5, 1., sin(.2 * time)), 2.));

    m = dot(w,w);
    if (m>256.) break;
    index += 1.;
  }

  return vec2(0.25*log(m)*sqrt(m)/dz, 2. + index);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

vec2 marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  vec2 hit = vec2(999., 0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<60; i++) {
    vec2 h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += .9 * h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

vec2 map (vec3 p) {
  vec2 s = vec2(min(p.y, 40. - p.z), 1.); // ground
  float z = p.z;
  p.y -= 1.;
  pR(p.xz, .05 * time);
  pR(p.yz, -.1 * time);
  s = opU(s, mandelbulb(p));
  return s;
}

vec3 color (float t) {
  if (t < 2.) return vec3(.9);
  return palette(
    .2 * t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(.9, .2, .3)
  );
}

float specularStrength (float m) {
  return 2.;
}

float specularPow (float m) {
  return 8.0;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir) {
  return specularStrength(m) * pow(max(dot(dir, reflect(-ldir, n)), 0.0), specularPow(m));
}

vec3 shade (vec2 hit) {
  return color(hit.y);
}

vec3 lighting (vec2 hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-10., 10., -5.);
  vec3 ldir1 = normalize(lamp1 - p);
  c +=
    vec3(.8, .6, .4) * (
      // ambient
      0.1 +
      // diffuse
      shade(hit)
      * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      * softshadow(p, ldir1, 0.02, 8., 20.) +
      // specular
      specular(n, hit.y, ldir1, dir)
    );
  vec3 lamp2 = vec3(0., 10., 0.);
  vec3 ldir2 = normalize(lamp2 - p);
  c +=
    vec3(.4, .6, .8) * (
    // ambient
    0.1 +
    // diffuse
    shade(hit)
    * diffuse(p, n, lamp2) +
    // specular
    specular(n, hit.y, ldir2, dir)
  );
  return c;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  vec3 origin = vec3(0., 4., -4.);
  vec3 clr = vec3(0.);
  vec2 uvP = uv;
  vec3 dir = normalize(vec3(uvP - .5, 1.6 + .5 * sin(.2 * time)));
  dir = lookAt(origin, vec3(0., 1., 0.)) * dir;
  vec3 p = origin;
  vec2 hit = marcher(p, dir);
  vec3 n = normal(p);
  vec3 c = lighting(hit, p, n, dir);
  clr += c;
  gl_FragColor = vec4(clr, 1.0);
}`}}),Fi=50,Gi="jumpy rooks",Hi=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Vi.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),Vi=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
	float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<120; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return .8;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 5. + cos(time), -5.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(1., .8, .7) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      + specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 7., -3.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(.6) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 *diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 8., 32.)
    + specular(n, hit.y, lamp2dir, dir, 20.)
  );
  vec3 lamp3 = vec3(0., 2., 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.1, .2, .4) * (
    // ambient
    0.0
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, lamp3) // half lambert
    + specular(n, hit.y, lamp3dir, dir, 10.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  vec3 t = pow(texture2D(wood, tUV).r, .5) * mix(
    vec3(.4, .2, .15) * (1. - .3 * piece),
    vec3(.9, .8, .6) * (1. + piece),
    wFactor
  );
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
  pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .34;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.38, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, p.x, p.z);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  // if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT map (vec3 p) {
  HIT s = HIT(p.y, 0.1, 0., 0.); // ground
  p.y -= .1;
  s = opU(s, sdChessboard(p));
  p.y -= .1;
  p.xz += vec2(3.5);
  float id, m, piece;

  float x = pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  p.y -= .5 * abs(cos(4. * time + .2 * length(vec2(x-3., y-3.))));
  id = 14.;
  m = sdChessPieceId(id, .5 * mod(1. + x + y, 2.));
  piece = sdChessPiece(p, id);
  s = opU(s, HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(0., 6., -3.);
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 2.5));
  float zoom = 7. - 4. * cos(.4 * time);
  origin.x = zoom * cos(.10 * time);
  origin.z = zoom * sin(.09 * time);
  dir = lookAt(origin, vec3(-0.5, 0.5, -0.5)) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(3. * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),Xi=51,Yi="symmetry chess",Wi=400,Ki=0,$i=20,Qi=24,Zi=1,Ji=({time:e})=>Object(fe.jsx)(pe.Node,{shader:en.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),en=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<80; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return .8;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 c = vec3(0.);
  vec3 lamp1 = vec3(-4., 0.5, -5.);
  vec3 lamp1dir = normalize(lamp1 - p);
  c +=
    vec3(.8, .9, .4) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, lamp1)) // half lambert
      + specular(n, hit.y, lamp1dir, dir, 60.)
    );
  vec3 lamp2 = vec3(4., 2., -3.);
  vec3 lamp2dir = normalize(lamp2 - p);
  c +=
    vec3(1., .4, .3) * (
    // ambient
    0.3
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, lamp2)) // half lambert
      * softshadow(p, lamp2dir, 0.02, 4., 32.)
    + specular(n, hit.y, lamp2dir, dir, 20.)
  );
  vec3 lamp3 = vec3(0., 1.5 + cos(2. * PI * time), 10.);
  vec3 lamp3dir = normalize(lamp3 - p);
  c +=
    vec3(.5) * (
    // ambient
    .1
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, lamp3) // half lambert
    + specular(n, hit.y, lamp3dir, dir, 10.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  vec3 t = texture2D(wood, tUV).r * mix(
    vec3(.1),
    vec3(.9),
    wFactor
  );
  return t;
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

// tiles are of 1m x 1m
HIT sdChessboardMini (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(1., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(1.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(1.2, 0.1, 1.2)), m, p.x - .5 * p.y, p.z + .5 * p.y);
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  // if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

HIT board (vec3 p) {
  p.y -= .05;
  HIT s = sdChessboardMini(p);
  p.y -= .05;
  p.xz += vec2(0.5);
  float x = pModInterval1(p.x, 1., 0., 1.);
  float y = pModInterval1(p.z, 1., 0., 1.);
  s = opU(s, piece(p, 10. + x + 4. * y, mod(x + y, 2.)));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  s = opU(s, board(vec3(0., 3.2, 0.) - p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float zoom = 4. + sin(2. * PI * .05 * time);
  origin = vec3(
    zoom * cos(.1 * 2. * PI * time),
    1.6 + cos(.1 * 2. * PI * time),
    zoom * sin(.1 * 2. * PI * time)
  );
  vec3 c = vec3(0.);
  vec3 dir;
  vec2 uvP = uv;

  #if 0
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      uvP = uv + vec2(x, y) / 800.0;
  #endif
      dir = normalize(vec3(uvP - .5, .8));
      dir = lookAt(origin, vec3(0., 1.6, 0.)) * dir;

  #if 0
    }
  }
  c /= 4.0;
  #endif

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(3. * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  // special cell shading effect on pieces
  if (hit.y > 9.) {
    c *= 1.2 - .5 * step(-.8, dot(dir, n));
  }
  gl_FragColor = vec4(c, 1.0);
}`}}),tn=52,rn="knights dance",on=({time:e})=>Object(fe.jsx)(pe.Node,{shader:nn.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),nn=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .2;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-4., 4., -4.);
  ldir = normalize(l - p);
  c +=
    .8 * vec3(1., .8, .5) * (
      // ambient
      0.15
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
        * softshadow(p, ldir, 0.02, 4., 16.)
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    .8 * vec3(.4, .5, .7) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(0., 3., -2.);
  ldir = normalize(l - p);
  c +=
    vec3(.5) * (
    // diffuse
    + shade(hit, p)
      * diffuse(p, n, l)
    + specular(n, hit.y, ldir, dir, 80.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) return vec3(.8);
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  return (.5 + .5 * texture2D(wood, tUV).r) * mix(
    mix(vec3(.35, .2, .15), vec3(.1), piece),
    mix(vec3(.8, .7, .5), vec3(.9), piece),
    wFactor
  );
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, .3 * (p.x - p.y), .3 * (p.z + p.y));
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

float sdChessKnight (vec3 p) {
  float d = min(
    fDisc(p + vec3(.0, .91, .0), .04) - .08,
    fDisc(p + vec3(.0, .96, .0), .12) - .04
  );
  vec3 q = p + vec3(0., .6, .0);
  q.y += .05;
  d = min(d, fBox(q, vec3(.03, .16, .0)) - .05);
  q.y -= .05;
  pR(q.xy, 1.);
  q.x += .05;
  q.y += .05;
  d = fOpUnionSoft(.1, d, fBox(q, vec3(.02, .08, .0)) - .03);
  q.y -= .15;
  q.x -= .2;
  float hair = fSphere(q * vec3(1., 3., 2.), .04);
  q.x += .05;
  q.x -= .08;
  q.y += .12;
  pR(q.xy, -.1);
  d = fOpUnionSoft(.05, d, max(
    fBox(q, vec3(.02, .08, .0)) - .05,
    -min(
      fSphere((q + vec3(.0, .12, .0)) * vec3(3., 2., 1.), .06),
      fSphere((vec3(q.x * 1.5, q.y, abs(q.z)) - vec3(.02, .03, .07)), .03)
    )
  ));
  d = fOpUnionSoft(.2, d, hair);
  return d;
}

float sdChessPiece(vec3 p, float id) {
  float s = 99.;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  // if (id == 12.) s = sdChessBishop(p);
  if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

// t: 0->1
// from and to are relative delta
vec2 moveKnight (float t, vec2 from, vec2 to) {
  vec2 d = to - from;
  vec2 ad = abs(d);
  float s = ad.x + ad.y;
  return from + d * mix(
    // longer first
    vec2(
      smoothstep(0., ad.x, s * t),
      smoothstep(ad.x, s, s * t)
    ),
    vec2(
      smoothstep(ad.y, s, s * t),
      smoothstep(0., ad.y, s * t)
    ),
    step(ad.x, ad.y)
  );
}

vec2 knightPhase (float i) {
  // I wish it was just one formula
  if (i==0.) return vec2(0., -1.);
  if (i==1.) return vec2(-1., 1.);
  if (i==2.) return vec2(1., 0.);
  if (i==3.) return vec2(-1., -1.);
  if (i==4.) return vec2(0., 1.);
  if (i==5.) return vec2(1., -1.);
  if (i==6.) return vec2(-1., 0.);
  if (i==7.) return vec2(1., 1.);
}

HIT knight (vec3 p, float offset, float i) {
  float t0 = mod(4. * offset + time, 32.);
  float t1 = mod(t0, 4.);
  t0 = floor(t0 / 4.);
  vec2 from = knightPhase(t0);
  vec2 to = knightPhase(mod(t0+1., 8.));
  p.xz += moveKnight(max(0., t1-i), from, to);
  pR(p.xz, mod(i, 2.) * PI);
  return piece(p, 13., mod(i, 2.));
}

HIT board (vec3 p) {
  vec3 q = p+vec3(-.4,0.,0.);
  p.y -= .05;
  HIT s = sdChessboard(p);
  p.y -= .05;
  p.xz += 3.5;
  s = opU(s, knight(p - vec3(2., 0., 2.), 0., 1.));
  s = opU(s, knight(p - vec3(5., 0., 5.), 4., 3.));
  s = opU(s, knight(p - vec3(5., 0., 2.), 2., 0.));
  s = opU(s, knight(p - vec3(2., 0., 5.), 6., 2.));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  origin = vec3(
    3. * cos(.18 * time),
    3. + 1. * cos(.1 * time),
    -7. + 2. * sin(.13 * time)
  );
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  dir = lookAt(origin, vec3(0., 0., 0.)) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(2.8 * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  gl_FragColor = vec4(c, 1.0);
}`}}),an=53,sn="cross waves",cn=({time:e})=>Object(fe.jsx)(pe.Node,{shader:ln.node,uniforms:{time:e}}),ln=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.5),
    vec3(1.),
    vec3(1., .2, .3)
  );
}

void main() {
  float ci = 0.;
  float z = 5. + .01 * time;
  vec2 p = uv;
  p.y -= .1 * time;
  vec2 id = floor(p * z);
  p *= z;
  float even = mod(id.y, 2.);
  p.x += even * .5;
  p = fract(p);
  p.y = mix(p.y, 1.-p.y, even);
  float y = p.y;
  p.y = min(y, 1.-y);
  float alt = step(y, p.y);
  p.x = fract(p.x + mix(-time, time, alt));
  float l = length(p - vec2(.5, .0));
  float smooth = .01;
  float a = smoothstep(-smooth, smooth, abs(l-0.1)-.05);
  float b = smoothstep(-smooth, smooth, abs(l-0.4)-.05);
  float c = smoothstep(smooth, -smooth, abs(l-0.25)-.08);
  ci += a * b;
  ci += (1. + alt) * c;
  float mul = .2 + .3 * cos(.2 * time);
  vec3 from = color(floor(ci) * mul);
  vec3 to = color(ceil(ci) * mul);
  gl_FragColor = vec4(mix(from, to, fract(ci)), 1.0);
  /*
  // debug palette
  if (uv.y < .05) {
    gl_FragColor = vec4(color(uv.x), 1.0);
  }
  */
}`}}),fn=54,pn="chess set",un=({time:e})=>Object(fe.jsx)(pe.Node,{shader:dn.node,uniforms:{time:e,wood:"/images/seamless-wood2.jpg"}}),dn=pe.Shaders.create({node:{frag:pe.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;
uniform sampler2D wood;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec4
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// ADAPTED from https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
float sdCone( in vec3 p, in float r, float h ) {
  p.y -= h;
  // c is the sin/cos of the angle, h is height
  // Alternatively pass q instead of (c,h),
  // which is the point at the base in 2D
  vec2 q = h*vec2(r/h,-1.0);

  vec2 w = vec2( length(p.xz), p.y );
  vec2 a = w - q*clamp( dot(w,q)/dot(q,q), 0.0, 1.0 );
  vec2 b = w - q*vec2( clamp( w.x/q.x, 0.0, 1.0 ), 1.0 );
  float k = sign( q.y );
  float d = min(dot( a, a ),dot(b, b));
  float s = max( k*(w.x*q.y-w.y*q.x),k*(w.y-q.y)  );
  return sqrt(d)*sign(s);
}

// from HG_SDF
float vmax(vec2 v) {
	return max(v.x, v.y);
}
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float vmax(vec4 v) {
	return max(max(v.x, v.y), max(v.z, v.w));
}
float vmin(vec2 v) {
	return min(v.x, v.y);
}
float vmin(vec3 v) {
	return min(min(v.x, v.y), v.z);
}
float vmin(vec4 v) {
	return min(min(v.x, v.y), min(v.z, v.w));
}
float pModInterval1(inout float p, float size, float start, float stop) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p+halfsize, size) - halfsize;
	if (c > stop) { //yes, this might not be the best thing numerically.
		p += size*(c - stop);
		c = stop;
	}
	if (c <start) {
		p += size*(c - start);
		c = start;
	}
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
float fOpUnionSoft(float r, float a, float b) {
	float e = max(r - abs(a - b), 0.);
	return min(a, b) - e*e*0.25/r;
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fSphere(vec3 p, float r) {
	return length(p) - r;
}
float fDisc(vec3 p, float r) {
	float l = length(p.xz) - r;
	return l < 0. ? abs(p.y) : length(vec2(p.y, l));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.001, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  // raymarching perf technique from https://www.shadertoy.com/view/XsyGWV
  HIT hit = HIT(0.);
  float precis = 0.0001;
  float t = 0.;
  for (int i=0; i<140; i++) {
    HIT h = map(p + t * dir);
    precis = t*0.0001;
    float rl = max(t*.02, 1.);
    t += h.x * rl;
    if (abs(h.x) < precis || p.z > 20.) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  if (m<1.) return .0;
  if (m<10.) return .3;
  return 1.;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-4., 4., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(1., .8, .5) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(.4, .5, .7) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
      * softshadow(p, ldir, 0.02, 4., 16.)
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(0., 3., 4.);
  ldir = normalize(l - p);
  c +=
    vec3(.3) * (
    // ambient
    0.05
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 80.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  float m = hit.y;
  if (m < 1.) {
    return mix(vec3(.8), vec3(.4, .5, .8), smoothstep(-2., 6., _p.y));
  }
  float wFactor = fract(m) * 2.;
  vec2 p = hit.zw;
  vec2 tUV = fract(p);
  float piece = step(10., m);
  return (.5 + .5 * texture(wood, tUV).r) * mix(
    mix(vec3(.35, .2, .15), vec3(.1), piece),
    mix(vec3(.8, .7, .5), vec3(.9), piece),
    wFactor
  );
}

// tiles are of 1m x 1m
HIT sdChessboard (vec3 p) {
  float manhattan = max(abs(p.x), abs(p.z));
  float o = step(4., manhattan);
  float m = mix(
    2. + .5 * step(1., mod(1.+floor(p.x)+floor(p.z), 2.)),
    3. + .5 * step(4.1, manhattan),
    o
  );
  return HIT(fBox(p, vec3(4.4, 0.2, 4.4)), m, .3 * (p.x - p.y), .3 * (p.z + p.y));
}

// height of 1m
float sdChessKingOrQueen (vec3 p) {
  float d;
  float body = fOpUnionSoft(
    .1,
    sdCone(p * vec3(1., -1., 1.), .12, .5),
    sdCone(p + vec3(0., 1., 0.), .16, .8)
  );
  d = fOpUnionSoft(.1, body, fDisc(p, .15)-.01);
  vec3 q = p;
  float discs;
  q.y += 0.22;
  discs = fDisc(q, .06) - .01;
  q.y += 0.06;
  discs = min(discs, fDisc(q, .07) - .01);
  q.y += 0.04;
  discs = min(discs, fDisc(q, .08) - .03);
  q.y += 0.49;
  discs = min(discs, fDisc(q, .11) - .02);
  q.y += 0.11;
  discs = min(discs, fDisc(q, .12) - .05);
  d = fOpUnionSoft(.015, d, discs);
  return d;
}

// height of 1m + crawn
float sdChessQueen (vec3 p) {
  float s = sdChessKingOrQueen(p);
  float ball = fSphere((p-vec3(0., 0.05, 0.)) * vec3(1., 2., 1.), .05);
  s = min(s, ball);
   pModPolar(p.xz, 14.);
  p.y -= .08;
  p.x -= .2;
  s = max(s, -fSphere(p, 0.1));
  return s;
}

float sdChessKing (vec3 p) {
  float s = sdChessKingOrQueen(p);
  p.y -= .12;
  p.y *= 1.1; // a bit stretched
  float cross = length(p.xy)-.04;
  pModPolar(p.xy, 4.);
  pR(p.xy, .5 * PI);
  p.y += 0.07;

  vec3 q = abs(p);
  float sz = .04;
  cross = fOpUnionSoft(.02, cross, max(.5*q.x+.5*p.y,-p.y)-sz*0.5);
  // cross = min(cross, p.x+p.y-0.2);
  s = fOpUnionSoft(.02, s, max(cross, q.z-.02));
  return s;
}

float sdChessPawn (vec3 p) {
  float d;
  p.y += .5;
  float body = fOpUnionSoft(
    .01,
    fSphere(p, .1),
    sdCone(p + vec3(0., .5, 0.), .16, .5)
  );
  p.y += .11;
  d = min(body, fDisc(p, .08)-.02);
  p.y += 0.27;
  float base = min(fDisc(p, .04) - .08, fDisc(p+vec3(.0, .05, .0), .12) - .04);
  d = fOpUnionSoft(.05, d, base);
  return d;
}

float sdChessBishop (vec3 p) {
  p.y += .2;
  float head = fOpUnionSoft(
    .15,
    fDisc(p + vec3(0., -.04, 0.), .03)-.01,
    fSphere((p + vec3(0., .09, 0.)) * vec3(1., 1.6, 1.), .1)
  );
  vec3 q = p;
  q.x += .05;
  pR(q.xy, .6);
  float cut = fBox(q, vec3(.01, .1, .1));
  head = max(head, -cut);
  head = min(head, min(
    fSphere(p + vec3(0., .18, 0.), .05),
    fDisc(p + vec3(0., .23, 0.), .07)-.02
  ));
  float d = fOpUnionSoft(
    .03,
    sdCone(p + vec3(0., .75, 0.), .16, .78),
    head
  );
  p.y += .56;
  float base = min(
    fDisc(p, .04) - .08,
    fDisc(p+vec3(.0, .05, .0), .12) - .04
  );
  d = min(d, base);
  return d;
}

float sdChessRook (vec3 p) {
  p.y += .4;
  // body
  float d = max(
    sdCone(p + vec3(0., .5, 0.), .14, .6),
    p.y + .05
  );
  // crown
  vec3 q = p;
  q.y -= .2;
  q.y *= -1.;
  float cyl = max(
    abs(p.y) - .06,
    sdCone(q, .16, .5)
  );
  q = p - vec3(0., .06, 0.);
  float dif = max(
    abs(q.y) - .02,
    min(
      min(abs(q.z), abs(q.x)) - .02,
      length(q.xz) - .08
    )
  );
  d = min(d, max(cyl, -dif));
  // crown base
  d = min(
    d,
    min(
      fDisc(p + vec3(.0, .07, .0), .08)-.01,
      fDisc(p + vec3(.0, .09, .0), .06)-.02
    ));
  // body base
  p.y += 0.5;
  d = fOpUnionSoft(.03, d,
    min(
      fDisc(p, .05) - .1,
      min(
        fDisc(p-vec3(.0, .05, .0), .1)-.05,
        fDisc(p-vec3(.0, .01, .0), .14)-.03
      )
    )
  );
  return d;
}

float sdChessKnight (vec3 p) {
  float d = min(
    fDisc(p + vec3(.0, .91, .0), .04) - .08,
    fDisc(p + vec3(.0, .96, .0), .12) - .04
  );
  vec3 q = p + vec3(0., .6, .0);
  q.y += .05;
  d = min(d, fBox(q, vec3(.03, .16, .0)) - .05);
  q.y -= .05;
  pR(q.xy, 1.);
  q.x += .05;
  q.y += .05;
  d = fOpUnionSoft(.1, d, fBox(q, vec3(.02, .08, .0)) - .03);
  q.y -= .15;
  q.x -= .2;
  float hair = fSphere(q * vec3(1., 3., 2.), .04);
  q.x += .05;
  q.x -= .08;
  q.y += .12;
  pR(q.xy, -.1);
  d = fOpUnionSoft(.05, d, max(
    fBox(q, vec3(.02, .08, .0)) - .05,
    -min(
      fSphere((q + vec3(.0, .12, .0)) * vec3(3., 2., 1.), .06),
      fSphere((vec3(q.x * 1.5, q.y, abs(q.z)) - vec3(.02, .03, .07)), .03)
    )
  ));
  d = fOpUnionSoft(.2, d, hair);
  return d;
}

float sdChessPiece(vec3 p, float id) {
  float s = .3;
  p = (p - vec3(0., 1.4, 0.)) / 1.4;
  if (id == 10.) s = sdChessKing(p);
  if (id == 11.) s = sdChessQueen(p);
  if (id == 12.) s = sdChessBishop(p);
  if (id == 13.) s = sdChessKnight(p);
  if (id == 14.) s = sdChessRook(p);
  if (id == 15.) s = sdChessPawn(p);
  return s;
}

float sdChessPieceId(float id, float white) {
  return id + .5 * white;
}

HIT piece (vec3 p, float id, float w) {
  float m = sdChessPieceId(id, w);
  float piece = sdChessPiece(p, id);
  return HIT(piece, m, p.x + .3 * p.y, p.z - .7 * p.y);
}

HIT board (vec3 p) {
  p.y -= .05;
  HIT s = sdChessboard(p);
  p.y -= .05;
  p.xz += 3.5;
  float x = 7. - pModInterval1(p.x, 1., 0., 7.);
  float y = pModInterval1(p.z, 1., 0., 7.);
  float sx = min(x, 7.-x);
  float sy = min(y, 7.-y);
  float white = step(y, 3.);
  float id = mix(
    10. // first line
    + step(sx, 0.)
    + step(sx, 1.)
    + step(sx, 2.)
    + step(sx, 3.)
    - step(4., x) * step(x, 4.),
    15., // second line (pawns)
    step(1., sy)
  ) * step(sy, 1.);
  s = opU(s, piece(p, id, white));
  return s;
}

HIT map (vec3 p) {
  HIT s = HIT(20. - length(p), 0.1, 0., 0.); // inside sphere
  s = opU(s, board(p));
  return s;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

void main() {
  float t = .2 * time;
  float z = .5 + .5 * cos(.3 * t);
  float dist = 12. - 6. * pow(z, 0.5);
  origin = vec3(
    dist * cos(t),
    2. + 6. * z,
    dist * sin(t)
  );
  vec3 poi = vec3(0., 0.3, 1. - 6. * pow(z, 4.));
  vec3 c = vec3(0.);
  vec2 dt = vec2(0.);
  vec2 uvP = uv + dt;
  vec3 dir = normalize(vec3(uvP - .5, 1.5));
  dir = lookAt(origin, poi) * dir;

  // debug ortho camera
  #if 0
  origin.x = -0.5;
  origin.y = 1.;
  origin.z = -3.;
  origin += vec3(2.4 * (uvP - .5)- vec2(0., 0.), 0.);
  dir = normalize(vec3(0., 0., 1.));
  #endif

  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  color = vec4(c, 1.0);
}`}}),vn=55,hn="cube d'or",mn=400,gn=0,xn=20,yn=24,bn=1,wn=({time:e})=>Object(fe.jsx)(pe.Node,{shader:_n.node,uniforms:{time:e}}),_n=pe.Shaders.create({node:{frag:pe.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec2
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);

void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBoxCheap(vec3 p, vec3 b) {
	return vmax(abs(p) - b);
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.0005, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

HIT marcher (inout vec3 p, vec3 dir) {
  HIT hit = HIT(0.);
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    t += h.x;
    if (abs(h.x) < .0005) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specularStrength (float m) {
  return step(.5, m);
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-3., 2., 2.);
  ldir = normalize(l - p);
  c +=
    vec3(.9, .6, .3) * (
      // ambient
      0.2
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 20.)
    );
  l = vec3(3., 1., 3.);
  ldir = normalize(l - p);
  c +=
    vec3(.3, .5, .9) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 40.)
  );
  l = vec3(4., 3., -4.);
  ldir = normalize(l - p);
  c +=
    vec3(.4) * (
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
      * softshadow(p, ldir, 0.02, 4., 18.)
    + specular(n, hit.y, ldir, dir, 60.)
  );
  return c;
}

vec3 shade (HIT hit, vec3 _p) {
  return mix(
    vec3(.9, .65, .0),
    vec3(.8),
    step(hit.y, .5)
  );
}

HIT sdObject (vec3 p) {
  p.y += .5;
  p.y = abs(p.y);
  p.y -= .45;
  vec3 size = vec3(.5, .02, .02);
  float s = 99.;
  pR(p.xy, -PI/2.);
  p -= .5;
  for (int i = 0; i <= 32; i++) {
    size.x -= .013;
    s = min(s, fBoxCheap(p + size, size));
    p = vec3(p.y, p.z, -p.x - 2. * size.x);
  }
  size.x += .3;
  s = min(s, fBoxCheap(p + size, size));
  return HIT(s, 1.);
}

HIT map (vec3 p) {
  HIT s = HIT(min(p.y+.5, 20.-length(p)), 0.); // inside sphere
  p.y -= .9;
  s = opU(s, sdObject(p));
  return s;
}

void main() {
  float t = .2 * PI * time;
  float zoom = .4;
  float h = cos(.5 * t);
  origin = zoom * vec3(
    4. * cos(t),
    2.5 + h,
    -4. * sin(t)
  );
  vec3 focus = vec3(0., .5 + .5 * h, 0.);
  vec3 c = vec3(0.);

  vec2 uvP = uv;
  #if ${0}
  for (float x=-.5; x<=.5; x += 1.) {
    for (float y=-.5; y<=.5; y += 1.) {
      uvP = uv + vec2(x, y) / 800.0;
  #endif
      vec3 dir = normalize(vec3(uvP - .5, 1.));
      dir = lookAt(origin, focus) * dir;
      vec3 p = origin;
      HIT hit = marcher(p, dir);
      vec3 n = normal(p);
      c += lighting(hit, p, n, dir);
  #if ${0}
    }
  }
  c /= 4.;
  #endif
  color = vec4(c, 1.0);
}`}}),Sn=56,En="jade forest",zn=({time:e})=>Object(fe.jsx)(pe.Node,{shader:Tn.node,uniforms:{time:e}}),Tn=pe.Shaders.create({node:{frag:pe.GLSL`#version 300 es
precision highp float;
in vec2 uv;
out vec4 color;
uniform float time;

#define PI ${Math.PI}

// camera origin
vec3 origin;

#define HIT vec2
HIT map (vec3 p);
vec3 shade (HIT m, vec3 p);
vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir);
float specularStrength (float m);

float pMod1(inout float p, float size) {
	float halfsize = size*0.5;
	float c = floor((p + halfsize)/size);
	p = mod(p + halfsize, size) - halfsize;
	return c;
}
float pModPolar(inout vec2 p, float repetitions) {
	float angle = 2.*PI/repetitions;
	float a = atan(p.y, p.x) + angle/2.;
	float r = length(p);
	float c = floor(a/angle);
	a = mod(a,angle) - angle/2.;
	p = vec2(cos(a), sin(a))*r;
	// For an odd number of repetitions, fix cell index of the cell in -x direction
	// (cell index would be e.g. -5 and 5 in the two halves of the cell):
	if (abs(c) >= (repetitions/2.)) c = abs(c);
	return c;
}
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}

// from HG_SDF
float vmax(vec3 v) {
	return max(max(v.x, v.y), v.z);
}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fCylinder(vec3 p, float r, float height) {
	float d = length(p.xz) - r;
	d = max(d, abs(p.y) - height);
	return d;
}

mat3 lookAt (vec3 ro, vec3 ta) {
  float cr = 0.;
  vec3 ww = normalize( ta - ro );
  vec3 uu = normalize( cross(ww,vec3(sin(cr),cos(cr),0.0) ) );
  vec3 vv =          ( cross(uu,ww));
  return mat3(uu,vv,ww);
}

vec3 normal (in vec3 p) {
	vec3 eps = vec3(0.0005, 0.0, 0.0);
	return normalize(vec3(
		map(p+eps.xyy).x-map(p-eps.xyy).x,
		map(p+eps.yxy).x-map(p-eps.yxy).x,
		map(p+eps.yyx).x-map(p-eps.yyx).x
	));
}

float diffuse(vec3 p, vec3 n, vec3 lpos) {
  vec3 l = normalize(lpos-p);
  float dif = clamp(dot(n, l), 0.01, 1.);
  return dif;
}

// https://www.iquilezles.org/www/articles/rmshadows/rmshadows.htm
float softshadow( in vec3 ro, in vec3 rd, in float mint, in float tmax, in float k) {
  float res = 1.0;
  float t = mint;
  float ph = 1e10; // big, such that y = 0 on the first iteration
  for( int i=0; i<32; i++ ) {
		float h = map( ro + rd*t ).x;
    float y = h*h/(2.0*ph);
    float d = sqrt(h*h-y*y);
    res = min( res, k*d/max(0.0,t-y) );
    ph = h;
    t += h;
    if( res<0.0001 || t>tmax ) break;
  }
  return clamp( res, 0.0, 1.0 );
}

HIT marcher (inout vec3 p, vec3 dir) {
  HIT hit = HIT(0., 2.); // 2. because it's our tree that tends to glitch
  float t = 0.;
  for (int i=0; i<100; i++) {
    HIT h = map(p + t * dir);
    t += min(.3, h.x);
    if (abs(h.x) < .0001) {
      hit = h;
      break;
    }
  }
  p += t * dir;
  return hit;
}

HIT opU (HIT a, HIT b) {
  if (a.x < b.x) return a;
  return b;
}

float specular (vec3 n, float m, vec3 ldir, vec3 dir, float p) {
  return specularStrength(m) * pow(max(dot(dir, reflect(ldir, n)), 0.0), p);
}

vec3 lighting (HIT hit, vec3 p, vec3 n, vec3 dir) {
  vec3 l, ldir;
  vec3 c = vec3(0.);
  l = vec3(-5., 6., -3.);
  ldir = normalize(l - p);
  c +=
    vec3(.8, .5, .2) * (
      // ambient
      0.1
      // diffuse
      + shade(hit, p)
        * (.5 + .5 * diffuse(p, n, l)) // half lambert
      + specular(n, hit.y, ldir, dir, 100.)
    );
  l = vec3(3., 1., -3.);
  ldir = normalize(l - p);
  c +=
    vec3(.2, .5, 1.) * (
    // ambient
    0.1
    // diffuse
    + shade(hit, p)
      * (.5 + .5 * diffuse(p, n, l)) // half lambert
    + specular(n, hit.y, ldir, dir, 10.)
  );

  l = vec3(.6, 1., .5);
  ldir = normalize(l);
  c +=
  vec3(.6) * (
  // ambient
  0.0
  // diffuse
  + shade(hit, p)
    * (.5 + .5 * diffuse(p, n, l)) // half lambert
    * softshadow(p, ldir, 0.02, 4., 20.)
  + specular(n, hit.y, ldir, dir, 50.)
  );
  return c;
}

float specularStrength (float m) {
  return .03 + .9 * step(1.5, m);
}

vec3 shade (HIT hit, vec3 _p) {
  return mix(
    vec3(.3, .65, .4 * fract(hit.y)),
    mix(
      vec3(1.),
      vec3(.2, .25, .3),
      step(hit.y, 0.5)
    ),
    step(hit.y, 1.5)
  );
}

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

HIT sdObject (vec3 p, vec2 id) {
  p.y -= .2;
  float s = fCylinder(p, .05, .2);
  p.y -= .4;
  float r1 = random(id);
  float r2 = random(id.yx);
  float size = 3. + pow(r1, 2.) * 6.;
  for (float f = 0.; f < size; f++) {
    float r3 = random(vec2(f, r1));
    float r4 = random(vec2(f, r2));
    float r5 = min(r3, r4);
    vec3 q = p;
    float i = pModPolar(q.xz, 20. - 2. * f);
    pR(q.xy,  -.8 - .2*r2 - .05 * f + .05 * r3);
    vec3 sz = vec3(.5-.05*f-.02*r4, .02, .05-.0035*f-.02*r5);
    s = min(s, fBox(q, sz-.01)-.01);
    p.y -= .1;
  }
  return HIT(s, 2. + random(id * .3));
}

HIT map (vec3 p) {
  HIT s = HIT(6.-length(p), 0.); // inside sphere
  s = opU(s, HIT(p.y, 1.));
  p.z += time;
  float x = pMod1(p.x, .7);
  p.z -= .5 * mod(x, 2.);
  float y = pMod1(p.z, .8);
  vec2 id = vec2(x, y);
  s = opU(s, sdObject(p, id));
  return s;
}

void main() {
  float t = .5 * time;
  float h = cos(.3 * t);
  origin = vec3(
    .35 + .1 * cos(t),
    .9 + .4 * h,
    -2.
  );
  vec3 focus = vec3(.5, .8 + .3 * h, 0.);
  vec3 c = vec3(0.);
  vec3 dir = normalize(vec3(uv - .5, 1.));
  dir = lookAt(origin, focus) * dir;
  vec3 p = origin;
  HIT hit = marcher(p, dir);
  vec3 n = normal(p);
  c += lighting(hit, p, n, dir);
  // snow. (cheap effect IKR)
  c = mix(
    c,
    vec3(1.),
    smoothstep(.96, 1., random(.01 * floor(100. * (p.xy - vec2(.0, -time)))))
  );
  // mist
  c = mix(c, vec3(1.), pow(smoothstep(1., 4., length(p-origin)), .5));
  color = vec4(c, 1.0);
}`}}),Rn=57,In="Virus v2",Pn=400,An=0,On=20,Cn=24,Dn=.8,Ln=({time:e})=>Object(fe.jsx)(pe.Node,{shader:jn.node,uniforms:{time:e}}),jn=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

#define PI ${Math.PI}

float t = 2. * PI * time / 20.0;

mat2 rot (float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c,s,-s,c);
}

float opSmoothUnion( float d1, float d2, float k ) {
    float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
    return mix( d2, d1, h ) - k*h*(1.0-h); }

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdSphere( vec3 p, float d ) {
  return length(p) - d;
}

float sdParticle( vec3 p, float d, float dist ) {
  return opSmoothUnion(
    length(p) - d,
    sdSegment(p.yxz+vec3(0.,dist,0.), dist, 0.2 * d),
    0.2
  );
}

// badly failing at making a "good" radial repeat
vec3 opRepeatPolar (vec3 p, float n, float R, float offsetA) {
  float SCALE = n/(2. * PI);
  vec2 pos2d = p.xz;
  float r = length(pos2d) / R;
  pos2d = vec2(log(r), offsetA + atan(p.z, p.x)) * SCALE;
  pos2d.y = fract(pos2d.y) - 0.5;
  return vec3(pos2d, SCALE * p.y / r);
}

vec3 opRep( in vec3 p, in vec3 c ) {
  vec3 q = mod(p+0.5*c,c)-0.5*c;
  return q;
}

float sdVirus (vec3 p, vec3 gp) {
  p.yz *= rot(-1.4 + 0.1 * cos(t));
  p.xz *= rot(0.01 * gp.z + 0.3 * cos(1. + 2. * t + 0.1 * gp.z));
  p.xy *= rot(.02 * gp.z + 0.3 * sin(3. * t));
  float s = sdSphere(p, 2.);
  p.y = abs(p.y);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p, 18., 2.2, 0.),
    0.2,
    0.4
  ), 0.2);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0.05 * cos(3. * t), 1., 0.05 * sin(4.*t)), 14., 1.9, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0.+ 0.05 * cos(5.*t), 1.6,0.05 * sin(6.*t)), 10., 1.5, 0.),
    0.15,
    0.4
  ), 0.3);
  s = opSmoothUnion(s, sdParticle(
    opRepeatPolar(p - vec3(0., 2.1, 0.), 6., 0.6, .2),
    0.18,
    0.0
  ), 0.2);
  return s;
}

float SDF(vec3 p) {
  vec3 gp = p;
  float SCALE = 6./PI;
  float s = sdVirus(p, gp);
  p -= vec3(4., 4., 4.);
  p.xy *= rot(p.z * .07);
  p.yz *= rot(p.z * .05);
  p.x += 0.7 * time;
  p.y += 0.8 * time;
  p.z -= 2.0 * time;
  p += 50.;
  p = opRep(p, vec3(7.4, 5.4, 6.));
  p *= 2.0;
  p.z *= 10.0 * smoothstep(5., 0., abs(mod(time, 30.0)-10.));
  p.z += 10.0 * abs(mod(time, 1.0)) * smoothstep(0., 5., abs(mod(time, 30.0)-10.));
  s = opSmoothUnion(s, sdVirus(p, gp), 1.0);
  return s;
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float z, float shad) {
  float p = sqrt(1. - shad);
  vec3 c =
  palette(p,
    vec3(.5),
    vec3(.7),
    vec3(0.15, 0.5, 0.35 + 0.05 * cos(8. * t)),
    vec3(1.0, 0.4, 0.5))
  * p
  * smoothstep(30., 5., z);
  return c;
}

void main() {
  vec3 p = vec3 (0., 0., -4.);
  vec3 dir = normalize(vec3((uv - 0.5) * 2.,1.));
  float shad = 1.;
  for (int i=0; i<90; i++) {
    float d = SDF(p);
    if (d<0.001) {
      shad = float(i)/90.;
      break;
    }
    p += d * dir * 0.5;
  }
  float edge = min(min(uv.x, 1.-uv.x), min(uv.y, 1.-uv.y));
  gl_FragColor = vec4(
    mix(
      color(p.z, shad),
      color(0., 0.5),
      step(edge, 0.02)
    )
    , 1.0);
}
`}});var Nn=r("005v"),Un=r.n(Nn);const Mn=400,kn=0,Bn=30,qn=20,Fn=1,Gn="5M",Hn=58,Vn="Mandelglitch",Xn=[{url:"https://ethblock.art/create/17",text:"Mint on ethblock.art"},{url:"https://ghostmarket.io/asset/pha/ghost/3008841254969814369262311336331954453497120774334547905246474374493804042898/",text:"ghostmarket.io: 400 KCAL"},{url:"https://www.hicetnunc.xyz/objkt/3063",text:"hicetnunc.xyz: Mandelglitch #1 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3068",text:"hicetnunc.xyz: Mandelglitch #2 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3071",text:"hicetnunc.xyz: Mandelglitch #3 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3072",text:"hicetnunc.xyz: Mandelglitch #4 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3073",text:"hicetnunc.xyz: Mandelglitch #5 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3077",text:"hicetnunc.xyz: Mandelglitch #6 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3088",text:"hicetnunc.xyz: Mandelglitch #7 (5 XTZ)"},{url:"https://www.hicetnunc.xyz/objkt/3574",text:"hicetnunc.xyz: Mandelglitch #8 (5 XTZ)"}];const Yn=e=>e<.5?2*e*e:(4-2*e)*e-1;const Wn=({time:e,n:t,exporting:r})=>{const o=Object(Pe.useMemo)((()=>function(e,t=0){const r=e?3:50,o=new Un.a(t);return Array(r).fill(null).map((()=>Array(12).fill(null).map((()=>o.random()))))}(r,t)),[t,r]),i=e/10%o.length,n=Math.floor(i),a=i-n;let[s,c,l,f,p,u,d,v,h,m,g,x]=(y=o[n%o.length],b=o[(n+1)%o.length],w=Yn(a),y.map(((e,t)=>e*(1-w)+b[t]*w)));var y,b,w;return l=Yn(l),Object(fe.jsx)(pe.LinearCopy,{children:Object(fe.jsx)($n,{persistence:r?0:.8,children:Object(fe.jsx)(pe.Node,{shader:Kn.main,uniforms:{aa:r?2:0,time:e,resolution:pe.Uniform.Resolution,travel:s,love:c,dark:l,rot:r?2*Math.PI/Bn:.1,s1:f,s2:p,s3:u,s4:d,s5:v,s6:h,s7:m,s8:g,s9:x}})})})},Kn=pe.Shaders.create({persistence:{frag:pe.GLSL`
  precision highp float;
  varying vec2 uv;
  uniform sampler2D t, back;
  uniform float persistence;
  void main () {
    gl_FragColor =
      mix(
        texture2D(t, uv),
        texture2D(back, uv),
        persistence
      );
  }
      `},main:{frag:pe.GLSL`
  #version 300 es
precision highp float;
in vec2 uv;
out vec4 color;

uniform vec2 resolution;
uniform float aa;
uniform float time;
uniform float rot;
uniform float love, travel, dark;
uniform float s1, s2, s3, s4, s5, s6, s7, s8, s9;

const float PI = ${Math.PI};
void pR(inout vec2 p, float a) {
	p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 pal (float t) {
  return palette(
    t + 0.5 * dark * dark,
    vec3(.85 - .5 * dark),
    vec3(.5),
    vec3(1.),
    vec3(0.8 + 0.2 * s1, 0.2 * s2, .2)
  );
}
float run (vec2 init) {
  float iterations = 200. + 300. * love;
  vec2 p = init;
  for (float iter = 0.; iter < iterations; iter += 1.) {
    // original mandelbrot formula is:
    // p = vec2( p.x * p.x - p.y * p.y, 2. * p.x * p.y) + init;
    float x2 = p.x * p.x;
    float y2 = p.y * p.y;
    float xy = p.x * p.y;
    float a = 1. + .1 * (s1 - 0.5) * s2;
    float b = -1. + .1 * (s1 - 0.5) * s2;
    float c = 0.0 + 2. * (s2 - 0.5) * s3;
    float d = max(0., pow(s8, 2.) - 0.5) * cos(100. * s7 * s2 * s9 * p.y);
    float e = max(0., pow(s9, 2.) - 0.5) * sin(100. * s2 * s1 * p.x);
    float f = 2. + s6 - s6 * s6 * s6;
    vec2 offset = init + mix(vec2(0.0), vec2(s4, s5) - .5, s3 * s4 * s5);
    p = vec2(
      a * x2 + b * y2 + c * xy + d,
      f * xy + e
    ) + offset;
    if (length(p) >= 2.0) {
      return iter / iterations;
    }
  }
  return 0.;
}
vec3 shade (vec2 uv) {
  float zoom = (0.5 + 12. * s7 * s7 * s7) * (1.5 + 0.5 * travel);
  float focusAngle = 4. * travel;
  float focusAmp = 0.1 + 0.4 * s7;
  vec2 init = 2. * (uv - .5) / zoom;
  pR(init, rot * time);
  init -= vec2(.6, .0);
  init += focusAmp * vec2(cos(focusAngle), sin(focusAngle));
  return pal(pow(run(init), .5));
}

void main() {
  vec2 ratio = resolution / min(resolution.x, resolution.y);
  vec2 uvRatio = 0.5 + (uv - 0.5) * ratio;
  vec3 c = vec3(0.);
  float total = 0.0;
  vec2 uvP = uvRatio;
  c += shade(uvRatio);
  total += 1.0;
  if (aa > 0.) {
    for (float x=-.5; x<=.5; x += 1. / aa) {
      for (float y=-.5; y<=.5; y += 1. / aa) {
        uvP = uvRatio;
        uvP += 0.5 * vec2(x, y) / resolution;
        c += shade(uvP);
        total += 1.0;
      }
    }
  }
  c /= total;
  color = vec4(c, 1.0);
}
  `}}),$n=({children:e,persistence:t})=>Object(fe.jsx)(pe.Node,{shader:Kn.persistence,backbuffering:!0,uniforms:{t:e,back:pe.Uniform.Backbuffer,persistence:t}}),Qn=59,Zn="Pixels 256",Jn="There will be only 256 patterns generated by this single fragment shader.",ea=({time:e,n:t,exporting:r})=>Object(fe.jsx)(ta,{n:t+1+(r?0:Math.floor(e))}),ta=Ae.a.memo((({n:e})=>{const t=new Un.a(e%256),r=t.random(),o=t.random(),i=t.random(),n=t.random(),a=t.random(),s=t.random();return Object(fe.jsx)(pe.Node,{shader:ra.node,uniforms:{s1:r,s2:o,s3:i,s4:n,s5:a,s6:s}})})),ra=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float s1,s2,s3,s4,s5,s6;

float m = 1. + floor(6. * s3 * s3 * s3);
float b = 1. + floor(10. * s2 * s2 * s2);
float unzoom = floor(8. - 8. * s6 * s6 + s1 * 10.);

// https://iquilezles.org/www/articles/palettes/palettes.htm
vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}
vec3 color (float t) {
  return palette( t + 0.2 * s5, vec3(.5), vec3(.6), vec3(1.0, 1.0, 1.0),
    vec3(
      0.8 * s1,
      0.3 * s2,
      0.1 + 0.3 * s3
    )
  /*
  vec3(
    0.5 + 0.3 * s1,
    0.8 - 0.2 * s3,
    1.0 - 0.2 * s2
  )
  */ );
}
float cell (vec2 p) {
  return mod(mod(
    0.001 * s3 * (cos(8. * s4 * p.x) + sin(8. * s4 * p.y)) +
    (floor(8. * mix(p.x, p.y, s4)) / 8.0) *
    floor(s6 * p.x + s5 * s5 * 20. * p.y)
  , b), m);
}
void main() {
  vec2 offset = vec2(-.25 * unzoom, -.25 * unzoom);
  vec3 c = color((.1 + .3 * s6 * s6) * cell(floor(uv * unzoom + offset)));
  gl_FragColor = vec4(c, 1.0);
}
`}}),oa=60,ia="Bitcoin rainbow",na=({time:e})=>Object(fe.jsx)(pe.Node,{shader:aa.node,uniforms:{time:e}}),aa=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(.5),
    vec3(.6 + .1 * cos(.3 * time)),
    vec3(1.),
    vec3(0.22, 0.5, 0.77)
  );
}

const float PI = ${Math.PI};

float sdSegment (in vec3 p, in float L, in float R) {
  p.y -= min(L, max(0.0, p.y));
  return length(p) - R;
}
float sdBox( vec3 p, vec3 b ) {
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdBox (vec2 p, vec2 sz) {
  return max(abs(p.x) - sz.x, abs(p.y) - sz.y);
}
float sdD (vec2 p, float w, float h) {
  return min(sdBox(p, vec2(w, h)), length(p-vec2(w, .0))-h);
}
float sdUpperD (vec2 p) {
  p.x += .02;
  p.y -= .1;
  float inner = sdD(p + vec2(-0.025, 0.012), 0.037, 0.055);
  float outer = sdD(p, 0.1, 0.1);
  return max(-inner, outer);
}
float sdLowerD (vec2 p) {
  p.x += .01;
  p.y += .085;
  float outer = sdD(p, 0.11, 0.11);
  float inner = sdD(p - vec2(0.023, 0.01), 0.045, 0.058);
  return max(-inner, outer);
}
float sdRevCornerRadius(vec2 p) {
  return max(
    sdBox(p, vec2(.5)),
    -min(
      (p.x - p.y) / 2.,
      length(p + vec2(.5, -.5)) - 1.
    )
  );
}
float sdBitcoin2D (vec2 p) {
  float bottom = sdLowerD(p);
  bottom = min(bottom, max(
    sdBox(p + vec2(.15, .165), vec2(.04, .03)), // bottom-left shape
    -(p.x - .216 * p.y + 0.142)) // 12.5° cut
  );
  bottom = min(bottom, sdRevCornerRadius((p + vec2(0.135, -0.135)) * vec2(1., -1.) * 30.));
  float top = sdUpperD(p);
  top = min(top, sdBox(p - vec2(-.15, .175), vec2(.034, .025)));
  top = min(top, sdRevCornerRadius((p + vec2(0.135, 0.12)) * vec2(1., 1.) * 30.));
  p.x += .01;
  float hash = max(
    sdBox(p, vec2(0.07, .285)),
    -min(
      sdBox(p, vec2(0.022, 1.)),
      sdBox(p, vec2(1., .15))
    )
  );
  return min(min(top, bottom), hash);
}

void main() {
  float v = sdBitcoin2D(uv-.5);
  v = max(-step(fract(time), 0.5), v); // blink 500ms
  gl_FragColor = vec4(
    step(v, 0.) * color(1.6 * (uv.y + time)) +
    step(0., v) * color(sqrt(max(v, 0.)) - 2. * time),
    1.0);
}
`}}),sa=61,ca="Binance gradients",la=1,fa=30,pa=["/images/shaders/binance.dist.png"],ua=({time:e})=>Object(fe.jsx)(pe.Node,{shader:da.node,uniforms:{time:e,image:"/images/shaders/binance.dist.png"}}),da=pe.Shaders.create({node:{frag:pe.GLSL`
precision highp float;
varying vec2 uv;
uniform float time;
uniform sampler2D image;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.28318*(c*t+d) );
}

vec3 color (float t) {
  return palette(
    t,
    vec3(1.0, 1.0, .5),
    vec3(.5),
    vec3(1.),
    vec3(0.2 + 0.1 * cos(0.3 * time), 0.3 + 0.1 * sin(0.2 * time), 0.5 + 0.2 * cos(0.1 * time))
  );
}

void main() {
  float v = texture2D(image, uv).a - 0.5;
  gl_FragColor = vec4(
    step(v, 0.) * color(uv.y + 2. * time) +
    step(0., v) * color(sqrt(max(v, 0.)) - time),
    1.0);
}
`}}),va=[o,i,n,a,s,c,l,f,p,u,d,v,h,m,g,x,y,b,w,_,S,E,z,T,R,I,P,A,O,C,D,L,j,N,U,M,k,B,q,F,G,H,V,X,Y,W,K,$,Q,Z,J,ee,te,re,oe,ie,ne,ae,se,ce,le];function ha(){return va}function ma(){return va[va.length-1]}function ga(e){return va.find((t=>t.n===e))}},UWhB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("dv69")),i=n(r("8e5R"));function n(e){return e&&e.__esModule?e:{default:e}}const a=e=>Array.isArray(e)?e.reduce(((e,t)=>e.concat(a(t))),[]):[String(e.dependency&&e.dependency.getGLName()||e.initialObj)].concat(e.textureOptions?[e.textureOptions]:[]);class s extends i.default{constructor(...e){var t,r,o;super(...e),o=0,(r="groupNestedLvl")in(t=this)?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o}onSurfaceGLContextChange(e,t){t?(0,o.default)(e.getGLName()+" _context acquired_"):(0,o.default)(e.getGLName()+" _context lost_")}onSurfaceDrawSkipped(){}onSurfaceDrawStart(e){const[t,r]=e.getGLSize();console.groupCollapsed("Surface draw"),this.groupNestedLvl=1,(0,o.default)("_size_ `"+t+"`x`"+r+"`")}onSurfaceDrawError(e){for(console.error(e);this.groupNestedLvl>0;)console.groupEnd(),this.groupNestedLvl--;return!0}onSurfaceDrawEnd(){this.groupNestedLvl--,console.groupEnd()}onNodeDrawSkipped(e){(0,o.default)(e.getGLName()+" redraw _skipped_: "+(e.context.glSurface.gl?e._needsRedraw?"":"no need to redraw":"no gl context available!"))}onNodeDrawStart(e){this.groupNestedLvl++,console.group(e.getGLName())}onNodeSyncDeps(e,t,r){t.length&&console.log(e.getGLName()+" +deps "+t.map((e=>e.getGLName())).join(", ")),r.length&&console.log(e.getGLName()+" -deps "+t.map((e=>e.getGLName())).join(", "))}onNodeDraw(e,t){const{blendFunc:r,clear:i}=e.props;this.groupNestedLvl++,console.group("DRAW "+e.getGLName());const[n,s]=e.getGLSize();(0,o.default)("_size_ `"+n+"`x`"+s+"` _clear_ `"+JSON.stringify(i)+"` _blendFunc_ `"+JSON.stringify(r)+"`"),(0,o.default)("_"+t.length+" uniforms:_"),t.forEach((e=>{let{key:t,type:r,value:i,getMetaInfo:n}=e;r=String(r||"UNKNOWN");const s=void 0===i?"":Array.isArray(i)?"["+i.map((e=>"`"+String(e)+"`")).join(",")+"]":"`"+String(i)+"`";let c="";for(let o=r.length+t.length-18;o<0;o++)c+=" ";(0,o.default)(`${c}*${"UNKNOWN"===r?"[c='color:red']UNKNOWN[c]":r}* _${t}_ = ${s}`,...n?a(n()):[])}))}onNodeDrawEnd(){this.groupNestedLvl-=2,console.groupEnd(),console.groupEnd()}}t.default=s},Um7X:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,r){if((0,o.default)(t!==r,"gl-react: Found a loop in the rendering graph.\nIf you want to get back previous state, please use `backbuffering` instead"),r instanceof i.default)for(let o=0;o<r.dependents.length;o++)e(t,r.dependents[o])};var o=n(r("QLaP")),i=n(r("JwSf"));function n(e){return e&&e.__esModule?e:{default:e}}},VYxY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r("HbIt"))&&o.__esModule?o:{default:o};function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends i.default{constructor(...e){super(...e),n(this,"results",new Map),n(this,"promises",new Map),n(this,"_disposed",!1)}inputHash(e){return""}getNoCache(e){throw new Error("getNoCache must be implemented")}dispose(){const{gl:e,results:t,promises:r}=this;t.forEach((e=>{this.disposeTexture(e.texture)})),t.clear(),r.clear(),this._disposed=!0}disposeTexture(e){this.gl.deleteTexture(e)}get(e){const t=this.inputHash(e),r=this.results.get(t);if(r)return r;const o=this.getNoCache(e);return this.results.set(t,o),o}load(e){const t=this.inputHash(e),r=this.promises.get(t);if(r)return r;const o=Promise.resolve(this.get(e));return this.promises.set(t,o),o}}var s=a;t.default=s},W9HR:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("nKUr"),i=r("MX0m"),n=r.n(i),a=(r("q1tI"),r("YFqc")),s=r.n(a);function c({text:e="One Day, One Shader"}){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"jsx-2908109831 title",children:Object(o.jsx)(s.a,{href:"/",children:Object(o.jsx)("a",{className:"jsx-2908109831",children:e})})}),Object(o.jsx)(n.a,{id:"2908109831",children:[".title.jsx-2908109831{text-align:center;margin:0;line-height:1.15;font-size:2rem;}"]})]})}},Xs3h:function(e,t){e.exports=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]},Ytbt:function(e,t,r){"use strict";var o=r("QM7d"),i={body:"",args:[],thisVars:[],localVars:[]};function n(e){if(!e)return i;for(var t=0;t<e.args.length;++t){var r=e.args[t];e.args[t]=0===t?{name:r,lvalue:!0,rvalue:!!e.rvalue,count:e.count||1}:{name:r,lvalue:!1,rvalue:!0,count:1}}return e.thisVars||(e.thisVars=[]),e.localVars||(e.localVars=[]),e}function a(e){for(var t=[],r=0;r<e.args.length;++r)t.push("a"+r);return new Function("P",["return function ",e.funcName,"_ndarrayops(",t.join(","),") {P(",t.join(","),");return a0}"].join(""))(function(e){return o({args:e.args,pre:n(e.pre),body:n(e.body),post:n(e.proc),funcName:e.funcName})}(e))}var s={add:"+",sub:"-",mul:"*",div:"/",mod:"%",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"};!function(){for(var e in s){var r=s[e];t[e]=a({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+r+"c"},funcName:e}),t[e+"eq"]=a({args:["array","array"],body:{args:["a","b"],body:"a"+r+"=b"},rvalue:!0,funcName:e+"eq"}),t[e+"s"]=a({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+r+"s"},funcName:e+"s"}),t[e+"seq"]=a({args:["array","scalar"],body:{args:["a","s"],body:"a"+r+"=s"},rvalue:!0,funcName:e+"seq"})}}();var c={not:"!",bnot:"~",neg:"-",recip:"1.0/"};!function(){for(var e in c){var r=c[e];t[e]=a({args:["array","array"],body:{args:["a","b"],body:"a="+r+"b"},funcName:e}),t[e+"eq"]=a({args:["array"],body:{args:["a"],body:"a="+r+"a"},rvalue:!0,count:2,funcName:e+"eq"})}}();var l={and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">="};!function(){for(var e in l){var r=l[e];t[e]=a({args:["array","array","array"],body:{args:["a","b","c"],body:"a=b"+r+"c"},funcName:e}),t[e+"s"]=a({args:["array","array","scalar"],body:{args:["a","b","s"],body:"a=b"+r+"s"},funcName:e+"s"}),t[e+"eq"]=a({args:["array","array"],body:{args:["a","b"],body:"a=a"+r+"b"},rvalue:!0,count:2,funcName:e+"eq"}),t[e+"seq"]=a({args:["array","scalar"],body:{args:["a","s"],body:"a=a"+r+"s"},rvalue:!0,count:2,funcName:e+"seq"})}}();var f=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan"];!function(){for(var e=0;e<f.length;++e){var r=f[e];t[r]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b)",thisVars:["this_f"]},funcName:r}),t[r+"eq"]=a({args:["array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a"],body:"a=this_f(a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"eq"})}}();var p=["max","min","atan2","pow"];!function(){for(var e=0;e<p.length;++e){var r=p[e];t[r]=a({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:r}),t[r+"s"]=a({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(b,c)",thisVars:["this_f"]},funcName:r+"s"}),t[r+"eq"]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"eq"}),t[r+"seq"]=a({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(a,b)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"seq"})}}();var u=["atan2","pow"];!function(){for(var e=0;e<u.length;++e){var r=u[e];t[r+"op"]=a({args:["array","array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:r+"op"}),t[r+"ops"]=a({args:["array","array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b","c"],body:"a=this_f(c,b)",thisVars:["this_f"]},funcName:r+"ops"}),t[r+"opeq"]=a({args:["array","array"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"opeq"}),t[r+"opseq"]=a({args:["array","scalar"],pre:{args:[],body:"this_f=Math."+r,thisVars:["this_f"]},body:{args:["a","b"],body:"a=this_f(b,a)",thisVars:["this_f"]},rvalue:!0,count:2,funcName:r+"opseq"})}}(),t.any=o({args:["array"],pre:i,body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"if(a){return true}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return false"},funcName:"any"}),t.all=o({args:["array"],pre:i,body:{args:[{name:"x",lvalue:!1,rvalue:!0,count:1}],body:"if(!x){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"all"}),t.sum=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"this_s+=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"sum"}),t.prod=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=1"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:1}],body:"this_s*=a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"prod"}),t.norm2squared=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm2squared"}),t.norm2=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:2}],body:"this_s+=a*a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return Math.sqrt(this_s)"},funcName:"norm2"}),t.norminf=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:4}],body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norminf"}),t.norm1=o({args:["array"],pre:{args:[],localVars:[],thisVars:["this_s"],body:"this_s=0"},body:{args:[{name:"a",lvalue:!1,rvalue:!0,count:3}],body:"this_s+=a<0?-a:a",localVars:[],thisVars:["this_s"]},post:{args:[],localVars:[],thisVars:["this_s"],body:"return this_s"},funcName:"norm1"}),t.sup=o({args:["array"],pre:{body:"this_h=-Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}}),t.inf=o({args:["array"],pre:{body:"this_h=Infinity",args:[],thisVars:["this_h"],localVars:[]},body:{body:"if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_h"],localVars:[]},post:{body:"return this_h",args:[],thisVars:["this_h"],localVars:[]}}),t.argmin=o({args:["index","array","shape"],pre:{body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg1_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg2_",lvalue:!1,rvalue:!0,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2},{name:"_inline_1_arg1_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}}),t.argmax=o({args:["index","array","shape"],pre:{body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",args:[{name:"_inline_0_arg0_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg1_",lvalue:!1,rvalue:!1,count:0},{name:"_inline_0_arg2_",lvalue:!1,rvalue:!0,count:1}],thisVars:["this_i","this_v"],localVars:[]},body:{body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",args:[{name:"_inline_1_arg0_",lvalue:!1,rvalue:!0,count:2},{name:"_inline_1_arg1_",lvalue:!1,rvalue:!0,count:2}],thisVars:["this_i","this_v"],localVars:["_inline_1_k"]},post:{body:"{return this_i}",args:[],thisVars:["this_i"],localVars:[]}}),t.random=a({args:["array"],pre:{args:[],body:"this_f=Math.random",thisVars:["this_f"]},body:{args:["a"],body:"a=this_f()",thisVars:["this_f"]},funcName:"random"}),t.assign=a({args:["array","array"],body:{args:["a","b"],body:"a=b"},funcName:"assign"}),t.assigns=a({args:["array","scalar"],body:{args:["a","b"],body:"a=b"},funcName:"assigns"}),t.equals=o({args:["array","array"],pre:i,body:{args:[{name:"x",lvalue:!1,rvalue:!0,count:1},{name:"y",lvalue:!1,rvalue:!0,count:1}],body:"if(x!==y){return false}",localVars:[],thisVars:[]},post:{args:[],localVars:[],thisVars:[],body:"return true"},funcName:"equals"})},ZkmD:function(e,t,r){var o=r("szI9");e.exports=function(){var e={};return function(t){if(("object"!==typeof t||null===t)&&"function"!==typeof t)throw new Error("Weakmap-shim: Key must be object");var r=t.valueOf(e);return r&&r.identity===e?r:o(t,e)}}},aiXG:function(e,t){e.exports=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]},b0oO:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("nKUr"),i=r("MX0m"),n=r.n(i);r("q1tI");function a({children:e}){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{className:"jsx-1329991137",children:e}),Object(o.jsx)(n.a,{id:"1329991137",children:["header.jsx-1329991137{padding:1rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},bPVu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("TGEO");class i extends o.WebGLTextureLoaderAsyncHashCache{canLoad(e){return"string"===typeof e}inputHash(e){return e}loadNoCache(e){const{gl:t}=this;let r;return{promise:new Promise(((t,o)=>r=function(e,t,r){let o=new window.Image;return"data:"!==e.slice(0,5)&&(o.crossOrigin=!0),o.onload=function(){o&&t(o),o=null},o.onabort=o.onerror=r,o.src=e,function(){o&&(o.onload=null,o.onerror=null,o.onabort=null,o.src="",o=null)}}(e,t,o))).then((e=>{const{width:r,height:o}=e,i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),{texture:i,width:r,height:o}})),dispose:()=>r()}}}o.globalRegistry.add(i);var n=i;t.default=n},bQgK:function(e,t,r){(function(t){(function(){var r,o,i,n,a,s;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-a)/1e6},o=t.hrtime,n=(r=function(){var e;return 1e9*(e=o())[0]+e[1]})(),s=1e9*t.uptime(),a=n-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,r("8oxB"))},cDsr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r("HbIt"))&&o.__esModule?o:{default:o};function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=new Promise((()=>{}));class s extends i.default{constructor(...e){super(...e),n(this,"disposes",new Map),n(this,"inputs",new Map),n(this,"promises",new Map),n(this,"results",new Map),n(this,"_disposed",!1)}inputHash(e){return""}loadNoCache(e){return{promise:Promise.reject(new Error("loadNoCache is not implemented")),dispose:()=>{}}}dispose(){const{gl:e,promises:t,results:r,inputs:o,disposes:i}=this;i.forEach((e=>e())),r.forEach((e=>{this.disposeTexture(e.texture)})),t.clear(),r.clear(),o.clear(),i.clear(),this._disposed=!0}disposeTexture(e){this.gl.deleteTexture(e)}load(e){const t=this.inputHash(e),r=this.promises.get(t);if(r)return r;const o=this.loadNoCache(e);this.disposes.set(t,o.dispose);const i=o.promise.then((e=>this.promises.has(t)?(this.disposes.delete(t),this.results.set(t,e),e):a));return this.promises.set(t,i),i}get(e){return this.results.get(this.inputHash(e))}cancelLoad(e){const t=this.inputHash(e);this.promises.delete(t);const r=this.disposes.get(t);r&&(r(),this.disposes.delete(t))}}var c=s;t.default=c},cpVT:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return o}))},dEu3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,...t){let r="";for(let o=0;o<e.length;o++)r+=(0===o?"":t[o-1])+e[o];return r},t.GLSLSymbol=void 0;t.GLSLSymbol="GLSL"},dGjt:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.list=void 0;var o=p(r("QLaP")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),n=p(r("17x9")),a=p(r("KN1S")),s=(p(r("dLFq")),p(r("laZL"))),c=p(r("38ab")),l=r("TGEO");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v={children:n.default.any.isRequired,style:n.default.any,preload:n.default.array,onLoad:n.default.func,onLoadError:n.default.func,onContextLost:n.default.func,onContextRestored:n.default.func,visitor:n.default.object};let h=0;const m=[];t.list=()=>m.slice(0);const g=Object.keys(v);t.default=({GLView:e,RenderLessElement:t,mapRenderableContent:r,requestFrame:f,cancelFrame:p})=>{var x,y;return y=x=class extends i.Component{constructor(...e){super(...e),d(this,"id",++h),d(this,"gl",void 0),d(this,"buffer",void 0),d(this,"loaderResolver",void 0),d(this,"glView",void 0),d(this,"root",void 0),d(this,"shaders",{}),d(this,"_preparingGL",[]),d(this,"_needsRedraw",!1),d(this,"state",{ready:!1,rebootId:0,debug:!1}),d(this,"RenderLessElement",t),d(this,"mapRenderableContent",r),d(this,"redraw",(()=>{this._needsRedraw=!0})),d(this,"flush",(()=>{this._draw()})),d(this,"_emptyTexture",void 0),d(this,"_onContextCreate",(e=>{this._prepareGL(e,(()=>{this.setState({ready:!0},(()=>{try{this._handleLoad()}catch(e){this._handleError(e)}}))}),this._handleError)})),d(this,"_onContextFailure",(e=>{this._handleError(e)})),d(this,"_onContextLost",(()=>{this.props.onContextLost&&this.props.onContextLost(),this._stopLoop(),this._destroyGL(),this.root&&this.root._onContextLost()})),d(this,"_onContextRestored",(e=>{this.root&&this.root._onContextRestored(e),this._prepareGL(e,this._handleRestoredSuccess,this._handleRestoredFailure)})),d(this,"_onRef",(e=>{this.glView=e})),d(this,"_handleError",(e=>{const{onLoadError:t}=this.props;t?t(e):console.error(e)})),d(this,"_handleRestoredFailure",(()=>{})),d(this,"_handleRestoredSuccess",(()=>{this.redraw(),this.flush(),this._startLoop(),this.props.onContextRestored&&this.props.onContextRestored()})),d(this,"_handleLoad",(()=>{this.root||console.warn(this.getGLName()+" children does not contain any discoverable Node");const{onLoad:e}=this.props;this.redraw(),this.flush(),this._startLoop(),e&&e()})),d(this,"_loopRaf",void 0)}getChildContext(){return{glParent:this,glSurface:this,glSizable:this}}componentDidMount(){m.push(this),this.getVisitors().forEach((e=>e.onSurfaceMount(this)))}componentWillUnmount(){this._stopLoop(),this._destroyGL();const e=m.indexOf(this);-1!==e&&m.splice(e,1),this.getVisitors().forEach((e=>e.onSurfaceUnmount(this)))}componentDidUpdate(){this.redraw()}render(){const{props:t,state:{ready:r,rebootId:o,debug:n}}=this,{children:a,style:s}=t,c={};return Object.keys(t).forEach((e=>{-1===g.indexOf(e)&&(c[e]=t[e])})),i.default.createElement(e,u({key:o,debug:n,ref:this._onRef,onContextCreate:this._onContextCreate,onContextFailure:this._onContextFailure,onContextLost:this._onContextLost,onContextRestored:this._onContextRestored,style:s},c),r?a:null)}rebootForDebug(){this._stopLoop(),this._destroyGL(),this.setState((({rebootId:e})=>({rebootId:e+1,ready:!1,debug:!0})))}getVisitors(){return c.default.get().concat(this.props.visitor||[])}getGLSize(){const{gl:e}=this;return[e?e.drawingBufferWidth:0,e?e.drawingBufferHeight:0]}getGLName(){return`Surface#${this.id}`}getGLShortName(){return"Surface"}captureAsDataURL(...t){const{glView:r}=this;return(0,o.default)(r,"GLView is mounted"),(0,o.default)(r.captureAsDataURL,"captureAsDataURL is not defined in %s",e.displayName||e.name),r.captureAsDataURL(...t)}captureAsBlob(...t){const{glView:r}=this;return(0,o.default)(r,"GLView is mounted"),(0,o.default)(r.captureAsBlob,"captureAsBlob is not defined in %s",e.displayName||e.name),r.captureAsBlob(...t)}capture(e,t,r,i){return(0,o.default)(this.root,"Surface#capture: surface is not yet ready or don't have any root Node"),this.root.capture(e,t,r,i)}glIsAvailable(){return!!this.gl}getEmptyTexture(){let{gl:e,_emptyTexture:t}=this;return(0,o.default)(e,"getEmptyTexture called while gl was not defined"),t||(this._emptyTexture=t=e.createTexture(),e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,2,2,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))),t}_destroyGL(){const{gl:e}=this;if(e){this.gl=null,this._emptyTexture&&(e.deleteTexture(this._emptyTexture),this._emptyTexture=null),this.loaderResolver&&this.loaderResolver.dispose();for(let e in this.shaders)this.shaders[e].dispose();this.shaders={},e.deleteBuffer(this.buffer),this.getVisitors().map((e=>e.onSurfaceGLContextChange(this,null)))}}_prepareGL(e,t,r){this.gl=e,this.getVisitors().map((t=>t.onSurfaceGLContextChange(this,e))),this.loaderResolver=new l.LoaderResolver(e),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1);const o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,4,4,-1]),e.STATIC_DRAW),this.buffer=o;const{preload:i}=this.props,n=[];(i||[]).forEach((e=>{if(!e)return void console.warn("Can't preload value",e);const{loader:t,input:r}=this._resolveTextureLoader(e);if(!t)return void console.warn("Can't preload input",e,r);t.get(r)||n.push(t.load(r))})),this._preparingGL=n,n.length>0?Promise.all(n).then(t,r):t()}_addGLNodeChild(e){(0,o.default)(!this.root,"Surface can only contains a single root. Got: %s",this.root&&this.root.getGLName()),this.root=e,e._addDependent(this),this.redraw()}_removeGLNodeChild(e){this.root=null,this.redraw()}_resolveTextureLoader(e){let t=e;return{loader:this.loaderResolver&&this.loaderResolver.resolve(t),input:t}}_makeShader({frag:e,vert:t},r){const{gl:i}=this;(0,o.default)(i,"gl is not available");const n=(0,a.default)(i,t,e);for(let o in n.attributes)n.attributes[o].pointer();return n}_getShader(e){const{shaders:t}=this;return t[e.id]||(t[e.id]=this._makeShader(s.default.get(e),s.default.getName(e)))}_bindRootNode(){const{gl:e}=this;(0,o.default)(e,"gl context not available"),e.bindFramebuffer(e.FRAMEBUFFER,null);const[t,r]=this.getGLSize();e.viewport(0,0,t,r)}_startLoop(){p(this._loopRaf);const e=()=>{this._loopRaf=f(e),this._needsRedraw&&this._draw()};this._loopRaf=f(e)}_stopLoop(){p(this._loopRaf)}_draw(){const{gl:e,root:t,glView:r}=this;(0,o.default)(r,"GLView is mounted");const i=this.getVisitors();if(e&&t&&this._needsRedraw){this._needsRedraw=!1,i.forEach((e=>e.onSurfaceDrawStart(this))),r.beforeDraw&&r.beforeDraw(e);try{t._draw()}catch(n){let e=!1;if(i.forEach((t=>{e=t.onSurfaceDrawError(n)||e})),!e)throw console.warn(n),n;return}r.afterDraw&&r.afterDraw(e),i.forEach((e=>e.onSurfaceDrawEnd(this)))}else i.forEach((e=>e.onSurfaceDrawSkipped(this)))}},d(x,"propTypes",v),d(x,"childContextTypes",{glSurface:n.default.object.isRequired,glParent:n.default.object.isRequired,glSizable:n.default.object.isRequired}),y}},dLFq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(r("QLaP")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),n=f(r("17x9")),a=f(r("JwSf")),s=f(r("Um7X")),c=f(r("5lXm"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends i.Component{constructor(...e){super(...e),p(this,"id",(0,c.default)()),p(this,"context",void 0),p(this,"dependents",[]),p(this,"glNode",null),p(this,"glBusRootNode",void 0),p(this,"onRef",(e=>{this.glBusRootNode=e})),p(this,"redraw",(()=>{this.dependents.forEach((e=>e.redraw()))})),p(this,"_draw",(()=>{}))}componentDidMount(){const{uniform:e,index:t}=this.props;if(e){const{glParent:r}=this.context;(0,o.default)(r instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),r._addUniformBus(this,e,t)}this.redraw()}componentWillUnmount(){const{uniform:e,index:t}=this.props;if(e){const{glParent:r}=this.context;(0,o.default)(r instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),r._removeUniformBus(this,e,t)}}componentDidUpdate({uniform:e,index:t}){const{uniform:r,index:i}=this.props;if(r&&(r!==e||i!==t)){const{glParent:n}=this.context;(0,o.default)(n instanceof a.default,'a <Bus uniform=".." /> needs to be inside a Node'),e&&n._removeUniformBus(this,e,t),n._addUniformBus(this,r,i)}this.redraw()}getChildContext(){return{glParent:this}}_addGLNodeChild(e){this.glNode=e,this.context.glParent.redraw()}_removeGLNodeChild(e){this.glNode=null}_addDependent(e){-1===this.dependents.indexOf(e)&&((0,s.default)(this,e),this.dependents.push(e))}_removeDependent(e){const t=this.dependents.indexOf(e);-1!==t&&this.dependents.splice(t,1)}getGLRenderableNode(){return this.glNode}getGLRenderableContent(){const{mapRenderableContent:e}=this.context.glSurface,{glBusRootNode:t}=this;return t&&e?e(t):null}getGLName(){return`Bus(${this.glNode?this.glNode.getGLName():String(this.getGLRenderableContent())})`}getGLShortName(){const e=this.getGLRenderableContent(),t=String(e&&e.constructor&&e.constructor.name||e);return`Bus(${this.glNode?this.glNode.getGLShortName():t})`}capture(e,t,r,i){return(0,o.default)(this.glNode,"Bus does not contain any Node"),this.glNode.capture(e,t,r,i)}_onContextLost(){const{glNode:e}=this;e&&e._onContextLost()}_onContextRestored(e){const{glNode:t}=this;t&&t._onContextRestored(e)}render(){const{children:e}=this.props,{glSurface:{RenderLessElement:t,mapRenderableContent:r}}=this.context;return i.default.createElement(t,{ref:r?this.onRef:void 0},"function"===typeof e?e(this.redraw):e)}}t.default=u,p(u,"defaultProps",{index:0}),p(u,"contextTypes",{glParent:n.default.object.isRequired,glSurface:n.default.object.isRequired}),p(u,"childContextTypes",{glParent:n.default.object.isRequired})},dv69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const{userAgent:o,vendor:i}="undefined"!==typeof navigator?navigator:{userAgent:"",vendor:""};var n,a,s,c,l,f,p,u,d,v,h,m,g;d=function(...e){return e.forEach((function(t){return"string"===typeof t?e=e.concat(m(t)):e.push(t)})),g.apply(window,e)},g=function(...e){return Function.prototype.apply.call(console.log,console,e)},s=[{regex:/\*([^\*]+)\*/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["font-style: italic",""]}},{regex:/_([^_]+)_/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["font-weight: bold",""]}},{regex:/`([^`]+)`/,replacer:function(e,t){return"%c"+t+"%c"},styles:function(){return["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",""]}},{regex:/\[c=(?:"|')?((?:(?!(?:"|')\]).)*)(?:"|')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(e,t,r){return"%c"+r+"%c"},styles:function(e){return[e[1],""]}}],l=function(e){var t;return t=!1,s.forEach((function(r){if(r.regex.test(e))return t=!0})),t},c=function(e){var t;return t=[],s.forEach((function(r){var o;if(o=e.match(r.regex))return t.push({format:r,match:o})})),t.sort((function(e,t){return e.match.index-t.match.index}))},m=function(e){var t,r;for(r=[];l(e);)t=c(e)[0],e=e.replace(t.format.regex,t.format.replacer),r=r.concat(t.format.styles(t.match));return[e].concat(r)},u=function(){return/Safari/.test(o)&&/Apple Computer/.test(i)},p=function(){return/OPR/.test(o)&&/Opera/.test(i)},f=function(){return/Firefox/.test(o)},h=function(){var e;return!!(e=o.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/))&&537.38<=parseInt(e[1],10)+parseInt(e[2],10)/100},v=function(){var e;return!!(e=o.match(/OPR\/(\d+)\./))&&15<=parseInt(e[1],10)},a=function(){return"undefined"!==typeof window&&(window.console.firebug||window.console.exception)},(n=function(){return/MSIE/.test(o)}()||f()&&!a()||p()&&!v()||u()&&!h()?g:d).l=g;var x=n;t.default=x},e0Q9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Surface=void 0;var o=r("rr/c"),i=a(r("xEkU")),n=a(r("v25H"));function a(e){return e&&e.__esModule?e:{default:e}}r("h/uW");const s=(0,o.createSurface)({GLView:n.default,RenderLessElement:"span",mapRenderableContent:e=>e instanceof Element?e.firstElementChild:null,requestFrame:i.default,cancelFrame:i.default.cancel});t.Surface=s},fpEm:function(e,t,r){"use strict";e.exports=function(e,t,r,i){for(var n={},c=0,l=r.length;c<l;++c){var f=r[c],p=f.name,u=f.type,d=f.locations;switch(u){case"bool":case"int":case"float":a(e,t,d[0],i,1,n,p);break;default:if(u.indexOf("vec")>=0){if((v=u.charCodeAt(u.length-1)-48)<2||v>4)throw new o("","Invalid data type for attribute "+p+": "+u);a(e,t,d[0],i,v,n,p)}else{if(!(u.indexOf("mat")>=0))throw new o("","Unknown data type for attribute "+p+": "+u);var v;if((v=u.charCodeAt(u.length-1)-48)<2||v>4)throw new o("","Invalid data type for attribute "+p+": "+u);s(e,t,d,i,v,n,p)}}}return n};var o=r("o/2B");function i(e,t,r,o,i,n){this._gl=e,this._wrapper=t,this._index=r,this._locations=o,this._dimension=i,this._constFunc=n}var n=i.prototype;function a(e,t,r,o,n,a,s){for(var c=["gl","v"],l=[],f=0;f<n;++f)c.push("x"+f),l.push("x"+f);c.push("if(x0.length===void 0){return gl.vertexAttrib"+n+"f(v,"+l.join()+")}else{return gl.vertexAttrib"+n+"fv(v,x0)}");var p=Function.apply(null,c),u=new i(e,t,r,o,n,p);Object.defineProperty(a,s,{set:function(t){return e.disableVertexAttribArray(o[r]),p(e,o[r],t),t},get:function(){return u},enumerable:!0})}function s(e,t,r,o,i,n,s){for(var c=new Array(i),l=new Array(i),f=0;f<i;++f)a(e,t,r[f],o,i,c,f),l[f]=c[f];Object.defineProperty(c,"location",{set:function(e){if(Array.isArray(e))for(var t=0;t<i;++t)l[t].location=e[t];else for(t=0;t<i;++t)l[t].location=e+t;return e},get:function(){for(var e=new Array(i),t=0;t<i;++t)e[t]=o[r[t]];return e},enumerable:!0}),c.pointer=function(t,n,a,s){t=t||e.FLOAT,n=!!n,a=a||i*i,s=s||0;for(var c=0;c<i;++c){var l=o[r[c]];e.vertexAttribPointer(l,i,t,n,a,s+c*i),e.enableVertexAttribArray(l)}};var p=new Array(i),u=e["vertexAttrib"+i+"fv"];Object.defineProperty(n,s,{set:function(t){for(var n=0;n<i;++n){var a=o[r[n]];if(e.disableVertexAttribArray(a),Array.isArray(t[0]))u.call(e,a,t[n]);else{for(var s=0;s<i;++s)p[s]=t[i*n+s];u.call(e,a,p)}}return t},get:function(){return c},enumerable:!0})}n.pointer=function(e,t,r,o){var i=this,n=i._gl,a=i._locations[i._index];n.vertexAttribPointer(a,i._dimension,e||n.FLOAT,!!t,r||0,o||0),n.enableVertexAttribArray(a)},n.set=function(e,t,r,o){return this._constFunc(this._locations[this._index],e,t,r,o)},Object.defineProperty(n,"location",{get:function(){return this._locations[this._index]},set:function(e){return e!==this._locations[this._index]&&(this._locations[this._index]=0|e,this._wrapper.program=null),0|e}})},"h/uW":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CanvasTextureLoader",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"VideoTextureLoader",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ImageURLTextureLoader",{enumerable:!0,get:function(){return n.default}});var o=a(r("l8j9")),i=a(r("EEdt")),n=a(r("bPVu"));function a(e){return e&&e.__esModule?e:{default:e}}},hK8l:function(e,t,r){"use strict";function o(e,t,r){var i=0|e[r];if(i<=0)return[];var n,a=new Array(i);if(r===e.length-1)for(n=0;n<i;++n)a[n]=t;else for(n=0;n<i;++n)a[n]=o(e,t,r+1);return a}e.exports=function(e,t){switch("undefined"===typeof t&&(t=0),typeof e){case"number":if(e>0)return function(e,t){var r,o;for(r=new Array(e),o=0;o<e;++o)r[o]=t;return r}(0|e,t);break;case"object":if("number"===typeof e.length)return o(e,t,0)}return[]}},hYYf:function(e,t,r){e.exports=function(e){var t,r,p,u=0,d=0,v=c,h=[],m=[],g=1,x=0,y=0,b=!1,w=!1,_="",S=n,E=o;"300 es"===(e=e||{}).version&&(S=s,E=a);var z={},T={};for(u=0;u<S.length;u++)z[S[u]]=!0;for(u=0;u<E.length;u++)T[E[u]]=!0;return function(e){return m=[],null!==e?function(e){u=0,e.toString&&(e=e.toString());var r;_+=e.replace(/\r\n/g,"\n"),p=_.length;for(;t=_[u],u<p;){switch(r=u,v){case 0:u=C();break;case 1:u=O();break;case 2:u=A();break;case 3:u=D();break;case 4:u=N();break;case 11:u=j();break;case 5:u=U();break;case l:u=M();break;case 9:u=P();break;case c:u=I()}if(r!==u)switch(_[r]){case"\n":x=0,++g;break;default:++x}}return d+=u,_=_.slice(u),m}(e):function(e){h.length&&R(h.join(""));return v=10,R("(eof)"),m}()};function R(e){e.length&&m.push({type:f[v],data:e,position:y,line:g,column:x})}function I(){return h=h.length?[]:h,"/"===r&&"*"===t?(y=d+u-1,v=0,r=t,u+1):"/"===r&&"/"===t?(y=d+u-1,v=1,r=t,u+1):"#"===t?(v=2,y=d+u,u):/\s/.test(t)?(v=9,y=d+u,u):(b=/\d/.test(t),w=/[^\w_]/.test(t),y=d+u,v=b?4:w?3:l,u)}function P(){return/[^\s]/g.test(t)?(R(h.join("")),v=c,u):(h.push(t),r=t,u+1)}function A(){return"\r"!==t&&"\n"!==t||"\\"===r?(h.push(t),r=t,u+1):(R(h.join("")),v=c,u)}function O(){return A()}function C(){return"/"===t&&"*"===r?(h.push(t),R(h.join("")),v=c,u+1):(h.push(t),r=t,u+1)}function D(){if("."===r&&/\d/.test(t))return v=5,u;if("/"===r&&"*"===t)return v=0,u;if("/"===r&&"/"===t)return v=1,u;if("."===t&&h.length){for(;L(h););return v=5,u}if(";"===t||")"===t||"("===t){if(h.length)for(;L(h););return R(t),v=c,u+1}var e=2===h.length&&"="!==t;if(/[\w_\d\s]/.test(t)||e){for(;L(h););return v=c,u}return h.push(t),r=t,u+1}function L(e){for(var t,r,o=0;;){if(t=i.indexOf(e.slice(0,e.length+o).join("")),r=i[t],-1===t){if(o--+e.length>0)continue;r=e.slice(0,1).join("")}return R(r),y+=r.length,(h=h.slice(r.length)).length}}function j(){return/[^a-fA-F0-9]/.test(t)?(R(h.join("")),v=c,u):(h.push(t),r=t,u+1)}function N(){return"."===t||/[eE]/.test(t)?(h.push(t),v=5,r=t,u+1):"x"===t&&1===h.length&&"0"===h[0]?(v=11,h.push(t),r=t,u+1):/[^\d]/.test(t)?(R(h.join("")),v=c,u):(h.push(t),r=t,u+1)}function U(){return"f"===t&&(h.push(t),r=t,u+=1),/[eE]/.test(t)?(h.push(t),r=t,u+1):("-"!==t&&"+"!==t||!/[eE]/.test(r))&&/[^\d]/.test(t)?(R(h.join("")),v=c,u):(h.push(t),r=t,u+1)}function M(){if(/[^\d\w_]/.test(t)){var e=h.join("");return v=T[e]?8:z[e]?7:6,R(h.join("")),v=c,u}return h.push(t),r=t,u+1}};var o=r("GTa7"),i=r("aiXG"),n=r("Xs3h"),a=r("9fJb"),s=r("BkhO"),c=999,l=9999,f=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]},hmBY:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("nKUr"),i=r("MX0m"),n=r.n(i);r("q1tI");function a({children:e}){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("main",{className:"jsx-1508801263",children:e}),Object(o.jsx)(n.a,{id:"1508801263",children:["main.jsx-1508801263{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},kR76:function(e,t,r){var o=r("SMLl");e.exports=function(e,t,r){t="number"===typeof t?t:1,r=r||": ";var i=e.split(/\r?\n/),n=String(i.length+t-1).length;return i.map((function(e,i){var a=i+t,s=String(a).length;return o(a,n-s)+r+e})).join("\n")}},"kVK+":function(e,t){t.read=function(e,t,r,o,i){var n,a,s=8*i-o-1,c=(1<<s)-1,l=c>>1,f=-7,p=r?i-1:0,u=r?-1:1,d=e[t+p];for(p+=u,n=d&(1<<-f)-1,d>>=-f,f+=s;f>0;n=256*n+e[t+p],p+=u,f-=8);for(a=n&(1<<-f)-1,n>>=-f,f+=o;f>0;a=256*a+e[t+p],p+=u,f-=8);if(0===n)n=1-l;else{if(n===c)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,o),n-=l}return(d?-1:1)*a*Math.pow(2,n-o)},t.write=function(e,t,r,o,i,n){var a,s,c,l=8*n-i-1,f=(1<<l)-1,p=f>>1,u=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=o?0:n-1,v=o?1:-1,h=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=f):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+p>=1?u/c:u*Math.pow(2,1-p))*c>=2&&(a++,c/=2),a+p>=f?(s=0,a=f):a+p>=1?(s=(t*c-1)*Math.pow(2,i),a+=p):(s=t*Math.pow(2,p-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=v,s/=256,i-=8);for(a=a<<i|s,l+=i;l>0;e[r+d]=255&a,d+=v,a/=256,l-=8);e[r+d-v]|=128*h}},l8j9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("TGEO");class i extends o.WebGLTextureLoaderSyncHashCache{constructor(...e){var t,r,o;super(...e),o={},(r="disposes")in(t=this)?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o}canLoad(e){return e instanceof HTMLCanvasElement}inputHash(e){return e}getNoCache(e){const{gl:t}=this,{width:r,height:o}=e,i=t.createTexture();return t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),{texture:i,width:r,height:o}}update(e){const{gl:t}=this,{texture:r}=this.get(e);t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}}o.globalRegistry.add(i);var n=i;t.default=n},laZL:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.isShaderIdentifier=function(e){return"object"===typeof e&&!!e&&e.type===a&&"string"===typeof e.id},t.ensureShaderDefinition=d,t.shaderDefinitionToShaderInfo=g,t.shaderInfoEquals=function(e,t){return e.frag===t.frag&&e.vert===t.vert},t.default=void 0;var o=n(r("QLaP")),i=n(r("dEu3"));function n(e){return e&&e.__esModule?e:{default:e}}const a="ShaderID",s={},c={},l={},f=(p=0,()=>(++p).toString());var p;const u={100:i.default`
attribute vec2 _p;
varying vec2 uv;
void main() {
gl_Position = vec4(_p,0.0,1.0);
uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));
}`,"300 es":i.default`#version 300 es
in vec2 _p;
out vec2 uv;
void main() {
gl_Position = vec4(_p,0.0,1.0);
uv = vec2(0.5, 0.5) * (_p+vec2(1.0, 1.0));
}`};function d(e,t=""){return(0,o.default)(e&&"string"===typeof e.frag,"A `frag` GLSL code (string) is required"+t),e}const v="#version";function h(e){const t=e.indexOf("\n"),r=t>-1?e.slice(0,t):e;return r.startsWith(v)?r.slice(v.length+1):"100"}const m=(e,t)=>t?e+"\n#define SHADER_NAME "+t+"\n":e;function g({frag:e,vert:t},r){const o=h(e=e.trim());if(t){if(o!==h(t=t.trim()))throw new Error("GLSL shader vert and frag version must match")}else if(!(t=u[o]))throw new Error("gl-react: could not find static vertex shader for GLSL version '"+o+"'");return{frag:e=m(e,r),vert:t=m(t,r)}}var x=e.__glReactShaders=e.__glReactShaders||{create(e){const t={};return Object.keys(e).forEach((r=>{const o=d(e[r]," in Shaders.create({ "+r+": ... })"),i=f(),n=Object.freeze({type:a,id:i});s[i]=o,c[i]=r,t[r]=n;const p=g(o,r);l[i]=p})),t},getName:e=>(c[e.id]||"???")+`#${String(e.id)}`,getShortName:e=>c[e.id]||"???",get:e=>((0,o.default)(e.id in s,"Shader %s does not exist. Make sure you don't have gl-react dup issue: `npm ls gl-react`",e.id),l[e.id])};t.default=x}).call(this,r("ntbh"))},nXQg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={Backbuffer:"_Backbuffer_",backbufferFrom:e=>({type:"BackbufferFrom",node:e}),Resolution:"_Resolution_",textureSize:e=>({type:"TextureSize",obj:e}),textureSizeRatio:e=>({type:"TextureSize",obj:e,ratio:!0})};t.default=o},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function o(t){if(r[t])return r[t].exports;var i=r[t]={exports:{}},n=!0;try{e[t](i,i.exports,o),n=!1}finally{n&&delete r[t]}return i.exports}return o.ab=t+"/",o(149)}()}).call(this,"/")},"o/2B":function(e,t){function r(e,t,r){this.shortMessage=t||"",this.longMessage=r||"",this.rawError=e||"",this.message="gl-shader: "+(t||e||"")+(r?"\n"+r:""),this.stack=(new Error).stack}r.prototype=new Error,r.prototype.name="GLError",r.prototype.constructor=r,e.exports=r},pIo5:function(e,t,r){"use strict";function o(e){var t=32;return(e&=-e)&&t--,65535&e&&(t-=16),16711935&e&&(t-=8),252645135&e&&(t-=4),858993459&e&&(t-=2),1431655765&e&&(t-=1),t}t.INT_BITS=32,t.INT_MAX=2147483647,t.INT_MIN=-1<<31,t.sign=function(e){return(e>0)-(e<0)},t.abs=function(e){var t=e>>31;return(e^t)-t},t.min=function(e,t){return t^(e^t)&-(e<t)},t.max=function(e,t){return e^(e^t)&-(e<t)},t.isPow2=function(e){return!(e&e-1)&&!!e},t.log2=function(e){var t,r;return t=(e>65535)<<4,t|=r=((e>>>=t)>255)<<3,t|=r=((e>>>=r)>15)<<2,(t|=r=((e>>>=r)>3)<<1)|(e>>>=r)>>1},t.log10=function(e){return e>=1e9?9:e>=1e8?8:e>=1e7?7:e>=1e6?6:e>=1e5?5:e>=1e4?4:e>=1e3?3:e>=100?2:e>=10?1:0},t.popCount=function(e){return 16843009*((e=(858993459&(e-=e>>>1&1431655765))+(e>>>2&858993459))+(e>>>4)&252645135)>>>24},t.countTrailingZeros=o,t.nextPow2=function(e){return e+=0===e,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)+1},t.prevPow2=function(e){return e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,(e|=e>>>16)-(e>>>1)},t.parity=function(e){return e^=e>>>16,e^=e>>>8,e^=e>>>4,27030>>>(e&=15)&1};var i=new Array(256);!function(e){for(var t=0;t<256;++t){var r=t,o=t,i=7;for(r>>>=1;r;r>>>=1)o<<=1,o|=1&r,--i;e[t]=o<<i&255}}(i),t.reverse=function(e){return i[255&e]<<24|i[e>>>8&255]<<16|i[e>>>16&255]<<8|i[e>>>24&255]},t.interleave2=function(e,t){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e&=65535)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t&=65535)|t<<8))|t<<4))|t<<2))|t<<1))<<1},t.deinterleave2=function(e,t){return(e=65535&((e=16711935&((e=252645135&((e=858993459&((e=e>>>t&1431655765)|e>>>1))|e>>>2))|e>>>4))|e>>>16))<<16>>16},t.interleave3=function(e,t,r){return e=1227133513&((e=3272356035&((e=251719695&((e=4278190335&((e&=1023)|e<<16))|e<<8))|e<<4))|e<<2),(e|=(t=1227133513&((t=3272356035&((t=251719695&((t=4278190335&((t&=1023)|t<<16))|t<<8))|t<<4))|t<<2))<<1)|(r=1227133513&((r=3272356035&((r=251719695&((r=4278190335&((r&=1023)|r<<16))|r<<8))|r<<4))|r<<2))<<2},t.deinterleave3=function(e,t){return(e=1023&((e=4278190335&((e=251719695&((e=3272356035&((e=e>>>t&1227133513)|e>>>2))|e>>>4))|e>>>8))|e>>>16))<<22>>22},t.nextCombination=function(e){var t=e|e-1;return t+1|(~t&-~t)-1>>>o(e)+1}},rQ2n:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("nKUr"),i=r("MX0m"),n=r.n(i);r("q1tI");function a({children:e}){return Object(o.jsxs)("div",{className:"jsx-3621368397 container",children:[e,Object(o.jsx)(n.a,{id:"3621368397",children:[".container.jsx-3621368397{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}},rhSW:function(e,t){e.exports={0:"NONE",1:"ONE",2:"LINE_LOOP",3:"LINE_STRIP",4:"TRIANGLES",5:"TRIANGLE_STRIP",6:"TRIANGLE_FAN",256:"DEPTH_BUFFER_BIT",512:"NEVER",513:"LESS",514:"EQUAL",515:"LEQUAL",516:"GREATER",517:"NOTEQUAL",518:"GEQUAL",519:"ALWAYS",768:"SRC_COLOR",769:"ONE_MINUS_SRC_COLOR",770:"SRC_ALPHA",771:"ONE_MINUS_SRC_ALPHA",772:"DST_ALPHA",773:"ONE_MINUS_DST_ALPHA",774:"DST_COLOR",775:"ONE_MINUS_DST_COLOR",776:"SRC_ALPHA_SATURATE",1024:"STENCIL_BUFFER_BIT",1028:"FRONT",1029:"BACK",1032:"FRONT_AND_BACK",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",2304:"CW",2305:"CCW",2849:"LINE_WIDTH",2884:"CULL_FACE",2885:"CULL_FACE_MODE",2886:"FRONT_FACE",2928:"DEPTH_RANGE",2929:"DEPTH_TEST",2930:"DEPTH_WRITEMASK",2931:"DEPTH_CLEAR_VALUE",2932:"DEPTH_FUNC",2960:"STENCIL_TEST",2961:"STENCIL_CLEAR_VALUE",2962:"STENCIL_FUNC",2963:"STENCIL_VALUE_MASK",2964:"STENCIL_FAIL",2965:"STENCIL_PASS_DEPTH_FAIL",2966:"STENCIL_PASS_DEPTH_PASS",2967:"STENCIL_REF",2968:"STENCIL_WRITEMASK",2978:"VIEWPORT",3024:"DITHER",3042:"BLEND",3088:"SCISSOR_BOX",3089:"SCISSOR_TEST",3106:"COLOR_CLEAR_VALUE",3107:"COLOR_WRITEMASK",3317:"UNPACK_ALIGNMENT",3333:"PACK_ALIGNMENT",3379:"MAX_TEXTURE_SIZE",3386:"MAX_VIEWPORT_DIMS",3408:"SUBPIXEL_BITS",3410:"RED_BITS",3411:"GREEN_BITS",3412:"BLUE_BITS",3413:"ALPHA_BITS",3414:"DEPTH_BITS",3415:"STENCIL_BITS",3553:"TEXTURE_2D",4352:"DONT_CARE",4353:"FASTEST",4354:"NICEST",5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5124:"INT",5125:"UNSIGNED_INT",5126:"FLOAT",5386:"INVERT",5890:"TEXTURE",6401:"STENCIL_INDEX",6402:"DEPTH_COMPONENT",6406:"ALPHA",6407:"RGB",6408:"RGBA",6409:"LUMINANCE",6410:"LUMINANCE_ALPHA",7680:"KEEP",7681:"REPLACE",7682:"INCR",7683:"DECR",7936:"VENDOR",7937:"RENDERER",7938:"VERSION",9728:"NEAREST",9729:"LINEAR",9984:"NEAREST_MIPMAP_NEAREST",9985:"LINEAR_MIPMAP_NEAREST",9986:"NEAREST_MIPMAP_LINEAR",9987:"LINEAR_MIPMAP_LINEAR",10240:"TEXTURE_MAG_FILTER",10241:"TEXTURE_MIN_FILTER",10242:"TEXTURE_WRAP_S",10243:"TEXTURE_WRAP_T",10497:"REPEAT",10752:"POLYGON_OFFSET_UNITS",16384:"COLOR_BUFFER_BIT",32769:"CONSTANT_COLOR",32770:"ONE_MINUS_CONSTANT_COLOR",32771:"CONSTANT_ALPHA",32772:"ONE_MINUS_CONSTANT_ALPHA",32773:"BLEND_COLOR",32774:"FUNC_ADD",32777:"BLEND_EQUATION_RGB",32778:"FUNC_SUBTRACT",32779:"FUNC_REVERSE_SUBTRACT",32819:"UNSIGNED_SHORT_4_4_4_4",32820:"UNSIGNED_SHORT_5_5_5_1",32823:"POLYGON_OFFSET_FILL",32824:"POLYGON_OFFSET_FACTOR",32854:"RGBA4",32855:"RGB5_A1",32873:"TEXTURE_BINDING_2D",32926:"SAMPLE_ALPHA_TO_COVERAGE",32928:"SAMPLE_COVERAGE",32936:"SAMPLE_BUFFERS",32937:"SAMPLES",32938:"SAMPLE_COVERAGE_VALUE",32939:"SAMPLE_COVERAGE_INVERT",32968:"BLEND_DST_RGB",32969:"BLEND_SRC_RGB",32970:"BLEND_DST_ALPHA",32971:"BLEND_SRC_ALPHA",33071:"CLAMP_TO_EDGE",33170:"GENERATE_MIPMAP_HINT",33189:"DEPTH_COMPONENT16",33306:"DEPTH_STENCIL_ATTACHMENT",33635:"UNSIGNED_SHORT_5_6_5",33648:"MIRRORED_REPEAT",33901:"ALIASED_POINT_SIZE_RANGE",33902:"ALIASED_LINE_WIDTH_RANGE",33984:"TEXTURE0",33985:"TEXTURE1",33986:"TEXTURE2",33987:"TEXTURE3",33988:"TEXTURE4",33989:"TEXTURE5",33990:"TEXTURE6",33991:"TEXTURE7",33992:"TEXTURE8",33993:"TEXTURE9",33994:"TEXTURE10",33995:"TEXTURE11",33996:"TEXTURE12",33997:"TEXTURE13",33998:"TEXTURE14",33999:"TEXTURE15",34e3:"TEXTURE16",34001:"TEXTURE17",34002:"TEXTURE18",34003:"TEXTURE19",34004:"TEXTURE20",34005:"TEXTURE21",34006:"TEXTURE22",34007:"TEXTURE23",34008:"TEXTURE24",34009:"TEXTURE25",34010:"TEXTURE26",34011:"TEXTURE27",34012:"TEXTURE28",34013:"TEXTURE29",34014:"TEXTURE30",34015:"TEXTURE31",34016:"ACTIVE_TEXTURE",34024:"MAX_RENDERBUFFER_SIZE",34041:"DEPTH_STENCIL",34055:"INCR_WRAP",34056:"DECR_WRAP",34067:"TEXTURE_CUBE_MAP",34068:"TEXTURE_BINDING_CUBE_MAP",34069:"TEXTURE_CUBE_MAP_POSITIVE_X",34070:"TEXTURE_CUBE_MAP_NEGATIVE_X",34071:"TEXTURE_CUBE_MAP_POSITIVE_Y",34072:"TEXTURE_CUBE_MAP_NEGATIVE_Y",34073:"TEXTURE_CUBE_MAP_POSITIVE_Z",34074:"TEXTURE_CUBE_MAP_NEGATIVE_Z",34076:"MAX_CUBE_MAP_TEXTURE_SIZE",34338:"VERTEX_ATTRIB_ARRAY_ENABLED",34339:"VERTEX_ATTRIB_ARRAY_SIZE",34340:"VERTEX_ATTRIB_ARRAY_STRIDE",34341:"VERTEX_ATTRIB_ARRAY_TYPE",34342:"CURRENT_VERTEX_ATTRIB",34373:"VERTEX_ATTRIB_ARRAY_POINTER",34466:"NUM_COMPRESSED_TEXTURE_FORMATS",34467:"COMPRESSED_TEXTURE_FORMATS",34660:"BUFFER_SIZE",34661:"BUFFER_USAGE",34816:"STENCIL_BACK_FUNC",34817:"STENCIL_BACK_FAIL",34818:"STENCIL_BACK_PASS_DEPTH_FAIL",34819:"STENCIL_BACK_PASS_DEPTH_PASS",34877:"BLEND_EQUATION_ALPHA",34921:"MAX_VERTEX_ATTRIBS",34922:"VERTEX_ATTRIB_ARRAY_NORMALIZED",34930:"MAX_TEXTURE_IMAGE_UNITS",34962:"ARRAY_BUFFER",34963:"ELEMENT_ARRAY_BUFFER",34964:"ARRAY_BUFFER_BINDING",34965:"ELEMENT_ARRAY_BUFFER_BINDING",34975:"VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",35040:"STREAM_DRAW",35044:"STATIC_DRAW",35048:"DYNAMIC_DRAW",35632:"FRAGMENT_SHADER",35633:"VERTEX_SHADER",35660:"MAX_VERTEX_TEXTURE_IMAGE_UNITS",35661:"MAX_COMBINED_TEXTURE_IMAGE_UNITS",35663:"SHADER_TYPE",35664:"FLOAT_VEC2",35665:"FLOAT_VEC3",35666:"FLOAT_VEC4",35667:"INT_VEC2",35668:"INT_VEC3",35669:"INT_VEC4",35670:"BOOL",35671:"BOOL_VEC2",35672:"BOOL_VEC3",35673:"BOOL_VEC4",35674:"FLOAT_MAT2",35675:"FLOAT_MAT3",35676:"FLOAT_MAT4",35678:"SAMPLER_2D",35680:"SAMPLER_CUBE",35712:"DELETE_STATUS",35713:"COMPILE_STATUS",35714:"LINK_STATUS",35715:"VALIDATE_STATUS",35716:"INFO_LOG_LENGTH",35717:"ATTACHED_SHADERS",35718:"ACTIVE_UNIFORMS",35719:"ACTIVE_UNIFORM_MAX_LENGTH",35720:"SHADER_SOURCE_LENGTH",35721:"ACTIVE_ATTRIBUTES",35722:"ACTIVE_ATTRIBUTE_MAX_LENGTH",35724:"SHADING_LANGUAGE_VERSION",35725:"CURRENT_PROGRAM",36003:"STENCIL_BACK_REF",36004:"STENCIL_BACK_VALUE_MASK",36005:"STENCIL_BACK_WRITEMASK",36006:"FRAMEBUFFER_BINDING",36007:"RENDERBUFFER_BINDING",36048:"FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",36049:"FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",36050:"FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",36051:"FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",36053:"FRAMEBUFFER_COMPLETE",36054:"FRAMEBUFFER_INCOMPLETE_ATTACHMENT",36055:"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",36057:"FRAMEBUFFER_INCOMPLETE_DIMENSIONS",36061:"FRAMEBUFFER_UNSUPPORTED",36064:"COLOR_ATTACHMENT0",36096:"DEPTH_ATTACHMENT",36128:"STENCIL_ATTACHMENT",36160:"FRAMEBUFFER",36161:"RENDERBUFFER",36162:"RENDERBUFFER_WIDTH",36163:"RENDERBUFFER_HEIGHT",36164:"RENDERBUFFER_INTERNAL_FORMAT",36168:"STENCIL_INDEX8",36176:"RENDERBUFFER_RED_SIZE",36177:"RENDERBUFFER_GREEN_SIZE",36178:"RENDERBUFFER_BLUE_SIZE",36179:"RENDERBUFFER_ALPHA_SIZE",36180:"RENDERBUFFER_DEPTH_SIZE",36181:"RENDERBUFFER_STENCIL_SIZE",36194:"RGB565",36336:"LOW_FLOAT",36337:"MEDIUM_FLOAT",36338:"HIGH_FLOAT",36339:"LOW_INT",36340:"MEDIUM_INT",36341:"HIGH_INT",36346:"SHADER_COMPILER",36347:"MAX_VERTEX_UNIFORM_VECTORS",36348:"MAX_VARYING_VECTORS",36349:"MAX_FRAGMENT_UNIFORM_VECTORS",37440:"UNPACK_FLIP_Y_WEBGL",37441:"UNPACK_PREMULTIPLY_ALPHA_WEBGL",37442:"CONTEXT_LOST_WEBGL",37443:"UNPACK_COLORSPACE_CONVERSION_WEBGL",37444:"BROWSER_DEFAULT_WEBGL"}},"rr/c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Bus",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"connectSize",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"createSurface",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"listSurfaces",{enumerable:!0,get:function(){return n.list}}),Object.defineProperty(t,"GLSL",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"LinearCopy",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"NearestCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"Node",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Shaders",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"Uniform",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"Visitor",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"VisitorLogger",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Visitors",{enumerable:!0,get:function(){return v.default}}),t.Backbuffer=void 0;var o=m(r("dLFq")),i=m(r("5rLZ")),n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("dGjt")),a=m(r("dEu3")),s=m(r("9tIV")),c=m(r("FRc1")),l=m(r("JwSf")),f=m(r("laZL")),p=m(r("nXQg")),u=m(r("8e5R")),d=m(r("UWhB")),v=m(r("38ab"));function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}r("y0kB");t.Backbuffer="Backbuffer"},st01:function(e,t,r){var o=r("AAS3"),i=r("6v/u");e.exports=function(e){for(var t=Array.isArray(e)?e:o(e),r=0;r<t.length;r++){var n=t[r];if("preprocessor"===n.type){var a=n.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/);if(a&&a[2]){var s=a[1],c=a[2];return(s?i(c):c).trim()}}}}},szI9:function(e,t){e.exports=function(e,t){var r={identity:t},o=e.valueOf;return Object.defineProperty(e,"valueOf",{value:function(e){return e!==t?o.apply(this,arguments):r},writable:!0}),r}},tCpK:function(e,t,r){var o=r("rhSW");e.exports=function(e){return o[e]}},tbvF:function(e,t,r){var o=r("IDFI"),i=r("BEtg"),n="undefined"!==typeof Float64Array;function a(e,t){return e[0]-t[0]}function s(){var e,t=this.stride,r=new Array(t.length);for(e=0;e<r.length;++e)r[e]=[Math.abs(t[e]),e];r.sort(a);var o=new Array(r.length);for(e=0;e<o.length;++e)o[e]=r[e][1];return o}function c(e,t){var r=["View",t,"d",e].join("");t<0&&(r="View_Nil"+e);var i="generic"===e;if(-1===t){var n="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+e+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}";return new Function(n)()}if(0===t){n="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+e+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(i?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(i?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}";return new Function("TrivialArray",n)(l[e][0])}n=["'use strict'"];var a=o(t),c=a.map((function(e){return"i"+e})),f="this.offset+"+a.map((function(e){return"this.stride["+e+"]*i"+e})).join("+"),p=a.map((function(e){return"b"+e})).join(","),u=a.map((function(e){return"c"+e})).join(",");n.push("function "+r+"(a,"+p+","+u+",d){this.data=a","this.shape=["+p+"]","this.stride=["+u+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+e+"'","proto.dimension="+t),n.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+a.map((function(e){return"this.shape["+e+"]"})).join("*"),"}})"),1===t?n.push("proto.order=[0]"):(n.push("Object.defineProperty(proto,'order',{get:"),t<4?(n.push("function "+r+"_order(){"),2===t?n.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===t&&n.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):n.push("ORDER})")),n.push("proto.set=function "+r+"_set("+c.join(",")+",v){"),i?n.push("return this.data.set("+f+",v)}"):n.push("return this.data["+f+"]=v}"),n.push("proto.get=function "+r+"_get("+c.join(",")+"){"),i?n.push("return this.data.get("+f+")}"):n.push("return this.data["+f+"]}"),n.push("proto.index=function "+r+"_index(",c.join(),"){return "+f+"}"),n.push("proto.hi=function "+r+"_hi("+c.join(",")+"){return new "+r+"(this.data,"+a.map((function(e){return["(typeof i",e,"!=='number'||i",e,"<0)?this.shape[",e,"]:i",e,"|0"].join("")})).join(",")+","+a.map((function(e){return"this.stride["+e+"]"})).join(",")+",this.offset)}");var d=a.map((function(e){return"a"+e+"=this.shape["+e+"]"})),v=a.map((function(e){return"c"+e+"=this.stride["+e+"]"}));n.push("proto.lo=function "+r+"_lo("+c.join(",")+"){var b=this.offset,d=0,"+d.join(",")+","+v.join(","));for(var h=0;h<t;++h)n.push("if(typeof i"+h+"==='number'&&i"+h+">=0){d=i"+h+"|0;b+=c"+h+"*d;a"+h+"-=d}");n.push("return new "+r+"(this.data,"+a.map((function(e){return"a"+e})).join(",")+","+a.map((function(e){return"c"+e})).join(",")+",b)}"),n.push("proto.step=function "+r+"_step("+c.join(",")+"){var "+a.map((function(e){return"a"+e+"=this.shape["+e+"]"})).join(",")+","+a.map((function(e){return"b"+e+"=this.stride["+e+"]"})).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(h=0;h<t;++h)n.push("if(typeof i"+h+"==='number'){d=i"+h+"|0;if(d<0){c+=b"+h+"*(a"+h+"-1);a"+h+"=ceil(-a"+h+"/d)}else{a"+h+"=ceil(a"+h+"/d)}b"+h+"*=d}");n.push("return new "+r+"(this.data,"+a.map((function(e){return"a"+e})).join(",")+","+a.map((function(e){return"b"+e})).join(",")+",c)}");var m=new Array(t),g=new Array(t);for(h=0;h<t;++h)m[h]="a[i"+h+"]",g[h]="b[i"+h+"]";n.push("proto.transpose=function "+r+"_transpose("+c+"){"+c.map((function(e,t){return e+"=("+e+"===undefined?"+t+":"+e+"|0)"})).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+m.join(",")+","+g.join(",")+",this.offset)}"),n.push("proto.pick=function "+r+"_pick("+c+"){var a=[],b=[],c=this.offset");for(h=0;h<t;++h)n.push("if(typeof i"+h+"==='number'&&i"+h+">=0){c=(c+this.stride["+h+"]*i"+h+")|0}else{a.push(this.shape["+h+"]);b.push(this.stride["+h+"])}");return n.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),n.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+a.map((function(e){return"shape["+e+"]"})).join(",")+","+a.map((function(e){return"stride["+e+"]"})).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",n.join("\n"))(l[e],s)}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};e.exports=function(e,t,r,o){if(void 0===e)return(0,l.array[0])([]);"number"===typeof e&&(e=[e]),void 0===t&&(t=[e.length]);var a=t.length;if(void 0===r){r=new Array(a);for(var s=a-1,f=1;s>=0;--s)r[s]=f,f*=t[s]}if(void 0===o){o=0;for(s=0;s<a;++s)r[s]<0&&(o-=(t[s]-1)*r[s])}for(var p=function(e){if(i(e))return"buffer";if(n)switch(Object.prototype.toString.call(e)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(e)?"array":"generic"}(e),u=l[p];u.length<=a+1;)u.push(c(p,u.length-1));return(0,u[a+1])(e,t,r,o)}},v25H:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=o?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=c(r("17x9")),n=c(r("QLaP")),a=c(r("Cz5J")),s=c(r("Ry8g"));function c(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={onContextCreate:i.default.func.isRequired,onContextFailure:i.default.func.isRequired,onContextLost:i.default.func.isRequired,onContextRestored:i.default.func.isRequired,webglContextAttributes:i.default.object,width:i.default.number.isRequired,height:i.default.number.isRequired,style:i.default.object,pixelRatio:i.default.number,version:i.default.string};class m extends o.Component{render(){const{error:e}=this.props;let t=String(e.rawError||e.message||e),r=String(e.longMessage||e.rawError||"");return o.default.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,padding:"1em",background:"#a00",color:"#fff",fontSize:"12px",lineHeight:"1.2em",fontStyle:"normal",fontWeight:"normal",fontFamily:"monospace",overflow:"auto"}},o.default.createElement("div",{style:{fontWeight:"bold",marginBottom:"1em"}},t),o.default.createElement("div",{style:{whiteSpace:"pre"}},r))}}class g extends o.Component{constructor(...e){super(...e),v(this,"state",{error:null}),v(this,"webglContextAttributes",void 0),v(this,"canvas",void 0),v(this,"gl",void 0),v(this,"_onContextLost",(e=>{e.preventDefault(),this.gl=null,this.props.onContextLost()})),v(this,"_onContextRestored",(()=>{this.gl=this._createContext(),this.props.onContextRestored(this.gl)})),v(this,"onRef",(e=>{this.canvas=e})),v(this,"debugError",null),v(this,"afterDraw",null)}componentDidMount(){const{onContextCreate:e,onContextFailure:t}=this.props,r=this._createContext();if(r){this.gl=r,e(r);const{canvas:t}=this;(0,n.default)(t,"canvas is not settled in GLViewDOM#componentDidMount"),t.addEventListener("webglcontextlost",this._onContextLost),t.addEventListener("webglcontextrestored",this._onContextRestored)}else t(new Error("no-webgl-context"))}componentWillUnmount(){this.gl&&((0,s.default)(this.gl),this.gl=null);const{canvas:e}=this;e&&(e.removeEventListener("webglcontextlost",this._onContextLost),e.removeEventListener("webglcontextrestored",this._onContextRestored))}render(){const{error:e}=this.state;let t=this.props,{width:r,height:i,pixelRatio:n,style:a,debug:s,version:c}=t,l=d(t,["width","height","pixelRatio","style","debug","version"]);n||(n=Number("object"===typeof window&&window.devicePixelRatio||1));for(let o in h)l.hasOwnProperty(o)&&delete l[o];return o.default.createElement("span",{style:u(u({position:"relative"},a),{},{display:"inline-block",width:r,height:i})},o.default.createElement("canvas",f({ref:this.onRef,style:{width:r,height:i},width:r*n,height:i*n},l)),e?o.default.createElement(m,{error:e}):null)}_createContext(){const{webglContextAttributes:e,debug:t,version:r}=this.props,o=(0,a.default)(this.canvas,t?u(u({},e),{},{preserveDrawingBuffer:!0}):e,r||"auto");return this.webglContextAttributes=e||{},o}captureAsDataURL(...e){return this.webglContextAttributes.preserveDrawingBuffer||console.warn("Surface#captureAsDataURL is likely to not work if you don't define webglContextAttributes={{ preserveDrawingBuffer: true }}"),(0,n.default)(this.canvas,"canvas is no longer available"),this.canvas.toDataURL(...e)}captureAsBlob(...e){return this.webglContextAttributes.preserveDrawingBuffer||console.warn("Surface#captureAsBlob is likely to not work if you don't define webglContextAttributes={{ preserveDrawingBuffer: true }}"),Promise.resolve().then((()=>new Promise(((t,r)=>this.canvas?this.canvas.toBlob(t,...e):r(new Error("canvas is no longer available"))))))}}t.default=g,v(g,"propTypes",h)},xEkU:function(e,t,r){(function(t){for(var o=r("bQgK"),i="undefined"===typeof window?t:window,n=["moz","webkit"],a="AnimationFrame",s=i["request"+a],c=i["cancel"+a]||i["cancelRequest"+a],l=0;!s&&l<n.length;l++)s=i[n[l]+"Request"+a],c=i[n[l]+"Cancel"+a]||i[n[l]+"CancelRequest"+a];if(!s||!c){var f=0,p=0,u=[];s=function(e){if(0===u.length){var t=o(),r=Math.max(0,16.666666666666668-(t-f));f=r+t,setTimeout((function(){var e=u.slice(0);u.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(r){setTimeout((function(){throw r}),0)}}),Math.round(r))}return u.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,r("ntbh"))},y0kB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r("TGEO"),n=(o=r("O8XB"))&&o.__esModule?o:{default:o};class a extends i.WebGLTextureLoaderSyncHashCache{constructor(e){super(e),function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"floatSupported",void 0),this.floatSupported=e.getExtension("OES_texture_float_linear")}canLoad(e){return e.shape&&e.data&&e.stride}inputHash(e){return e}getNoCache(e){const{gl:t}=this,r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const[o,i]=e.shape;return(0,n.default)(t,r,e,this.floatSupported),{texture:r,width:o,height:i}}update(e){const{gl:t}=this,{texture:r}=this.get(e);t.bindTexture(t.TEXTURE_2D,r),(0,n.default)(t,r,e,this.floatSupported)}}i.globalRegistry.add(a);var s=a;t.default=s},zqV6:function(e,t,r){"use strict";(function(e){var o=r("pIo5"),i=r("hK8l"),n=r("HDXh").Buffer;e.__TYPEDARRAY_POOL||(e.__TYPEDARRAY_POOL={UINT8:i([32,0]),UINT16:i([32,0]),UINT32:i([32,0]),BIGUINT64:i([32,0]),INT8:i([32,0]),INT16:i([32,0]),INT32:i([32,0]),BIGINT64:i([32,0]),FLOAT:i([32,0]),DOUBLE:i([32,0]),DATA:i([32,0]),UINT8C:i([32,0]),BUFFER:i([32,0])});var a="undefined"!==typeof Uint8ClampedArray,s="undefined"!==typeof BigUint64Array,c="undefined"!==typeof BigInt64Array,l=e.__TYPEDARRAY_POOL;l.UINT8C||(l.UINT8C=i([32,0])),l.BIGUINT64||(l.BIGUINT64=i([32,0])),l.BIGINT64||(l.BIGINT64=i([32,0])),l.BUFFER||(l.BUFFER=i([32,0]));var f=l.DATA,p=l.BUFFER;function u(e){if(e){var t=e.length||e.byteLength,r=o.log2(t);f[r].push(e)}}function d(e){e=o.nextPow2(e);var t=o.log2(e),r=f[t];return r.length>0?r.pop():new ArrayBuffer(e)}function v(e){return new Uint8Array(d(e),0,e)}function h(e){return new Uint16Array(d(2*e),0,e)}function m(e){return new Uint32Array(d(4*e),0,e)}function g(e){return new Int8Array(d(e),0,e)}function x(e){return new Int16Array(d(2*e),0,e)}function y(e){return new Int32Array(d(4*e),0,e)}function b(e){return new Float32Array(d(4*e),0,e)}function w(e){return new Float64Array(d(8*e),0,e)}function _(e){return a?new Uint8ClampedArray(d(e),0,e):v(e)}function S(e){return s?new BigUint64Array(d(8*e),0,e):null}function E(e){return c?new BigInt64Array(d(8*e),0,e):null}function z(e){return new DataView(d(e),0,e)}function T(e){e=o.nextPow2(e);var t=o.log2(e),r=p[t];return r.length>0?r.pop():new n(e)}t.free=function(e){if(n.isBuffer(e))p[o.log2(e.length)].push(e);else{if("[object ArrayBuffer]"!==Object.prototype.toString.call(e)&&(e=e.buffer),!e)return;var t=e.length||e.byteLength,r=0|o.log2(t);f[r].push(e)}},t.freeUint8=t.freeUint16=t.freeUint32=t.freeBigUint64=t.freeInt8=t.freeInt16=t.freeInt32=t.freeBigInt64=t.freeFloat32=t.freeFloat=t.freeFloat64=t.freeDouble=t.freeUint8Clamped=t.freeDataView=function(e){u(e.buffer)},t.freeArrayBuffer=u,t.freeBuffer=function(e){p[o.log2(e.length)].push(e)},t.malloc=function(e,t){if(void 0===t||"arraybuffer"===t)return d(e);switch(t){case"uint8":return v(e);case"uint16":return h(e);case"uint32":return m(e);case"int8":return g(e);case"int16":return x(e);case"int32":return y(e);case"float":case"float32":return b(e);case"double":case"float64":return w(e);case"uint8_clamped":return _(e);case"bigint64":return E(e);case"biguint64":return S(e);case"buffer":return T(e);case"data":case"dataview":return z(e);default:return null}return null},t.mallocArrayBuffer=d,t.mallocUint8=v,t.mallocUint16=h,t.mallocUint32=m,t.mallocInt8=g,t.mallocInt16=x,t.mallocInt32=y,t.mallocFloat32=t.mallocFloat=b,t.mallocFloat64=t.mallocDouble=w,t.mallocUint8Clamped=_,t.mallocBigUint64=S,t.mallocBigInt64=E,t.mallocDataView=z,t.mallocBuffer=T,t.clearCache=function(){for(var e=0;e<32;++e)l.UINT8[e].length=0,l.UINT16[e].length=0,l.UINT32[e].length=0,l.INT8[e].length=0,l.INT16[e].length=0,l.INT32[e].length=0,l.FLOAT[e].length=0,l.DOUBLE[e].length=0,l.BIGUINT64[e].length=0,l.BIGINT64[e].length=0,l.UINT8C[e].length=0,f[e].length=0,p[e].length=0}}).call(this,r("ntbh"))}}]);