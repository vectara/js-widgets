var vm=Object.create;var ii=Object.defineProperty,ym=Object.defineProperties,xm=Object.getOwnPropertyDescriptor,wm=Object.getOwnPropertyDescriptors,Sm=Object.getOwnPropertyNames,ri=Object.getOwnPropertySymbols,km=Object.getPrototypeOf,Go=Object.prototype.hasOwnProperty,Gu=Object.prototype.propertyIsEnumerable;var Ku=(e,t,n)=>t in e?ii(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))Go.call(t,n)&&Ku(e,n,t[n]);if(ri)for(var n of ri(t))Gu.call(t,n)&&Ku(e,n,t[n]);return e},Ee=(e,t)=>ym(e,wm(t));var lt=(e,t)=>{var n={};for(var r in e)Go.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ri)for(var r of ri(e))t.indexOf(r)<0&&Gu.call(e,r)&&(n[r]=e[r]);return n};var Je=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Cm=(e,t)=>{for(var n in t)ii(e,n,{get:t[n],enumerable:!0})},Em=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Sm(t))!Go.call(e,i)&&i!==n&&ii(e,i,{get:()=>t[i],enumerable:!(r=xm(t,i))||r.enumerable});return e};var I=(e,t,n)=>(n=e!=null?vm(km(e)):{},Em(t||!e||!e.__esModule?ii(n,"default",{value:e,enumerable:!0}):n,e));var Zn=(e,t,n)=>new Promise((r,i)=>{var o=u=>{try{s(n.next(u))}catch(c){i(c)}},l=u=>{try{s(n.throw(u))}catch(c){i(c)}},s=u=>u.done?r(u.value):Promise.resolve(u.value).then(o,l);s((n=n.apply(e,t)).next())});var oa=Je(O=>{"use strict";var er=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),Pm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),zm=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),Lm=Symbol.for("react.lazy"),qu=Symbol.iterator;function Bm(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,ea={};function mn(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||Yu}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ta(){}ta.prototype=mn.prototype;function Xo(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||Yu}var Jo=Xo.prototype=new ta;Jo.constructor=Xo;Zu(Jo,mn.prototype);Jo.isPureReactComponent=!0;var Xu=Array.isArray,na=Object.prototype.hasOwnProperty,Yo={current:null},ra={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)na.call(t,r)&&!ra.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:er,type:e,key:o,ref:l,props:i,_owner:Yo.current}}function Dm(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function Am(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ju=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Am(""+e.key):t.toString(36)}function li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case er:case Nm:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+qo(l,0):r,Xu(i)?(n="",e!=null&&(n=e.replace(Ju,"$&/")+"/"),li(i,t,n,"",function(c){return c})):i!=null&&(Zo(i)&&(i=Dm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ju,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+qo(o,s);l+=li(o,t,n,u,i)}else if(u=Bm(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+qo(o,s++),l+=li(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},si={transition:null},Mm={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:si,ReactCurrentOwner:Yo};O.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mn;O.Fragment=_m;O.Profiler=Rm;O.PureComponent=Xo;O.StrictMode=Tm;O.Suspense=Fm;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Yo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)na.call(t,u)&&!ra.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:er,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pm,_context:e},e.Consumer=e};O.createElement=ia;O.createFactory=function(e){var t=ia.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:zm,render:e}};O.isValidElement=Zo;O.lazy=function(e){return{$$typeof:Lm,_payload:{_status:-1,_result:e},_init:jm}};O.memo=function(e,t){return{$$typeof:Om,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=si.transition;si.transition={};try{e()}finally{si.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return de.current.useCallback(e,t)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,t){return de.current.useEffect(e,t)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return de.current.useMemo(e,t)};O.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return de.current.useTransition()};O.version="18.2.0"});var ye=Je((jv,la)=>{"use strict";la.exports=oa()});var ga=Je(A=>{"use strict";function rl(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<ui(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Ve(e){return e.length===0?null:e[0]}function ci(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>ui(s,n))u<i&&0>ui(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<i&&0>ui(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function ui(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(sa=performance,A.unstable_now=function(){return sa.now()}):(el=Date,ua=el.now(),A.unstable_now=function(){return el.now()-ua});var sa,el,ua,Ye=[],St=[],Um=1,ze=null,se=3,fi=!1,Gt=!1,nr=!1,fa=typeof setTimeout=="function"?setTimeout:null,da=typeof clearTimeout=="function"?clearTimeout:null,aa=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function il(e){for(var t=Ve(St);t!==null;){if(t.callback===null)ci(St);else if(t.startTime<=e)ci(St),t.sortIndex=t.expirationTime,rl(Ye,t);else break;t=Ve(St)}}function ol(e){if(nr=!1,il(e),!Gt)if(Ve(Ye)!==null)Gt=!0,sl(ll);else{var t=Ve(St);t!==null&&ul(ol,t.startTime-e)}}function ll(e,t){Gt=!1,nr&&(nr=!1,da(rr),rr=-1),fi=!0;var n=se;try{for(il(t),ze=Ve(Ye);ze!==null&&(!(ze.expirationTime>t)||e&&!ha());){var r=ze.callback;if(typeof r=="function"){ze.callback=null,se=ze.priorityLevel;var i=r(ze.expirationTime<=t);t=A.unstable_now(),typeof i=="function"?ze.callback=i:ze===Ve(Ye)&&ci(Ye),il(t)}else ci(Ye);ze=Ve(Ye)}if(ze!==null)var o=!0;else{var l=Ve(St);l!==null&&ul(ol,l.startTime-t),o=!1}return o}finally{ze=null,se=n,fi=!1}}var di=!1,ai=null,rr=-1,pa=5,ma=-1;function ha(){return!(A.unstable_now()-ma<pa)}function tl(){if(ai!==null){var e=A.unstable_now();ma=e;var t=!0;try{t=ai(!0,e)}finally{t?tr():(di=!1,ai=null)}}else di=!1}var tr;typeof aa=="function"?tr=function(){aa(tl)}:typeof MessageChannel!="undefined"?(nl=new MessageChannel,ca=nl.port2,nl.port1.onmessage=tl,tr=function(){ca.postMessage(null)}):tr=function(){fa(tl,0)};var nl,ca;function sl(e){ai=e,di||(di=!0,tr())}function ul(e,t){rr=fa(function(){e(A.unstable_now())},t)}A.unstable_IdlePriority=5;A.unstable_ImmediatePriority=1;A.unstable_LowPriority=4;A.unstable_NormalPriority=3;A.unstable_Profiling=null;A.unstable_UserBlockingPriority=2;A.unstable_cancelCallback=function(e){e.callback=null};A.unstable_continueExecution=function(){Gt||fi||(Gt=!0,sl(ll))};A.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pa=0<e?Math.floor(1e3/e):5};A.unstable_getCurrentPriorityLevel=function(){return se};A.unstable_getFirstCallbackNode=function(){return Ve(Ye)};A.unstable_next=function(e){switch(se){case 1:case 2:case 3:var t=3;break;default:t=se}var n=se;se=t;try{return e()}finally{se=n}};A.unstable_pauseExecution=function(){};A.unstable_requestPaint=function(){};A.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=se;se=e;try{return t()}finally{se=n}};A.unstable_scheduleCallback=function(e,t,n){var r=A.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:Um++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,rl(St,e),Ve(Ye)===null&&e===Ve(St)&&(nr?(da(rr),rr=-1):nr=!0,ul(ol,n-r))):(e.sortIndex=i,rl(Ye,e),Gt||fi||(Gt=!0,sl(ll))),e};A.unstable_shouldYield=ha;A.unstable_wrapCallback=function(e){var t=se;return function(){var n=se;se=t;try{return e.apply(this,arguments)}finally{se=n}}}});var ya=Je((Uv,va)=>{"use strict";va.exports=ga()});var Nd=Je(Ie=>{"use strict";var Nc=ye(),Re=ya();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _c=new Set,Nr={};function un(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)_c.add(t[e])}var dt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),zl=Object.prototype.hasOwnProperty,Hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function Vm(e){return zl.call(wa,e)?!0:zl.call(xa,e)?!1:Hm.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function Wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $m(e,t,n,r){if(t===null||typeof t=="undefined"||Wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cs=/[\-:]([a-z])/g;function Es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cs,Es);oe[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cs,Es);oe[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cs,Es);oe[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($m(t,n,i,r)&&(n=null),r||i===null?Vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),_s=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Rs=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Pc=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Sa=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,al;function dr(e){if(al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||""}return`
`+al+e}var cl=!1;function fl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Qm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case vn:return"Portal";case Fl:return"Profiler";case _s:return"StrictMode";case Ol:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rc:return(e.displayName||"Context")+".Consumer";case Tc:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rs:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Bl(e(t))}catch(n){}}return null}function bm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===_s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Km(e){var t=Ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=Km(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Dl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ka(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fc(e,t){t=t.checked,t!=null&&Ns(e,"checked",t,!1)}function Al(e,t){Fc(e,t);var n=At(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&jl(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jl(e,t,n){(t!=="number"||Vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ml(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(pr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function Oc(e,t){var n=At(t.value),r=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,Bc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gm=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var qm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,In=null,zn=null;function _a(e){if(e=$r(e)){if(typeof $l!="function")throw Error(C(280));var t=e.stateNode;t&&(t=vo(t),$l(e.stateNode,e.type,t))}}function jc(e){In?zn?zn.push(e):zn=[e]:In=e}function Mc(){if(In){var e=In,t=zn;if(zn=In=null,_a(e),t)for(e=0;e<t.length;e++)_a(t[e])}}function Uc(e,t){return e(t)}function Hc(){}var dl=!1;function Vc(e,t,n){if(dl)return e(t,n);dl=!0;try{return Uc(e,t,n)}finally{dl=!1,(In!==null||zn!==null)&&(Hc(),Mc())}}function Tr(e,t){var n=e.stateNode;if(n===null)return null;var r=vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ql=!1;if(dt)try{hn={},Object.defineProperty(hn,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch(e){Ql=!1}var hn;function Xm(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var vr=!1,Wi=null,$i=!1,bl=null,Jm={onError:function(e){vr=!0,Wi=e}};function Ym(e,t,n,r,i,o,l,s,u){vr=!1,Wi=null,Xm.apply(Jm,arguments)}function Zm(e,t,n,r,i,o,l,s,u){if(Ym.apply(this,arguments),vr){if(vr){var c=Wi;vr=!1,Wi=null}else throw Error(C(198));$i||($i=!0,bl=c)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(an(e)!==e)throw Error(C(188))}function eh(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ta(i),e;if(o===r)return Ta(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function $c(e){return e=eh(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qc(e);if(t!==null)return t;e=e.sibling}return null}var bc=Re.unstable_scheduleCallback,Ra=Re.unstable_cancelCallback,th=Re.unstable_shouldYield,nh=Re.unstable_requestPaint,q=Re.unstable_now,rh=Re.unstable_getCurrentPriorityLevel,Is=Re.unstable_ImmediatePriority,Kc=Re.unstable_UserBlockingPriority,Qi=Re.unstable_NormalPriority,ih=Re.unstable_LowPriority,Gc=Re.unstable_IdlePriority,po=null,nt=null;function oh(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch(t){}}var Ke=Math.clz32?Math.clz32:uh,lh=Math.log,sh=Math.LN2;function uh(e){return e>>>=0,e===0?32:31-(lh(e)/sh|0)|0}var gi=64,vi=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=mr(s):(o&=l,o!==0&&(r=mr(o)))}else l=n&~i,l!==0?r=mr(l):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function ah(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ke(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=ah(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qc(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function fh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jc,Fs,Yc,Zc,ef,Gl=!1,yi=[],Pt=null,It=null,zt=null,Rr=new Map,Pr=new Map,Nt=[],dh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$r(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ph(e,t,n,r,i){switch(t){case"focusin":return Pt=or(Pt,e,t,n,r,i),!0;case"dragenter":return It=or(It,e,t,n,r,i),!0;case"mouseover":return zt=or(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,or(Rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pr.set(o,or(Pr.get(o)||null,e,t,n,r,i)),!0}return!1}function tf(e){var t=Jt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Wc(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=$r(n),t!==null&&Fs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ia(e,t,n){Fi(e)&&n.delete(t)}function mh(){Gl=!1,Pt!==null&&Fi(Pt)&&(Pt=null),It!==null&&Fi(It)&&(It=null),zt!==null&&Fi(zt)&&(zt=null),Rr.forEach(Ia),Pr.forEach(Ia)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,mh)))}function Ir(e){function t(i){return lr(i,e)}if(0<yi.length){lr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&lr(Pt,e),It!==null&&lr(It,e),zt!==null&&lr(zt,e),Rr.forEach(t),Pr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)tf(n),n.blockedOn===null&&Nt.shift()}var Fn=gt.ReactCurrentBatchConfig,Ki=!0;function hh(e,t,n,r){var i=D,o=Fn.transition;Fn.transition=null;try{D=1,Os(e,t,n,r)}finally{D=i,Fn.transition=o}}function gh(e,t,n,r){var i=D,o=Fn.transition;Fn.transition=null;try{D=4,Os(e,t,n,r)}finally{D=i,Fn.transition=o}}function Os(e,t,n,r){if(Ki){var i=ql(e,t,n,r);if(i===null)wl(e,t,r,Gi,n),Pa(e,r);else if(ph(i,e,t,n,r))r.stopPropagation();else if(Pa(e,r),t&4&&-1<dh.indexOf(e)){for(;i!==null;){var o=$r(i);if(o!==null&&Jc(o),o=ql(e,t,n,r),o===null&&wl(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Gi=null;function ql(e,t,n,r){if(Gi=null,e=Ps(r),e=Jt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rh()){case Is:return 1;case Kc:return 4;case Qi:case ih:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var Tt=null,Ls=null,Oi=null;function rf(){if(Oi)return Oi;var e,t=Ls,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function za(){return!1}function Pe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:za,this.isPropagationStopped=za,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=Pe(Vn),Wr=K({},Vn,{view:0,detail:0}),vh=Pe(Wr),ml,hl,sr,mo=K({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ml=e.screenX-sr.screenX,hl=e.screenY-sr.screenY):hl=ml=0,sr=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),Fa=Pe(mo),yh=K({},mo,{dataTransfer:0}),xh=Pe(yh),wh=K({},Wr,{relatedTarget:0}),gl=Pe(wh),Sh=K({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),kh=Pe(Sh),Ch=K({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=Pe(Ch),Nh=K({},Vn,{data:0}),Oa=Pe(Nh),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rh[e])?!!t[e]:!1}function Ds(){return Ph}var Ih=K({},Wr,{key:function(e){if(e.key){var t=_h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=Pe(Ih),Fh=K({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=Pe(Fh),Oh=K({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Lh=Pe(Oh),Bh=K({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=Pe(Bh),Ah=K({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jh=Pe(Ah),Mh=[9,13,27,32],As=dt&&"CompositionEvent"in window,yr=null;dt&&"documentMode"in document&&(yr=document.documentMode);var Uh=dt&&"TextEvent"in window&&!yr,of=dt&&(!As||yr&&8<yr&&11>=yr),Ba=" ",Da=!1;function lf(e,t){switch(e){case"keyup":return Mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Hh(e,t){switch(e){case"compositionend":return sf(t);case"keypress":return t.which!==32?null:(Da=!0,Ba);case"textInput":return e=t.data,e===Ba&&Da?null:e;default:return null}}function Vh(e,t){if(xn)return e==="compositionend"||!As&&lf(e,t)?(e=rf(),Oi=Ls=Tt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var Wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wh[e.type]:t==="textarea"}function uf(e,t,n,r){jc(r),t=qi(t,"onChange"),0<t.length&&(n=new Bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,zr=null;function $h(e){xf(e,0)}function ho(e){var t=kn(e);if(zc(t))return e}function Qh(e,t){if(e==="change")return t}var af=!1;dt&&(dt?(Si="oninput"in document,Si||(vl=document.createElement("div"),vl.setAttribute("oninput","return;"),Si=typeof vl.oninput=="function"),wi=Si):wi=!1,af=wi&&(!document.documentMode||9<document.documentMode));var wi,Si,vl;function ja(){xr&&(xr.detachEvent("onpropertychange",cf),zr=xr=null)}function cf(e){if(e.propertyName==="value"&&ho(zr)){var t=[];uf(t,zr,e,Ps(e)),Vc($h,t)}}function bh(e,t,n){e==="focusin"?(ja(),xr=t,zr=n,xr.attachEvent("onpropertychange",cf)):e==="focusout"&&ja()}function Kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(zr)}function Gh(e,t){if(e==="click")return ho(t)}function qh(e,t){if(e==="input"||e==="change")return ho(t)}function Xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Xh;function Fr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zl.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function df(){for(var e=window,t=Vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Vi(e.document)}return t}function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jh(e){var t=df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&js(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ua(n,o);var l=Ua(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yh=dt&&"documentMode"in document&&11>=document.documentMode,wn=null,Xl=null,wr=null,Jl=!1;function Ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||wn==null||wn!==Vi(r)||(r=wn,"selectionStart"in r&&js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Fr(wr,r)||(wr=r,r=qi(Xl,"onSelect"),0<r.length&&(t=new Bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},yl={},pf={};dt&&(pf=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function go(e){if(yl[e])return yl[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pf)return yl[e]=t[n];return e}var mf=go("animationend"),hf=go("animationiteration"),gf=go("animationstart"),vf=go("transitionend"),yf=new Map,Va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){yf.set(e,t),un(t,[e])}for(Ci=0;Ci<Va.length;Ci++)Ei=Va[Ci],Wa=Ei.toLowerCase(),$a=Ei[0].toUpperCase()+Ei.slice(1),Mt(Wa,"on"+$a);var Ei,Wa,$a,Ci;Mt(mf,"onAnimationEnd");Mt(hf,"onAnimationIteration");Mt(gf,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(vf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Qa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zm(r,t,void 0,e),e.currentTarget=null}function xf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Qa(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Qa(i,s,c),o=u}}}if($i)throw e=bl,$i=!1,bl=null,e}function H(e,t){var n=t[ns];n===void 0&&(n=t[ns]=new Set);var r=e+"__bubble";n.has(r)||(wf(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),wf(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[Ni]){e[Ni]=!0,_c.forEach(function(n){n!=="selectionchange"&&(Zh.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,xl("selectionchange",!1,t))}}function wf(e,t,n,r){switch(nf(t)){case 1:var i=hh;break;case 4:i=gh;break;default:i=Os}n=i.bind(null,t,n,e),i=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Jt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Vc(function(){var c=o,v=Ps(n),h=[];e:{var y=yf.get(e);if(y!==void 0){var a=Bs,m=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":a=zh;break;case"focusin":m="focus",a=gl;break;case"focusout":m="blur",a=gl;break;case"beforeblur":case"afterblur":a=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":a=Fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":a=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":a=Lh;break;case mf:case hf:case gf:a=kh;break;case vf:a=Dh;break;case"scroll":a=vh;break;case"wheel":a=jh;break;case"copy":case"cut":case"paste":a=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":a=La}var f=(t&4)!==0,S=!f&&e==="scroll",p=f?y!==null?y+"Capture":null:y;f=[];for(var d=c,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Tr(d,p),w!=null&&f.push(Lr(d,w,g)))),S)break;d=d.return}0<f.length&&(y=new a(y,m,null,n,v),h.push({event:y,listeners:f}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout",y&&n!==Wl&&(m=n.relatedTarget||n.fromElement)&&(Jt(m)||m[pt]))break e;if((a||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,a?(m=n.relatedTarget||n.toElement,a=c,m=m?Jt(m):null,m!==null&&(S=an(m),m!==S||m.tag!==5&&m.tag!==6)&&(m=null)):(a=null,m=c),a!==m)){if(f=Fa,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(f=La,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=a==null?y:kn(a),g=m==null?y:kn(m),y=new f(w,d+"leave",a,n,v),y.target=S,y.relatedTarget=g,w=null,Jt(v)===c&&(f=new f(p,d+"enter",m,n,v),f.target=g,f.relatedTarget=S,w=f),S=w,a&&m)t:{for(f=a,p=m,d=0,g=f;g;g=gn(g))d++;for(g=0,w=p;w;w=gn(w))g++;for(;0<d-g;)f=gn(f),d--;for(;0<g-d;)p=gn(p),g--;for(;d--;){if(f===p||p!==null&&f===p.alternate)break t;f=gn(f),p=gn(p)}f=null}else f=null;a!==null&&ba(h,y,a,f,!1),m!==null&&S!==null&&ba(h,S,m,f,!0)}}e:{if(y=c?kn(c):window,a=y.nodeName&&y.nodeName.toLowerCase(),a==="select"||a==="input"&&y.type==="file")var E=Qh;else if(Aa(y))if(af)E=qh;else{E=Kh;var _=bh}else(a=y.nodeName)&&a.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Gh);if(E&&(E=E(e,c))){uf(h,E,n,v);break e}_&&_(e,y,c),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&jl(y,"number",y.value)}switch(_=c?kn(c):window,e){case"focusin":(Aa(_)||_.contentEditable==="true")&&(wn=_,Xl=c,wr=null);break;case"focusout":wr=Xl=wn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,Ha(h,n,v);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":Ha(h,n,v)}var k;if(As)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xn?lf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(of&&n.locale!=="ko"&&(xn||N!=="onCompositionStart"?N==="onCompositionEnd"&&xn&&(k=rf()):(Tt=v,Ls="value"in Tt?Tt.value:Tt.textContent,xn=!0)),_=qi(c,N),0<_.length&&(N=new Oa(N,e,null,n,v),h.push({event:N,listeners:_}),k?N.data=k:(k=sf(n),k!==null&&(N.data=k)))),(k=Uh?Hh(e,n):Vh(e,n))&&(c=qi(c,"onBeforeInput"),0<c.length&&(v=new Oa("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:c}),v.data=k))}xf(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Tr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Tr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Tr(n,o),u!=null&&l.unshift(Lr(n,u,s))):i||(u=Tr(n,o),u!=null&&l.push(Lr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function _i(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(C(425))}function Xi(){}var Yl=null,Zl=null;function es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ts=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga!="undefined"?function(e){return Ga.resolve(null).then(e).catch(i0)}:ts;function i0(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Wn,Br="__reactProps$"+Wn,pt="__reactContainer$"+Wn,ns="__reactEvents$"+Wn,o0="__reactListeners$"+Wn,l0="__reactHandles$"+Wn;function Jt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qa(e);e!==null;){if(n=e[tt])return n;e=qa(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function vo(e){return e[Br]||null}var rs=[],Cn=-1;function Ut(e){return{current:e}}function V(e){0>Cn||(e.current=rs[Cn],rs[Cn]=null,Cn--)}function j(e,t){Cn++,rs[Cn]=e.current,e.current=t}var jt={},fe=Ut(jt),Se=Ut(!1),nn=jt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Ji(){V(Se),V(fe)}function Xa(e,t,n){if(fe.current!==jt)throw Error(C(168));j(fe,t),j(Se,n)}function Sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,bm(e)||"Unknown",i));return K({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,nn=fe.current,j(fe,e),j(Se,Se.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Sf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(fe),j(fe,e)):V(Se),j(Se,n)}var ut=null,yo=!1,kl=!1;function kf(e){ut===null?ut=[e]:ut.push(e)}function s0(e){yo=!0,kf(e)}function Ht(){if(!kl&&ut!==null){kl=!0;var e=0,t=D;try{var n=ut;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,yo=!1}catch(i){throw ut!==null&&(ut=ut.slice(e+1)),bc(Is,Ht),i}finally{D=t,kl=!1}}return null}var En=[],Nn=0,Zi=null,eo=0,Fe=[],Oe=0,rn=null,at=1,ct="";function qt(e,t){En[Nn++]=eo,En[Nn++]=Zi,Zi=e,eo=t}function Cf(e,t,n){Fe[Oe++]=at,Fe[Oe++]=ct,Fe[Oe++]=rn,rn=e;var r=at;e=ct;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,at=1<<32-Ke(t)+i|n<<i|r,ct=o+e}else at=1<<o|n<<i|r,ct=e}function Ms(e){e.return!==null&&(qt(e,1),Cf(e,1,0))}function Us(e){for(;e===Zi;)Zi=En[--Nn],En[Nn]=null,eo=En[--Nn],En[Nn]=null;for(;e===rn;)rn=Fe[--Oe],Fe[Oe]=null,ct=Fe[--Oe],Fe[Oe]=null,at=Fe[--Oe],Fe[Oe]=null}var Te=null,_e=null,$=!1,be=null;function Ef(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,_e=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:at,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,_e=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function os(e){if($){var t=_e;if(t){var n=t;if(!Ya(e,t)){if(is(e))throw Error(C(418));t=Ft(n.nextSibling);var r=Te;t&&Ya(e,t)?Ef(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(is(e))throw Error(C(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Ti(e){if(e!==Te)return!1;if(!$)return Za(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!es(e.type,e.memoizedProps)),t&&(t=_e)){if(is(e))throw Nf(),Error(C(418));for(;t;)Ef(e,t),t=Ft(t.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Te?Ft(e.stateNode.nextSibling):null;return!0}function Nf(){for(var e=_e;e;)e=Ft(e.nextSibling)}function An(){_e=Te=null,$=!1}function Hs(e){be===null?be=[e]:be.push(e)}var u0=gt.ReactCurrentBatchConfig;function $e(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var to=Ut(null),no=null,_n=null,Vs=null;function Ws(){Vs=_n=no=null}function $s(e){var t=to.current;V(to),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){no=e,Vs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Vs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(no===null)throw Error(C(308));_n=e,no.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Yt=null;function Qs(e){Yt===null?Yt=[e]:Yt.push(e)}function _f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qs(t)):(n.next=i.next,i.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Qs(r)):(t.next=i.next,i.next=t),r.interleaved=t,mt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zs(e,n)}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==l&&(s===null?v.firstBaseUpdate=c:s.next=c,v.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,v=c=u=null,s=o;do{var y=s.lane,a=s.eventTime;if((r&y)===y){v!==null&&(v=v.next={eventTime:a,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,f=s;switch(y=t,a=n,f.tag){case 1:if(m=f.payload,typeof m=="function"){h=m.call(a,h,y);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=f.payload,y=typeof m=="function"?m.call(a,h,y):m,y==null)break e;h=K({},h,y);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else a={eventTime:a,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(c=v=a,u=h):v=v.next=a,l|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(v===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ln|=l,e.lanes=l,e.memoizedState=h}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Rf=new Nc.Component().refs;function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=Bt(e),o=ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(Ge(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=Bt(e),o=ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(Ge(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=Bt(e),i=ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(Ge(t,e,r,n),Bi(t,e,r))}};function nc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function Pf(e,t,n){var r=!1,i=jt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=ke(t)?nn:fe.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,i):jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Rf,bs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=ke(t)?nn:fe.current,i.context=Dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ss(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Rf&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ic(e){var t=e._init;return t(e._payload)}function If(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Dt(p,d),p.index=0,p.sibling=null,p}function o(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,g,w){return d===null||d.tag!==6?(d=Pl(g,p.mode,w),d.return=p,d):(d=i(d,g),d.return=p,d)}function u(p,d,g,w){var E=g.type;return E===yn?v(p,d,g.props.children,w,g.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&ic(E)===d.type)?(w=i(d,g.props),w.ref=ur(p,d,g),w.return=p,w):(w=Hi(g.type,g.key,g.props,null,p.mode,w),w.ref=ur(p,d,g),w.return=p,w)}function c(p,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Il(g,p.mode,w),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function v(p,d,g,w,E){return d===null||d.tag!==7?(d=tn(g,p.mode,w,E),d.return=p,d):(d=i(d,g),d.return=p,d)}function h(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Pl(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:return g=Hi(d.type,d.key,d.props,null,p.mode,g),g.ref=ur(p,null,d),g.return=p,g;case vn:return d=Il(d,p.mode,g),d.return=p,d;case Ct:var w=d._init;return h(p,w(d._payload),g)}if(pr(d)||ir(d))return d=tn(d,p.mode,g,null),d.return=p,d;Ri(p,d)}return null}function y(p,d,g,w){var E=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:s(p,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pi:return g.key===E?u(p,d,g,w):null;case vn:return g.key===E?c(p,d,g,w):null;case Ct:return E=g._init,y(p,d,E(g._payload),w)}if(pr(g)||ir(g))return E!==null?null:v(p,d,g,w,null);Ri(p,g)}return null}function a(p,d,g,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,s(d,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pi:return p=p.get(w.key===null?g:w.key)||null,u(d,p,w,E);case vn:return p=p.get(w.key===null?g:w.key)||null,c(d,p,w,E);case Ct:var _=w._init;return a(p,d,g,_(w._payload),E)}if(pr(w)||ir(w))return p=p.get(g)||null,v(d,p,w,E,null);Ri(d,w)}return null}function m(p,d,g,w){for(var E=null,_=null,k=d,N=d=0,P=null;k!==null&&N<g.length;N++){k.index>N?(P=k,k=null):P=k.sibling;var R=y(p,k,g[N],w);if(R===null){k===null&&(k=P);break}e&&k&&R.alternate===null&&t(p,k),d=o(R,d,N),_===null?E=R:_.sibling=R,_=R,k=P}if(N===g.length)return n(p,k),$&&qt(p,N),E;if(k===null){for(;N<g.length;N++)k=h(p,g[N],w),k!==null&&(d=o(k,d,N),_===null?E=k:_.sibling=k,_=k);return $&&qt(p,N),E}for(k=r(p,k);N<g.length;N++)P=a(k,p,N,g[N],w),P!==null&&(e&&P.alternate!==null&&k.delete(P.key===null?N:P.key),d=o(P,d,N),_===null?E=P:_.sibling=P,_=P);return e&&k.forEach(function(U){return t(p,U)}),$&&qt(p,N),E}function f(p,d,g,w){var E=ir(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var _=E=null,k=d,N=d=0,P=null,R=g.next();k!==null&&!R.done;N++,R=g.next()){k.index>N?(P=k,k=null):P=k.sibling;var U=y(p,k,R.value,w);if(U===null){k===null&&(k=P);break}e&&k&&U.alternate===null&&t(p,k),d=o(U,d,N),_===null?E=U:_.sibling=U,_=U,k=P}if(R.done)return n(p,k),$&&qt(p,N),E;if(k===null){for(;!R.done;N++,R=g.next())R=h(p,R.value,w),R!==null&&(d=o(R,d,N),_===null?E=R:_.sibling=R,_=R);return $&&qt(p,N),E}for(k=r(p,k);!R.done;N++,R=g.next())R=a(k,p,N,R.value,w),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?N:R.key),d=o(R,d,N),_===null?E=R:_.sibling=R,_=R);return e&&k.forEach(function(Yn){return t(p,Yn)}),$&&qt(p,N),E}function S(p,d,g,w){if(typeof g=="object"&&g!==null&&g.type===yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pi:e:{for(var E=g.key,_=d;_!==null;){if(_.key===E){if(E=g.type,E===yn){if(_.tag===7){n(p,_.sibling),d=i(_,g.props.children),d.return=p,p=d;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&ic(E)===_.type){n(p,_.sibling),d=i(_,g.props),d.ref=ur(p,_,g),d.return=p,p=d;break e}n(p,_);break}else t(p,_);_=_.sibling}g.type===yn?(d=tn(g.props.children,p.mode,w,g.key),d.return=p,p=d):(w=Hi(g.type,g.key,g.props,null,p.mode,w),w.ref=ur(p,d,g),w.return=p,p=w)}return l(p);case vn:e:{for(_=g.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Il(g,p.mode,w),d.return=p,p=d}return l(p);case Ct:return _=g._init,S(p,d,_(g._payload),w)}if(pr(g))return m(p,d,g,w);if(ir(g))return f(p,d,g,w);Ri(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=Pl(g,p.mode,w),d.return=p,p=d),l(p)):n(p,d)}return S}var jn=If(!0),zf=If(!1),Qr={},rt=Ut(Qr),Dr=Ut(Qr),Ar=Ut(Qr);function Zt(e){if(e===Qr)throw Error(C(174));return e}function Ks(e,t){switch(j(Ar,t),j(Dr,e),j(rt,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}V(rt),j(rt,t)}function Mn(){V(rt),V(Dr),V(Ar)}function Ff(e){Zt(Ar.current);var t=Zt(rt.current),n=Ul(t,e.type);t!==n&&(j(Dr,e),j(rt,n))}function Gs(e){Dr.current===e&&(V(rt),V(Dr))}var Q=Ut(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function qs(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var Di=gt.ReactCurrentDispatcher,El=gt.ReactCurrentBatchConfig,on=0,b=null,Z=null,te=null,oo=!1,Sr=!1,jr=0,a0=0;function ue(){throw Error(C(321))}function Xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Js(e,t,n,r,i,o){if(on=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?p0:m0,e=n(r,i),Sr){o=0;do{if(Sr=!1,jr=0,25<=o)throw Error(C(301));o+=1,te=Z=null,t.updateQueue=null,Di.current=h0,e=n(r,i)}while(Sr)}if(Di.current=lo,t=Z!==null&&Z.next!==null,on=0,te=Z=b=null,oo=!1,t)throw Error(C(300));return e}function Ys(){var e=jr!==0;return jr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?b.memoizedState=te=e:te=te.next=e,te}function Ae(){if(Z===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?b.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(C(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?b.memoizedState=te=e:te=te.next=e}return te}function Mr(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var v=c.lane;if((on&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,l=r):u=u.next=h,b.lanes|=v,ln|=v}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,qe(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,b.lanes|=o,ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=Ae(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);qe(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Of(){}function Lf(e,t){var n=b,r=Ae(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Zs(Af.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Df.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(C(349));on&30||Bf(n,t,i)}return i}function Bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Df(e,t,n,r){t.value=n,t.getSnapshot=r,jf(t)&&Mf(e)}function Af(e,t,n){return n(function(){jf(t)&&Mf(e)})}function jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch(r){return!0}}function Mf(e){var t=mt(e,1);t!==null&&Ge(t,e,1,-1)}function oc(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=d0.bind(null,b,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uf(){return Ae().memoizedState}function Ai(e,t,n,r){var i=et();b.flags|=e,i.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(Z!==null){var l=Z.memoizedState;if(o=l.destroy,r!==null&&Xs(r,l.deps)){i.memoizedState=Ur(t,n,o,r);return}}b.flags|=e,i.memoizedState=Ur(1|t,n,o,r)}function lc(e,t){return Ai(8390656,8,e,t)}function Zs(e,t){return wo(2048,8,e,t)}function Hf(e,t){return wo(4,2,e,t)}function Vf(e,t){return wo(4,4,e,t)}function Wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $f(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Wf.bind(null,t,e),n)}function eu(){}function Qf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kf(e,t,n){return on&21?(qe(n,t)||(n=qc(),b.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function c0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{D=n,El.transition=r}}function Gf(){return Ae().memoizedState}function f0(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qf(e))Xf(t,n);else if(n=_f(e,t,n,r),n!==null){var i=me();Ge(n,e,r,i),Jf(n,t,r)}}function d0(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qf(e))Xf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,qe(s,l)){var u=t.interleaved;u===null?(i.next=i,Qs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch(c){}finally{}n=_f(e,t,i,r),n!==null&&(i=me(),Ge(n,e,r,i),Jf(n,t,r))}}function qf(e){var t=e.alternate;return e===b||t!==null&&t===b}function Xf(e,t){Sr=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zs(e,n)}}var lo={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},p0={readContext:De,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=f0.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:oc,useDebugValue:eu,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=oc(!1),t=e[0];return e=c0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=et();if($){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ne===null)throw Error(C(349));on&30||Bf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,lc(Af.bind(null,r,o,e),[e]),r.flags|=2048,Ur(9,Df.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=ne.identifierPrefix;if($){var n=ct,r=at;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m0={readContext:De,useCallback:Qf,useContext:De,useEffect:Zs,useImperativeHandle:$f,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:bf,useReducer:Nl,useRef:Uf,useState:function(){return Nl(Mr)},useDebugValue:eu,useDeferredValue:function(e){var t=Ae();return Kf(t,Z.memoizedState,e)},useTransition:function(){var e=Nl(Mr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Lf,useId:Gf,unstable_isNewReconciler:!1},h0={readContext:De,useCallback:Qf,useContext:De,useEffect:Zs,useImperativeHandle:$f,useInsertionEffect:Hf,useLayoutEffect:Vf,useMemo:bf,useReducer:_l,useRef:Uf,useState:function(){return _l(Mr)},useDebugValue:eu,useDeferredValue:function(e){var t=Ae();return Z===null?t.memoizedState=e:Kf(t,Z.memoizedState,e)},useTransition:function(){var e=_l(Mr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Lf,useId:Gf,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=Qm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function Yf(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,xs=r),as(e,t)},n}function Zf(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){as(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new g0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=I0.bind(null,e,t,n),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var v0=gt.ReactCurrentOwner,we=!1;function pe(e,t,n,r){t.child=e===null?zf(t,null,n,r):jn(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var o=t.ref;return On(t,i),r=Js(e,t,n,r,o,i),n=Ys(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):($&&n&&Ms(t),t.flags|=1,pe(e,t,r,i),t.child)}function fc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!uu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ed(e,t,o,r,i)):(e=Hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ht(e,t,i)}return cs(e,t,n,r,i)}function td(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Rn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(Rn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(Rn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,j(Rn,Ne),Ne|=r;return pe(e,t,i,n),t.child}function nd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,n,r,i){var o=ke(n)?nn:fe.current;return o=Dn(t,o),On(t,i),n=Js(e,t,n,r,o,i),r=Ys(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):($&&r&&Ms(t),t.flags|=1,pe(e,t,n,i),t.child)}function dc(e,t,n,r,i){if(ke(n)){var o=!0;Yi(t)}else o=!1;if(On(t,i),t.stateNode===null)ji(e,t),Pf(t,n,r),us(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=ke(n)?nn:fe.current,c=Dn(t,c));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&rc(t,l,r,c),Et=!1;var y=t.memoizedState;l.state=y,ro(t,r,l,i),u=t.memoizedState,s!==r||y!==u||Se.current||Et?(typeof v=="function"&&(ss(t,n,v,r),u=t.memoizedState),(s=Et||nc(t,n,s,r,y,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Tf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:$e(t.type,s),l.props=c,h=t.pendingProps,y=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=ke(n)?nn:fe.current,u=Dn(t,u));var a=n.getDerivedStateFromProps;(v=typeof a=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||y!==u)&&rc(t,l,r,u),Et=!1,y=t.memoizedState,l.state=y,ro(t,r,l,i);var m=t.memoizedState;s!==h||y!==m||Se.current||Et?(typeof a=="function"&&(ss(t,n,a,r),m=t.memoizedState),(c=Et||nc(t,n,c,r,y,m,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,m,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,m,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),l.props=r,l.state=m,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,o,i)}function fs(e,t,n,r,i,o){nd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ja(t,n,!1),ht(e,t,o);r=t.stateNode,v0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=jn(t,e.child,null,o),t.child=jn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,i&&Ja(t,n,!0),t.child}function rd(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),Ks(e,t.containerInfo)}function pc(e,t,n,r,i){return An(),Hs(i),t.flags|=256,pe(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(Q,i&1),e===null)return os(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Co(l,r,0,null),e=tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ps(n),t.memoizedState=ds,e):tu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return y0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Dt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Dt(s,o):(o=tn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tu(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Hs(r),jn(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(C(422))),Pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=tn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jn(t,e.child,null,l),t.child.memoizedState=ps(l),t.memoizedState=ds,o);if(!(t.mode&1))return Pi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=Tl(o,r,void 0),Pi(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,mt(e,i),Ge(r,e,i,-1))}return su(),r=Tl(Error(C(421))),Pi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Ft(i.nextSibling),Te=t,$=!0,be=null,e!==null&&(Fe[Oe++]=at,Fe[Oe++]=ct,Fe[Oe++]=rn,at=e.id,ct=e.overflow,rn=t),t=tu(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function Rl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function od(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,o);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function x0(e,t,n){switch(t.tag){case 3:rd(t),An();break;case 5:Ff(t);break;case 1:ke(t.type)&&Yi(t);break;case 4:Ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?id(e,t,n):(j(Q,Q.current&1),e=ht(e,t,n),e!==null?e.sibling:null);j(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return od(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,td(e,t,n)}return ht(e,t,n)}var ld,ms,sd,ud;ld=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ms=function(){};sd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(rt.current);var o=null;switch(n){case"input":i=Dl(e,i),r=Dl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Ml(e,i),r=Ml(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xi)}Hl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ud=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function w0(e,t,n){var r=t.pendingProps;switch(Us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ke(t.type)&&Ji(),ae(t),null;case 3:return r=t.stateNode,Mn(),V(Se),V(fe),qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(ks(be),be=null))),ms(e,t),ae(t),null;case 5:Gs(t);var i=Zt(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)sd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ae(t),null}if(e=Zt(rt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ka(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Ea(r,o),H("invalid",r)}Hl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,s,e),i=["children",""+s]):Nr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":mi(r),Ca(r,o,!0);break;case"textarea":mi(r),Na(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[Br]=r,ld(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":ka(e,r),i=Dl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ea(e,r),i=Ml(e,r),H("invalid",e);break;default:i=r}Hl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ac(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_r(e,u):typeof u=="number"&&_r(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&Ns(e,o,u,l))}switch(n){case"input":mi(e),Ca(e,r,!1);break;case"textarea":mi(e),Na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+At(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)ud(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Zt(Ar.current),Zt(rt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:_i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ae(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&_e!==null&&t.mode&1&&!(t.flags&128))Nf(),An(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[tt]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else be!==null&&(ks(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ee===0&&(ee=3):su())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return Mn(),ms(e,t),e===null&&Or(t.stateNode.containerInfo),ae(t),null;case 10:return $s(t.type._context),ae(t),null;case 17:return ke(t.type)&&Ji(),ae(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ar(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=io(e),l!==null){for(t.flags|=128,ar(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Hn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=io(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return ae(t),null}else 2*q()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=Q.current,j(Q,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function S0(e,t){switch(Us(t),t.tag){case 1:return ke(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),V(Se),V(fe),qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gs(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Mn(),null;case 10:return $s(t.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Ii=!1,ce=!1,k0=typeof WeakSet=="function"?WeakSet:Set,T=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function hs(e,t,n){try{n()}catch(r){G(e,t,r)}}var hc=!1;function C0(e,t){if(Yl=Ki,e=df(),js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,v=0,h=e,y=null;t:for(;;){for(var a;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(a=h.firstChild)!==null;)y=h,h=a;for(;;){if(h===e)break t;if(y===n&&++c===i&&(s=l),y===o&&++v===r&&(u=l),(a=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=a}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},Ki=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var f=m.memoizedProps,S=m.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?f:$e(t.type,f),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){G(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return m=hc,hc=!1,m}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hs(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ad(e){var t=e.alternate;t!==null&&(e.alternate=null,ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[Br],delete t[ns],delete t[o0],delete t[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var re=null,Qe=!1;function kt(e,t,n){for(n=n.child;n!==null;)fd(e,t,n),n=n.sibling}function fd(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(po,n)}catch(s){}switch(n.tag){case 5:ce||Tn(n,t);case 6:var r=re,i=Qe;re=null,kt(e,t,n),re=r,Qe=i,re!==null&&(Qe?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Qe?(e=re,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),Ir(e)):Sl(re,n.stateNode));break;case 4:r=re,i=Qe,re=n.stateNode.containerInfo,Qe=!0,kt(e,t,n),re=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&hs(n,t,l),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ce&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,kt(e,t,n),ce=r):kt(e,t,n);break;default:kt(e,t,n)}}function vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k0),t.forEach(function(r){var i=F0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Qe=!1;break e;case 3:re=s.stateNode.containerInfo,Qe=!0;break e;case 4:re=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(re===null)throw Error(C(160));fd(o,l,i),re=null,Qe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dd(t,e),t=t.sibling}function dd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{kr(3,e,e.return),So(3,e)}catch(f){G(e,e.return,f)}try{kr(5,e,e.return)}catch(f){G(e,e.return,f)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(f){G(e,e.return,f)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fc(i,o),Vl(s,l);var c=Vl(s,o);for(l=0;l<u.length;l+=2){var v=u[l],h=u[l+1];v==="style"?Ac(i,h):v==="dangerouslySetInnerHTML"?Bc(i,h):v==="children"?_r(i,h):Ns(i,v,h,c)}switch(s){case"input":Al(i,o);break;case"textarea":Oc(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var a=o.value;a!=null?Pn(i,!!o.multiple,a,!1):y!==!!o.multiple&&(o.defaultValue!=null?Pn(i,!!o.multiple,o.defaultValue,!0):Pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(f){G(e,e.return,f)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(f){G(e,e.return,f)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(f){G(e,e.return,f)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(iu=q())),r&4&&vc(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(c=ce)||v,We(t,e),ce=c):We(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(h=T=v;T!==null;){switch(y=T,a=y.child,y.tag){case 0:case 11:case 14:case 15:kr(4,y,y.return);break;case 1:Tn(y,y.return);var m=y.stateNode;if(typeof m.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(f){G(r,n,f)}}break;case 5:Tn(y,y.return);break;case 22:if(y.memoizedState!==null){xc(h);continue}}a!==null?(a.return=y,T=a):xc(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Dc("display",l))}catch(f){G(e,e.return,f)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(f){G(e,e.return,f)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),Ze(e),r&4&&vc(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=gc(e);ys(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=gc(e);vs(e,s,l);break;default:throw Error(C(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function E0(e,t,n){T=e,pd(e,t,n)}function pd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ii;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ce;s=Ii;var c=ce;if(Ii=l,(ce=u)&&!c)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?wc(i):u!==null?(u.return=l,T=u):wc(i);for(;o!==null;)T=o,pd(o,t,n),o=o.sibling;T=i,Ii=s,ce=c}yc(e,t,n)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):yc(e,t,n)}}function yc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ce||t.flags&512&&gs(t)}catch(y){G(t,t.return,y)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function xc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function wc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var o=t.return;try{gs(t)}catch(u){G(t,o,u)}break;case 5:var l=t.return;try{gs(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var N0=Math.ceil,so=gt.ReactCurrentDispatcher,nu=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,L=0,ne=null,X=null,ie=0,Ne=0,Rn=Ut(0),ee=0,Hr=null,ln=0,ko=0,ru=0,Cr=null,xe=null,iu=0,Hn=1/0,st=null,uo=!1,xs=null,Lt=null,zi=!1,Rt=null,ao=0,Er=0,ws=null,Mi=-1,Ui=0;function me(){return L&6?q():Mi!==-1?Mi:Mi=q()}function Bt(e){return e.mode&1?L&2&&ie!==0?ie&-ie:u0.transition!==null?(Ui===0&&(Ui=qc()),Ui):(e=D,e!==0||(e=window.event,e=e===void 0?16:nf(e.type)),e):1}function Ge(e,t,n,r){if(50<Er)throw Er=0,ws=null,Error(C(185));Vr(e,n,r),(!(L&2)||e!==ne)&&(e===ne&&(!(L&2)&&(ko|=n),ee===4&&_t(e,ie)),Ce(e,r),n===1&&L===0&&!(t.mode&1)&&(Hn=q()+500,yo&&Ht()))}function Ce(e,t){var n=e.callbackNode;ch(e,t);var r=bi(e,e===ne?ie:0);if(r===0)n!==null&&Ra(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ra(n),t===1)e.tag===0?s0(Sc.bind(null,e)):kf(Sc.bind(null,e)),r0(function(){!(L&6)&&Ht()}),n=null;else{switch(Xc(r)){case 1:n=Is;break;case 4:n=Kc;break;case 16:n=Qi;break;case 536870912:n=Gc;break;default:n=Qi}n=Sd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(Mi=-1,Ui=0,L&6)throw Error(C(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=bi(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=L;L|=2;var o=gd();(ne!==e||ie!==t)&&(st=null,Hn=q()+500,en(e,t));do try{R0();break}catch(s){hd(e,s)}while(!0);Ws(),so.current=o,L=i,X!==null?t=0:(ne=null,ie=0,t=ee)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=Ss(e,i))),t===1)throw n=Hr,en(e,0),_t(e,r),Ce(e,q()),n;if(t===6)_t(e,r);else{if(i=e.current.alternate,!(r&30)&&!_0(i)&&(t=co(e,r),t===2&&(o=Kl(e),o!==0&&(r=o,t=Ss(e,o))),t===1))throw n=Hr,en(e,0),_t(e,r),Ce(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Xt(e,xe,st);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=iu+500-q(),10<t)){if(bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ts(Xt.bind(null,e,xe,st),t);break}Xt(e,xe,st);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ke(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N0(r/1960))-r,10<r){e.timeoutHandle=ts(Xt.bind(null,e,xe,st),r);break}Xt(e,xe,st);break;case 5:Xt(e,xe,st);break;default:throw Error(C(329))}}}return Ce(e,q()),e.callbackNode===n?md.bind(null,e):null}function Ss(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=co(e,t),e!==2&&(t=xe,xe=n,t!==null&&ks(t)),e}function ks(e){xe===null?xe=e:xe.push.apply(xe,e)}function _0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch(l){return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~ru,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if(L&6)throw Error(C(327));Ln();var t=bi(e,0);if(!(t&1))return Ce(e,q()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=Ss(e,r))}if(n===1)throw n=Hr,en(e,0),_t(e,t),Ce(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,xe,st),Ce(e,q()),null}function ou(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Hn=q()+500,yo&&Ht())}}function sn(e){Rt!==null&&Rt.tag===0&&!(L&6)&&Ln();var t=L;L|=1;var n=Be.transition,r=D;try{if(Be.transition=null,D=1,e)return e()}finally{D=r,Be.transition=n,L=t,!(L&6)&&Ht()}}function lu(){Ne=Rn.current,V(Rn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,n0(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Mn(),V(Se),V(fe),qs();break;case 5:Gs(r);break;case 4:Mn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:$s(r.type._context);break;case 22:case 23:lu()}n=n.return}if(ne=e,X=e=Dt(e.current,null),ie=Ne=t,ee=0,Hr=null,ru=ko=ln=0,xe=Cr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function hd(e,t){do{var n=X;try{if(Ws(),Di.current=lo,oo){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(on=0,te=Z=b=null,Sr=!1,jr=0,nu.current=null,n===null||n.return===null){ee=1,Hr=t,X=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=s,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var y=v.alternate;y?(v.updateQueue=y.updateQueue,v.memoizedState=y.memoizedState,v.lanes=y.lanes):(v.updateQueue=null,v.memoizedState=null)}var a=uc(l);if(a!==null){a.flags&=-257,ac(a,l,s,o,t),a.mode&1&&sc(o,c,t),t=a,u=c;var m=t.updateQueue;if(m===null){var f=new Set;f.add(u),t.updateQueue=f}else m.add(u);break e}else{if(!(t&1)){sc(o,c,t),su();break e}u=Error(C(426))}}else if($&&s.mode&1){var S=uc(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ac(S,l,s,o,t),Hs(Un(u,s));break e}}o=u=Un(u,s),ee!==4&&(ee=2),Cr===null?Cr=[o]:Cr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Yf(o,u,t);ec(o,p);break e;case 1:s=u;var d=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Lt===null||!Lt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Zf(o,s,t);ec(o,w);break e}}o=o.return}while(o!==null)}yd(n)}catch(E){t=E,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function gd(){var e=so.current;return so.current=lo,e===null?lo:e}function su(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(ln&268435455)&&!(ko&268435455)||_t(ne,ie)}function co(e,t){var n=L;L|=2;var r=gd();(ne!==e||ie!==t)&&(st=null,en(e,t));do try{T0();break}catch(i){hd(e,i)}while(!0);if(Ws(),L=n,so.current=r,X!==null)throw Error(C(261));return ne=null,ie=0,ee}function T0(){for(;X!==null;)vd(X)}function R0(){for(;X!==null&&!th();)vd(X)}function vd(e){var t=wd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?yd(e):X=t,nu.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=S0(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(n=w0(n,t,Ne),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function Xt(e,t,n){var r=D,i=Be.transition;try{Be.transition=null,D=1,P0(e,t,n,r)}finally{Be.transition=i,D=r}return null}function P0(e,t,n,r){do Ln();while(Rt!==null);if(L&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fh(e,o),e===ne&&(X=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zi||(zi=!0,Sd(Qi,function(){return Ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var l=D;D=1;var s=L;L|=4,nu.current=null,C0(e,n),dd(n,e),Jh(Zl),Ki=!!Yl,Zl=Yl=null,e.current=n,E0(n,e,i),nh(),L=s,D=l,Be.transition=o}else e.current=n;if(zi&&(zi=!1,Rt=e,ao=i),o=e.pendingLanes,o===0&&(Lt=null),oh(n.stateNode,r),Ce(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uo)throw uo=!1,e=xs,xs=null,e;return ao&1&&e.tag!==0&&Ln(),o=e.pendingLanes,o&1?e===ws?Er++:(Er=0,ws=e):Er=0,Ht(),null}function Ln(){if(Rt!==null){var e=Xc(ao),t=Be.transition,n=D;try{if(Be.transition=null,D=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,ao=0,L&6)throw Error(C(331));var i=L;for(L|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(T=c;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:kr(8,v,o)}var h=v.child;if(h!==null)h.return=v,T=h;else for(;T!==null;){v=T;var y=v.sibling,a=v.return;if(ad(v),v===c){T=null;break}if(y!==null){y.return=a,T=y;break}T=a}}}var m=o.alternate;if(m!==null){var f=m.child;if(f!==null){m.child=null;do{var S=f.sibling;f.sibling=null,f=S}while(f!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){l=T;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,T=g;else e:for(l=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:So(9,s)}}catch(E){G(s,s.return,E)}if(s===l){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(L=i,Ht(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(po,e)}catch(E){}r=!0}return r}finally{D=n,Be.transition=t}}return!1}function kc(e,t,n){t=Un(n,t),t=Yf(e,t,1),e=Ot(e,t,1),t=me(),e!==null&&(Vr(e,1,t),Ce(e,t))}function G(e,t,n){if(e.tag===3)kc(e,e,n);else for(;t!==null;){if(t.tag===3){kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Un(n,e),e=Zf(t,e,1),t=Ot(t,e,1),e=me(),t!==null&&(Vr(t,1,e),Ce(t,e));break}}t=t.return}}function I0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>q()-iu?en(e,0):ru|=n),Ce(e,t)}function xd(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=me();e=mt(e,t),e!==null&&(Vr(e,t,n),Ce(e,n))}function z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xd(e,n)}function F0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),xd(e,n)}var wd;wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,x0(e,t,n);we=!!(e.flags&131072)}else we=!1,$&&t.flags&1048576&&Cf(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var i=Dn(t,fe.current);On(t,n),i=Js(null,t,r,e,i,n);var o=Ys();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Yi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bs(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,us(t,r,e,n),t=fs(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ms(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=L0(r),e=$e(r,e),i){case 0:t=cs(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,$e(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),cs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),dc(e,t,r,i,n);case 3:e:{if(rd(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Tf(e,t),ro(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Un(Error(C(423)),t),t=pc(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(C(424)),t),t=pc(e,t,r,n,i);break e}else for(_e=Ft(t.stateNode.containerInfo.firstChild),Te=t,$=!0,be=null,n=zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===i){t=ht(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Ff(t),e===null&&os(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,es(r,i)?l=null:o!==null&&es(r,o)&&(t.flags|=32),nd(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&os(t),null;case 13:return id(e,t,n);case 4:return Ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),cc(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,j(to,r._currentValue),r._currentValue=l,o!==null)if(qe(o.value,l)){if(o.children===i.children&&!Se.current){t=ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ft(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ls(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ls(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=De(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=$e(r,t.pendingProps),i=$e(r.type,i),fc(e,t,r,i,n);case 15:return ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),ji(e,t),t.tag=1,ke(r)?(e=!0,Yi(t)):e=!1,On(t,n),Pf(t,r,i),us(t,r,i,n),fs(null,t,r,!0,e,n);case 19:return od(e,t,n);case 22:return td(e,t,n)}throw Error(C(156,t.tag))};function Sd(e,t){return bc(e,t)}function O0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new O0(e,t,n,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L0(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Rs)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")uu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yn:return tn(n.children,i,o,t);case _s:l=8,i|=8;break;case Fl:return e=Le(12,n,t,i|2),e.elementType=Fl,e.lanes=o,e;case Ol:return e=Le(13,n,t,i),e.elementType=Ol,e.lanes=o,e;case Ll:return e=Le(19,n,t,i),e.elementType=Ll,e.lanes=o,e;case Pc:return Co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tc:l=10;break e;case Rc:l=9;break e;case Ts:l=11;break e;case Rs:l=14;break e;case Ct:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Le(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tn(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Pc,e.lanes=n,e.stateNode={isHidden:!1},e}function Pl(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,i,o,l,s,u){return e=new B0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Le(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(o),e}function D0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kd(e){if(!e)return jt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ke(n))return Sf(e,n,t)}return t}function Cd(e,t,n,r,i,o,l,s,u){return e=au(n,r,!0,e,i,o,l,s,u),e.context=kd(null),n=e.current,r=me(),i=Bt(n),o=ft(r,i),o.callback=t!=null?t:null,Ot(n,o,i),e.current.lanes=i,Vr(e,i,r),Ce(e,r),e}function Eo(e,t,n,r){var i=t.current,o=me(),l=Bt(i);return n=kd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,l),e!==null&&(Ge(e,i,l,o),Bi(e,i,l)),l}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function A0(){return null}var Ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}No.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Eo(e,t,null,null)};No.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){Eo(null,e,null,null)}),t[pt]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&tf(e)}};function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function j0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fo(l);o.call(c)}}var l=Cd(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=l,e[pt]=l.current,Or(e.nodeType===8?e.parentNode:e),sn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=fo(u);s.call(c)}}var u=au(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=u,e[pt]=u.current,Or(e.nodeType===8?e.parentNode:e),sn(function(){Eo(t,u,n,r)}),u}function To(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=fo(l);s.call(u)}}Eo(t,l,e,i)}else l=j0(n,t,e,i,r);return fo(l)}Jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(zs(t,n|1),Ce(t,q()),!(L&6)&&(Hn=q()+500,Ht()))}break;case 13:sn(function(){var r=mt(e,1);if(r!==null){var i=me();Ge(r,e,1,i)}}),cu(e,1)}};Fs=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=me();Ge(t,e,134217728,n)}cu(e,134217728)}};Yc=function(e){if(e.tag===13){var t=Bt(e),n=mt(e,t);if(n!==null){var r=me();Ge(n,e,t,r)}cu(e,t)}};Zc=function(){return D};ef=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};$l=function(e,t,n){switch(t){case"input":if(Al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vo(r);if(!i)throw Error(C(90));zc(r),Al(r,i)}}}break;case"textarea":Oc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Uc=ou;Hc=sn;var M0={usingClientEntryPoint:!1,Events:[$r,kn,vo,jc,Mc,ou]},cr={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U0={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(fr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!fr.isDisabled&&fr.supportsFiber))try{po=fr.inject(U0),nt=fr}catch(e){}var fr;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(t))throw Error(C(200));return D0(e,t,null,n)};Ie.createRoot=function(e,t){if(!du(e))throw Error(C(299));var n=!1,r="",i=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,Or(e.nodeType===8?e.parentNode:e),new fu(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return sn(e)};Ie.hydrate=function(e,t,n){if(!_o(t))throw Error(C(200));return To(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!du(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ed;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Cd(t,null,e,1,n!=null?n:null,i,!1,o,l),e[pt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};Ie.render=function(e,t,n){if(!_o(t))throw Error(C(200));return To(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!_o(e))throw Error(C(40));return e._reactRootContainer?(sn(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Ie.unstable_batchedUpdates=ou;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return To(e,t,n,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608"});var pu=Je((Vv,Td)=>{"use strict";function _d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)}catch(e){console.error(e)}}_d(),Td.exports=Nd()});var Pd=Je(mu=>{"use strict";var Rd=pu();mu.createRoot=Rd.createRoot,mu.hydrateRoot=Rd.hydrateRoot;var Wv});var Xe=Je((Qv,Ro)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=r(i,n(l)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return t.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)e.call(i,l)&&i[l]&&(o=r(o,l));return o}function r(i,o){return o?i?i+" "+o:i+o:i}typeof Ro!="undefined"&&Ro.exports?(t.default=t,Ro.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var zd=Je(Po=>{"use strict";var H0=ye(),V0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,Q0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$0.call(t,r)&&!b0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:V0,type:e,key:o,ref:l,props:i,_owner:Q0.current}}Po.Fragment=W0;Po.jsx=Id;Po.jsxs=Id});var J=Je((Kv,Fd)=>{"use strict";Fd.exports=zd()});var Jn=I(ye()),hm=I(Pd());var Ko=I(ye()),bp=I(pu()),He=I(ye()),Kp=I(Xe()),Gp=I(J()),qp=I(Xe()),Xp=I(J()),z=I(J()),Me=I(J()),Jp=I(ye()),Yp=I(Xe()),Zp=I(ye()),$u=I(Xe()),pn=I(J()),tm=I(ye()),rm=I(J()),im=I(ye()),om=I(Xe()),lm=I(J()),sm=I(Xe()),bo=I(J()),um=I(Xe()),am=I(J()),cm=I(Xe()),fm=I(J()),$w=I(Xe()),bw=I(J()),Gw=I(Xe()),Xw=I(ye()),fn=I(J());var Qn=I(ye(),1);function cn(){return cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(this,arguments)}var K0=["children","options"],Od,Ld;(function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"})(Od||(Od={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(Ld||(Ld={}));var Bd=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),Dd={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xA0",quot:"\u201C"},G0=["style","script"],q0=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,X0=/mailto:/i,J0=/\n{2,}$/,Vd=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,Y0=/^ *> ?/gm,Z0=/^ {2,}\n/,e1=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Wd=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,$d=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,t1=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,n1=/^(?:\n *)*\n/,r1=/\r\n?/g,i1=/^\[\^([^\]]+)](:.*)\n/,o1=/^\[\^([^\]]+)]/,l1=/\f/g,s1=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,u1=/^\s*?\[(x|\s)\]/,Qd=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,bd=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Kd=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,xu=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,a1=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,Gd=/^<!--[\s\S]*?(?:-->)/,c1=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,wu=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,f1=/^\{.*\}$/,d1=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,p1=/^<([^ >]+@[^ >]+)>/,m1=/^<([^ >]+:\/[^ >]+)>/,h1=/-([a-z])?/gi,qd=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,g1=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,v1=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,y1=/^\[([^\]]*)\] ?\[([^\]]*)\]/,x1=/(\[|\])/g,w1=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,S1=/\t/g,k1=/^ *\| */,C1=/(^ *\||\| *$)/g,E1=/ *$/,N1=/^ *:-+: *$/,_1=/^ *:-+ *$/,T1=/^ *-+: *$/,R1=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,P1=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,I1=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,z1=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,F1=/^\\([^0-9A-Za-z\s])/,O1=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,L1=/^\n+/,B1=/^([ \t]*)/,D1=/\\([^\\])/g,Ad=/ *\n+$/,A1=/(?:^|\n)( *)$/,Su="(?:\\d+\\.)",ku="(?:[*+-])";function Xd(e){return"( *)("+(e===1?Su:ku)+") +"}var Jd=Xd(1),Yd=Xd(2);function Zd(e){return new RegExp("^"+(e===1?Jd:Yd))}var j1=Zd(1),M1=Zd(2);function ep(e){return new RegExp("^"+(e===1?Jd:Yd)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Su:ku)+" )[^\\n]*)*(\\n|$)","gm")}var tp=ep(1),np=ep(2);function rp(e){let t=e===1?Su:ku;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var ip=rp(1),op=rp(2);function jd(e,t){let n=t===1,r=n?ip:op,i=n?tp:np,o=n?j1:M1;return{match(l,s,u){let c=A1.exec(u);return c&&(s.list||!s.inline&&!s.simple)?r.exec(l=c[1]+l):null},order:1,parse(l,s,u){let c=n?+l[2]:void 0,v=l[0].replace(J0,`
`).match(i),h=!1;return{items:v.map(function(y,a){let m=o.exec(y)[0].length,f=new RegExp("^ {1,"+m+"}","gm"),S=y.replace(f,"").replace(o,""),p=a===v.length-1,d=S.indexOf(`

`)!==-1||p&&h;h=d;let g=u.inline,w=u.list,E;u.list=!0,d?(u.inline=!1,E=S.replace(Ad,`

`)):(u.inline=!0,E=S.replace(Ad,""));let _=s(E,u);return u.inline=g,u.list=w,_}),ordered:n,start:c}},render:(l,s,u)=>e(l.ordered?"ol":"ul",{key:u.key,start:l.type==="20"?l.start:void 0},l.items.map(function(c,v){return e("li",{key:v},s(c,u))}))}}var U1=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,H1=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,lp=[Vd,Wd,$d,Qd,Kd,bd,Gd,qd,tp,ip,np,op],V1=[...lp,/^[^\n]+(?:  \n|\n{2,})/,xu,wu];function W1(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function $1(e){return T1.test(e)?"right":N1.test(e)?"center":_1.test(e)?"left":null}function Md(e,t,n){let r=n.inTable;n.inTable=!0;let i=t(e.trim(),n);n.inTable=r;let o=[[]];return i.forEach(function(l,s){l.type==="26"?s!==0&&s!==i.length-1&&o.push([]):(l.type!=="27"||i[s+1]!=null&&i[s+1].type!=="26"||(l.text=l.text.replace(E1,"")),o[o.length-1].push(l))}),o}function Q1(e,t,n){n.inline=!0;let r=Md(e[1],t,n),i=e[2].replace(C1,"").split("|").map($1),o=function(l,s,u){return l.trim().split(`
`).map(function(c){return Md(c,s,u)})}(e[3],t,n);return n.inline=!1,{align:i,cells:o,header:r,type:"25"}}function Ud(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function Vt(e){return function(t,n){return n.inline?e.exec(t):null}}function Wt(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function vt(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function br(e){return function(t){return e.exec(t)}}function b1(e,t,n){if(t.inline||t.simple||n&&!n.endsWith(`
`))return null;let r="";e.split(`
`).every(o=>!lp.some(l=>l.test(o))&&(r+=o+`
`,o.trim()));let i=r.trimEnd();return i==""?null:[r,i]}function $n(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(t){return null}return e}function Hd(e){return e.replace(D1,"$1")}function Io(e,t,n){let r=n.inline||!1,i=n.simple||!1;n.inline=!0,n.simple=!0;let o=e(t,n);return n.inline=r,n.simple=i,o}function K1(e,t,n){let r=n.inline||!1,i=n.simple||!1;n.inline=!1,n.simple=!0;let o=e(t,n);return n.inline=r,n.simple=i,o}function G1(e,t,n){return n.inline=!1,e(t,n)}var hu=(e,t,n)=>({children:Io(t,e[1],n)});function gu(){return{}}function vu(){return null}function q1(...e){return e.filter(Boolean).join(" ")}function yu(e,t,n){let r=e,i=t.split(".");for(;i.length&&(r=r[i[0]],r!==void 0);)i.shift();return r||n}function X1(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||W1,t.namedCodesToUnicode=t.namedCodesToUnicode?cn({},Dd,t.namedCodesToUnicode):Dd;let n=t.createElement||Qn.createElement;function r(a,m,...f){let S=yu(t.overrides,`${a}.props`,{});return n(function(p,d){let g=yu(d,p);return g?typeof g=="function"||typeof g=="object"&&"render"in g?g:yu(d,`${p}.component`,p):p}(a,t.overrides),cn({},m,S,{className:q1(m==null?void 0:m.className,S.className)||void 0}),...f)}function i(a){a=a.replace(s1,"");let m=!1;t.forceInline?m=!0:t.forceBlock||(m=w1.test(a)===!1);let f=v(c(m?a:`${a.trimEnd().replace(L1,"")}

`,{inline:m}));for(;typeof f[f.length-1]=="string"&&!f[f.length-1].trim();)f.pop();if(t.wrapper===null)return f;let S=t.wrapper||(m?"span":"div"),p;if(f.length>1||t.forceWrapper)p=f;else{if(f.length===1)return p=f[0],typeof p=="string"?r("span",{key:"outer"},p):p;p=null}return Qn.createElement(S,{key:"outer"},p)}function o(a){let m=a.match(q0);return m?m.reduce(function(f,S,p){let d=S.indexOf("=");if(d!==-1){let g=function(k){return k.indexOf("-")!==-1&&k.match(c1)===null&&(k=k.replace(h1,function(N,P){return P.toUpperCase()})),k}(S.slice(0,d)).trim(),w=function(k){let N=k[0];return(N==='"'||N==="'")&&k.length>=2&&k[k.length-1]===N?k.slice(1,-1):k}(S.slice(d+1).trim()),E=Bd[g]||g,_=f[E]=function(k,N){return k==="style"?N.split(/;\s?/).reduce(function(P,R){let U=R.slice(0,R.indexOf(":"));return P[U.replace(/(-[a-z])/g,Yn=>Yn[1].toUpperCase())]=R.slice(U.length+1).trim(),P},{}):k==="href"||k==="src"?$n(N):(N.match(f1)&&(N=N.slice(1,N.length-1)),N==="true"||N!=="false"&&N)}(g,w);typeof _=="string"&&(xu.test(_)||wu.test(_))&&(f[E]=Qn.cloneElement(i(_.trim()),{key:p}))}else S!=="style"&&(f[Bd[S]||S]=!0);return f},{}):null}let l=[],s={},u={0:{match:vt(Vd),order:1,parse:(a,m,f)=>({children:m(a[0].replace(Y0,""),f)}),render:(a,m,f)=>r("blockquote",{key:f.key},m(a.children,f))},1:{match:br(Z0),order:1,parse:gu,render:(a,m,f)=>r("br",{key:f.key})},2:{match:vt(e1),order:1,parse:gu,render:(a,m,f)=>r("hr",{key:f.key})},3:{match:vt($d),order:0,parse:a=>({lang:void 0,text:a[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(a,m,f)=>r("pre",{key:f.key},r("code",cn({},a.attrs,{className:a.lang?`lang-${a.lang}`:""}),a.text))},4:{match:vt(Wd),order:0,parse:a=>({attrs:o(a[3]||""),lang:a[2]||void 0,text:a[4],type:"3"})},5:{match:Wt(t1),order:3,parse:a=>({text:a[2]}),render:(a,m,f)=>r("code",{key:f.key},a.text)},6:{match:vt(i1),order:0,parse:a=>(l.push({footnote:a[2],identifier:a[1]}),{}),render:vu},7:{match:Vt(o1),order:1,parse:a=>({target:`#${t.slugify(a[1])}`,text:a[1]}),render:(a,m,f)=>r("a",{key:f.key,href:$n(a.target)},r("sup",{key:f.key},a.text))},8:{match:Vt(u1),order:1,parse:a=>({completed:a[1].toLowerCase()==="x"}),render:(a,m,f)=>r("input",{checked:a.completed,key:f.key,readOnly:!0,type:"checkbox"})},9:{match:vt(t.enforceAtxHeadings?bd:Qd),order:1,parse:(a,m,f)=>({children:Io(m,a[2],f),id:t.slugify(a[2]),level:a[1].length}),render:(a,m,f)=>r(`h${a.level}`,{id:a.id,key:f.key},m(a.children,f))},10:{match:vt(Kd),order:0,parse:(a,m,f)=>({children:Io(m,a[1],f),level:a[2]==="="?1:2,type:"9"})},11:{match:br(xu),order:1,parse(a,m,f){let[,S]=a[3].match(B1),p=new RegExp(`^${S}`,"gm"),d=a[3].replace(p,""),g=(w=d,V1.some(N=>N.test(w))?G1:Io);var w;let E=a[1].toLowerCase(),_=G0.indexOf(E)!==-1,k={attrs:o(a[2]),noInnerParse:_,tag:_?E:a[1]};return f.inAnchor=f.inAnchor||E==="a",_?k.text=a[3]:k.children=g(m,d,f),f.inAnchor=!1,k},render:(a,m,f)=>r(a.tag,cn({key:f.key},a.attrs),a.text||m(a.children,f))},13:{match:br(wu),order:1,parse:a=>({attrs:o(a[2]||""),tag:a[1]}),render:(a,m,f)=>r(a.tag,cn({},a.attrs,{key:f.key}))},12:{match:br(Gd),order:1,parse:()=>({}),render:vu},14:{match:Wt(H1),order:1,parse:a=>({alt:a[1],target:Hd(a[2]),title:a[3]}),render:(a,m,f)=>r("img",{key:f.key,alt:a.alt||void 0,title:a.title||void 0,src:$n(a.target)})},15:{match:Vt(U1),order:3,parse:(a,m,f)=>({children:K1(m,a[1],f),target:Hd(a[2]),title:a[3]}),render:(a,m,f)=>r("a",{key:f.key,href:$n(a.target),title:a.title},m(a.children,f))},16:{match:Vt(m1),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],type:"15"})},17:{match:(a,m)=>m.inAnchor?null:Vt(d1)(a,m),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],title:void 0,type:"15"})},18:{match:Vt(p1),order:0,parse(a){let m=a[1],f=a[1];return X0.test(f)||(f="mailto:"+f),{children:[{text:m.replace("mailto:",""),type:"27"}],target:f,type:"15"}}},20:jd(r,1),33:jd(r,2),19:{match:vt(n1),order:3,parse:gu,render:()=>`
`},21:{match:b1,order:3,parse:hu,render:(a,m,f)=>r("p",{key:f.key},m(a.children,f))},22:{match:Vt(g1),order:0,parse:a=>(s[a[1]]={target:a[2],title:a[4]},{}),render:vu},23:{match:Wt(v1),order:0,parse:a=>({alt:a[1]||void 0,ref:a[2]}),render:(a,m,f)=>r("img",{key:f.key,alt:a.alt,src:$n(s[a.ref].target),title:s[a.ref].title})},24:{match:Vt(y1),order:0,parse:(a,m,f)=>({children:m(a[1],f),fallbackChildren:m(a[0].replace(x1,"\\$1"),f),ref:a[2]}),render:(a,m,f)=>s[a.ref]?r("a",{key:f.key,href:$n(s[a.ref].target),title:s[a.ref].title},m(a.children,f)):r("span",{key:f.key},m(a.fallbackChildren,f))},25:{match:vt(qd),order:1,parse:Q1,render:(a,m,f)=>r("table",{key:f.key},r("thead",null,r("tr",null,a.header.map(function(S,p){return r("th",{key:p,style:Ud(a,p)},m(S,f))}))),r("tbody",null,a.cells.map(function(S,p){return r("tr",{key:p},S.map(function(d,g){return r("td",{key:g,style:Ud(a,g)},m(d,f))}))})))},26:{match:function(a,m){return m.inTable?(m.inline=!0,k1.exec(a)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:br(O1),order:4,parse:a=>({text:a[0].replace(a1,(m,f)=>t.namedCodesToUnicode[f]?t.namedCodesToUnicode[f]:m)}),render:a=>a.text},28:{match:Wt(R1),order:2,parse:(a,m,f)=>({children:m(a[2],f)}),render:(a,m,f)=>r("strong",{key:f.key},m(a.children,f))},29:{match:Wt(P1),order:3,parse:(a,m,f)=>({children:m(a[2],f)}),render:(a,m,f)=>r("em",{key:f.key},m(a.children,f))},30:{match:Wt(F1),order:1,parse:a=>({text:a[1],type:"27"})},31:{match:Wt(I1),order:3,parse:hu,render:(a,m,f)=>r("mark",{key:f.key},m(a.children,f))},32:{match:Wt(z1),order:3,parse:hu,render:(a,m,f)=>r("del",{key:f.key},m(a.children,f))}};t.disableParsingRawHTML===!0&&(delete u[11],delete u[13]);let c=function(a){let m=Object.keys(a);function f(S,p){let d=[],g="";for(;S;){let w=0;for(;w<m.length;){let E=m[w],_=a[E],k=_.match(S,p,g);if(k){let N=k[0];S=S.substring(N.length);let P=_.parse(k,f,p);P.type==null&&(P.type=E),d.push(P),g=N;break}w++}}return d}return m.sort(function(S,p){let d=a[S].order,g=a[p].order;return d!==g?d-g:1}),function(S,p){return f(function(d){return d.replace(r1,`
`).replace(l1,"").replace(S1,"    ")}(S),p)}}(u),v=(h=function(a,m){return function(f,S,p){let d=a[f.type].render;return m?m(()=>d(f,S,p),f,S,p):d(f,S,p)}}(u,t.renderRule),function a(m,f={}){if(Array.isArray(m)){let S=f.key,p=[],d=!1;for(let g=0;g<m.length;g++){f.key=g;let w=a(m[g],f),E=typeof w=="string";E&&d?p[p.length-1]+=w:w!==null&&p.push(w),d=E}return f.key=S,p}return h(m,a,f)});var h;let y=i(e);return l.length?r("div",null,y,r("footer",{key:"footer"},l.map(function(a){return r("div",{id:t.slugify(a.identifier),key:a.identifier},a.identifier,v(c(a.footnote,{inline:!0})))}))):y}var sp=e=>{let{children:t,options:n}=e,r=function(i,o){if(i==null)return{};var l,s,u={},c=Object.keys(i);for(s=0;s<c.length;s++)o.indexOf(l=c[s])>=0||(u[l]=i[l]);return u}(e,K0);return Qn.cloneElement(X1(t,n),r)};var le=I(J()),pm=I(ye()),B=I(J()),ot=I(ye());function Kr(e,t){return function(){return e.apply(t,arguments)}}var{toString:J1}=Object.prototype,{getPrototypeOf:Nu}=Object,Fo=(e=>t=>{let n=J1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),it=e=>(e=e.toLowerCase(),t=>Fo(t)===e),Oo=e=>t=>typeof t===e,{isArray:bn}=Array,Gr=Oo("undefined");function Y1(e){return e!==null&&!Gr(e)&&e.constructor!==null&&!Gr(e.constructor)&&je(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var cp=it("ArrayBuffer");function Z1(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&cp(e.buffer),t}var eg=Oo("string"),je=Oo("function"),fp=Oo("number"),Lo=e=>e!==null&&typeof e=="object",tg=e=>e===!0||e===!1,zo=e=>{if(Fo(e)!=="object")return!1;let t=Nu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ng=it("Date"),rg=it("File"),ig=it("Blob"),og=it("FileList"),lg=e=>Lo(e)&&je(e.pipe),sg=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||je(e.append)&&((t=Fo(e))==="formdata"||t==="object"&&je(e.toString)&&e.toString()==="[object FormData]"))},ug=it("URLSearchParams"),ag=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function qr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,i;if(typeof e!="object"&&(e=[e]),bn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{let o=n?Object.getOwnPropertyNames(e):Object.keys(e),l=o.length,s;for(r=0;r<l;r++)s=o[r],t.call(null,e[s],s,e)}}function dp(e,t){t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var pp=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global,mp=e=>!Gr(e)&&e!==pp;function Eu(){let{caseless:e}=mp(this)&&this||{},t={},n=(r,i)=>{let o=e&&dp(t,i)||i;zo(t[o])&&zo(r)?t[o]=Eu(t[o],r):zo(r)?t[o]=Eu({},r):bn(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&qr(arguments[r],n);return t}var cg=(e,t,n,{allOwnKeys:r}={})=>(qr(t,(i,o)=>{n&&je(i)?e[o]=Kr(i,n):e[o]=i},{allOwnKeys:r}),e),fg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pg=(e,t,n,r)=>{let i,o,l,s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)l=i[o],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Nu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},hg=e=>{if(!e)return null;if(bn(e))return e;let t=e.length;if(!fp(t))return null;let n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gg=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Nu(Uint8Array)),vg=(e,t)=>{let r=(e&&e[Symbol.iterator]).call(e),i;for(;(i=r.next())&&!i.done;){let o=i.value;t.call(e,o[0],o[1])}},yg=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xg=it("HTMLFormElement"),wg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),up=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Sg=it("RegExp"),hp=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};qr(n,(i,o)=>{let l;(l=t(i,o,e))!==!1&&(r[o]=l||i)}),Object.defineProperties(e,r)},kg=e=>{hp(e,(t,n)=>{if(je(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;let r=e[n];if(je(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Cg=(e,t)=>{let n={},r=i=>{i.forEach(o=>{n[o]=!0})};return bn(e)?r(e):r(String(e).split(t)),n},Eg=()=>{},Ng=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Cu="abcdefghijklmnopqrstuvwxyz",ap="0123456789",gp={DIGIT:ap,ALPHA:Cu,ALPHA_DIGIT:Cu+Cu.toUpperCase()+ap},_g=(e=16,t=gp.ALPHA_DIGIT)=>{let n="",{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tg(e){return!!(e&&je(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var Rg=e=>{let t=new Array(10),n=(r,i)=>{if(Lo(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;let o=bn(r)?[]:{};return qr(r,(l,s)=>{let u=n(l,i+1);!Gr(u)&&(o[s]=u)}),t[i]=void 0,o}}return r};return n(e,0)},Pg=it("AsyncFunction"),Ig=e=>e&&(Lo(e)||je(e))&&je(e.then)&&je(e.catch),x={isArray:bn,isArrayBuffer:cp,isBuffer:Y1,isFormData:sg,isArrayBufferView:Z1,isString:eg,isNumber:fp,isBoolean:tg,isObject:Lo,isPlainObject:zo,isUndefined:Gr,isDate:ng,isFile:rg,isBlob:ig,isRegExp:Sg,isFunction:je,isStream:lg,isURLSearchParams:ug,isTypedArray:gg,isFileList:og,forEach:qr,merge:Eu,extend:cg,trim:ag,stripBOM:fg,inherits:dg,toFlatObject:pg,kindOf:Fo,kindOfTest:it,endsWith:mg,toArray:hg,forEachEntry:vg,matchAll:yg,isHTMLForm:xg,hasOwnProperty:up,hasOwnProp:up,reduceDescriptors:hp,freezeMethods:kg,toObjectSet:Cg,toCamelCase:wg,noop:Eg,toFiniteNumber:Ng,findKey:dp,global:pp,isContextDefined:mp,ALPHABET:gp,generateString:_g,isSpecCompliantForm:Tg,toJSONObject:Rg,isAsyncFn:Pg,isThenable:Ig};function Kn(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(Kn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var vp=Kn.prototype,yp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{yp[e]={value:e}});Object.defineProperties(Kn,yp);Object.defineProperty(vp,"isAxiosError",{value:!0});Kn.from=(e,t,n,r,i,o)=>{let l=Object.create(vp);return x.toFlatObject(e,l,function(u){return u!==Error.prototype},s=>s!=="isAxiosError"),Kn.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,o&&Object.assign(l,o),l};var F=Kn;var Bo=null;function _u(e){return x.isPlainObject(e)||x.isArray(e)}function wp(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function xp(e,t,n){return e?e.concat(t).map(function(i,o){return i=wp(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function zg(e){return x.isArray(e)&&!e.some(_u)}var Fg=x.toFlatObject(x,{},null,function(t){return/^is[A-Z]/.test(t)});function Og(e,t,n){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new(Bo||FormData),n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,S){return!x.isUndefined(S[f])});let r=n.metaTokens,i=n.visitor||v,o=n.dots,l=n.indexes,u=(n.Blob||typeof Blob!="undefined"&&Blob)&&x.isSpecCompliantForm(t);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(x.isDate(m))return m.toISOString();if(!u&&x.isBlob(m))throw new F("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(m)||x.isTypedArray(m)?u&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function v(m,f,S){let p=m;if(m&&!S&&typeof m=="object"){if(x.endsWith(f,"{}"))f=r?f:f.slice(0,-2),m=JSON.stringify(m);else if(x.isArray(m)&&zg(m)||(x.isFileList(m)||x.endsWith(f,"[]"))&&(p=x.toArray(m)))return f=wp(f),p.forEach(function(g,w){!(x.isUndefined(g)||g===null)&&t.append(l===!0?xp([f],w,o):l===null?f:f+"[]",c(g))}),!1}return _u(m)?!0:(t.append(xp(S,f,o),c(m)),!1)}let h=[],y=Object.assign(Fg,{defaultVisitor:v,convertValue:c,isVisitable:_u});function a(m,f){if(!x.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+f.join("."));h.push(m),x.forEach(m,function(p,d){(!(x.isUndefined(p)||p===null)&&i.call(t,p,x.isString(d)?d.trim():d,f,y))===!0&&a(p,f?f.concat(d):[d])}),h.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");return a(e),t}var $t=Og;function Sp(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function kp(e,t){this._pairs=[],e&&$t(e,this,t)}var Cp=kp.prototype;Cp.append=function(t,n){this._pairs.push([t,n])};Cp.toString=function(t){let n=t?function(r){return t.call(this,r,Sp)}:Sp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};var Do=kp;function Lg(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xr(e,t,n){if(!t)return e;let r=n&&n.encode||Lg,i=n&&n.serialize,o;if(i?o=i(t,n):o=x.isURLSearchParams(t)?t.toString():new Do(t,n).toString(r),o){let l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}var Tu=class{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){x.forEach(this.handlers,function(r){r!==null&&t(r)})}},Ru=Tu;var Ao={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Ep=typeof URLSearchParams!="undefined"?URLSearchParams:Do;var Np=typeof FormData!="undefined"?FormData:null;var _p=typeof Blob!="undefined"?Blob:null;var Tp={isBrowser:!0,classes:{URLSearchParams:Ep,FormData:Np,Blob:_p},protocols:["http","https","file","blob","url","data"]};var Pu={};Cm(Pu,{hasBrowserEnv:()=>Rp,hasStandardBrowserEnv:()=>Bg,hasStandardBrowserWebWorkerEnv:()=>Dg});var Rp=typeof window!="undefined"&&typeof document!="undefined",Bg=(e=>Rp&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Dg=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";var ge=W(W({},Pu),Tp);function Iu(e,t){return $t(e,new ge.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ge.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ag(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jg(e){let t={},n=Object.keys(e),r,i=n.length,o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Mg(e){function t(n,r,i,o){let l=n[o++];if(l==="__proto__")return!0;let s=Number.isFinite(+l),u=o>=n.length;return l=!l&&x.isArray(i)?i.length:l,u?(x.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!s):((!i[l]||!x.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],o)&&x.isArray(i[l])&&(i[l]=jg(i[l])),!s)}if(x.isFormData(e)&&x.isFunction(e.entries)){let n={};return x.forEachEntry(e,(r,i)=>{t(Ag(r),i,n,0)}),n}return null}var jo=Mg;function Ug(e,t,n){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var zu={transitional:Ao,adapter:["xhr","http"],transformRequest:[function(t,n){let r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=x.isObject(t);if(o&&x.isHTMLForm(t)&&(t=new FormData(t)),x.isFormData(t))return i?JSON.stringify(jo(t)):t;if(x.isArrayBuffer(t)||x.isBuffer(t)||x.isStream(t)||x.isFile(t)||x.isBlob(t))return t;if(x.isArrayBufferView(t))return t.buffer;if(x.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Iu(t,this.formSerializer).toString();if((s=x.isFileList(t))||r.indexOf("multipart/form-data")>-1){let u=this.env&&this.env.FormData;return $t(s?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Ug(t)):t}],transformResponse:[function(t){let n=this.transitional||zu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&x.isString(t)&&(r&&!this.responseType||i)){let l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?F.from(s,F.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],e=>{zu.headers[e]={}});var Gn=zu;var Hg=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pp=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&Hg[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};var Ip=Symbol("internals");function Jr(e){return e&&String(e).trim().toLowerCase()}function Mo(e){return e===!1||e==null?e:x.isArray(e)?e.map(Mo):String(e)}function Vg(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Wg=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Fu(e,t,n,r,i){if(x.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!x.isString(t)){if(x.isString(r))return t.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(t)}}function $g(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Qg(e,t){let n=x.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,l){return this[r].call(this,t,i,o,l)},configurable:!0})})}var qn=class{constructor(t){t&&this.set(t)}set(t,n,r){let i=this;function o(s,u,c){let v=Jr(u);if(!v)throw new Error("header name must be a non-empty string");let h=x.findKey(i,v);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||u]=Mo(s))}let l=(s,u)=>x.forEach(s,(c,v)=>o(c,v,u));return x.isPlainObject(t)||t instanceof this.constructor?l(t,n):x.isString(t)&&(t=t.trim())&&!Wg(t)?l(Pp(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Jr(t),t){let r=x.findKey(this,t);if(r){let i=this[r];if(!n)return i;if(n===!0)return Vg(i);if(x.isFunction(n))return n.call(this,i,r);if(x.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Jr(t),t){let r=x.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Fu(this,this[r],r,n)))}return!1}delete(t,n){let r=this,i=!1;function o(l){if(l=Jr(l),l){let s=x.findKey(r,l);s&&(!n||Fu(r,r[s],s,n))&&(delete r[s],i=!0)}}return x.isArray(t)?t.forEach(o):o(t),i}clear(t){let n=Object.keys(this),r=n.length,i=!1;for(;r--;){let o=n[r];(!t||Fu(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){let n=this,r={};return x.forEach(this,(i,o)=>{let l=x.findKey(r,o);if(l){n[l]=Mo(i),delete n[o];return}let s=t?$g(o):String(o).trim();s!==o&&delete n[o],n[s]=Mo(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let n=Object.create(null);return x.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){let r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){let r=(this[Ip]=this[Ip]={accessors:{}}).accessors,i=this.prototype;function o(l){let s=Jr(l);r[s]||(Qg(i,l),r[s]=!0)}return x.isArray(t)?t.forEach(o):o(t),this}};qn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(qn.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});x.freezeMethods(qn);var ve=qn;function Yr(e,t){let n=this||Gn,r=t||n,i=ve.from(r.headers),o=r.data;return x.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Zr(e){return!!(e&&e.__CANCEL__)}function zp(e,t,n){F.call(this,e==null?"canceled":e,F.ERR_CANCELED,t,n),this.name="CanceledError"}x.inherits(zp,F,{__CANCEL__:!0});var Qt=zp;function Ou(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Fp=ge.hasStandardBrowserEnv?{write(e,t,n,r,i,o){let l=[e+"="+encodeURIComponent(t)];x.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),x.isString(r)&&l.push("path="+r),x.isString(i)&&l.push("domain="+i),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Lu(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bu(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ei(e,t){return e&&!Lu(t)?Bu(e,t):t}var Op=ge.hasStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function i(o){let l=o;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){let s=x.isString(l)?i(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Du(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bg(e,t){e=e||10;let n=new Array(e),r=new Array(e),i=0,o=0,l;return t=t!==void 0?t:1e3,function(u){let c=Date.now(),v=r[o];l||(l=c),n[i]=u,r[i]=c;let h=o,y=0;for(;h!==i;)y+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-l<t)return;let a=v&&c-v;return a?Math.round(y*1e3/a):void 0}}var Lp=bg;function Bp(e,t){let n=0,r=Lp(50,250);return i=>{let o=i.loaded,l=i.lengthComputable?i.total:void 0,s=o-n,u=r(s),c=o<=l;n=o;let v={loaded:o,total:l,progress:l?o/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&c?(l-o)/u:void 0,event:i};v[t?"download":"upload"]=!0,e(v)}}var Kg=typeof XMLHttpRequest!="undefined",Dp=Kg&&function(e){return new Promise(function(n,r){let i=e.data,o=ve.from(e.headers).normalize(),{responseType:l,withXSRFToken:s}=e,u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let v;if(x.isFormData(i)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((v=o.getContentType())!==!1){let[f,...S]=v?v.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...S].join("; "))}}let h=new XMLHttpRequest;if(e.auth){let f=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+S))}let y=ei(e.baseURL,e.url);h.open(e.method.toUpperCase(),Xr(y,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function a(){if(!h)return;let f=ve.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),p={data:!l||l==="text"||l==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:f,config:e,request:h};Ou(function(g){n(g),c()},function(g){r(g),c()},p),h=null}if("onloadend"in h?h.onloadend=a:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(a)},h.onabort=function(){h&&(r(new F("Request aborted",F.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new F("Network Error",F.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",p=e.transitional||Ao;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new F(S,p.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,h)),h=null},ge.hasStandardBrowserEnv&&(s&&x.isFunction(s)&&(s=s(e)),s||s!==!1&&Op(y))){let f=e.xsrfHeaderName&&e.xsrfCookieName&&Fp.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}i===void 0&&o.setContentType(null),"setRequestHeader"in h&&x.forEach(o.toJSON(),function(S,p){h.setRequestHeader(p,S)}),x.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),l&&l!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",Bp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Bp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=f=>{h&&(r(!f||f.type?new Qt(null,e,h):f),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));let m=Du(y);if(m&&ge.protocols.indexOf(m)===-1){r(new F("Unsupported protocol "+m+":",F.ERR_BAD_REQUEST,e));return}h.send(i||null)})};var Au={http:Bo,xhr:Dp};x.forEach(Au,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});var Ap=e=>`- ${e}`,Gg=e=>x.isFunction(e)||e===null||e===!1,Uo={getAdapter:e=>{e=x.isArray(e)?e:[e];let{length:t}=e,n,r,i={};for(let o=0;o<t;o++){n=e[o];let l;if(r=n,!Gg(n)&&(r=Au[(l=String(n)).toLowerCase()],r===void 0))throw new F(`Unknown adapter '${l}'`);if(r)break;i[l||"#"+o]=r}if(!r){let o=Object.entries(i).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build")),l=t?o.length>1?`since :
`+o.map(Ap).join(`
`):" "+Ap(o[0]):"as no adapter specified";throw new F("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Au};function ju(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qt(null,e)}function Ho(e){return ju(e),e.headers=ve.from(e.headers),e.data=Yr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Uo.getAdapter(e.adapter||Gn.adapter)(e).then(function(r){return ju(e),r.data=Yr.call(e,e.transformResponse,r),r.headers=ve.from(r.headers),r},function(r){return Zr(r)||(ju(e),r&&r.response&&(r.response.data=Yr.call(e,e.transformResponse,r.response),r.response.headers=ve.from(r.response.headers))),Promise.reject(r)})}var jp=e=>e instanceof ve?e.toJSON():e;function yt(e,t){t=t||{};let n={};function r(c,v,h){return x.isPlainObject(c)&&x.isPlainObject(v)?x.merge.call({caseless:h},c,v):x.isPlainObject(v)?x.merge({},v):x.isArray(v)?v.slice():v}function i(c,v,h){if(x.isUndefined(v)){if(!x.isUndefined(c))return r(void 0,c,h)}else return r(c,v,h)}function o(c,v){if(!x.isUndefined(v))return r(void 0,v)}function l(c,v){if(x.isUndefined(v)){if(!x.isUndefined(c))return r(void 0,c)}else return r(void 0,v)}function s(c,v,h){if(h in t)return r(c,v);if(h in e)return r(void 0,c)}let u={url:o,method:o,data:o,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(c,v)=>i(jp(c),jp(v),!0)};return x.forEach(Object.keys(Object.assign({},e,t)),function(v){let h=u[v]||i,y=h(e[v],t[v],v);x.isUndefined(y)&&h!==s||(n[v]=y)}),n}var Vo="1.6.7";var Mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var Mp={};Mu.transitional=function(t,n,r){function i(o,l){return"[Axios v"+Vo+"] Transitional option '"+o+"'"+l+(r?". "+r:"")}return(o,l,s)=>{if(t===!1)throw new F(i(l," has been removed"+(n?" in "+n:"")),F.ERR_DEPRECATED);return n&&!Mp[l]&&(Mp[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,l,s):!0}};function qg(e,t,n){if(typeof e!="object")throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let o=r[i],l=t[o];if(l){let s=e[o],u=s===void 0||l(s,o,e);if(u!==!0)throw new F("option "+o+" must be "+u,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F("Unknown option "+o,F.ERR_BAD_OPTION)}}var Wo={assertOptions:qg,validators:Mu};var bt=Wo.validators,Xn=class{constructor(t){this.defaults=t,this.interceptors={request:new Ru,response:new Ru}}request(t,n){return Zn(this,null,function*(){try{return yield this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;let o=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}})}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=yt(this.defaults,n);let{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Wo.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),i!=null&&(x.isFunction(i)?n.paramsSerializer={serialize:i}:Wo.assertOptions(i,{encode:bt.function,serialize:bt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=o&&x.merge(o.common,o[n.method]);o&&x.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=ve.concat(l,o);let s=[],u=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(u=u&&f.synchronous,s.unshift(f.fulfilled,f.rejected))});let c=[];this.interceptors.response.forEach(function(f){c.push(f.fulfilled,f.rejected)});let v,h=0,y;if(!u){let m=[Ho.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,c),y=m.length,v=Promise.resolve(n);h<y;)v=v.then(m[h++],m[h++]);return v}y=s.length;let a=n;for(h=0;h<y;){let m=s[h++],f=s[h++];try{a=m(a)}catch(S){f.call(this,S);break}}try{v=Ho.call(this,a)}catch(m){return Promise.reject(m)}for(h=0,y=c.length;h<y;)v=v.then(c[h++],c[h++]);return v}getUri(t){t=yt(this.defaults,t);let n=ei(t.baseURL,t.url);return Xr(n,t.params,t.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(t){Xn.prototype[t]=function(n,r){return this.request(yt(r||{},{method:t,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(t){function n(r){return function(o,l,s){return this.request(yt(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:l}))}}Xn.prototype[t]=n(),Xn.prototype[t+"Form"]=n(!0)});var ti=Xn;var Uu=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});let r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o,l=new Promise(s=>{r.subscribe(s),o=s}).then(i);return l.cancel=function(){r.unsubscribe(o)},l},t(function(o,l,s){r.reason||(r.reason=new Qt(o,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new e(function(i){t=i}),cancel:t}}},Up=Uu;function Hu(e){return function(n){return e.apply(null,n)}}function Vu(e){return x.isObject(e)&&e.isAxiosError===!0}var Wu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wu).forEach(([e,t])=>{Wu[t]=e});var Hp=Wu;function Vp(e){let t=new ti(e),n=Kr(ti.prototype.request,t);return x.extend(n,ti.prototype,t,{allOwnKeys:!0}),x.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Vp(yt(e,i))},n}var Y=Vp(Gn);Y.Axios=ti;Y.CanceledError=Qt;Y.CancelToken=Up;Y.isCancel=Zr;Y.VERSION=Vo;Y.toFormData=$t;Y.AxiosError=F;Y.Cancel=Y.CanceledError;Y.all=function(t){return Promise.all(t)};Y.spread=Hu;Y.isAxiosError=Vu;Y.mergeConfig=yt;Y.AxiosHeaders=ve;Y.formToJSON=e=>jo(x.isHTMLForm(e)?new FormData(e):e);Y.getAdapter=Uo.getAdapter;Y.HttpStatusCode=Hp;Y.default=Y;var $o=Y;var{Axios:_w,AxiosError:Tw,CanceledError:Rw,isCancel:Pw,CancelToken:Iw,VERSION:zw,all:Fw,Cancel:Ow,isAxiosError:Lw,spread:Bw,toFormData:Dw,AxiosHeaders:Aw,HttpStatusCode:jw,formToJSON:Mw,getAdapter:Uw,mergeConfig:Hw}=$o;var dn=I(J()),M=I(J()),Kt=I(J());var Xg={baseline:"vuiFlexContainer--alignItemsBaseline",center:"vuiFlexContainer--alignItemsCenter",end:"vuiFlexContainer--alignItemsEnd",start:"vuiFlexContainer--alignItemsStart",stretch:"vuiFlexContainer--alignItemsStretch"},Jg={column:"vuiFlexContainer--directionColumn",columnReverse:"vuiFlexContainer--directionColumnReverse",row:"vuiFlexContainer--directionRow",rowReverse:"vuiFlexContainer--directionRowReverse"},Yg={center:"vuiFlexContainer--justifyContentCenter",end:"vuiFlexContainer--justifyContentEnd",start:"vuiFlexContainer--justifyContentStart",spaceAround:"vuiFlexContainer--justifyContentSpaceAround",spaceBetween:"vuiFlexContainer--justifyContentSpaceBetween",spaceEvenly:"vuiFlexContainer--justifyContentSpaceEvenly"},Zg={none:"vuiFlexContainer--spacingNone",xxs:"vuiFlexContainer--spacingXxs",xs:"vuiFlexContainer--spacingXs",s:"vuiFlexContainer--spacingS",m:"vuiFlexContainer--spacingM",l:"vuiFlexContainer--spacingL",xl:"vuiFlexContainer--spacingXl",xxl:"vuiFlexContainer--spacingXxl"},wt=c=>{var v=c,{children:e,alignItems:t="stretch",direction:n="row",justifyContent:r="start",spacing:i="m",wrap:o,className:l,fullWidth:s}=v,u=lt(v,["children","alignItems","direction","justifyContent","spacing","wrap","className","fullWidth"]);let h=(0,Kp.default)(l,"vuiFlexContainer",Xg[t],Jg[n],Yg[r],Zg[i],{"vuiFlexContainer--wrap":o,"vuiFlexContainer--fullWidth":s});return(0,Gp.jsx)("div",Ee(W({className:h},u),{children:e}))},ev={baseline:"vuiFlexItem--alignItemsBaseline",center:"vuiFlexItem--alignItemsCenter",end:"vuiFlexItem--alignItemsEnd",start:"vuiFlexItem--alignItemsStart",stretch:"vuiFlexItem--alignItemsStretch"},Ue=u=>{var c=u,{children:e,grow:t,shrink:n,basis:r="auto",alignItems:i="stretch",className:o,truncate:l}=c,s=lt(c,["children","grow","shrink","basis","alignItems","className","truncate"]);let v=t===!1,h=n===!1,y=(0,qp.default)("vuiFlexItem",`vuiFlexItem--${r}`,ev[i],{[`vuiFlexItem--flexGrow${t}`]:typeof t=="number","vuiFlexItem--flexGrowNone":v,[`vuiFlexItem--flexShrink${n}`]:typeof n=="number","vuiFlexItem--flexShrinkNone":h,"vuiFlexItem--truncate":l},o);return(0,Xp.jsx)("div",Ee(W({className:y},s),{children:e}))},Qo=0,Wp=()=>(Qo===Number.MAX_SAFE_INTEGER?Qo=0:Qo++,Qo.toString()),tv=({size:e,color:t})=>(0,z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 329.26933 329",width:e,height:e,fill:t,children:(0,z.jsx)("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"})}),nv=({size:e="16px",color:t="#ffffff"})=>(0,z.jsxs)("svg",{fill:t,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:e,height:e,viewBox:"0 0 29.75 29.75",xmlSpace:"preserve",children:[(0,z.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,z.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,z.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,z.jsxs)("g",{children:[" ",(0,z.jsxs)("g",{children:[" ",(0,z.jsx)("path",{d:"M26.573,4.026H5.163c-1.884,0-3.413,1.707-3.413,3.321v12.976c0,0.001,0,0.002,0,0.003l-0.004-0.003L0,25.724l4.913-2.717 c0.084,0.004,0.164,0.02,0.25,0.02h21.41c1.884,0,3.177-1.09,3.177-2.703V7.347C29.75,5.733,28.457,4.026,26.573,4.026z M27.75,20.323c0,0.538-0.548,0.703-1.177,0.703H5.163c-0.629,0-1.413-0.165-1.413-0.703V7.347c0-0.539,0.784-1.321,1.413-1.321 h21.41c0.629,0,1.177,0.782,1.177,1.321V20.323z"})," ",(0,z.jsxs)("g",{children:[" ",(0,z.jsx)("circle",{cx:"9.274",cy:"13.526",r:"1.874"})," ",(0,z.jsx)("circle",{cx:"15.657",cy:"13.526",r:"1.874"})," ",(0,z.jsx)("circle",{cx:"22.04",cy:"13.526",r:"1.874"})," "]})," "]})," "]})," "]})]}),rv=()=>(0,z.jsxs)("svg",{fill:"#c41535",width:"16px",height:"16px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",stroke:"#c41535",strokeWidth:"20",children:[(0,z.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,z.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,z.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,z.jsx)("path",{d:"M520.741 163.801a10.234 10.234 0 00-3.406-3.406c-4.827-2.946-11.129-1.421-14.075 3.406L80.258 856.874a10.236 10.236 0 00-1.499 5.335c0 5.655 4.585 10.24 10.24 10.24h846.004c1.882 0 3.728-.519 5.335-1.499 4.827-2.946 6.352-9.248 3.406-14.075L520.742 163.802zm43.703-26.674L987.446 830.2c17.678 28.964 8.528 66.774-20.436 84.452a61.445 61.445 0 01-32.008 8.996H88.998c-33.932 0-61.44-27.508-61.44-61.44a61.445 61.445 0 018.996-32.008l423.002-693.073c17.678-28.964 55.488-38.113 84.452-20.436a61.438 61.438 0 0120.436 20.436zM512 778.24c22.622 0 40.96-18.338 40.96-40.96s-18.338-40.96-40.96-40.96-40.96 18.338-40.96 40.96 18.338 40.96 40.96 40.96zm0-440.32c-22.622 0-40.96 18.338-40.96 40.96v225.28c0 22.622 18.338 40.96 40.96 40.96s40.96-18.338 40.96-40.96V378.88c0-22.622-18.338-40.96-40.96-40.96z"})})]}),iv=()=>(0,z.jsxs)("svg",{width:"10px",height:"10px",viewBox:"-5.5 0 26 26",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#2c313a",children:[(0,z.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,z.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,z.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,z.jsx)("title",{children:"chevron-right"})," ",(0,z.jsx)("desc",{children:"Created with Sketch Beta."})," ",(0,z.jsx)("defs",{children:" "})," ",(0,z.jsxs)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[" ",(0,z.jsxs)("g",{id:"Icon-Set-Filled",transform:"translate(-474.000000, -1196.000000)",fill:"#2c313a",children:[" ",(0,z.jsx)("path",{d:"M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36",id:"chevron-right",children:" "})," "]})," "]})," "]})]}),ov=()=>(0,z.jsxs)("svg",{width:"10px",height:"10px",viewBox:"0 -4.5 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#2c313a",children:[(0,z.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,z.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,z.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,z.jsx)("title",{children:"chevron-down"})," ",(0,z.jsx)("desc",{children:"Created with Sketch Beta."})," ",(0,z.jsx)("defs",{children:" "})," ",(0,z.jsxs)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[" ",(0,z.jsxs)("g",{id:"Icon-Set-Filled",transform:"translate(-574.000000, -1201.000000)",fill:"#2c313a",children:[" ",(0,z.jsx)("path",{d:"M597.405,1201.63 C596.576,1200.8 595.23,1200.8 594.401,1201.63 L586.016,1210.88 L577.63,1201.63 C576.801,1200.8 575.455,1200.8 574.626,1201.63 C573.797,1202.46 573.797,1203.81 574.626,1204.64 L584.381,1215.4 C584.83,1215.85 585.429,1216.05 586.016,1216.01 C586.603,1216.05 587.201,1215.85 587.65,1215.4 L597.405,1204.64 C598.234,1203.81 598.234,1202.46 597.405,1201.63",id:"chevron-down",children:" "})," "]})," "]})," "]})]}),lv=o=>{var l=o,{header:e,children:t,isOpen:n,setIsOpen:r}=l,i=lt(l,["header","children","isOpen","setIsOpen"]);let s=Wp(),u=Wp();return(0,Me.jsxs)(Me.Fragment,{children:[(0,Me.jsx)("button",Ee(W({className:"vuiAccordionHeader",onClick:()=>r(!n),id:s,"aria-controls":u,"aria-expanded":n},i),{children:(0,Me.jsxs)(wt,{alignItems:"center",justifyContent:"start",spacing:"xxs",children:[(0,Me.jsx)(Ue,{grow:!1,shrink:!1,children:n?(0,Me.jsx)(ov,{}):(0,Me.jsx)(iv,{})}),(0,Me.jsx)(Ue,{className:"vuiAccordionHeader__title",grow:1,children:e})]})})),n&&(0,Me.jsx)("div",{id:u,"aria-labelledby":s,children:t})]})},sv=e=>e?{rel:"noopener",referrerpolicy:"no-referrer-when-downgrade"}:{rel:"noopener"},uv={left:"vuiBaseButton--alignLeft",center:"vuiBaseButton--alignCenter",right:"vuiBaseButton--alignRight"},em=(0,Zp.forwardRef)((d,p)=>{var g=d,{children:e,icon:t,iconSide:n="left",align:r="center",className:i,size:o,fullWidth:l,onClick:s,tabIndex:u,isInert:c,isDisabled:v,href:h,target:y,track:a,htmlFor:m,isSubmit:f}=g,S=lt(g,["children","icon","iconSide","align","className","size","fullWidth","onClick","tabIndex","isInert","isDisabled","href","target","track","htmlFor","isSubmit"]);let w=(0,$u.default)("vuiBaseButton",i,`vuiBaseButton--${o}`,uv[r],{"vuiBaseButton-isInert":c,"vuiBaseButton-isDisabled":v,"vuiBaseButton--fullWidth":l,[`vuiBaseButton--${n}`]:!!t&&!!e}),E=t?(0,pn.jsx)("span",{className:"vuiBaseButtonIconContainer",children:t}):null;if(m)return(0,pn.jsxs)("label",Ee(W({htmlFor:m,className:w,tabIndex:u},S),{children:[E,e]}));if(h){let k=(0,$u.default)("vuiBaseButtonLinkWrapper",{"vuiBaseButtonLinkWrapper--fullWidth":l});return(0,pn.jsx)("a",Ee(W(W({className:k,href:h,onClick:s,target:y,tabIndex:u},S),sv(a)),{children:(0,pn.jsxs)("button",{className:w,tabIndex:-1,ref:p,children:[E,e]})}))}let _=W({onClick:s,tabIndex:u,type:f?"submit":"button"},S);return(0,pn.jsxs)("button",Ee(W({className:w},_),{ref:p,children:[E,e]}))}),av={xs:"xs",s:"xs",m:"s",l:"m"},cv={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},nm=(e,t,n,r=cv)=>e?(0,tm.cloneElement)(e,{size:t?av[t]:"s",color:e.props.color==="inherit"?r[n]:e.props.color}):null,fv={accent:"empty",primary:"empty",success:"empty",danger:"empty",warning:"empty",neutral:"neutral",subdued:"subdued"},dv=(0,Jp.forwardRef)((c,u)=>{var v=c,{children:e,icon:t,color:n,size:r="m",className:i,isSelected:o,isDisabled:l}=v,s=lt(v,["children","icon","color","size","className","isSelected","isDisabled"]);let h=(0,Yp.default)(i,"vuiButtonPrimary",`vuiButtonPrimary--${n}`,{"vuiButtonPrimary-isSelected":o}),y=nm(t,r,n,fv);return(0,rm.jsx)(em,Ee(W({ref:u,className:h,icon:y,size:r,isDisabled:l},s),{children:e}))}),pv={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},Ww=(0,im.forwardRef)((v,c)=>{var h=v,{children:e,icon:t,color:n,size:r="m",className:i,isSelected:o,isDisabled:l,solid:s}=h,u=lt(h,["children","icon","color","size","className","isSelected","isDisabled","solid"]);let y=(0,om.default)(i,"vuiButtonSecondary",`vuiButtonSecondary--${n}`,{"vuiButtonSecondary-isSelected":o,"vuiButtonSecondary--solid":s}),a=nm(t,r,n,pv);return(0,lm.jsx)(em,Ee(W({ref:c,className:y,icon:a,size:r,isDisabled:l},u),{children:e}))}),mv=u=>{var c=u,{className:e,size:t="m",value:n,onChange:r,placeholder:i,autoFocus:o,onSubmit:l}=c,s=lt(c,["className","size","value","onChange","placeholder","autoFocus","onSubmit"]);let v=(0,sm.default)("vuiSearchInput",`vuiSearchInput--${t}`,e);return(0,bo.jsx)("form",{onSubmit:l,children:(0,bo.jsx)("div",{className:v,children:(0,bo.jsx)("input",W({className:"vuiSearchInput__input",type:"text",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:o,placeholder:i,value:n,onChange:r},s))})})},xt=({size:e="m"})=>{let t=(0,um.default)("vuiSpacer",{[`vuiSpacer--${e}`]:e});return(0,am.jsx)("div",{className:t})},dm=s=>{var u=s,{children:e,className:t,id:n,truncate:r,size:i="s",align:o}=u,l=lt(u,["children","className","id","truncate","size","align"]);let c=(0,cm.default)("vuiText",`vuiText--${i}`,{[`vuiText--${o}`]:o,"vuiText--truncate":r},t);return(0,fm.jsx)("div",Ee(W({className:c,id:n},l),{children:e}))},hv=({query:e,setQuery:t,onSubmit:n,placeholder:r,buttonLabel:i,isButtonDisabled:o,size:l})=>(0,fn.jsxs)(wt,{alignItems:"center",spacing:"xs",children:[(0,fn.jsx)(Ue,{grow:1,children:(0,fn.jsx)(mv,{size:l,value:e,onChange:s=>{t(s.target.value)},onSubmit:s=>{s.preventDefault(),n()},placeholder:r,autoFocus:!0,"data-testid":"queryInput"})}),(0,fn.jsx)(Ue,{children:(0,fn.jsx)(dv,{color:"primary",size:l,onClick:()=>n(),isDisabled:o,children:i})})]}),gv=(e,t)=>{let n=[],r=t.match(/\[\d+\]/g)||[],i=new Set;for(let o=0;o<r.length;o++){let l=r[o],s=Number(l.slice(1,l.length-1))-1;i.has(s)||(n.push(e[s]),i.add(s))}return n},vv=e=>{let t=/\[(\d+(,*\s*\d*)*)\]/g,n=[],r,i=0;for(;(r=t.exec(e))!==null;){let l=r.index,s=r[1],u=e.slice(i,l).trim();n.push({text:u,references:s.replace(/\s/g,"").split(",")}),i=l+r[0].length}let o=e.slice(i).trim();return o.length>0&&n.push({text:o}),n},yv=e=>{let t=e.match(/\[\d+\]/g)||[],n=[...new Set(t)],r={};return n.forEach((i,o)=>{r[i]=`[${o+1}]`}),e.replace(/\[\d+\]/g,i=>r[i])},xv=({searchResults:e,isOpen:t=!1,setIsOpen:n=()=>{}})=>(0,le.jsxs)(lv,{header:`Based on ${e.length} ${e.length===1?"fact":"facts"}`,isOpen:t,setIsOpen:n,children:[(0,le.jsx)(xt,{size:"s"}),e.map((r,i)=>(0,le.jsxs)("div",{children:[(0,le.jsx)(wv,{result:r,position:i}),i<e.length-1&&(0,le.jsx)(xt,{size:"s"})]},i))]}),wv=({result:e,position:t})=>{var n;let r=(n=e==null?void 0:e.snippet)==null?void 0:n.text,i=e==null?void 0:e.url;return(0,le.jsx)(le.Fragment,{children:(0,le.jsxs)(wt,{alignItems:"start",spacing:"s",children:[(0,le.jsx)(Ue,{grow:!1,shrink:!1,children:(0,le.jsx)("div",{className:"vrcbChatSearchResultPosition",children:t+1})}),(0,le.jsx)(Ue,{grow:1,shrink:1,children:(0,le.jsx)(dm,{size:"s",children:(0,le.jsx)("p",{children:i?(0,le.jsx)("a",{href:i,target:"_blank",children:r}):r})})})]})})},Sv=e=>vv(e).reduce((t,{text:n,references:r})=>(r?(t.push(n),n&&n[n.length-1]!==" "&&t.push(" "),r.forEach((i,o)=>{o>0&&t.push(" "),t.push(`<SummaryCitation reference={${i}} />`)})):t.push(n),t),[]).join(" "),kv=({question:e,answer:t,searchResults:n,onRetry:r})=>{let[i,o]=(0,pm.useState)(!1),l;if(r)l=(0,B.jsxs)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--error",children:[(0,B.jsx)(xt,{size:"m"}),(0,B.jsxs)(wt,{alignItems:"center",spacing:"none",children:[(0,B.jsxs)(wt,{alignItems:"center",spacing:"xxs",children:[(0,B.jsx)(Ue,{grow:!1,shrink:!0,children:(0,B.jsx)(rv,{})}),(0,B.jsx)(Ue,{grow:!1,children:"Message not sent."})]}),r&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(xt,{size:"s"}),(0,B.jsx)(wt,{alignItems:"center",spacing:"none",children:(0,B.jsx)("button",{className:"vrcbRetryButton",onClick:()=>r(),children:"Try again"})})]})]})]});else if(t){let s=(n?gv(n,t):[]).slice(0,7),u=n?yv(t):t,c=Sv(u);l=(0,B.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--answer",children:(0,B.jsxs)("div",{className:"vrcbChatMessage",children:[(0,B.jsx)(dm,{size:"s",children:(0,B.jsx)(sp,{children:c,options:{forceBlock:!0,overrides:{SummaryCitation:{component:({reference:v})=>(0,B.jsxs)(B.Fragment,{children:[" ",(0,B.jsx)("button",{onClick:()=>o(!0),children:(0,B.jsx)("span",{className:"vrcbChatSummaryCitation",children:v})})]})}}}})}),s&&s.length>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(xt,{size:"s"}),(0,B.jsx)(xv,{searchResults:s,isOpen:i,setIsOpen:o})]})]})})}return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--question",children:(0,B.jsx)("div",{className:"vrcbChatMessage",children:e})}),(0,B.jsx)(xt,{size:"xs"}),l]})},$p=g=>Zn(void 0,[g],function*({filter:e,queryValue:t,language:n,summaryMode:r,rerank:i,rerankNumResults:o,rerankerId:l,rerankDiversityBias:s,hybridNumWords:u,hybridLambdaShort:c,hybridLambdaLong:v,summaryNumResults:h,summaryNumSentences:y,summaryPromptName:a,customerId:m,corpusId:f,endpoint:S,apiKey:p,chat:d}){let w=typeof t>"u"||t.trim().split(" ").length>u?v:c,E=f.split(",").map(U=>({customerId:m,corpusId:U,lexicalInterpolationConfig:{lambda:w},metadataFilter:e?`doc.source = '${e}'`:void 0})),_={query:[W(W({query:t,start:0,numResults:i?o:10,corpusKey:E,contextConfig:{sentencesBefore:r?y:2,sentencesAfter:r?y:2,startTag:Qu,endTag:bu}},r?{summary:[{responseLang:n,maxSummarizedResults:h,summarizerPromptName:a,chat:{store:!0,conversationId:d==null?void 0:d.conversationId}}]}:{}),i?{rerankingConfig:W({rerankerId:l},l===272725718?{mmrConfig:{diversityBias:s}}:{})}:{})]},k=`https://${S}/v1/query`,N={headers:{"Content-Type":"application/json",Accept:"application/json","customer-id":m,"x-api-key":p,"grpc-timeout":"60S"}},P=yield $o.post(k,_,N),R=P.data.responseSet[0].status;if(R.length>0&&R[0].code==="UNAUTHORIZED"&&console.log("UNAUTHORIZED access; check your API key and customer ID"),r){let U=P.data.responseSet[0].summary[0].status;if(U.length>0&&U[0].code==="BAD_REQUEST")throw new Error("BAD REQUEST: Too much text for the summarizer to summarize. Please try reducing the number of search results to summarize, or the context of each result by adjusting the 'summary_num_sentences', and 'summary_num_results' parameters respectively.");if(U.length>0&&U[0].code==="NOT_FOUND"&&U[0].statusDetail==="Failed to retrieve summarizer.")throw new Error(`BAD REQUEST: summarizer ${a} is invalid for this account.`)}return P.data.responseSet[0]}),Qu="%START_SNIPPET%",bu="%END_SNIPPET%",Cv=e=>{if(!e)return;let t=[],{response:n,document:r}=e;return n.forEach(i=>{let{documentIndex:o,text:l}=i,{pre:s,post:u,text:c}=Nv(l),v=r[Number(o)],{id:h,metadata:y}=v,{source:a,url:m,title:f,metadata:S}=Ev(y);t.push({id:h,snippet:{pre:s,text:c,post:u},source:a,url:m,title:f,metadata:S})}),t},Ev=e=>{let t=_v(e);return{source:t.source,url:t.url,title:t.title||"Untitled",metadata:t}},Nv=e=>{let[t,n]=e.indexOf(Qu)!==-1?e.split(Qu):["",e],[r,i]=n.indexOf(bu)!==-1?n.split(bu):[n,""];return{pre:t,post:i,text:r}},_v=e=>{let t={};return e.forEach(n=>{t[n.name]=n.value}),t},Tv=(e,t,n)=>{let[r,i]=(0,ot.useState)([]),o=(0,ot.useRef)(""),[l,s]=(0,ot.useState)(),[u,c]=(0,ot.useState)(!1),[v,h]=(0,ot.useState)(),[y,a]=(0,ot.useState)(!1),m=S=>S!=null?S:"eng",f=d=>Zn(void 0,[d],function*({query:S,isRetry:p=!1}){var g,w;if(u)return;o.current=S,p?a(!1):i(k=>[...k,{id:"placeholder-message-id",question:S,answer:"",results:[]}]);let E={filter:"",queryValue:S,rerank:!0,rerankNumResults:50,rerankerId:272725718,rerankDiversityBias:.3,hybridNumWords:2,hybridLambdaLong:0,hybridLambdaShort:.1,customerId:e,corpusId:t.join(","),endpoint:"api.vectara.io",apiKey:n},_;c(!0);try{_=yield $p(E)}catch(k){return a(!0),c(!1),[]}if(_.response.length>0)try{let k=yield $p(Ee(W({},E),{summaryMode:!0,summaryNumResults:7,summaryNumSentences:3,summaryPromptName:"vectara-summary-ext-v1.2.0",language:m(),chat:{conversationId:v}}));h(k.summary[0].chat.conversationId),s({id:k.summary[0].chat.turnId,question:o.current,answer:(g=k==null?void 0:k.summary[0].text)!=null?g:"",results:(w=Cv(k))!=null?w:[]}),c(!1)}catch(k){console.log("Summary error",k),c(!1);return}else c(!1)});return(0,ot.useEffect)(()=>{if(!l)return;let S=[...r.slice(0,-1),l];i(S)},[l]),{sendMessage:f,messageHistory:r,isLoading:u,hasError:y}},Rv=()=>(0,dn.jsx)(dn.Fragment,{children:(0,dn.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--thinking",children:(0,dn.jsx)("div",{className:"vrcbChatMessage",children:(0,dn.jsx)("div",{className:"vrcbLoader"})})})}),Pv={large:"l",medium:"m"},Iv=()=>(0,M.jsxs)(wt,{className:"vrcbEmptyMessages",spacing:"none",alignItems:"center",justifyContent:"center",direction:"column",children:[(0,M.jsx)(nv,{size:"150px",color:"#000000"}),"Ask anything."]}),zv=({customerId:e,corpusIds:t,apiKey:n,title:r="My Chatbot",placeholder:i="Chat with your AI Assistant",inputSize:o="large",emptyStateDisplay:l=(0,M.jsx)(Iv,{}),isInitiallyOpen:s,zIndex:u=9999})=>{let[c,v]=(0,He.useState)(s!=null?s:!1),[h,y]=(0,He.useState)(""),{sendMessage:a,messageHistory:m,isLoading:f,hasError:S}=Tv(e,t,n),p=(0,He.useRef)(null),d=(0,He.useRef)(!0),g=()=>{setTimeout(()=>{var N,P;d.current&&((P=p.current)==null||P.scrollTo({left:0,top:(N=p.current)==null?void 0:N.scrollHeight,behavior:"smooth"}))},0)};(0,He.useEffect)(()=>{s!==void 0&&v(s)},[s]),(0,He.useEffect)(()=>{let N=p.current,P=()=>{let R=p.current?Math.abs(p.current.scrollHeight-p.current.clientHeight-p.current.scrollTop)<50:!0;d.current=R};return N==null||N.addEventListener("scroll",P),()=>{N==null||N.removeEventListener("scroll",P)}},[]);let w=m.map((N,P)=>{let{question:R,answer:U,results:Yn}=N,gm=S&&P===m.length-1?()=>a({query:R,isRetry:!0}):void 0;return(0,M.jsx)(kv,{question:R,answer:U,searchResults:Yn,onRetry:gm},P)});f&&w.push((0,M.jsx)(Rv,{}));let E=f||m.length>0,_=f||h.trim().length===0,k=()=>{_||(a({query:h}),y(""))};return(0,He.useEffect)(g,[f,m]),c?(0,M.jsxs)("div",{className:"vrcbChatbotWrapper",style:{zIndex:u},children:[(0,M.jsxs)(wt,{className:"vrcbHeader",spacing:"none",direction:"row",children:[(0,M.jsx)(Ue,{grow:1,alignItems:"center",children:r}),(0,M.jsx)(Ue,{alignItems:"center",children:(0,M.jsx)("button",{onClick:()=>v(!1),children:(0,M.jsx)(tv,{size:"12px",color:"#2c313a"})})})]}),(0,M.jsxs)(wt,{direction:"column",spacing:"none",className:"vrcbChatbotInnerWrapper",children:[(0,M.jsx)(Ue,{className:"vrcbMessagesWrapper",basis:"fill",children:(0,M.jsx)("div",{ref:p,children:E?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(xt,{size:"xs"}),w.map((N,P)=>{var R;let U;return((R=m[P])==null?void 0:R.answer)===""?U=null:U=P<w.length-1?(0,M.jsx)(xt,{size:"m"}):(0,M.jsx)(xt,{size:"xl"}),(0,M.jsxs)(He.Fragment,{children:[N,U]},P)})]}):l})}),(0,M.jsx)(Ue,{grow:!1,shrink:!1,className:"vrcbChatInputContainer",children:(0,M.jsx)(hv,{placeholder:i,buttonLabel:"Send",query:h,setQuery:y,isButtonDisabled:_,onSubmit:k,size:Pv[o]})})]})]}):(0,M.jsx)("button",{className:"vrcbChatbotButton",onClick:()=>v(!0),style:{zIndex:u},children:r})},Qp=`:host {
  all: initial;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.vrcbChatbotButton {
  position: fixed;
  bottom: 12px;
  right: 12px;
  z-index: 9999;
  background-color: #264cd6;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.2s;
  line-height: 1;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  height: 34px;
}
.vrcbChatbotButton:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.vrcbChatMessageContainer {
  display: flex;
}

.vrcbChatMessage {
  padding: 12px 16px;
  border-radius: 16px;
}

.vrcbChatMessageContainer--question {
  justify-content: flex-start;
  padding: 0 40px 0 12px;
}
.vrcbChatMessageContainer--question .vrcbChatMessage {
  color: #2c313a;
  font-weight: 600;
  font-size: 14px;
  padding-left: 0;
}

.vrcbChatMessageContainer--thinking,
.vrcbChatMessageContainer--answer {
  padding: 0 40px;
  padding-right: 12px;
}
.vrcbChatMessageContainer--thinking .vrcbChatMessage,
.vrcbChatMessageContainer--answer .vrcbChatMessage {
  background-color: #f3f7fb;
}

.vrcbChatMessageContainer--error,
.vrcbChatMessageContainer--answer {
  justify-content: flex-start;
}

.vrcbChatMessageContainer--error {
  padding: 0 24px;
  font-size: 12px;
}

.vrcbChatMessageContainer--thinking {
  justify-content: flex-end;
}
.vrcbChatMessageContainer--thinking .vrcbChatMessage {
  padding-left: 24px;
  padding-right: 24px;
}

.vrcbChatMessageContainer--answer .vrcbChatMessage {
  color: #000;
}

.vrcbChatMessageContainer--error .vrcbChatMessage {
  color: #c41535;
}

.vrcbChatInputContainer {
  position: relative;
}
.vrcbChatInputContainer::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
  pointer-events: none;
}

.vrcbChatSummaryCitation,
.vrcbChatSearchResultPosition {
  background-color: rgba(0, 0, 0, 0.05);
  color: #000;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1.4;
}

.vrcbChatSummaryCitation {
  display: inline;
}

.vrcbChatbotWrapper {
  align-items: stretch;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  bottom: 12px;
  right: 12px;
  z-index: 9999;
  max-width: 600px;
  width: calc(100vw - 24px);
  max-height: 800px;
  height: calc(100vh - 24px);
}

.vrcbChatbotInnerWrapper {
  gap: 8px;
  flex-basis: 100%;
  min-height: 0;
  padding: 0 8px 8px;
}

.vrcbMessagesWrapper {
  flex-basis: 100%;
  min-height: 0;
}
.vrcbMessagesWrapper > div {
  height: 100%;
  overflow-y: auto;
}

.vrcbHeader {
  border-bottom: 1px solid #e3e4f3;
  color: #69707d;
  font-size: 12px;
  font-weight: 500;
  gap: 4px;
  padding: 8px;
}
.vrcbHeader > div {
  flex-direction: row;
}

.vrcbEmptyMessages {
  color: #000;
  font-weight: 600;
  height: 100%;
  opacity: 0.3;
}

.vrcbRetryButton {
  color: #264cd6;
  font-weight: 600;
  padding: 2px 4px;
}

@media (max-width: 700px) {
  .vrcbChatbotWrapper {
    right: 0;
    bottom: 0;
    width: 100vw;
    max-width: 100vw;
    border: none;
    border-top: 1px solid #cbcdde;
  }
}
@media (max-height: 840px) {
  .vrcbChatbotWrapper {
    right: 0;
    bottom: 0;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    border: none;
    border-left: 1px solid #cbcdde;
  }
}
.vrcbLoader,
.vrcbLoader:before,
.vrcbLoader:after {
  width: 8px;
  aspect-ratio: 0.5;
  display: grid;
  background: radial-gradient(#000 68%, rgba(0, 0, 0, 0) 72%) center/100% 50% no-repeat;
  animation: load 1.2s infinite linear calc(var(--_s, 0) * 0.4s);
  transform: translate(calc(var(--_s, 0) * 150%));
}

.vrcbLoader {
  opacity: 0.4;
}

.vrcbLoader:before,
.vrcbLoader:after {
  content: "";
  grid-area: 1/1;
  opacity: 1;
}

.vrcbLoader:before {
  --_s: -1;
}

.vrcbLoader:after {
  --_s: 1;
}

@keyframes load {
  20% {
    background-position: top;
  }
  40% {
    background-position: center;
  }
  60% {
    background-position: center;
  }
}
body,
textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: baseline;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

a[href],
button,
[role=button] {
  cursor: pointer;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}

input {
  margin: 0;
  padding: 0;
}

input:disabled {
  opacity: 1; /* required on iOS */
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

hr {
  margin: 0;
}

fieldset {
  min-inline-size: auto;
}

.vuiAccordionHeader {
  font-size: 14px;
  border-bottom: 1px solid #cbcdde;
  width: 100%;
  padding: 8px 0;
}
.vuiAccordionHeader:hover {
  text-decoration: underline;
  background-color: #f3f7fb;
}

.vuiAccordionHeader__title {
  text-align: left;
}

.vuiBaseButtonIconContainer {
  line-height: 0;
}

.vuiBaseButtonLinkWrapper {
  text-decoration: none;
}
.vuiBaseButtonLinkWrapper:hover {
  text-decoration: none;
}

.vuiBaseButtonLinkWrapper--fullWidth {
  width: 100%;
}

.vuiBaseButton {
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  line-height: 1;
  cursor: pointer;
}

.vuiBaseButton--alignLeft {
  justify-content: flex-start;
}

.vuiBaseButton--alignCenter {
  justify-content: center;
}

.vuiBaseButton--alignRight {
  justify-content: flex-end;
}

.vuiBaseButton-isInert,
.vuiBaseButton-isDisabled {
  cursor: default;
  pointer-events: none;
}

.vuiBaseButton-isDisabled {
  opacity: 0.5;
}

.vuiBaseButton--left .vuiBaseButtonIconContainer {
  margin-right: 8px;
}

.vuiBaseButton--right {
  flex-direction: row-reverse;
}
.vuiBaseButton--right .vuiBaseButtonIconContainer {
  margin-left: 8px;
  margin-right: 0;
}

.vuiBaseButton--fullWidth {
  width: 100%;
}

.vuiBaseButton--xs {
  font-size: 14px;
  padding: 4px 8px;
  height: 24px;
}

.vuiBaseButton--s {
  font-size: 14px;
  padding: 6px 8px;
  height: 28px;
}

.vuiBaseButton--m {
  font-size: 16px;
  padding: 8px 16px;
  height: 34px;
}

.vuiBaseButton--l {
  font-size: 16px;
  padding: 12px 24px;
  height: 47px;
}

.vuiButtonPrimary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonPrimary--accent {
  color: #ffffff;
  background-color: #551edf;
  border: 1px solid #551edf;
}
.vuiButtonPrimary--accent.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--primary {
  color: #ffffff;
  background-color: #264cd6;
  border: 1px solid #264cd6;
}
.vuiButtonPrimary--primary.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--success {
  color: #ffffff;
  background-color: #04821f;
  border: 1px solid #04821f;
}
.vuiButtonPrimary--success.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--danger {
  color: #ffffff;
  background-color: #c41535;
  border: 1px solid #c41535;
}
.vuiButtonPrimary--danger.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--warning {
  color: #ffffff;
  background-color: #965a15;
  border: 1px solid #965a15;
}
.vuiButtonPrimary--warning.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--neutral {
  color: #2c313a;
  background-color: rgba(44, 49, 58, 0.1);
  border: 1px solid rgba(44, 49, 58, 0.1);
}
.vuiButtonPrimary--neutral.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonPrimary--subdued {
  color: #69707d;
  background-color: rgba(105, 112, 125, 0.1);
  border: 1px solid rgba(105, 112, 125, 0.1);
}
.vuiButtonPrimary--subdued.vuiButtonPrimary-isSelected {
  box-shadow: inset rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, inset rgba(0, 0, 0, 0.3) 0px 3px 4px -3px;
}

.vuiButtonSecondary:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiButtonSecondary--solid {
  background-color: #ffffff;
}

.vuiButtonSecondary--accent {
  border: 1px solid rgba(85, 30, 223, 0.5);
  color: #551edf;
}
.vuiButtonSecondary--accent.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--primary {
  border: 1px solid rgba(38, 76, 214, 0.5);
  color: #264cd6;
}
.vuiButtonSecondary--primary.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--success {
  border: 1px solid rgba(4, 130, 31, 0.5);
  color: #04821f;
}
.vuiButtonSecondary--success.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--danger {
  border: 1px solid rgba(196, 21, 53, 0.5);
  color: #c41535;
}
.vuiButtonSecondary--danger.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--warning {
  border: 1px solid rgba(150, 90, 21, 0.5);
  color: #965a15;
}
.vuiButtonSecondary--warning.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--neutral {
  border: 1px solid #cbcdde;
  color: #2c313a;
}
.vuiButtonSecondary--neutral.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiButtonSecondary--subdued {
  border: 1px solid #e3e4f3;
  color: #69707d;
}
.vuiButtonSecondary--subdued.vuiButtonSecondary-isSelected {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0px 2px 2px;
}

.vuiFlexContainer {
  display: flex;
  align-items: stretch;
}

.vuiFlexContainer--fullWidth {
  width: 100%;
}

.vuiFlexContainer--wrap {
  flex-wrap: wrap;
}

.vuiFlexContainer--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexContainer--alignItemsCenter {
  align-items: center;
}

.vuiFlexContainer--alignItemsEnd {
  align-items: end;
}

.vuiFlexContainer--alignItemsStart {
  align-items: start;
}

.vuiFlexContainer--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexContainer--directionColumn {
  flex-direction: column;
}

.vuiFlexContainer--directionColumnReverse {
  flex-direction: column-reverse;
}

.vuiFlexContainer--directionRow {
  flex-direction: row;
}

.vuiFlexContainer--directionRowReverse {
  flex-direction: row-reverse;
}

.vuiFlexContainer--justifyContentCenter {
  justify-content: center;
}

.vuiFlexContainer--justifyContentEnd {
  justify-content: end;
}

.vuiFlexContainer--justifyContentStart {
  justify-content: start;
}

.vuiFlexContainer--justifyContentSpaceAround {
  justify-content: space-around;
}

.vuiFlexContainer--justifyContentSpaceBetween {
  justify-content: space-between;
}

.vuiFlexContainer--justifyContentSpaceEvenly {
  justify-content: space-evenly;
}

.vuiFlexContainer--spacingNone {
  gap: 0;
}

.vuiFlexContainer--spacingXxs {
  gap: 4px;
}

.vuiFlexContainer--spacingXs {
  gap: 8px;
}

.vuiFlexContainer--spacingS {
  gap: 12px;
}

.vuiFlexContainer--spacingM {
  gap: 16px;
}

.vuiFlexContainer--spacingL {
  gap: 24px;
}

.vuiFlexContainer--spacingXl {
  gap: 32px;
}

.vuiFlexContainer--spacingXxl {
  gap: 40px;
}

.vuiFlexItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vuiFlexItem--truncate {
  min-width: 40px;
}

.vuiFlexItem--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexItem--alignItemsCenter {
  align-items: center;
}

.vuiFlexItem--alignItemsEnd {
  align-items: end;
}

.vuiFlexItem--alignItemsStart {
  align-items: start;
}

.vuiFlexItem--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexItem--flexGrow0 {
  flex-grow: 0;
}

.vuiFlexItem--flexGrow1 {
  flex-grow: 1;
}

.vuiFlexItem--flexGrow2 {
  flex-grow: 2;
}

.vuiFlexItem--flexGrow3 {
  flex-grow: 3;
}

.vuiFlexItem--flexGrow4 {
  flex-grow: 4;
}

.vuiFlexItem--flexGrow5 {
  flex-grow: 5;
}

.vuiFlexItem--flexGrow6 {
  flex-grow: 6;
}

.vuiFlexItem--flexGrow7 {
  flex-grow: 7;
}

.vuiFlexItem--flexGrow8 {
  flex-grow: 8;
}

.vuiFlexItem--flexGrow9 {
  flex-grow: 9;
}

.vuiFlexItem--flexGrow10 {
  flex-grow: 10;
}

.vuiFlexItem--flexGrowNone {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiFlexItem--flexShrink0 {
  flex-shrink: 0;
}

.vuiFlexItem--flexShrink1 {
  flex-shrink: 1;
}

.vuiFlexItem--flexShrink2 {
  flex-shrink: 2;
}

.vuiFlexItem--flexShrink3 {
  flex-shrink: 3;
}

.vuiFlexItem--flexShrink4 {
  flex-shrink: 4;
}

.vuiFlexItem--flexShrink5 {
  flex-shrink: 5;
}

.vuiFlexItem--flexShrink6 {
  flex-shrink: 6;
}

.vuiFlexItem--flexShrink7 {
  flex-shrink: 7;
}

.vuiFlexItem--flexShrink8 {
  flex-shrink: 8;
}

.vuiFlexItem--flexShrink9 {
  flex-shrink: 9;
}

.vuiFlexItem--flexShrink10 {
  flex-shrink: 10;
}

.vuiFlexItem--flexShrinkNone {
  flex-basis: auto;
  flex-shrink: 0;
}

.vuiFlexItem--auto {
  flex-basis: auto;
}

.vuiFlexItem--content {
  flex-basis: content;
}

.vuiFlexItem--fill {
  flex-basis: fill;
}

.vuiFlexItem--maxContent {
  flex-basis: max-content;
}

.vuiFlexItem--minContent {
  flex-basis: min-content;
}

.vuiFlexItem--none {
  flex-basis: 0;
}

.vuiSearchInput {
  position: relative;
  display: flex;
  align-items: center;
}

.vuiSearchInput__input {
  flex-grow: 1;
  background-color: #ffffff;
  border: 1px solid #cbcdde;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  transition: all 0.2s;
  outline-width: 1px !important;
  outline-style: solid;
  outline-color: transparent;
  outline-offset: -1px !important;
}
.vuiSearchInput__input:focus-visible {
  outline-color: #264cd6 !important;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.vuiSearchInput__submitButton {
  position: absolute;
  right: 12px;
  line-height: 0;
  color: #69707d;
  transition: all 0.2s;
}
.vuiSearchInput__submitButton:hover {
  color: #551edf;
}

.vuiSearchInput--m .vuiSearchInput__input {
  padding: 8px 16px;
  font-size: 14px;
}

.vuiSearchInput--l .vuiSearchInput__input {
  padding: 12px 16px;
  font-size: 18px;
}

.vuiSpacer {
  flex-shrink: 0;
}

.vuiSpacer--xxxs {
  height: 2px;
}

.vuiSpacer--xxs {
  height: 4px;
}

.vuiSpacer--xs {
  height: 8px;
}

.vuiSpacer--s {
  height: 12px;
}

.vuiSpacer--m {
  height: 16px;
}

.vuiSpacer--l {
  height: 24px;
}

.vuiSpacer--xl {
  height: 32px;
}

.vuiSpacer--xxl {
  height: 40px;
}

.vuiTitle {
  color: #2c313a;
  margin-bottom: 0;
}

.vuiTitle--xxs {
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xs {
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--s {
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: #69707d;
}

.vuiTitle--m {
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--l {
  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xxl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--left {
  text-align: left;
}

.vuiTitle--center {
  text-align: center;
}

.vuiTitle--right {
  text-align: right;
}

.vuiText {
  overflow-wrap: break-word;
  word-break: break-word;
}
.vuiText ul {
  list-style: disc;
}
.vuiText ol {
  list-style: auto;
}
.vuiText ul,
.vuiText ol {
  margin-left: 16px;
  margin-bottom: 8px;
}
.vuiText ul:last-child,
.vuiText ol:last-child {
  margin-bottom: 0;
}
.vuiText a {
  color: #264cd6;
}

.vuiText--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiText--truncate * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vuiText--xs {
  color: #2c313a;
  font-size: 12px;
  line-height: 1.4;
}
.vuiText--xs p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--xs p:last-child {
  margin-bottom: 0;
}

.vuiText--s {
  color: #2c313a;
  font-size: 14px;
  line-height: 1.4;
}
.vuiText--s p {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--s p:last-child {
  margin-bottom: 0;
}

.vuiText--m {
  color: #2c313a;
  font-size: 16px;
  line-height: 1.4;
}
.vuiText--m p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--m p:last-child {
  margin-bottom: 0;
}

.vuiText--l {
  color: #2c313a;
  font-size: 18px;
  line-height: 1.4;
}
.vuiText--l p {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--l p:last-child {
  margin-bottom: 0;
}

.vuiText--left {
  text-align: left;
}

.vuiText--center {
  text-align: center;
}

.vuiText--right {
  text-align: right;
}

.vuiTextColor--accent {
  color: #551edf !important;
}

.vuiTextColor--primary {
  color: #264cd6 !important;
}

.vuiTextColor--success {
  color: #04821f !important;
}

.vuiTextColor--warning {
  color: #965a15 !important;
}

.vuiTextColor--danger {
  color: #c41535 !important;
}

.vuiTextColor--subdued {
  color: #69707d !important;
}

.vuiTextColor--neutral {
  color: #2c313a !important;
}`,Fv=({customerId:e,apiKey:t,corpusIds:n,title:r,placeholder:i,inputSize:o,emptyStateDisplay:l,isInitiallyOpen:s,zIndex:u})=>(0,Kt.jsx)("div",{children:(0,Kt.jsx)(zv,{customerId:e,corpusIds:n,apiKey:t,title:r,placeholder:i,inputSize:o,emptyStateDisplay:l,isInitiallyOpen:s,zIndex:u})}),Ov=class extends HTMLElement{static get observedAttributes(){return["customerid","corpusids","apikey","title","placeholder","inputsize","isinitiallyopen","zindex","emptystatedisplayupdatetime"]}constructor(){super(),this.sr=this.attachShadow({mode:"open"});try{this.sheet=new CSSStyleSheet,this.sheet.replaceSync(Qp),this.sr.adoptedStyleSheets=[this.sheet]}catch(e){let t=document.createElement("style");t.innerText=Qp,this.sr.appendChild(t)}this.mountPoint=document.createElement("div"),this.sr.appendChild(this.mountPoint)}setEmptyStateDisplay(e){this.emptyStateDisplay=e,this.setAttribute("emptystatedisplayupdatetime",Date.now().toString())}connectedCallback(){var e,t,n,r,i,o,l;let s=(e=this.getAttribute("customerId"))!=null?e:"",u=((t=this.getAttribute("corpusIds"))!=null?t:"").split(" "),c=(n=this.getAttribute("apiKey"))!=null?n:"",v=(r=this.getAttribute("title"))!=null?r:void 0,h=(i=this.getAttribute("placeholder"))!=null?i:void 0,y=(o=this.getAttribute("inputSize"))!=null?o:void 0,a=this.getAttribute("isInitiallyOpen")==="true",m=(l=this.emptyStateDisplay)!=null?l:void 0,f=this.getAttribute("zIndex")!==null?parseInt(this.getAttribute("zIndex")):void 0;bp.render((0,Kt.jsx)(Kt.Fragment,{children:(0,Kt.jsx)(Fv,{customerId:s,corpusIds:u,apiKey:c,title:v,placeholder:h,inputSize:y,emptyStateDisplay:m,isInitiallyOpen:a,zIndex:f})}),this.mountPoint)}attributeChangedCallback(){this.connectedCallback()}};window.customElements.get("react-chatbot")||window.customElements.define("react-chatbot",Ov);var mm=e=>{let t=(0,Ko.useRef)(null);(0,Ko.useEffect)(()=>{t.current&&e.emptyStateDisplay&&t.current.setEmptyStateDisplay(e.emptyStateDisplay)},[e]);let n=e,r=Object.keys(e).reduce((i,o)=>(o==="emptyStateDisplay"||(o==="corpusIds"?i[o]=n.corpusIds.join(" "):i[o]=n[o]),i),{});return(0,Kt.jsx)("react-chatbot",W({ref:t},r))};var ni=I(J()),Lv=e=>{let t=hm.default.createRoot(document.getElementsByTagName("body")[0]),n=e.emptyStateDisplay?(0,ni.jsx)(Bv,{element:e.emptyStateDisplay}):void 0,r=Ee(W({},e),{emptyStateDisplay:n});t.render((0,ni.jsx)(Jn.default.StrictMode,{children:(0,ni.jsx)(mm,W({},r))}))},Bv=({element:e})=>{let t=(0,Jn.useRef)(null);return(0,Jn.useEffect)(()=>{t!=null&&t.current&&t.current.appendChild(e)},[]),(0,ni.jsx)("div",{ref:t})};window.vectara={renderChatbot:Lv};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
