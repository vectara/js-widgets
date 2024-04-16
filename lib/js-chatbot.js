var qf=Object.create;var pi=Object.defineProperty,Zf=Object.defineProperties,Jf=Object.getOwnPropertyDescriptor,bf=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertyNames,Or=Object.getOwnPropertySymbols,tp=Object.getPrototypeOf,mi=Object.prototype.hasOwnProperty,bu=Object.prototype.propertyIsEnumerable;var fi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e);var Ju=(e,t,n)=>t in e?pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))mi.call(t,n)&&Ju(e,n,t[n]);if(Or)for(var n of Or(t))bu.call(t,n)&&Ju(e,n,t[n]);return e},ce=(e,t)=>Zf(e,bf(t));var lt=(e,t)=>{var n={};for(var r in e)mi.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Or)for(var r of Or(e))t.indexOf(r)<0&&bu.call(e,r)&&(n[r]=e[r]);return n};var Ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var np=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of ep(t))!mi.call(e,l)&&l!==n&&pi(e,l,{get:()=>t[l],enumerable:!(r=Jf(t,l))||r.enumerable});return e};var P=(e,t,n)=>(n=e!=null?qf(tp(e)):{},np(t||!e||!e.__esModule?pi(n,"default",{value:e,enumerable:!0}):n,e));var un=(e,t,n)=>new Promise((r,l)=>{var i=s=>{try{u(n.next(s))}catch(d){l(d)}},o=s=>{try{u(n.throw(s))}catch(d){l(d)}},u=s=>s.done?r(s.value):Promise.resolve(s.value).then(i,o);u((n=n.apply(e,t)).next())}),hi=function(e,t){this[0]=e,this[1]=t},es=(e,t,n)=>{var r=(o,u,s,d)=>{try{var v=n[o](u),g=(u=v.value)instanceof hi,y=v.done;Promise.resolve(g?u[0]:u).then(a=>g?r(o==="return"?o:"next",u[1]?{done:a.done,value:a.value}:a,s,d):s({value:a,done:y})).catch(a=>r("throw",a,s,d))}catch(a){d(a)}},l=o=>i[o]=u=>new Promise((s,d)=>r(o,u,s,d)),i={};return n=n.apply(e,t),i[fi("asyncIterator")]=()=>i,l("next"),l("throw"),l("return"),i};var ts=(e,t,n)=>(t=e[fi("asyncIterator")])?t.call(e):(e=e[fi("iterator")](),t={},n=(r,l)=>(l=e[r])&&(t[r]=i=>new Promise((o,u,s)=>(i=l.call(e,i),s=i.done,Promise.resolve(i.value).then(d=>o({value:d,done:s}),u)))),n("next"),n("return"),t);var fs=Ue(F=>{"use strict";var $n=Symbol.for("react.element"),rp=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),sp=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),dp=Symbol.for("react.memo"),fp=Symbol.for("react.lazy"),ns=Symbol.iterator;function pp(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},os=Object.assign,us={};function sn(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ss(){}ss.prototype=sn.prototype;function gi(e,t,n){this.props=e,this.context=t,this.refs=us,this.updater=n||is}var yi=gi.prototype=new ss;yi.constructor=gi;os(yi,sn.prototype);yi.isPureReactComponent=!0;var rs=Array.isArray,as=Object.prototype.hasOwnProperty,xi={current:null},cs={key:!0,ref:!0,__self:!0,__source:!0};function ds(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)as.call(t,r)&&!cs.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),d=0;d<u;d++)s[d]=arguments[d+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:$n,type:e,key:i,ref:o,props:l,_owner:xi.current}}function mp(e,t){return{$$typeof:$n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===$n}function hp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ls=/\/+/g;function vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hp(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $n:case rp:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+vi(o,0):r,rs(l)?(n="",e!=null&&(n=e.replace(ls,"$&/")+"/"),Dr(l,t,n,"",function(d){return d})):l!=null&&(wi(l)&&(l=mp(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ls,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",rs(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+vi(i,u);o+=Dr(i,t,n,s,l)}else if(s=pp(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+vi(i,u++),o+=Dr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function jr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function vp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ar={transition:null},gp={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:xi};F.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=sn;F.Fragment=lp;F.Profiler=op;F.PureComponent=gi;F.StrictMode=ip;F.Suspense=cp;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=os({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=xi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)as.call(t,s)&&!cs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var d=0;d<s;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:$n,type:e.type,key:l,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:up,_context:e},e.Consumer=e};F.createElement=ds;F.createFactory=function(e){var t=ds.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:ap,render:e}};F.isValidElement=wi;F.lazy=function(e){return{$$typeof:fp,_payload:{_status:-1,_result:e},_init:vp}};F.memo=function(e,t){return{$$typeof:dp,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return de.current.useCallback(e,t)};F.useContext=function(e){return de.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return de.current.useDeferredValue(e)};F.useEffect=function(e,t){return de.current.useEffect(e,t)};F.useId=function(){return de.current.useId()};F.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return de.current.useMemo(e,t)};F.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};F.useRef=function(e){return de.current.useRef(e)};F.useState=function(e){return de.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return de.current.useTransition()};F.version="18.2.0"});var he=Ue((jv,ps)=>{"use strict";ps.exports=fs()});var Cs=Ue(D=>{"use strict";function Ei(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,l=e[r];if(0<Ur(l,t))e[r]=t,e[n]=l,n=r;else break e}}function $e(e){return e.length===0?null:e[0]}function Vr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length,i=l>>>1;r<i;){var o=2*(r+1)-1,u=e[o],s=o+1,d=e[s];if(0>Ur(u,n))s<l&&0>Ur(d,u)?(e[r]=d,e[s]=n,r=s):(e[r]=u,e[o]=n,r=o);else if(s<l&&0>Ur(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function Ur(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(ms=performance,D.unstable_now=function(){return ms.now()}):(Si=Date,hs=Si.now(),D.unstable_now=function(){return Si.now()-hs});var ms,Si,hs,Ze=[],vt=[],yp=1,Le=null,le=3,Hr=!1,$t=!1,Hn=!1,ys=typeof setTimeout=="function"?setTimeout:null,xs=typeof clearTimeout=="function"?clearTimeout:null,vs=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _i(e){for(var t=$e(vt);t!==null;){if(t.callback===null)Vr(vt);else if(t.startTime<=e)Vr(vt),t.sortIndex=t.expirationTime,Ei(Ze,t);else break;t=$e(vt)}}function Ni(e){if(Hn=!1,_i(e),!$t)if($e(Ze)!==null)$t=!0,zi(Ii);else{var t=$e(vt);t!==null&&Pi(Ni,t.startTime-e)}}function Ii(e,t){$t=!1,Hn&&(Hn=!1,xs(Wn),Wn=-1),Hr=!0;var n=le;try{for(_i(t),Le=$e(Ze);Le!==null&&(!(Le.expirationTime>t)||e&&!ks());){var r=Le.callback;if(typeof r=="function"){Le.callback=null,le=Le.priorityLevel;var l=r(Le.expirationTime<=t);t=D.unstable_now(),typeof l=="function"?Le.callback=l:Le===$e(Ze)&&Vr(Ze),_i(t)}else Vr(Ze);Le=$e(Ze)}if(Le!==null)var i=!0;else{var o=$e(vt);o!==null&&Pi(Ni,o.startTime-t),i=!1}return i}finally{Le=null,le=n,Hr=!1}}var Wr=!1,$r=null,Wn=-1,ws=5,Ss=-1;function ks(){return!(D.unstable_now()-Ss<ws)}function ki(){if($r!==null){var e=D.unstable_now();Ss=e;var t=!0;try{t=$r(!0,e)}finally{t?Vn():(Wr=!1,$r=null)}}else Wr=!1}var Vn;typeof vs=="function"?Vn=function(){vs(ki)}:typeof MessageChannel!="undefined"?(Ci=new MessageChannel,gs=Ci.port2,Ci.port1.onmessage=ki,Vn=function(){gs.postMessage(null)}):Vn=function(){ys(ki,0)};var Ci,gs;function zi(e){$r=e,Wr||(Wr=!0,Vn())}function Pi(e,t){Wn=ys(function(){e(D.unstable_now())},t)}D.unstable_IdlePriority=5;D.unstable_ImmediatePriority=1;D.unstable_LowPriority=4;D.unstable_NormalPriority=3;D.unstable_Profiling=null;D.unstable_UserBlockingPriority=2;D.unstable_cancelCallback=function(e){e.callback=null};D.unstable_continueExecution=function(){$t||Hr||($t=!0,zi(Ii))};D.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ws=0<e?Math.floor(1e3/e):5};D.unstable_getCurrentPriorityLevel=function(){return le};D.unstable_getFirstCallbackNode=function(){return $e(Ze)};D.unstable_next=function(e){switch(le){case 1:case 2:case 3:var t=3;break;default:t=le}var n=le;le=t;try{return e()}finally{le=n}};D.unstable_pauseExecution=function(){};D.unstable_requestPaint=function(){};D.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=le;le=e;try{return t()}finally{le=n}};D.unstable_scheduleCallback=function(e,t,n){var r=D.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=n+l,e={id:yp++,callback:t,priorityLevel:e,startTime:n,expirationTime:l,sortIndex:-1},n>r?(e.sortIndex=n,Ei(vt,e),$e(Ze)===null&&e===$e(vt)&&(Hn?(xs(Wn),Wn=-1):Hn=!0,Pi(Ni,n-r))):(e.sortIndex=l,Ei(Ze,e),$t||Hr||($t=!0,zi(Ii))),e};D.unstable_shouldYield=ks;D.unstable_wrapCallback=function(e){var t=le;return function(){var n=le;le=t;try{return e.apply(this,arguments)}finally{le=n}}}});var _s=Ue((Av,Es)=>{"use strict";Es.exports=Cs()});var Ld=Ue(ze=>{"use strict";var Fa=he(),Ne=_s();function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ra=new Set,fr={};function en(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(fr[e]=t,e=0;e<t.length;e++)Ra.add(t[e])}var ct=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Ji=Object.prototype.hasOwnProperty,xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ns={},Is={};function wp(e){return Ji.call(Is,e)?!0:Ji.call(Ns,e)?!1:xp.test(e)?Is[e]=!0:(Ns[e]=!0,!1)}function Sp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kp(e,t,n,r){if(t===null||typeof t=="undefined"||Sp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qo,Go);ne[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qo,Go);ne[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qo,Go);ne[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kp(t,n,l,r)&&(n=null),r||l===null?wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),dn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ma=Symbol.for("react.context"),Yo=Symbol.for("react.forward_ref"),eo=Symbol.for("react.suspense"),to=Symbol.for("react.suspense_list"),qo=Symbol.for("react.memo"),yt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Oa=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var zs=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ti;function bn(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Li=!1;function Fi(e,t){if(!e||Li)return"";Li=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Li=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Cp(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function no(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case dn:return"Portal";case bi:return"Profiler";case Xo:return"StrictMode";case eo:return"Suspense";case to:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ma:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Yo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qo:return t=e.displayName||null,t!==null?t:no(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return no(e(t))}catch(n){}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return no(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ja(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e){var t=ja(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=_p(e))}function Da(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ja(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ro(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Aa(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function lo(e,t){Aa(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,n):t.hasOwnProperty("defaultValue")&&io(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ts(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function io(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(er(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Ua(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $a(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$a(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Va=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function Ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Wa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ip=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(Ip[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fo=null,En=null,_n=null;function Rs(e){if(e=Lr(e)){if(typeof fo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Xl(t),fo(e.stateNode,e.type,t))}}function Qa(e){En?_n?_n.push(e):_n=[e]:En=e}function Ga(){if(En){var e=En,t=_n;if(_n=En=null,Rs(e),t)for(e=0;e<t.length;e++)Rs(t[e])}}function Ka(e,t){return e(t)}function Xa(){}var Ri=!1;function Ya(e,t,n){if(Ri)return e(t,n);Ri=!0;try{return Ka(e,t,n)}finally{Ri=!1,(En!==null||_n!==null)&&(Xa(),Ga())}}function mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var po=!1;if(ct)try{an={},Object.defineProperty(an,"passive",{get:function(){po=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch(e){po=!1}var an;function zp(e,t,n,r,l,i,o,u,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var lr=!1,Sl=null,kl=!1,mo=null,Pp={onError:function(e){lr=!0,Sl=e}};function Tp(e,t,n,r,l,i,o,u,s){lr=!1,Sl=null,zp.apply(Pp,arguments)}function Lp(e,t,n,r,l,i,o,u,s){if(Tp.apply(this,arguments),lr){if(lr){var d=Sl;lr=!1,Sl=null}else throw Error(S(198));kl||(kl=!0,mo=d)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bs(e){if(tn(e)!==e)throw Error(S(188))}function Fp(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Bs(l),e;if(i===r)return Bs(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Za(e){return e=Fp(e),e!==null?Ja(e):null}function Ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ja(e);if(t!==null)return t;e=e.sibling}return null}var ba=Ne.unstable_scheduleCallback,Ms=Ne.unstable_cancelCallback,Rp=Ne.unstable_shouldYield,Bp=Ne.unstable_requestPaint,K=Ne.unstable_now,Mp=Ne.unstable_getCurrentPriorityLevel,Jo=Ne.unstable_ImmediatePriority,ec=Ne.unstable_UserBlockingPriority,Cl=Ne.unstable_NormalPriority,Op=Ne.unstable_LowPriority,tc=Ne.unstable_IdlePriority,Wl=null,tt=null;function jp(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch(t){}}var Ge=Math.clz32?Math.clz32:Up,Dp=Math.log,Ap=Math.LN2;function Up(e){return e>>>=0,e===0?32:31-(Dp(e)/Ap|0)|0}var Xr=64,Yr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=tr(u):(i&=o,i!==0&&(r=tr(i)))}else o=n&~l,o!==0?r=tr(o):i!==0&&(r=tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),l=1<<n,r|=e[n],t&=~l;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ge(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=$p(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Hp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ge(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function bo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lc,eu,ic,oc,uc,vo=!1,qr=[],Et=null,_t=null,Nt=null,hr=new Map,vr=new Map,wt=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Gn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Lr(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qp(e,t,n,r,l){switch(t){case"focusin":return Et=Gn(Et,e,t,n,r,l),!0;case"dragenter":return _t=Gn(_t,e,t,n,r,l),!0;case"mouseover":return Nt=Gn(Nt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return hr.set(i,Gn(hr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,vr.set(i,Gn(vr.get(i)||null,e,t,n,r,l)),!0}return!1}function sc(e){var t=Wt(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=qa(n),t!==null){e.blockedOn=t,uc(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);co=r,n.target.dispatchEvent(r),co=null}else return t=Lr(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function js(e,t,n){cl(e)&&n.delete(t)}function Gp(){vo=!1,Et!==null&&cl(Et)&&(Et=null),_t!==null&&cl(_t)&&(_t=null),Nt!==null&&cl(Nt)&&(Nt=null),hr.forEach(js),vr.forEach(js)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Gp)))}function gr(e){function t(l){return Kn(l,e)}if(0<qr.length){Kn(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Kn(Et,e),_t!==null&&Kn(_t,e),Nt!==null&&Kn(Nt,e),hr.forEach(t),vr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)sc(n),n.blockedOn===null&&wt.shift()}var Nn=mt.ReactCurrentBatchConfig,_l=!0;function Kp(e,t,n,r){var l=O,i=Nn.transition;Nn.transition=null;try{O=1,tu(e,t,n,r)}finally{O=l,Nn.transition=i}}function Xp(e,t,n,r){var l=O,i=Nn.transition;Nn.transition=null;try{O=4,tu(e,t,n,r)}finally{O=l,Nn.transition=i}}function tu(e,t,n,r){if(_l){var l=go(e,t,n,r);if(l===null)$i(e,t,r,Nl,n),Os(e,r);else if(Qp(l,e,t,n,r))r.stopPropagation();else if(Os(e,r),t&4&&-1<Wp.indexOf(e)){for(;l!==null;){var i=Lr(l);if(i!==null&&lc(i),i=go(e,t,n,r),i===null&&$i(e,t,r,Nl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else $i(e,t,r,null,n)}}var Nl=null;function go(e,t,n,r){if(Nl=null,e=Zo(r),e=Wt(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Nl=e,null}function ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case Jo:return 1;case ec:return 4;case Cl:case Op:return 16;case tc:return 536870912;default:return 16}default:return 16}}var kt=null,nu=null,dl=null;function cc(){if(dl)return dl;var e,t=nu,n=t.length,r,l="value"in kt?kt.value:kt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return dl=l.slice(e,1<r?1-r:void 0)}function fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Ds(){return!1}function Ie(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Ds,this.isPropagationStopped=Ds,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Ie(On),Tr=Q({},On,{view:0,detail:0}),Yp=Ie(Tr),Mi,Oi,Xn,Ql=Q({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Mi=e.screenX-Xn.screenX,Oi=e.screenY-Xn.screenY):Oi=Mi=0,Xn=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Oi}}),As=Ie(Ql),qp=Q({},Ql,{dataTransfer:0}),Zp=Ie(qp),Jp=Q({},Tr,{relatedTarget:0}),ji=Ie(Jp),bp=Q({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Ie(bp),tm=Q({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ie(tm),rm=Q({},On,{data:0}),Us=Ie(rm),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function lu(){return um}var sm=Q({},Tr,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=Ie(sm),cm=Q({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$s=Ie(cm),dm=Q({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),fm=Ie(dm),pm=Q({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Ie(pm),hm=Q({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ie(hm),gm=[9,13,27,32],iu=ct&&"CompositionEvent"in window,ir=null;ct&&"documentMode"in document&&(ir=document.documentMode);var ym=ct&&"TextEvent"in window&&!ir,dc=ct&&(!iu||ir&&8<ir&&11>=ir),Vs=" ",Hs=!1;function fc(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function xm(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(Hs=!0,Vs);case"textInput":return e=t.data,e===Vs&&Hs?null:e;default:return null}}function wm(e,t){if(pn)return e==="compositionend"||!iu&&fc(e,t)?(e=cc(),dl=nu=kt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function mc(e,t,n,r){Qa(r),t=Il(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,yr=null;function km(e){_c(e,0)}function Gl(e){var t=vn(e);if(Da(t))return e}function Cm(e,t){if(e==="change")return t}var hc=!1;ct&&(ct?(br="oninput"in document,br||(Di=document.createElement("div"),Di.setAttribute("oninput","return;"),br=typeof Di.oninput=="function"),Jr=br):Jr=!1,hc=Jr&&(!document.documentMode||9<document.documentMode));var Jr,br,Di;function Qs(){or&&(or.detachEvent("onpropertychange",vc),yr=or=null)}function vc(e){if(e.propertyName==="value"&&Gl(yr)){var t=[];mc(t,yr,e,Zo(e)),Ya(km,t)}}function Em(e,t,n){e==="focusin"?(Qs(),or=t,yr=n,or.attachEvent("onpropertychange",vc)):e==="focusout"&&Qs()}function _m(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(yr)}function Nm(e,t){if(e==="click")return Gl(t)}function Im(e,t){if(e==="input"||e==="change")return Gl(t)}function zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:zm;function xr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ji.call(t,l)||!Xe(e[l],t[l]))return!1}return!0}function Gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Gs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gs(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yc(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pm(e){var t=yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ks(n,i);var o=Ks(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=ct&&"documentMode"in document&&11>=document.documentMode,mn=null,yo=null,ur=null,xo=!1;function Xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||mn==null||mn!==wl(r)||(r=mn,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&xr(ur,r)||(ur=r,r=Il(yo,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function el(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Ai={},xc={};ct&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Kl(e){if(Ai[e])return Ai[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Ai[e]=t[n];return e}var wc=Kl("animationend"),Sc=Kl("animationiteration"),kc=Kl("animationstart"),Cc=Kl("transitionend"),Ec=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){Ec.set(e,t),en(t,[e])}for(tl=0;tl<Ys.length;tl++)nl=Ys[tl],qs=nl.toLowerCase(),Zs=nl[0].toUpperCase()+nl.slice(1),Bt(qs,"on"+Zs);var nl,qs,Zs,tl;Bt(wc,"onAnimationEnd");Bt(Sc,"onAnimationIteration");Bt(kc,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Cc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function Js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lp(r,t,void 0,e),e.currentTarget=null}function _c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,d=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;Js(l,u,d),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,d=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;Js(l,u,d),i=s}}}if(kl)throw e=mo,kl=!1,mo=null,e}function U(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function Ui(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[rl]){e[rl]=!0,Ra.forEach(function(n){n!=="selectionchange"&&(Lm.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Ui("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(ac(t)){case 1:var l=Kp;break;case 4:l=Xp;break;default:l=tu}n=l.bind(null,t,n,e),l=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $i(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=Wt(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Ya(function(){var d=i,v=Zo(n),g=[];e:{var y=Ec.get(e);if(y!==void 0){var a=ru,h=e;switch(e){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":a=am;break;case"focusin":h="focus",a=ji;break;case"focusout":h="blur",a=ji;break;case"beforeblur":case"afterblur":a=ji;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":a=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":a=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":a=fm;break;case wc:case Sc:case kc:a=em;break;case Cc:a=mm;break;case"scroll":a=Yp;break;case"wheel":a=vm;break;case"copy":case"cut":case"paste":a=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":a=$s}var p=(t&4)!==0,_=!p&&e==="scroll",f=p?y!==null?y+"Capture":null:y;p=[];for(var c=d,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=mr(c,f),x!=null&&p.push(Sr(c,x,m)))),_)break;c=c.return}0<p.length&&(y=new a(y,h,null,n,v),g.push({event:y,listeners:p}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout",y&&n!==co&&(h=n.relatedTarget||n.fromElement)&&(Wt(h)||h[dt]))break e;if((a||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,a?(h=n.relatedTarget||n.toElement,a=d,h=h?Wt(h):null,h!==null&&(_=tn(h),h!==_||h.tag!==5&&h.tag!==6)&&(h=null)):(a=null,h=d),a!==h)){if(p=As,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(p=$s,x="onPointerLeave",f="onPointerEnter",c="pointer"),_=a==null?y:vn(a),m=h==null?y:vn(h),y=new p(x,c+"leave",a,n,v),y.target=_,y.relatedTarget=m,x=null,Wt(v)===d&&(p=new p(f,c+"enter",h,n,v),p.target=m,p.relatedTarget=_,x=p),_=x,a&&h)t:{for(p=a,f=h,c=0,m=p;m;m=cn(m))c++;for(m=0,x=f;x;x=cn(x))m++;for(;0<c-m;)p=cn(p),c--;for(;0<m-c;)f=cn(f),m--;for(;c--;){if(p===f||f!==null&&p===f.alternate)break t;p=cn(p),f=cn(f)}p=null}else p=null;a!==null&&bs(g,y,a,p,!1),h!==null&&_!==null&&bs(g,_,h,p,!0)}}e:{if(y=d?vn(d):window,a=y.nodeName&&y.nodeName.toLowerCase(),a==="select"||a==="input"&&y.type==="file")var w=Cm;else if(Ws(y))if(hc)w=Im;else{w=_m;var C=Em}else(a=y.nodeName)&&a.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(w=Nm);if(w&&(w=w(e,d))){mc(g,w,n,v);break e}C&&C(e,y,d),e==="focusout"&&(C=y._wrapperState)&&C.controlled&&y.type==="number"&&io(y,"number",y.value)}switch(C=d?vn(d):window,e){case"focusin":(Ws(C)||C.contentEditable==="true")&&(mn=C,yo=d,ur=null);break;case"focusout":ur=yo=mn=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Xs(g,n,v);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Xs(g,n,v)}var k;if(iu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else pn?fc(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(dc&&n.locale!=="ko"&&(pn||E!=="onCompositionStart"?E==="onCompositionEnd"&&pn&&(k=cc()):(kt=v,nu="value"in kt?kt.value:kt.textContent,pn=!0)),C=Il(d,E),0<C.length&&(E=new Us(E,e,null,n,v),g.push({event:E,listeners:C}),k?E.data=k:(k=pc(n),k!==null&&(E.data=k)))),(k=ym?xm(e,n):wm(e,n))&&(d=Il(d,"onBeforeInput"),0<d.length&&(v=new Us("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=k))}_c(g,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=mr(e,n),i!=null&&r.unshift(Sr(e,i,l)),i=mr(e,t),i!=null&&r.push(Sr(e,i,l))),e=e.return}return r}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,d=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&d!==null&&(u=d,l?(s=mr(n,i),s!=null&&o.unshift(Sr(n,s,u))):l||(s=mr(n,i),s!=null&&o.push(Sr(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Fm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function ea(e){return(typeof e=="string"?e:""+e).replace(Fm,`
`).replace(Rm,"")}function ll(e,t,n){if(t=ea(t),ea(e)!==t&&n)throw Error(S(425))}function zl(){}var wo=null,So=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,ta=typeof Promise=="function"?Promise:void 0,Mm=typeof queueMicrotask=="function"?queueMicrotask:typeof ta!="undefined"?function(e){return ta.resolve(null).then(e).catch(Om)}:Co;function Om(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);gr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function na(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),et="__reactFiber$"+jn,kr="__reactProps$"+jn,dt="__reactContainer$"+jn,Eo="__reactEvents$"+jn,jm="__reactListeners$"+jn,Dm="__reactHandles$"+jn;function Wt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=na(e);e!==null;){if(n=e[et])return n;e=na(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[et]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Xl(e){return e[kr]||null}var _o=[],gn=-1;function Mt(e){return{current:e}}function $(e){0>gn||(e.current=_o[gn],_o[gn]=null,gn--)}function A(e,t){gn++,_o[gn]=e.current,e.current=t}var Rt={},se=Mt(Rt),ye=Mt(!1),Yt=Rt;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Pl(){$(ye),$(se)}function ra(e,t,n){if(se.current!==Rt)throw Error(S(168));A(se,t),A(ye,n)}function Ic(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Ep(e)||"Unknown",l));return Q({},n,r)}function Tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Yt=se.current,A(se,e),A(ye,ye.current),!0}function la(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ic(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,$(ye),$(se),A(se,e)):$(ye),A(ye,n)}var ot=null,Yl=!1,Hi=!1;function zc(e){ot===null?ot=[e]:ot.push(e)}function Am(e){Yl=!0,zc(e)}function Ot(){if(!Hi&&ot!==null){Hi=!0;var e=0,t=O;try{var n=ot;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Yl=!1}catch(l){throw ot!==null&&(ot=ot.slice(e+1)),ba(Jo,Ot),l}finally{O=t,Hi=!1}}return null}var yn=[],xn=0,Ll=null,Fl=0,Fe=[],Re=0,qt=null,ut=1,st="";function Vt(e,t){yn[xn++]=Fl,yn[xn++]=Ll,Ll=e,Fl=t}function Pc(e,t,n){Fe[Re++]=ut,Fe[Re++]=st,Fe[Re++]=qt,qt=e;var r=ut;e=st;var l=32-Ge(r)-1;r&=~(1<<l),n+=1;var i=32-Ge(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,ut=1<<32-Ge(t)+l|n<<l|r,st=i+e}else ut=1<<i|n<<l|r,st=e}function uu(e){e.return!==null&&(Vt(e,1),Pc(e,1,0))}function su(e){for(;e===Ll;)Ll=yn[--xn],yn[xn]=null,Fl=yn[--xn],yn[xn]=null;for(;e===qt;)qt=Fe[--Re],Fe[Re]=null,st=Fe[--Re],Fe[Re]=null,ut=Fe[--Re],Fe[Re]=null}var _e=null,Ee=null,V=!1,Qe=null;function Tc(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Ee=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Ee=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:ut,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Ee=null,!0):!1;default:return!1}}function No(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(V){var t=Ee;if(t){var n=t;if(!ia(e,t)){if(No(e))throw Error(S(418));t=It(n.nextSibling);var r=_e;t&&ia(e,t)?Tc(r,n):(e.flags=e.flags&-4097|2,V=!1,_e=e)}}else{if(No(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,_e=e}}}function oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function il(e){if(e!==_e)return!1;if(!V)return oa(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=Ee)){if(No(e))throw Lc(),Error(S(418));for(;t;)Tc(e,t),t=It(t.nextSibling)}if(oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ee=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ee=null}}else Ee=_e?It(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=Ee;e;)e=It(e.nextSibling)}function Ln(){Ee=_e=null,V=!1}function au(e){Qe===null?Qe=[e]:Qe.push(e)}var Um=mt.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rl=Mt(null),Bl=null,wn=null,cu=null;function du(){cu=wn=Bl=null}function fu(e){var t=Rl.current;$(Rl),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Bl=e,cu=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Bl===null)throw Error(S(308));wn=e,Bl.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Qt=null;function pu(e){Qt===null?Qt=[e]:Qt.push(e)}function Fc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,pu(t)):(n.next=l.next,l.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ft(e,n)}return l=r.interleaved,l===null?(t.next=t,pu(r)):(t.next=l.next,l.next=t),r.interleaved=t,ft(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}function ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ml(e,t,n,r){var l=e.updateQueue;xt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,d=s.next;s.next=null,o===null?i=d:o.next=d,o=s;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=d:u.next=d,v.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;o=0,v=d=s=null,u=i;do{var y=u.lane,a=u.eventTime;if((r&y)===y){v!==null&&(v=v.next={eventTime:a,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var h=e,p=u;switch(y=t,a=n,p.tag){case 1:if(h=p.payload,typeof h=="function"){g=h.call(a,g,y);break e}g=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=p.payload,y=typeof h=="function"?h.call(a,g,y):h,y==null)break e;g=Q({},g,y);break e;case 2:xt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[u]:y.push(u))}else a={eventTime:a,lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(d=v=a,s=g):v=v.next=a,o|=y;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;y=u,u=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(v===null&&(s=g),l.baseState=s,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Jt|=o,e.lanes=o,e.memoizedState=g}}function sa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Bc=new Fa.Component().refs;function Po(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ql={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=Tt(e),i=at(r,l);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,l),t!==null&&(Ke(t,e,l,r),pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=Tt(e),i=at(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,l),t!==null&&(Ke(t,e,l,r),pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Tt(e),l=at(n,r);l.tag=2,t!=null&&(l.callback=t),t=zt(e,l,r),t!==null&&(Ke(t,e,r,n),pl(t,e,r))}};function aa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(l,i):!0}function Mc(e,t,n){var r=!1,l=Rt,i=t.contextType;return typeof i=="object"&&i!==null?i=Oe(i):(l=xe(t)?Yt:se.current,r=t.contextTypes,i=(r=r!=null)?Tn(e,l):Rt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ca(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ql.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Bc,mu(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Oe(i):(i=xe(t)?Yt:se.current,l.context=Tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Po(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ql.enqueueReplaceState(l,l.state,null),Ml(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;u===Bc&&(u=l.refs={}),o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function da(e){var t=e._init;return t(e._payload)}function Oc(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Lt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,m,x){return c===null||c.tag!==6?(c=qi(m,f.mode,x),c.return=f,c):(c=l(c,m),c.return=f,c)}function s(f,c,m,x){var w=m.type;return w===fn?v(f,c,m.props.children,x,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yt&&da(w)===c.type)?(x=l(c,m.props),x.ref=Yn(f,c,m),x.return=f,x):(x=xl(m.type,m.key,m.props,null,f.mode,x),x.ref=Yn(f,c,m),x.return=f,x)}function d(f,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Zi(m,f.mode,x),c.return=f,c):(c=l(c,m.children||[]),c.return=f,c)}function v(f,c,m,x,w){return c===null||c.tag!==7?(c=Xt(m,f.mode,x,w),c.return=f,c):(c=l(c,m),c.return=f,c)}function g(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qi(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return m=xl(c.type,c.key,c.props,null,f.mode,m),m.ref=Yn(f,null,c),m.return=f,m;case dn:return c=Zi(c,f.mode,m),c.return=f,c;case yt:var x=c._init;return g(f,x(c._payload),m)}if(er(c)||Qn(c))return c=Xt(c,f.mode,m,null),c.return=f,c;ol(f,c)}return null}function y(f,c,m,x){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:u(f,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return m.key===w?s(f,c,m,x):null;case dn:return m.key===w?d(f,c,m,x):null;case yt:return w=m._init,y(f,c,w(m._payload),x)}if(er(m)||Qn(m))return w!==null?null:v(f,c,m,x,null);ol(f,m)}return null}function a(f,c,m,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,u(c,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return f=f.get(x.key===null?m:x.key)||null,s(c,f,x,w);case dn:return f=f.get(x.key===null?m:x.key)||null,d(c,f,x,w);case yt:var C=x._init;return a(f,c,m,C(x._payload),w)}if(er(x)||Qn(x))return f=f.get(m)||null,v(c,f,x,w,null);ol(c,x)}return null}function h(f,c,m,x){for(var w=null,C=null,k=c,E=c=0,I=null;k!==null&&E<m.length;E++){k.index>E?(I=k,k=null):I=k.sibling;var z=y(f,k,m[E],x);if(z===null){k===null&&(k=I);break}e&&k&&z.alternate===null&&t(f,k),c=i(z,c,E),C===null?w=z:C.sibling=z,C=z,k=I}if(E===m.length)return n(f,k),V&&Vt(f,E),w;if(k===null){for(;E<m.length;E++)k=g(f,m[E],x),k!==null&&(c=i(k,c,E),C===null?w=k:C.sibling=k,C=k);return V&&Vt(f,E),w}for(k=r(f,k);E<m.length;E++)I=a(k,f,E,m[E],x),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?E:I.key),c=i(I,c,E),C===null?w=I:C.sibling=I,C=I);return e&&k.forEach(function(L){return t(f,L)}),V&&Vt(f,E),w}function p(f,c,m,x){var w=Qn(m);if(typeof w!="function")throw Error(S(150));if(m=w.call(m),m==null)throw Error(S(151));for(var C=w=null,k=c,E=c=0,I=null,z=m.next();k!==null&&!z.done;E++,z=m.next()){k.index>E?(I=k,k=null):I=k.sibling;var L=y(f,k,z.value,x);if(L===null){k===null&&(k=I);break}e&&k&&L.alternate===null&&t(f,k),c=i(L,c,E),C===null?w=L:C.sibling=L,C=L,k=I}if(z.done)return n(f,k),V&&Vt(f,E),w;if(k===null){for(;!z.done;E++,z=m.next())z=g(f,z.value,x),z!==null&&(c=i(z,c,E),C===null?w=z:C.sibling=z,C=z);return V&&Vt(f,E),w}for(k=r(f,k);!z.done;E++,z=m.next())z=a(k,f,E,z.value,x),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?E:z.key),c=i(z,c,E),C===null?w=z:C.sibling=z,C=z);return e&&k.forEach(function(ke){return t(f,ke)}),V&&Vt(f,E),w}function _(f,c,m,x){if(typeof m=="object"&&m!==null&&m.type===fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:e:{for(var w=m.key,C=c;C!==null;){if(C.key===w){if(w=m.type,w===fn){if(C.tag===7){n(f,C.sibling),c=l(C,m.props.children),c.return=f,f=c;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yt&&da(w)===C.type){n(f,C.sibling),c=l(C,m.props),c.ref=Yn(f,C,m),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}m.type===fn?(c=Xt(m.props.children,f.mode,x,m.key),c.return=f,f=c):(x=xl(m.type,m.key,m.props,null,f.mode,x),x.ref=Yn(f,c,m),x.return=f,f=x)}return o(f);case dn:e:{for(C=m.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=l(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Zi(m,f.mode,x),c.return=f,f=c}return o(f);case yt:return C=m._init,_(f,c,C(m._payload),x)}if(er(m))return h(f,c,m,x);if(Qn(m))return p(f,c,m,x);ol(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,m),c.return=f,f=c):(n(f,c),c=qi(m,f.mode,x),c.return=f,f=c),o(f)):n(f,c)}return _}var Fn=Oc(!0),jc=Oc(!1),Fr={},nt=Mt(Fr),Cr=Mt(Fr),Er=Mt(Fr);function Gt(e){if(e===Fr)throw Error(S(174));return e}function hu(e,t){switch(A(Er,t),A(Cr,e),A(nt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}$(nt),A(nt,t)}function Rn(){$(nt),$(Cr),$(Er)}function Dc(e){Gt(Er.current);var t=Gt(nt.current),n=uo(t,e.type);t!==n&&(A(Cr,e),A(nt,n))}function vu(e){Cr.current===e&&($(nt),$(Cr))}var H=Mt(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function gu(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var ml=mt.ReactCurrentDispatcher,Qi=mt.ReactCurrentBatchConfig,Zt=0,W=null,q=null,J=null,jl=!1,sr=!1,_r=0,$m=0;function ie(){throw Error(S(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,l,i){if(Zt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?Qm:Gm,e=n(r,l),sr){i=0;do{if(sr=!1,_r=0,25<=i)throw Error(S(301));i+=1,J=q=null,t.updateQueue=null,ml.current=Km,e=n(r,l)}while(sr)}if(ml.current=Dl,t=q!==null&&q.next!==null,Zt=0,J=q=W=null,jl=!1,t)throw Error(S(300));return e}function wu(){var e=_r!==0;return _r=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function je(){if(q===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=J===null?W.memoizedState:J.next;if(t!==null)J=t,q=e;else{if(e===null)throw Error(S(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function Nr(e,t){return typeof t=="function"?t(e):t}function Gi(e){var t=je(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=q,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,d=i;do{var v=d.lane;if((Zt&v)===v)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(u=s=g,o=r):s=s.next=g,W.lanes|=v,Jt|=v}d=d.next}while(d!==null&&d!==i);s===null?o=r:s.next=u,Xe(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Jt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ki(e){var t=je(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Xe(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ac(){}function Uc(e,t){var n=W,r=je(),l=t(),i=!Xe(r.memoizedState,l);if(i&&(r.memoizedState=l,ge=!0),r=r.queue,Su(Hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Ir(9,Vc.bind(null,n,r,l,t),void 0,null),b===null)throw Error(S(349));Zt&30||$c(n,t,l)}return l}function $c(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vc(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&Qc(e)}function Hc(e,t,n){return n(function(){Wc(t)&&Qc(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch(r){return!0}}function Qc(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function fa(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,W,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gc(){return je().memoizedState}function hl(e,t,n,r){var l=be();W.flags|=e,l.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function Zl(e,t,n,r){var l=je();r=r===void 0?null:r;var i=void 0;if(q!==null){var o=q.memoizedState;if(i=o.destroy,r!==null&&yu(r,o.deps)){l.memoizedState=Ir(t,n,i,r);return}}W.flags|=e,l.memoizedState=Ir(1|t,n,i,r)}function pa(e,t){return hl(8390656,8,e,t)}function Su(e,t){return Zl(2048,8,e,t)}function Kc(e,t){return Zl(4,2,e,t)}function Xc(e,t){return Zl(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,n){return n=n!=null?n.concat([e]):null,Zl(4,4,Yc.bind(null,t,e),n)}function ku(){}function Zc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bc(e,t,n){return Zt&21?(Xe(n,t)||(n=nc(),W.lanes|=n,Jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Vm(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Qi.transition;Qi.transition={};try{e(!1),t()}finally{O=n,Qi.transition=r}}function ed(){return je().memoizedState}function Hm(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=Fc(e,t,n,r),n!==null){var l=pe();Ke(n,e,r,l),rd(n,t,r)}}function Wm(e,t,n){var r=Tt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Xe(u,o)){var s=t.interleaved;s===null?(l.next=l,pu(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch(d){}finally{}n=Fc(e,t,l,r),n!==null&&(l=pe(),Ke(n,e,r,l),rd(n,t,r))}}function td(e){var t=e.alternate;return e===W||t!==null&&t===W}function nd(e,t){sr=jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}var Dl={readContext:Oe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Qm={readContext:Oe,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:pa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hl(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){return hl(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hm.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:fa,useDebugValue:ku,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=fa(!1),t=e[0];return e=Vm.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=be();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),b===null)throw Error(S(349));Zt&30||$c(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,pa(Hc.bind(null,r,i,e),[e]),r.flags|=2048,Ir(9,Vc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=be(),t=b.identifierPrefix;if(V){var n=st,r=ut;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gm={readContext:Oe,useCallback:Zc,useContext:Oe,useEffect:Su,useImperativeHandle:qc,useInsertionEffect:Kc,useLayoutEffect:Xc,useMemo:Jc,useReducer:Gi,useRef:Gc,useState:function(){return Gi(Nr)},useDebugValue:ku,useDeferredValue:function(e){var t=je();return bc(t,q.memoizedState,e)},useTransition:function(){var e=Gi(Nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Uc,useId:ed,unstable_isNewReconciler:!1},Km={readContext:Oe,useCallback:Zc,useContext:Oe,useEffect:Su,useImperativeHandle:qc,useInsertionEffect:Kc,useLayoutEffect:Xc,useMemo:Jc,useReducer:Ki,useRef:Gc,useState:function(){return Ki(Nr)},useDebugValue:ku,useDeferredValue:function(e){var t=je();return q===null?t.memoizedState=e:bc(t,q.memoizedState,e)},useTransition:function(){var e=Ki(Nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Uc,useId:ed,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=Cp(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Xi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Lo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xm=typeof WeakMap=="function"?WeakMap:Map;function ld(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ul||(Ul=!0,$o=r),Lo(e,t)},n}function id(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Lo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Lo(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=s0.bind(null,e,t,n),t.then(e,e))}function ha(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function va(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var Ym=mt.ReactCurrentOwner,ge=!1;function fe(e,t,n,r){t.child=e===null?jc(t,null,n,r):Fn(t,e.child,n,r)}function ga(e,t,n,r,l){n=n.render;var i=t.ref;return In(t,l),r=xu(e,t,n,r,i,l),n=wu(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(V&&n&&uu(t),t.flags|=1,fe(e,t,r,l),t.child)}function ya(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,od(e,t,i,r,l)):(e=xl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(o,r)&&e.ref===t.ref)return pt(e,t,l)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(xr(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,pt(e,t,l)}return Fo(e,t,n,r,l)}function ud(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(kn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(kn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(kn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(kn,Ce),Ce|=r;return fe(e,t,l,n),t.child}function sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,n,r,l){var i=xe(n)?Yt:se.current;return i=Tn(t,i),In(t,l),n=xu(e,t,n,r,i,l),r=wu(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(V&&r&&uu(t),t.flags|=1,fe(e,t,n,l),t.child)}function xa(e,t,n,r,l){if(xe(n)){var i=!0;Tl(t)}else i=!1;if(In(t,l),t.stateNode===null)vl(e,t),Mc(t,n,r),To(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oe(d):(d=xe(n)?Yt:se.current,d=Tn(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==d)&&ca(t,o,r,d),xt=!1;var y=t.memoizedState;o.state=y,Ml(t,r,o,l),s=t.memoizedState,u!==r||y!==s||ye.current||xt?(typeof v=="function"&&(Po(t,n,v,r),s=t.memoizedState),(u=xt||aa(t,n,u,r,y,s,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Rc(e,t),u=t.memoizedProps,d=t.type===t.elementType?u:He(t.type,u),o.props=d,g=t.pendingProps,y=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Oe(s):(s=xe(n)?Yt:se.current,s=Tn(t,s));var a=n.getDerivedStateFromProps;(v=typeof a=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==g||y!==s)&&ca(t,o,r,s),xt=!1,y=t.memoizedState,o.state=y,Ml(t,r,o,l);var h=t.memoizedState;u!==g||y!==h||ye.current||xt?(typeof a=="function"&&(Po(t,n,a,r),h=t.memoizedState),(d=xt||aa(t,n,d,r,y,h,s)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Ro(e,t,n,r,i,l)}function Ro(e,t,n,r,l,i){sd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&la(t,n,!1),pt(e,t,i);r=t.stateNode,Ym.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,u,i)):fe(e,t,u,i),t.memoizedState=r.state,l&&la(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),hu(e,t.containerInfo)}function wa(e,t,n,r,l){return Ln(),au(l),t.flags|=256,fe(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,l=H.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(H,l&1),e===null)return Io(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ei(o,r,0,null),e=Xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mo(n),t.memoizedState=Bo,e):Cu(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return qm(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Lt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Lt(u,i):(i=Xt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Mo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&au(r),Fn(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Xi(Error(S(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ei({mode:"visible",children:r.children},l,0,null),i=Xt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fn(t,e.child,null,o),t.child.memoizedState=Mo(o),t.memoizedState=Bo,i);if(!(t.mode&1))return ul(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=Xi(i,r,void 0),ul(e,t,o,r)}if(u=(o&e.childLanes)!==0,ge||u){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,ft(e,l),Ke(r,e,l,-1))}return Pu(),r=Xi(Error(S(421))),ul(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=a0.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ee=It(l.nextSibling),_e=t,V=!0,Qe=null,e!==null&&(Fe[Re++]=ut,Fe[Re++]=st,Fe[Re++]=qt,ut=e.id,st=e.overflow,qt=t),t=Cu(t,r.children),t.flags|=4096,t)}function Sa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Yi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function dd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sa(e,n,t);else if(e.tag===19)Sa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ol(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yi(t,!0,n,null,i);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zm(e,t,n){switch(t.tag){case 3:ad(t),Ln();break;case 5:Dc(t);break;case 1:xe(t.type)&&Tl(t);break;case 4:hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(Rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(A(H,H.current&1),e=pt(e,t,n),e!==null?e.sibling:null);A(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n)}return pt(e,t,n)}var fd,Oo,pd,md;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oo=function(){};pd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Gt(nt.current);var i=null;switch(n){case"input":l=ro(e,l),r=ro(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=oo(e,l),r=oo(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zl)}so(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var u=l[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(u=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&s!==u&&(s!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&U("scroll",e),i||u===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jm(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return xe(t.type)&&Pl(),oe(t),null;case 3:return r=t.stateNode,Rn(),$(ye),$(se),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Wo(Qe),Qe=null))),Oo(e,t),oe(t),null;case 5:vu(t);var l=Gt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Gt(nt.current),il(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[kr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<nr.length;l++)U(nr[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Ps(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Ls(r,i),U("invalid",r)}so(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),l=["children",""+u]):fr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":Gr(r),Ts(r,i,!0);break;case"textarea":Gr(r),Fs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$a(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[et]=t,e[kr]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(o=ao(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<nr.length;l++)U(nr[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Ps(e,r),l=ro(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Ls(e,r),l=oo(e,r),U("invalid",e);break;default:l=r}so(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Wa(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Va(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pr(e,s):typeof s=="number"&&pr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&Ko(e,i,s,o))}switch(n){case"input":Gr(e),Ts(e,r,!1);break;case"textarea":Gr(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Gt(Er.current),Gt(nt.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return oe(t),null;case 13:if($(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ee!==null&&t.mode&1&&!(t.flags&128))Lc(),Ln(),t.flags|=98560,i=!1;else if(i=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[et]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Qe!==null&&(Wo(Qe),Qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):Pu())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return Rn(),Oo(e,t),e===null&&wr(t.stateNode.containerInfo),oe(t),null;case 10:return fu(t.type._context),oe(t),null;case 17:return xe(t.type)&&Pl(),oe(t),null;case 19:if($(H),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)qn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ol(e),o!==null){for(t.flags|=128,qn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>Mn&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return oe(t),null}else 2*K()-i.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=H.current,A(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function bm(e,t){switch(su(t),t.tag){case 1:return xe(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),$(ye),$(se),gu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if($(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(H),null;case 4:return Rn(),null;case 10:return fu(t.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var sl=!1,ue=!1,e0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function jo(e,t,n){try{n()}catch(r){G(e,t,r)}}var ka=!1;function t0(e,t){if(wo=_l,e=yc(),ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(x){n=null;break e}var o=0,u=-1,s=-1,d=0,v=0,g=e,y=null;t:for(;;){for(var a;g!==n||l!==0&&g.nodeType!==3||(u=o+l),g!==i||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(a=g.firstChild)!==null;)y=g,g=a;for(;;){if(g===e)break t;if(y===n&&++d===l&&(u=o),y===i&&++v===r&&(s=o),(a=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=a}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},_l=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var p=h.memoizedProps,_=h.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?p:He(t.type,p),_);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return h=ka,ka=!1,h}function ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&jo(t,n,i)}l=l.next}while(l!==r)}}function Jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[kr],delete t[Eo],delete t[jm],delete t[Dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vd(e){return e.tag===5||e.tag===3||e.tag===4}function Ca(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zl));else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}function Uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}var ee=null,We=!1;function gt(e,t,n){for(n=n.child;n!==null;)gd(e,t,n),n=n.sibling}function gd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Wl,n)}catch(u){}switch(n.tag){case 5:ue||Sn(n,t);case 6:var r=ee,l=We;ee=null,gt(e,t,n),ee=r,We=l,ee!==null&&(We?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(We?(e=ee,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),gr(e)):Vi(ee,n.stateNode));break;case 4:r=ee,l=We,ee=n.stateNode.containerInfo,We=!0,gt(e,t,n),ee=r,We=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&jo(n,t,o),l=l.next}while(l!==r)}gt(e,t,n);break;case 1:if(!ue&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,gt(e,t,n),ue=r):gt(e,t,n);break;default:gt(e,t,n)}}function Ea(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e0),t.forEach(function(r){var l=c0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,We=!1;break e;case 3:ee=u.stateNode.containerInfo,We=!0;break e;case 4:ee=u.stateNode.containerInfo,We=!0;break e}u=u.return}if(ee===null)throw Error(S(160));gd(i,o,l),ee=null,We=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Je(e),r&4){try{ar(3,e,e.return),Jl(3,e)}catch(p){G(e,e.return,p)}try{ar(5,e,e.return)}catch(p){G(e,e.return,p)}}break;case 1:Ve(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(Ve(t,e),Je(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var l=e.stateNode;try{pr(l,"")}catch(p){G(e,e.return,p)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Aa(l,i),ao(u,o);var d=ao(u,i);for(o=0;o<s.length;o+=2){var v=s[o],g=s[o+1];v==="style"?Wa(l,g):v==="dangerouslySetInnerHTML"?Va(l,g):v==="children"?pr(l,g):Ko(l,v,g,d)}switch(u){case"input":lo(l,i);break;case"textarea":Ua(l,i);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var a=i.value;a!=null?Cn(l,!!i.multiple,a,!1):y!==!!i.multiple&&(i.defaultValue!=null?Cn(l,!!i.multiple,i.defaultValue,!0):Cn(l,!!i.multiple,i.multiple?[]:"",!1))}l[kr]=i}catch(p){G(e,e.return,p)}}break;case 6:if(Ve(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(p){G(e,e.return,p)}}break;case 3:if(Ve(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(p){G(e,e.return,p)}break;case 4:Ve(t,e),Je(e);break;case 13:Ve(t,e),Je(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Nu=K())),r&4&&Ea(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||v,Ve(t,e),ue=d):Ve(t,e),Je(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(N=e,v=e.child;v!==null;){for(g=N=v;N!==null;){switch(y=N,a=y.child,y.tag){case 0:case 11:case 14:case 15:ar(4,y,y.return);break;case 1:Sn(y,y.return);var h=y.stateNode;if(typeof h.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(p){G(r,n,p)}}break;case 5:Sn(y,y.return);break;case 22:if(y.memoizedState!==null){Na(g);continue}}a!==null?(a.return=y,N=a):Na(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Ha("display",o))}catch(p){G(e,e.return,p)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(p){G(e,e.return,p)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ve(t,e),Je(e),r&4&&Ea(e);break;case 21:break;default:Ve(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(pr(l,""),r.flags&=-33);var i=Ca(e);Uo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ca(e);Ao(e,u,o);break;default:throw Error(S(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n0(e,t,n){N=e,xd(e,t,n)}function xd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||sl;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||ue;u=sl;var d=ue;if(sl=o,(ue=s)&&!d)for(N=l;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?Ia(l):s!==null?(s.return=o,N=s):Ia(l);for(;i!==null;)N=i,xd(i,t,n),i=i.sibling;N=l,sl=u,ue=d}_a(e,t,n)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):_a(e,t,n)}}function _a(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&sa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sa(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&gr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Do(t)}catch(y){G(t,t.return,y)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Na(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ia(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jl(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){G(t,l,s)}}var i=t.return;try{Do(t)}catch(s){G(t,i,s)}break;case 5:var o=t.return;try{Do(t)}catch(s){G(t,o,s)}}}catch(s){G(t,t.return,s)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var r0=Math.ceil,Al=mt.ReactCurrentDispatcher,Eu=mt.ReactCurrentOwner,Me=mt.ReactCurrentBatchConfig,M=0,b=null,Y=null,te=0,Ce=0,kn=Mt(0),Z=0,zr=null,Jt=0,bl=0,_u=0,cr=null,ve=null,Nu=0,Mn=1/0,it=null,Ul=!1,$o=null,Pt=null,al=!1,Ct=null,$l=0,dr=0,Vo=null,gl=-1,yl=0;function pe(){return M&6?K():gl!==-1?gl:gl=K()}function Tt(e){return e.mode&1?M&2&&te!==0?te&-te:Um.transition!==null?(yl===0&&(yl=nc()),yl):(e=O,e!==0||(e=window.event,e=e===void 0?16:ac(e.type)),e):1}function Ke(e,t,n,r){if(50<dr)throw dr=0,Vo=null,Error(S(185));Pr(e,n,r),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&(bl|=n),Z===4&&St(e,te)),we(e,r),n===1&&M===0&&!(t.mode&1)&&(Mn=K()+500,Yl&&Ot()))}function we(e,t){var n=e.callbackNode;Vp(e,t);var r=El(e,e===b?te:0);if(r===0)n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ms(n),t===1)e.tag===0?Am(za.bind(null,e)):zc(za.bind(null,e)),Mm(function(){!(M&6)&&Ot()}),n=null;else{switch(rc(r)){case 1:n=Jo;break;case 4:n=ec;break;case 16:n=Cl;break;case 536870912:n=tc;break;default:n=Cl}n=Id(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(gl=-1,yl=0,M&6)throw Error(S(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=El(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vl(e,r);else{t=r;var l=M;M|=2;var i=kd();(b!==e||te!==t)&&(it=null,Mn=K()+500,Kt(e,t));do try{o0();break}catch(u){Sd(e,u)}while(!0);du(),Al.current=i,M=l,Y!==null?t=0:(b=null,te=0,t=Z)}if(t!==0){if(t===2&&(l=ho(e),l!==0&&(r=l,t=Ho(e,l))),t===1)throw n=zr,Kt(e,0),St(e,r),we(e,K()),n;if(t===6)St(e,r);else{if(l=e.current.alternate,!(r&30)&&!l0(l)&&(t=Vl(e,r),t===2&&(i=ho(e),i!==0&&(r=i,t=Ho(e,i))),t===1))throw n=zr,Kt(e,0),St(e,r),we(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ht(e,ve,it);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Nu+500-K(),10<t)){if(El(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Co(Ht.bind(null,e,ve,it),t);break}Ht(e,ve,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ge(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r0(r/1960))-r,10<r){e.timeoutHandle=Co(Ht.bind(null,e,ve,it),r);break}Ht(e,ve,it);break;case 5:Ht(e,ve,it);break;default:throw Error(S(329))}}}return we(e,K()),e.callbackNode===n?wd.bind(null,e):null}function Ho(e,t){var n=cr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Vl(e,t),e!==2&&(t=ve,ve=n,t!==null&&Wo(t)),e}function Wo(e){ve===null?ve=e:ve.push.apply(ve,e)}function l0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Xe(i(),l))return!1}catch(o){return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~_u,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function za(e){if(M&6)throw Error(S(327));zn();var t=El(e,0);if(!(t&1))return we(e,K()),null;var n=Vl(e,t);if(e.tag!==0&&n===2){var r=ho(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=zr,Kt(e,0),St(e,t),we(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ve,it),we(e,K()),null}function Iu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Mn=K()+500,Yl&&Ot())}}function bt(e){Ct!==null&&Ct.tag===0&&!(M&6)&&zn();var t=M;M|=1;var n=Me.transition,r=O;try{if(Me.transition=null,O=1,e)return e()}finally{O=r,Me.transition=n,M=t,!(M&6)&&Ot()}}function zu(){Ce=kn.current,$(kn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Rn(),$(ye),$(se),gu();break;case 5:vu(r);break;case 4:Rn();break;case 13:$(H);break;case 19:$(H);break;case 10:fu(r.type._context);break;case 22:case 23:zu()}n=n.return}if(b=e,Y=e=Lt(e.current,null),te=Ce=t,Z=0,zr=null,_u=bl=Jt=0,ve=cr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Qt=null}return e}function Sd(e,t){do{var n=Y;try{if(du(),ml.current=Dl,jl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}jl=!1}if(Zt=0,J=q=W=null,sr=!1,_r=0,Eu.current=null,n===null||n.return===null){Z=1,zr=t,Y=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=te,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,v=u,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var y=v.alternate;y?(v.updateQueue=y.updateQueue,v.memoizedState=y.memoizedState,v.lanes=y.lanes):(v.updateQueue=null,v.memoizedState=null)}var a=ha(o);if(a!==null){a.flags&=-257,va(a,o,u,i,t),a.mode&1&&ma(i,d,t),t=a,s=d;var h=t.updateQueue;if(h===null){var p=new Set;p.add(s),t.updateQueue=p}else h.add(s);break e}else{if(!(t&1)){ma(i,d,t),Pu();break e}s=Error(S(426))}}else if(V&&u.mode&1){var _=ha(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),va(_,o,u,i,t),au(Bn(s,u));break e}}i=s=Bn(s,u),Z!==4&&(Z=2),cr===null?cr=[i]:cr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=ld(i,s,t);ua(i,f);break e;case 1:u=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pt===null||!Pt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=id(i,u,t);ua(i,x);break e}}i=i.return}while(i!==null)}Ed(n)}catch(w){t=w,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function kd(){var e=Al.current;return Al.current=Dl,e===null?Dl:e}function Pu(){(Z===0||Z===3||Z===2)&&(Z=4),b===null||!(Jt&268435455)&&!(bl&268435455)||St(b,te)}function Vl(e,t){var n=M;M|=2;var r=kd();(b!==e||te!==t)&&(it=null,Kt(e,t));do try{i0();break}catch(l){Sd(e,l)}while(!0);if(du(),M=n,Al.current=r,Y!==null)throw Error(S(261));return b=null,te=0,Z}function i0(){for(;Y!==null;)Cd(Y)}function o0(){for(;Y!==null&&!Rp();)Cd(Y)}function Cd(e){var t=Nd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Ed(e):Y=t,Eu.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bm(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=Jm(n,t,Ce),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Ht(e,t,n){var r=O,l=Me.transition;try{Me.transition=null,O=1,u0(e,t,n,r)}finally{Me.transition=l,O=r}return null}function u0(e,t,n,r){do zn();while(Ct!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hp(e,i),e===b&&(Y=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Id(Cl,function(){return zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var o=O;O=1;var u=M;M|=4,Eu.current=null,t0(e,n),yd(n,e),Pm(So),_l=!!wo,So=wo=null,e.current=n,n0(n,e,l),Bp(),M=u,O=o,Me.transition=i}else e.current=n;if(al&&(al=!1,Ct=e,$l=l),i=e.pendingLanes,i===0&&(Pt=null),jp(n.stateNode,r),we(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ul)throw Ul=!1,e=$o,$o=null,e;return $l&1&&e.tag!==0&&zn(),i=e.pendingLanes,i&1?e===Vo?dr++:(dr=0,Vo=e):dr=0,Ot(),null}function zn(){if(Ct!==null){var e=rc($l),t=Me.transition,n=O;try{if(Me.transition=null,O=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,$l=0,M&6)throw Error(S(331));var l=M;for(M|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var d=u[s];for(N=d;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:ar(8,v,i)}var g=v.child;if(g!==null)g.return=v,N=g;else for(;N!==null;){v=N;var y=v.sibling,a=v.return;if(hd(v),v===d){N=null;break}if(y!==null){y.return=a,N=y;break}N=a}}}var h=i.alternate;if(h!==null){var p=h.child;if(p!==null){h.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ar(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=c;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Jl(9,u)}}catch(w){G(u,u.return,w)}if(u===o){N=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,N=x;break e}N=u.return}}if(M=l,Ot(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Wl,e)}catch(w){}r=!0}return r}finally{O=n,Me.transition=t}}return!1}function Pa(e,t,n){t=Bn(n,t),t=ld(e,t,1),e=zt(e,t,1),t=pe(),e!==null&&(Pr(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)Pa(e,e,n);else for(;t!==null;){if(t.tag===3){Pa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Bn(n,e),e=id(t,e,1),t=zt(t,e,1),e=pe(),t!==null&&(Pr(t,1,e),we(t,e));break}}t=t.return}}function s0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>K()-Nu?Kt(e,0):_u|=n),we(e,t)}function _d(e,t){t===0&&(e.mode&1?(t=Yr,Yr<<=1,!(Yr&130023424)&&(Yr=4194304)):t=1);var n=pe();e=ft(e,t),e!==null&&(Pr(e,t,n),we(e,n))}function a0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function c0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),_d(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Zm(e,t,n);ge=!!(e.flags&131072)}else ge=!1,V&&t.flags&1048576&&Pc(t,Fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vl(e,t),e=t.pendingProps;var l=Tn(t,se.current);In(t,n),l=xu(null,t,r,e,l,n);var i=wu();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(i=!0,Tl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mu(t),l.updater=ql,t.stateNode=l,l._reactInternals=t,To(t,r,e,n),t=Ro(null,t,r,!0,i,n)):(t.tag=0,V&&i&&uu(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=f0(r),e=He(r,e),l){case 0:t=Fo(null,t,r,e,n);break e;case 1:t=xa(null,t,r,e,n);break e;case 11:t=ga(null,t,r,e,n);break e;case 14:t=ya(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),Fo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),xa(e,t,r,l,n);case 3:e:{if(ad(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Rc(e,t),Ml(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Bn(Error(S(423)),t),t=wa(e,t,r,n,l);break e}else if(r!==l){l=Bn(Error(S(424)),t),t=wa(e,t,r,n,l);break e}else for(Ee=It(t.stateNode.containerInfo.firstChild),_e=t,V=!0,Qe=null,n=jc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===l){t=pt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Dc(t),e===null&&Io(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ko(r,l)?o=null:i!==null&&ko(r,i)&&(t.flags|=32),sd(e,t),fe(e,t,o,n),t.child;case 6:return e===null&&Io(t),null;case 13:return cd(e,t,n);case 4:return hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),ga(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,A(Rl,r._currentValue),r._currentValue=o,i!==null)if(Xe(i.value,o)){if(i.children===l.children&&!ye.current){t=pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=at(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zo(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),zo(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,In(t,n),l=Oe(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=He(r,t.pendingProps),l=He(r.type,l),ya(e,t,r,l,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:He(r,l),vl(e,t),t.tag=1,xe(r)?(e=!0,Tl(t)):e=!1,In(t,n),Mc(t,r,l),To(t,r,l,n),Ro(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return ud(e,t,n)}throw Error(S(156,t.tag))};function Id(e,t){return ba(e,t)}function d0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new d0(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f0(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yo)return 11;if(e===qo)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Tu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fn:return Xt(n.children,l,i,t);case Xo:o=8,l|=8;break;case bi:return e=Be(12,n,t,l|2),e.elementType=bi,e.lanes=i,e;case eo:return e=Be(13,n,t,l),e.elementType=eo,e.lanes=i,e;case to:return e=Be(19,n,t,l),e.elementType=to,e.lanes=i,e;case Oa:return ei(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:o=10;break e;case Ma:o=9;break e;case Yo:o=11;break e;case qo:o=14;break e;case yt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function ei(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Oa,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Zi(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function p0(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,l,i,o,u,s){return e=new p0(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(i),e}function m0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zd(e){if(!e)return Rt;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(xe(n))return Ic(e,n,t)}return t}function Pd(e,t,n,r,l,i,o,u,s){return e=Lu(n,r,!0,e,l,i,o,u,s),e.context=zd(null),n=e.current,r=pe(),l=Tt(n),i=at(r,l),i.callback=t!=null?t:null,zt(n,i,l),e.current.lanes=l,Pr(e,l,r),we(e,r),e}function ti(e,t,n,r){var l=t.current,i=pe(),o=Tt(l);return n=zd(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(l,t,o),e!==null&&(Ke(e,l,o,i),pl(e,l,o)),o}function Hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ta(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fu(e,t){Ta(e,t),(e=e.alternate)&&Ta(e,t)}function h0(){return null}var Td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}ni.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ti(e,t,null,null)};ni.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){ti(null,e,null,null)}),t[dt]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&sc(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function La(){}function v0(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=Hl(o);i.call(d)}}var o=Pd(t,r,e,0,null,!1,!1,"",La);return e._reactRootContainer=o,e[dt]=o.current,wr(e.nodeType===8?e.parentNode:e),bt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var d=Hl(s);u.call(d)}}var s=Lu(e,0,!1,null,null,!1,!1,"",La);return e._reactRootContainer=s,e[dt]=s.current,wr(e.nodeType===8?e.parentNode:e),bt(function(){ti(t,s,n,r)}),s}function li(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=Hl(o);u.call(s)}}ti(t,o,e,l)}else o=v0(n,t,e,l,r);return Hl(o)}lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tr(t.pendingLanes);n!==0&&(bo(t,n|1),we(t,K()),!(M&6)&&(Mn=K()+500,Ot()))}break;case 13:bt(function(){var r=ft(e,1);if(r!==null){var l=pe();Ke(r,e,1,l)}}),Fu(e,1)}};eu=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=pe();Ke(t,e,134217728,n)}Fu(e,134217728)}};ic=function(e){if(e.tag===13){var t=Tt(e),n=ft(e,t);if(n!==null){var r=pe();Ke(n,e,t,r)}Fu(e,t)}};oc=function(){return O};uc=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};fo=function(e,t,n){switch(t){case"input":if(lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Xl(r);if(!l)throw Error(S(90));Da(r),lo(r,l)}}}break;case"textarea":Ua(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Ka=Iu;Xa=bt;var g0={usingClientEntryPoint:!1,Events:[Lr,vn,Xl,Qa,Ga,Iu]},Zn={findFiberByHostInstance:Wt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},y0={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Za(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Jn=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Jn.isDisabled&&Jn.supportsFiber))try{Wl=Jn.inject(y0),tt=Jn}catch(e){}var Jn;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error(S(200));return m0(e,t,null,n)};ze.createRoot=function(e,t){if(!Bu(e))throw Error(S(299));var n=!1,r="",l=Td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,l),e[dt]=t.current,wr(e.nodeType===8?e.parentNode:e),new Ru(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Za(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return bt(e)};ze.hydrate=function(e,t,n){if(!ri(t))throw Error(S(200));return li(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Bu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Td;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Pd(t,null,e,1,n!=null?n:null,l,!1,i,o),e[dt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ni(t)};ze.render=function(e,t,n){if(!ri(t))throw Error(S(200));return li(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!ri(e))throw Error(S(40));return e._reactRootContainer?(bt(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};ze.unstable_batchedUpdates=Iu;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ri(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return li(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608"});var Mu=Ue(($v,Rd)=>{"use strict";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(e){console.error(e)}}Fd(),Rd.exports=Ld()});var Md=Ue(Ou=>{"use strict";var Bd=Mu();Ou.createRoot=Bd.createRoot,Ou.hydrateRoot=Bd.hydrateRoot;var Vv});var De=Ue((Wv,ii)=>{(function(){"use strict";var e={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(l=r(l,n(o)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var o in l)e.call(l,o)&&l[o]&&(i=r(i,o));return i}function r(l,i){return i?l?l+" "+i:l+i:l}typeof ii!="undefined"&&ii.exports?(t.default=t,ii.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var jd=Ue(oi=>{"use strict";var x0=he(),w0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),k0=Object.prototype.hasOwnProperty,C0=x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)k0.call(t,r)&&!E0.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:w0,type:e,key:i,ref:o,props:l,_owner:C0.current}}oi.Fragment=S0;oi.jsx=Od;oi.jsxs=Od});var X=Ue((Gv,Dd)=>{"use strict";Dd.exports=jd()});var gf=Ue((Xu,vf)=>{"use strict";var Ku=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,Th=Object.getOwnPropertyNames,Lh=Object.prototype.hasOwnProperty,Fh=(e,t)=>{for(var n in t)Ku(e,n,{get:t[n],enumerable:!0})},Rh=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of Th(t))!Lh.call(e,l)&&l!==n&&Ku(e,l,{get:()=>t[l],enumerable:!(r=Ph(t,l))||r.enumerable});return e},Bh=e=>Rh(Ku({},"__esModule",{value:!0}),e),hf={};Fh(hf,{streamQuery:()=>Uh});vf.exports=Bh(hf);var Qu="%START_SNIPPET%",Gu="%END_SNIPPET%",Mh=e=>{if(!e)return;let t=[],{response:n,document:r}=e;return n.forEach(l=>{let{documentIndex:i,text:o}=l,{pre:u,post:s,text:d}=jh(o),v=r[Number(i)],{id:g,metadata:y}=v,{source:a,url:h,title:p,metadata:_}=Oh(y);t.push({id:g,snippet:{pre:u,text:d,post:s},source:a,url:h,title:p,metadata:_})}),t},Oh=e=>{let t=Dh(e);return{source:t.source,url:t.url,title:t.title||"Untitled",metadata:t}},jh=e=>{let[t,n]=e.indexOf(Qu)!==-1?e.split(Qu):["",e],[r,l]=n.indexOf(Gu)!==-1?n.split(Gu):[n,""];return{pre:t,post:l,text:r}},Dh=e=>{let t={};return e.forEach(n=>{t[n.name]=n.value}),t},Ah="api.vectara.io",Uh=(e,t)=>un(Xu,null,function*(){var n,r,l,i,o,u,s,d;let v={"x-api-key":e.apiKey,"customer-id":e.customerId,"Content-Type":"application/json"},g=(n=e.lambda)!=null?n:.025;g>1?g=1:g<0&&(g=0);let y=e.corpusIds.map(w=>({customerId:e.customerId,corpusId:w,lexicalInterpolationConfig:{lambda:g},metadataFilter:e.filter?`doc.source = '${e.filter}'`:void 0})),a=e.rerank?{rerankingConfig:j({rerankerId:e.rerankerId},e.rerankerId===272725718?{mmrConfig:{diversityBias:e.rerankDiversityBias}}:{})}:{},h=JSON.stringify({query:[j({query:e.queryValue,start:0,numResults:e.rerank?e.rerankNumResults:10,corpusKey:y,contextConfig:{sentencesBefore:(r=e.summaryNumSentences)!=null?r:2,sentencesAfter:(l=e.summaryNumSentences)!=null?l:2,startTag:Qu,endTag:Gu},summary:[{responseLang:e.language,maxSummarizedResults:e.summaryNumResults,summarizerPromptName:e.summaryPromptName,factualConsistencyScore:(i=e.enableFactualConsistencyScore)!=null?i:!1,chat:{store:(u=(o=e.chat)==null?void 0:o.store)!=null?u:!1,conversationId:(s=e.chat)==null?void 0:s.conversationId}}]},a)]}),p=yield Wh(v,h,(d=e.endpoint)!=null?d:Ah),_="";try{for(var f=ts(p),c,m,x;c=!(m=yield f.next()).done;c=!1){let w=m.value;try{w.split(`
`).filter(C=>C!=="").forEach(C=>{var k,E,I,z;let L=JSON.parse(C);if(!L.result)return;let ke=$h(L.result),di=Vh(L.result),ae=null;[ke,di].forEach(Ut=>{Ut&&(ae=ae!=null?ae:[],ae.push(Ut))});let Te={references:(k=Mh(L.result.responseSet))!=null?k:null,details:ae,updatedText:Hh(L.result,_),isDone:(I=(E=L.result.summary)==null?void 0:E.done)!=null?I:!1};_=(z=Te.updatedText)!=null?z:"",t(Te)})}catch(C){}}}catch(m){x=[m]}finally{try{c&&(m=f.return)&&(yield m.call(f))}finally{if(x)throw x[0]}}}),$h=e=>!e.summary||!e.summary.chat?null:{type:"chat",data:{conversationId:e.summary.chat.conversationId,turnId:e.summary.chat.turnId}},Vh=e=>!e.summary||!e.summary.factualConsistency?null:{type:"factualConsistency",data:{score:e.summary.factualConsistency.score}},Hh=(e,t)=>e.summary?`${t}${e.summary.text}`:null,Wh=(e,t,n)=>un(Xu,null,function*(){let r=yield fetch(`https://${n}/v1/stream-query`,{method:"POST",headers:e,body:t});if(r.status!==200)throw new Error(r.status.toString());if(!r.body)throw new Error("Response body does not exist");return Qh(r.body)});function Qh(e){return es(this,null,function*(){let t=e.getReader(),n=new TextDecoder;for(;;){let{value:r,done:l}=yield new hi(t.read());if(l)break;yield n.decode(r,{stream:!0})}})}});var Un=P(he()),Gf=P(Md());var ci=P(he()),Sf=P(Mu()),Se=P(he()),kf=P(De()),Cf=P(X()),Ef=P(De()),_f=P(X()),T=P(X()),Ae=P(X()),Nf=P(he()),If=P(De()),zf=P(he()),Yu=P(De()),on=P(X()),Tf=P(he()),Ff=P(X()),Rf=P(he()),Bf=P(De()),Mf=P(X()),Of=P(De()),ai=P(X()),jf=P(De()),Df=P(X()),Af=P(De()),Br=P(X()),Uf=P(De()),$f=P(X()),Yv=P(De()),Zv=P(X()),bv=P(De()),t1=P(he()),rn=P(X());var An=P(he(),1);function nn(){return nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nn.apply(this,arguments)}var _0=["children","options"],Ad,Ud;(function(e){e.blockQuote="0",e.breakLine="1",e.breakThematic="2",e.codeBlock="3",e.codeFenced="4",e.codeInline="5",e.footnote="6",e.footnoteReference="7",e.gfmTask="8",e.heading="9",e.headingSetext="10",e.htmlBlock="11",e.htmlComment="12",e.htmlSelfClosing="13",e.image="14",e.link="15",e.linkAngleBraceStyleDetector="16",e.linkBareUrlDetector="17",e.linkMailtoDetector="18",e.newlineCoalescer="19",e.orderedList="20",e.paragraph="21",e.ref="22",e.refImage="23",e.refLink="24",e.table="25",e.tableSeparator="26",e.text="27",e.textBolded="28",e.textEmphasized="29",e.textEscaped="30",e.textMarked="31",e.textStrikethroughed="32",e.unorderedList="33"})(Ad||(Ad={})),function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"}(Ud||(Ud={}));var $d=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),Vd={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xA0",quot:"\u201C"},N0=["style","script"],I0=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,z0=/mailto:/i,P0=/\n{2,}$/,Xd=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,T0=/^ *> ?/gm,L0=/^ {2,}\n/,F0=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Yd=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,qd=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,R0=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,B0=/^(?:\n *)*\n/,M0=/\r\n?/g,O0=/^\[\^([^\]]+)](:.*)\n/,j0=/^\[\^([^\]]+)]/,D0=/\f/g,A0=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,U0=/^\s*?\[(x|\s)\]/,Zd=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Jd=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,bd=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$u=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,$0=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,ef=/^<!--[\s\S]*?(?:-->)/,V0=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,Vu=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,H0=/^\{.*\}$/,W0=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Q0=/^<([^ >]+@[^ >]+)>/,G0=/^<([^ >]+:\/[^ >]+)>/,K0=/-([a-z])?/gi,tf=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,X0=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Y0=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q0=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z0=/(\[|\])/g,J0=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,b0=/\t/g,eh=/^ *\| */,th=/(^ *\||\| *$)/g,nh=/ *$/,rh=/^ *:-+: *$/,lh=/^ *:-+ *$/,ih=/^ *-+: *$/,oh=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,uh=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,sh=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,ah=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ch=/^\\([^0-9A-Za-z\s])/,dh=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,fh=/^\n+/,ph=/^([ \t]*)/,mh=/\\([^\\])/g,Hd=/ *\n+$/,hh=/(?:^|\n)( *)$/,Hu="(?:\\d+\\.)",Wu="(?:[*+-])";function nf(e){return"( *)("+(e===1?Hu:Wu)+") +"}var rf=nf(1),lf=nf(2);function of(e){return new RegExp("^"+(e===1?rf:lf))}var vh=of(1),gh=of(2);function uf(e){return new RegExp("^"+(e===1?rf:lf)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Hu:Wu)+" )[^\\n]*)*(\\n|$)","gm")}var sf=uf(1),af=uf(2);function cf(e){let t=e===1?Hu:Wu;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}var df=cf(1),ff=cf(2);function Wd(e,t){let n=t===1,r=n?df:ff,l=n?sf:af,i=n?vh:gh;return{match(o,u,s){let d=hh.exec(s);return d&&(u.list||!u.inline&&!u.simple)?r.exec(o=d[1]+o):null},order:1,parse(o,u,s){let d=n?+o[2]:void 0,v=o[0].replace(P0,`
`).match(l),g=!1;return{items:v.map(function(y,a){let h=i.exec(y)[0].length,p=new RegExp("^ {1,"+h+"}","gm"),_=y.replace(p,"").replace(i,""),f=a===v.length-1,c=_.indexOf(`

`)!==-1||f&&g;g=c;let m=s.inline,x=s.list,w;s.list=!0,c?(s.inline=!1,w=_.replace(Hd,`

`)):(s.inline=!0,w=_.replace(Hd,""));let C=u(w,s);return s.inline=m,s.list=x,C}),ordered:n,start:d}},render:(o,u,s)=>e(o.ordered?"ol":"ul",{key:s.key,start:o.type==="20"?o.start:void 0},o.items.map(function(d,v){return e("li",{key:v},u(d,s))}))}}var yh=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,xh=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,pf=[Xd,Yd,qd,Zd,bd,Jd,ef,tf,sf,df,af,ff],wh=[...pf,/^[^\n]+(?:  \n|\n{2,})/,$u,Vu];function Sh(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function kh(e){return ih.test(e)?"right":rh.test(e)?"center":lh.test(e)?"left":null}function Qd(e,t,n){let r=n.inTable;n.inTable=!0;let l=t(e.trim(),n);n.inTable=r;let i=[[]];return l.forEach(function(o,u){o.type==="26"?u!==0&&u!==l.length-1&&i.push([]):(o.type!=="27"||l[u+1]!=null&&l[u+1].type!=="26"||(o.text=o.text.replace(nh,"")),i[i.length-1].push(o))}),i}function Ch(e,t,n){n.inline=!0;let r=Qd(e[1],t,n),l=e[2].replace(th,"").split("|").map(kh),i=function(o,u,s){return o.trim().split(`
`).map(function(d){return Qd(d,u,s)})}(e[3],t,n);return n.inline=!1,{align:l,cells:i,header:r,type:"25"}}function Gd(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function jt(e){return function(t,n){return n.inline?e.exec(t):null}}function Dt(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function ht(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Rr(e){return function(t){return e.exec(t)}}function Eh(e,t,n){if(t.inline||t.simple||n&&!n.endsWith(`
`))return null;let r="";e.split(`
`).every(i=>!pf.some(o=>o.test(i))&&(r+=i+`
`,i.trim()));let l=r.trimEnd();return l==""?null:[r,l]}function Dn(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return}catch(t){return null}return e}function Kd(e){return e.replace(mh,"$1")}function ui(e,t,n){let r=n.inline||!1,l=n.simple||!1;n.inline=!0,n.simple=!0;let i=e(t,n);return n.inline=r,n.simple=l,i}function _h(e,t,n){let r=n.inline||!1,l=n.simple||!1;n.inline=!1,n.simple=!0;let i=e(t,n);return n.inline=r,n.simple=l,i}function Nh(e,t,n){return n.inline=!1,e(t,n)}var ju=(e,t,n)=>({children:ui(t,e[1],n)});function Du(){return{}}function Au(){return null}function Ih(...e){return e.filter(Boolean).join(" ")}function Uu(e,t,n){let r=e,l=t.split(".");for(;l.length&&(r=r[l[0]],r!==void 0);)l.shift();return r||n}function zh(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||Sh,t.namedCodesToUnicode=t.namedCodesToUnicode?nn({},Vd,t.namedCodesToUnicode):Vd;let n=t.createElement||An.createElement;function r(a,h,...p){let _=Uu(t.overrides,`${a}.props`,{});return n(function(f,c){let m=Uu(c,f);return m?typeof m=="function"||typeof m=="object"&&"render"in m?m:Uu(c,`${f}.component`,f):f}(a,t.overrides),nn({},h,_,{className:Ih(h==null?void 0:h.className,_.className)||void 0}),...p)}function l(a){a=a.replace(A0,"");let h=!1;t.forceInline?h=!0:t.forceBlock||(h=J0.test(a)===!1);let p=v(d(h?a:`${a.trimEnd().replace(fh,"")}

`,{inline:h}));for(;typeof p[p.length-1]=="string"&&!p[p.length-1].trim();)p.pop();if(t.wrapper===null)return p;let _=t.wrapper||(h?"span":"div"),f;if(p.length>1||t.forceWrapper)f=p;else{if(p.length===1)return f=p[0],typeof f=="string"?r("span",{key:"outer"},f):f;f=null}return An.createElement(_,{key:"outer"},f)}function i(a){let h=a.match(I0);return h?h.reduce(function(p,_,f){let c=_.indexOf("=");if(c!==-1){let m=function(k){return k.indexOf("-")!==-1&&k.match(V0)===null&&(k=k.replace(K0,function(E,I){return I.toUpperCase()})),k}(_.slice(0,c)).trim(),x=function(k){let E=k[0];return(E==='"'||E==="'")&&k.length>=2&&k[k.length-1]===E?k.slice(1,-1):k}(_.slice(c+1).trim()),w=$d[m]||m,C=p[w]=function(k,E){return k==="style"?E.split(/;\s?/).reduce(function(I,z){let L=z.slice(0,z.indexOf(":"));return I[L.replace(/(-[a-z])/g,ke=>ke[1].toUpperCase())]=z.slice(L.length+1).trim(),I},{}):k==="href"||k==="src"?Dn(E):(E.match(H0)&&(E=E.slice(1,E.length-1)),E==="true"||E!=="false"&&E)}(m,x);typeof C=="string"&&($u.test(C)||Vu.test(C))&&(p[w]=An.cloneElement(l(C.trim()),{key:f}))}else _!=="style"&&(p[$d[_]||_]=!0);return p},{}):null}let o=[],u={},s={0:{match:ht(Xd),order:1,parse:(a,h,p)=>({children:h(a[0].replace(T0,""),p)}),render:(a,h,p)=>r("blockquote",{key:p.key},h(a.children,p))},1:{match:Rr(L0),order:1,parse:Du,render:(a,h,p)=>r("br",{key:p.key})},2:{match:ht(F0),order:1,parse:Du,render:(a,h,p)=>r("hr",{key:p.key})},3:{match:ht(qd),order:0,parse:a=>({lang:void 0,text:a[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(a,h,p)=>r("pre",{key:p.key},r("code",nn({},a.attrs,{className:a.lang?`lang-${a.lang}`:""}),a.text))},4:{match:ht(Yd),order:0,parse:a=>({attrs:i(a[3]||""),lang:a[2]||void 0,text:a[4],type:"3"})},5:{match:Dt(R0),order:3,parse:a=>({text:a[2]}),render:(a,h,p)=>r("code",{key:p.key},a.text)},6:{match:ht(O0),order:0,parse:a=>(o.push({footnote:a[2],identifier:a[1]}),{}),render:Au},7:{match:jt(j0),order:1,parse:a=>({target:`#${t.slugify(a[1])}`,text:a[1]}),render:(a,h,p)=>r("a",{key:p.key,href:Dn(a.target)},r("sup",{key:p.key},a.text))},8:{match:jt(U0),order:1,parse:a=>({completed:a[1].toLowerCase()==="x"}),render:(a,h,p)=>r("input",{checked:a.completed,key:p.key,readOnly:!0,type:"checkbox"})},9:{match:ht(t.enforceAtxHeadings?Jd:Zd),order:1,parse:(a,h,p)=>({children:ui(h,a[2],p),id:t.slugify(a[2]),level:a[1].length}),render:(a,h,p)=>r(`h${a.level}`,{id:a.id,key:p.key},h(a.children,p))},10:{match:ht(bd),order:0,parse:(a,h,p)=>({children:ui(h,a[1],p),level:a[2]==="="?1:2,type:"9"})},11:{match:Rr($u),order:1,parse(a,h,p){let[,_]=a[3].match(ph),f=new RegExp(`^${_}`,"gm"),c=a[3].replace(f,""),m=(x=c,wh.some(E=>E.test(x))?Nh:ui);var x;let w=a[1].toLowerCase(),C=N0.indexOf(w)!==-1,k={attrs:i(a[2]),noInnerParse:C,tag:C?w:a[1]};return p.inAnchor=p.inAnchor||w==="a",C?k.text=a[3]:k.children=m(h,c,p),p.inAnchor=!1,k},render:(a,h,p)=>r(a.tag,nn({key:p.key},a.attrs),a.text||h(a.children,p))},13:{match:Rr(Vu),order:1,parse:a=>({attrs:i(a[2]||""),tag:a[1]}),render:(a,h,p)=>r(a.tag,nn({},a.attrs,{key:p.key}))},12:{match:Rr(ef),order:1,parse:()=>({}),render:Au},14:{match:Dt(xh),order:1,parse:a=>({alt:a[1],target:Kd(a[2]),title:a[3]}),render:(a,h,p)=>r("img",{key:p.key,alt:a.alt||void 0,title:a.title||void 0,src:Dn(a.target)})},15:{match:jt(yh),order:3,parse:(a,h,p)=>({children:_h(h,a[1],p),target:Kd(a[2]),title:a[3]}),render:(a,h,p)=>r("a",{key:p.key,href:Dn(a.target),title:a.title},h(a.children,p))},16:{match:jt(G0),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],type:"15"})},17:{match:(a,h)=>h.inAnchor?null:jt(W0)(a,h),order:0,parse:a=>({children:[{text:a[1],type:"27"}],target:a[1],title:void 0,type:"15"})},18:{match:jt(Q0),order:0,parse(a){let h=a[1],p=a[1];return z0.test(p)||(p="mailto:"+p),{children:[{text:h.replace("mailto:",""),type:"27"}],target:p,type:"15"}}},20:Wd(r,1),33:Wd(r,2),19:{match:ht(B0),order:3,parse:Du,render:()=>`
`},21:{match:Eh,order:3,parse:ju,render:(a,h,p)=>r("p",{key:p.key},h(a.children,p))},22:{match:jt(X0),order:0,parse:a=>(u[a[1]]={target:a[2],title:a[4]},{}),render:Au},23:{match:Dt(Y0),order:0,parse:a=>({alt:a[1]||void 0,ref:a[2]}),render:(a,h,p)=>r("img",{key:p.key,alt:a.alt,src:Dn(u[a.ref].target),title:u[a.ref].title})},24:{match:jt(q0),order:0,parse:(a,h,p)=>({children:h(a[1],p),fallbackChildren:h(a[0].replace(Z0,"\\$1"),p),ref:a[2]}),render:(a,h,p)=>u[a.ref]?r("a",{key:p.key,href:Dn(u[a.ref].target),title:u[a.ref].title},h(a.children,p)):r("span",{key:p.key},h(a.fallbackChildren,p))},25:{match:ht(tf),order:1,parse:Ch,render:(a,h,p)=>r("table",{key:p.key},r("thead",null,r("tr",null,a.header.map(function(_,f){return r("th",{key:f,style:Gd(a,f)},h(_,p))}))),r("tbody",null,a.cells.map(function(_,f){return r("tr",{key:f},_.map(function(c,m){return r("td",{key:m,style:Gd(a,m)},h(c,p))}))})))},26:{match:function(a,h){return h.inTable?(h.inline=!0,eh.exec(a)):null},order:1,parse:function(){return{type:"26"}},render:()=>" | "},27:{match:Rr(dh),order:4,parse:a=>({text:a[0].replace($0,(h,p)=>t.namedCodesToUnicode[p]?t.namedCodesToUnicode[p]:h)}),render:a=>a.text},28:{match:Dt(oh),order:2,parse:(a,h,p)=>({children:h(a[2],p)}),render:(a,h,p)=>r("strong",{key:p.key},h(a.children,p))},29:{match:Dt(uh),order:3,parse:(a,h,p)=>({children:h(a[2],p)}),render:(a,h,p)=>r("em",{key:p.key},h(a.children,p))},30:{match:Dt(ch),order:1,parse:a=>({text:a[1],type:"27"})},31:{match:Dt(sh),order:3,parse:ju,render:(a,h,p)=>r("mark",{key:p.key},h(a.children,p))},32:{match:Dt(ah),order:3,parse:ju,render:(a,h,p)=>r("del",{key:p.key},h(a.children,p))}};t.disableParsingRawHTML===!0&&(delete s[11],delete s[13]);let d=function(a){let h=Object.keys(a);function p(_,f){let c=[],m="";for(;_;){let x=0;for(;x<h.length;){let w=h[x],C=a[w],k=C.match(_,f,m);if(k){let E=k[0];_=_.substring(E.length);let I=C.parse(k,p,f);I.type==null&&(I.type=w),c.push(I),m=E;break}x++}}return c}return h.sort(function(_,f){let c=a[_].order,m=a[f].order;return c!==m?c-m:1}),function(_,f){return p(function(c){return c.replace(M0,`
`).replace(D0,"").replace(b0,"    ")}(_),f)}}(s),v=(g=function(a,h){return function(p,_,f){let c=a[p.type].render;return h?h(()=>c(p,_,f),p,_,f):c(p,_,f)}}(s,t.renderRule),function a(h,p={}){if(Array.isArray(h)){let _=p.key,f=[],c=!1;for(let m=0;m<h.length;m++){p.key=m;let x=a(h[m],p),w=typeof x=="string";w&&c?f[f.length-1]+=x:x!==null&&f.push(x),c=w}return p.key=_,f}return g(h,a,p)});var g;let y=l(e);return o.length?r("div",null,y,r("footer",{key:"footer"},o.map(function(a){return r("div",{id:t.slugify(a.identifier),key:a.identifier},a.identifier,v(d(a.footnote,{inline:!0})))}))):y}var mf=e=>{let{children:t,options:n}=e,r=function(l,i){if(l==null)return{};var o,u,s={},d=Object.keys(l);for(u=0;u<d.length;u++)i.indexOf(o=d[u])>=0||(s[o]=l[o]);return s}(e,_0);return An.cloneElement(zh(t,n),r)};var re=P(X()),Hf=P(he()),B=P(X()),Ye=P(he()),Wf=P(gf()),ln=P(X()),R=P(X()),At=P(X());var Gh={baseline:"vuiFlexContainer--alignItemsBaseline",center:"vuiFlexContainer--alignItemsCenter",end:"vuiFlexContainer--alignItemsEnd",start:"vuiFlexContainer--alignItemsStart",stretch:"vuiFlexContainer--alignItemsStretch"},Kh={column:"vuiFlexContainer--directionColumn",columnReverse:"vuiFlexContainer--directionColumnReverse",row:"vuiFlexContainer--directionRow",rowReverse:"vuiFlexContainer--directionRowReverse"},Xh={center:"vuiFlexContainer--justifyContentCenter",end:"vuiFlexContainer--justifyContentEnd",start:"vuiFlexContainer--justifyContentStart",spaceAround:"vuiFlexContainer--justifyContentSpaceAround",spaceBetween:"vuiFlexContainer--justifyContentSpaceBetween",spaceEvenly:"vuiFlexContainer--justifyContentSpaceEvenly"},Yh={none:"vuiFlexContainer--spacingNone",xxs:"vuiFlexContainer--spacingXxs",xs:"vuiFlexContainer--spacingXs",s:"vuiFlexContainer--spacingS",m:"vuiFlexContainer--spacingM",l:"vuiFlexContainer--spacingL",xl:"vuiFlexContainer--spacingXl",xxl:"vuiFlexContainer--spacingXxl"},rt=d=>{var v=d,{children:e,alignItems:t="stretch",direction:n="row",justifyContent:r="start",spacing:l="m",wrap:i,className:o,fullWidth:u}=v,s=lt(v,["children","alignItems","direction","justifyContent","spacing","wrap","className","fullWidth"]);let g=(0,kf.default)(o,"vuiFlexContainer",Gh[t],Kh[n],Xh[r],Yh[l],{"vuiFlexContainer--wrap":i,"vuiFlexContainer--fullWidth":u});return(0,Cf.jsx)("div",ce(j({className:g},s),{children:e}))},qh={baseline:"vuiFlexItem--alignItemsBaseline",center:"vuiFlexItem--alignItemsCenter",end:"vuiFlexItem--alignItemsEnd",start:"vuiFlexItem--alignItemsStart",stretch:"vuiFlexItem--alignItemsStretch"},Pe=s=>{var d=s,{children:e,grow:t,shrink:n,basis:r="auto",alignItems:l="stretch",className:i,truncate:o}=d,u=lt(d,["children","grow","shrink","basis","alignItems","className","truncate"]);let v=t===!1,g=n===!1,y=(0,Ef.default)("vuiFlexItem",`vuiFlexItem--${r}`,qh[l],{[`vuiFlexItem--flexGrow${t}`]:typeof t=="number","vuiFlexItem--flexGrowNone":v,[`vuiFlexItem--flexShrink${n}`]:typeof n=="number","vuiFlexItem--flexShrinkNone":g,"vuiFlexItem--truncate":o},i);return(0,_f.jsx)("div",ce(j({className:y},u),{children:e}))},si=0,yf=()=>(si===Number.MAX_SAFE_INTEGER?si=0:si++,si.toString()),Zh=({size:e,color:t})=>(0,T.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 329.26933 329",width:e,height:e,fill:t,children:(0,T.jsx)("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"})}),Jh=({size:e="16px",color:t="#ffffff"})=>(0,T.jsxs)("svg",{fill:t,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:e,height:e,viewBox:"0 0 29.75 29.75",xmlSpace:"preserve",children:[(0,T.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,T.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,T.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,T.jsxs)("g",{children:[" ",(0,T.jsxs)("g",{children:[" ",(0,T.jsx)("path",{d:"M26.573,4.026H5.163c-1.884,0-3.413,1.707-3.413,3.321v12.976c0,0.001,0,0.002,0,0.003l-0.004-0.003L0,25.724l4.913-2.717 c0.084,0.004,0.164,0.02,0.25,0.02h21.41c1.884,0,3.177-1.09,3.177-2.703V7.347C29.75,5.733,28.457,4.026,26.573,4.026z M27.75,20.323c0,0.538-0.548,0.703-1.177,0.703H5.163c-0.629,0-1.413-0.165-1.413-0.703V7.347c0-0.539,0.784-1.321,1.413-1.321 h21.41c0.629,0,1.177,0.782,1.177,1.321V20.323z"})," ",(0,T.jsxs)("g",{children:[" ",(0,T.jsx)("circle",{cx:"9.274",cy:"13.526",r:"1.874"})," ",(0,T.jsx)("circle",{cx:"15.657",cy:"13.526",r:"1.874"})," ",(0,T.jsx)("circle",{cx:"22.04",cy:"13.526",r:"1.874"})," "]})," "]})," "]})," "]})]}),bh=()=>(0,T.jsxs)("svg",{fill:"#c41535",width:"16px",height:"16px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",stroke:"#c41535",strokeWidth:"20",children:[(0,T.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,T.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,T.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,T.jsx)("path",{d:"M520.741 163.801a10.234 10.234 0 00-3.406-3.406c-4.827-2.946-11.129-1.421-14.075 3.406L80.258 856.874a10.236 10.236 0 00-1.499 5.335c0 5.655 4.585 10.24 10.24 10.24h846.004c1.882 0 3.728-.519 5.335-1.499 4.827-2.946 6.352-9.248 3.406-14.075L520.742 163.802zm43.703-26.674L987.446 830.2c17.678 28.964 8.528 66.774-20.436 84.452a61.445 61.445 0 01-32.008 8.996H88.998c-33.932 0-61.44-27.508-61.44-61.44a61.445 61.445 0 018.996-32.008l423.002-693.073c17.678-28.964 55.488-38.113 84.452-20.436a61.438 61.438 0 0120.436 20.436zM512 778.24c22.622 0 40.96-18.338 40.96-40.96s-18.338-40.96-40.96-40.96-40.96 18.338-40.96 40.96 18.338 40.96 40.96 40.96zm0-440.32c-22.622 0-40.96 18.338-40.96 40.96v225.28c0 22.622 18.338 40.96 40.96 40.96s40.96-18.338 40.96-40.96V378.88c0-22.622-18.338-40.96-40.96-40.96z"})})]}),ev=()=>(0,T.jsxs)("svg",{width:"10px",height:"10px",viewBox:"-5.5 0 26 26",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#2c313a",children:[(0,T.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,T.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,T.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,T.jsx)("title",{children:"chevron-right"})," ",(0,T.jsx)("desc",{children:"Created with Sketch Beta."})," ",(0,T.jsx)("defs",{children:" "})," ",(0,T.jsxs)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[" ",(0,T.jsxs)("g",{id:"Icon-Set-Filled",transform:"translate(-474.000000, -1196.000000)",fill:"#2c313a",children:[" ",(0,T.jsx)("path",{d:"M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36",id:"chevron-right",children:" "})," "]})," "]})," "]})]}),tv=()=>(0,T.jsxs)("svg",{width:"10px",height:"10px",viewBox:"0 -4.5 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#2c313a",children:[(0,T.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,T.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,T.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,T.jsx)("title",{children:"chevron-down"})," ",(0,T.jsx)("desc",{children:"Created with Sketch Beta."})," ",(0,T.jsx)("defs",{children:" "})," ",(0,T.jsxs)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[" ",(0,T.jsxs)("g",{id:"Icon-Set-Filled",transform:"translate(-574.000000, -1201.000000)",fill:"#2c313a",children:[" ",(0,T.jsx)("path",{d:"M597.405,1201.63 C596.576,1200.8 595.23,1200.8 594.401,1201.63 L586.016,1210.88 L577.63,1201.63 C576.801,1200.8 575.455,1200.8 574.626,1201.63 C573.797,1202.46 573.797,1203.81 574.626,1204.64 L584.381,1215.4 C584.83,1215.85 585.429,1216.05 586.016,1216.01 C586.603,1216.05 587.201,1215.85 587.65,1215.4 L597.405,1204.64 C598.234,1203.81 598.234,1202.46 597.405,1201.63",id:"chevron-down",children:" "})," "]})," "]})," "]})]}),nv=i=>{var o=i,{header:e,children:t,isOpen:n,setIsOpen:r}=o,l=lt(o,["header","children","isOpen","setIsOpen"]);let u=yf(),s=yf();return(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)("button",ce(j({className:"vuiAccordionHeader",onClick:()=>r(!n),id:u,"aria-controls":s,"aria-expanded":n},l),{children:(0,Ae.jsxs)(rt,{alignItems:"center",justifyContent:"start",spacing:"xxs",children:[(0,Ae.jsx)(Pe,{grow:!1,shrink:!1,children:n?(0,Ae.jsx)(tv,{}):(0,Ae.jsx)(ev,{})}),(0,Ae.jsx)(Pe,{className:"vuiAccordionHeader__title",grow:1,children:e})]})})),n&&(0,Ae.jsx)("div",{id:s,"aria-labelledby":u,children:t})]})},rv=e=>e?{rel:"noopener",referrerpolicy:"no-referrer-when-downgrade"}:{rel:"noopener"},lv={left:"vuiBaseButton--alignLeft",center:"vuiBaseButton--alignCenter",right:"vuiBaseButton--alignRight"},Pf=(0,zf.forwardRef)((c,f)=>{var m=c,{children:e,icon:t,iconSide:n="left",align:r="center",className:l,size:i,fullWidth:o,onClick:u,tabIndex:s,isInert:d,isDisabled:v,href:g,target:y,track:a,htmlFor:h,isSubmit:p}=m,_=lt(m,["children","icon","iconSide","align","className","size","fullWidth","onClick","tabIndex","isInert","isDisabled","href","target","track","htmlFor","isSubmit"]);let x=(0,Yu.default)("vuiBaseButton",l,`vuiBaseButton--${i}`,lv[r],{"vuiBaseButton-isInert":d,"vuiBaseButton-isDisabled":v,"vuiBaseButton--fullWidth":o,[`vuiBaseButton--${n}`]:!!t&&!!e}),w=t?(0,on.jsx)("span",{className:"vuiBaseButtonIconContainer",children:t}):null;if(h)return(0,on.jsxs)("label",ce(j({htmlFor:h,className:x,tabIndex:s},_),{children:[w,e]}));if(g){let k=(0,Yu.default)("vuiBaseButtonLinkWrapper",{"vuiBaseButtonLinkWrapper--fullWidth":o});return(0,on.jsx)("a",ce(j(j({className:k,href:g,onClick:u,target:y,tabIndex:s},_),rv(a)),{children:(0,on.jsxs)("button",{className:x,tabIndex:-1,ref:f,children:[w,e]})}))}let C=j({onClick:u,tabIndex:s,type:p?"submit":"button"},_);return(0,on.jsxs)("button",ce(j({className:x},C),{ref:f,children:[w,e]}))}),iv={xs:"xs",s:"xs",m:"s",l:"m"},ov={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},Lf=(e,t,n,r=ov)=>e?(0,Tf.cloneElement)(e,{size:t?iv[t]:"s",color:e.props.color==="inherit"?r[n]:e.props.color}):null,uv={accent:"empty",primary:"empty",success:"empty",danger:"empty",warning:"empty",neutral:"neutral",subdued:"subdued"},sv=(0,Nf.forwardRef)((d,s)=>{var v=d,{children:e,icon:t,color:n,size:r="m",className:l,isSelected:i,isDisabled:o}=v,u=lt(v,["children","icon","color","size","className","isSelected","isDisabled"]);let g=(0,If.default)(l,"vuiButtonPrimary",`vuiButtonPrimary--${n}`,{"vuiButtonPrimary-isSelected":i}),y=Lf(t,r,n,uv);return(0,Ff.jsx)(Pf,ce(j({ref:s,className:g,icon:y,size:r,isDisabled:o},u),{children:e}))}),av={accent:"accent",primary:"primary",success:"success",danger:"danger",warning:"warning",neutral:"neutral",subdued:"subdued"},cv=(0,Rf.forwardRef)((v,d)=>{var g=v,{children:e,icon:t,color:n,size:r="m",className:l,isSelected:i,isDisabled:o,solid:u}=g,s=lt(g,["children","icon","color","size","className","isSelected","isDisabled","solid"]);let y=(0,Bf.default)(l,"vuiButtonSecondary",`vuiButtonSecondary--${n}`,{"vuiButtonSecondary-isSelected":i,"vuiButtonSecondary--solid":u}),a=Lf(t,r,n,av);return(0,Mf.jsx)(Pf,ce(j({ref:d,className:y,icon:a,size:r,isDisabled:o},s),{children:e}))}),dv=s=>{var d=s,{className:e,size:t="m",value:n,onChange:r,placeholder:l,autoFocus:i,onSubmit:o}=d,u=lt(d,["className","size","value","onChange","placeholder","autoFocus","onSubmit"]);let v=(0,Of.default)("vuiSearchInput",`vuiSearchInput--${t}`,e);return(0,ai.jsx)("form",{onSubmit:o,children:(0,ai.jsx)("div",{className:v,children:(0,ai.jsx)("input",j({className:"vuiSearchInput__input",type:"text",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:i,placeholder:l,value:n,onChange:r},u))})})},qe=({size:e="m"})=>{let t=(0,jf.default)("vuiSpacer",{[`vuiSpacer--${e}`]:e});return(0,Df.jsx)("div",{className:t})},fv={xs:"vuiSpinner--xs",s:"vuiSpinner--s",m:"vuiSpinner--m",l:"vuiSpinner--l",xl:"vuiSpinner--xl",xxl:"vuiSpinner--xxl",xxxl:"vuiSpinner--xxxl"},pv=({color:e="accent",size:t="m"})=>{let n=(0,Af.default)("vuiSpinner",fv[t],`vuiSpinner--${e}`);return(0,Br.jsx)("span",{className:n,children:(0,Br.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 50 50",children:(0,Br.jsx)("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:(0,Br.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})},Vf=u=>{var s=u,{children:e,className:t,id:n,truncate:r,size:l="s",align:i}=s,o=lt(s,["children","className","id","truncate","size","align"]);let d=(0,Uf.default)("vuiText",`vuiText--${l}`,{[`vuiText--${i}`]:i,"vuiText--truncate":r},t);return(0,$f.jsx)("div",ce(j({className:d,id:n},o),{children:e}))},mv=({query:e,setQuery:t,onSubmit:n,placeholder:r,buttonLabel:l,isButtonDisabled:i,size:o})=>(0,rn.jsxs)(rt,{alignItems:"center",spacing:"xs",children:[(0,rn.jsx)(Pe,{grow:1,children:(0,rn.jsx)(dv,{size:o,value:e,onChange:u=>{t(u.target.value)},onSubmit:u=>{u.preventDefault(),n()},placeholder:r,autoFocus:!0,"data-testid":"queryInput"})}),(0,rn.jsx)(Pe,{children:(0,rn.jsx)(sv,{color:"primary",size:o,onClick:()=>n(),isDisabled:i,children:l})})]}),hv=(e,t)=>{let n=[],r=t.match(/\[\d+\]/g)||[],l=new Set;for(let i=0;i<r.length;i++){let o=r[i],u=Number(o.slice(1,o.length-1))-1;l.has(u)||(n.push(e[u]),l.add(u))}return n},vv=e=>{let t=/\[(\d+(,*\s*\d*)*)\]/g,n=[],r,l=0;for(;(r=t.exec(e))!==null;){let o=r.index,u=r[1],s=e.slice(l,o).trim();n.push({text:s,references:u.replace(/\s/g,"").split(",")}),l=o+r[0].length}let i=e.slice(l).trim();return i.length>0&&n.push({text:i}),n},gv=e=>{let t=e.match(/\[\d+\]/g)||[],n=[...new Set(t)],r={};return n.forEach((l,i)=>{r[l]=`[${i+1}]`}),e.replace(/\[\d+\]/g,l=>r[l])},yv=({searchResults:e,isOpen:t=!1,setIsOpen:n=()=>{}})=>(0,re.jsxs)(nv,{header:`Based on ${e.length} ${e.length===1?"fact":"facts"}`,isOpen:t,setIsOpen:n,children:[(0,re.jsx)(qe,{size:"s"}),e.map((r,l)=>(0,re.jsxs)("div",{children:[(0,re.jsx)(xv,{result:r,position:l}),l<e.length-1&&(0,re.jsx)(qe,{size:"s"})]},l))]}),xv=({result:e,position:t})=>{var n;let r=(n=e==null?void 0:e.snippet)==null?void 0:n.text,l=e==null?void 0:e.url;return(0,re.jsx)(re.Fragment,{children:(0,re.jsxs)(rt,{alignItems:"start",spacing:"s",children:[(0,re.jsx)(Pe,{grow:!1,shrink:!1,children:(0,re.jsx)("div",{className:"vrcbChatSearchResultPosition",children:t+1})}),(0,re.jsx)(Pe,{grow:1,shrink:1,children:(0,re.jsx)(Vf,{size:"s",children:(0,re.jsx)("p",{children:l?(0,re.jsx)("a",{href:l,target:"_blank",children:r}):r})})})]})})},wv=e=>vv(e).reduce((t,{text:n,references:r})=>(r?(t.push(n),n&&n[n.length-1]!==" "&&t.push(" "),r.forEach((l,i)=>{i>0&&t.push(" "),t.push(`<SummaryCitation reference={${l}} />`)})):t.push(n),t),[]).join(" "),xf=({question:e,answer:t,searchResults:n,onRetry:r,isStreaming:l})=>{let[i,o]=(0,Hf.useState)(!1),u;if(r)u=(0,B.jsxs)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--error",children:[(0,B.jsx)(qe,{size:"m"}),(0,B.jsxs)(rt,{alignItems:"center",spacing:"none",children:[(0,B.jsxs)(rt,{alignItems:"center",spacing:"xxs",children:[(0,B.jsx)(Pe,{grow:!1,shrink:!0,children:(0,B.jsx)(bh,{})}),(0,B.jsx)(Pe,{grow:!1,children:"Message not sent."})]}),r&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(qe,{size:"s"}),(0,B.jsx)(rt,{alignItems:"center",spacing:"none",children:(0,B.jsx)("button",{className:"vrcbRetryButton",onClick:()=>r(),children:"Try again"})})]})]})]});else if(t){let s=(n?hv(n,t):[]).slice(0,7),d=n?gv(t):t,v=wv(d);u=(0,B.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--answer",children:(0,B.jsxs)("div",{className:"vrcbChatMessage",children:[(0,B.jsxs)(Vf,{size:"s",children:[(0,B.jsx)(mf,{children:v,options:{forceInline:!0,overrides:{SummaryCitation:{component:({reference:g})=>(0,B.jsxs)(B.Fragment,{children:[" ",(0,B.jsx)("button",{onClick:()=>o(!0),children:(0,B.jsx)("span",{className:"vrcbChatSummaryCitation",children:g})})]})}}}}),l&&(0,B.jsxs)("span",{children:[" ",(0,B.jsx)(pv,{size:"xs"})]})]}),s&&s.length>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(qe,{size:"s"}),(0,B.jsx)(yv,{searchResults:s,isOpen:i,setIsOpen:o})]})]})})}return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--question",children:(0,B.jsx)("div",{className:"vrcbChatMessage",children:e})}),(0,B.jsx)(qe,{size:"xs"}),u]})},Sv=m=>un(void 0,[m],function*({filter:e,queryValue:t,language:n,summaryMode:r,rerank:l,rerankNumResults:i,rerankerId:o,rerankDiversityBias:u,hybridNumWords:s,hybridLambdaShort:d,hybridLambdaLong:v,summaryNumResults:g,summaryNumSentences:y,summaryPromptName:a,customerId:h,corpusId:p,endpoint:_,apiKey:f,chat:c}){let x=typeof t>"u"||t.trim().split(" ").length>s?v:d,w=p.split(",").map(L=>({customerId:h,corpusId:L,lexicalInterpolationConfig:{lambda:x},metadataFilter:e?`doc.source = '${e}'`:void 0})),C={query:[j(j({query:t,start:0,numResults:l?i:10,corpusKey:w,contextConfig:{sentencesBefore:r?y:2,sentencesAfter:r?y:2,startTag:qu,endTag:Zu}},r?{summary:[{responseLang:n,maxSummarizedResults:g,summarizerPromptName:a,chat:{store:!0,conversationId:c==null?void 0:c.conversationId}}]}:{}),l?{rerankingConfig:j({rerankerId:o},o===272725718?{mmrConfig:{diversityBias:u}}:{})}:{})]},k=`https://${_}/v1/query`,E=yield fetch(k,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","customer-id":h,"x-api-key":f,"grpc-timeout":"60S","x-source":"react-chatbot"},body:JSON.stringify(C)});if(E.status!==200)throw new Error(E.status.toString());let I=yield E.json(),z=I.responseSet[0].status;if(z.length>0&&z[0].code==="UNAUTHORIZED"&&console.log("UNAUTHORIZED access; check your API key and customer ID"),r){let L=I.responseSet[0].summary[0].status;if(L.length>0&&L[0].code==="BAD_REQUEST")throw new Error("BAD REQUEST: Too much text for the summarizer to summarize. Please try reducing the number of search results to summarize, or the context of each result by adjusting the 'summary_num_sentences', and 'summary_num_results' parameters respectively.");if(L.length>0&&L[0].code==="NOT_FOUND"&&L[0].statusDetail==="Failed to retrieve summarizer.")throw new Error(`BAD REQUEST: summarizer ${a} is invalid for this account.`)}return I.responseSet[0]}),qu="%START_SNIPPET%",Zu="%END_SNIPPET%",kv=e=>{if(!e)return;let t=[],{response:n,document:r}=e;return n.forEach(l=>{let{documentIndex:i,text:o}=l,{pre:u,post:s,text:d}=Ev(o),v=r[Number(i)],{id:g,metadata:y}=v,{source:a,url:h,title:p,metadata:_}=Cv(y);t.push({id:g,snippet:{pre:u,text:d,post:s},source:a,url:h,title:p,metadata:_})}),t},Cv=e=>{let t=_v(e);return{source:t.source,url:t.url,title:t.title||"Untitled",metadata:t}},Ev=e=>{let[t,n]=e.indexOf(qu)!==-1?e.split(qu):["",e],[r,l]=n.indexOf(Zu)!==-1?n.split(Zu):[n,""];return{pre:t,post:l,text:r}},_v=e=>{let t={};return e.forEach(n=>{t[n.name]=n.value}),t},Nv=(e,t,n,r=!0,l="eng")=>{let[i,o]=(0,Ye.useState)([]),u=(0,Ye.useRef)(""),[s,d]=(0,Ye.useState)(null),[v,g]=(0,Ye.useState)(!1),[y,a]=(0,Ye.useState)(!1),[h,p]=(0,Ye.useState)(null),[_,f]=(0,Ye.useState)(!1),c=k=>un(void 0,[k],function*({query:w,isRetry:C=!1}){if(v)return;C&&f(!1),d(null),u.current=w,d({id:"placeholder-message-id",question:w,answer:"",results:[]});let E={filter:"",queryValue:w,rerank:!0,rerankNumResults:7,rerankerId:272725718,rerankDiversityBias:.3,customerId:e,corpusId:t.join(","),endpoint:"api.vectara.io",apiKey:n};if(g(!0),r)try{yield(0,Wf.streamQuery)(ce(j({},E),{corpusIds:t,summaryNumResults:7,summaryNumSentences:3,summaryPromptName:"vectara-summary-ext-v1.2.0",language:l,chat:{store:!0,conversationId:h!=null?h:void 0}}),I=>x(I))}catch(I){console.log("Summary error",I),g(!1),f(!0);return}else try{let I=yield Sv(ce(j({},E),{hybridNumWords:2,hybridLambdaLong:0,hybridLambdaShort:.1,summaryMode:!0,summaryNumResults:7,summaryNumSentences:3,summaryPromptName:"vectara-summary-ext-v1.2.0",language:l,chat:{conversationId:h!=null?h:void 0}}));p(I.summary[0].chat.conversationId),o(z=>{var L,ke;return[...z,{id:I.summary[0].chat.turnId,question:u.current,answer:(L=I==null?void 0:I.summary[0].text)!=null?L:"",results:(ke=kv(I))!=null?ke:[]}]}),d(null),g(!1)}catch(I){console.log("Summary error",I),f(!0),g(!1);return}}),m=()=>{o([]),p(null)},x=({references:w,details:C,updatedText:k,isDone:E})=>{var I;k&&(a(!0),g(!1));let z=C==null?void 0:C.find(L=>L.type==="chat");z&&p((I=z.data.conversationId)!=null?I:null),E?a(!1):d(L=>{var ke;return{id:z?z.data.turnId:"",question:u.current,answer:k!=null?k:"",results:[...(ke=L==null?void 0:L.results)!=null?ke:[],...w!=null?w:[]]}})};return(0,Ye.useEffect)(()=>{!y&&s&&(o([...i,s]),d(null))},[y]),{sendMessage:c,activeMessage:s,messageHistory:i,isLoading:v,isStreamingResponse:y,startNewConversation:m,hasError:_}},Iv=()=>(0,ln.jsx)(ln.Fragment,{children:(0,ln.jsx)("div",{className:"vrcbChatMessageContainer vrcbChatMessageContainer--thinking",children:(0,ln.jsx)("div",{className:"vrcbChatMessage",children:(0,ln.jsx)("div",{className:"vrcbLoader"})})})}),zv={large:"l",medium:"m"},Pv=()=>(0,R.jsxs)(rt,{className:"vrcbEmptyMessages",spacing:"none",alignItems:"center",justifyContent:"center",direction:"column",children:[(0,R.jsx)(Jh,{size:"150px",color:"#000000"}),"Ask anything."]}),Tv=({customerId:e,corpusIds:t,apiKey:n,title:r="My Chatbot",placeholder:l="Chat with your AI Assistant",inputSize:i="large",emptyStateDisplay:o=(0,R.jsx)(Pv,{}),isInitiallyOpen:u,zIndex:s=9999,enableStreaming:d,language:v})=>{let[g,y]=(0,Se.useState)(u!=null?u:!1),[a,h]=(0,Se.useState)(""),{sendMessage:p,startNewConversation:_,messageHistory:f,isLoading:c,hasError:m,activeMessage:x,isStreamingResponse:w}=Nv(e,t,n,d,v),C=(0,Se.useRef)(null),k=(0,Se.useRef)(!0),E=()=>{setTimeout(()=>{var ae,Te;k.current&&((Te=C.current)==null||Te.scrollTo({left:0,top:(ae=C.current)==null?void 0:ae.scrollHeight,behavior:"smooth"}))},0)};(0,Se.useEffect)(()=>{u!==void 0&&y(u)},[u]),(0,Se.useEffect)(()=>{let ae=C.current,Te=()=>{let Ut=C.current?Math.abs(C.current.scrollHeight-C.current.clientHeight-C.current.scrollTop)<50:!0;k.current=Ut};return ae==null||ae.addEventListener("scroll",Te),()=>{ae==null||ae.removeEventListener("scroll",Te)}},[]);let I=(0,Se.useMemo)(()=>f.map((ae,Te)=>{let{question:Ut,answer:Kf,results:Xf}=ae,Yf=m&&Te===f.length-1?()=>p({query:Ut,isRetry:!0}):void 0;return(0,R.jsxs)(Se.Fragment,{children:[(0,R.jsx)(xf,{question:Ut,answer:Kf,searchResults:Xf,onRetry:Yf}),Te<f.length-1&&(0,R.jsx)(qe,{size:"m"})]},Te)}),[f]),z=c||f.length>0||x,L=c||w||a.trim().length===0,ke=()=>{L||(p({query:a}),h(""))},di=I.length===0?null:(0,R.jsx)(qe,{size:x?"m":"l"});return(0,Se.useEffect)(E,[c,x]),g?(0,R.jsxs)("div",{className:"vrcbChatbotWrapper",style:{zIndex:s},children:[(0,R.jsxs)(rt,{className:"vrcbHeader",spacing:"none",direction:"row",children:[(0,R.jsx)(Pe,{grow:1,alignItems:"center",children:r}),(0,R.jsx)(Pe,{alignItems:"center",children:(0,R.jsx)("button",{onClick:()=>y(!1),children:(0,R.jsx)(Zh,{size:"12px",color:"#2c313a"})})})]}),(0,R.jsxs)(rt,{direction:"column",spacing:"none",className:"vrcbChatbotInnerWrapper",children:[(0,R.jsx)(Pe,{className:"vrcbMessagesWrapper",basis:"fill",children:(0,R.jsx)("div",{ref:C,children:z?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(qe,{size:"xs"}),I,di,x&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(xf,{question:x.question,answer:x.answer,searchResults:x.results,onRetry:m?()=>p({query:x.question,isRetry:!0}):void 0,isStreaming:w}),(0,R.jsx)(qe,{size:"l"})]}),c&&(0,R.jsx)(Iv,{}),(0,R.jsx)(rt,{fullWidth:!0,justifyContent:"center",children:(0,R.jsx)(Pe,{children:(0,R.jsx)(cv,{color:"neutral",size:"xs",onClick:_,isDisabled:c,children:"Start new conversation"})})}),(0,R.jsx)(qe,{size:"l"})]}):o})}),(0,R.jsx)(Pe,{grow:!1,shrink:!1,className:"vrcbChatInputContainer",children:(0,R.jsx)(mv,{placeholder:l,buttonLabel:"Send",query:a,setQuery:h,isButtonDisabled:L,onSubmit:ke,size:zv[i]})})]})]}):(0,R.jsx)("button",{className:"vrcbChatbotButton",onClick:()=>y(!0),style:{zIndex:s},children:r})},wf=`:host {
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

.vuiSpinner {
  display: inline-block;
}

.vuiSpinner--accent svg path,
.vuiSpinner--accent svg rect {
  fill: #551edf;
}

.vuiSpinner--primary svg path,
.vuiSpinner--primary svg rect {
  fill: #264cd6;
}

.vuiSpinner--success svg path,
.vuiSpinner--success svg rect {
  fill: #04821f;
}

.vuiSpinner--danger svg path,
.vuiSpinner--danger svg rect {
  fill: #c41535;
}

.vuiSpinner--warning svg path,
.vuiSpinner--warning svg rect {
  fill: #965a15;
}

.vuiSpinner--empty svg path,
.vuiSpinner--empty svg rect {
  fill: #ffffff;
}

.vuiSpinner--dark svg path,
.vuiSpinner--dark svg rect {
  fill: #2c313a;
}

.vuiSpinner--xs {
  width: 14px;
  height: 14px;
}

.vuiSpinner--s {
  width: 15.9px;
  height: 15.9px;
}

.vuiSpinner--m {
  width: 20.08px;
  height: 20.08px;
}

.vuiSpinner--l {
  width: 48px;
  height: 48px;
}

.vuiSpinner--xl {
  width: 64px;
  height: 64px;
}

.vuiSpinner--xxl {
  width: 80px;
  height: 80px;
}

.vuiSpinner--xxxl {
  width: 100px;
  height: 100px;
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
}`,Lv=({customerId:e,apiKey:t,corpusIds:n,title:r,placeholder:l,inputSize:i,emptyStateDisplay:o,isInitiallyOpen:u,zIndex:s,enableStreaming:d=!0,language:v="eng"})=>(0,At.jsx)("div",{children:(0,At.jsx)(Tv,{customerId:e,corpusIds:n,apiKey:t,title:r,placeholder:l,inputSize:i,emptyStateDisplay:o,isInitiallyOpen:u,zIndex:s,enableStreaming:d,language:v})}),Fv=class extends HTMLElement{static get observedAttributes(){return["customerid","corpusids","apikey","title","placeholder","inputsize","isinitiallyopen","zindex","emptystatedisplayupdatetime","enablestreaming","language"]}constructor(){super(),this.sr=this.attachShadow({mode:"open"});try{this.sheet=new CSSStyleSheet,this.sheet.replaceSync(wf),this.sr.adoptedStyleSheets=[this.sheet]}catch(e){let t=document.createElement("style");t.innerText=wf,this.sr.appendChild(t)}this.mountPoint=document.createElement("div"),this.sr.appendChild(this.mountPoint)}setEmptyStateDisplay(e){this.emptyStateDisplay=e,this.setAttribute("emptystatedisplayupdatetime",Date.now().toString())}connectedCallback(){var e,t,n,r,l,i,o,u;let s=(e=this.getAttribute("customerId"))!=null?e:"",d=((t=this.getAttribute("corpusIds"))!=null?t:"").split(" "),v=(n=this.getAttribute("apiKey"))!=null?n:"",g=(r=this.getAttribute("title"))!=null?r:void 0,y=(l=this.getAttribute("placeholder"))!=null?l:void 0,a=(i=this.getAttribute("inputSize"))!=null?i:void 0,h=this.getAttribute("isInitiallyOpen")==="true",p=(o=this.emptyStateDisplay)!=null?o:void 0,_=this.getAttribute("zIndex")!==null?parseInt(this.getAttribute("zIndex")):void 0,f=this.getAttribute("enableStreaming")!==null?this.getAttribute("enableStreaming")=="true":void 0,c=(u=this.getAttribute("language"))!=null?u:void 0;Sf.render((0,At.jsx)(At.Fragment,{children:(0,At.jsx)(Lv,{customerId:s,corpusIds:d,apiKey:v,title:g,placeholder:y,inputSize:a,emptyStateDisplay:p,isInitiallyOpen:h,zIndex:_,enableStreaming:f,language:c})}),this.mountPoint)}attributeChangedCallback(){this.connectedCallback()}};window.customElements.get("react-chatbot")||window.customElements.define("react-chatbot",Fv);var Qf=e=>{let t=(0,ci.useRef)(null);(0,ci.useEffect)(()=>{t.current&&e.emptyStateDisplay&&t.current.setEmptyStateDisplay(e.emptyStateDisplay)},[e]);let n=e,r=Object.keys(e).reduce((l,i)=>(i==="emptyStateDisplay"||(i==="corpusIds"?l[i]=n.corpusIds.join(" "):l[i]=n[i]),l),{});return(0,At.jsx)("react-chatbot",j({ref:t},r))};var Mr=P(X()),Rv=e=>{let t=Gf.default.createRoot(document.getElementById(e.wrapperId)),n=e.emptyStateDisplay?(0,Mr.jsx)(Bv,{element:e.emptyStateDisplay}):void 0,r=ce(j({},e),{emptyStateDisplay:n});t.render((0,Mr.jsx)(Un.default.StrictMode,{children:(0,Mr.jsx)(Qf,j({},r))}))},Bv=({element:e})=>{let t=(0,Un.useRef)(null);return(0,Un.useEffect)(()=>{t!=null&&t.current&&t.current.appendChild(e)},[]),(0,Mr.jsx)("div",{ref:t})};window.vectara=ce(j({},window.vectara||{}),{renderChatbot:Rv});
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
