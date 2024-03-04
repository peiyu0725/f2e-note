(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const g of f)if(g.type==="childList")for(const p of g.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const g={};return f.integrity&&(g.integrity=f.integrity),f.referrerpolicy&&(g.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?g.credentials="include":f.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(f){if(f.ep)return;f.ep=!0;const g=c(f);fetch(f.href,g)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function id(o,a){const c=new Set(o.split(","));return a?u=>c.has(u.toLowerCase()):u=>c.has(u)}const wt={},us=[],Cn=()=>{},CP=()=>!1,Xa=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&(o.charCodeAt(2)>122||o.charCodeAt(2)<97),Wf=o=>o.startsWith("onUpdate:"),zt=Object.assign,Gf=(o,a)=>{const c=o.indexOf(a);c>-1&&o.splice(c,1)},AP=Object.prototype.hasOwnProperty,dt=(o,a)=>AP.call(o,a),Le=Array.isArray,hs=o=>Ds(o)==="[object Map]",xr=o=>Ds(o)==="[object Set]",y_=o=>Ds(o)==="[object Date]",yP=o=>Ds(o)==="[object RegExp]",Ue=o=>typeof o=="function",Nt=o=>typeof o=="string",Ii=o=>typeof o=="symbol",yt=o=>o!==null&&typeof o=="object",qf=o=>(yt(o)||Ue(o))&&Ue(o.then)&&Ue(o.catch),SA=Object.prototype.toString,Ds=o=>SA.call(o),xP=o=>Ds(o).slice(8,-1),DA=o=>Ds(o)==="[object Object]",Kf=o=>Nt(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,fs=id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rd=o=>{const a=Object.create(null);return c=>a[c]||(a[c]=o(c))},EP=/-(\w)/g,dn=rd(o=>o.replace(EP,(a,c)=>c?c.toUpperCase():"")),SP=/\B([A-Z])/g,Wn=rd(o=>o.replace(SP,"-$1").toLowerCase()),Er=rd(o=>o.charAt(0).toUpperCase()+o.slice(1)),Da=rd(o=>o?`on${Er(o)}`:""),bo=(o,a)=>!Object.is(o,a),gs=(o,a)=>{for(let c=0;c<o.length;c++)o[c](a)},Pc=(o,a,c)=>{Object.defineProperty(o,a,{configurable:!0,enumerable:!1,value:c})},Ra=o=>{const a=parseFloat(o);return isNaN(a)?o:a},Bc=o=>{const a=Nt(o)?Number(o):NaN;return isNaN(a)?o:a};let x_;const Yf=()=>x_||(x_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),DP="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",TP=id(DP);function Ts(o){if(Le(o)){const a={};for(let c=0;c<o.length;c++){const u=o[c],f=Nt(u)?PP(u):Ts(u);if(f)for(const g in f)a[g]=f[g]}return a}else if(Nt(o)||yt(o))return o}const IP=/;(?![^(]*\))/g,MP=/:([^]+)/,NP=/\/\*[^]*?\*\//g;function PP(o){const a={};return o.replace(NP,"").split(IP).forEach(c=>{if(c){const u=c.split(MP);u.length>1&&(a[u[0].trim()]=u[1].trim())}}),a}function Qn(o){let a="";if(Nt(o))a=o;else if(Le(o))for(let c=0;c<o.length;c++){const u=Qn(o[c]);u&&(a+=u+" ")}else if(yt(o))for(const c in o)o[c]&&(a+=c+" ");return a.trim()}function TA(o){if(!o)return null;let{class:a,style:c}=o;return a&&!Nt(a)&&(o.class=Qn(a)),c&&(o.style=Ts(c)),o}const BP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",LP=id(BP);function IA(o){return!!o||o===""}function zP(o,a){if(o.length!==a.length)return!1;let c=!0;for(let u=0;c&&u<o.length;u++)c=Mi(o[u],a[u]);return c}function Mi(o,a){if(o===a)return!0;let c=y_(o),u=y_(a);if(c||u)return c&&u?o.getTime()===a.getTime():!1;if(c=Ii(o),u=Ii(a),c||u)return o===a;if(c=Le(o),u=Le(a),c||u)return c&&u?zP(o,a):!1;if(c=yt(o),u=yt(a),c||u){if(!c||!u)return!1;const f=Object.keys(o).length,g=Object.keys(a).length;if(f!==g)return!1;for(const p in o){const v=o.hasOwnProperty(p),k=a.hasOwnProperty(p);if(v&&!k||!v&&k||!Mi(o[p],a[p]))return!1}}return String(o)===String(a)}function sd(o,a){return o.findIndex(c=>Mi(c,a))}const mn=o=>Nt(o)?o:o==null?"":Le(o)||yt(o)&&(o.toString===SA||!Ue(o.toString))?JSON.stringify(o,MA,2):String(o),MA=(o,a)=>a&&a.__v_isRef?MA(o,a.value):hs(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((c,[u,f],g)=>(c[Bh(u,g)+" =>"]=f,c),{})}:xr(a)?{[`Set(${a.size})`]:[...a.values()].map(c=>Bh(c))}:Ii(a)?Bh(a):yt(a)&&!Le(a)&&!DA(a)?String(a):a,Bh=(o,a="")=>{var c;return Ii(o)?`Symbol(${(c=o.description)!=null?c:a})`:o};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Un;class Qf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Un,!a&&Un&&(this.index=(Un.scopes||(Un.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const c=Un;try{return Un=this,a()}finally{Un=c}}}on(){Un=this}off(){Un=this.parent}stop(a){if(this._active){let c,u;for(c=0,u=this.effects.length;c<u;c++)this.effects[c].stop();for(c=0,u=this.cleanups.length;c<u;c++)this.cleanups[c]();if(this.scopes)for(c=0,u=this.scopes.length;c<u;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!a){const f=this.parent.scopes.pop();f&&f!==this&&(this.parent.scopes[this.index]=f,f.index=this.index)}this.parent=void 0,this._active=!1}}}function ad(o){return new Qf(o)}function NA(o,a=Un){a&&a.active&&a.effects.push(o)}function PA(){return Un}function An(o){Un&&Un.cleanups.push(o)}let fr;class vs{constructor(a,c,u,f){this.fn=a,this.trigger=c,this.scheduler=u,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,NA(this,f)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Bi();for(let a=0;a<this._depsLength;a++){const c=this.deps[a];if(c.computed&&(OP(c.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Li()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Di,c=fr;try{return Di=!0,fr=this,this._runnings++,E_(this),this.fn()}finally{S_(this),this._runnings--,fr=c,Di=a}}stop(){var a;this.active&&(E_(this),S_(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function OP(o){return o.value}function E_(o){o._trackId++,o._depsLength=0}function S_(o){if(o.deps.length>o._depsLength){for(let a=o._depsLength;a<o.deps.length;a++)BA(o.deps[a],o);o.deps.length=o._depsLength}}function BA(o,a){const c=o.get(a);c!==void 0&&a._trackId!==c&&(o.delete(a),o.size===0&&o.cleanup())}function RP(o,a){o.effect instanceof vs&&(o=o.effect.fn);const c=new vs(o,Cn,()=>{c.dirty&&c.run()});a&&(zt(c,a),a.scope&&NA(c,a.scope)),(!a||!a.lazy)&&c.run();const u=c.run.bind(c);return u.effect=c,u}function FP(o){o.effect.stop()}let Di=!0,rf=0;const LA=[];function Bi(){LA.push(Di),Di=!1}function Li(){const o=LA.pop();Di=o===void 0?!0:o}function Zf(){rf++}function Jf(){for(rf--;!rf&&sf.length;)sf.shift()()}function zA(o,a,c){if(a.get(o)!==o._trackId){a.set(o,o._trackId);const u=o.deps[o._depsLength];u!==a?(u&&BA(u,o),o.deps[o._depsLength++]=a):o._depsLength++}}const sf=[];function OA(o,a,c){Zf();for(const u of o.keys()){let f;u._dirtyLevel<a&&(f!=null?f:f=o.get(u)===u._trackId)&&(u._shouldSchedule||(u._shouldSchedule=u._dirtyLevel===0),u._dirtyLevel=a),u._shouldSchedule&&(f!=null?f:f=o.get(u)===u._trackId)&&(u.trigger(),(!u._runnings||u.allowRecurse)&&u._dirtyLevel!==2&&(u._shouldSchedule=!1,u.scheduler&&sf.push(u.scheduler)))}Jf()}const RA=(o,a)=>{const c=new Map;return c.cleanup=o,c.computed=a,c},Lc=new WeakMap,gr=Symbol(""),af=Symbol("");function On(o,a,c){if(Di&&fr){let u=Lc.get(o);u||Lc.set(o,u=new Map);let f=u.get(c);f||u.set(c,f=RA(()=>u.delete(c))),zA(fr,f)}}function Jo(o,a,c,u,f,g){const p=Lc.get(o);if(!p)return;let v=[];if(a==="clear")v=[...p.values()];else if(c==="length"&&Le(o)){const k=Number(u);p.forEach((C,y)=>{(y==="length"||!Ii(y)&&y>=k)&&v.push(C)})}else switch(c!==void 0&&v.push(p.get(c)),a){case"add":Le(o)?Kf(c)&&v.push(p.get("length")):(v.push(p.get(gr)),hs(o)&&v.push(p.get(af)));break;case"delete":Le(o)||(v.push(p.get(gr)),hs(o)&&v.push(p.get(af)));break;case"set":hs(o)&&v.push(p.get(gr));break}Zf();for(const k of v)k&&OA(k,4);Jf()}function VP(o,a){var c;return(c=Lc.get(o))==null?void 0:c.get(a)}const jP=id("__proto__,__v_isRef,__isVue"),FA=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(Ii)),D_=HP();function HP(){const o={};return["includes","indexOf","lastIndexOf"].forEach(a=>{o[a]=function(...c){const u=Ge(this);for(let g=0,p=this.length;g<p;g++)On(u,"get",g+"");const f=u[a](...c);return f===-1||f===!1?u[a](...c.map(Ge)):f}}),["push","pop","shift","unshift","splice"].forEach(a=>{o[a]=function(...c){Bi(),Zf();const u=Ge(this)[a].apply(this,c);return Jf(),Li(),u}}),o}function UP(o){const a=Ge(this);return On(a,"has",o),a.hasOwnProperty(o)}class VA{constructor(a=!1,c=!1){this._isReadonly=a,this._isShallow=c}get(a,c,u){const f=this._isReadonly,g=this._isShallow;if(c==="__v_isReactive")return!f;if(c==="__v_isReadonly")return f;if(c==="__v_isShallow")return g;if(c==="__v_raw")return u===(f?g?GA:WA:g?$A:UA).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(u)?a:void 0;const p=Le(a);if(!f){if(p&&dt(D_,c))return Reflect.get(D_,c,u);if(c==="hasOwnProperty")return UP}const v=Reflect.get(a,c,u);return(Ii(c)?FA.has(c):jP(c))||(f||On(a,"get",c),g)?v:Ot(v)?p&&Kf(c)?v:v.value:yt(v)?f?Is(v):cn(v):v}}class jA extends VA{constructor(a=!1){super(!1,a)}set(a,c,u,f){let g=a[c];if(!this._isShallow){const k=_r(g);if(!Fa(u)&&!_r(u)&&(g=Ge(g),u=Ge(u)),!Le(a)&&Ot(g)&&!Ot(u))return k?!1:(g.value=u,!0)}const p=Le(a)&&Kf(c)?Number(c)<a.length:dt(a,c),v=Reflect.set(a,c,u,f);return a===Ge(f)&&(p?bo(u,g)&&Jo(a,"set",c,u):Jo(a,"add",c,u)),v}deleteProperty(a,c){const u=dt(a,c);a[c];const f=Reflect.deleteProperty(a,c);return f&&u&&Jo(a,"delete",c,void 0),f}has(a,c){const u=Reflect.has(a,c);return(!Ii(c)||!FA.has(c))&&On(a,"has",c),u}ownKeys(a){return On(a,"iterate",Le(a)?"length":gr),Reflect.ownKeys(a)}}class HA extends VA{constructor(a=!1){super(!0,a)}set(a,c){return!0}deleteProperty(a,c){return!0}}const $P=new jA,WP=new HA,GP=new jA(!0),qP=new HA(!0),Xf=o=>o,ld=o=>Reflect.getPrototypeOf(o);function dc(o,a,c=!1,u=!1){o=o.__v_raw;const f=Ge(o),g=Ge(a);c||(bo(a,g)&&On(f,"get",a),On(f,"get",g));const{has:p}=ld(f),v=u?Xf:c?og:Va;if(p.call(f,a))return v(o.get(a));if(p.call(f,g))return v(o.get(g));o!==f&&o.get(a)}function uc(o,a=!1){const c=this.__v_raw,u=Ge(c),f=Ge(o);return a||(bo(o,f)&&On(u,"has",o),On(u,"has",f)),o===f?c.has(o):c.has(o)||c.has(f)}function hc(o,a=!1){return o=o.__v_raw,!a&&On(Ge(o),"iterate",gr),Reflect.get(o,"size",o)}function T_(o){o=Ge(o);const a=Ge(this);return ld(a).has.call(a,o)||(a.add(o),Jo(a,"add",o,o)),this}function I_(o,a){a=Ge(a);const c=Ge(this),{has:u,get:f}=ld(c);let g=u.call(c,o);g||(o=Ge(o),g=u.call(c,o));const p=f.call(c,o);return c.set(o,a),g?bo(a,p)&&Jo(c,"set",o,a):Jo(c,"add",o,a),this}function M_(o){const a=Ge(this),{has:c,get:u}=ld(a);let f=c.call(a,o);f||(o=Ge(o),f=c.call(a,o)),u&&u.call(a,o);const g=a.delete(o);return f&&Jo(a,"delete",o,void 0),g}function N_(){const o=Ge(this),a=o.size!==0,c=o.clear();return a&&Jo(o,"clear",void 0,void 0),c}function fc(o,a){return function(u,f){const g=this,p=g.__v_raw,v=Ge(p),k=a?Xf:o?og:Va;return!o&&On(v,"iterate",gr),p.forEach((C,y)=>u.call(f,k(C),k(y),g))}}function gc(o,a,c){return function(...u){const f=this.__v_raw,g=Ge(f),p=hs(g),v=o==="entries"||o===Symbol.iterator&&p,k=o==="keys"&&p,C=f[o](...u),y=c?Xf:a?og:Va;return!a&&On(g,"iterate",k?af:gr),{next(){const{value:x,done:A}=C.next();return A?{value:x,done:A}:{value:v?[y(x[0]),y(x[1])]:y(x),done:A}},[Symbol.iterator](){return this}}}}function bi(o){return function(...a){return o==="delete"?!1:o==="clear"?void 0:this}}function KP(){const o={get(g){return dc(this,g)},get size(){return hc(this)},has:uc,add:T_,set:I_,delete:M_,clear:N_,forEach:fc(!1,!1)},a={get(g){return dc(this,g,!1,!0)},get size(){return hc(this)},has:uc,add:T_,set:I_,delete:M_,clear:N_,forEach:fc(!1,!0)},c={get(g){return dc(this,g,!0)},get size(){return hc(this,!0)},has(g){return uc.call(this,g,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:fc(!0,!1)},u={get(g){return dc(this,g,!0,!0)},get size(){return hc(this,!0)},has(g){return uc.call(this,g,!0)},add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear"),forEach:fc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(g=>{o[g]=gc(g,!1,!1),c[g]=gc(g,!0,!1),a[g]=gc(g,!1,!0),u[g]=gc(g,!0,!0)}),[o,c,a,u]}const[YP,QP,ZP,JP]=KP();function cd(o,a){const c=a?o?JP:ZP:o?QP:YP;return(u,f,g)=>f==="__v_isReactive"?!o:f==="__v_isReadonly"?o:f==="__v_raw"?u:Reflect.get(dt(c,f)&&f in u?c:u,f,g)}const XP={get:cd(!1,!1)},eB={get:cd(!1,!0)},tB={get:cd(!0,!1)},nB={get:cd(!0,!0)},UA=new WeakMap,$A=new WeakMap,WA=new WeakMap,GA=new WeakMap;function oB(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iB(o){return o.__v_skip||!Object.isExtensible(o)?0:oB(xP(o))}function cn(o){return _r(o)?o:dd(o,!1,$P,XP,UA)}function eg(o){return dd(o,!1,GP,eB,$A)}function Is(o){return dd(o,!0,WP,tB,WA)}function rB(o){return dd(o,!0,qP,nB,GA)}function dd(o,a,c,u,f){if(!yt(o)||o.__v_raw&&!(a&&o.__v_isReactive))return o;const g=f.get(o);if(g)return g;const p=iB(o);if(p===0)return o;const v=new Proxy(o,p===2?u:c);return f.set(o,v),v}function mr(o){return _r(o)?mr(o.__v_raw):!!(o&&o.__v_isReactive)}function _r(o){return!!(o&&o.__v_isReadonly)}function Fa(o){return!!(o&&o.__v_isShallow)}function tg(o){return mr(o)||_r(o)}function Ge(o){const a=o&&o.__v_raw;return a?Ge(a):o}function ng(o){return Object.isExtensible(o)&&Pc(o,"__v_skip",!0),o}const Va=o=>yt(o)?cn(o):o,og=o=>yt(o)?Is(o):o;class qA{constructor(a,c,u,f){this.getter=a,this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vs(()=>a(this._value),()=>ms(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!f,this.__v_isReadonly=u}get value(){const a=Ge(this);return(!a._cacheable||a.effect.dirty)&&bo(a._value,a._value=a.effect.run())&&ms(a,4),ig(a),a.effect._dirtyLevel>=2&&ms(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function sB(o,a,c=!1){let u,f;const g=Ue(o);return g?(u=o,f=Cn):(u=o.get,f=o.set),new qA(u,f,g||!f,c)}function ig(o){var a;Di&&fr&&(o=Ge(o),zA(fr,(a=o.dep)!=null?a:o.dep=RA(()=>o.dep=void 0,o instanceof qA?o:void 0)))}function ms(o,a=4,c){o=Ge(o);const u=o.dep;u&&OA(u,a)}function Ot(o){return!!(o&&o.__v_isRef===!0)}function ze(o){return KA(o,!1)}function Fe(o){return KA(o,!0)}function KA(o,a){return Ot(o)?o:new aB(o,a)}class aB{constructor(a,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?a:Ge(a),this._value=c?a:Va(a)}get value(){return ig(this),this._value}set value(a){const c=this.__v_isShallow||Fa(a)||_r(a);a=c?a:Ge(a),bo(a,this._rawValue)&&(this._rawValue=a,this._value=c?a:Va(a),ms(this,4))}}function lB(o){ms(o,4)}function Ht(o){return Ot(o)?o.value:o}function cB(o){return Ue(o)?o():Ht(o)}const dB={get:(o,a,c)=>Ht(Reflect.get(o,a,c)),set:(o,a,c,u)=>{const f=o[a];return Ot(f)&&!Ot(c)?(f.value=c,!0):Reflect.set(o,a,c,u)}};function rg(o){return mr(o)?o:new Proxy(o,dB)}class uB{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:c,set:u}=a(()=>ig(this),()=>ms(this));this._get=c,this._set=u}get value(){return this._get()}set value(a){this._set(a)}}function YA(o){return new uB(o)}function ud(o){const a=Le(o)?new Array(o.length):{};for(const c in o)a[c]=QA(o,c);return a}class hB{constructor(a,c,u){this._object=a,this._key=c,this._defaultValue=u,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return VP(Ge(this._object),this._key)}}class fB{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function $e(o,a,c){return Ot(o)?o:Ue(o)?new fB(o):yt(o)&&arguments.length>1?QA(o,a,c):ze(o)}function QA(o,a,c){const u=o[a];return Ot(u)?u:new hB(o,a,c)}const gB={GET:"get",HAS:"has",ITERATE:"iterate"},mB={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ta=[];function sr(o,...a){Bi();const c=Ta.length?Ta[Ta.length-1].component:null,u=c&&c.appContext.config.warnHandler,f=pB();if(u)Oo(u,c,11,[o+a.map(g=>{var p,v;return(v=(p=g.toString)==null?void 0:p.call(g))!=null?v:JSON.stringify(g)}).join(""),c&&c.proxy,f.map(({vnode:g})=>`at <${Wy(c,g.type)}>`).join(`
`),f]);else{const g=[`[Vue warn]: ${o}`,...a];f.length&&g.push(`
`,...bB(f)),console.warn(...g)}Li()}function pB(){let o=Ta[Ta.length-1];if(!o)return[];const a=[];for(;o;){const c=a[0];c&&c.vnode===o?c.recurseCount++:a.push({vnode:o,recurseCount:0});const u=o.component&&o.component.parent;o=u&&u.vnode}return a}function bB(o){const a=[];return o.forEach((c,u)=>{a.push(...u===0?[]:[`
`],...kB(c))}),a}function kB({vnode:o,recurseCount:a}){const c=a>0?`... (${a} recursive calls)`:"",u=o.component?o.component.parent==null:!1,f=` at <${Wy(o.component,o.type,u)}`,g=">"+c;return o.props?[f,...vB(o.props),g]:[f+g]}function vB(o){const a=[],c=Object.keys(o);return c.slice(0,3).forEach(u=>{a.push(...ZA(u,o[u]))}),c.length>3&&a.push(" ..."),a}function ZA(o,a,c){return Nt(a)?(a=JSON.stringify(a),c?a:[`${o}=${a}`]):typeof a=="number"||typeof a=="boolean"||a==null?c?a:[`${o}=${a}`]:Ot(a)?(a=ZA(o,Ge(a.value),!0),c?a:[`${o}=Ref<`,a,">"]):Ue(a)?[`${o}=fn${a.name?`<${a.name}>`:""}`]:(a=Ge(a),c?a:[`${o}=`,a])}function wB(o,a){}const _B={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},CB={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Oo(o,a,c,u){try{return u?o(...u):o()}catch(f){Sr(f,a,c)}}function Yn(o,a,c,u){if(Ue(o)){const g=Oo(o,a,c,u);return g&&qf(g)&&g.catch(p=>{Sr(p,a,c)}),g}const f=[];for(let g=0;g<o.length;g++)f.push(Yn(o[g],a,c,u));return f}function Sr(o,a,c,u=!0){const f=a?a.vnode:null;if(a){let g=a.parent;const p=a.proxy,v=`https://vuejs.org/error-reference/#runtime-${c}`;for(;g;){const C=g.ec;if(C){for(let y=0;y<C.length;y++)if(C[y](o,p,v)===!1)return}g=g.parent}const k=a.appContext.config.errorHandler;if(k){Oo(k,null,10,[o,p,v]);return}}AB(o,c,f,u)}function AB(o,a,c,u=!0){console.error(o)}let ja=!1,lf=!1;const pn=[];let Bo=0;const ps=[];let Ci=null,ur=0;const JA=Promise.resolve();let sg=null;function Wt(o){const a=sg||JA;return o?a.then(this?o.bind(this):o):a}function yB(o){let a=Bo+1,c=pn.length;for(;a<c;){const u=a+c>>>1,f=pn[u],g=Ha(f);g<o||g===o&&f.pre?a=u+1:c=u}return a}function hd(o){(!pn.length||!pn.includes(o,ja&&o.allowRecurse?Bo+1:Bo))&&(o.id==null?pn.push(o):pn.splice(yB(o.id),0,o),XA())}function XA(){!ja&&!lf&&(lf=!0,sg=JA.then(ey))}function xB(o){const a=pn.indexOf(o);a>Bo&&pn.splice(a,1)}function zc(o){Le(o)?ps.push(...o):(!Ci||!Ci.includes(o,o.allowRecurse?ur+1:ur))&&ps.push(o),XA()}function P_(o,a,c=ja?Bo+1:0){for(;c<pn.length;c++){const u=pn[c];if(u&&u.pre){if(o&&u.id!==o.uid)continue;pn.splice(c,1),c--,u()}}}function Oc(o){if(ps.length){const a=[...new Set(ps)].sort((c,u)=>Ha(c)-Ha(u));if(ps.length=0,Ci){Ci.push(...a);return}for(Ci=a,ur=0;ur<Ci.length;ur++)Ci[ur]();Ci=null,ur=0}}const Ha=o=>o.id==null?1/0:o.id,EB=(o,a)=>{const c=Ha(o)-Ha(a);if(c===0){if(o.pre&&!a.pre)return-1;if(a.pre&&!o.pre)return 1}return c};function ey(o){lf=!1,ja=!0,pn.sort(EB);const a=Cn;try{for(Bo=0;Bo<pn.length;Bo++){const c=pn[Bo];c&&c.active!==!1&&Oo(c,null,14)}}finally{Bo=0,pn.length=0,Oc(),ja=!1,sg=null,(pn.length||ps.length)&&ey()}}let ls,mc=[];function ty(o,a){var c,u;ls=o,ls?(ls.enabled=!0,mc.forEach(({event:f,args:g})=>ls.emit(f,...g)),mc=[]):typeof window<"u"&&window.HTMLElement&&!((u=(c=window.navigator)==null?void 0:c.userAgent)!=null&&u.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(g=>{ty(g,a)}),setTimeout(()=>{ls||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,mc=[])},3e3)):mc=[]}function SB(o,a,...c){if(o.isUnmounted)return;const u=o.vnode.props||wt;let f=c;const g=a.startsWith("update:"),p=g&&a.slice(7);if(p&&p in u){const y=`${p==="modelValue"?"model":p}Modifiers`,{number:x,trim:A}=u[y]||wt;A&&(f=c.map(E=>Nt(E)?E.trim():E)),x&&(f=c.map(Ra))}let v,k=u[v=Da(a)]||u[v=Da(dn(a))];!k&&g&&(k=u[v=Da(Wn(a))]),k&&Yn(k,o,6,f);const C=u[v+"Once"];if(C){if(!o.emitted)o.emitted={};else if(o.emitted[v])return;o.emitted[v]=!0,Yn(C,o,6,f)}}function ny(o,a,c=!1){const u=a.emitsCache,f=u.get(o);if(f!==void 0)return f;const g=o.emits;let p={},v=!1;if(!Ue(o)){const k=C=>{const y=ny(C,a,!0);y&&(v=!0,zt(p,y))};!c&&a.mixins.length&&a.mixins.forEach(k),o.extends&&k(o.extends),o.mixins&&o.mixins.forEach(k)}return!g&&!v?(yt(o)&&u.set(o,null),null):(Le(g)?g.forEach(k=>p[k]=null):zt(p,g),yt(o)&&u.set(o,p),p)}function fd(o,a){return!o||!Xa(a)?!1:(a=a.slice(2).replace(/Once$/,""),dt(o,a[0].toLowerCase()+a.slice(1))||dt(o,Wn(a))||dt(o,a))}let Kt=null,gd=null;function Ua(o){const a=Kt;return Kt=o,gd=o&&o.type.__scopeId||null,a}function DB(o){gd=o}function TB(){gd=null}const IB=o=>at;function at(o,a=Kt,c){if(!a||o._n)return o;const u=(...f)=>{u._d&&pf(-1);const g=Ua(a);let p;try{p=o(...f)}finally{Ua(g),u._d&&pf(1)}return p};return u._n=!0,u._c=!0,u._d=!0,u}function Sc(o){const{type:a,vnode:c,proxy:u,withProxy:f,props:g,propsOptions:[p],slots:v,attrs:k,emit:C,render:y,renderCache:x,data:A,setupState:E,ctx:M,inheritAttrs:N}=o;let O,H;const R=Ua(o);try{if(c.shapeFlag&4){const U=f||u,D=U;O=$n(y.call(D,U,x,g,E,A,M)),H=k}else{const U=a;O=$n(U.length>1?U(g,{attrs:k,slots:v,emit:C}):U(g,null)),H=a.props?k:NB(k)}}catch(U){Na.length=0,Sr(U,o,1),O=L(un)}let B=O;if(H&&N!==!1){const U=Object.keys(H),{shapeFlag:D}=B;U.length&&D&7&&(p&&U.some(Wf)&&(H=PB(H,p)),B=vo(B,H))}return c.dirs&&(B=vo(B),B.dirs=B.dirs?B.dirs.concat(c.dirs):c.dirs),c.transition&&(B.transition=c.transition),O=B,Ua(R),O}function MB(o,a=!0){let c;for(let u=0;u<o.length;u++){const f=o[u];if(ei(f)){if(f.type!==un||f.children==="v-if"){if(c)return;c=f}}else return}return c}const NB=o=>{let a;for(const c in o)(c==="class"||c==="style"||Xa(c))&&((a||(a={}))[c]=o[c]);return a},PB=(o,a)=>{const c={};for(const u in o)(!Wf(u)||!(u.slice(9)in a))&&(c[u]=o[u]);return c};function BB(o,a,c){const{props:u,children:f,component:g}=o,{props:p,children:v,patchFlag:k}=a,C=g.emitsOptions;if(a.dirs||a.transition)return!0;if(c&&k>=0){if(k&1024)return!0;if(k&16)return u?B_(u,p,C):!!p;if(k&8){const y=a.dynamicProps;for(let x=0;x<y.length;x++){const A=y[x];if(p[A]!==u[A]&&!fd(C,A))return!0}}}else return(f||v)&&(!v||!v.$stable)?!0:u===p?!1:u?p?B_(u,p,C):!0:!!p;return!1}function B_(o,a,c){const u=Object.keys(a);if(u.length!==Object.keys(o).length)return!0;for(let f=0;f<u.length;f++){const g=u[f];if(a[g]!==o[g]&&!fd(c,g))return!0}return!1}function ag({vnode:o,parent:a},c){for(;a;){const u=a.subTree;if(u.suspense&&u.suspense.activeBranch===o&&(u.el=o.el),u===o)(o=a.vnode).el=c,a=a.parent;else break}}const lg="components",LB="directives";function cg(o,a){return dg(lg,o,!0,a)||o}const oy=Symbol.for("v-ndc");function iy(o){return Nt(o)?dg(lg,o,!1)||o:o||oy}function zi(o){return dg(LB,o)}function dg(o,a,c=!0,u=!1){const f=Kt||Qt;if(f){const g=f.type;if(o===lg){const v=Hc(g,!1);if(v&&(v===a||v===dn(a)||v===Er(dn(a))))return g}const p=L_(f[o]||g[o],a)||L_(f.appContext[o],a);return!p&&u?g:p}}function L_(o,a){return o&&(o[a]||o[dn(a)]||o[Er(dn(a))])}const ry=o=>o.__isSuspense;let cf=0;const zB={name:"Suspense",__isSuspense:!0,process(o,a,c,u,f,g,p,v,k,C){if(o==null)RB(a,c,u,f,g,p,v,k,C);else{if(g&&g.deps>0&&!o.suspense.isInFallback){a.suspense=o.suspense,a.suspense.vnode=a,a.el=o.el;return}FB(o,a,c,u,f,p,v,k,C)}},hydrate:VB,create:ug,normalize:jB},OB=zB;function $a(o,a){const c=o.props&&o.props[a];Ue(c)&&c()}function RB(o,a,c,u,f,g,p,v,k){const{p:C,o:{createElement:y}}=k,x=y("div"),A=o.suspense=ug(o,f,u,a,x,c,g,p,v,k);C(null,A.pendingBranch=o.ssContent,x,null,u,A,g,p),A.deps>0?($a(o,"onPending"),$a(o,"onFallback"),C(null,o.ssFallback,a,c,u,null,g,p),bs(A,o.ssFallback)):A.resolve(!1,!0)}function FB(o,a,c,u,f,g,p,v,{p:k,um:C,o:{createElement:y}}){const x=a.suspense=o.suspense;x.vnode=a,a.el=o.el;const A=a.ssContent,E=a.ssFallback,{activeBranch:M,pendingBranch:N,isInFallback:O,isHydrating:H}=x;if(N)x.pendingBranch=A,go(A,N)?(k(N,A,x.hiddenContainer,null,f,x,g,p,v),x.deps<=0?x.resolve():O&&(H||(k(M,E,c,u,f,null,g,p,v),bs(x,E)))):(x.pendingId=cf++,H?(x.isHydrating=!1,x.activeBranch=N):C(N,f,x),x.deps=0,x.effects.length=0,x.hiddenContainer=y("div"),O?(k(null,A,x.hiddenContainer,null,f,x,g,p,v),x.deps<=0?x.resolve():(k(M,E,c,u,f,null,g,p,v),bs(x,E))):M&&go(A,M)?(k(M,A,c,u,f,x,g,p,v),x.resolve(!0)):(k(null,A,x.hiddenContainer,null,f,x,g,p,v),x.deps<=0&&x.resolve()));else if(M&&go(A,M))k(M,A,c,u,f,x,g,p,v),bs(x,A);else if($a(a,"onPending"),x.pendingBranch=A,A.shapeFlag&512?x.pendingId=A.component.suspenseId:x.pendingId=cf++,k(null,A,x.hiddenContainer,null,f,x,g,p,v),x.deps<=0)x.resolve();else{const{timeout:R,pendingId:B}=x;R>0?setTimeout(()=>{x.pendingId===B&&x.fallback(E)},R):R===0&&x.fallback(E)}}function ug(o,a,c,u,f,g,p,v,k,C,y=!1){const{p:x,m:A,um:E,n:M,o:{parentNode:N,remove:O}}=C;let H;const R=HB(o);R&&a!=null&&a.pendingBranch&&(H=a.pendingId,a.deps++);const B=o.props?Bc(o.props.timeout):void 0,U=g,D={vnode:o,parent:a,parentComponent:c,namespace:p,container:u,hiddenContainer:f,deps:0,pendingId:cf++,timeout:typeof B=="number"?B:-1,activeBranch:null,pendingBranch:null,isInFallback:!y,isHydrating:y,isUnmounted:!1,effects:[],resolve(F=!1,z=!1){const{vnode:W,activeBranch:q,pendingBranch:Y,pendingId:te,effects:K,parentComponent:J,container:re}=D;let pe=!1;D.isHydrating?D.isHydrating=!1:F||(pe=q&&Y.transition&&Y.transition.mode==="out-in",pe&&(q.transition.afterLeave=()=>{te===D.pendingId&&(A(Y,re,g===U?M(q):g,0),zc(K))}),q&&(N(q.el)!==D.hiddenContainer&&(g=M(q)),E(q,J,D,!0)),pe||A(Y,re,g,0)),bs(D,Y),D.pendingBranch=null,D.isInFallback=!1;let oe=D.parent,_e=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...K),_e=!0;break}oe=oe.parent}!_e&&!pe&&zc(K),D.effects=[],R&&a&&a.pendingBranch&&H===a.pendingId&&(a.deps--,a.deps===0&&!z&&a.resolve()),$a(W,"onResolve")},fallback(F){if(!D.pendingBranch)return;const{vnode:z,activeBranch:W,parentComponent:q,container:Y,namespace:te}=D;$a(z,"onFallback");const K=M(W),J=()=>{!D.isInFallback||(x(null,F,Y,K,q,null,te,v,k),bs(D,F))},re=F.transition&&F.transition.mode==="out-in";re&&(W.transition.afterLeave=J),D.isInFallback=!0,E(W,q,null,!0),re||J()},move(F,z,W){D.activeBranch&&A(D.activeBranch,F,z,W),D.container=F},next(){return D.activeBranch&&M(D.activeBranch)},registerDep(F,z){const W=!!D.pendingBranch;W&&D.deps++;const q=F.vnode.el;F.asyncDep.catch(Y=>{Sr(Y,F,0)}).then(Y=>{if(F.isUnmounted||D.isUnmounted||D.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:te}=F;vf(F,Y,!1),q&&(te.el=q);const K=!q&&F.subTree.el;z(F,te,N(q||F.subTree.el),q?null:M(F.subTree),D,p,k),K&&O(K),ag(F,te.el),W&&--D.deps===0&&D.resolve()})},unmount(F,z){D.isUnmounted=!0,D.activeBranch&&E(D.activeBranch,c,F,z),D.pendingBranch&&E(D.pendingBranch,c,F,z)}};return D}function VB(o,a,c,u,f,g,p,v,k){const C=a.suspense=ug(a,u,c,o.parentNode,document.createElement("div"),null,f,g,p,v,!0),y=k(o,C.pendingBranch=a.ssContent,c,C,g,p);return C.deps===0&&C.resolve(!1,!0),y}function jB(o){const{shapeFlag:a,children:c}=o,u=a&32;o.ssContent=z_(u?c.default:c),o.ssFallback=u?z_(c.fallback):L(un)}function z_(o){let a;if(Ue(o)){const c=Ar&&o._c;c&&(o._d=!1,it()),o=o(),c&&(o._d=!0,a=zn,Oy())}return Le(o)&&(o=MB(o)),o=$n(o),a&&!o.dynamicChildren&&(o.dynamicChildren=a.filter(c=>c!==o)),o}function sy(o,a){a&&a.pendingBranch?Le(o)?a.effects.push(...o):a.effects.push(o):zc(o)}function bs(o,a){o.activeBranch=a;const{vnode:c,parentComponent:u}=o;let f=a.el;for(;!f&&a.component;)a=a.component.subTree,f=a.el;c.el=f,u&&u.subTree===c&&(u.vnode.el=f,ag(u,f))}function HB(o){var a;return((a=o.props)==null?void 0:a.suspensible)!=null&&o.props.suspensible!==!1}const ay=Symbol.for("v-scx"),ly=()=>pt(ay);function ko(o,a){return el(o,null,a)}function cy(o,a){return el(o,null,{flush:"post"})}function dy(o,a){return el(o,null,{flush:"sync"})}const pc={};function je(o,a,c){return el(o,a,c)}function el(o,a,{immediate:c,deep:u,flush:f,once:g,onTrack:p,onTrigger:v}=wt){if(a&&g){const F=a;a=(...z)=>{F(...z),D()}}const k=Qt,C=F=>u===!0?F:hr(F,u===!1?1:void 0);let y,x=!1,A=!1;if(Ot(o)?(y=()=>o.value,x=Fa(o)):mr(o)?(y=()=>C(o),x=!0):Le(o)?(A=!0,x=o.some(F=>mr(F)||Fa(F)),y=()=>o.map(F=>{if(Ot(F))return F.value;if(mr(F))return C(F);if(Ue(F))return Oo(F,k,2)})):Ue(o)?a?y=()=>Oo(o,k,2):y=()=>(E&&E(),Yn(o,k,3,[M])):y=Cn,a&&u){const F=y;y=()=>hr(F())}let E,M=F=>{E=B.onStop=()=>{Oo(F,k,4),E=B.onStop=void 0}},N;if(ol)if(M=Cn,a?c&&Yn(a,k,3,[y(),A?[]:void 0,M]):y(),f==="sync"){const F=ly();N=F.__watcherHandles||(F.__watcherHandles=[])}else return Cn;let O=A?new Array(o.length).fill(pc):pc;const H=()=>{if(!(!B.active||!B.dirty))if(a){const F=B.run();(u||x||(A?F.some((z,W)=>bo(z,O[W])):bo(F,O)))&&(E&&E(),Yn(a,k,3,[F,O===pc?void 0:A&&O[0]===pc?[]:O,M]),O=F)}else B.run()};H.allowRecurse=!!a;let R;f==="sync"?R=H:f==="post"?R=()=>ln(H,k&&k.suspense):(H.pre=!0,k&&(H.id=k.uid),R=()=>hd(H));const B=new vs(y,Cn,R),U=PA(),D=()=>{B.stop(),U&&Gf(U.effects,B)};return a?c?H():O=B.run():f==="post"?ln(B.run.bind(B),k&&k.suspense):B.run(),N&&N.push(D),D}function UB(o,a,c){const u=this.proxy,f=Nt(o)?o.includes(".")?uy(u,o):()=>u[o]:o.bind(u,u);let g;Ue(a)?g=a:(g=a.handler,c=a);const p=yr(this),v=el(f,g.bind(u),c);return p(),v}function uy(o,a){const c=a.split(".");return()=>{let u=o;for(let f=0;f<c.length&&u;f++)u=u[c[f]];return u}}function hr(o,a,c=0,u){if(!yt(o)||o.__v_skip)return o;if(a&&a>0){if(c>=a)return o;c++}if(u=u||new Set,u.has(o))return o;if(u.add(o),Ot(o))hr(o.value,a,c,u);else if(Le(o))for(let f=0;f<o.length;f++)hr(o[f],a,c,u);else if(xr(o)||hs(o))o.forEach(f=>{hr(f,a,c,u)});else if(DA(o))for(const f in o)hr(o[f],a,c,u);return o}function Zn(o,a){if(Kt===null)return o;const c=wd(Kt)||Kt.proxy,u=o.dirs||(o.dirs=[]);for(let f=0;f<a.length;f++){let[g,p,v,k=wt]=a[f];g&&(Ue(g)&&(g={mounted:g,updated:g}),g.deep&&hr(p),u.push({dir:g,instance:c,value:p,oldValue:void 0,arg:v,modifiers:k}))}return o}function Po(o,a,c,u){const f=o.dirs,g=a&&a.dirs;for(let p=0;p<f.length;p++){const v=f[p];g&&(v.oldValue=g[p].value);let k=v.dir[u];k&&(Bi(),Yn(k,c,8,[o.el,v,o,a]),Li())}}const Ai=Symbol("_leaveCb"),bc=Symbol("_enterCb");function hg(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yn(()=>{o.isMounted=!0}),bn(()=>{o.isUnmounting=!0}),o}const ro=[Function,Array],fg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ro,onEnter:ro,onAfterEnter:ro,onEnterCancelled:ro,onBeforeLeave:ro,onLeave:ro,onAfterLeave:ro,onLeaveCancelled:ro,onBeforeAppear:ro,onAppear:ro,onAfterAppear:ro,onAppearCancelled:ro},$B={name:"BaseTransition",props:fg,setup(o,{slots:a}){const c=Fo(),u=hg();return()=>{const f=a.default&&md(a.default(),!0);if(!f||!f.length)return;let g=f[0];if(f.length>1){for(const A of f)if(A.type!==un){g=A;break}}const p=Ge(o),{mode:v}=p;if(u.isLeaving)return Lh(g);const k=O_(g);if(!k)return Lh(g);const C=ws(k,p,u,c);Cr(k,C);const y=c.subTree,x=y&&O_(y);if(x&&x.type!==un&&!go(k,x)){const A=ws(x,p,u,c);if(Cr(x,A),v==="out-in")return u.isLeaving=!0,A.afterLeave=()=>{u.isLeaving=!1,c.update.active!==!1&&(c.effect.dirty=!0,c.update())},Lh(g);v==="in-out"&&k.type!==un&&(A.delayLeave=(E,M,N)=>{const O=fy(u,x);O[String(x.key)]=x,E[Ai]=()=>{M(),E[Ai]=void 0,delete C.delayedLeave},C.delayedLeave=N})}return g}}},hy=$B;function fy(o,a){const{leavingVNodes:c}=o;let u=c.get(a.type);return u||(u=Object.create(null),c.set(a.type,u)),u}function ws(o,a,c,u){const{appear:f,mode:g,persisted:p=!1,onBeforeEnter:v,onEnter:k,onAfterEnter:C,onEnterCancelled:y,onBeforeLeave:x,onLeave:A,onAfterLeave:E,onLeaveCancelled:M,onBeforeAppear:N,onAppear:O,onAfterAppear:H,onAppearCancelled:R}=a,B=String(o.key),U=fy(c,o),D=(W,q)=>{W&&Yn(W,u,9,q)},F=(W,q)=>{const Y=q[1];D(W,q),Le(W)?W.every(te=>te.length<=1)&&Y():W.length<=1&&Y()},z={mode:g,persisted:p,beforeEnter(W){let q=v;if(!c.isMounted)if(f)q=N||v;else return;W[Ai]&&W[Ai](!0);const Y=U[B];Y&&go(o,Y)&&Y.el[Ai]&&Y.el[Ai](),D(q,[W])},enter(W){let q=k,Y=C,te=y;if(!c.isMounted)if(f)q=O||k,Y=H||C,te=R||y;else return;let K=!1;const J=W[bc]=re=>{K||(K=!0,re?D(te,[W]):D(Y,[W]),z.delayedLeave&&z.delayedLeave(),W[bc]=void 0)};q?F(q,[W,J]):J()},leave(W,q){const Y=String(o.key);if(W[bc]&&W[bc](!0),c.isUnmounting)return q();D(x,[W]);let te=!1;const K=W[Ai]=J=>{te||(te=!0,q(),J?D(M,[W]):D(E,[W]),W[Ai]=void 0,U[Y]===o&&delete U[Y])};U[Y]=o,A?F(A,[W,K]):K()},clone(W){return ws(W,a,c,u)}};return z}function Lh(o){if(tl(o))return o=vo(o),o.children=null,o}function O_(o){return tl(o)?o.children?o.children[0]:void 0:o}function Cr(o,a){o.shapeFlag&6&&o.component?Cr(o.component.subTree,a):o.shapeFlag&128?(o.ssContent.transition=a.clone(o.ssContent),o.ssFallback.transition=a.clone(o.ssFallback)):o.transition=a}function md(o,a=!1,c){let u=[],f=0;for(let g=0;g<o.length;g++){let p=o[g];const v=c==null?p.key:String(c)+String(p.key!=null?p.key:g);p.type===We?(p.patchFlag&128&&f++,u=u.concat(md(p.children,a,v))):(a||p.type!==un)&&u.push(v!=null?vo(p,{key:v}):p)}if(f>1)for(let g=0;g<u.length;g++)u[g].patchFlag=-2;return u}/*! #__NO_SIDE_EFFECTS__ */function Ms(o,a){return Ue(o)?(()=>zt({name:o.name},a,{setup:o}))():o}const pr=o=>!!o.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function WB(o){Ue(o)&&(o={loader:o});const{loader:a,loadingComponent:c,errorComponent:u,delay:f=200,timeout:g,suspensible:p=!0,onError:v}=o;let k=null,C,y=0;const x=()=>(y++,k=null,A()),A=()=>{let E;return k||(E=k=a().catch(M=>{if(M=M instanceof Error?M:new Error(String(M)),v)return new Promise((N,O)=>{v(M,()=>N(x()),()=>O(M),y+1)});throw M}).then(M=>E!==k&&k?k:(M&&(M.__esModule||M[Symbol.toStringTag]==="Module")&&(M=M.default),C=M,M)))};return Ms({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return C},setup(){const E=Qt;if(C)return()=>zh(C,E);const M=R=>{k=null,Sr(R,E,13,!u)};if(p&&E.suspense||ol)return A().then(R=>()=>zh(R,E)).catch(R=>(M(R),()=>u?L(u,{error:R}):null));const N=ze(!1),O=ze(),H=ze(!!f);return f&&setTimeout(()=>{H.value=!1},f),g!=null&&setTimeout(()=>{if(!N.value&&!O.value){const R=new Error(`Async component timed out after ${g}ms.`);M(R),O.value=R}},g),A().then(()=>{N.value=!0,E.parent&&tl(E.parent.vnode)&&(E.parent.effect.dirty=!0,hd(E.parent.update))}).catch(R=>{M(R),O.value=R}),()=>{if(N.value&&C)return zh(C,E);if(O.value&&u)return L(u,{error:O.value});if(c&&!H.value)return L(c)}}})}function zh(o,a){const{ref:c,props:u,children:f,ce:g}=a.vnode,p=L(o,u,f);return p.ref=c,p.ce=g,delete a.vnode.ce,p}const tl=o=>o.type.__isKeepAlive,GB={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(o,{slots:a}){const c=Fo(),u=c.ctx;if(!u.renderer)return()=>{const R=a.default&&a.default();return R&&R.length===1?R[0]:R};const f=new Map,g=new Set;let p=null;const v=c.suspense,{renderer:{p:k,m:C,um:y,o:{createElement:x}}}=u,A=x("div");u.activate=(R,B,U,D,F)=>{const z=R.component;C(R,B,U,0,v),k(z.vnode,R,B,U,z,v,D,R.slotScopeIds,F),ln(()=>{z.isDeactivated=!1,z.a&&gs(z.a);const W=R.props&&R.props.onVnodeMounted;W&&Ln(W,z.parent,R)},v)},u.deactivate=R=>{const B=R.component;C(R,A,null,1,v),ln(()=>{B.da&&gs(B.da);const U=R.props&&R.props.onVnodeUnmounted;U&&Ln(U,B.parent,R),B.isDeactivated=!0},v)};function E(R){Oh(R),y(R,c,v,!0)}function M(R){f.forEach((B,U)=>{const D=Hc(B.type);D&&(!R||!R(D))&&N(U)})}function N(R){const B=f.get(R);!p||!go(B,p)?E(B):p&&Oh(p),f.delete(R),g.delete(R)}je(()=>[o.include,o.exclude],([R,B])=>{R&&M(U=>Ea(R,U)),B&&M(U=>!Ea(B,U))},{flush:"post",deep:!0});let O=null;const H=()=>{O!=null&&f.set(O,Rh(c.subTree))};return yn(H),bd(H),bn(()=>{f.forEach(R=>{const{subTree:B,suspense:U}=c,D=Rh(B);if(R.type===D.type&&R.key===D.key){Oh(D);const F=D.component.da;F&&ln(F,U);return}E(R)})}),()=>{if(O=null,!a.default)return null;const R=a.default(),B=R[0];if(R.length>1)return p=null,R;if(!ei(B)||!(B.shapeFlag&4)&&!(B.shapeFlag&128))return p=null,B;let U=Rh(B);const D=U.type,F=Hc(pr(U)?U.type.__asyncResolved||{}:D),{include:z,exclude:W,max:q}=o;if(z&&(!F||!Ea(z,F))||W&&F&&Ea(W,F))return p=U,B;const Y=U.key==null?D:U.key,te=f.get(Y);return U.el&&(U=vo(U),B.shapeFlag&128&&(B.ssContent=U)),O=Y,te?(U.el=te.el,U.component=te.component,U.transition&&Cr(U,U.transition),U.shapeFlag|=512,g.delete(Y),g.add(Y)):(g.add(Y),q&&g.size>parseInt(q,10)&&N(g.values().next().value)),U.shapeFlag|=256,p=U,ry(B.type)?B:U}}},qB=GB;function Ea(o,a){return Le(o)?o.some(c=>Ea(c,a)):Nt(o)?o.split(",").includes(a):yP(o)?o.test(a):!1}function gg(o,a){gy(o,"a",a)}function mg(o,a){gy(o,"da",a)}function gy(o,a,c=Qt){const u=o.__wdc||(o.__wdc=()=>{let f=c;for(;f;){if(f.isDeactivated)return;f=f.parent}return o()});if(pd(a,u,c),c){let f=c.parent;for(;f&&f.parent;)tl(f.parent.vnode)&&KB(u,a,c,f),f=f.parent}}function KB(o,a,c,u){const f=pd(a,o,u,!0);kd(()=>{Gf(u[a],f)},c)}function Oh(o){o.shapeFlag&=-257,o.shapeFlag&=-513}function Rh(o){return o.shapeFlag&128?o.ssContent:o}function pd(o,a,c=Qt,u=!1){if(c){const f=c[o]||(c[o]=[]),g=a.__weh||(a.__weh=(...p)=>{if(c.isUnmounted)return;Bi();const v=yr(c),k=Yn(a,c,o,p);return v(),Li(),k});return u?f.unshift(g):f.push(g),g}}const oi=o=>(a,c=Qt)=>(!ol||o==="sp")&&pd(o,(...u)=>a(...u),c),nl=oi("bm"),yn=oi("m"),my=oi("bu"),bd=oi("u"),bn=oi("bum"),kd=oi("um"),py=oi("sp"),by=oi("rtg"),ky=oi("rtc");function vy(o,a=Qt){pd("ec",o,a)}function Ti(o,a,c,u){let f;const g=c&&c[u];if(Le(o)||Nt(o)){f=new Array(o.length);for(let p=0,v=o.length;p<v;p++)f[p]=a(o[p],p,void 0,g&&g[p])}else if(typeof o=="number"){f=new Array(o);for(let p=0;p<o;p++)f[p]=a(p+1,p,void 0,g&&g[p])}else if(yt(o))if(o[Symbol.iterator])f=Array.from(o,(p,v)=>a(p,v,void 0,g&&g[v]));else{const p=Object.keys(o);f=new Array(p.length);for(let v=0,k=p.length;v<k;v++){const C=p[v];f[v]=a(o[C],C,v,g&&g[v])}}else f=[];return c&&(c[u]=f),f}function wy(o,a){for(let c=0;c<a.length;c++){const u=a[c];if(Le(u))for(let f=0;f<u.length;f++)o[u[f].name]=u[f].fn;else u&&(o[u.name]=u.key?(...f)=>{const g=u.fn(...f);return g&&(g.key=u.key),g}:u.fn)}return o}function YB(o,a,c={},u,f){if(Kt.isCE||Kt.parent&&pr(Kt.parent)&&Kt.parent.isCE)return a!=="default"&&(c.name=a),L("slot",c,u&&u());let g=o[a];g&&g._c&&(g._d=!1),it();const p=g&&_y(g(c)),v=so(We,{key:c.key||p&&p.key||`_${a}`},p||(u?u():[]),p&&o._===1?64:-2);return!f&&v.scopeId&&(v.slotScopeIds=[v.scopeId+"-s"]),g&&g._c&&(g._d=!0),v}function _y(o){return o.some(a=>ei(a)?!(a.type===un||a.type===We&&!_y(a.children)):!0)?o:null}function QB(o,a){const c={};for(const u in o)c[a&&/[A-Z]/.test(u)?`on:${u}`:Da(u)]=o[u];return c}const df=o=>o?jy(o)?wd(o)||o.proxy:df(o.parent):null,Ia=zt(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>o.props,$attrs:o=>o.attrs,$slots:o=>o.slots,$refs:o=>o.refs,$parent:o=>df(o.parent),$root:o=>df(o.root),$emit:o=>o.emit,$options:o=>pg(o),$forceUpdate:o=>o.f||(o.f=()=>{o.effect.dirty=!0,hd(o.update)}),$nextTick:o=>o.n||(o.n=Wt.bind(o.proxy)),$watch:o=>UB.bind(o)}),Fh=(o,a)=>o!==wt&&!o.__isScriptSetup&&dt(o,a),uf={get({_:o},a){const{ctx:c,setupState:u,data:f,props:g,accessCache:p,type:v,appContext:k}=o;let C;if(a[0]!=="$"){const E=p[a];if(E!==void 0)switch(E){case 1:return u[a];case 2:return f[a];case 4:return c[a];case 3:return g[a]}else{if(Fh(u,a))return p[a]=1,u[a];if(f!==wt&&dt(f,a))return p[a]=2,f[a];if((C=o.propsOptions[0])&&dt(C,a))return p[a]=3,g[a];if(c!==wt&&dt(c,a))return p[a]=4,c[a];hf&&(p[a]=0)}}const y=Ia[a];let x,A;if(y)return a==="$attrs"&&On(o,"get",a),y(o);if((x=v.__cssModules)&&(x=x[a]))return x;if(c!==wt&&dt(c,a))return p[a]=4,c[a];if(A=k.config.globalProperties,dt(A,a))return A[a]},set({_:o},a,c){const{data:u,setupState:f,ctx:g}=o;return Fh(f,a)?(f[a]=c,!0):u!==wt&&dt(u,a)?(u[a]=c,!0):dt(o.props,a)||a[0]==="$"&&a.slice(1)in o?!1:(g[a]=c,!0)},has({_:{data:o,setupState:a,accessCache:c,ctx:u,appContext:f,propsOptions:g}},p){let v;return!!c[p]||o!==wt&&dt(o,p)||Fh(a,p)||(v=g[0])&&dt(v,p)||dt(u,p)||dt(Ia,p)||dt(f.config.globalProperties,p)},defineProperty(o,a,c){return c.get!=null?o._.accessCache[a]=0:dt(c,"value")&&this.set(o,a,c.value,null),Reflect.defineProperty(o,a,c)}},ZB=zt({},uf,{get(o,a){if(a!==Symbol.unscopables)return uf.get(o,a,o)},has(o,a){return a[0]!=="_"&&!TP(a)}});function JB(){return null}function XB(){return null}function eL(o){}function tL(o){}function nL(){return null}function oL(){}function iL(o,a){return null}function rL(){return Cy().slots}function sL(){return Cy().attrs}function Cy(){const o=Fo();return o.setupContext||(o.setupContext=$y(o))}function Wa(o){return Le(o)?o.reduce((a,c)=>(a[c]=null,a),{}):o}function aL(o,a){const c=Wa(o);for(const u in a){if(u.startsWith("__skip"))continue;let f=c[u];f?Le(f)||Ue(f)?f=c[u]={type:f,default:a[u]}:f.default=a[u]:f===null&&(f=c[u]={default:a[u]}),f&&a[`__skip_${u}`]&&(f.skipFactory=!0)}return c}function lL(o,a){return!o||!a?o||a:Le(o)&&Le(a)?o.concat(a):zt({},Wa(o),Wa(a))}function cL(o,a){const c={};for(const u in o)a.includes(u)||Object.defineProperty(c,u,{enumerable:!0,get:()=>o[u]});return c}function dL(o){const a=Fo();let c=o();return kf(),qf(c)&&(c=c.catch(u=>{throw yr(a),u})),[c,()=>yr(a)]}let hf=!0;function uL(o){const a=pg(o),c=o.proxy,u=o.ctx;hf=!1,a.beforeCreate&&R_(a.beforeCreate,o,"bc");const{data:f,computed:g,methods:p,watch:v,provide:k,inject:C,created:y,beforeMount:x,mounted:A,beforeUpdate:E,updated:M,activated:N,deactivated:O,beforeDestroy:H,beforeUnmount:R,destroyed:B,unmounted:U,render:D,renderTracked:F,renderTriggered:z,errorCaptured:W,serverPrefetch:q,expose:Y,inheritAttrs:te,components:K,directives:J,filters:re}=a;if(C&&hL(C,u,null),p)for(const _e in p){const Z=p[_e];Ue(Z)&&(u[_e]=Z.bind(c))}if(f){const _e=f.call(c,c);yt(_e)&&(o.data=cn(_e))}if(hf=!0,g)for(const _e in g){const Z=g[_e],de=Ue(Z)?Z.bind(c,c):Ue(Z.get)?Z.get.bind(c,c):Cn,Ce=!Ue(Z)&&Ue(Z.set)?Z.set.bind(c):Cn,me=G({get:de,set:Ce});Object.defineProperty(u,_e,{enumerable:!0,configurable:!0,get:()=>me.value,set:Ae=>me.value=Ae})}if(v)for(const _e in v)Ay(v[_e],u,c,_e);if(k){const _e=Ue(k)?k.call(c):k;Reflect.ownKeys(_e).forEach(Z=>{Zt(Z,_e[Z])})}y&&R_(y,o,"c");function oe(_e,Z){Le(Z)?Z.forEach(de=>_e(de.bind(c))):Z&&_e(Z.bind(c))}if(oe(nl,x),oe(yn,A),oe(my,E),oe(bd,M),oe(gg,N),oe(mg,O),oe(vy,W),oe(ky,F),oe(by,z),oe(bn,R),oe(kd,U),oe(py,q),Le(Y))if(Y.length){const _e=o.exposed||(o.exposed={});Y.forEach(Z=>{Object.defineProperty(_e,Z,{get:()=>c[Z],set:de=>c[Z]=de})})}else o.exposed||(o.exposed={});D&&o.render===Cn&&(o.render=D),te!=null&&(o.inheritAttrs=te),K&&(o.components=K),J&&(o.directives=J)}function hL(o,a,c=Cn){Le(o)&&(o=ff(o));for(const u in o){const f=o[u];let g;yt(f)?"default"in f?g=pt(f.from||u,f.default,!0):g=pt(f.from||u):g=pt(f),Ot(g)?Object.defineProperty(a,u,{enumerable:!0,configurable:!0,get:()=>g.value,set:p=>g.value=p}):a[u]=g}}function R_(o,a,c){Yn(Le(o)?o.map(u=>u.bind(a.proxy)):o.bind(a.proxy),a,c)}function Ay(o,a,c,u){const f=u.includes(".")?uy(c,u):()=>c[u];if(Nt(o)){const g=a[o];Ue(g)&&je(f,g)}else if(Ue(o))je(f,o.bind(c));else if(yt(o))if(Le(o))o.forEach(g=>Ay(g,a,c,u));else{const g=Ue(o.handler)?o.handler.bind(c):a[o.handler];Ue(g)&&je(f,g,o)}}function pg(o){const a=o.type,{mixins:c,extends:u}=a,{mixins:f,optionsCache:g,config:{optionMergeStrategies:p}}=o.appContext,v=g.get(a);let k;return v?k=v:!f.length&&!c&&!u?k=a:(k={},f.length&&f.forEach(C=>Rc(k,C,p,!0)),Rc(k,a,p)),yt(a)&&g.set(a,k),k}function Rc(o,a,c,u=!1){const{mixins:f,extends:g}=a;g&&Rc(o,g,c,!0),f&&f.forEach(p=>Rc(o,p,c,!0));for(const p in a)if(!(u&&p==="expose")){const v=fL[p]||c&&c[p];o[p]=v?v(o[p],a[p]):a[p]}return o}const fL={data:F_,props:V_,emits:V_,methods:Sa,computed:Sa,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Sa,directives:Sa,watch:mL,provide:F_,inject:gL};function F_(o,a){return a?o?function(){return zt(Ue(o)?o.call(this,this):o,Ue(a)?a.call(this,this):a)}:a:o}function gL(o,a){return Sa(ff(o),ff(a))}function ff(o){if(Le(o)){const a={};for(let c=0;c<o.length;c++)a[o[c]]=o[c];return a}return o}function _n(o,a){return o?[...new Set([].concat(o,a))]:a}function Sa(o,a){return o?zt(Object.create(null),o,a):a}function V_(o,a){return o?Le(o)&&Le(a)?[...new Set([...o,...a])]:zt(Object.create(null),Wa(o),Wa(a!=null?a:{})):a}function mL(o,a){if(!o)return a;if(!a)return o;const c=zt(Object.create(null),o);for(const u in a)c[u]=_n(o[u],a[u]);return c}function yy(){return{app:null,config:{isNativeTag:CP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pL=0;function bL(o,a){return function(u,f=null){Ue(u)||(u=zt({},u)),f!=null&&!yt(f)&&(f=null);const g=yy(),p=new WeakSet;let v=!1;const k=g.app={_uid:pL++,_component:u,_props:f,_container:null,_context:g,_instance:null,version:qy,get config(){return g.config},set config(C){},use(C,...y){return p.has(C)||(C&&Ue(C.install)?(p.add(C),C.install(k,...y)):Ue(C)&&(p.add(C),C(k,...y))),k},mixin(C){return g.mixins.includes(C)||g.mixins.push(C),k},component(C,y){return y?(g.components[C]=y,k):g.components[C]},directive(C,y){return y?(g.directives[C]=y,k):g.directives[C]},mount(C,y,x){if(!v){const A=L(u,f);return A.appContext=g,x===!0?x="svg":x===!1&&(x=void 0),y&&a?a(A,C):o(A,C,x),v=!0,k._container=C,C.__vue_app__=k,wd(A.component)||A.component.proxy}},unmount(){v&&(o(null,k._container),delete k._container.__vue_app__)},provide(C,y){return g.provides[C]=y,k},runWithContext(C){const y=ks;ks=k;try{return C()}finally{ks=y}}};return k}}let ks=null;function Zt(o,a){if(Qt){let c=Qt.provides;const u=Qt.parent&&Qt.parent.provides;u===c&&(c=Qt.provides=Object.create(u)),c[o]=a}}function pt(o,a,c=!1){const u=Qt||Kt;if(u||ks){const f=u?u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:ks._context.provides;if(f&&o in f)return f[o];if(arguments.length>1)return c&&Ue(a)?a.call(u&&u.proxy):a}}function kL(){return!!(Qt||Kt||ks)}function vL(o,a,c,u=!1){const f={},g={};Pc(g,vd,1),o.propsDefaults=Object.create(null),xy(o,a,f,g);for(const p in o.propsOptions[0])p in f||(f[p]=void 0);c?o.props=u?f:eg(f):o.type.props?o.props=f:o.props=g,o.attrs=g}function wL(o,a,c,u){const{props:f,attrs:g,vnode:{patchFlag:p}}=o,v=Ge(f),[k]=o.propsOptions;let C=!1;if((u||p>0)&&!(p&16)){if(p&8){const y=o.vnode.dynamicProps;for(let x=0;x<y.length;x++){let A=y[x];if(fd(o.emitsOptions,A))continue;const E=a[A];if(k)if(dt(g,A))E!==g[A]&&(g[A]=E,C=!0);else{const M=dn(A);f[M]=gf(k,v,M,E,o,!1)}else E!==g[A]&&(g[A]=E,C=!0)}}}else{xy(o,a,f,g)&&(C=!0);let y;for(const x in v)(!a||!dt(a,x)&&((y=Wn(x))===x||!dt(a,y)))&&(k?c&&(c[x]!==void 0||c[y]!==void 0)&&(f[x]=gf(k,v,x,void 0,o,!0)):delete f[x]);if(g!==v)for(const x in g)(!a||!dt(a,x)&&!0)&&(delete g[x],C=!0)}C&&Jo(o,"set","$attrs")}function xy(o,a,c,u){const[f,g]=o.propsOptions;let p=!1,v;if(a)for(let k in a){if(fs(k))continue;const C=a[k];let y;f&&dt(f,y=dn(k))?!g||!g.includes(y)?c[y]=C:(v||(v={}))[y]=C:fd(o.emitsOptions,k)||(!(k in u)||C!==u[k])&&(u[k]=C,p=!0)}if(g){const k=Ge(c),C=v||wt;for(let y=0;y<g.length;y++){const x=g[y];c[x]=gf(f,k,x,C[x],o,!dt(C,x))}}return p}function gf(o,a,c,u,f,g){const p=o[c];if(p!=null){const v=dt(p,"default");if(v&&u===void 0){const k=p.default;if(p.type!==Function&&!p.skipFactory&&Ue(k)){const{propsDefaults:C}=f;if(c in C)u=C[c];else{const y=yr(f);u=C[c]=k.call(null,a),y()}}else u=k}p[0]&&(g&&!v?u=!1:p[1]&&(u===""||u===Wn(c))&&(u=!0))}return u}function Ey(o,a,c=!1){const u=a.propsCache,f=u.get(o);if(f)return f;const g=o.props,p={},v=[];let k=!1;if(!Ue(o)){const y=x=>{k=!0;const[A,E]=Ey(x,a,!0);zt(p,A),E&&v.push(...E)};!c&&a.mixins.length&&a.mixins.forEach(y),o.extends&&y(o.extends),o.mixins&&o.mixins.forEach(y)}if(!g&&!k)return yt(o)&&u.set(o,us),us;if(Le(g))for(let y=0;y<g.length;y++){const x=dn(g[y]);j_(x)&&(p[x]=wt)}else if(g)for(const y in g){const x=dn(y);if(j_(x)){const A=g[y],E=p[x]=Le(A)||Ue(A)?{type:A}:zt({},A);if(E){const M=$_(Boolean,E.type),N=$_(String,E.type);E[0]=M>-1,E[1]=N<0||M<N,(M>-1||dt(E,"default"))&&v.push(x)}}}const C=[p,v];return yt(o)&&u.set(o,C),C}function j_(o){return o[0]!=="$"&&!fs(o)}function H_(o){return o===null?"null":typeof o=="function"?o.name||"":typeof o=="object"&&o.constructor&&o.constructor.name||""}function U_(o,a){return H_(o)===H_(a)}function $_(o,a){return Le(a)?a.findIndex(c=>U_(c,o)):Ue(a)&&U_(a,o)?0:-1}const Sy=o=>o[0]==="_"||o==="$stable",bg=o=>Le(o)?o.map($n):[$n(o)],_L=(o,a,c)=>{if(a._n)return a;const u=at((...f)=>bg(a(...f)),c);return u._c=!1,u},Dy=(o,a,c)=>{const u=o._ctx;for(const f in o){if(Sy(f))continue;const g=o[f];if(Ue(g))a[f]=_L(f,g,u);else if(g!=null){const p=bg(g);a[f]=()=>p}}},Ty=(o,a)=>{const c=bg(a);o.slots.default=()=>c},CL=(o,a)=>{if(o.vnode.shapeFlag&32){const c=a._;c?(o.slots=Ge(a),Pc(a,"_",c)):Dy(a,o.slots={})}else o.slots={},a&&Ty(o,a);Pc(o.slots,vd,1)},AL=(o,a,c)=>{const{vnode:u,slots:f}=o;let g=!0,p=wt;if(u.shapeFlag&32){const v=a._;v?c&&v===1?g=!1:(zt(f,a),!c&&v===1&&delete f._):(g=!a.$stable,Dy(a,f)),p=a}else a&&(Ty(o,a),p={default:1});if(g)for(const v in f)!Sy(v)&&p[v]==null&&delete f[v]};function Fc(o,a,c,u,f=!1){if(Le(o)){o.forEach((A,E)=>Fc(A,a&&(Le(a)?a[E]:a),c,u,f));return}if(pr(u)&&!f)return;const g=u.shapeFlag&4?wd(u.component)||u.component.proxy:u.el,p=f?null:g,{i:v,r:k}=o,C=a&&a.r,y=v.refs===wt?v.refs={}:v.refs,x=v.setupState;if(C!=null&&C!==k&&(Nt(C)?(y[C]=null,dt(x,C)&&(x[C]=null)):Ot(C)&&(C.value=null)),Ue(k))Oo(k,v,12,[p,y]);else{const A=Nt(k),E=Ot(k);if(A||E){const M=()=>{if(o.f){const N=A?dt(x,k)?x[k]:y[k]:k.value;f?Le(N)&&Gf(N,g):Le(N)?N.includes(g)||N.push(g):A?(y[k]=[g],dt(x,k)&&(x[k]=y[k])):(k.value=[g],o.k&&(y[o.k]=k.value))}else A?(y[k]=p,dt(x,k)&&(x[k]=p)):E&&(k.value=p,o.k&&(y[o.k]=p))};p?(M.id=-1,ln(M,c)):M()}}}let ki=!1;const yL=o=>o.namespaceURI.includes("svg")&&o.tagName!=="foreignObject",xL=o=>o.namespaceURI.includes("MathML"),kc=o=>{if(yL(o))return"svg";if(xL(o))return"mathml"},_a=o=>o.nodeType===8;function EL(o){const{mt:a,p:c,o:{patchProp:u,createText:f,nextSibling:g,parentNode:p,remove:v,insert:k,createComment:C}}=o,y=(B,U)=>{if(!U.hasChildNodes()){__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&sr("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),c(null,B,U),Oc(),U._vnode=B;return}ki=!1,x(U.firstChild,B,null,null,null),Oc(),U._vnode=B,ki&&console.error("Hydration completed but contains mismatches.")},x=(B,U,D,F,z,W=!1)=>{const q=_a(B)&&B.data==="[",Y=()=>N(B,U,D,F,z,q),{type:te,ref:K,shapeFlag:J,patchFlag:re}=U;let pe=B.nodeType;U.el=B,re===-2&&(W=!1,U.dynamicChildren=null);let oe=null;switch(te){case Ni:pe!==3?U.children===""?(k(U.el=f(""),p(B),B),oe=B):oe=Y():(B.data!==U.children&&(ki=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&sr("Hydration text mismatch in",B.parentNode,`
  - rendered on server: ${JSON.stringify(B.data)}
  - expected on client: ${JSON.stringify(U.children)}`),B.data=U.children),oe=g(B));break;case un:R(B)?(oe=g(B),H(U.el=B.content.firstChild,B,D)):pe!==8||q?oe=Y():oe=g(B);break;case br:if(q&&(B=g(B),pe=B.nodeType),pe===1||pe===3){oe=B;const _e=!U.children.length;for(let Z=0;Z<U.staticCount;Z++)_e&&(U.children+=oe.nodeType===1?oe.outerHTML:oe.data),Z===U.staticCount-1&&(U.anchor=oe),oe=g(oe);return q?g(oe):oe}else Y();break;case We:q?oe=M(B,U,D,F,z,W):oe=Y();break;default:if(J&1)(pe!==1||U.type.toLowerCase()!==B.tagName.toLowerCase())&&!R(B)?oe=Y():oe=A(B,U,D,F,z,W);else if(J&6){U.slotScopeIds=z;const _e=p(B);if(q?oe=O(B):_a(B)&&B.data==="teleport start"?oe=O(B,B.data,"teleport end"):oe=g(B),a(U,_e,null,D,F,kc(_e),W),pr(U)){let Z;q?(Z=L(We),Z.anchor=oe?oe.previousSibling:_e.lastChild):Z=B.nodeType===3?Lt(""):L("div"),Z.el=B,U.component.subTree=Z}}else J&64?pe!==8?oe=Y():oe=U.type.hydrate(B,U,D,F,z,W,o,E):J&128?oe=U.type.hydrate(B,U,D,F,kc(p(B)),z,W,o,x):__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&sr("Invalid HostVNode type:",te,`(${typeof te})`)}return K!=null&&Fc(K,null,F,U),oe},A=(B,U,D,F,z,W)=>{W=W||!!U.dynamicChildren;const{type:q,props:Y,patchFlag:te,shapeFlag:K,dirs:J,transition:re}=U,pe=q==="input"||q==="option";if(pe||te!==-1){J&&Po(U,null,D,"created");let oe=!1;if(R(B)){oe=Py(F,re)&&D&&D.vnode.props&&D.vnode.props.appear;const Z=B.content.firstChild;oe&&re.beforeEnter(Z),H(Z,B,D),U.el=B=Z}if(K&16&&!(Y&&(Y.innerHTML||Y.textContent))){let Z=E(B.firstChild,U,B,D,F,z,W),de=!1;for(;Z;){ki=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!de&&(sr("Hydration children mismatch on",B,`
Server rendered element contains more child nodes than client vdom.`),de=!0);const Ce=Z;Z=Z.nextSibling,v(Ce)}}else K&8&&B.textContent!==U.children&&(ki=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&sr("Hydration text content mismatch on",B,`
  - rendered on server: ${B.textContent}
  - expected on client: ${U.children}`),B.textContent=U.children);if(Y)if(pe||!W||te&48)for(const Z in Y)(pe&&(Z.endsWith("value")||Z==="indeterminate")||Xa(Z)&&!fs(Z)||Z[0]===".")&&u(B,Z,null,Y[Z],void 0,void 0,D);else Y.onClick&&u(B,"onClick",null,Y.onClick,void 0,void 0,D);let _e;(_e=Y&&Y.onVnodeBeforeMount)&&Ln(_e,D,U),J&&Po(U,null,D,"beforeMount"),((_e=Y&&Y.onVnodeMounted)||J||oe)&&sy(()=>{_e&&Ln(_e,D,U),oe&&re.enter(B),J&&Po(U,null,D,"mounted")},F)}return B.nextSibling},E=(B,U,D,F,z,W,q)=>{q=q||!!U.dynamicChildren;const Y=U.children,te=Y.length;let K=!1;for(let J=0;J<te;J++){const re=q?Y[J]:Y[J]=$n(Y[J]);if(B)B=x(B,re,F,z,W,q);else{if(re.type===Ni&&!re.children)continue;ki=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!K&&(sr("Hydration children mismatch on",D,`
Server rendered element contains fewer child nodes than client vdom.`),K=!0),c(null,re,D,null,F,z,kc(D),W)}}return B},M=(B,U,D,F,z,W)=>{const{slotScopeIds:q}=U;q&&(z=z?z.concat(q):q);const Y=p(B),te=E(g(B),U,Y,D,F,z,W);return te&&_a(te)&&te.data==="]"?g(U.anchor=te):(ki=!0,k(U.anchor=C("]"),Y,te),te)},N=(B,U,D,F,z,W)=>{if(ki=!0,__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&sr(`Hydration node mismatch:
- rendered on server:`,B,B.nodeType===3?"(text)":_a(B)&&B.data==="["?"(start of fragment)":"",`
- expected on client:`,U.type),U.el=null,W){const te=O(B);for(;;){const K=g(B);if(K&&K!==te)v(K);else break}}const q=g(B),Y=p(B);return v(B),c(null,U,Y,q,D,F,kc(Y),z),q},O=(B,U="[",D="]")=>{let F=0;for(;B;)if(B=g(B),B&&_a(B)&&(B.data===U&&F++,B.data===D)){if(F===0)return g(B);F--}return B},H=(B,U,D)=>{const F=U.parentNode;F&&F.replaceChild(B,U);let z=D;for(;z;)z.vnode.el===U&&(z.vnode.el=z.subTree.el=B),z=z.parent},R=B=>B.nodeType===1&&B.tagName.toLowerCase()==="template";return[y,x]}function SL(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Yf().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ln=sy;function Iy(o){return Ny(o)}function My(o){return Ny(o,EL)}function Ny(o,a){SL();const c=Yf();c.__VUE__=!0;const{insert:u,remove:f,patchProp:g,createElement:p,createText:v,createComment:k,setText:C,setElementText:y,parentNode:x,nextSibling:A,setScopeId:E=Cn,insertStaticContent:M}=o,N=(V,$,ee,ce=null,le=null,he=null,ye=void 0,we=null,Ee=!!$.dynamicChildren)=>{if(V===$)return;V&&!go(V,$)&&(ce=X(V),Ae(V,le,he,!0),V=null),$.patchFlag===-2&&(Ee=!1,$.dynamicChildren=null);const{type:ue,ref:Te,shapeFlag:Me}=$;switch(ue){case Ni:O(V,$,ee,ce);break;case un:H(V,$,ee,ce);break;case br:V==null&&R($,ee,ce,ye);break;case We:K(V,$,ee,ce,le,he,ye,we,Ee);break;default:Me&1?D(V,$,ee,ce,le,he,ye,we,Ee):Me&6?J(V,$,ee,ce,le,he,ye,we,Ee):(Me&64||Me&128)&&ue.process(V,$,ee,ce,le,he,ye,we,Ee,Ne)}Te!=null&&le&&Fc(Te,V&&V.ref,he,$||V,!$)},O=(V,$,ee,ce)=>{if(V==null)u($.el=v($.children),ee,ce);else{const le=$.el=V.el;$.children!==V.children&&C(le,$.children)}},H=(V,$,ee,ce)=>{V==null?u($.el=k($.children||""),ee,ce):$.el=V.el},R=(V,$,ee,ce)=>{[V.el,V.anchor]=M(V.children,$,ee,ce,V.el,V.anchor)},B=({el:V,anchor:$},ee,ce)=>{let le;for(;V&&V!==$;)le=A(V),u(V,ee,ce),V=le;u($,ee,ce)},U=({el:V,anchor:$})=>{let ee;for(;V&&V!==$;)ee=A(V),f(V),V=ee;f($)},D=(V,$,ee,ce,le,he,ye,we,Ee)=>{$.type==="svg"?ye="svg":$.type==="math"&&(ye="mathml"),V==null?F($,ee,ce,le,he,ye,we,Ee):q(V,$,le,he,ye,we,Ee)},F=(V,$,ee,ce,le,he,ye,we)=>{let Ee,ue;const{props:Te,shapeFlag:Me,transition:Be,dirs:Ve}=V;if(Ee=V.el=p(V.type,he,Te&&Te.is,Te),Me&8?y(Ee,V.children):Me&16&&W(V.children,Ee,null,ce,le,Vh(V,he),ye,we),Ve&&Po(V,null,ce,"created"),z(Ee,V,V.scopeId,ye,ce),Te){for(const gt in Te)gt!=="value"&&!fs(gt)&&g(Ee,gt,null,Te[gt],he,V.children,ce,le,ke);"value"in Te&&g(Ee,"value",null,Te.value,he),(ue=Te.onVnodeBeforeMount)&&Ln(ue,ce,V)}Ve&&Po(V,null,ce,"beforeMount");const Ze=Py(le,Be);Ze&&Be.beforeEnter(Ee),u(Ee,$,ee),((ue=Te&&Te.onVnodeMounted)||Ze||Ve)&&ln(()=>{ue&&Ln(ue,ce,V),Ze&&Be.enter(Ee),Ve&&Po(V,null,ce,"mounted")},le)},z=(V,$,ee,ce,le)=>{if(ee&&E(V,ee),ce)for(let he=0;he<ce.length;he++)E(V,ce[he]);if(le){let he=le.subTree;if($===he){const ye=le.vnode;z(V,ye,ye.scopeId,ye.slotScopeIds,le.parent)}}},W=(V,$,ee,ce,le,he,ye,we,Ee=0)=>{for(let ue=Ee;ue<V.length;ue++){const Te=V[ue]=we?yi(V[ue]):$n(V[ue]);N(null,Te,$,ee,ce,le,he,ye,we)}},q=(V,$,ee,ce,le,he,ye)=>{const we=$.el=V.el;let{patchFlag:Ee,dynamicChildren:ue,dirs:Te}=$;Ee|=V.patchFlag&16;const Me=V.props||wt,Be=$.props||wt;let Ve;if(ee&&ar(ee,!1),(Ve=Be.onVnodeBeforeUpdate)&&Ln(Ve,ee,$,V),Te&&Po($,V,ee,"beforeUpdate"),ee&&ar(ee,!0),ue?Y(V.dynamicChildren,ue,we,ee,ce,Vh($,le),he):ye||Z(V,$,we,null,ee,ce,Vh($,le),he,!1),Ee>0){if(Ee&16)te(we,$,Me,Be,ee,ce,le);else if(Ee&2&&Me.class!==Be.class&&g(we,"class",null,Be.class,le),Ee&4&&g(we,"style",Me.style,Be.style,le),Ee&8){const Ze=$.dynamicProps;for(let gt=0;gt<Ze.length;gt++){const Et=Ze[gt],Gt=Me[Et],Sn=Be[Et];(Sn!==Gt||Et==="value")&&g(we,Et,Gt,Sn,le,V.children,ee,ce,ke)}}Ee&1&&V.children!==$.children&&y(we,$.children)}else!ye&&ue==null&&te(we,$,Me,Be,ee,ce,le);((Ve=Be.onVnodeUpdated)||Te)&&ln(()=>{Ve&&Ln(Ve,ee,$,V),Te&&Po($,V,ee,"updated")},ce)},Y=(V,$,ee,ce,le,he,ye)=>{for(let we=0;we<$.length;we++){const Ee=V[we],ue=$[we],Te=Ee.el&&(Ee.type===We||!go(Ee,ue)||Ee.shapeFlag&70)?x(Ee.el):ee;N(Ee,ue,Te,null,ce,le,he,ye,!0)}},te=(V,$,ee,ce,le,he,ye)=>{if(ee!==ce){if(ee!==wt)for(const we in ee)!fs(we)&&!(we in ce)&&g(V,we,ee[we],null,ye,$.children,le,he,ke);for(const we in ce){if(fs(we))continue;const Ee=ce[we],ue=ee[we];Ee!==ue&&we!=="value"&&g(V,we,ue,Ee,ye,$.children,le,he,ke)}"value"in ce&&g(V,"value",ee.value,ce.value,ye)}},K=(V,$,ee,ce,le,he,ye,we,Ee)=>{const ue=$.el=V?V.el:v(""),Te=$.anchor=V?V.anchor:v("");let{patchFlag:Me,dynamicChildren:Be,slotScopeIds:Ve}=$;Ve&&(we=we?we.concat(Ve):Ve),V==null?(u(ue,ee,ce),u(Te,ee,ce),W($.children||[],ee,Te,le,he,ye,we,Ee)):Me>0&&Me&64&&Be&&V.dynamicChildren?(Y(V.dynamicChildren,Be,ee,le,he,ye,we),($.key!=null||le&&$===le.subTree)&&kg(V,$,!0)):Z(V,$,ee,Te,le,he,ye,we,Ee)},J=(V,$,ee,ce,le,he,ye,we,Ee)=>{$.slotScopeIds=we,V==null?$.shapeFlag&512?le.ctx.activate($,ee,ce,ye,Ee):re($,ee,ce,le,he,ye,Ee):pe(V,$,Ee)},re=(V,$,ee,ce,le,he,ye)=>{const we=V.component=Vy(V,ce,le);if(tl(V)&&(we.ctx.renderer=Ne),Hy(we),we.asyncDep){if(le&&le.registerDep(we,oe),!V.el){const Ee=we.subTree=L(un);H(null,Ee,$,ee)}}else oe(we,V,$,ee,le,he,ye)},pe=(V,$,ee)=>{const ce=$.component=V.component;if(BB(V,$,ee))if(ce.asyncDep&&!ce.asyncResolved){_e(ce,$,ee);return}else ce.next=$,xB(ce.update),ce.effect.dirty=!0,ce.update();else $.el=V.el,ce.vnode=$},oe=(V,$,ee,ce,le,he,ye)=>{const we=()=>{if(V.isMounted){let{next:Te,bu:Me,u:Be,parent:Ve,vnode:Ze}=V;{const kn=By(V);if(kn){Te&&(Te.el=Ze.el,_e(V,Te,ye)),kn.asyncDep.then(()=>{V.isUnmounted||we()});return}}let gt=Te,Et;ar(V,!1),Te?(Te.el=Ze.el,_e(V,Te,ye)):Te=Ze,Me&&gs(Me),(Et=Te.props&&Te.props.onVnodeBeforeUpdate)&&Ln(Et,Ve,Te,Ze),ar(V,!0);const Gt=Sc(V),Sn=V.subTree;V.subTree=Gt,N(Sn,Gt,x(Sn.el),X(Sn),V,le,he),Te.el=Gt.el,gt===null&&ag(V,Gt.el),Be&&ln(Be,le),(Et=Te.props&&Te.props.onVnodeUpdated)&&ln(()=>Ln(Et,Ve,Te,Ze),le)}else{let Te;const{el:Me,props:Be}=$,{bm:Ve,m:Ze,parent:gt}=V,Et=pr($);if(ar(V,!1),Ve&&gs(Ve),!Et&&(Te=Be&&Be.onVnodeBeforeMount)&&Ln(Te,gt,$),ar(V,!0),Me&&qe){const Gt=()=>{V.subTree=Sc(V),qe(Me,V.subTree,V,le,null)};Et?$.type.__asyncLoader().then(()=>!V.isUnmounted&&Gt()):Gt()}else{const Gt=V.subTree=Sc(V);N(null,Gt,ee,ce,V,le,he),$.el=Gt.el}if(Ze&&ln(Ze,le),!Et&&(Te=Be&&Be.onVnodeMounted)){const Gt=$;ln(()=>Ln(Te,gt,Gt),le)}($.shapeFlag&256||gt&&pr(gt.vnode)&&gt.vnode.shapeFlag&256)&&V.a&&ln(V.a,le),V.isMounted=!0,$=ee=ce=null}},Ee=V.effect=new vs(we,Cn,()=>hd(ue),V.scope),ue=V.update=()=>{Ee.dirty&&Ee.run()};ue.id=V.uid,ar(V,!0),ue()},_e=(V,$,ee)=>{$.component=V;const ce=V.vnode.props;V.vnode=$,V.next=null,wL(V,$.props,ce,ee),AL(V,$.children,ee),Bi(),P_(V),Li()},Z=(V,$,ee,ce,le,he,ye,we,Ee=!1)=>{const ue=V&&V.children,Te=V?V.shapeFlag:0,Me=$.children,{patchFlag:Be,shapeFlag:Ve}=$;if(Be>0){if(Be&128){Ce(ue,Me,ee,ce,le,he,ye,we,Ee);return}else if(Be&256){de(ue,Me,ee,ce,le,he,ye,we,Ee);return}}Ve&8?(Te&16&&ke(ue,le,he),Me!==ue&&y(ee,Me)):Te&16?Ve&16?Ce(ue,Me,ee,ce,le,he,ye,we,Ee):ke(ue,le,he,!0):(Te&8&&y(ee,""),Ve&16&&W(Me,ee,ce,le,he,ye,we,Ee))},de=(V,$,ee,ce,le,he,ye,we,Ee)=>{V=V||us,$=$||us;const ue=V.length,Te=$.length,Me=Math.min(ue,Te);let Be;for(Be=0;Be<Me;Be++){const Ve=$[Be]=Ee?yi($[Be]):$n($[Be]);N(V[Be],Ve,ee,null,le,he,ye,we,Ee)}ue>Te?ke(V,le,he,!0,!1,Me):W($,ee,ce,le,he,ye,we,Ee,Me)},Ce=(V,$,ee,ce,le,he,ye,we,Ee)=>{let ue=0;const Te=$.length;let Me=V.length-1,Be=Te-1;for(;ue<=Me&&ue<=Be;){const Ve=V[ue],Ze=$[ue]=Ee?yi($[ue]):$n($[ue]);if(go(Ve,Ze))N(Ve,Ze,ee,null,le,he,ye,we,Ee);else break;ue++}for(;ue<=Me&&ue<=Be;){const Ve=V[Me],Ze=$[Be]=Ee?yi($[Be]):$n($[Be]);if(go(Ve,Ze))N(Ve,Ze,ee,null,le,he,ye,we,Ee);else break;Me--,Be--}if(ue>Me){if(ue<=Be){const Ve=Be+1,Ze=Ve<Te?$[Ve].el:ce;for(;ue<=Be;)N(null,$[ue]=Ee?yi($[ue]):$n($[ue]),ee,Ze,le,he,ye,we,Ee),ue++}}else if(ue>Be)for(;ue<=Me;)Ae(V[ue],le,he,!0),ue++;else{const Ve=ue,Ze=ue,gt=new Map;for(ue=Ze;ue<=Be;ue++){const fn=$[ue]=Ee?yi($[ue]):$n($[ue]);fn.key!=null&&gt.set(fn.key,ue)}let Et,Gt=0;const Sn=Be-Ze+1;let kn=!1,Jt=0;const Xt=new Array(Sn);for(ue=0;ue<Sn;ue++)Xt[ue]=0;for(ue=Ve;ue<=Me;ue++){const fn=V[ue];if(Gt>=Sn){Ae(fn,le,he,!0);continue}let Rn;if(fn.key!=null)Rn=gt.get(fn.key);else for(Et=Ze;Et<=Be;Et++)if(Xt[Et-Ze]===0&&go(fn,$[Et])){Rn=Et;break}Rn===void 0?Ae(fn,le,he,!0):(Xt[Rn-Ze]=ue+1,Rn>=Jt?Jt=Rn:kn=!0,N(fn,$[Rn],ee,null,le,he,ye,we,Ee),Gt++)}const Hs=kn?DL(Xt):us;for(Et=Hs.length-1,ue=Sn-1;ue>=0;ue--){const fn=Ze+ue,Rn=$[fn],Tr=fn+1<Te?$[fn+1].el:ce;Xt[ue]===0?N(null,Rn,ee,Tr,le,he,ye,we,Ee):kn&&(Et<0||ue!==Hs[Et]?me(Rn,ee,Tr,2):Et--)}}},me=(V,$,ee,ce,le=null)=>{const{el:he,type:ye,transition:we,children:Ee,shapeFlag:ue}=V;if(ue&6){me(V.component.subTree,$,ee,ce);return}if(ue&128){V.suspense.move($,ee,ce);return}if(ue&64){ye.move(V,$,ee,Ne);return}if(ye===We){u(he,$,ee);for(let Me=0;Me<Ee.length;Me++)me(Ee[Me],$,ee,ce);u(V.anchor,$,ee);return}if(ye===br){B(V,$,ee);return}if(ce!==2&&ue&1&&we)if(ce===0)we.beforeEnter(he),u(he,$,ee),ln(()=>we.enter(he),le);else{const{leave:Me,delayLeave:Be,afterLeave:Ve}=we,Ze=()=>u(he,$,ee),gt=()=>{Me(he,()=>{Ze(),Ve&&Ve()})};Be?Be(he,Ze,gt):gt()}else u(he,$,ee)},Ae=(V,$,ee,ce=!1,le=!1)=>{const{type:he,props:ye,ref:we,children:Ee,dynamicChildren:ue,shapeFlag:Te,patchFlag:Me,dirs:Be}=V;if(we!=null&&Fc(we,null,ee,V,!0),Te&256){$.ctx.deactivate(V);return}const Ve=Te&1&&Be,Ze=!pr(V);let gt;if(Ze&&(gt=ye&&ye.onVnodeBeforeUnmount)&&Ln(gt,$,V),Te&6)se(V.component,ee,ce);else{if(Te&128){V.suspense.unmount(ee,ce);return}Ve&&Po(V,null,$,"beforeUnmount"),Te&64?V.type.remove(V,$,ee,le,Ne,ce):ue&&(he!==We||Me>0&&Me&64)?ke(ue,$,ee,!1,!0):(he===We&&Me&384||!le&&Te&16)&&ke(Ee,$,ee),ce&&Se(V)}(Ze&&(gt=ye&&ye.onVnodeUnmounted)||Ve)&&ln(()=>{gt&&Ln(gt,$,V),Ve&&Po(V,null,$,"unmounted")},ee)},Se=V=>{const{type:$,el:ee,anchor:ce,transition:le}=V;if($===We){De(ee,ce);return}if($===br){U(V);return}const he=()=>{f(ee),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(V.shapeFlag&1&&le&&!le.persisted){const{leave:ye,delayLeave:we}=le,Ee=()=>ye(ee,he);we?we(V.el,he,Ee):Ee()}else he()},De=(V,$)=>{let ee;for(;V!==$;)ee=A(V),f(V),V=ee;f($)},se=(V,$,ee)=>{const{bum:ce,scope:le,update:he,subTree:ye,um:we}=V;ce&&gs(ce),le.stop(),he&&(he.active=!1,Ae(ye,V,$,ee)),we&&ln(we,$),ln(()=>{V.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&V.asyncDep&&!V.asyncResolved&&V.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},ke=(V,$,ee,ce=!1,le=!1,he=0)=>{for(let ye=he;ye<V.length;ye++)Ae(V[ye],$,ee,ce,le)},X=V=>V.shapeFlag&6?X(V.component.subTree):V.shapeFlag&128?V.suspense.next():A(V.anchor||V.el);let ve=!1;const be=(V,$,ee)=>{V==null?$._vnode&&Ae($._vnode,null,null,!0):N($._vnode||null,V,$,null,null,null,ee),ve||(ve=!0,P_(),Oc(),ve=!1),$._vnode=V},Ne={p:N,um:Ae,m:me,r:Se,mt:re,mc:W,pc:Z,pbc:Y,n:X,o};let Pe,qe;return a&&([Pe,qe]=a(Ne)),{render:be,hydrate:Pe,createApp:bL(be,Pe)}}function Vh({type:o,props:a},c){return c==="svg"&&o==="foreignObject"||c==="mathml"&&o==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:c}function ar({effect:o,update:a},c){o.allowRecurse=a.allowRecurse=c}function Py(o,a){return(!o||o&&!o.pendingBranch)&&a&&!a.persisted}function kg(o,a,c=!1){const u=o.children,f=a.children;if(Le(u)&&Le(f))for(let g=0;g<u.length;g++){const p=u[g];let v=f[g];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=f[g]=yi(f[g]),v.el=p.el),c||kg(p,v)),v.type===Ni&&(v.el=p.el)}}function DL(o){const a=o.slice(),c=[0];let u,f,g,p,v;const k=o.length;for(u=0;u<k;u++){const C=o[u];if(C!==0){if(f=c[c.length-1],o[f]<C){a[u]=f,c.push(u);continue}for(g=0,p=c.length-1;g<p;)v=g+p>>1,o[c[v]]<C?g=v+1:p=v;C<o[c[g]]&&(g>0&&(a[u]=c[g-1]),c[g]=u)}}for(g=c.length,p=c[g-1];g-- >0;)c[g]=p,p=a[p];return c}function By(o){const a=o.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:By(a)}const TL=o=>o.__isTeleport,Ma=o=>o&&(o.disabled||o.disabled===""),W_=o=>typeof SVGElement<"u"&&o instanceof SVGElement,G_=o=>typeof MathMLElement=="function"&&o instanceof MathMLElement,mf=(o,a)=>{const c=o&&o.to;return Nt(c)?a?a(c):null:c},IL={name:"Teleport",__isTeleport:!0,process(o,a,c,u,f,g,p,v,k,C){const{mc:y,pc:x,pbc:A,o:{insert:E,querySelector:M,createText:N,createComment:O}}=C,H=Ma(a.props);let{shapeFlag:R,children:B,dynamicChildren:U}=a;if(o==null){const D=a.el=N(""),F=a.anchor=N("");E(D,c,u),E(F,c,u);const z=a.target=mf(a.props,M),W=a.targetAnchor=N("");z&&(E(W,z),p==="svg"||W_(z)?p="svg":(p==="mathml"||G_(z))&&(p="mathml"));const q=(Y,te)=>{R&16&&y(B,Y,te,f,g,p,v,k)};H?q(c,F):z&&q(z,W)}else{a.el=o.el;const D=a.anchor=o.anchor,F=a.target=o.target,z=a.targetAnchor=o.targetAnchor,W=Ma(o.props),q=W?c:F,Y=W?D:z;if(p==="svg"||W_(F)?p="svg":(p==="mathml"||G_(F))&&(p="mathml"),U?(A(o.dynamicChildren,U,q,f,g,p,v),kg(o,a,!0)):k||x(o,a,q,Y,f,g,p,v,!1),H)W?a.props&&o.props&&a.props.to!==o.props.to&&(a.props.to=o.props.to):vc(a,c,D,C,1);else if((a.props&&a.props.to)!==(o.props&&o.props.to)){const te=a.target=mf(a.props,M);te&&vc(a,te,null,C,0)}else W&&vc(a,F,z,C,1)}zy(a)},remove(o,a,c,u,{um:f,o:{remove:g}},p){const{shapeFlag:v,children:k,anchor:C,targetAnchor:y,target:x,props:A}=o;if(x&&g(y),p&&g(C),v&16){const E=p||!Ma(A);for(let M=0;M<k.length;M++){const N=k[M];f(N,a,c,E,!!N.dynamicChildren)}}},move:vc,hydrate:ML};function vc(o,a,c,{o:{insert:u},m:f},g=2){g===0&&u(o.targetAnchor,a,c);const{el:p,anchor:v,shapeFlag:k,children:C,props:y}=o,x=g===2;if(x&&u(p,a,c),(!x||Ma(y))&&k&16)for(let A=0;A<C.length;A++)f(C[A],a,c,2);x&&u(v,a,c)}function ML(o,a,c,u,f,g,{o:{nextSibling:p,parentNode:v,querySelector:k}},C){const y=a.target=mf(a.props,k);if(y){const x=y._lpa||y.firstChild;if(a.shapeFlag&16)if(Ma(a.props))a.anchor=C(p(o),a,v(o),c,u,f,g),a.targetAnchor=x;else{a.anchor=p(o);let A=x;for(;A;)if(A=p(A),A&&A.nodeType===8&&A.data==="teleport anchor"){a.targetAnchor=A,y._lpa=a.targetAnchor&&p(a.targetAnchor);break}C(x,a,y,c,u,f,g)}zy(a)}return a.anchor&&p(a.anchor)}const Ly=IL;function zy(o){const a=o.ctx;if(a&&a.ut){let c=o.children[0].el;for(;c&&c!==o.targetAnchor;)c.nodeType===1&&c.setAttribute("data-v-owner",a.uid),c=c.nextSibling;a.ut()}}const We=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),br=Symbol.for("v-stc"),Na=[];let zn=null;function it(o=!1){Na.push(zn=o?null:[])}function Oy(){Na.pop(),zn=Na[Na.length-1]||null}let Ar=1;function pf(o){Ar+=o}function Ry(o){return o.dynamicChildren=Ar>0?zn||us:null,Oy(),Ar>0&&zn&&zn.push(o),o}function Bt(o,a,c,u,f,g){return Ry(Qe(o,a,c,u,f,g,!0))}function so(o,a,c,u,f){return Ry(L(o,a,c,u,f,!0))}function ei(o){return o?o.__v_isVNode===!0:!1}function go(o,a){return o.type===a.type&&o.key===a.key}function NL(o){}const vd="__vInternal",Fy=({key:o})=>o!=null?o:null,Dc=({ref:o,ref_key:a,ref_for:c})=>(typeof o=="number"&&(o=""+o),o!=null?Nt(o)||Ot(o)||Ue(o)?{i:Kt,r:o,k:a,f:!!c}:o:null);function Qe(o,a=null,c=null,u=0,f=null,g=o===We?0:1,p=!1,v=!1){const k={__v_isVNode:!0,__v_skip:!0,type:o,props:a,key:a&&Fy(a),ref:a&&Dc(a),scopeId:gd,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:g,patchFlag:u,dynamicProps:f,dynamicChildren:null,appContext:null,ctx:Kt};return v?(wg(k,c),g&128&&o.normalize(k)):c&&(k.shapeFlag|=Nt(c)?8:16),Ar>0&&!p&&zn&&(k.patchFlag>0||g&6)&&k.patchFlag!==32&&zn.push(k),k}const L=PL;function PL(o,a=null,c=null,u=0,f=null,g=!1){if((!o||o===oy)&&(o=un),ei(o)){const v=vo(o,a,!0);return c&&wg(v,c),Ar>0&&!g&&zn&&(v.shapeFlag&6?zn[zn.indexOf(o)]=v:zn.push(v)),v.patchFlag|=-2,v}if(UL(o)&&(o=o.__vccOpts),a){a=vg(a);let{class:v,style:k}=a;v&&!Nt(v)&&(a.class=Qn(v)),yt(k)&&(tg(k)&&!Le(k)&&(k=zt({},k)),a.style=Ts(k))}const p=Nt(o)?1:ry(o)?128:TL(o)?64:yt(o)?4:Ue(o)?2:0;return Qe(o,a,c,u,f,p,g,!0)}function vg(o){return o?tg(o)||vd in o?zt({},o):o:null}function vo(o,a,c=!1){const{props:u,ref:f,patchFlag:g,children:p}=o,v=a?ot(u||{},a):u;return{__v_isVNode:!0,__v_skip:!0,type:o.type,props:v,key:v&&Fy(v),ref:a&&a.ref?c&&f?Le(f)?f.concat(Dc(a)):[f,Dc(a)]:Dc(a):f,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:p,target:o.target,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:a&&o.type!==We?g===-1?16:g|16:g,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:o.transition,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&vo(o.ssContent),ssFallback:o.ssFallback&&vo(o.ssFallback),el:o.el,anchor:o.anchor,ctx:o.ctx,ce:o.ce}}function Lt(o=" ",a=0){return L(Ni,null,o,a)}function BL(o,a){const c=L(br,null,o);return c.staticCount=a,c}function mo(o="",a=!1){return a?(it(),so(un,null,o)):L(un,null,o)}function $n(o){return o==null||typeof o=="boolean"?L(un):Le(o)?L(We,null,o.slice()):typeof o=="object"?yi(o):L(Ni,null,String(o))}function yi(o){return o.el===null&&o.patchFlag!==-1||o.memo?o:vo(o)}function wg(o,a){let c=0;const{shapeFlag:u}=o;if(a==null)a=null;else if(Le(a))c=16;else if(typeof a=="object")if(u&65){const f=a.default;f&&(f._c&&(f._d=!1),wg(o,f()),f._c&&(f._d=!0));return}else{c=32;const f=a._;!f&&!(vd in a)?a._ctx=Kt:f===3&&Kt&&(Kt.slots._===1?a._=1:(a._=2,o.patchFlag|=1024))}else Ue(a)?(a={default:a,_ctx:Kt},c=32):(a=String(a),u&64?(c=16,a=[Lt(a)]):c=8);o.children=a,o.shapeFlag|=c}function ot(...o){const a={};for(let c=0;c<o.length;c++){const u=o[c];for(const f in u)if(f==="class")a.class!==u.class&&(a.class=Qn([a.class,u.class]));else if(f==="style")a.style=Ts([a.style,u.style]);else if(Xa(f)){const g=a[f],p=u[f];p&&g!==p&&!(Le(g)&&g.includes(p))&&(a[f]=g?[].concat(g,p):p)}else f!==""&&(a[f]=u[f])}return a}function Ln(o,a,c,u=null){Yn(o,a,7,[c,u])}const LL=yy();let zL=0;function Vy(o,a,c){const u=o.type,f=(a?a.appContext:o.appContext)||LL,g={uid:zL++,vnode:o,type:u,parent:a,appContext:f,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(f.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ey(u,f),emitsOptions:ny(u,f),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:u.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return g.ctx={_:g},g.root=a?a.root:g,g.emit=SB.bind(null,g),o.ce&&o.ce(g),g}let Qt=null;const Fo=()=>Qt||Kt;let Vc,bf;{const o=Yf(),a=(c,u)=>{let f;return(f=o[c])||(f=o[c]=[]),f.push(u),g=>{f.length>1?f.forEach(p=>p(g)):f[0](g)}};Vc=a("__VUE_INSTANCE_SETTERS__",c=>Qt=c),bf=a("__VUE_SSR_SETTERS__",c=>ol=c)}const yr=o=>{const a=Qt;return Vc(o),o.scope.on(),()=>{o.scope.off(),Vc(a)}},kf=()=>{Qt&&Qt.scope.off(),Vc(null)};function jy(o){return o.vnode.shapeFlag&4}let ol=!1;function Hy(o,a=!1){a&&bf(a);const{props:c,children:u}=o.vnode,f=jy(o);vL(o,c,f,a),CL(o,u);const g=f?OL(o,a):void 0;return a&&bf(!1),g}function OL(o,a){const c=o.type;o.accessCache=Object.create(null),o.proxy=ng(new Proxy(o.ctx,uf));const{setup:u}=c;if(u){const f=o.setupContext=u.length>1?$y(o):null,g=yr(o);Bi();const p=Oo(u,o,0,[o.props,f]);if(Li(),g(),qf(p)){if(p.then(kf,kf),a)return p.then(v=>{vf(o,v,a)}).catch(v=>{Sr(v,o,0)});o.asyncDep=p}else vf(o,p,a)}else Uy(o,a)}function vf(o,a,c){Ue(a)?o.type.__ssrInlineRender?o.ssrRender=a:o.render=a:yt(a)&&(o.setupState=rg(a)),Uy(o,c)}let jc,wf;function RL(o){jc=o,wf=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,ZB))}}const FL=()=>!jc;function Uy(o,a,c){const u=o.type;if(!o.render){if(!a&&jc&&!u.render){const f=u.template||pg(o).template;if(f){const{isCustomElement:g,compilerOptions:p}=o.appContext.config,{delimiters:v,compilerOptions:k}=u,C=zt(zt({isCustomElement:g,delimiters:v},p),k);u.render=jc(f,C)}}o.render=u.render||Cn,wf&&wf(o)}{const f=yr(o);Bi();try{uL(o)}finally{Li(),f()}}}function VL(o){return o.attrsProxy||(o.attrsProxy=new Proxy(o.attrs,{get(a,c){return On(o,"get","$attrs"),a[c]}}))}function $y(o){const a=c=>{o.exposed=c||{}};return{get attrs(){return VL(o)},slots:o.slots,emit:o.emit,expose:a}}function wd(o){if(o.exposed)return o.exposeProxy||(o.exposeProxy=new Proxy(rg(ng(o.exposed)),{get(a,c){if(c in a)return a[c];if(c in Ia)return Ia[c](o)},has(a,c){return c in a||c in Ia}}))}const jL=/(?:^|[-_])(\w)/g,HL=o=>o.replace(jL,a=>a.toUpperCase()).replace(/[-_]/g,"");function Hc(o,a=!0){return Ue(o)?o.displayName||o.name:o.name||a&&o.__name}function Wy(o,a,c=!1){let u=Hc(a);if(!u&&a.__file){const f=a.__file.match(/([^/\\]+)\.\w+$/);f&&(u=f[1])}if(!u&&o&&o.parent){const f=g=>{for(const p in g)if(g[p]===a)return p};u=f(o.components||o.parent.type.components)||f(o.appContext.components)}return u?HL(u):c?"App":"Anonymous"}function UL(o){return Ue(o)&&"__vccOpts"in o}const G=(o,a)=>sB(o,a,ol);function $L(o,a,c=wt){const u=Fo(),f=dn(a),g=Wn(a),p=YA((k,C)=>{let y;return dy(()=>{const x=o[a];bo(y,x)&&(y=x,C())}),{get(){return k(),c.get?c.get(y):y},set(x){const A=u.vnode.props;!(A&&(a in A||f in A||g in A)&&(`onUpdate:${a}`in A||`onUpdate:${f}`in A||`onUpdate:${g}`in A))&&bo(x,y)&&(y=x,C()),u.emit(`update:${a}`,c.set?c.set(x):x)}}}),v=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return p[Symbol.iterator]=()=>{let k=0;return{next(){return k<2?{value:k++?o[v]||{}:p,done:!1}:{done:!0}}}},p}function ii(o,a,c){const u=arguments.length;return u===2?yt(a)&&!Le(a)?ei(a)?L(o,null,[a]):L(o,a):L(o,null,a):(u>3?c=Array.prototype.slice.call(arguments,2):u===3&&ei(c)&&(c=[c]),L(o,a,c))}function WL(){}function GL(o,a,c,u){const f=c[u];if(f&&Gy(f,o))return f;const g=a();return g.memo=o.slice(),c[u]=g}function Gy(o,a){const c=o.memo;if(c.length!=a.length)return!1;for(let u=0;u<c.length;u++)if(bo(c[u],a[u]))return!1;return Ar>0&&zn&&zn.push(o),!0}const qy="3.4.21",qL=Cn,KL=CB,YL=ls,QL=ty,ZL={createComponentInstance:Vy,setupComponent:Hy,renderComponentRoot:Sc,setCurrentRenderingInstance:Ua,isVNode:ei,normalizeVNode:$n},JL=ZL,XL=null,e3=null,t3=null;/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const n3="http://www.w3.org/2000/svg",o3="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,q_=xi&&xi.createElement("template"),i3={insert:(o,a,c)=>{a.insertBefore(o,c||null)},remove:o=>{const a=o.parentNode;a&&a.removeChild(o)},createElement:(o,a,c,u)=>{const f=a==="svg"?xi.createElementNS(n3,o):a==="mathml"?xi.createElementNS(o3,o):xi.createElement(o,c?{is:c}:void 0);return o==="select"&&u&&u.multiple!=null&&f.setAttribute("multiple",u.multiple),f},createText:o=>xi.createTextNode(o),createComment:o=>xi.createComment(o),setText:(o,a)=>{o.nodeValue=a},setElementText:(o,a)=>{o.textContent=a},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>xi.querySelector(o),setScopeId(o,a){o.setAttribute(a,"")},insertStaticContent(o,a,c,u,f,g){const p=c?c.previousSibling:a.lastChild;if(f&&(f===g||f.nextSibling))for(;a.insertBefore(f.cloneNode(!0),c),!(f===g||!(f=f.nextSibling)););else{q_.innerHTML=u==="svg"?`<svg>${o}</svg>`:u==="mathml"?`<math>${o}</math>`:o;const v=q_.content;if(u==="svg"||u==="mathml"){const k=v.firstChild;for(;k.firstChild;)v.appendChild(k.firstChild);v.removeChild(k)}a.insertBefore(v,c)}return[p?p.nextSibling:a.firstChild,c?c.previousSibling:a.lastChild]}},vi="transition",Ca="animation",_s=Symbol("_vtc"),wo=(o,{slots:a})=>ii(hy,Yy(o),a);wo.displayName="Transition";const Ky={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},r3=wo.props=zt({},fg,Ky),lr=(o,a=[])=>{Le(o)?o.forEach(c=>c(...a)):o&&o(...a)},K_=o=>o?Le(o)?o.some(a=>a.length>1):o.length>1:!1;function Yy(o){const a={};for(const K in o)K in Ky||(a[K]=o[K]);if(o.css===!1)return a;const{name:c="v",type:u,duration:f,enterFromClass:g=`${c}-enter-from`,enterActiveClass:p=`${c}-enter-active`,enterToClass:v=`${c}-enter-to`,appearFromClass:k=g,appearActiveClass:C=p,appearToClass:y=v,leaveFromClass:x=`${c}-leave-from`,leaveActiveClass:A=`${c}-leave-active`,leaveToClass:E=`${c}-leave-to`}=o,M=s3(f),N=M&&M[0],O=M&&M[1],{onBeforeEnter:H,onEnter:R,onEnterCancelled:B,onLeave:U,onLeaveCancelled:D,onBeforeAppear:F=H,onAppear:z=R,onAppearCancelled:W=B}=a,q=(K,J,re)=>{_i(K,J?y:v),_i(K,J?C:p),re&&re()},Y=(K,J)=>{K._isLeaving=!1,_i(K,x),_i(K,E),_i(K,A),J&&J()},te=K=>(J,re)=>{const pe=K?z:R,oe=()=>q(J,K,re);lr(pe,[J,oe]),Y_(()=>{_i(J,K?k:g),Yo(J,K?y:v),K_(pe)||Q_(J,u,N,oe)})};return zt(a,{onBeforeEnter(K){lr(H,[K]),Yo(K,g),Yo(K,p)},onBeforeAppear(K){lr(F,[K]),Yo(K,k),Yo(K,C)},onEnter:te(!1),onAppear:te(!0),onLeave(K,J){K._isLeaving=!0;const re=()=>Y(K,J);Yo(K,x),Zy(),Yo(K,A),Y_(()=>{!K._isLeaving||(_i(K,x),Yo(K,E),K_(U)||Q_(K,u,O,re))}),lr(U,[K,re])},onEnterCancelled(K){q(K,!1),lr(B,[K])},onAppearCancelled(K){q(K,!0),lr(W,[K])},onLeaveCancelled(K){Y(K),lr(D,[K])}})}function s3(o){if(o==null)return null;if(yt(o))return[jh(o.enter),jh(o.leave)];{const a=jh(o);return[a,a]}}function jh(o){return Bc(o)}function Yo(o,a){a.split(/\s+/).forEach(c=>c&&o.classList.add(c)),(o[_s]||(o[_s]=new Set)).add(a)}function _i(o,a){a.split(/\s+/).forEach(u=>u&&o.classList.remove(u));const c=o[_s];c&&(c.delete(a),c.size||(o[_s]=void 0))}function Y_(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let a3=0;function Q_(o,a,c,u){const f=o._endId=++a3,g=()=>{f===o._endId&&u()};if(c)return setTimeout(g,c);const{type:p,timeout:v,propCount:k}=Qy(o,a);if(!p)return u();const C=p+"end";let y=0;const x=()=>{o.removeEventListener(C,A),g()},A=E=>{E.target===o&&++y>=k&&x()};setTimeout(()=>{y<k&&x()},v+1),o.addEventListener(C,A)}function Qy(o,a){const c=window.getComputedStyle(o),u=M=>(c[M]||"").split(", "),f=u(`${vi}Delay`),g=u(`${vi}Duration`),p=Z_(f,g),v=u(`${Ca}Delay`),k=u(`${Ca}Duration`),C=Z_(v,k);let y=null,x=0,A=0;a===vi?p>0&&(y=vi,x=p,A=g.length):a===Ca?C>0&&(y=Ca,x=C,A=k.length):(x=Math.max(p,C),y=x>0?p>C?vi:Ca:null,A=y?y===vi?g.length:k.length:0);const E=y===vi&&/\b(transform|all)(,|$)/.test(u(`${vi}Property`).toString());return{type:y,timeout:x,propCount:A,hasTransform:E}}function Z_(o,a){for(;o.length<a.length;)o=o.concat(o);return Math.max(...a.map((c,u)=>J_(c)+J_(o[u])))}function J_(o){return o==="auto"?0:Number(o.slice(0,-1).replace(",","."))*1e3}function Zy(){return document.body.offsetHeight}function l3(o,a,c){const u=o[_s];u&&(a=(a?[a,...u]:[...u]).join(" ")),a==null?o.removeAttribute("class"):c?o.setAttribute("class",a):o.className=a}const Uc=Symbol("_vod"),Jy=Symbol("_vsh"),Oi={beforeMount(o,{value:a},{transition:c}){o[Uc]=o.style.display==="none"?"":o.style.display,c&&a?c.beforeEnter(o):Aa(o,a)},mounted(o,{value:a},{transition:c}){c&&a&&c.enter(o)},updated(o,{value:a,oldValue:c},{transition:u}){!a!=!c&&(u?a?(u.beforeEnter(o),Aa(o,!0),u.enter(o)):u.leave(o,()=>{Aa(o,!1)}):Aa(o,a))},beforeUnmount(o,{value:a}){Aa(o,a)}};function Aa(o,a){o.style.display=a?o[Uc]:"none",o[Jy]=!a}function c3(){Oi.getSSRProps=({value:o})=>{if(!o)return{style:{display:"none"}}}}const Xy=Symbol("");function d3(o){const a=Fo();if(!a)return;const c=a.ut=(f=o(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(g=>Cf(g,f))},u=()=>{const f=o(a.proxy);_f(a.subTree,f),c(f)};cy(u),yn(()=>{const f=new MutationObserver(u);f.observe(a.subTree.el.parentNode,{childList:!0}),kd(()=>f.disconnect())})}function _f(o,a){if(o.shapeFlag&128){const c=o.suspense;o=c.activeBranch,c.pendingBranch&&!c.isHydrating&&c.effects.push(()=>{_f(c.activeBranch,a)})}for(;o.component;)o=o.component.subTree;if(o.shapeFlag&1&&o.el)Cf(o.el,a);else if(o.type===We)o.children.forEach(c=>_f(c,a));else if(o.type===br){let{el:c,anchor:u}=o;for(;c&&(Cf(c,a),c!==u);)c=c.nextSibling}}function Cf(o,a){if(o.nodeType===1){const c=o.style;let u="";for(const f in a)c.setProperty(`--${f}`,a[f]),u+=`--${f}: ${a[f]};`;c[Xy]=u}}const u3=/(^|;)\s*display\s*:/;function h3(o,a,c){const u=o.style,f=Nt(c);let g=!1;if(c&&!f){if(a)if(Nt(a))for(const p of a.split(";")){const v=p.slice(0,p.indexOf(":")).trim();c[v]==null&&Tc(u,v,"")}else for(const p in a)c[p]==null&&Tc(u,p,"");for(const p in c)p==="display"&&(g=!0),Tc(u,p,c[p])}else if(f){if(a!==c){const p=u[Xy];p&&(c+=";"+p),u.cssText=c,g=u3.test(c)}}else a&&o.removeAttribute("style");Uc in o&&(o[Uc]=g?u.display:"",o[Jy]&&(u.display="none"))}const X_=/\s*!important$/;function Tc(o,a,c){if(Le(c))c.forEach(u=>Tc(o,a,u));else if(c==null&&(c=""),a.startsWith("--"))o.setProperty(a,c);else{const u=f3(o,a);X_.test(c)?o.setProperty(Wn(u),c.replace(X_,""),"important"):o[u]=c}}const eC=["Webkit","Moz","ms"],Hh={};function f3(o,a){const c=Hh[a];if(c)return c;let u=dn(a);if(u!=="filter"&&u in o)return Hh[a]=u;u=Er(u);for(let f=0;f<eC.length;f++){const g=eC[f]+u;if(g in o)return Hh[a]=g}return a}const tC="http://www.w3.org/1999/xlink";function g3(o,a,c,u,f){if(u&&a.startsWith("xlink:"))c==null?o.removeAttributeNS(tC,a.slice(6,a.length)):o.setAttributeNS(tC,a,c);else{const g=LP(a);c==null||g&&!IA(c)?o.removeAttribute(a):o.setAttribute(a,g?"":c)}}function m3(o,a,c,u,f,g,p){if(a==="innerHTML"||a==="textContent"){u&&p(u,f,g),o[a]=c==null?"":c;return}const v=o.tagName;if(a==="value"&&v!=="PROGRESS"&&!v.includes("-")){const C=v==="OPTION"?o.getAttribute("value")||"":o.value,y=c==null?"":c;(C!==y||!("_value"in o))&&(o.value=y),c==null&&o.removeAttribute(a),o._value=c;return}let k=!1;if(c===""||c==null){const C=typeof o[a];C==="boolean"?c=IA(c):c==null&&C==="string"?(c="",k=!0):C==="number"&&(c=0,k=!0)}try{o[a]=c}catch{}k&&o.removeAttribute(a)}function Qo(o,a,c,u){o.addEventListener(a,c,u)}function p3(o,a,c,u){o.removeEventListener(a,c,u)}const nC=Symbol("_vei");function b3(o,a,c,u,f=null){const g=o[nC]||(o[nC]={}),p=g[a];if(u&&p)p.value=u;else{const[v,k]=k3(a);if(u){const C=g[a]=_3(u,f);Qo(o,v,C,k)}else p&&(p3(o,v,p,k),g[a]=void 0)}}const oC=/(?:Once|Passive|Capture)$/;function k3(o){let a;if(oC.test(o)){a={};let u;for(;u=o.match(oC);)o=o.slice(0,o.length-u[0].length),a[u[0].toLowerCase()]=!0}return[o[2]===":"?o.slice(3):Wn(o.slice(2)),a]}let Uh=0;const v3=Promise.resolve(),w3=()=>Uh||(v3.then(()=>Uh=0),Uh=Date.now());function _3(o,a){const c=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=c.attached)return;Yn(C3(u,c.value),a,5,[u])};return c.value=o,c.attached=w3(),c}function C3(o,a){if(Le(a)){const c=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{c.call(o),o._stopped=!0},a.map(u=>f=>!f._stopped&&u&&u(f))}else return a}const iC=o=>o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&o.charCodeAt(2)>96&&o.charCodeAt(2)<123,A3=(o,a,c,u,f,g,p,v,k)=>{const C=f==="svg";a==="class"?l3(o,u,C):a==="style"?h3(o,c,u):Xa(a)?Wf(a)||b3(o,a,c,u,p):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):y3(o,a,u,C))?m3(o,a,u,g,p,v,k):(a==="true-value"?o._trueValue=u:a==="false-value"&&(o._falseValue=u),g3(o,a,u,C))};function y3(o,a,c,u){if(u)return!!(a==="innerHTML"||a==="textContent"||a in o&&iC(a)&&Ue(c));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&o.tagName==="INPUT"||a==="type"&&o.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const f=o.tagName;if(f==="IMG"||f==="VIDEO"||f==="CANVAS"||f==="SOURCE")return!1}return iC(a)&&Nt(c)?!1:a in o}/*! #__NO_SIDE_EFFECTS__ */function e1(o,a){const c=Ms(o);class u extends _d{constructor(g){super(c,g,a)}}return u.def=c,u}/*! #__NO_SIDE_EFFECTS__ */const x3=o=>e1(o,h1),E3=typeof HTMLElement<"u"?HTMLElement:class{};class _d extends E3{constructor(a,c={},u){super(),this._def=a,this._props=c,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&u?u(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Wt(()=>{this._connected||(Af(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let u=0;u<this.attributes.length;u++)this._setAttr(this.attributes[u].name);this._ob=new MutationObserver(u=>{for(const f of u)this._setAttr(f.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(u,f=!1)=>{const{props:g,styles:p}=u;let v;if(g&&!Le(g))for(const k in g){const C=g[k];(C===Number||C&&C.type===Number)&&(k in this._props&&(this._props[k]=Bc(this._props[k])),(v||(v=Object.create(null)))[dn(k)]=!0)}this._numberProps=v,f&&this._resolveProps(u),this._applyStyles(p),this._update()},c=this._def.__asyncLoader;c?c().then(u=>a(u,!0)):a(this._def)}_resolveProps(a){const{props:c}=a,u=Le(c)?c:Object.keys(c||{});for(const f of Object.keys(this))f[0]!=="_"&&u.includes(f)&&this._setProp(f,this[f],!0,!1);for(const f of u.map(dn))Object.defineProperty(this,f,{get(){return this._getProp(f)},set(g){this._setProp(f,g)}})}_setAttr(a){let c=this.getAttribute(a);const u=dn(a);this._numberProps&&this._numberProps[u]&&(c=Bc(c)),this._setProp(u,c,!1)}_getProp(a){return this._props[a]}_setProp(a,c,u=!0,f=!0){c!==this._props[a]&&(this._props[a]=c,f&&this._instance&&this._update(),u&&(c===!0?this.setAttribute(Wn(a),""):typeof c=="string"||typeof c=="number"?this.setAttribute(Wn(a),c+""):c||this.removeAttribute(Wn(a))))}_update(){Af(this._createVNode(),this.shadowRoot)}_createVNode(){const a=L(this._def,zt({},this._props));return this._instance||(a.ce=c=>{this._instance=c,c.isCE=!0;const u=(g,p)=>{this.dispatchEvent(new CustomEvent(g,{detail:p}))};c.emit=(g,...p)=>{u(g,p),Wn(g)!==g&&u(Wn(g),p)};let f=this;for(;f=f&&(f.parentNode||f.host);)if(f instanceof _d){c.parent=f._instance,c.provides=f._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(c=>{const u=document.createElement("style");u.textContent=c,this.shadowRoot.appendChild(u)})}}function S3(o="$style"){{const a=Fo();if(!a)return wt;const c=a.type.__cssModules;if(!c)return wt;const u=c[o];return u||wt}}const t1=new WeakMap,n1=new WeakMap,$c=Symbol("_moveCb"),rC=Symbol("_enterCb"),o1={name:"TransitionGroup",props:zt({},r3,{tag:String,moveClass:String}),setup(o,{slots:a}){const c=Fo(),u=hg();let f,g;return bd(()=>{if(!f.length)return;const p=o.moveClass||`${o.name||"v"}-move`;if(!N3(f[0].el,c.vnode.el,p))return;f.forEach(T3),f.forEach(I3);const v=f.filter(M3);Zy(),v.forEach(k=>{const C=k.el,y=C.style;Yo(C,p),y.transform=y.webkitTransform=y.transitionDuration="";const x=C[$c]=A=>{A&&A.target!==C||(!A||/transform$/.test(A.propertyName))&&(C.removeEventListener("transitionend",x),C[$c]=null,_i(C,p))};C.addEventListener("transitionend",x)})}),()=>{const p=Ge(o),v=Yy(p);let k=p.tag||We;f=g,g=a.default?md(a.default()):[];for(let C=0;C<g.length;C++){const y=g[C];y.key!=null&&Cr(y,ws(y,v,u,c))}if(f)for(let C=0;C<f.length;C++){const y=f[C];Cr(y,ws(y,v,u,c)),t1.set(y,y.el.getBoundingClientRect())}return L(k,null,g)}}},D3=o=>delete o.mode;o1.props;const i1=o1;function T3(o){const a=o.el;a[$c]&&a[$c](),a[rC]&&a[rC]()}function I3(o){n1.set(o,o.el.getBoundingClientRect())}function M3(o){const a=t1.get(o),c=n1.get(o),u=a.left-c.left,f=a.top-c.top;if(u||f){const g=o.el.style;return g.transform=g.webkitTransform=`translate(${u}px,${f}px)`,g.transitionDuration="0s",o}}function N3(o,a,c){const u=o.cloneNode(),f=o[_s];f&&f.forEach(v=>{v.split(/\s+/).forEach(k=>k&&u.classList.remove(k))}),c.split(/\s+/).forEach(v=>v&&u.classList.add(v)),u.style.display="none";const g=a.nodeType===1?a:a.parentNode;g.appendChild(u);const{hasTransform:p}=Qy(u);return g.removeChild(u),p}const Pi=o=>{const a=o.props["onUpdate:modelValue"]||!1;return Le(a)?c=>gs(a,c):a};function P3(o){o.target.composing=!0}function sC(o){const a=o.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const ao=Symbol("_assign"),Wc={created(o,{modifiers:{lazy:a,trim:c,number:u}},f){o[ao]=Pi(f);const g=u||f.props&&f.props.type==="number";Qo(o,a?"change":"input",p=>{if(p.target.composing)return;let v=o.value;c&&(v=v.trim()),g&&(v=Ra(v)),o[ao](v)}),c&&Qo(o,"change",()=>{o.value=o.value.trim()}),a||(Qo(o,"compositionstart",P3),Qo(o,"compositionend",sC),Qo(o,"change",sC))},mounted(o,{value:a}){o.value=a==null?"":a},beforeUpdate(o,{value:a,modifiers:{lazy:c,trim:u,number:f}},g){if(o[ao]=Pi(g),o.composing)return;const p=f||o.type==="number"?Ra(o.value):o.value,v=a==null?"":a;p!==v&&(document.activeElement===o&&o.type!=="range"&&(c||u&&o.value.trim()===v)||(o.value=v))}},_g={deep:!0,created(o,a,c){o[ao]=Pi(c),Qo(o,"change",()=>{const u=o._modelValue,f=Cs(o),g=o.checked,p=o[ao];if(Le(u)){const v=sd(u,f),k=v!==-1;if(g&&!k)p(u.concat(f));else if(!g&&k){const C=[...u];C.splice(v,1),p(C)}}else if(xr(u)){const v=new Set(u);g?v.add(f):v.delete(f),p(v)}else p(s1(o,g))})},mounted:aC,beforeUpdate(o,a,c){o[ao]=Pi(c),aC(o,a,c)}};function aC(o,{value:a,oldValue:c},u){o._modelValue=a,Le(a)?o.checked=sd(a,u.props.value)>-1:xr(a)?o.checked=a.has(u.props.value):a!==c&&(o.checked=Mi(a,s1(o,!0)))}const Cg={created(o,{value:a},c){o.checked=Mi(a,c.props.value),o[ao]=Pi(c),Qo(o,"change",()=>{o[ao](Cs(o))})},beforeUpdate(o,{value:a,oldValue:c},u){o[ao]=Pi(u),a!==c&&(o.checked=Mi(a,u.props.value))}},r1={deep:!0,created(o,{value:a,modifiers:{number:c}},u){const f=xr(a);Qo(o,"change",()=>{const g=Array.prototype.filter.call(o.options,p=>p.selected).map(p=>c?Ra(Cs(p)):Cs(p));o[ao](o.multiple?f?new Set(g):g:g[0]),o._assigning=!0,Wt(()=>{o._assigning=!1})}),o[ao]=Pi(u)},mounted(o,{value:a,modifiers:{number:c}}){lC(o,a,c)},beforeUpdate(o,a,c){o[ao]=Pi(c)},updated(o,{value:a,modifiers:{number:c}}){o._assigning||lC(o,a,c)}};function lC(o,a,c){const u=o.multiple,f=Le(a);if(!(u&&!f&&!xr(a))){for(let g=0,p=o.options.length;g<p;g++){const v=o.options[g],k=Cs(v);if(u)if(f){const C=typeof k;C==="string"||C==="number"?v.selected=a.includes(c?Ra(k):k):v.selected=sd(a,k)>-1}else v.selected=a.has(k);else if(Mi(Cs(v),a)){o.selectedIndex!==g&&(o.selectedIndex=g);return}}!u&&o.selectedIndex!==-1&&(o.selectedIndex=-1)}}function Cs(o){return"_value"in o?o._value:o.value}function s1(o,a){const c=a?"_trueValue":"_falseValue";return c in o?o[c]:a}const a1={created(o,a,c){wc(o,a,c,null,"created")},mounted(o,a,c){wc(o,a,c,null,"mounted")},beforeUpdate(o,a,c,u){wc(o,a,c,u,"beforeUpdate")},updated(o,a,c,u){wc(o,a,c,u,"updated")}};function l1(o,a){switch(o){case"SELECT":return r1;case"TEXTAREA":return Wc;default:switch(a){case"checkbox":return _g;case"radio":return Cg;default:return Wc}}}function wc(o,a,c,u,f){const p=l1(o.tagName,c.props&&c.props.type)[f];p&&p(o,a,c,u)}function B3(){Wc.getSSRProps=({value:o})=>({value:o}),Cg.getSSRProps=({value:o},a)=>{if(a.props&&Mi(a.props.value,o))return{checked:!0}},_g.getSSRProps=({value:o},a)=>{if(Le(o)){if(a.props&&sd(o,a.props.value)>-1)return{checked:!0}}else if(xr(o)){if(a.props&&o.has(a.props.value))return{checked:!0}}else if(o)return{checked:!0}},a1.getSSRProps=(o,a)=>{if(typeof a.type!="string")return;const c=l1(a.type.toUpperCase(),a.props&&a.props.type);if(c.getSSRProps)return c.getSSRProps(o,a)}}const L3=["ctrl","shift","alt","meta"],z3={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,a)=>L3.some(c=>o[`${c}Key`]&&!a.includes(c))},Ag=(o,a)=>{const c=o._withMods||(o._withMods={}),u=a.join(".");return c[u]||(c[u]=(f,...g)=>{for(let p=0;p<a.length;p++){const v=z3[a[p]];if(v&&v(f,a))return}return o(f,...g)})},O3={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R3=(o,a)=>{const c=o._withKeys||(o._withKeys={}),u=a.join(".");return c[u]||(c[u]=f=>{if(!("key"in f))return;const g=Wn(f.key);if(a.some(p=>p===g||O3[p]===g))return o(f)})},c1=zt({patchProp:A3},i3);let Pa,cC=!1;function d1(){return Pa||(Pa=Iy(c1))}function u1(){return Pa=cC?Pa:My(c1),cC=!0,Pa}const Af=(...o)=>{d1().render(...o)},h1=(...o)=>{u1().hydrate(...o)},f1=(...o)=>{const a=d1().createApp(...o),{mount:c}=a;return a.mount=u=>{const f=m1(u);if(!f)return;const g=a._component;!Ue(g)&&!g.render&&!g.template&&(g.template=f.innerHTML),f.innerHTML="";const p=c(f,!1,g1(f));return f instanceof Element&&(f.removeAttribute("v-cloak"),f.setAttribute("data-v-app","")),p},a},F3=(...o)=>{const a=u1().createApp(...o),{mount:c}=a;return a.mount=u=>{const f=m1(u);if(f)return c(f,!0,g1(f))},a};function g1(o){if(o instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&o instanceof MathMLElement)return"mathml"}function m1(o){return Nt(o)?document.querySelector(o):o}let dC=!1;const V3=()=>{dC||(dC=!0,B3(),c3())};/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const j3=()=>{},H3=Object.freeze(Object.defineProperty({__proto__:null,compile:j3,EffectScope:Qf,ReactiveEffect:vs,TrackOpTypes:gB,TriggerOpTypes:mB,customRef:YA,effect:RP,effectScope:ad,getCurrentScope:PA,isProxy:tg,isReactive:mr,isReadonly:_r,isRef:Ot,isShallow:Fa,markRaw:ng,onScopeDispose:An,proxyRefs:rg,reactive:cn,readonly:Is,ref:ze,shallowReactive:eg,shallowReadonly:rB,shallowRef:Fe,stop:FP,toRaw:Ge,toRef:$e,toRefs:ud,toValue:cB,triggerRef:lB,unref:Ht,camelize:dn,capitalize:Er,normalizeClass:Qn,normalizeProps:TA,normalizeStyle:Ts,toDisplayString:mn,toHandlerKey:Da,BaseTransition:hy,BaseTransitionPropsValidators:fg,Comment:un,DeprecationTypes:t3,ErrorCodes:_B,ErrorTypeStrings:KL,Fragment:We,KeepAlive:qB,Static:br,Suspense:OB,Teleport:Ly,Text:Ni,assertNumber:wB,callWithAsyncErrorHandling:Yn,callWithErrorHandling:Oo,cloneVNode:vo,compatUtils:e3,computed:G,createBlock:so,createCommentVNode:mo,createElementBlock:Bt,createElementVNode:Qe,createHydrationRenderer:My,createPropsRestProxy:cL,createRenderer:Iy,createSlots:wy,createStaticVNode:BL,createTextVNode:Lt,createVNode:L,defineAsyncComponent:WB,defineComponent:Ms,defineEmits:XB,defineExpose:eL,defineModel:oL,defineOptions:tL,defineProps:JB,defineSlots:nL,devtools:YL,getCurrentInstance:Fo,getTransitionRawChildren:md,guardReactiveProps:vg,h:ii,handleError:Sr,hasInjectionContext:kL,initCustomFormatter:WL,inject:pt,isMemoSame:Gy,isRuntimeOnly:FL,isVNode:ei,mergeDefaults:aL,mergeModels:lL,mergeProps:ot,nextTick:Wt,onActivated:gg,onBeforeMount:nl,onBeforeUnmount:bn,onBeforeUpdate:my,onDeactivated:mg,onErrorCaptured:vy,onMounted:yn,onRenderTracked:ky,onRenderTriggered:by,onServerPrefetch:py,onUnmounted:kd,onUpdated:bd,openBlock:it,popScopeId:TB,provide:Zt,pushScopeId:DB,queuePostFlushCb:zc,registerRuntimeCompiler:RL,renderList:Ti,renderSlot:YB,resolveComponent:cg,resolveDirective:zi,resolveDynamicComponent:iy,resolveFilter:XL,resolveTransitionHooks:ws,setBlockTracking:pf,setDevtoolsHook:QL,setTransitionHooks:Cr,ssrContextKey:ay,ssrUtils:JL,toHandlers:QB,transformVNodeArgs:NL,useAttrs:sL,useModel:$L,useSSRContext:ly,useSlots:rL,useTransitionState:hg,version:qy,warn:qL,watch:je,watchEffect:ko,watchPostEffect:cy,watchSyncEffect:dy,withAsyncContext:dL,withCtx:at,withDefaults:iL,withDirectives:Zn,withMemo:GL,withScopeId:IB,Transition:wo,TransitionGroup:i1,VueElement:_d,createApp:f1,createSSRApp:F3,defineCustomElement:e1,defineSSRCustomElement:x3,hydrate:h1,initDirectivesForSSR:V3,render:Af,useCssModule:S3,useCssVars:d3,vModelCheckbox:_g,vModelDynamic:a1,vModelRadio:Cg,vModelSelect:r1,vModelText:Wc,vShow:Oi,withKeys:R3,withModifiers:Ag},Symbol.toStringTag,{value:"Module"}));function Ro(o,a){let c;function u(){c=ad(),c.run(()=>a.length?a(()=>{c==null||c.stop(),u()}):a())}je(o,f=>{f&&!c?u():f||(c==null||c.stop(),c=void 0)},{immediate:!0}),An(()=>{c==null||c.stop()})}const It=typeof window<"u",yg=It&&"IntersectionObserver"in window,U3=It&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function uC(o,a,c){$3(o,a),a.set(o,c)}function $3(o,a){if(a.has(o))throw new TypeError("Cannot initialize the same private elements twice on an object")}function W3(o,a,c){var u=p1(o,a,"set");return G3(o,u,c),c}function G3(o,a,c){if(a.set)a.set.call(o,c);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=c}}function cr(o,a){var c=p1(o,a,"get");return q3(o,c)}function p1(o,a,c){if(!a.has(o))throw new TypeError("attempted to "+c+" private field on non-instance");return a.get(o)}function q3(o,a){return a.get?a.get.call(o):a.value}function b1(o,a,c){const u=a.length-1;if(u<0)return o===void 0?c:o;for(let f=0;f<u;f++){if(o==null)return c;o=o[a[f]]}return o==null||o[a[u]]===void 0?c:o[a[u]]}function Ns(o,a){if(o===a)return!0;if(o instanceof Date&&a instanceof Date&&o.getTime()!==a.getTime()||o!==Object(o)||a!==Object(a))return!1;const c=Object.keys(o);return c.length!==Object.keys(a).length?!1:c.every(u=>Ns(o[u],a[u]))}function yf(o,a,c){return o==null||!a||typeof a!="string"?c:o[a]!==void 0?o[a]:(a=a.replace(/\[(\w+)\]/g,".$1"),a=a.replace(/^\./,""),b1(o,a.split("."),c))}function Zo(o,a,c){if(a===!0)return o===void 0?c:o;if(a==null||typeof a=="boolean")return c;if(o!==Object(o)){if(typeof a!="function")return c;const f=a(o,c);return typeof f>"u"?c:f}if(typeof a=="string")return yf(o,a,c);if(Array.isArray(a))return b1(o,a,c);if(typeof a!="function")return c;const u=a(o,c);return typeof u>"u"?c:u}function k1(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:o},(c,u)=>a+u)}function Ye(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(o==null||o===""))return isNaN(+o)?String(o):isFinite(+o)?`${Number(o)}${a}`:void 0}function xf(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)}function Gc(o){if(o&&"$el"in o){const a=o.$el;return(a==null?void 0:a.nodeType)===Node.TEXT_NODE?a.nextElementSibling:a}return o}const hC=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function $h(o,a){return a.every(c=>o.hasOwnProperty(c))}function v1(o,a){const c={},u=new Set(Object.keys(o));for(const f of a)u.has(f)&&(c[f]=o[f]);return c}function fC(o,a,c){const u=Object.create(null),f=Object.create(null);for(const g in o)a.some(p=>p instanceof RegExp?p.test(g):p===g)&&!(c!=null&&c.some(p=>p===g))?u[g]=o[g]:f[g]=o[g];return[u,f]}function Ps(o,a){const c={...o};return a.forEach(u=>delete c[u]),c}const w1=/^on[^a-z]/,xg=o=>w1.test(o),K3=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function _1(o){const[a,c]=fC(o,[w1]),u=Ps(a,K3),[f,g]=fC(c,["class","style","id",/^data-/]);return Object.assign(f,a),Object.assign(g,u),[f,g]}function Xo(o){return o==null?[]:Array.isArray(o)?o:[o]}function Y3(o,a){let c=0;const u=function(){for(var f=arguments.length,g=new Array(f),p=0;p<f;p++)g[p]=arguments[p];clearTimeout(c),c=setTimeout(()=>o(...g),Ht(a))};return u.clear=()=>{clearTimeout(c)},u.immediate=o,u}function kr(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(a,Math.min(c,o))}function gC(o,a){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return o+c.repeat(Math.max(0,a-o.length))}function mC(o,a){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,a-o.length))+o}function Q3(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const c=[];let u=0;for(;u<o.length;)c.push(o.substr(u,a)),u+=a;return c}function qn(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;const u={};for(const f in o)u[f]=o[f];for(const f in a){const g=o[f],p=a[f];if(xf(g)&&xf(p)){u[f]=qn(g,p,c);continue}if(Array.isArray(g)&&Array.isArray(p)&&c){u[f]=c(g,p);continue}u[f]=p}return u}function C1(o){return o.map(a=>a.type===We?C1(a.children):a).flat()}function vr(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(vr.cache.has(o))return vr.cache.get(o);const a=o.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return vr.cache.set(o,a),a}vr.cache=new Map;function Ba(o,a){if(!a||typeof a!="object")return[];if(Array.isArray(a))return a.map(c=>Ba(o,c)).flat(1);if(Array.isArray(a.children))return a.children.map(c=>Ba(o,c)).flat(1);if(a.component){if(Object.getOwnPropertySymbols(a.component.provides).includes(o))return[a.component];if(a.component.subTree)return Ba(o,a.component.subTree).flat(1)}return[]}var _c=new WeakMap,os=new WeakMap;class Z3{constructor(a){uC(this,_c,{writable:!0,value:[]}),uC(this,os,{writable:!0,value:0}),this.size=a}push(a){cr(this,_c)[cr(this,os)]=a,W3(this,os,(cr(this,os)+1)%this.size)}values(){return cr(this,_c).slice(cr(this,os)).concat(cr(this,_c).slice(0,cr(this,os)))}}function Eg(o){const a=cn({}),c=G(o);return ko(()=>{for(const u in c.value)a[u]=c.value[u]},{flush:"sync"}),ud(a)}function qc(o,a){return o.includes(a)}function A1(o){return o[2].toLowerCase()+o.slice(3)}const po=()=>[Function,Array];function pC(o,a){return a="on"+Er(a),!!(o[a]||o[`${a}Once`]||o[`${a}Capture`]||o[`${a}OnceCapture`]||o[`${a}CaptureOnce`])}function J3(o){for(var a=arguments.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];if(Array.isArray(o))for(const f of o)f(...c);else typeof o=="function"&&o(...c)}function Kc(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(u=>`${u}${a?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...o.querySelectorAll(c)]}function y1(o,a,c){var p;let u,f=o.indexOf(document.activeElement);const g=a==="next"?1:-1;do f+=g,u=o[f];while((!u||u.offsetParent==null||!((p=c==null?void 0:c(u))==null||p))&&f<o.length&&f>=0);return u}function Yc(o,a){var u,f,g,p;const c=Kc(o);if(!a)(o===document.activeElement||!o.contains(document.activeElement))&&((u=c[0])==null||u.focus());else if(a==="first")(f=c[0])==null||f.focus();else if(a==="last")(g=c.at(-1))==null||g.focus();else if(typeof a=="number")(p=c[a])==null||p.focus();else{const v=y1(c,a);v?v.focus():Yc(o,a==="next"?"first":"last")}}function Qc(o,a){if(!(It&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${a})`)))return null;try{return!!o&&o.matches(a)}catch{return null}}function x1(o){return o.some(a=>ei(a)?a.type===un?!1:a.type!==We||x1(a.children):!0)?o:null}function X3(o,a){if(!It||o===0)return a(),()=>{};const c=window.setTimeout(a,o);return()=>window.clearTimeout(c)}function ez(o,a){const c=o.clientX,u=o.clientY,f=a.getBoundingClientRect(),g=f.left,p=f.top,v=f.right,k=f.bottom;return c>=g&&c<=v&&u>=p&&u<=k}const E1=["top","bottom"],tz=["start","end","left","right"];function Ef(o,a){let[c,u]=o.split(" ");return u||(u=qc(E1,c)?"start":qc(tz,c)?"top":"center"),{side:Sf(c,a),align:Sf(u,a)}}function Sf(o,a){return o==="start"?a?"right":"left":o==="end"?a?"left":"right":o}function Wh(o){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.side],align:o.align}}function Gh(o){return{side:o.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.align]}}function bC(o){return{side:o.align,align:o.side}}function kC(o){return qc(E1,o.side)?"y":"x"}class wr{constructor(a){let{x:c,y:u,width:f,height:g}=a;this.x=c,this.y=u,this.width=f,this.height=g}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function vC(o,a){return{x:{before:Math.max(0,a.left-o.left),after:Math.max(0,o.right-a.right)},y:{before:Math.max(0,a.top-o.top),after:Math.max(0,o.bottom-a.bottom)}}}function S1(o){return Array.isArray(o)?new wr({x:o[0],y:o[1],width:0,height:0}):o.getBoundingClientRect()}function Sg(o){const a=o.getBoundingClientRect(),c=getComputedStyle(o),u=c.transform;if(u){let f,g,p,v,k;if(u.startsWith("matrix3d("))f=u.slice(9,-1).split(/, /),g=+f[0],p=+f[5],v=+f[12],k=+f[13];else if(u.startsWith("matrix("))f=u.slice(7,-1).split(/, /),g=+f[0],p=+f[3],v=+f[4],k=+f[5];else return new wr(a);const C=c.transformOrigin,y=a.x-v-(1-g)*parseFloat(C),x=a.y-k-(1-p)*parseFloat(C.slice(C.indexOf(" ")+1)),A=g?a.width/g:o.offsetWidth+1,E=p?a.height/p:o.offsetHeight+1;return new wr({x:y,y:x,width:A,height:E})}else return new wr(a)}function ds(o,a,c){if(typeof o.animate>"u")return{finished:Promise.resolve()};let u;try{u=o.animate(a,c)}catch{return{finished:Promise.resolve()}}return typeof u.finished>"u"&&(u.finished=new Promise(f=>{u.onfinish=()=>{f(u)}})),u}const Ic=new WeakMap;function nz(o,a){Object.keys(a).forEach(c=>{if(xg(c)){const u=A1(c),f=Ic.get(o);if(a[c]==null)f==null||f.forEach(g=>{const[p,v]=g;p===u&&(o.removeEventListener(u,v),f.delete(g))});else if(!f||![...f].some(g=>g[0]===u&&g[1]===a[c])){o.addEventListener(u,a[c]);const g=f||new Set;g.add([u,a[c]]),Ic.has(o)||Ic.set(o,g)}}else a[c]==null?o.removeAttribute(c):o.setAttribute(c,a[c])})}function oz(o,a){Object.keys(a).forEach(c=>{if(xg(c)){const u=A1(c),f=Ic.get(o);f==null||f.forEach(g=>{const[p,v]=g;p===u&&(o.removeEventListener(u,v),f.delete(g))})}else o.removeAttribute(c)})}const is=2.4,wC=.2126729,_C=.7151522,CC=.072175,iz=.55,rz=.58,sz=.57,az=.62,Cc=.03,AC=1.45,lz=5e-4,cz=1.25,dz=1.25,yC=.078,xC=12.82051282051282,Ac=.06,EC=.001;function SC(o,a){const c=(o.r/255)**is,u=(o.g/255)**is,f=(o.b/255)**is,g=(a.r/255)**is,p=(a.g/255)**is,v=(a.b/255)**is;let k=c*wC+u*_C+f*CC,C=g*wC+p*_C+v*CC;if(k<=Cc&&(k+=(Cc-k)**AC),C<=Cc&&(C+=(Cc-C)**AC),Math.abs(C-k)<lz)return 0;let y;if(C>k){const x=(C**iz-k**rz)*cz;y=x<EC?0:x<yC?x-x*xC*Ac:x-Ac}else{const x=(C**az-k**sz)*dz;y=x>-EC?0:x>-yC?x-x*xC*Ac:x+Ac}return y*100}function uz(o,a){a=Array.isArray(a)?a.slice(0,-1).map(c=>`'${c}'`).join(", ")+` or '${a.at(-1)}'`:`'${a}'`}const Zc=.20689655172413793,hz=o=>o>Zc**3?Math.cbrt(o):o/(3*Zc**2)+4/29,fz=o=>o>Zc?o**3:3*Zc**2*(o-4/29);function D1(o){const a=hz,c=a(o[1]);return[116*c-16,500*(a(o[0]/.95047)-c),200*(c-a(o[2]/1.08883))]}function T1(o){const a=fz,c=(o[0]+16)/116;return[a(c+o[1]/500)*.95047,a(c),a(c-o[2]/200)*1.08883]}const gz=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],mz=o=>o<=.0031308?o*12.92:1.055*o**(1/2.4)-.055,pz=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],bz=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4;function I1(o){const a=Array(3),c=mz,u=gz;for(let f=0;f<3;++f)a[f]=Math.round(kr(c(u[f][0]*o[0]+u[f][1]*o[1]+u[f][2]*o[2]))*255);return{r:a[0],g:a[1],b:a[2]}}function Dg(o){let{r:a,g:c,b:u}=o;const f=[0,0,0],g=bz,p=pz;a=g(a/255),c=g(c/255),u=g(u/255);for(let v=0;v<3;++v)f[v]=p[v][0]*a+p[v][1]*c+p[v][2]*u;return f}function Df(o){return!!o&&/^(#|var\(--|(rgb|hsl)a?\()/.test(o)}function kz(o){return Df(o)&&!/^((rgb|hsl)a?\()?var\(--/.test(o)}const DC=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,vz={rgb:(o,a,c,u)=>({r:o,g:a,b:c,a:u}),rgba:(o,a,c,u)=>({r:o,g:a,b:c,a:u}),hsl:(o,a,c,u)=>TC({h:o,s:a,l:c,a:u}),hsla:(o,a,c,u)=>TC({h:o,s:a,l:c,a:u}),hsv:(o,a,c,u)=>Ga({h:o,s:a,v:c,a:u}),hsva:(o,a,c,u)=>Ga({h:o,s:a,v:c,a:u})};function zo(o){if(typeof o=="number")return{r:(o&16711680)>>16,g:(o&65280)>>8,b:o&255};if(typeof o=="string"&&DC.test(o)){const{groups:a}=o.match(DC),{fn:c,values:u}=a,f=u.split(/,\s*/).map(g=>g.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(c)?parseFloat(g)/100:parseFloat(g));return vz[c](...f)}else if(typeof o=="string"){let a=o.startsWith("#")?o.slice(1):o;return[3,4].includes(a.length)?a=a.split("").map(c=>c+c).join(""):[6,8].includes(a.length),_z(a)}else if(typeof o=="object"){if($h(o,["r","g","b"]))return o;if($h(o,["h","s","l"]))return Ga(M1(o));if($h(o,["h","s","v"]))return Ga(o)}throw new TypeError(`Invalid color: ${o==null?o:String(o)||o.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ga(o){const{h:a,s:c,v:u,a:f}=o,g=v=>{const k=(v+a/60)%6;return u-u*c*Math.max(Math.min(k,4-k,1),0)},p=[g(5),g(3),g(1)].map(v=>Math.round(v*255));return{r:p[0],g:p[1],b:p[2],a:f}}function TC(o){return Ga(M1(o))}function M1(o){const{h:a,s:c,l:u,a:f}=o,g=u+c*Math.min(u,1-u),p=g===0?0:2-2*u/g;return{h:a,s:p,v:g,a:f}}function yc(o){const a=Math.round(o).toString(16);return("00".substr(0,2-a.length)+a).toUpperCase()}function wz(o){let{r:a,g:c,b:u,a:f}=o;return`#${[yc(a),yc(c),yc(u),f!==void 0?yc(Math.round(f*255)):""].join("")}`}function _z(o){o=Cz(o);let[a,c,u,f]=Q3(o,2).map(g=>parseInt(g,16));return f=f===void 0?f:f/255,{r:a,g:c,b:u,a:f}}function Cz(o){return o.startsWith("#")&&(o=o.slice(1)),o=o.replace(/([^0-9a-f])/gi,"F"),(o.length===3||o.length===4)&&(o=o.split("").map(a=>a+a).join("")),o.length!==6&&(o=gC(gC(o,6),8,"F")),o}function Az(o,a){const c=D1(Dg(o));return c[0]=c[0]+a*10,I1(T1(c))}function yz(o,a){const c=D1(Dg(o));return c[0]=c[0]-a*10,I1(T1(c))}function xz(o){const a=zo(o);return Dg(a)[1]}function N1(o){const a=Math.abs(SC(zo(0),zo(o)));return Math.abs(SC(zo(16777215),zo(o)))>Math.min(a,50)?"#fff":"#000"}function Ie(o,a){return c=>Object.keys(o).reduce((u,f)=>{const p=typeof o[f]=="object"&&o[f]!=null&&!Array.isArray(o[f])?o[f]:{type:o[f]};return c&&f in c?u[f]={...p,default:c[f]}:u[f]=p,a&&!u[f].source&&(u[f].source=a),u},{})}const ft=Ie({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),As=Symbol.for("vuetify:defaults");function Ez(o){return ze(o)}function Tg(){const o=pt(As);if(!o)throw new Error("[Vuetify] Could not find defaults instance");return o}function Bs(o,a){const c=Tg(),u=ze(o),f=G(()=>{if(Ht(a==null?void 0:a.disabled))return c.value;const p=Ht(a==null?void 0:a.scoped),v=Ht(a==null?void 0:a.reset),k=Ht(a==null?void 0:a.root);if(u.value==null&&!(p||v||k))return c.value;let C=qn(u.value,{prev:c.value});if(p)return C;if(v||k){const y=Number(v||1/0);for(let x=0;x<=y&&!(!C||!("prev"in C));x++)C=C.prev;return C&&typeof k=="string"&&k in C&&(C=qn(qn(C,{prev:C}),C[k])),C}return C.prev?qn(C.prev,C):C});return Zt(As,f),f}function Sz(o,a){var c,u;return typeof((c=o.props)==null?void 0:c[a])<"u"||typeof((u=o.props)==null?void 0:u[vr(a)])<"u"}function Dz(){var k;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tg();const u=Yt("useDefaults");if(a=(k=a!=null?a:u.type.name)!=null?k:u.type.__name,!a)throw new Error("[Vuetify] Could not determine component name");const f=G(()=>{var C,y;return(y=c.value)==null?void 0:y[(C=o._as)!=null?C:a]}),g=new Proxy(o,{get(C,y){var A,E,M,N,O,H;const x=Reflect.get(C,y);return y==="class"||y==="style"?[(A=f.value)==null?void 0:A[y],x].filter(R=>R!=null):typeof y=="string"&&!Sz(u.vnode,y)&&(H=(O=(E=f.value)==null?void 0:E[y])!=null?O:(N=(M=c.value)==null?void 0:M.global)==null?void 0:N[y])!=null?H:x}}),p=Fe();ko(()=>{if(f.value){const C=Object.entries(f.value).filter(y=>{let[x]=y;return x.startsWith(x[0].toUpperCase())});p.value=C.length?Object.fromEntries(C):void 0}else p.value=void 0});function v(){const C=Nz(As,u);Zt(As,G(()=>{var y;return p.value?qn((y=C==null?void 0:C.value)!=null?y:{},p.value):C==null?void 0:C.value}))}return{props:g,provideSubDefaults:v}}function Ls(o){var a,c;if(o._setup=(a=o._setup)!=null?a:o.setup,!o.name)return o;if(o._setup){o.props=Ie((c=o.props)!=null?c:{},o.name)();const u=Object.keys(o.props).filter(f=>f!=="class"&&f!=="style");o.filterProps=function(g){return v1(g,u)},o.props._as=String,o.setup=function(g,p){var x;const v=Tg();if(!v.value)return o._setup(g,p);const{props:k,provideSubDefaults:C}=Dz(g,(x=g._as)!=null?x:o.name,v),y=o._setup(k,p);return C(),y}}return o}function Je(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a=>(o?Ls:Ms)(a)}function P1(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",c=arguments.length>2?arguments[2]:void 0;return Je()({name:c!=null?c:Er(dn(o.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...ft()},setup(u,f){let{slots:g}=f;return()=>{var p;return ii(u.tag,{class:[o,u.class],style:u.style},(p=g.default)==null?void 0:p.call(g))}}})}function B1(o){if(typeof o.getRootNode!="function"){for(;o.parentNode;)o=o.parentNode;return o!==document?null:document}const a=o.getRootNode();return a!==document&&a.getRootNode({composed:!0})!==document?null:a}const Jc="cubic-bezier(0.4, 0, 0.2, 1)",Tz="cubic-bezier(0.0, 0, 0.2, 1)",Iz="cubic-bezier(0.4, 0, 1, 1)";function Yt(o,a){const c=Fo();if(!c)throw new Error(`[Vuetify] ${o} ${a||"must be called from inside a setup function"}`);return c}function Vo(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const a=Yt(o).type;return vr((a==null?void 0:a.aliasName)||(a==null?void 0:a.name))}let L1=0,Mc=new WeakMap;function Co(){const o=Yt("getUid");if(Mc.has(o))return Mc.get(o);{const a=L1++;return Mc.set(o,a),a}}Co.reset=()=>{L1=0,Mc=new WeakMap};function z1(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;o;){if(a?Mz(o):Ig(o))return o;o=o.parentElement}return document.scrollingElement}function Xc(o,a){const c=[];if(a&&o&&!a.contains(o))return c;for(;o&&(Ig(o)&&c.push(o),o!==a);)o=o.parentElement;return c}function Ig(o){if(!o||o.nodeType!==Node.ELEMENT_NODE)return!1;const a=window.getComputedStyle(o);return a.overflowY==="scroll"||a.overflowY==="auto"&&o.scrollHeight>o.clientHeight}function Mz(o){if(!o||o.nodeType!==Node.ELEMENT_NODE)return!1;const a=window.getComputedStyle(o);return["scroll","auto"].includes(a.overflowY)}function Nz(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yt("injectSelf");const{provides:c}=a;if(c&&o in c)return c[o]}function Pz(o){for(;o;){if(window.getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}function lt(o){const a=Yt("useRender");a.render=o}function rn(o,a,c){let u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:x=>x,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:x=>x;const g=Yt("useProxiedModel"),p=ze(o[a]!==void 0?o[a]:c),v=vr(a),C=G(v!==a?()=>{var x,A,E,M;return o[a],!!((((x=g.vnode.props)==null?void 0:x.hasOwnProperty(a))||((A=g.vnode.props)==null?void 0:A.hasOwnProperty(v)))&&(((E=g.vnode.props)==null?void 0:E.hasOwnProperty(`onUpdate:${a}`))||((M=g.vnode.props)==null?void 0:M.hasOwnProperty(`onUpdate:${v}`))))}:()=>{var x,A;return o[a],!!(((x=g.vnode.props)==null?void 0:x.hasOwnProperty(a))&&((A=g.vnode.props)==null?void 0:A.hasOwnProperty(`onUpdate:${a}`)))});Ro(()=>!C.value,()=>{je(()=>o[a],x=>{p.value=x})});const y=G({get(){const x=o[a];return u(C.value?x:p.value)},set(x){const A=f(x),E=Ge(C.value?o[a]:p.value);E===A||u(E)===x||(p.value=A,g==null||g.emit(`update:${a}`,A))}});return Object.defineProperty(y,"externalValue",{get:()=>C.value?o[a]:p.value}),y}const Bz={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},IC="$vuetify.",MC=(o,a)=>o.replace(/\{(\d+)\}/g,(c,u)=>String(a[+u])),O1=(o,a,c)=>function(u){for(var f=arguments.length,g=new Array(f>1?f-1:0),p=1;p<f;p++)g[p-1]=arguments[p];if(!u.startsWith(IC))return MC(u,g);const v=u.replace(IC,""),k=o.value&&c.value[o.value],C=a.value&&c.value[a.value];let y=yf(k,v,null);return y||(`${u}${o.value}`,y=yf(C,v,null)),y||(y=u),typeof y!="string"&&(y=u),MC(y,g)};function R1(o,a){return(c,u)=>new Intl.NumberFormat([o.value,a.value],u).format(c)}function qh(o,a,c){var f,g;const u=rn(o,a,(f=o[a])!=null?f:c.value);return u.value=(g=o[a])!=null?g:c.value,je(c,p=>{o[a]==null&&(u.value=c.value)}),u}function F1(o){return a=>{const c=qh(a,"locale",o.current),u=qh(a,"fallback",o.fallback),f=qh(a,"messages",o.messages);return{name:"vuetify",current:c,fallback:u,messages:f,t:O1(c,u,f),n:R1(c,u),provide:F1({current:c,fallback:u,messages:f})}}}function Lz(o){var f,g;const a=Fe((f=o==null?void 0:o.locale)!=null?f:"en"),c=Fe((g=o==null?void 0:o.fallback)!=null?g:"en"),u=ze({en:Bz,...o==null?void 0:o.messages});return{name:"vuetify",current:a,fallback:c,messages:u,t:O1(a,c,u),n:R1(a,c),provide:F1({current:a,fallback:c,messages:u})}}const ed=Symbol.for("vuetify:locale");function zz(o){return o.name!=null}function Oz(o){const a=(o==null?void 0:o.adapter)&&zz(o==null?void 0:o.adapter)?o==null?void 0:o.adapter:Lz(o),c=Fz(a,o);return{...a,...c}}function Mg(){const o=pt(ed);if(!o)throw new Error("[Vuetify] Could not find injected locale instance");return o}function Rz(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Fz(o,a){var f;const c=ze((f=a==null?void 0:a.rtl)!=null?f:Rz()),u=G(()=>{var g;return(g=c.value[o.current.value])!=null?g:!1});return{isRtl:u,rtl:c,rtlClasses:G(()=>`v-locale--is-${u.value?"rtl":"ltr"}`)}}function Ri(){const o=pt(ed);if(!o)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:o.isRtl,rtlClasses:o.rtlClasses}}const Tf={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Vz(o,a){const c=[];let u=[];const f=V1(o),g=j1(o),p=(f.getDay()-Tf[a.slice(-2).toUpperCase()]+7)%7,v=(g.getDay()-Tf[a.slice(-2).toUpperCase()]+7)%7;for(let k=0;k<p;k++){const C=new Date(f);C.setDate(C.getDate()-(p-k)),u.push(C)}for(let k=1;k<=g.getDate();k++){const C=new Date(o.getFullYear(),o.getMonth(),k);u.push(C),u.length===7&&(c.push(u),u=[])}for(let k=1;k<7-v;k++){const C=new Date(g);C.setDate(C.getDate()+k),u.push(C)}return u.length>0&&c.push(u),c}function jz(o){const a=new Date(o);for(;a.getDay()!==0;)a.setDate(a.getDate()-1);return a}function Hz(o){const a=new Date(o);for(;a.getDay()!==6;)a.setDate(a.getDate()+1);return a}function V1(o){return new Date(o.getFullYear(),o.getMonth(),1)}function j1(o){return new Date(o.getFullYear(),o.getMonth()+1,0)}function Uz(o){const a=o.split("-").map(Number);return new Date(a[0],a[1]-1,a[2])}const $z=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function H1(o){if(o==null)return new Date;if(o instanceof Date)return o;if(typeof o=="string"){let a;if($z.test(o))return Uz(o);if(a=Date.parse(o),!isNaN(a))return new Date(a)}return null}const NC=new Date(2e3,0,2);function Wz(o){const a=Tf[o.slice(-2).toUpperCase()];return k1(7).map(c=>{const u=new Date(NC);return u.setDate(NC.getDate()+a+c),new Intl.DateTimeFormat(o,{weekday:"narrow"}).format(u)})}function Gz(o,a,c,u){var v;const f=(v=H1(o))!=null?v:new Date,g=u==null?void 0:u[a];if(typeof g=="function")return g(f,a,c);let p={};switch(a){case"fullDateWithWeekday":p={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":p={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":p={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":p={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":p={month:"long",day:"numeric"};break;case"monthAndYear":p={month:"long",year:"numeric"};break;case"month":p={month:"long"};break;case"monthShort":p={month:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(c).format(f.getDate());case"shortDate":p={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":p={weekday:"short"};break;case"year":p={year:"numeric"};break;default:p=g!=null?g:{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(c,p).format(f)}function qz(o,a){const c=o.toJsDate(a),u=c.getFullYear(),f=mC(String(c.getMonth()+1),2,"0"),g=mC(String(c.getDate()),2,"0");return`${u}-${f}-${g}`}function Kz(o){const[a,c,u]=o.split("-").map(Number);return new Date(a,c-1,u)}function Yz(o,a){const c=new Date(o);return c.setMinutes(c.getMinutes()+a),c}function Qz(o,a){const c=new Date(o);return c.setHours(c.getHours()+a),c}function Zz(o,a){const c=new Date(o);return c.setDate(c.getDate()+a),c}function Jz(o,a){const c=new Date(o);return c.setDate(c.getDate()+a*7),c}function Xz(o,a){const c=new Date(o);return c.setMonth(c.getMonth()+a),c}function eO(o){return o.getFullYear()}function tO(o){return o.getMonth()}function nO(o){return new Date(o.getFullYear(),o.getMonth()+1,1)}function oO(o){return o.getHours()}function iO(o){return o.getMinutes()}function rO(o){return new Date(o.getFullYear(),0,1)}function sO(o){return new Date(o.getFullYear(),11,31)}function aO(o,a){return If(o,a[0])&&cO(o,a[1])}function lO(o){const a=new Date(o);return a instanceof Date&&!isNaN(a.getTime())}function If(o,a){return o.getTime()>a.getTime()}function cO(o,a){return o.getTime()<a.getTime()}function PC(o,a){return o.getTime()===a.getTime()}function dO(o,a){return o.getDate()===a.getDate()&&o.getMonth()===a.getMonth()&&o.getFullYear()===a.getFullYear()}function uO(o,a){return o.getMonth()===a.getMonth()&&o.getFullYear()===a.getFullYear()}function hO(o,a,c){const u=new Date(o),f=new Date(a);return c==="month"?u.getMonth()-f.getMonth()+(u.getFullYear()-f.getFullYear())*12:Math.floor((u.getTime()-f.getTime())/(1e3*60*60*24))}function fO(o,a){const c=new Date(o);return c.setHours(a),c}function gO(o,a){const c=new Date(o);return c.setMinutes(a),c}function mO(o,a){const c=new Date(o);return c.setMonth(a),c}function pO(o,a){const c=new Date(o);return c.setFullYear(a),c}function bO(o){return new Date(o.getFullYear(),o.getMonth(),o.getDate())}function kO(o){return new Date(o.getFullYear(),o.getMonth(),o.getDate(),23,59,59,999)}class vO{constructor(a){this.locale=a.locale,this.formats=a.formats}date(a){return H1(a)}toJsDate(a){return a}toISO(a){return qz(this,a)}parseISO(a){return Kz(a)}addMinutes(a,c){return Yz(a,c)}addHours(a,c){return Qz(a,c)}addDays(a,c){return Zz(a,c)}addWeeks(a,c){return Jz(a,c)}addMonths(a,c){return Xz(a,c)}getWeekArray(a){return Vz(a,this.locale)}startOfWeek(a){return jz(a)}endOfWeek(a){return Hz(a)}startOfMonth(a){return V1(a)}endOfMonth(a){return j1(a)}format(a,c){return Gz(a,c,this.locale,this.formats)}isEqual(a,c){return PC(a,c)}isValid(a){return lO(a)}isWithinRange(a,c){return aO(a,c)}isAfter(a,c){return If(a,c)}isBefore(a,c){return!If(a,c)&&!PC(a,c)}isSameDay(a,c){return dO(a,c)}isSameMonth(a,c){return uO(a,c)}setMinutes(a,c){return gO(a,c)}setHours(a,c){return fO(a,c)}setMonth(a,c){return mO(a,c)}setYear(a,c){return pO(a,c)}getDiff(a,c,u){return hO(a,c,u)}getWeekdays(){return Wz(this.locale)}getYear(a){return eO(a)}getMonth(a){return tO(a)}getNextMonth(a){return nO(a)}getHours(a){return oO(a)}getMinutes(a){return iO(a)}startOfDay(a){return bO(a)}endOfDay(a){return kO(a)}startOfYear(a){return rO(a)}endOfYear(a){return sO(a)}}const wO=Symbol.for("vuetify:date-options"),BC=Symbol.for("vuetify:date-adapter");function _O(o,a){const c=qn({adapter:vO,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},o);return{options:c,instance:CO(c,a)}}function CO(o,a){var u;const c=cn(typeof o.adapter=="function"?new o.adapter({locale:(u=o.locale[a.current.value])!=null?u:a.current.value,formats:o.formats}):o.adapter);return je(a.current,f=>{var g,p;c.locale=(p=(g=o.locale[f])!=null?g:f)!=null?p:c.locale}),c}const Mf=Symbol.for("vuetify:display"),LC={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},AO=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:LC;return qn(LC,o)};function zC(o){return It&&!o?window.innerWidth:typeof o=="object"&&o.clientWidth||0}function OC(o){return It&&!o?window.innerHeight:typeof o=="object"&&o.clientHeight||0}function RC(o){const a=It&&!o?window.navigator.userAgent:"ssr";function c(M){return Boolean(a.match(M))}const u=c(/android/i),f=c(/iphone|ipad|ipod/i),g=c(/cordova/i),p=c(/electron/i),v=c(/chrome/i),k=c(/edge/i),C=c(/firefox/i),y=c(/opera/i),x=c(/win/i),A=c(/mac/i),E=c(/linux/i);return{android:u,ios:f,cordova:g,electron:p,chrome:v,edge:k,firefox:C,opera:y,win:x,mac:A,linux:E,touch:U3,ssr:a==="ssr"}}function yO(o,a){const{thresholds:c,mobileBreakpoint:u}=AO(o),f=Fe(OC(a)),g=Fe(RC(a)),p=cn({}),v=Fe(zC(a));function k(){f.value=OC(),v.value=zC()}function C(){k(),g.value=RC()}return ko(()=>{const y=v.value<c.sm,x=v.value<c.md&&!y,A=v.value<c.lg&&!(x||y),E=v.value<c.xl&&!(A||x||y),M=v.value<c.xxl&&!(E||A||x||y),N=v.value>=c.xxl,O=y?"xs":x?"sm":A?"md":E?"lg":M?"xl":"xxl",H=typeof u=="number"?u:c[u],R=v.value<H;p.xs=y,p.sm=x,p.md=A,p.lg=E,p.xl=M,p.xxl=N,p.smAndUp=!y,p.mdAndUp=!(y||x),p.lgAndUp=!(y||x||A),p.xlAndUp=!(y||x||A||E),p.smAndDown=!(A||E||M||N),p.mdAndDown=!(E||M||N),p.lgAndDown=!(M||N),p.xlAndDown=!N,p.name=O,p.height=f.value,p.width=v.value,p.mobile=R,p.mobileBreakpoint=u,p.platform=g.value,p.thresholds=c}),It&&window.addEventListener("resize",k,{passive:!0}),{...ud(p),update:C,ssr:!!a}}const U1=Ie({mobileBreakpoint:[Number,String]},"display");function Cd(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();const c=pt(Mf);if(!c)throw new Error("Could not find Vuetify display injection");const u=G(()=>{if(!o.mobileBreakpoint)return c.mobile.value;const g=typeof o.mobileBreakpoint=="number"?o.mobileBreakpoint:c.thresholds.value[o.mobileBreakpoint];return c.width.value<g}),f=G(()=>a?{[`${a}--mobile`]:u.value}:{});return{...c,displayClasses:f,mobile:u}}const xO=Symbol.for("vuetify:goto");function EO(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:o=>o,easeInQuad:o=>o**2,easeOutQuad:o=>o*(2-o),easeInOutQuad:o=>o<.5?2*o**2:-1+(4-2*o)*o,easeInCubic:o=>o**3,easeOutCubic:o=>--o**3+1,easeInOutCubic:o=>o<.5?4*o**3:(o-1)*(2*o-2)*(2*o-2)+1,easeInQuart:o=>o**4,easeOutQuart:o=>1- --o**4,easeInOutQuart:o=>o<.5?8*o**4:1-8*--o**4,easeInQuint:o=>o**5,easeOutQuint:o=>1+--o**5,easeInOutQuint:o=>o<.5?16*o**5:1+16*--o**5}}}function SO(o,a){return{rtl:a.isRtl,options:qn(EO(),o)}}const DO={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},TO={component:o=>ii(W1,{...o,class:"mdi"})},Mt=[String,Function,Object,Array],Nf=Symbol.for("vuetify:icons"),Ad=Ie({icon:{type:Mt},tag:{type:String,required:!0}},"icon"),FC=Je()({name:"VComponentIcon",props:Ad(),setup(o,a){let{slots:c}=a;return()=>{const u=o.icon;return L(o.tag,null,{default:()=>{var f;return[o.icon?L(u,null,null):(f=c.default)==null?void 0:f.call(c)]}})}}}),$1=Ls({name:"VSvgIcon",inheritAttrs:!1,props:Ad(),setup(o,a){let{attrs:c}=a;return()=>L(o.tag,ot(c,{style:null}),{default:()=>[L("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(o.icon)?o.icon.map(u=>Array.isArray(u)?L("path",{d:u[0],"fill-opacity":u[1]},null):L("path",{d:u},null)):L("path",{d:o.icon},null)])]})}});Ls({name:"VLigatureIcon",props:Ad(),setup(o){return()=>L(o.tag,null,{default:()=>[o.icon]})}});const W1=Ls({name:"VClassIcon",props:Ad(),setup(o){return()=>L(o.tag,{class:o.icon},null)}});function IO(){return{svg:{component:$1},class:{component:W1}}}function MO(o){var u;const a=IO(),c=(u=o==null?void 0:o.defaultSet)!=null?u:"mdi";return c==="mdi"&&!a.mdi&&(a.mdi=TO),qn({defaultSet:c,sets:a,aliases:{...DO,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},o)}const NO=o=>{const a=pt(Nf);if(!a)throw new Error("Missing Vuetify Icons provide!");return{iconData:G(()=>{var k;const u=Ht(o);if(!u)return{component:FC};let f=u;if(typeof f=="string"&&(f=f.trim(),f.startsWith("$")&&(f=(k=a.aliases)==null?void 0:k[f.slice(1)])),!f)throw new Error(`Could not find aliased icon "${u}"`);if(Array.isArray(f))return{component:$1,icon:f};if(typeof f!="string")return{component:FC,icon:f};const g=Object.keys(a.sets).find(C=>typeof f=="string"&&f.startsWith(`${C}:`)),p=g?f.slice(g.length+1):f;return{component:a.sets[g!=null?g:a.defaultSet].component,icon:p}})}},qa=Symbol.for("vuetify:theme"),hn=Ie({theme:String},"theme");function VC(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function PO(){var u,f,g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:VC();const a=VC();if(!o)return{...a,isDisabled:!0};const c={};for(const[p,v]of Object.entries((u=o.themes)!=null?u:{})){const k=v.dark||p==="dark"?(f=a.themes)==null?void 0:f.dark:(g=a.themes)==null?void 0:g.light;c[p]=qn(k,v)}return qn(a,{...o,themes:c})}function BO(o){const a=PO(o),c=ze(a.defaultTheme),u=ze(a.themes),f=G(()=>{const y={};for(const[x,A]of Object.entries(u.value)){const E=y[x]={...A,colors:{...A.colors}};if(a.variations)for(const M of a.variations.colors){const N=E.colors[M];if(!!N)for(const O of["lighten","darken"]){const H=O==="lighten"?Az:yz;for(const R of k1(a.variations[O],1))E.colors[`${M}-${O}-${R}`]=wz(H(zo(N),R))}}for(const M of Object.keys(E.colors)){if(/^on-[a-z]/.test(M)||E.colors[`on-${M}`])continue;const N=`on-${M}`,O=zo(E.colors[M]);E.colors[N]=N1(O)}}return y}),g=G(()=>f.value[c.value]),p=G(()=>{const y=[];g.value.dark&&dr(y,":root",["color-scheme: dark"]),dr(y,":root",jC(g.value));for(const[M,N]of Object.entries(f.value))dr(y,`.v-theme--${M}`,[`color-scheme: ${N.dark?"dark":"normal"}`,...jC(N)]);const x=[],A=[],E=new Set(Object.values(f.value).flatMap(M=>Object.keys(M.colors)));for(const M of E)/^on-[a-z]/.test(M)?dr(A,`.${M}`,[`color: rgb(var(--v-theme-${M})) !important`]):(dr(x,`.bg-${M}`,[`--v-theme-overlay-multiplier: var(--v-theme-${M}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${M})) !important`,`color: rgb(var(--v-theme-on-${M})) !important`]),dr(A,`.text-${M}`,[`color: rgb(var(--v-theme-${M})) !important`]),dr(A,`.border-${M}`,[`--v-border-color: var(--v-theme-${M})`]));return y.push(...x,...A),y.map((M,N)=>N===0?M:`    ${M}`).join("")});function v(){return{style:[{children:p.value,id:"vuetify-theme-stylesheet",nonce:a.cspNonce||!1}]}}function k(y){if(a.isDisabled)return;const x=y._context.provides.usehead;if(x)if(x.push){const E=x.push(v);It&&je(p,()=>{E.patch(v)})}else It?(x.addHeadObjs(G(v)),ko(()=>x.updateDOM())):x.addHeadObjs(v());else{let M=function(){if(typeof document<"u"&&!E){const N=document.createElement("style");N.type="text/css",N.id="vuetify-theme-stylesheet",a.cspNonce&&N.setAttribute("nonce",a.cspNonce),E=N,document.head.appendChild(E)}E&&(E.innerHTML=p.value)};var A=M;let E=It?document.getElementById("vuetify-theme-stylesheet"):null;It?je(p,M,{immediate:!0}):M()}}const C=G(()=>a.isDisabled?void 0:`v-theme--${c.value}`);return{install:k,isDisabled:a.isDisabled,name:c,themes:u,current:g,computedThemes:f,themeClasses:C,styles:p,global:{name:c,current:g}}}function xn(o){Yt("provideTheme");const a=pt(qa,null);if(!a)throw new Error("Could not find Vuetify theme injection");const c=G(()=>{var p;return(p=o.theme)!=null?p:a.name.value}),u=G(()=>a.themes.value[c.value]),f=G(()=>a.isDisabled?void 0:`v-theme--${c.value}`),g={...a,name:c,current:u,themeClasses:f};return Zt(qa,g),g}function LO(){Yt("useTheme");const o=pt(qa,null);if(!o)throw new Error("Could not find Vuetify theme injection");return o}function dr(o,a,c){o.push(`${a} {
`,...c.map(u=>`  ${u};
`),`}
`)}function jC(o){const a=o.dark?2:1,c=o.dark?1:2,u=[];for(const[f,g]of Object.entries(o.colors)){const p=zo(g);u.push(`--v-theme-${f}: ${p.r},${p.g},${p.b}`),f.startsWith("on-")||u.push(`--v-theme-${f}-overlay-multiplier: ${xz(g)>.18?a:c}`)}for(const[f,g]of Object.entries(o.variables)){const p=typeof g=="string"&&g.startsWith("#")?zo(g):void 0,v=p?`${p.r}, ${p.g}, ${p.b}`:void 0;u.push(`--v-${f}: ${v!=null?v:g}`)}return u}function ys(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const c=ze(),u=ze();if(It){const f=new ResizeObserver(g=>{o==null||o(g,f),g.length&&(a==="content"?u.value=g[0].contentRect:u.value=g[0].target.getBoundingClientRect())});bn(()=>{f.disconnect()}),je(c,(g,p)=>{p&&(f.unobserve(Gc(p)),u.value=void 0),g&&f.observe(Gc(g))},{flush:"post"})}return{resizeRef:c,contentRect:Is(u)}}const td=Symbol.for("vuetify:layout"),G1=Symbol.for("vuetify:layout-item"),HC=1e3,zO=Ie({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),OO=Ie({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function RO(){const o=pt(td);if(!o)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:o.getLayoutItem,mainRect:o.mainRect,mainStyles:o.mainStyles}}function FO(o){var v;const a=pt(td);if(!a)throw new Error("[Vuetify] Could not find injected layout");const c=(v=o.id)!=null?v:`layout-item-${Co()}`,u=Yt("useLayoutItem");Zt(G1,{id:c});const f=Fe(!1);mg(()=>f.value=!0),gg(()=>f.value=!1);const{layoutItemStyles:g,layoutItemScrimStyles:p}=a.register(u,{...o,active:G(()=>f.value?!1:o.active.value),id:c});return bn(()=>a.unregister(c)),{layoutItemStyles:g,layoutRect:a.layoutRect,layoutItemScrimStyles:p}}const VO=(o,a,c,u)=>{let f={top:0,left:0,right:0,bottom:0};const g=[{id:"",layer:{...f}}];for(const p of o){const v=a.get(p),k=c.get(p),C=u.get(p);if(!v||!k||!C)continue;const y={...f,[v.value]:parseInt(f[v.value],10)+(C.value?parseInt(k.value,10):0)};g.push({id:p,layer:y}),f=y}return g};function jO(o){const a=pt(td,null),c=G(()=>a?a.rootZIndex.value-100:HC),u=ze([]),f=cn(new Map),g=cn(new Map),p=cn(new Map),v=cn(new Map),k=cn(new Map),{resizeRef:C,contentRect:y}=ys(),x=G(()=>{var W;const F=new Map,z=(W=o.overlaps)!=null?W:[];for(const q of z.filter(Y=>Y.includes(":"))){const[Y,te]=q.split(":");if(!u.value.includes(Y)||!u.value.includes(te))continue;const K=f.get(Y),J=f.get(te),re=g.get(Y),pe=g.get(te);!K||!J||!re||!pe||(F.set(te,{position:K.value,amount:parseInt(re.value,10)}),F.set(Y,{position:J.value,amount:-parseInt(pe.value,10)}))}return F}),A=G(()=>{const F=[...new Set([...p.values()].map(W=>W.value))].sort((W,q)=>W-q),z=[];for(const W of F){const q=u.value.filter(Y=>{var te;return((te=p.get(Y))==null?void 0:te.value)===W});z.push(...q)}return VO(z,f,g,v)}),E=G(()=>!Array.from(k.values()).some(F=>F.value)),M=G(()=>A.value[A.value.length-1].layer),N=G(()=>({"--v-layout-left":Ye(M.value.left),"--v-layout-right":Ye(M.value.right),"--v-layout-top":Ye(M.value.top),"--v-layout-bottom":Ye(M.value.bottom),...E.value?void 0:{transition:"none"}})),O=G(()=>A.value.slice(1).map((F,z)=>{let{id:W}=F;const{layer:q}=A.value[z],Y=g.get(W),te=f.get(W);return{id:W,...q,size:Number(Y.value),position:te.value}})),H=F=>O.value.find(z=>z.id===F),R=Yt("createLayout"),B=Fe(!1);yn(()=>{B.value=!0}),Zt(td,{register:(F,z)=>{let{id:W,order:q,position:Y,layoutSize:te,elementSize:K,active:J,disableTransitions:re,absolute:pe}=z;p.set(W,q),f.set(W,Y),g.set(W,te),v.set(W,J),re&&k.set(W,re);const _e=Ba(G1,R==null?void 0:R.vnode).indexOf(F);_e>-1?u.value.splice(_e,0,W):u.value.push(W);const Z=G(()=>O.value.findIndex(Ae=>Ae.id===W)),de=G(()=>c.value+A.value.length*2-Z.value*2),Ce=G(()=>{const Ae=Y.value==="left"||Y.value==="right",Se=Y.value==="right",De=Y.value==="bottom",se={[Y.value]:0,zIndex:de.value,transform:`translate${Ae?"X":"Y"}(${(J.value?0:-110)*(Se||De?-1:1)}%)`,position:pe.value||c.value!==HC?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!B.value)return se;const ke=O.value[Z.value];if(!ke)throw new Error(`[Vuetify] Could not find layout item "${W}"`);const X=x.value.get(W);return X&&(ke[X.position]+=X.amount),{...se,height:Ae?`calc(100% - ${ke.top}px - ${ke.bottom}px)`:K.value?`${K.value}px`:void 0,left:Se?void 0:`${ke.left}px`,right:Se?`${ke.right}px`:void 0,top:Y.value!=="bottom"?`${ke.top}px`:void 0,bottom:Y.value!=="top"?`${ke.bottom}px`:void 0,width:Ae?K.value?`${K.value}px`:void 0:`calc(100% - ${ke.left}px - ${ke.right}px)`}}),me=G(()=>({zIndex:de.value-1}));return{layoutItemStyles:Ce,layoutItemScrimStyles:me,zIndex:de}},unregister:F=>{p.delete(F),f.delete(F),g.delete(F),v.delete(F),k.delete(F),u.value=u.value.filter(z=>z!==F)},mainRect:M,mainStyles:N,getLayoutItem:H,items:O,layoutRect:y,rootZIndex:c});const U=G(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),D=G(()=>({zIndex:a?c.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:U,layoutStyles:D,getLayoutItem:H,items:O,layoutRect:y,layoutRef:C}}function q1(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:a,...c}=o,u=qn(a,c),{aliases:f={},components:g={},directives:p={}}=u,v=Ez(u.defaults),k=yO(u.display,u.ssr),C=BO(u.theme),y=MO(u.icons),x=Oz(u.locale),A=_O(u.date,x),E=SO(u.goTo,x);return{install:N=>{for(const O in p)N.directive(O,p[O]);for(const O in g)N.component(O,g[O]);for(const O in f)N.component(O,Ls({...f[O],name:O,aliasName:f[O].name}));if(C.install(N),N.provide(As,v),N.provide(Mf,k),N.provide(qa,C),N.provide(Nf,y),N.provide(ed,x),N.provide(wO,A.options),N.provide(BC,A.instance),N.provide(xO,E),It&&u.ssr)if(N.$nuxt)N.$nuxt.hook("app:suspense:resolve",()=>{k.update()});else{const{mount:O}=N;N.mount=function(){const H=O(...arguments);return Wt(()=>k.update()),N.mount=O,H}}Co.reset(),N.mixin({computed:{$vuetify(){return cn({defaults:rs.call(this,As),display:rs.call(this,Mf),theme:rs.call(this,qa),icons:rs.call(this,Nf),locale:rs.call(this,ed),date:rs.call(this,BC)})}}})},defaults:v,display:k,theme:C,icons:y,locale:x,date:A,goTo:E}}const HO="3.5.7";q1.version=HO;function rs(o){var u,f,g;const a=this.$,c=(g=(u=a.parent)==null?void 0:u.provides)!=null?g:(f=a.vnode.appContext)==null?void 0:f.provides;if(c&&o in c)return c[o]}const UO=Ie({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Kn=Je(!1)({name:"VDefaultsProvider",props:UO(),setup(o,a){let{slots:c}=a;const{defaults:u,disabled:f,reset:g,root:p,scoped:v}=ud(o);return Bs(u,{reset:g,root:p,scoped:v,disabled:f}),()=>{var k;return(k=c.default)==null?void 0:k.call(c)}}});function Ng(o){return Eg(()=>{const a=[],c={};if(o.value.background)if(Df(o.value.background)){if(c.backgroundColor=o.value.background,!o.value.text&&kz(o.value.background)){const u=zo(o.value.background);if(u.a==null||u.a===1){const f=N1(u);c.color=f,c.caretColor=f}}}else a.push(`bg-${o.value.background}`);return o.value.text&&(Df(o.value.text)?(c.color=o.value.text,c.caretColor=o.value.text):a.push(`text-${o.value.text}`)),{colorClasses:a,colorStyles:c}})}function ti(o,a){const c=G(()=>({text:Ot(o)?o.value:a?o[a]:null})),{colorClasses:u,colorStyles:f}=Ng(c);return{textColorClasses:u,textColorStyles:f}}function ni(o,a){const c=G(()=>({background:Ot(o)?o.value:a?o[a]:null})),{colorClasses:u,colorStyles:f}=Ng(c);return{backgroundColorClasses:u,backgroundColorStyles:f}}const $O=["x-small","small","default","large","x-large"],il=Ie({size:{type:[String,Number],default:"default"}},"size");function rl(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return Eg(()=>{let c,u;return qc($O,o.size)?c=`${a}--size-${o.size}`:o.size&&(u={width:Ye(o.size),height:Ye(o.size)}),{sizeClasses:c,sizeStyles:u}})}const En=Ie({tag:{type:String,default:"div"}},"tag"),WO=Ie({color:String,start:Boolean,end:Boolean,icon:Mt,...ft(),...il(),...En({tag:"i"}),...hn()},"VIcon"),ht=Je()({name:"VIcon",props:WO(),setup(o,a){let{attrs:c,slots:u}=a;const f=ze(),{themeClasses:g}=xn(o),{iconData:p}=NO(G(()=>f.value||o.icon)),{sizeClasses:v}=rl(o),{textColorClasses:k,textColorStyles:C}=ti($e(o,"color"));return lt(()=>{var x,A;const y=(x=u.default)==null?void 0:x.call(u);return y&&(f.value=(A=C1(y).filter(E=>E.type===Ni&&E.children&&typeof E.children=="string")[0])==null?void 0:A.children),L(p.value.component,{tag:o.tag,icon:p.value.icon,class:["v-icon","notranslate",g.value,v.value,k.value,{"v-icon--clickable":!!c.onClick,"v-icon--start":o.start,"v-icon--end":o.end},o.class],style:[v.value?void 0:{fontSize:Ye(o.size),height:Ye(o.size),width:Ye(o.size)},C.value,o.style],role:c.onClick?"button":void 0,"aria-hidden":!c.onClick},{default:()=>[y]})}),{}}});const zs=Ie({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Os(o){return{dimensionStyles:G(()=>({height:Ye(o.height),maxHeight:Ye(o.maxHeight),maxWidth:Ye(o.maxWidth),minHeight:Ye(o.minHeight),minWidth:Ye(o.minWidth),width:Ye(o.width)}))}}function GO(o){return{aspectStyles:G(()=>{const a=Number(o.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const K1=Ie({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...ft(),...zs()},"VResponsive"),UC=Je()({name:"VResponsive",props:K1(),setup(o,a){let{slots:c}=a;const{aspectStyles:u}=GO(o),{dimensionStyles:f}=Os(o);return lt(()=>{var g;return L("div",{class:["v-responsive",{"v-responsive--inline":o.inline},o.class],style:[f.value,o.style]},[L("div",{class:"v-responsive__sizer",style:u.value},null),(g=c.additional)==null?void 0:g.call(c),c.default&&L("div",{class:["v-responsive__content",o.contentClass]},[c.default()])])}),{}}}),jo=Ie({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ho(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return{roundedClasses:G(()=>{const u=Ot(o)?o.value:o.rounded,f=Ot(o)?o.value:o.tile,g=[];if(u===!0||u==="")g.push(`${a}--rounded`);else if(typeof u=="string"||u===0)for(const p of String(u).split(" "))g.push(`rounded-${p}`);else f&&g.push("rounded-0");return g})}}const sl=Ie({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:o=>o!==!0}},"transition"),Si=(o,a)=>{let{slots:c}=a;const{transition:u,disabled:f,...g}=o,{component:p=wo,...v}=typeof u=="object"?u:{};return ii(p,ot(typeof u=="string"?{name:f?"":u}:v,g,{disabled:f}),c)};function qO(o,a){if(!yg)return;const c=a.modifiers||{},u=a.value,{handler:f,options:g}=typeof u=="object"?u:{handler:u,options:{}},p=new IntersectionObserver(function(){var x;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],k=arguments.length>1?arguments[1]:void 0;const C=(x=o._observe)==null?void 0:x[a.instance.$.uid];if(!C)return;const y=v.some(A=>A.isIntersecting);f&&(!c.quiet||C.init)&&(!c.once||y||C.init)&&f(y,v,k),y&&c.once?Y1(o,a):C.init=!0},g);o._observe=Object(o._observe),o._observe[a.instance.$.uid]={init:!1,observer:p},p.observe(o)}function Y1(o,a){var u;const c=(u=o._observe)==null?void 0:u[a.instance.$.uid];!c||(c.observer.unobserve(o),delete o._observe[a.instance.$.uid])}const KO={mounted:qO,unmounted:Y1},Q1=KO,YO=Ie({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...K1(),...ft(),...jo(),...sl()},"VImg"),QO=Je()({name:"VImg",directives:{intersect:Q1},props:YO(),emits:{loadstart:o=>!0,load:o=>!0,error:o=>!0},setup(o,a){let{emit:c,slots:u}=a;const{backgroundColorClasses:f,backgroundColorStyles:g}=ni($e(o,"color")),{roundedClasses:p}=Ho(o),v=Yt("VImg"),k=Fe(""),C=ze(),y=Fe(o.eager?"loading":"idle"),x=Fe(),A=Fe(),E=G(()=>o.src&&typeof o.src=="object"?{src:o.src.src,srcset:o.srcset||o.src.srcset,lazySrc:o.lazySrc||o.src.lazySrc,aspect:Number(o.aspectRatio||o.src.aspect||0)}:{src:o.src,srcset:o.srcset,lazySrc:o.lazySrc,aspect:Number(o.aspectRatio||0)}),M=G(()=>E.value.aspect||x.value/A.value||0);je(()=>o.src,()=>{N(y.value!=="idle")}),je(M,(K,J)=>{!K&&J&&C.value&&U(C.value)}),nl(()=>N());function N(K){if(!(o.eager&&K)&&!(yg&&!K&&!o.eager)){if(y.value="loading",E.value.lazySrc){const J=new Image;J.src=E.value.lazySrc,U(J,null)}!E.value.src||Wt(()=>{var J;c("loadstart",((J=C.value)==null?void 0:J.currentSrc)||E.value.src),setTimeout(()=>{var re;if(!v.isUnmounted)if((re=C.value)!=null&&re.complete){if(C.value.naturalWidth||H(),y.value==="error")return;M.value||U(C.value,null),y.value==="loading"&&O()}else M.value||U(C.value),R()})})}}function O(){var K;v.isUnmounted||(R(),U(C.value),y.value="loaded",c("load",((K=C.value)==null?void 0:K.currentSrc)||E.value.src))}function H(){var K;v.isUnmounted||(y.value="error",c("error",((K=C.value)==null?void 0:K.currentSrc)||E.value.src))}function R(){const K=C.value;K&&(k.value=K.currentSrc||K.src)}let B=-1;bn(()=>{clearTimeout(B)});function U(K){let J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const re=()=>{if(clearTimeout(B),v.isUnmounted)return;const{naturalHeight:pe,naturalWidth:oe}=K;pe||oe?(x.value=oe,A.value=pe):!K.complete&&y.value==="loading"&&J!=null?B=window.setTimeout(re,J):(K.currentSrc.endsWith(".svg")||K.currentSrc.startsWith("data:image/svg+xml"))&&(x.value=1,A.value=1)};re()}const D=G(()=>({"v-img__img--cover":o.cover,"v-img__img--contain":!o.cover})),F=()=>{var re;if(!E.value.src||y.value==="idle")return null;const K=L("img",{class:["v-img__img",D.value],style:{objectPosition:o.position},src:E.value.src,srcset:E.value.srcset,alt:o.alt,crossorigin:o.crossorigin,referrerpolicy:o.referrerpolicy,draggable:o.draggable,sizes:o.sizes,ref:C,onLoad:O,onError:H},null),J=(re=u.sources)==null?void 0:re.call(u);return L(Si,{transition:o.transition,appear:!0},{default:()=>[Zn(J?L("picture",{class:"v-img__picture"},[J,K]):K,[[Oi,y.value==="loaded"]])]})},z=()=>L(Si,{transition:o.transition},{default:()=>[E.value.lazySrc&&y.value!=="loaded"&&L("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:o.position},src:E.value.lazySrc,alt:o.alt,crossorigin:o.crossorigin,referrerpolicy:o.referrerpolicy,draggable:o.draggable},null)]}),W=()=>u.placeholder?L(Si,{transition:o.transition,appear:!0},{default:()=>[(y.value==="loading"||y.value==="error"&&!u.error)&&L("div",{class:"v-img__placeholder"},[u.placeholder()])]}):null,q=()=>u.error?L(Si,{transition:o.transition,appear:!0},{default:()=>[y.value==="error"&&L("div",{class:"v-img__error"},[u.error()])]}):null,Y=()=>o.gradient?L("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${o.gradient})`}},null):null,te=Fe(!1);{const K=je(M,J=>{J&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{te.value=!0})}),K())})}return lt(()=>{const K=UC.filterProps(o);return Zn(L(UC,ot({class:["v-img",{"v-img--booting":!te.value},f.value,p.value,o.class],style:[{width:Ye(o.width==="auto"?x.value:o.width)},g.value,o.style]},K,{aspectRatio:M.value,"aria-label":o.alt,role:o.alt?"img":void 0}),{additional:()=>L(We,null,[L(F,null,null),L(z,null,null),L(Y,null,null),L(W,null,null),L(q,null,null)]),default:u.default}),[[zi("intersect"),{handler:N,options:o.options},null,{once:!0}]])}),{currentSrc:k,image:C,state:y,naturalWidth:x,naturalHeight:A}}}),ZO=[null,"default","comfortable","compact"],Fi=Ie({density:{type:String,default:"default",validator:o=>ZO.includes(o)}},"density");function Vi(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return{densityClasses:G(()=>`${a}--density-${o.density}`)}}const JO=["elevated","flat","tonal","outlined","text","plain"];function yd(o,a){return L(We,null,[o&&L("span",{key:"overlay",class:`${a}__overlay`},null),L("span",{key:"underlay",class:`${a}__underlay`},null)])}const Dr=Ie({color:String,variant:{type:String,default:"elevated",validator:o=>JO.includes(o)}},"variant");function xd(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();const c=G(()=>{const{variant:g}=Ht(o);return`${a}--variant-${g}`}),{colorClasses:u,colorStyles:f}=Ng(G(()=>{const{variant:g,color:p}=Ht(o);return{[["elevated","flat"].includes(g)?"background":"text"]:p}}));return{colorClasses:u,colorStyles:f,variantClasses:c}}const XO=Ie({start:Boolean,end:Boolean,icon:Mt,image:String,text:String,...ft(),...Fi(),...jo(),...il(),...En(),...hn(),...Dr({variant:"flat"})},"VAvatar"),xs=Je()({name:"VAvatar",props:XO(),setup(o,a){let{slots:c}=a;const{themeClasses:u}=xn(o),{colorClasses:f,colorStyles:g,variantClasses:p}=xd(o),{densityClasses:v}=Vi(o),{roundedClasses:k}=Ho(o),{sizeClasses:C,sizeStyles:y}=rl(o);return lt(()=>L(o.tag,{class:["v-avatar",{"v-avatar--start":o.start,"v-avatar--end":o.end},u.value,f.value,v.value,k.value,C.value,p.value,o.class],style:[g.value,y.value,o.style]},{default:()=>[c.default?L(Kn,{key:"content-defaults",defaults:{VImg:{cover:!0,image:o.image},VIcon:{icon:o.icon}}},{default:()=>[c.default()]}):o.image?L(QO,{key:"image",src:o.image,alt:"",cover:!0},null):o.icon?L(ht,{key:"icon",icon:o.icon},null):o.text,yd(!1,"v-avatar")]})),{}}});const Rs=Ie({border:[Boolean,Number,String]},"border");function Fs(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return{borderClasses:G(()=>{const u=Ot(o)?o.value:o.border,f=[];if(u===!0||u==="")f.push(`${a}--border`);else if(typeof u=="string"||u===0)for(const g of String(u).split(" "))f.push(`border-${g}`);return f})}}const Vs=Ie({elevation:{type:[Number,String],validator(o){const a=parseInt(o);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function js(o){return{elevationClasses:G(()=>{const c=Ot(o)?o.value:o.elevation,u=[];return c==null||u.push(`elevation-${c}`),u})}}const Z1=Ie({divided:Boolean,...Rs(),...ft(),...Fi(),...Vs(),...jo(),...En(),...hn(),...Dr()},"VBtnGroup"),$C=Je()({name:"VBtnGroup",props:Z1(),setup(o,a){let{slots:c}=a;const{themeClasses:u}=xn(o),{densityClasses:f}=Vi(o),{borderClasses:g}=Fs(o),{elevationClasses:p}=js(o),{roundedClasses:v}=Ho(o);Bs({VBtn:{height:"auto",color:$e(o,"color"),density:$e(o,"density"),flat:!0,variant:$e(o,"variant")}}),lt(()=>L(o.tag,{class:["v-btn-group",{"v-btn-group--divided":o.divided},u.value,g.value,f.value,p.value,v.value,o.class],style:o.style},c))}}),Pg=Ie({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),J1=Ie({value:null,disabled:Boolean,selectedClass:String},"group-item");function X1(o,a){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const u=Yt("useGroupItem");if(!u)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const f=Co();Zt(Symbol.for(`${a.description}:id`),f);const g=pt(a,null);if(!g){if(!c)return g;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const p=$e(o,"value"),v=G(()=>!!(g.disabled.value||o.disabled));g.register({id:f,value:p,disabled:v},u),bn(()=>{g.unregister(f)});const k=G(()=>g.isSelected(f)),C=G(()=>k.value&&[g.selectedClass.value,o.selectedClass]);return je(k,y=>{u.emit("group:selected",{value:y})},{flush:"sync"}),{id:f,isSelected:k,toggle:()=>g.select(f,!k.value),select:y=>g.select(f,y),selectedClass:C,value:p,disabled:v,group:g}}function Bg(o,a){let c=!1;const u=cn([]),f=rn(o,"modelValue",[],A=>A==null?[]:ex(u,Xo(A)),A=>{const E=tR(u,A);return o.multiple?E:E[0]}),g=Yt("useGroup");function p(A,E){const M=A,N=Symbol.for(`${a.description}:id`),H=Ba(N,g==null?void 0:g.vnode).indexOf(E);Ht(M.value)==null&&(M.value=H),H>-1?u.splice(H,0,M):u.push(M)}function v(A){if(c)return;k();const E=u.findIndex(M=>M.id===A);u.splice(E,1)}function k(){const A=u.find(E=>!E.disabled);A&&o.mandatory==="force"&&!f.value.length&&(f.value=[A.id])}yn(()=>{k()}),bn(()=>{c=!0});function C(A,E){const M=u.find(N=>N.id===A);if(!(E&&(M==null?void 0:M.disabled)))if(o.multiple){const N=f.value.slice(),O=N.findIndex(R=>R===A),H=~O;if(E=E!=null?E:!H,H&&o.mandatory&&N.length<=1||!H&&o.max!=null&&N.length+1>o.max)return;O<0&&E?N.push(A):O>=0&&!E&&N.splice(O,1),f.value=N}else{const N=f.value.includes(A);if(o.mandatory&&N)return;f.value=(E!=null?E:!N)?[A]:[]}}function y(A){if(o.multiple,f.value.length){const E=f.value[0],M=u.findIndex(H=>H.id===E);let N=(M+A)%u.length,O=u[N];for(;O.disabled&&N!==M;)N=(N+A)%u.length,O=u[N];if(O.disabled)return;f.value=[u[N].id]}else{const E=u.find(M=>!M.disabled);E&&(f.value=[E.id])}}const x={register:p,unregister:v,selected:f,select:C,disabled:$e(o,"disabled"),prev:()=>y(u.length-1),next:()=>y(1),isSelected:A=>f.value.includes(A),selectedClass:G(()=>o.selectedClass),items:G(()=>u),getItemIndex:A=>eR(u,A)};return Zt(a,x),x}function eR(o,a){const c=ex(o,[a]);return c.length?o.findIndex(u=>u.id===c[0]):-1}function ex(o,a){const c=[];return a.forEach(u=>{const f=o.find(p=>Ns(u,p.value)),g=o[u];(f==null?void 0:f.value)!=null?c.push(f.id):g!=null&&c.push(g.id)}),c}function tR(o,a){const c=[];return a.forEach(u=>{const f=o.findIndex(g=>g.id===u);if(~f){const g=o[f];c.push(g.value!=null?g.value:f)}}),c}const tx=Symbol.for("vuetify:v-btn-toggle"),nR=Ie({...Z1(),...Pg()},"VBtnToggle");Je()({name:"VBtnToggle",props:nR(),emits:{"update:modelValue":o=>!0},setup(o,a){let{slots:c}=a;const{isSelected:u,next:f,prev:g,select:p,selected:v}=Bg(o,tx);return lt(()=>{const k=$C.filterProps(o);return L($C,ot({class:["v-btn-toggle",o.class]},k,{style:o.style}),{default:()=>{var C;return[(C=c.default)==null?void 0:C.call(c,{isSelected:u,next:f,prev:g,select:p,selected:v})]}})}),{next:f,prev:g,select:p}}});function nx(o,a){const c=ze(),u=Fe(!1);if(yg){const f=new IntersectionObserver(g=>{o==null||o(g,f),u.value=!!g.find(p=>p.isIntersecting)},a);bn(()=>{f.disconnect()}),je(c,(g,p)=>{p&&(f.unobserve(p),u.value=!1),g&&f.observe(g)},{flush:"post"})}return{intersectionRef:c,isIntersecting:u}}const oR=Ie({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ft(),...il(),...En({tag:"div"}),...hn()},"VProgressCircular"),iR=Je()({name:"VProgressCircular",props:oR(),setup(o,a){let{slots:c}=a;const u=20,f=2*Math.PI*u,g=ze(),{themeClasses:p}=xn(o),{sizeClasses:v,sizeStyles:k}=rl(o),{textColorClasses:C,textColorStyles:y}=ti($e(o,"color")),{textColorClasses:x,textColorStyles:A}=ti($e(o,"bgColor")),{intersectionRef:E,isIntersecting:M}=nx(),{resizeRef:N,contentRect:O}=ys(),H=G(()=>Math.max(0,Math.min(100,parseFloat(o.modelValue)))),R=G(()=>Number(o.width)),B=G(()=>k.value?Number(o.size):O.value?O.value.width:Math.max(R.value,32)),U=G(()=>u/(1-R.value/B.value)*2),D=G(()=>R.value/B.value*U.value),F=G(()=>Ye((100-H.value)/100*f));return ko(()=>{E.value=g.value,N.value=g.value}),lt(()=>L(o.tag,{ref:g,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!o.indeterminate,"v-progress-circular--visible":M.value,"v-progress-circular--disable-shrink":o.indeterminate==="disable-shrink"},p.value,v.value,C.value,o.class],style:[k.value,y.value,o.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":o.indeterminate?void 0:H.value},{default:()=>[L("svg",{style:{transform:`rotate(calc(-90deg + ${Number(o.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${U.value} ${U.value}`},[L("circle",{class:["v-progress-circular__underlay",x.value],style:A.value,fill:"transparent",cx:"50%",cy:"50%",r:u,"stroke-width":D.value,"stroke-dasharray":f,"stroke-dashoffset":0},null),L("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:u,"stroke-width":D.value,"stroke-dasharray":f,"stroke-dashoffset":F.value},null)]),c.default&&L("div",{class:"v-progress-circular__content"},[c.default({value:H.value})])]})),{}}});const WC={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ox=Ie({location:String},"location");function ix(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=arguments.length>2?arguments[2]:void 0;const{isRtl:u}=Ri();return{locationStyles:G(()=>{if(!o.location)return{};const{side:g,align:p}=Ef(o.location.split(" ").length>1?o.location:`${o.location} center`,u.value);function v(C){return c?c(C):0}const k={};return g!=="center"&&(a?k[WC[g]]=`calc(100% - ${v(g)}px)`:k[g]=0),p!=="center"?a?k[WC[p]]=`calc(100% - ${v(p)}px)`:k[p]=0:(g==="center"?k.top=k.left="50%":k[{top:"left",bottom:"left",left:"top",right:"top"}[g]]="50%",k.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[g]),k})}}const rR=Ie({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ft(),...ox({location:"top"}),...jo(),...En(),...hn()},"VProgressLinear"),sR=Je()({name:"VProgressLinear",props:rR(),emits:{"update:modelValue":o=>!0},setup(o,a){let{slots:c}=a;const u=rn(o,"modelValue"),{isRtl:f,rtlClasses:g}=Ri(),{themeClasses:p}=xn(o),{locationStyles:v}=ix(o),{textColorClasses:k,textColorStyles:C}=ti(o,"color"),{backgroundColorClasses:y,backgroundColorStyles:x}=ni(G(()=>o.bgColor||o.color)),{backgroundColorClasses:A,backgroundColorStyles:E}=ni(o,"color"),{roundedClasses:M}=Ho(o),{intersectionRef:N,isIntersecting:O}=nx(),H=G(()=>parseInt(o.max,10)),R=G(()=>parseInt(o.height,10)),B=G(()=>parseFloat(o.bufferValue)/H.value*100),U=G(()=>parseFloat(u.value)/H.value*100),D=G(()=>f.value!==o.reverse),F=G(()=>o.indeterminate?"fade-transition":"slide-x-transition"),z=G(()=>o.bgOpacity==null?o.bgOpacity:parseFloat(o.bgOpacity));function W(q){if(!N.value)return;const{left:Y,right:te,width:K}=N.value.getBoundingClientRect(),J=D.value?K-q.clientX+(te-K):q.clientX-Y;u.value=Math.round(J/K*H.value)}return lt(()=>L(o.tag,{ref:N,class:["v-progress-linear",{"v-progress-linear--absolute":o.absolute,"v-progress-linear--active":o.active&&O.value,"v-progress-linear--reverse":D.value,"v-progress-linear--rounded":o.rounded,"v-progress-linear--rounded-bar":o.roundedBar,"v-progress-linear--striped":o.striped},M.value,p.value,g.value,o.class],style:[{bottom:o.location==="bottom"?0:void 0,top:o.location==="top"?0:void 0,height:o.active?Ye(R.value):0,"--v-progress-linear-height":Ye(R.value),...v.value},o.style],role:"progressbar","aria-hidden":o.active?"false":"true","aria-valuemin":"0","aria-valuemax":o.max,"aria-valuenow":o.indeterminate?void 0:U.value,onClick:o.clickable&&W},{default:()=>[o.stream&&L("div",{key:"stream",class:["v-progress-linear__stream",k.value],style:{...C.value,[D.value?"left":"right"]:Ye(-R.value),borderTop:`${Ye(R.value/2)} dotted`,opacity:z.value,top:`calc(50% - ${Ye(R.value/4)})`,width:Ye(100-B.value,"%"),"--v-progress-linear-stream-to":Ye(R.value*(D.value?1:-1))}},null),L("div",{class:["v-progress-linear__background",y.value],style:[x.value,{opacity:z.value,width:Ye(o.stream?B.value:100,"%")}]},null),L(wo,{name:F.value},{default:()=>[o.indeterminate?L("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(q=>L("div",{key:q,class:["v-progress-linear__indeterminate",q,A.value],style:E.value},null))]):L("div",{class:["v-progress-linear__determinate",A.value],style:[E.value,{width:Ye(U.value,"%")}]},null)]}),c.default&&L("div",{class:"v-progress-linear__content"},[c.default({value:U.value,buffer:B.value})])]})),{}}}),rx=Ie({loading:[Boolean,String]},"loader");function sx(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return{loaderClasses:G(()=>({[`${a}--loading`]:o.loading}))}}function aR(o,a){var u;let{slots:c}=a;return L("div",{class:`${o.name}__loader`},[((u=c.default)==null?void 0:u.call(c,{color:o.color,isActive:o.active}))||L(sR,{absolute:o.absolute,active:o.active,color:o.color,height:"2",indeterminate:!0},null)])}const lR=["static","relative","fixed","absolute","sticky"],cR=Ie({position:{type:String,validator:o=>lR.includes(o)}},"position");function dR(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();return{positionClasses:G(()=>o.position?`${a}--${o.position}`:void 0)}}function uR(){const o=Yt("useRoute");return G(()=>{var a;return(a=o==null?void 0:o.proxy)==null?void 0:a.$route})}function ax(){var o,a;return(a=(o=Yt("useRouter"))==null?void 0:o.proxy)==null?void 0:a.$router}function Lg(o,a){const c=iy("RouterLink"),u=G(()=>!!(o.href||o.to)),f=G(()=>(u==null?void 0:u.value)||pC(a,"click")||pC(o,"click"));if(typeof c=="string")return{isLink:u,isClickable:f,href:$e(o,"href")};const g=o.to?c.useLink(o):void 0,p=uR();return{isLink:u,isClickable:f,route:g==null?void 0:g.route,navigate:g==null?void 0:g.navigate,isActive:g&&G(()=>{var v,k,C;return o.exact?p.value?((C=g.isExactActive)==null?void 0:C.value)&&Ns(g.route.value.query,p.value.query):(k=g.isExactActive)==null?void 0:k.value:(v=g.isActive)==null?void 0:v.value}),href:G(()=>o.to?g==null?void 0:g.route.value.href:o.href)}}const zg=Ie({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Kh=!1;function hR(o,a){let c=!1,u,f;It&&(Wt(()=>{window.addEventListener("popstate",g),u=o==null?void 0:o.beforeEach((p,v,k)=>{Kh?c?a(k):k():setTimeout(()=>c?a(k):k()),Kh=!0}),f=o==null?void 0:o.afterEach(()=>{Kh=!1})}),An(()=>{window.removeEventListener("popstate",g),u==null||u(),f==null||f()}));function g(p){var v;(v=p.state)!=null&&v.replaced||(c=!0,setTimeout(()=>c=!1))}}function fR(o,a){je(()=>{var c;return(c=o.isActive)==null?void 0:c.value},c=>{o.isLink.value&&c&&a&&Wt(()=>{a(!0)})},{immediate:!0})}const Pf=Symbol("rippleStop"),gR=80;function GC(o,a){o.style.transform=a,o.style.webkitTransform=a}function Bf(o){return o.constructor.name==="TouchEvent"}function lx(o){return o.constructor.name==="KeyboardEvent"}const mR=function(o,a){var x;let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=0,f=0;if(!lx(o)){const A=a.getBoundingClientRect(),E=Bf(o)?o.touches[o.touches.length-1]:o;u=E.clientX-A.left,f=E.clientY-A.top}let g=0,p=.3;(x=a._ripple)!=null&&x.circle?(p=.15,g=a.clientWidth/2,g=c.center?g:g+Math.sqrt((u-g)**2+(f-g)**2)/4):g=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const v=`${(a.clientWidth-g*2)/2}px`,k=`${(a.clientHeight-g*2)/2}px`,C=c.center?v:`${u-g}px`,y=c.center?k:`${f-g}px`;return{radius:g,scale:p,x:C,y,centerX:v,centerY:k}},nd={show(o,a){var E;let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((E=a==null?void 0:a._ripple)!=null&&E.enabled))return;const u=document.createElement("span"),f=document.createElement("span");u.appendChild(f),u.className="v-ripple__container",c.class&&(u.className+=` ${c.class}`);const{radius:g,scale:p,x:v,y:k,centerX:C,centerY:y}=mR(o,a,c),x=`${g*2}px`;f.className="v-ripple__animation",f.style.width=x,f.style.height=x,a.appendChild(u);const A=window.getComputedStyle(a);A&&A.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),f.classList.add("v-ripple__animation--enter"),f.classList.add("v-ripple__animation--visible"),GC(f,`translate(${v}, ${k}) scale3d(${p},${p},${p})`),f.dataset.activated=String(performance.now()),setTimeout(()=>{f.classList.remove("v-ripple__animation--enter"),f.classList.add("v-ripple__animation--in"),GC(f,`translate(${C}, ${y}) scale3d(1,1,1)`)},0)},hide(o){var g;if(!((g=o==null?void 0:o._ripple)!=null&&g.enabled))return;const a=o.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const c=a[a.length-1];if(c.dataset.isHiding)return;c.dataset.isHiding="true";const u=performance.now()-Number(c.dataset.activated),f=Math.max(250-u,0);setTimeout(()=>{c.classList.remove("v-ripple__animation--in"),c.classList.add("v-ripple__animation--out"),setTimeout(()=>{var v;o.getElementsByClassName("v-ripple__animation").length===1&&o.dataset.previousPosition&&(o.style.position=o.dataset.previousPosition,delete o.dataset.previousPosition),((v=c.parentNode)==null?void 0:v.parentNode)===o&&o.removeChild(c.parentNode)},300)},f)}};function cx(o){return typeof o>"u"||!!o}function Ka(o){const a={},c=o.currentTarget;if(!(!(c!=null&&c._ripple)||c._ripple.touched||o[Pf])){if(o[Pf]=!0,Bf(o))c._ripple.touched=!0,c._ripple.isTouch=!0;else if(c._ripple.isTouch)return;if(a.center=c._ripple.centered||lx(o),c._ripple.class&&(a.class=c._ripple.class),Bf(o)){if(c._ripple.showTimerCommit)return;c._ripple.showTimerCommit=()=>{nd.show(o,c,a)},c._ripple.showTimer=window.setTimeout(()=>{var u;(u=c==null?void 0:c._ripple)!=null&&u.showTimerCommit&&(c._ripple.showTimerCommit(),c._ripple.showTimerCommit=null)},gR)}else nd.show(o,c,a)}}function qC(o){o[Pf]=!0}function Gn(o){const a=o.currentTarget;if(!!(a!=null&&a._ripple)){if(window.clearTimeout(a._ripple.showTimer),o.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{Gn(o)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),nd.hide(a)}}function dx(o){const a=o.currentTarget;!(a!=null&&a._ripple)||(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let Ya=!1;function ux(o){!Ya&&(o.keyCode===hC.enter||o.keyCode===hC.space)&&(Ya=!0,Ka(o))}function hx(o){Ya=!1,Gn(o)}function fx(o){Ya&&(Ya=!1,Gn(o))}function gx(o,a,c){var p;const{value:u,modifiers:f}=a,g=cx(u);if(g||nd.hide(o),o._ripple=(p=o._ripple)!=null?p:{},o._ripple.enabled=g,o._ripple.centered=f.center,o._ripple.circle=f.circle,xf(u)&&u.class&&(o._ripple.class=u.class),g&&!c){if(f.stop){o.addEventListener("touchstart",qC,{passive:!0}),o.addEventListener("mousedown",qC);return}o.addEventListener("touchstart",Ka,{passive:!0}),o.addEventListener("touchend",Gn,{passive:!0}),o.addEventListener("touchmove",dx,{passive:!0}),o.addEventListener("touchcancel",Gn),o.addEventListener("mousedown",Ka),o.addEventListener("mouseup",Gn),o.addEventListener("mouseleave",Gn),o.addEventListener("keydown",ux),o.addEventListener("keyup",hx),o.addEventListener("blur",fx),o.addEventListener("dragstart",Gn,{passive:!0})}else!g&&c&&mx(o)}function mx(o){o.removeEventListener("mousedown",Ka),o.removeEventListener("touchstart",Ka),o.removeEventListener("touchend",Gn),o.removeEventListener("touchmove",dx),o.removeEventListener("touchcancel",Gn),o.removeEventListener("mouseup",Gn),o.removeEventListener("mouseleave",Gn),o.removeEventListener("keydown",ux),o.removeEventListener("keyup",hx),o.removeEventListener("dragstart",Gn),o.removeEventListener("blur",fx)}function pR(o,a){gx(o,a,!1)}function bR(o){delete o._ripple,mx(o)}function kR(o,a){if(a.value===a.oldValue)return;const c=cx(a.oldValue);gx(o,a,c)}const Ed={mounted:pR,unmounted:bR,updated:kR},vR=Ie({active:{type:Boolean,default:void 0},symbol:{type:null,default:tx},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Mt,appendIcon:Mt,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Rs(),...ft(),...Fi(),...zs(),...Vs(),...J1(),...rx(),...ox(),...cR(),...jo(),...zg(),...il(),...En({tag:"button"}),...hn(),...Dr({variant:"elevated"})},"VBtn"),Yh=Je()({name:"VBtn",directives:{Ripple:Ed},props:vR(),emits:{"group:selected":o=>!0},setup(o,a){let{attrs:c,slots:u}=a;const{themeClasses:f}=xn(o),{borderClasses:g}=Fs(o),{colorClasses:p,colorStyles:v,variantClasses:k}=xd(o),{densityClasses:C}=Vi(o),{dimensionStyles:y}=Os(o),{elevationClasses:x}=js(o),{loaderClasses:A}=sx(o),{locationStyles:E}=ix(o),{positionClasses:M}=dR(o),{roundedClasses:N}=Ho(o),{sizeClasses:O,sizeStyles:H}=rl(o),R=X1(o,o.symbol,!1),B=Lg(o,c),U=G(()=>{var q;return o.active!==void 0?o.active:B.isLink.value?(q=B.isActive)==null?void 0:q.value:R==null?void 0:R.isSelected.value}),D=G(()=>(R==null?void 0:R.disabled.value)||o.disabled),F=G(()=>o.variant==="elevated"&&!(o.disabled||o.flat||o.border)),z=G(()=>{if(!(o.value===void 0||typeof o.value=="symbol"))return Object(o.value)===o.value?JSON.stringify(o.value,null,0):o.value});function W(q){var Y;D.value||B.isLink.value&&(q.metaKey||q.ctrlKey||q.shiftKey||q.button!==0||c.target==="_blank")||((Y=B.navigate)==null||Y.call(B,q),R==null||R.toggle())}return fR(B,R==null?void 0:R.select),lt(()=>{var re,pe;const q=B.isLink.value?"a":o.tag,Y=!!(o.prependIcon||u.prepend),te=!!(o.appendIcon||u.append),K=!!(o.icon&&o.icon!==!0),J=(R==null?void 0:R.isSelected.value)&&(!B.isLink.value||((re=B.isActive)==null?void 0:re.value))||!R||((pe=B.isActive)==null?void 0:pe.value);return Zn(L(q,{type:q==="a"?void 0:"button",class:["v-btn",R==null?void 0:R.selectedClass.value,{"v-btn--active":U.value,"v-btn--block":o.block,"v-btn--disabled":D.value,"v-btn--elevated":F.value,"v-btn--flat":o.flat,"v-btn--icon":!!o.icon,"v-btn--loading":o.loading,"v-btn--slim":o.slim,"v-btn--stacked":o.stacked},f.value,g.value,J?p.value:void 0,C.value,x.value,A.value,M.value,N.value,O.value,k.value,o.class],style:[J?v.value:void 0,y.value,E.value,H.value,o.style],disabled:D.value||void 0,href:B.href.value,onClick:W,value:z.value},{default:()=>{var oe,_e;return[yd(!0,"v-btn"),!o.icon&&Y&&L("span",{key:"prepend",class:"v-btn__prepend"},[u.prepend?L(Kn,{key:"prepend-defaults",disabled:!o.prependIcon,defaults:{VIcon:{icon:o.prependIcon}}},u.prepend):L(ht,{key:"prepend-icon",icon:o.prependIcon},null)]),L("span",{class:"v-btn__content","data-no-activator":""},[!u.default&&K?L(ht,{key:"content-icon",icon:o.icon},null):L(Kn,{key:"content-defaults",disabled:!K,defaults:{VIcon:{icon:o.icon}}},{default:()=>{var Z,de;return[(de=(Z=u.default)==null?void 0:Z.call(u))!=null?de:o.text]}})]),!o.icon&&te&&L("span",{key:"append",class:"v-btn__append"},[u.append?L(Kn,{key:"append-defaults",disabled:!o.appendIcon,defaults:{VIcon:{icon:o.appendIcon}}},u.append):L(ht,{key:"append-icon",icon:o.appendIcon},null)]),!!o.loading&&L("span",{key:"loader",class:"v-btn__loader"},[(_e=(oe=u.loader)==null?void 0:oe.call(u))!=null?_e:L(iR,{color:typeof o.loading=="boolean"?void 0:o.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[zi("ripple"),!D.value&&o.ripple,null]])}),{group:R}}});const wR=Ie({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Jn(o,a,c){return Je()({name:o,props:wR({mode:c,origin:a}),setup(u,f){let{slots:g}=f;const p={onBeforeEnter(v){u.origin&&(v.style.transformOrigin=u.origin)},onLeave(v){if(u.leaveAbsolute){const{offsetTop:k,offsetLeft:C,offsetWidth:y,offsetHeight:x}=v;v._transitionInitialStyles={position:v.style.position,top:v.style.top,left:v.style.left,width:v.style.width,height:v.style.height},v.style.position="absolute",v.style.top=`${k}px`,v.style.left=`${C}px`,v.style.width=`${y}px`,v.style.height=`${x}px`}u.hideOnLeave&&v.style.setProperty("display","none","important")},onAfterLeave(v){if(u.leaveAbsolute&&(v==null?void 0:v._transitionInitialStyles)){const{position:k,top:C,left:y,width:x,height:A}=v._transitionInitialStyles;delete v._transitionInitialStyles,v.style.position=k||"",v.style.top=C||"",v.style.left=y||"",v.style.width=x||"",v.style.height=A||""}}};return()=>{const v=u.group?i1:wo;return ii(v,{name:u.disabled?"":o,css:!u.disabled,...u.group?void 0:{mode:u.mode},...u.disabled?{}:p},g.default)}}})}function px(o,a){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Je()({name:o,props:{mode:{type:String,default:c},disabled:Boolean},setup(u,f){let{slots:g}=f;return()=>ii(wo,{name:u.disabled?"":o,css:!u.disabled,...u.disabled?{}:a},g.default)}})}function bx(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const c=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",u=dn(`offset-${c}`);return{onBeforeEnter(p){p._parent=p.parentNode,p._initialStyle={transition:p.style.transition,overflow:p.style.overflow,[c]:p.style[c]}},onEnter(p){const v=p._initialStyle;p.style.setProperty("transition","none","important"),p.style.overflow="hidden";const k=`${p[u]}px`;p.style[c]="0",p.offsetHeight,p.style.transition=v.transition,o&&p._parent&&p._parent.classList.add(o),requestAnimationFrame(()=>{p.style[c]=k})},onAfterEnter:g,onEnterCancelled:g,onLeave(p){p._initialStyle={transition:"",overflow:p.style.overflow,[c]:p.style[c]},p.style.overflow="hidden",p.style[c]=`${p[u]}px`,p.offsetHeight,requestAnimationFrame(()=>p.style[c]="0")},onAfterLeave:f,onLeaveCancelled:f};function f(p){o&&p._parent&&p._parent.classList.remove(o),g(p)}function g(p){const v=p._initialStyle[c];p.style.overflow=p._initialStyle.overflow,v!=null&&(p.style[c]=v),delete p._initialStyle}}const _R=Ie({target:[Object,Array]},"v-dialog-transition"),kx=Je()({name:"VDialogTransition",props:_R(),setup(o,a){let{slots:c}=a;const u={onBeforeEnter(f){f.style.pointerEvents="none",f.style.visibility="hidden"},async onEnter(f,g){var A;await new Promise(E=>requestAnimationFrame(E)),await new Promise(E=>requestAnimationFrame(E)),f.style.visibility="";const{x:p,y:v,sx:k,sy:C,speed:y}=YC(o.target,f),x=ds(f,[{transform:`translate(${p}px, ${v}px) scale(${k}, ${C})`,opacity:0},{}],{duration:225*y,easing:Tz});(A=KC(f))==null||A.forEach(E=>{ds(E,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*y,easing:Jc})}),x.finished.then(()=>g())},onAfterEnter(f){f.style.removeProperty("pointer-events")},onBeforeLeave(f){f.style.pointerEvents="none"},async onLeave(f,g){var A;await new Promise(E=>requestAnimationFrame(E));const{x:p,y:v,sx:k,sy:C,speed:y}=YC(o.target,f);ds(f,[{},{transform:`translate(${p}px, ${v}px) scale(${k}, ${C})`,opacity:0}],{duration:125*y,easing:Iz}).finished.then(()=>g()),(A=KC(f))==null||A.forEach(E=>{ds(E,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*y,easing:Jc})})},onAfterLeave(f){f.style.removeProperty("pointer-events")}};return()=>o.target?L(wo,ot({name:"dialog-transition"},u,{css:!1}),c):L(wo,{name:"dialog-transition"},c)}});function KC(o){var c;const a=(c=o.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:c.children;return a&&[...a]}function YC(o,a){const c=S1(o),u=Sg(a),[f,g]=getComputedStyle(a).transformOrigin.split(" ").map(H=>parseFloat(H)),[p,v]=getComputedStyle(a).getPropertyValue("--v-overlay-anchor-origin").split(" ");let k=c.left+c.width/2;p==="left"||v==="left"?k-=c.width/2:(p==="right"||v==="right")&&(k+=c.width/2);let C=c.top+c.height/2;p==="top"||v==="top"?C-=c.height/2:(p==="bottom"||v==="bottom")&&(C+=c.height/2);const y=c.width/u.width,x=c.height/u.height,A=Math.max(1,y,x),E=y/A||0,M=x/A||0,N=u.width*u.height/(window.innerWidth*window.innerHeight),O=N>.12?Math.min(1.5,(N-.12)*10+1):1;return{x:k-(f+u.left),y:C-(g+u.top),sx:E,sy:M,speed:O}}Jn("fab-transition","center center","out-in");Jn("dialog-bottom-transition");Jn("dialog-top-transition");const QC=Jn("fade-transition");Jn("scale-transition");Jn("scroll-x-transition");Jn("scroll-x-reverse-transition");Jn("scroll-y-transition");Jn("scroll-y-reverse-transition");Jn("slide-x-transition");Jn("slide-x-reverse-transition");const vx=Jn("slide-y-transition");Jn("slide-y-reverse-transition");const CR=px("expand-transition",bx()),wx=px("expand-x-transition",bx("",!0)),Lf=Symbol.for("vuetify:list");function _x(){const o=pt(Lf,{hasPrepend:Fe(!1),updateHasPrepend:()=>null}),a={hasPrepend:Fe(!1),updateHasPrepend:c=>{c&&(a.hasPrepend.value=c)}};return Zt(Lf,a),o}function Cx(){return pt(Lf,null)}const AR={open:o=>{let{id:a,value:c,opened:u,parents:f}=o;if(c){const g=new Set;g.add(a);let p=f.get(a);for(;p!=null;)g.add(p),p=f.get(p);return g}else return u.delete(a),u},select:()=>null},Ax={open:o=>{let{id:a,value:c,opened:u,parents:f}=o;if(c){let g=f.get(a);for(u.add(a);g!=null&&g!==a;)u.add(g),g=f.get(g);return u}else u.delete(a);return u},select:()=>null},yR={open:Ax.open,select:o=>{let{id:a,value:c,opened:u,parents:f}=o;if(!c)return u;const g=[];let p=f.get(a);for(;p!=null;)g.push(p),p=f.get(p);return new Set(g)}},Og=o=>{const a={select:c=>{let{id:u,value:f,selected:g}=c;if(u=Ge(u),o&&!f){const p=Array.from(g.entries()).reduce((v,k)=>{let[C,y]=k;return y==="on"?[...v,C]:v},[]);if(p.length===1&&p[0]===u)return g}return g.set(u,f?"on":"off"),g},in:(c,u,f)=>{let g=new Map;for(const p of c||[])g=a.select({id:p,value:!0,selected:new Map(g),children:u,parents:f});return g},out:c=>{const u=[];for(const[f,g]of c.entries())g==="on"&&u.push(f);return u}};return a},yx=o=>{const a=Og(o);return{select:u=>{let{selected:f,id:g,...p}=u;g=Ge(g);const v=f.has(g)?new Map([[g,f.get(g)]]):new Map;return a.select({...p,id:g,selected:v})},in:(u,f,g)=>{let p=new Map;return u!=null&&u.length&&(p=a.in(u.slice(0,1),f,g)),p},out:(u,f,g)=>a.out(u,f,g)}},xR=o=>{const a=Og(o);return{select:u=>{let{id:f,selected:g,children:p,...v}=u;return f=Ge(f),p.has(f)?g:a.select({id:f,selected:g,children:p,...v})},in:a.in,out:a.out}},ER=o=>{const a=yx(o);return{select:u=>{let{id:f,selected:g,children:p,...v}=u;return f=Ge(f),p.has(f)?g:a.select({id:f,selected:g,children:p,...v})},in:a.in,out:a.out}},SR=o=>{const a={select:c=>{let{id:u,value:f,selected:g,children:p,parents:v}=c;u=Ge(u);const k=new Map(g),C=[u];for(;C.length;){const x=C.shift();g.set(x,f?"on":"off"),p.has(x)&&C.push(...p.get(x))}let y=v.get(u);for(;y;){const x=p.get(y),A=x.every(M=>g.get(M)==="on"),E=x.every(M=>!g.has(M)||g.get(M)==="off");g.set(y,A?"on":E?"off":"indeterminate"),y=v.get(y)}return o&&!f&&Array.from(g.entries()).reduce((A,E)=>{let[M,N]=E;return N==="on"?[...A,M]:A},[]).length===0?k:g},in:(c,u,f)=>{let g=new Map;for(const p of c||[])g=a.select({id:p,value:!0,selected:new Map(g),children:u,parents:f});return g},out:(c,u)=>{const f=[];for(const[g,p]of c.entries())p==="on"&&!u.has(g)&&f.push(g);return f}};return a},Qa=Symbol.for("vuetify:nested"),xx={id:Fe(),root:{register:()=>null,unregister:()=>null,parents:ze(new Map),children:ze(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:ze(new Set),selected:ze(new Map),selectedValues:ze([])}},DR=Ie({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),TR=o=>{let a=!1;const c=ze(new Map),u=ze(new Map),f=rn(o,"opened",o.opened,x=>new Set(x),x=>[...x.values()]),g=G(()=>{if(typeof o.selectStrategy=="object")return o.selectStrategy;switch(o.selectStrategy){case"single-leaf":return ER(o.mandatory);case"leaf":return xR(o.mandatory);case"independent":return Og(o.mandatory);case"single-independent":return yx(o.mandatory);case"classic":default:return SR(o.mandatory)}}),p=G(()=>{if(typeof o.openStrategy=="object")return o.openStrategy;switch(o.openStrategy){case"list":return yR;case"single":return AR;case"multiple":default:return Ax}}),v=rn(o,"selected",o.selected,x=>g.value.in(x,c.value,u.value),x=>g.value.out(x,c.value,u.value));bn(()=>{a=!0});function k(x){const A=[];let E=x;for(;E!=null;)A.unshift(E),E=u.value.get(E);return A}const C=Yt("nested"),y={id:Fe(),root:{opened:f,selected:v,selectedValues:G(()=>{const x=[];for(const[A,E]of v.value.entries())E==="on"&&x.push(A);return x}),register:(x,A,E)=>{A&&x!==A&&u.value.set(x,A),E&&c.value.set(x,[]),A!=null&&c.value.set(A,[...c.value.get(A)||[],x])},unregister:x=>{var E;if(a)return;c.value.delete(x);const A=u.value.get(x);if(A){const M=(E=c.value.get(A))!=null?E:[];c.value.set(A,M.filter(N=>N!==x))}u.value.delete(x),f.value.delete(x)},open:(x,A,E)=>{C.emit("click:open",{id:x,value:A,path:k(x),event:E});const M=p.value.open({id:x,value:A,opened:new Set(f.value),children:c.value,parents:u.value,event:E});M&&(f.value=M)},openOnSelect:(x,A,E)=>{const M=p.value.select({id:x,value:A,selected:new Map(v.value),opened:new Set(f.value),children:c.value,parents:u.value,event:E});M&&(f.value=M)},select:(x,A,E)=>{C.emit("click:select",{id:x,value:A,path:k(x),event:E});const M=g.value.select({id:x,value:A,selected:new Map(v.value),children:c.value,parents:u.value,event:E});M&&(v.value=M),y.root.openOnSelect(x,A,E)},children:c,parents:u}};return Zt(Qa,y),y.root},Ex=(o,a)=>{const c=pt(Qa,xx),u=Symbol(Co()),f=G(()=>o.value!==void 0?o.value:u),g={...c,id:f,open:(p,v)=>c.root.open(f.value,p,v),openOnSelect:(p,v)=>c.root.openOnSelect(f.value,p,v),isOpen:G(()=>c.root.opened.value.has(f.value)),parent:G(()=>c.root.parents.value.get(f.value)),select:(p,v)=>c.root.select(f.value,p,v),isSelected:G(()=>c.root.selected.value.get(Ge(f.value))==="on"),isIndeterminate:G(()=>c.root.selected.value.get(f.value)==="indeterminate"),isLeaf:G(()=>!c.root.children.value.get(f.value)),isGroupActivator:c.isGroupActivator};return!c.isGroupActivator&&c.root.register(f.value,c.id.value,a),bn(()=>{!c.isGroupActivator&&c.root.unregister(f.value)}),a&&Zt(Qa,g),g},IR=()=>{const o=pt(Qa,xx);Zt(Qa,{...o,isGroupActivator:!0})};function Rg(){const o=Fe(!1);return yn(()=>{window.requestAnimationFrame(()=>{o.value=!0})}),{ssrBootStyles:G(()=>o.value?void 0:{transition:"none !important"}),isBooted:Is(o)}}const MR=Ls({name:"VListGroupActivator",setup(o,a){let{slots:c}=a;return IR(),()=>{var u;return(u=c.default)==null?void 0:u.call(c)}}}),NR=Ie({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Mt,default:"$collapse"},expandIcon:{type:Mt,default:"$expand"},prependIcon:Mt,appendIcon:Mt,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ft(),...En()},"VListGroup"),ZC=Je()({name:"VListGroup",props:NR(),setup(o,a){let{slots:c}=a;const{isOpen:u,open:f,id:g}=Ex($e(o,"value"),!0),p=G(()=>`v-list-group--id-${String(g.value)}`),v=Cx(),{isBooted:k}=Rg();function C(E){f(!u.value,E)}const y=G(()=>({onClick:C,class:"v-list-group__header",id:p.value})),x=G(()=>u.value?o.collapseIcon:o.expandIcon),A=G(()=>({VListItem:{active:u.value,activeColor:o.activeColor,baseColor:o.baseColor,color:o.color,prependIcon:o.prependIcon||o.subgroup&&x.value,appendIcon:o.appendIcon||!o.subgroup&&x.value,title:o.title,value:o.value}}));return lt(()=>L(o.tag,{class:["v-list-group",{"v-list-group--prepend":v==null?void 0:v.hasPrepend.value,"v-list-group--fluid":o.fluid,"v-list-group--subgroup":o.subgroup,"v-list-group--open":u.value},o.class],style:o.style},{default:()=>[c.activator&&L(Kn,{defaults:A.value},{default:()=>[L(MR,null,{default:()=>[c.activator({props:y.value,isOpen:u.value})]})]}),L(Si,{transition:{component:CR},disabled:!k.value},{default:()=>{var E;return[Zn(L("div",{class:"v-list-group__items",role:"group","aria-labelledby":p.value},[(E=c.default)==null?void 0:E.call(c)]),[[Oi,u.value]])]}})]})),{}}});const PR=P1("v-list-item-subtitle"),Sx=P1("v-list-item-title"),BR=Ie({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Mt,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Mt,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:po(),onClickOnce:po(),...Rs(),...ft(),...Fi(),...zs(),...Vs(),...jo(),...zg(),...En(),...hn(),...Dr({variant:"text"})},"VListItem"),Lo=Je()({name:"VListItem",directives:{Ripple:Ed},props:BR(),emits:{click:o=>!0},setup(o,a){let{attrs:c,slots:u,emit:f}=a;const g=Lg(o,c),p=G(()=>o.value===void 0?g.href.value:o.value),{select:v,isSelected:k,isIndeterminate:C,isGroupActivator:y,root:x,parent:A,openOnSelect:E}=Ex(p,!1),M=Cx(),N=G(()=>{var Z;return o.active!==!1&&(o.active||((Z=g.isActive)==null?void 0:Z.value)||k.value)}),O=G(()=>o.link!==!1&&g.isLink.value),H=G(()=>!o.disabled&&o.link!==!1&&(o.link||g.isClickable.value||o.value!=null&&!!M)),R=G(()=>o.rounded||o.nav),B=G(()=>{var Z;return(Z=o.color)!=null?Z:o.activeColor}),U=G(()=>{var Z;return{color:N.value&&(Z=B.value)!=null?Z:o.baseColor,variant:o.variant}});je(()=>{var Z;return(Z=g.isActive)==null?void 0:Z.value},Z=>{Z&&A.value!=null&&x.open(A.value,!0),Z&&E(Z)},{immediate:!0});const{themeClasses:D}=xn(o),{borderClasses:F}=Fs(o),{colorClasses:z,colorStyles:W,variantClasses:q}=xd(U),{densityClasses:Y}=Vi(o),{dimensionStyles:te}=Os(o),{elevationClasses:K}=js(o),{roundedClasses:J}=Ho(R),re=G(()=>o.lines?`v-list-item--${o.lines}-line`:void 0),pe=G(()=>({isActive:N.value,select:v,isSelected:k.value,isIndeterminate:C.value}));function oe(Z){var de;f("click",Z),!(y||!H.value)&&((de=g.navigate)==null||de.call(g,Z),o.value!=null&&v(!k.value,Z))}function _e(Z){(Z.key==="Enter"||Z.key===" ")&&(Z.preventDefault(),oe(Z))}return lt(()=>{const Z=O.value?"a":o.tag,de=u.title||o.title!=null,Ce=u.subtitle||o.subtitle!=null,me=!!(o.appendAvatar||o.appendIcon),Ae=!!(me||u.append),Se=!!(o.prependAvatar||o.prependIcon),De=!!(Se||u.prepend);return M==null||M.updateHasPrepend(De),o.activeColor&&uz("active-color",["color","base-color"]),Zn(L(Z,{class:["v-list-item",{"v-list-item--active":N.value,"v-list-item--disabled":o.disabled,"v-list-item--link":H.value,"v-list-item--nav":o.nav,"v-list-item--prepend":!De&&(M==null?void 0:M.hasPrepend.value),"v-list-item--slim":o.slim,[`${o.activeClass}`]:o.activeClass&&N.value},D.value,F.value,z.value,Y.value,K.value,re.value,J.value,q.value,o.class],style:[W.value,te.value,o.style],href:g.href.value,tabindex:H.value?M?-2:0:void 0,onClick:oe,onKeydown:H.value&&!O.value&&_e},{default:()=>{var se;return[yd(H.value||N.value,"v-list-item"),De&&L("div",{key:"prepend",class:"v-list-item__prepend"},[u.prepend?L(Kn,{key:"prepend-defaults",disabled:!Se,defaults:{VAvatar:{density:o.density,image:o.prependAvatar},VIcon:{density:o.density,icon:o.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var ke;return[(ke=u.prepend)==null?void 0:ke.call(u,pe.value)]}}):L(We,null,[o.prependAvatar&&L(xs,{key:"prepend-avatar",density:o.density,image:o.prependAvatar},null),o.prependIcon&&L(ht,{key:"prepend-icon",density:o.density,icon:o.prependIcon},null)]),L("div",{class:"v-list-item__spacer"},null)]),L("div",{class:"v-list-item__content","data-no-activator":""},[de&&L(Sx,{key:"title"},{default:()=>{var ke,X;return[(X=(ke=u.title)==null?void 0:ke.call(u,{title:o.title}))!=null?X:o.title]}}),Ce&&L(PR,{key:"subtitle"},{default:()=>{var ke,X;return[(X=(ke=u.subtitle)==null?void 0:ke.call(u,{subtitle:o.subtitle}))!=null?X:o.subtitle]}}),(se=u.default)==null?void 0:se.call(u,pe.value)]),Ae&&L("div",{key:"append",class:"v-list-item__append"},[u.append?L(Kn,{key:"append-defaults",disabled:!me,defaults:{VAvatar:{density:o.density,image:o.appendAvatar},VIcon:{density:o.density,icon:o.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var ke;return[(ke=u.append)==null?void 0:ke.call(u,pe.value)]}}):L(We,null,[o.appendIcon&&L(ht,{key:"append-icon",density:o.density,icon:o.appendIcon},null),o.appendAvatar&&L(xs,{key:"append-avatar",density:o.density,image:o.appendAvatar},null)]),L("div",{class:"v-list-item__spacer"},null)])]}}),[[zi("ripple"),H.value&&o.ripple]])}),{}}}),LR=Ie({color:String,inset:Boolean,sticky:Boolean,title:String,...ft(),...En()},"VListSubheader"),zR=Je()({name:"VListSubheader",props:LR(),setup(o,a){let{slots:c}=a;const{textColorClasses:u,textColorStyles:f}=ti($e(o,"color"));return lt(()=>{const g=!!(c.default||o.title);return L(o.tag,{class:["v-list-subheader",{"v-list-subheader--inset":o.inset,"v-list-subheader--sticky":o.sticky},u.value,o.class],style:[{textColorStyles:f},o.style]},{default:()=>{var p,v;return[g&&L("div",{class:"v-list-subheader__text"},[(v=(p=c.default)==null?void 0:p.call(c))!=null?v:o.title])]}})}),{}}});const OR=Ie({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ft(),...hn()},"VDivider"),Dx=Je()({name:"VDivider",props:OR(),setup(o,a){let{attrs:c}=a;const{themeClasses:u}=xn(o),{textColorClasses:f,textColorStyles:g}=ti($e(o,"color")),p=G(()=>{const v={};return o.length&&(v[o.vertical?"maxHeight":"maxWidth"]=Ye(o.length)),o.thickness&&(v[o.vertical?"borderRightWidth":"borderTopWidth"]=Ye(o.thickness)),v});return lt(()=>L("hr",{class:[{"v-divider":!0,"v-divider--inset":o.inset,"v-divider--vertical":o.vertical},u.value,f.value,o.class],style:[p.value,g.value,o.style],"aria-orientation":!c.role||c.role==="separator"?o.vertical?"vertical":"horizontal":void 0,role:`${c.role||"separator"}`},null)),{}}}),RR=Ie({items:Array,returnObject:Boolean},"VListChildren"),Tx=Je()({name:"VListChildren",props:RR(),setup(o,a){let{slots:c}=a;return _x(),()=>{var u,f,g;return(g=(u=c.default)==null?void 0:u.call(c))!=null?g:(f=o.items)==null?void 0:f.map(p=>{var E,M,N,O;let{children:v,props:k,type:C,raw:y}=p;if(C==="divider")return(M=(E=c.divider)==null?void 0:E.call(c,{props:k}))!=null?M:L(Dx,k,null);if(C==="subheader")return(O=(N=c.subheader)==null?void 0:N.call(c,{props:k}))!=null?O:L(zR,k,null);const x={subtitle:c.subtitle?H=>{var R;return(R=c.subtitle)==null?void 0:R.call(c,{...H,item:y})}:void 0,prepend:c.prepend?H=>{var R;return(R=c.prepend)==null?void 0:R.call(c,{...H,item:y})}:void 0,append:c.append?H=>{var R;return(R=c.append)==null?void 0:R.call(c,{...H,item:y})}:void 0,title:c.title?H=>{var R;return(R=c.title)==null?void 0:R.call(c,{...H,item:y})}:void 0},A=ZC.filterProps(k);return v?L(ZC,ot({value:k==null?void 0:k.value},A),{activator:H=>{let{props:R}=H;const B={...k,...R,value:o.returnObject?y:k.value};return c.header?c.header({props:B}):L(Lo,B,x)},default:()=>L(Tx,{items:v},c)}):c.item?c.item({props:k}):L(Lo,ot(k,{value:o.returnObject?y:k.value}),x)})}}}),Ix=Ie({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Ns}},"list-items");function zf(o,a){var v;const c=Zo(a,o.itemTitle,a),u=Zo(a,o.itemValue,c),f=Zo(a,o.itemChildren),g=o.itemProps===!0?typeof a=="object"&&a!=null&&!Array.isArray(a)?"children"in a?Ps(a,["children"]):a:void 0:Zo(a,o.itemProps),p={title:c,value:u,...g};return{title:String((v=p.title)!=null?v:""),value:p.value,props:p,children:Array.isArray(f)?Mx(o,f):void 0,raw:a}}function Mx(o,a){const c=[];for(const u of a)c.push(zf(o,u));return c}function FR(o){const a=G(()=>Mx(o,o.items)),c=G(()=>a.value.some(g=>g.value===null));function u(g){return c.value||(g=g.filter(p=>p!==null)),g.map(p=>o.returnObject&&typeof p=="string"?zf(o,p):a.value.find(v=>o.valueComparator(p,v.value))||zf(o,p))}function f(g){return o.returnObject?g.map(p=>{let{raw:v}=p;return v}):g.map(p=>{let{value:v}=p;return v})}return{items:a,transformIn:u,transformOut:f}}function VR(o){return typeof o=="string"||typeof o=="number"||typeof o=="boolean"}function jR(o,a){const c=Zo(a,o.itemType,"item"),u=VR(a)?a:Zo(a,o.itemTitle),f=Zo(a,o.itemValue,void 0),g=Zo(a,o.itemChildren),p=o.itemProps===!0?Ps(a,["children"]):Zo(a,o.itemProps),v={title:u,value:f,...p};return{type:c,title:v.title,value:v.value,props:v,children:c==="item"&&g?Nx(o,g):void 0,raw:a}}function Nx(o,a){const c=[];for(const u of a)c.push(jR(o,u));return c}function HR(o){return{items:G(()=>Nx(o,o.items))}}const UR=Ie({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...DR({selectStrategy:"single-leaf",openStrategy:"list"}),...Rs(),...ft(),...Fi(),...zs(),...Vs(),itemType:{type:String,default:"type"},...Ix(),...jo(),...En(),...hn(),...Dr({variant:"text"})},"VList"),La=Je()({name:"VList",props:UR(),emits:{"update:selected":o=>!0,"update:opened":o=>!0,"click:open":o=>!0,"click:select":o=>!0},setup(o,a){let{slots:c}=a;const{items:u}=HR(o),{themeClasses:f}=xn(o),{backgroundColorClasses:g,backgroundColorStyles:p}=ni($e(o,"bgColor")),{borderClasses:v}=Fs(o),{densityClasses:k}=Vi(o),{dimensionStyles:C}=Os(o),{elevationClasses:y}=js(o),{roundedClasses:x}=Ho(o),{open:A,select:E}=TR(o),M=G(()=>o.lines?`v-list--${o.lines}-line`:void 0),N=$e(o,"activeColor"),O=$e(o,"baseColor"),H=$e(o,"color");_x(),Bs({VListGroup:{activeColor:N,baseColor:O,color:H,expandIcon:$e(o,"expandIcon"),collapseIcon:$e(o,"collapseIcon")},VListItem:{activeClass:$e(o,"activeClass"),activeColor:N,baseColor:O,color:H,density:$e(o,"density"),disabled:$e(o,"disabled"),lines:$e(o,"lines"),nav:$e(o,"nav"),slim:$e(o,"slim"),variant:$e(o,"variant")}});const R=Fe(!1),B=ze();function U(Y){R.value=!0}function D(Y){R.value=!1}function F(Y){var te;!R.value&&!(Y.relatedTarget&&((te=B.value)==null?void 0:te.contains(Y.relatedTarget)))&&q()}function z(Y){if(!!B.value){if(Y.key==="ArrowDown")q("next");else if(Y.key==="ArrowUp")q("prev");else if(Y.key==="Home")q("first");else if(Y.key==="End")q("last");else return;Y.preventDefault()}}function W(Y){R.value=!0}function q(Y){if(B.value)return Yc(B.value,Y)}return lt(()=>L(o.tag,{ref:B,class:["v-list",{"v-list--disabled":o.disabled,"v-list--nav":o.nav,"v-list--slim":o.slim},f.value,g.value,v.value,k.value,y.value,M.value,x.value,o.class],style:[p.value,C.value,o.style],tabindex:o.disabled||R.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:U,onFocusout:D,onFocus:F,onKeydown:z,onMousedown:W},{default:()=>[L(Tx,{items:u.value,returnObject:o.returnObject},c)]})),{open:A,select:E,focus:q}}});const $R=Ie({scrollable:Boolean,...ft(),...En({tag:"main"})},"VMain"),WR=Je()({name:"VMain",props:$R(),setup(o,a){let{slots:c}=a;const{mainStyles:u}=RO(),{ssrBootStyles:f}=Rg();return lt(()=>L(o.tag,{class:["v-main",{"v-main--scrollable":o.scrollable},o.class],style:[u.value,f.value,o.style]},{default:()=>{var g,p;return[o.scrollable?L("div",{class:"v-main__scroller"},[(g=c.default)==null?void 0:g.call(c)]):(p=c.default)==null?void 0:p.call(c)]}})),{}}});function GR(o){let{rootEl:a,isSticky:c,layoutItemStyles:u}=o;const f=Fe(!1),g=Fe(0),p=G(()=>{const C=typeof f.value=="boolean"?"top":f.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,f.value?{[C]:Ye(g.value)}:{top:u.value.top}]});yn(()=>{je(c,C=>{C?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),bn(()=>{window.removeEventListener("scroll",k)});let v=0;function k(){var N;const C=v>window.scrollY?"up":"down",y=a.value.getBoundingClientRect(),x=parseFloat((N=u.value.top)!=null?N:0),A=window.scrollY-Math.max(0,g.value-x),E=y.height+Math.max(g.value,x)-window.scrollY-window.innerHeight,M=parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y"))||0;y.height<window.innerHeight-x?(f.value="top",g.value=x):C==="up"&&f.value==="bottom"||C==="down"&&f.value==="top"?(g.value=window.scrollY+y.top-M,f.value=!0):C==="down"&&E<=0?(g.value=0,f.value="bottom"):C==="up"&&A<=0&&(M?f.value!=="top"&&(g.value=-A+M+x,f.value="top"):(g.value=y.top+A,f.value="top")),v=window.scrollY}return{isStuck:f,stickyStyles:p}}const qR=100,KR=20;function JC(o){const a=1.41421356237;return(o<0?-1:1)*Math.sqrt(Math.abs(o))*a}function XC(o){if(o.length<2)return 0;if(o.length===2)return o[1].t===o[0].t?0:(o[1].d-o[0].d)/(o[1].t-o[0].t);let a=0;for(let c=o.length-1;c>0;c--){if(o[c].t===o[c-1].t)continue;const u=JC(a),f=(o[c].d-o[c-1].d)/(o[c].t-o[c-1].t);a+=(f-u)*Math.abs(f),c===o.length-1&&(a*=.5)}return JC(a)*1e3}function YR(){const o={};function a(f){Array.from(f.changedTouches).forEach(g=>{var v;((v=o[g.identifier])!=null?v:o[g.identifier]=new Z3(KR)).push([f.timeStamp,g])})}function c(f){Array.from(f.changedTouches).forEach(g=>{delete o[g.identifier]})}function u(f){var C;const g=(C=o[f])==null?void 0:C.values().reverse();if(!g)throw new Error(`No samples for touch id ${f}`);const p=g[0],v=[],k=[];for(const y of g){if(p[0]-y[0]>qR)break;v.push({t:y[0],d:y[1].clientX}),k.push({t:y[0],d:y[1].clientY})}return{x:XC(v),y:XC(k),get direction(){const{x:y,y:x}=this,[A,E]=[Math.abs(y),Math.abs(x)];return A>E&&y>=0?"right":A>E&&y<=0?"left":E>A&&x>=0?"down":E>A&&x<=0?"up":QR()}}}return{addMovement:a,endTouch:c,getVelocity:u}}function QR(){throw new Error}function ZR(o){let{isActive:a,isTemporary:c,width:u,touchless:f,position:g}=o;yn(()=>{window.addEventListener("touchstart",H,{passive:!0}),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),bn(()=>{window.removeEventListener("touchstart",H),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",B)});const p=G(()=>["left","right"].includes(g.value)),{addMovement:v,endTouch:k,getVelocity:C}=YR();let y=!1;const x=Fe(!1),A=Fe(0),E=Fe(0);let M;function N(D,F){return(g.value==="left"?D:g.value==="right"?document.documentElement.clientWidth-D:g.value==="top"?D:g.value==="bottom"?document.documentElement.clientHeight-D:ss())-(F?u.value:0)}function O(D){let F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const z=g.value==="left"?(D-E.value)/u.value:g.value==="right"?(document.documentElement.clientWidth-D-E.value)/u.value:g.value==="top"?(D-E.value)/u.value:g.value==="bottom"?(document.documentElement.clientHeight-D-E.value)/u.value:ss();return F?Math.max(0,Math.min(1,z)):z}function H(D){if(f.value)return;const F=D.changedTouches[0].clientX,z=D.changedTouches[0].clientY,W=25,q=g.value==="left"?F<W:g.value==="right"?F>document.documentElement.clientWidth-W:g.value==="top"?z<W:g.value==="bottom"?z>document.documentElement.clientHeight-W:ss(),Y=a.value&&(g.value==="left"?F<u.value:g.value==="right"?F>document.documentElement.clientWidth-u.value:g.value==="top"?z<u.value:g.value==="bottom"?z>document.documentElement.clientHeight-u.value:ss());(q||Y||a.value&&c.value)&&(y=!0,M=[F,z],E.value=N(p.value?F:z,a.value),A.value=O(p.value?F:z),k(D),v(D))}function R(D){const F=D.changedTouches[0].clientX,z=D.changedTouches[0].clientY;if(y){if(!D.cancelable){y=!1;return}const q=Math.abs(F-M[0]),Y=Math.abs(z-M[1]);(p.value?q>Y&&q>3:Y>q&&Y>3)?(x.value=!0,y=!1):(p.value?Y:q)>3&&(y=!1)}if(!x.value)return;D.preventDefault(),v(D);const W=O(p.value?F:z,!1);A.value=Math.max(0,Math.min(1,W)),W>1?E.value=N(p.value?F:z,!0):W<0&&(E.value=N(p.value?F:z,!1))}function B(D){if(y=!1,!x.value)return;v(D),x.value=!1;const F=C(D.changedTouches[0].identifier),z=Math.abs(F.x),W=Math.abs(F.y);(p.value?z>W&&z>400:W>z&&W>3)?a.value=F.direction===({left:"right",right:"left",top:"down",bottom:"up"}[g.value]||ss()):a.value=A.value>.5}const U=G(()=>x.value?{transform:g.value==="left"?`translateX(calc(-100% + ${A.value*u.value}px))`:g.value==="right"?`translateX(calc(100% - ${A.value*u.value}px))`:g.value==="top"?`translateY(calc(-100% + ${A.value*u.value}px))`:g.value==="bottom"?`translateY(calc(100% - ${A.value*u.value}px))`:ss(),transition:"none"}:void 0);return{isDragging:x,dragProgress:A,dragStyles:U}}function ss(){throw new Error}function Fg(){const a=Yt("useScopeId").vnode.scopeId;return{scopeId:a?{[a]:""}:void 0}}const JR=["start","end","left","right","top","bottom"],XR=Ie({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:o=>JR.includes(o)},sticky:Boolean,...Rs(),...ft(),...U1(),...Vs(),...OO(),...jo(),...En({tag:"nav"}),...hn()},"VNavigationDrawer"),e6=Je()({name:"VNavigationDrawer",props:XR(),emits:{"update:modelValue":o=>!0,"update:rail":o=>!0},setup(o,a){let{attrs:c,emit:u,slots:f}=a;const{isRtl:g}=Ri(),{themeClasses:p}=xn(o),{borderClasses:v}=Fs(o),{backgroundColorClasses:k,backgroundColorStyles:C}=ni($e(o,"color")),{elevationClasses:y}=js(o),{displayClasses:x,mobile:A}=Cd(o),{roundedClasses:E}=Ho(o),M=ax(),N=rn(o,"modelValue",null,Ce=>!!Ce),{ssrBootStyles:O}=Rg(),{scopeId:H}=Fg(),R=ze(),B=Fe(!1),U=G(()=>o.rail&&o.expandOnHover&&B.value?Number(o.width):Number(o.rail?o.railWidth:o.width)),D=G(()=>Sf(o.location,g.value)),F=G(()=>!o.permanent&&(A.value||o.temporary)),z=G(()=>o.sticky&&!F.value&&D.value!=="bottom");Ro(()=>o.expandOnHover&&o.rail!=null,()=>{je(B,Ce=>u("update:rail",!Ce))}),Ro(()=>!o.disableResizeWatcher,()=>{je(F,Ce=>!o.permanent&&Wt(()=>N.value=!Ce))}),Ro(()=>!o.disableRouteWatcher&&!!M,()=>{je(M.currentRoute,()=>F.value&&(N.value=!1))}),je(()=>o.permanent,Ce=>{Ce&&(N.value=!0)}),nl(()=>{o.modelValue!=null||F.value||(N.value=o.permanent||!A.value)});const{isDragging:W,dragProgress:q,dragStyles:Y}=ZR({isActive:N,isTemporary:F,width:U,touchless:$e(o,"touchless"),position:D}),te=G(()=>{const Ce=F.value?0:o.rail&&o.expandOnHover?Number(o.railWidth):U.value;return W.value?Ce*q.value:Ce}),{layoutItemStyles:K,layoutItemScrimStyles:J}=FO({id:o.name,order:G(()=>parseInt(o.order,10)),position:D,layoutSize:te,elementSize:U,active:G(()=>N.value||W.value),disableTransitions:G(()=>W.value),absolute:G(()=>o.absolute||z.value&&typeof re.value!="string")}),{isStuck:re,stickyStyles:pe}=GR({rootEl:R,isSticky:z,layoutItemStyles:K}),oe=ni(G(()=>typeof o.scrim=="string"?o.scrim:null)),_e=G(()=>({...W.value?{opacity:q.value*.2,transition:"none"}:void 0,...J.value}));Bs({VList:{bgColor:"transparent"}});function Z(){B.value=!0}function de(){B.value=!1}return lt(()=>{const Ce=f.image||o.image;return L(We,null,[L(o.tag,ot({ref:R,onMouseenter:Z,onMouseleave:de,class:["v-navigation-drawer",`v-navigation-drawer--${D.value}`,{"v-navigation-drawer--expand-on-hover":o.expandOnHover,"v-navigation-drawer--floating":o.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":o.rail,"v-navigation-drawer--temporary":F.value,"v-navigation-drawer--active":N.value,"v-navigation-drawer--sticky":z.value},p.value,k.value,v.value,x.value,y.value,E.value,o.class],style:[C.value,K.value,Y.value,O.value,pe.value,o.style]},H,c),{default:()=>{var me,Ae,Se,De;return[Ce&&L("div",{key:"image",class:"v-navigation-drawer__img"},[f.image?(me=f.image)==null?void 0:me.call(f,{image:o.image}):L("img",{src:o.image,alt:""},null)]),f.prepend&&L("div",{class:"v-navigation-drawer__prepend"},[(Ae=f.prepend)==null?void 0:Ae.call(f)]),L("div",{class:"v-navigation-drawer__content"},[(Se=f.default)==null?void 0:Se.call(f)]),f.append&&L("div",{class:"v-navigation-drawer__append"},[(De=f.append)==null?void 0:De.call(f)])]}}),L(wo,{name:"fade-transition"},{default:()=>[F.value&&(W.value||N.value)&&!!o.scrim&&L("div",ot({class:["v-navigation-drawer__scrim",oe.backgroundColorClasses.value],style:[_e.value,oe.backgroundColorStyles.value],onClick:()=>N.value=!1},H),null)]})])}),{isStuck:re}}}),t6=Qe("span",{class:"mr-3"},"\u6A21\u5F0F",-1),n6={__name:"Layout",setup(o){const a=LO(),c=ze([{href:"/",text:"\u6240\u6709\u7B46\u8A18",value:"all",icon:"mdi-file-document-outline"},{href:"/fav",text:"\u6377\u5F91",value:"fav",icon:"mdi-star"},{href:"/tag",text:"\u6A19\u7C64",value:"tag",icon:"mdi-tag"},{href:"/calendar",text:"\u6708\u66C6",value:"calendar",icon:"mdi-calendar-blank-outline"},{href:"/share",text:"\u8207\u6211\u5171\u7528",value:"share",icon:"mdi-account-multiple"},{href:"/trash",text:"\u5783\u573E\u6876",value:"delete",icon:"mdi-delete-outline"}]);yn(()=>{a.global.name.value=window.localStorage.getItem("noteTheme")||"lightTheme"});const u=f=>{window.localStorage.setItem("noteTheme",f),a.global.name.value=f};return(f,g)=>{const p=cg("router-view");return it(),Bt(We,null,[L(e6,{class:"a-drawer",permanent:""},{append:at(()=>[L(La,null,{default:at(()=>[L(Lo,null,{default:at(()=>[Qe("div",null,[t6,L(Yh,{icon:"mdi-weather-sunny",size:"x-small",class:Qn(["ml-3",{"mode-active":Ht(a).global.name.value==="lightTheme"}]),color:"#ffffff",variant:Ht(a).global.name.value==="darkTheme"?"outlined":"elevated",onClick:g[0]||(g[0]=v=>u("lightTheme"))},null,8,["class","variant"]),L(Yh,{icon:"mdi-weather-night",size:"x-small",class:Qn(["ml-3",{"mode-active":Ht(a).global.name.value==="darkTheme"}]),color:"#ffffff",variant:Ht(a).global.name.value==="lightTheme"?"outlined":"elevated",onClick:g[1]||(g[1]=v=>u("darkTheme"))},null,8,["class","variant"])])]),_:1}),L(Lo,{class:"append-user"},{default:at(()=>[L(xs,{class:"mr-3"},{default:at(()=>[L(ht,{icon:"mdi-account-circle",size:"35"})]),_:1}),Lt(" Sandy ")]),_:1})]),_:1})]),default:at(()=>[L(La,null,{default:at(()=>[L(Lo,{title:"FreeNote.",class:"drawer-title"}),L(Lo,null,{default:at(()=>[L(Yh,{block:"",class:"mt-3 add-note"},{default:at(()=>[L(ht,{class:"mr-2",size:"28"},{default:at(()=>[Lt("mdi-plus-circle")]),_:1}),Lt(" \u65B0\u589E\u7B46\u8A18 ")]),_:1})]),_:1})]),_:1}),L(La,{class:"router-list"},{default:at(()=>[(it(!0),Bt(We,null,Ti(c.value,v=>(it(),so(Lo,{to:v.href,"prepend-icon":v.icon,title:v.text,value:v.value},null,8,["to","prepend-icon","title","value"]))),256))]),_:1})]),_:1}),L(WR,null,{default:at(()=>[L(p)]),_:1})],64)}}};const o6=Ie({...ft(),...zO({fullHeight:!0}),...hn()},"VApp"),i6=Je()({name:"VApp",props:o6(),setup(o,a){let{slots:c}=a;const u=xn(o),{layoutClasses:f,getLayoutItem:g,items:p,layoutRef:v}=jO(o),{rtlClasses:k}=Ri();return lt(()=>{var C;return L("div",{ref:v,class:["v-application",u.themeClasses.value,f.value,k.value,o.class],style:[o.style]},[L("div",{class:"v-application__wrap"},[(C=c.default)==null?void 0:C.call(c)])])}),{getLayoutItem:g,items:p,theme:u}}}),r6={__name:"App",setup(o){return(a,c)=>(it(),so(i6,null,{default:at(()=>[L(n6)]),_:1}))}};const s6={dark:!1,colors:{primary:"#2F419B",drawerText:"#ffffff",text:"#555555",pageDrawerBg:"#F4F6F7",pageDrawerBorder:"#E6E6E6",background:"#FFFFFF",contentText:"#666666",tagBg:"#E9EBF4",tagText:"#2F419B",title:"#555555",cardAngle:"#E9EBF4",searchInputBg:"#E6E6E6",btnBg:"#FFFFFF",link:"#666666",listHover:"#E9EBF4"}},a6={dark:!0,colors:{primary:"#26252A",drawerText:"#ffffff",text:"#A3A3A3",pageDrawerBg:"#343338",pageDrawerBorder:"#666666",background:"#26252A",contentText:"#F2F2F2",tagBg:"#343338",tagText:"#FED32C",title:"#FFFFFF",cardAngle:"#FED32C",searchInputBg:"#26252A",btnBg:"#FED32C",listHover:"#26252A"}},l6=q1({theme:{defaultTheme:"lightTheme",themes:{lightTheme:s6,darkTheme:a6}}});/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function c6(o){return o.__esModule||o[Symbol.toStringTag]==="Module"}const vt=Object.assign;function Qh(o,a){const c={};for(const u in a){const f=a[u];c[u]=_o(f)?f.map(o):o(f)}return c}const za=()=>{},_o=Array.isArray,Px=/#/g,d6=/&/g,u6=/\//g,h6=/=/g,f6=/\?/g,Bx=/\+/g,g6=/%5B/g,m6=/%5D/g,Lx=/%5E/g,p6=/%60/g,zx=/%7B/g,b6=/%7C/g,Ox=/%7D/g,k6=/%20/g;function Vg(o){return encodeURI(""+o).replace(b6,"|").replace(g6,"[").replace(m6,"]")}function v6(o){return Vg(o).replace(zx,"{").replace(Ox,"}").replace(Lx,"^")}function Of(o){return Vg(o).replace(Bx,"%2B").replace(k6,"+").replace(Px,"%23").replace(d6,"%26").replace(p6,"`").replace(zx,"{").replace(Ox,"}").replace(Lx,"^")}function w6(o){return Of(o).replace(h6,"%3D")}function _6(o){return Vg(o).replace(Px,"%23").replace(f6,"%3F")}function C6(o){return o==null?"":_6(o).replace(u6,"%2F")}function Za(o){try{return decodeURIComponent(""+o)}catch{}return""+o}const A6=/\/$/,y6=o=>o.replace(A6,"");function Zh(o,a,c="/"){let u,f={},g="",p="";const v=a.indexOf("#");let k=a.indexOf("?");return v<k&&v>=0&&(k=-1),k>-1&&(u=a.slice(0,k),g=a.slice(k+1,v>-1?v:a.length),f=o(g)),v>-1&&(u=u||a.slice(0,v),p=a.slice(v,a.length)),u=D6(u!=null?u:a,c),{fullPath:u+(g&&"?")+g+p,path:u,query:f,hash:Za(p)}}function x6(o,a){const c=a.query?o(a.query):"";return a.path+(c&&"?")+c+(a.hash||"")}function eA(o,a){return!a||!o.toLowerCase().startsWith(a.toLowerCase())?o:o.slice(a.length)||"/"}function E6(o,a,c){const u=a.matched.length-1,f=c.matched.length-1;return u>-1&&u===f&&Es(a.matched[u],c.matched[f])&&Rx(a.params,c.params)&&o(a.query)===o(c.query)&&a.hash===c.hash}function Es(o,a){return(o.aliasOf||o)===(a.aliasOf||a)}function Rx(o,a){if(Object.keys(o).length!==Object.keys(a).length)return!1;for(const c in o)if(!S6(o[c],a[c]))return!1;return!0}function S6(o,a){return _o(o)?tA(o,a):_o(a)?tA(a,o):o===a}function tA(o,a){return _o(a)?o.length===a.length&&o.every((c,u)=>c===a[u]):o.length===1&&o[0]===a}function D6(o,a){if(o.startsWith("/"))return o;if(!o)return a;const c=a.split("/"),u=o.split("/"),f=u[u.length-1];(f===".."||f===".")&&u.push("");let g=c.length-1,p,v;for(p=0;p<u.length;p++)if(v=u[p],v!==".")if(v==="..")g>1&&g--;else break;return c.slice(0,g).join("/")+"/"+u.slice(p).join("/")}var Ja;(function(o){o.pop="pop",o.push="push"})(Ja||(Ja={}));var Oa;(function(o){o.back="back",o.forward="forward",o.unknown=""})(Oa||(Oa={}));function T6(o){if(!o)if(cs){const a=document.querySelector("base");o=a&&a.getAttribute("href")||"/",o=o.replace(/^\w+:\/\/[^\/]+/,"")}else o="/";return o[0]!=="/"&&o[0]!=="#"&&(o="/"+o),y6(o)}const I6=/^[^#]+#/;function M6(o,a){return o.replace(I6,"#")+a}function N6(o,a){const c=document.documentElement.getBoundingClientRect(),u=o.getBoundingClientRect();return{behavior:a.behavior,left:u.left-c.left-(a.left||0),top:u.top-c.top-(a.top||0)}}const Sd=()=>({left:window.scrollX,top:window.scrollY});function P6(o){let a;if("el"in o){const c=o.el,u=typeof c=="string"&&c.startsWith("#"),f=typeof c=="string"?u?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!f)return;a=N6(f,o)}else a=o;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function nA(o,a){return(history.state?history.state.position-a:-1)+o}const Rf=new Map;function B6(o,a){Rf.set(o,a)}function L6(o){const a=Rf.get(o);return Rf.delete(o),a}let z6=()=>location.protocol+"//"+location.host;function Fx(o,a){const{pathname:c,search:u,hash:f}=a,g=o.indexOf("#");if(g>-1){let v=f.includes(o.slice(g))?o.slice(g).length:1,k=f.slice(v);return k[0]!=="/"&&(k="/"+k),eA(k,"")}return eA(c,o)+u+f}function O6(o,a,c,u){let f=[],g=[],p=null;const v=({state:A})=>{const E=Fx(o,location),M=c.value,N=a.value;let O=0;if(A){if(c.value=E,a.value=A,p&&p===M){p=null;return}O=N?A.position-N.position:0}else u(E);f.forEach(H=>{H(c.value,M,{delta:O,type:Ja.pop,direction:O?O>0?Oa.forward:Oa.back:Oa.unknown})})};function k(){p=c.value}function C(A){f.push(A);const E=()=>{const M=f.indexOf(A);M>-1&&f.splice(M,1)};return g.push(E),E}function y(){const{history:A}=window;!A.state||A.replaceState(vt({},A.state,{scroll:Sd()}),"")}function x(){for(const A of g)A();g=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",y,{passive:!0}),{pauseListeners:k,listen:C,destroy:x}}function oA(o,a,c,u=!1,f=!1){return{back:o,current:a,forward:c,replaced:u,position:window.history.length,scroll:f?Sd():null}}function R6(o){const{history:a,location:c}=window,u={value:Fx(o,c)},f={value:a.state};f.value||g(u.value,{back:null,current:u.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function g(k,C,y){const x=o.indexOf("#"),A=x>-1?(c.host&&document.querySelector("base")?o:o.slice(x))+k:z6()+o+k;try{a[y?"replaceState":"pushState"](C,"",A),f.value=C}catch(E){console.error(E),c[y?"replace":"assign"](A)}}function p(k,C){const y=vt({},a.state,oA(f.value.back,k,f.value.forward,!0),C,{position:f.value.position});g(k,y,!0),u.value=k}function v(k,C){const y=vt({},f.value,a.state,{forward:k,scroll:Sd()});g(y.current,y,!0);const x=vt({},oA(u.value,k,null),{position:y.position+1},C);g(k,x,!1),u.value=k}return{location:u,state:f,push:v,replace:p}}function F6(o){o=T6(o);const a=R6(o),c=O6(o,a.state,a.location,a.replace);function u(g,p=!0){p||c.pauseListeners(),history.go(g)}const f=vt({location:"",base:o,go:u,createHref:M6.bind(null,o)},a,c);return Object.defineProperty(f,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(f,"state",{enumerable:!0,get:()=>a.state.value}),f}function V6(o){return o=location.host?o||location.pathname+location.search:"",o.includes("#")||(o+="#"),F6(o)}function j6(o){return typeof o=="string"||o&&typeof o=="object"}function Vx(o){return typeof o=="string"||typeof o=="symbol"}const wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jx=Symbol("");var iA;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(iA||(iA={}));function Ss(o,a){return vt(new Error,{type:o,[jx]:!0},a)}function Ko(o,a){return o instanceof Error&&jx in o&&(a==null||!!(o.type&a))}const rA="[^/]+?",H6={sensitive:!1,strict:!1,start:!0,end:!0},U6=/[.+*?^${}()[\]/\\]/g;function $6(o,a){const c=vt({},H6,a),u=[];let f=c.start?"^":"";const g=[];for(const C of o){const y=C.length?[]:[90];c.strict&&!C.length&&(f+="/");for(let x=0;x<C.length;x++){const A=C[x];let E=40+(c.sensitive?.25:0);if(A.type===0)x||(f+="/"),f+=A.value.replace(U6,"\\$&"),E+=40;else if(A.type===1){const{value:M,repeatable:N,optional:O,regexp:H}=A;g.push({name:M,repeatable:N,optional:O});const R=H||rA;if(R!==rA){E+=10;try{new RegExp(`(${R})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${M}" (${R}): `+U.message)}}let B=N?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;x||(B=O&&C.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),f+=B,E+=20,O&&(E+=-8),N&&(E+=-20),R===".*"&&(E+=-50)}y.push(E)}u.push(y)}if(c.strict&&c.end){const C=u.length-1;u[C][u[C].length-1]+=.7000000000000001}c.strict||(f+="/?"),c.end?f+="$":c.strict&&(f+="(?:/|$)");const p=new RegExp(f,c.sensitive?"":"i");function v(C){const y=C.match(p),x={};if(!y)return null;for(let A=1;A<y.length;A++){const E=y[A]||"",M=g[A-1];x[M.name]=E&&M.repeatable?E.split("/"):E}return x}function k(C){let y="",x=!1;for(const A of o){(!x||!y.endsWith("/"))&&(y+="/"),x=!1;for(const E of A)if(E.type===0)y+=E.value;else if(E.type===1){const{value:M,repeatable:N,optional:O}=E,H=M in C?C[M]:"";if(_o(H)&&!N)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const R=_o(H)?H.join("/"):H;if(!R)if(O)A.length<2&&(y.endsWith("/")?y=y.slice(0,-1):x=!0);else throw new Error(`Missing required param "${M}"`);y+=R}}return y||"/"}return{re:p,score:u,keys:g,parse:v,stringify:k}}function W6(o,a){let c=0;for(;c<o.length&&c<a.length;){const u=a[c]-o[c];if(u)return u;c++}return o.length<a.length?o.length===1&&o[0]===40+40?-1:1:o.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function G6(o,a){let c=0;const u=o.score,f=a.score;for(;c<u.length&&c<f.length;){const g=W6(u[c],f[c]);if(g)return g;c++}if(Math.abs(f.length-u.length)===1){if(sA(u))return 1;if(sA(f))return-1}return f.length-u.length}function sA(o){const a=o[o.length-1];return o.length>0&&a[a.length-1]<0}const q6={type:0,value:""},K6=/[a-zA-Z0-9_]/;function Y6(o){if(!o)return[[]];if(o==="/")return[[q6]];if(!o.startsWith("/"))throw new Error(`Invalid path "${o}"`);function a(E){throw new Error(`ERR (${c})/"${C}": ${E}`)}let c=0,u=c;const f=[];let g;function p(){g&&f.push(g),g=[]}let v=0,k,C="",y="";function x(){!C||(c===0?g.push({type:0,value:C}):c===1||c===2||c===3?(g.length>1&&(k==="*"||k==="+")&&a(`A repeatable param (${C}) must be alone in its segment. eg: '/:ids+.`),g.push({type:1,value:C,regexp:y,repeatable:k==="*"||k==="+",optional:k==="*"||k==="?"})):a("Invalid state to consume buffer"),C="")}function A(){C+=k}for(;v<o.length;){if(k=o[v++],k==="\\"&&c!==2){u=c,c=4;continue}switch(c){case 0:k==="/"?(C&&x(),p()):k===":"?(x(),c=1):A();break;case 4:A(),c=u;break;case 1:k==="("?c=2:K6.test(k)?A():(x(),c=0,k!=="*"&&k!=="?"&&k!=="+"&&v--);break;case 2:k===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+k:c=3:y+=k;break;case 3:x(),c=0,k!=="*"&&k!=="?"&&k!=="+"&&v--,y="";break;default:a("Unknown state");break}}return c===2&&a(`Unfinished custom RegExp for param "${C}"`),x(),p(),f}function Q6(o,a,c){const u=$6(Y6(o.path),c),f=vt(u,{record:o,parent:a,children:[],alias:[]});return a&&!f.record.aliasOf==!a.record.aliasOf&&a.children.push(f),f}function Z6(o,a){const c=[],u=new Map;a=cA({strict:!1,end:!0,sensitive:!1},a);function f(y){return u.get(y)}function g(y,x,A){const E=!A,M=J6(y);M.aliasOf=A&&A.record;const N=cA(a,y),O=[M];if("alias"in y){const B=typeof y.alias=="string"?[y.alias]:y.alias;for(const U of B)O.push(vt({},M,{components:A?A.record.components:M.components,path:U,aliasOf:A?A.record:M}))}let H,R;for(const B of O){const{path:U}=B;if(x&&U[0]!=="/"){const D=x.record.path,F=D[D.length-1]==="/"?"":"/";B.path=x.record.path+(U&&F+U)}if(H=Q6(B,x,N),A?A.alias.push(H):(R=R||H,R!==H&&R.alias.push(H),E&&y.name&&!lA(H)&&p(y.name)),M.children){const D=M.children;for(let F=0;F<D.length;F++)g(D[F],H,A&&A.children[F])}A=A||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&k(H)}return R?()=>{p(R)}:za}function p(y){if(Vx(y)){const x=u.get(y);x&&(u.delete(y),c.splice(c.indexOf(x),1),x.children.forEach(p),x.alias.forEach(p))}else{const x=c.indexOf(y);x>-1&&(c.splice(x,1),y.record.name&&u.delete(y.record.name),y.children.forEach(p),y.alias.forEach(p))}}function v(){return c}function k(y){let x=0;for(;x<c.length&&G6(y,c[x])>=0&&(y.record.path!==c[x].record.path||!Hx(y,c[x]));)x++;c.splice(x,0,y),y.record.name&&!lA(y)&&u.set(y.record.name,y)}function C(y,x){let A,E={},M,N;if("name"in y&&y.name){if(A=u.get(y.name),!A)throw Ss(1,{location:y});N=A.record.name,E=vt(aA(x.params,A.keys.filter(R=>!R.optional).concat(A.parent?A.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),y.params&&aA(y.params,A.keys.map(R=>R.name))),M=A.stringify(E)}else if(y.path!=null)M=y.path,A=c.find(R=>R.re.test(M)),A&&(E=A.parse(M),N=A.record.name);else{if(A=x.name?u.get(x.name):c.find(R=>R.re.test(x.path)),!A)throw Ss(1,{location:y,currentLocation:x});N=A.record.name,E=vt({},x.params,y.params),M=A.stringify(E)}const O=[];let H=A;for(;H;)O.unshift(H.record),H=H.parent;return{name:N,path:M,params:E,matched:O,meta:eF(O)}}return o.forEach(y=>g(y)),{addRoute:g,resolve:C,removeRoute:p,getRoutes:v,getRecordMatcher:f}}function aA(o,a){const c={};for(const u of a)u in o&&(c[u]=o[u]);return c}function J6(o){return{path:o.path,redirect:o.redirect,name:o.name,meta:o.meta||{},aliasOf:void 0,beforeEnter:o.beforeEnter,props:X6(o),children:o.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in o?o.components||null:o.component&&{default:o.component}}}function X6(o){const a={},c=o.props||!1;if("component"in o)a.default=c;else for(const u in o.components)a[u]=typeof c=="object"?c[u]:c;return a}function lA(o){for(;o;){if(o.record.aliasOf)return!0;o=o.parent}return!1}function eF(o){return o.reduce((a,c)=>vt(a,c.meta),{})}function cA(o,a){const c={};for(const u in o)c[u]=u in a?a[u]:o[u];return c}function Hx(o,a){return a.children.some(c=>c===o||Hx(o,c))}function tF(o){const a={};if(o===""||o==="?")return a;const u=(o[0]==="?"?o.slice(1):o).split("&");for(let f=0;f<u.length;++f){const g=u[f].replace(Bx," "),p=g.indexOf("="),v=Za(p<0?g:g.slice(0,p)),k=p<0?null:Za(g.slice(p+1));if(v in a){let C=a[v];_o(C)||(C=a[v]=[C]),C.push(k)}else a[v]=k}return a}function dA(o){let a="";for(let c in o){const u=o[c];if(c=w6(c),u==null){u!==void 0&&(a+=(a.length?"&":"")+c);continue}(_o(u)?u.map(g=>g&&Of(g)):[u&&Of(u)]).forEach(g=>{g!==void 0&&(a+=(a.length?"&":"")+c,g!=null&&(a+="="+g))})}return a}function nF(o){const a={};for(const c in o){const u=o[c];u!==void 0&&(a[c]=_o(u)?u.map(f=>f==null?null:""+f):u==null?u:""+u)}return a}const oF=Symbol(""),uA=Symbol(""),jg=Symbol(""),Ux=Symbol(""),Ff=Symbol("");function ya(){let o=[];function a(u){return o.push(u),()=>{const f=o.indexOf(u);f>-1&&o.splice(f,1)}}function c(){o=[]}return{add:a,list:()=>o.slice(),reset:c}}function Ei(o,a,c,u,f,g=p=>p()){const p=u&&(u.enterCallbacks[f]=u.enterCallbacks[f]||[]);return()=>new Promise((v,k)=>{const C=A=>{A===!1?k(Ss(4,{from:c,to:a})):A instanceof Error?k(A):j6(A)?k(Ss(2,{from:a,to:A})):(p&&u.enterCallbacks[f]===p&&typeof A=="function"&&p.push(A),v())},y=g(()=>o.call(u&&u.instances[f],a,c,C));let x=Promise.resolve(y);o.length<3&&(x=x.then(C)),x.catch(A=>k(A))})}function Jh(o,a,c,u,f=g=>g()){const g=[];for(const p of o)for(const v in p.components){let k=p.components[v];if(!(a!=="beforeRouteEnter"&&!p.instances[v]))if(iF(k)){const y=(k.__vccOpts||k)[a];y&&g.push(Ei(y,c,u,p,v,f))}else{let C=k();g.push(()=>C.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${v}" at "${p.path}"`));const x=c6(y)?y.default:y;p.components[v]=x;const E=(x.__vccOpts||x)[a];return E&&Ei(E,c,u,p,v,f)()}))}}return g}function iF(o){return typeof o=="object"||"displayName"in o||"props"in o||"__vccOpts"in o}function hA(o){const a=pt(jg),c=pt(Ux),u=G(()=>a.resolve(Ht(o.to))),f=G(()=>{const{matched:k}=u.value,{length:C}=k,y=k[C-1],x=c.matched;if(!y||!x.length)return-1;const A=x.findIndex(Es.bind(null,y));if(A>-1)return A;const E=fA(k[C-2]);return C>1&&fA(y)===E&&x[x.length-1].path!==E?x.findIndex(Es.bind(null,k[C-2])):A}),g=G(()=>f.value>-1&&lF(c.params,u.value.params)),p=G(()=>f.value>-1&&f.value===c.matched.length-1&&Rx(c.params,u.value.params));function v(k={}){return aF(k)?a[Ht(o.replace)?"replace":"push"](Ht(o.to)).catch(za):Promise.resolve()}return{route:u,href:G(()=>u.value.href),isActive:g,isExactActive:p,navigate:v}}const rF=Ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hA,setup(o,{slots:a}){const c=cn(hA(o)),{options:u}=pt(jg),f=G(()=>({[gA(o.activeClass,u.linkActiveClass,"router-link-active")]:c.isActive,[gA(o.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const g=a.default&&a.default(c);return o.custom?g:ii("a",{"aria-current":c.isExactActive?o.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:f.value},g)}}}),sF=rF;function aF(o){if(!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)&&!o.defaultPrevented&&!(o.button!==void 0&&o.button!==0)){if(o.currentTarget&&o.currentTarget.getAttribute){const a=o.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return o.preventDefault&&o.preventDefault(),!0}}function lF(o,a){for(const c in a){const u=a[c],f=o[c];if(typeof u=="string"){if(u!==f)return!1}else if(!_o(f)||f.length!==u.length||u.some((g,p)=>g!==f[p]))return!1}return!0}function fA(o){return o?o.aliasOf?o.aliasOf.path:o.path:""}const gA=(o,a,c)=>o!=null?o:a!=null?a:c,cF=Ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(o,{attrs:a,slots:c}){const u=pt(Ff),f=G(()=>o.route||u.value),g=pt(uA,0),p=G(()=>{let C=Ht(g);const{matched:y}=f.value;let x;for(;(x=y[C])&&!x.components;)C++;return C}),v=G(()=>f.value.matched[p.value]);Zt(uA,G(()=>p.value+1)),Zt(oF,v),Zt(Ff,f);const k=ze();return je(()=>[k.value,v.value,o.name],([C,y,x],[A,E,M])=>{y&&(y.instances[x]=C,E&&E!==y&&C&&C===A&&(y.leaveGuards.size||(y.leaveGuards=E.leaveGuards),y.updateGuards.size||(y.updateGuards=E.updateGuards))),C&&y&&(!E||!Es(y,E)||!A)&&(y.enterCallbacks[x]||[]).forEach(N=>N(C))},{flush:"post"}),()=>{const C=f.value,y=o.name,x=v.value,A=x&&x.components[y];if(!A)return mA(c.default,{Component:A,route:C});const E=x.props[y],M=E?E===!0?C.params:typeof E=="function"?E(C):E:null,O=ii(A,vt({},M,a,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(x.instances[y]=null)},ref:k}));return mA(c.default,{Component:O,route:C})||O}}});function mA(o,a){if(!o)return null;const c=o(a);return c.length===1?c[0]:c}const dF=cF;function uF(o){const a=Z6(o.routes,o),c=o.parseQuery||tF,u=o.stringifyQuery||dA,f=o.history,g=ya(),p=ya(),v=ya(),k=Fe(wi);let C=wi;cs&&o.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=Qh.bind(null,X=>""+X),x=Qh.bind(null,C6),A=Qh.bind(null,Za);function E(X,ve){let be,Ne;return Vx(X)?(be=a.getRecordMatcher(X),Ne=ve):Ne=X,a.addRoute(Ne,be)}function M(X){const ve=a.getRecordMatcher(X);ve&&a.removeRoute(ve)}function N(){return a.getRoutes().map(X=>X.record)}function O(X){return!!a.getRecordMatcher(X)}function H(X,ve){if(ve=vt({},ve||k.value),typeof X=="string"){const $=Zh(c,X,ve.path),ee=a.resolve({path:$.path},ve),ce=f.createHref($.fullPath);return vt($,ee,{params:A(ee.params),hash:Za($.hash),redirectedFrom:void 0,href:ce})}let be;if(X.path!=null)be=vt({},X,{path:Zh(c,X.path,ve.path).path});else{const $=vt({},X.params);for(const ee in $)$[ee]==null&&delete $[ee];be=vt({},X,{params:x($)}),ve.params=x(ve.params)}const Ne=a.resolve(be,ve),Pe=X.hash||"";Ne.params=y(A(Ne.params));const qe=x6(u,vt({},X,{hash:v6(Pe),path:Ne.path})),V=f.createHref(qe);return vt({fullPath:qe,hash:Pe,query:u===dA?nF(X.query):X.query||{}},Ne,{redirectedFrom:void 0,href:V})}function R(X){return typeof X=="string"?Zh(c,X,k.value.path):vt({},X)}function B(X,ve){if(C!==X)return Ss(8,{from:ve,to:X})}function U(X){return z(X)}function D(X){return U(vt(R(X),{replace:!0}))}function F(X){const ve=X.matched[X.matched.length-1];if(ve&&ve.redirect){const{redirect:be}=ve;let Ne=typeof be=="function"?be(X):be;return typeof Ne=="string"&&(Ne=Ne.includes("?")||Ne.includes("#")?Ne=R(Ne):{path:Ne},Ne.params={}),vt({query:X.query,hash:X.hash,params:Ne.path!=null?{}:X.params},Ne)}}function z(X,ve){const be=C=H(X),Ne=k.value,Pe=X.state,qe=X.force,V=X.replace===!0,$=F(be);if($)return z(vt(R($),{state:typeof $=="object"?vt({},Pe,$.state):Pe,force:qe,replace:V}),ve||be);const ee=be;ee.redirectedFrom=ve;let ce;return!qe&&E6(u,Ne,be)&&(ce=Ss(16,{to:ee,from:Ne}),me(Ne,Ne,!0,!1)),(ce?Promise.resolve(ce):Y(ee,Ne)).catch(le=>Ko(le)?Ko(le,2)?le:Ce(le):Z(le,ee,Ne)).then(le=>{if(le){if(Ko(le,2))return z(vt({replace:V},R(le.to),{state:typeof le.to=="object"?vt({},Pe,le.to.state):Pe,force:qe}),ve||ee)}else le=K(ee,Ne,!0,V,Pe);return te(ee,Ne,le),le})}function W(X,ve){const be=B(X,ve);return be?Promise.reject(be):Promise.resolve()}function q(X){const ve=De.values().next().value;return ve&&typeof ve.runWithContext=="function"?ve.runWithContext(X):X()}function Y(X,ve){let be;const[Ne,Pe,qe]=hF(X,ve);be=Jh(Ne.reverse(),"beforeRouteLeave",X,ve);for(const $ of Ne)$.leaveGuards.forEach(ee=>{be.push(Ei(ee,X,ve))});const V=W.bind(null,X,ve);return be.push(V),ke(be).then(()=>{be=[];for(const $ of g.list())be.push(Ei($,X,ve));return be.push(V),ke(be)}).then(()=>{be=Jh(Pe,"beforeRouteUpdate",X,ve);for(const $ of Pe)$.updateGuards.forEach(ee=>{be.push(Ei(ee,X,ve))});return be.push(V),ke(be)}).then(()=>{be=[];for(const $ of qe)if($.beforeEnter)if(_o($.beforeEnter))for(const ee of $.beforeEnter)be.push(Ei(ee,X,ve));else be.push(Ei($.beforeEnter,X,ve));return be.push(V),ke(be)}).then(()=>(X.matched.forEach($=>$.enterCallbacks={}),be=Jh(qe,"beforeRouteEnter",X,ve,q),be.push(V),ke(be))).then(()=>{be=[];for(const $ of p.list())be.push(Ei($,X,ve));return be.push(V),ke(be)}).catch($=>Ko($,8)?$:Promise.reject($))}function te(X,ve,be){v.list().forEach(Ne=>q(()=>Ne(X,ve,be)))}function K(X,ve,be,Ne,Pe){const qe=B(X,ve);if(qe)return qe;const V=ve===wi,$=cs?history.state:{};be&&(Ne||V?f.replace(X.fullPath,vt({scroll:V&&$&&$.scroll},Pe)):f.push(X.fullPath,Pe)),k.value=X,me(X,ve,be,V),Ce()}let J;function re(){J||(J=f.listen((X,ve,be)=>{if(!se.listening)return;const Ne=H(X),Pe=F(Ne);if(Pe){z(vt(Pe,{replace:!0}),Ne).catch(za);return}C=Ne;const qe=k.value;cs&&B6(nA(qe.fullPath,be.delta),Sd()),Y(Ne,qe).catch(V=>Ko(V,12)?V:Ko(V,2)?(z(V.to,Ne).then($=>{Ko($,20)&&!be.delta&&be.type===Ja.pop&&f.go(-1,!1)}).catch(za),Promise.reject()):(be.delta&&f.go(-be.delta,!1),Z(V,Ne,qe))).then(V=>{V=V||K(Ne,qe,!1),V&&(be.delta&&!Ko(V,8)?f.go(-be.delta,!1):be.type===Ja.pop&&Ko(V,20)&&f.go(-1,!1)),te(Ne,qe,V)}).catch(za)}))}let pe=ya(),oe=ya(),_e;function Z(X,ve,be){Ce(X);const Ne=oe.list();return Ne.length?Ne.forEach(Pe=>Pe(X,ve,be)):console.error(X),Promise.reject(X)}function de(){return _e&&k.value!==wi?Promise.resolve():new Promise((X,ve)=>{pe.add([X,ve])})}function Ce(X){return _e||(_e=!X,re(),pe.list().forEach(([ve,be])=>X?be(X):ve()),pe.reset()),X}function me(X,ve,be,Ne){const{scrollBehavior:Pe}=o;if(!cs||!Pe)return Promise.resolve();const qe=!be&&L6(nA(X.fullPath,0))||(Ne||!be)&&history.state&&history.state.scroll||null;return Wt().then(()=>Pe(X,ve,qe)).then(V=>V&&P6(V)).catch(V=>Z(V,X,ve))}const Ae=X=>f.go(X);let Se;const De=new Set,se={currentRoute:k,listening:!0,addRoute:E,removeRoute:M,hasRoute:O,getRoutes:N,resolve:H,options:o,push:U,replace:D,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:g.add,beforeResolve:p.add,afterEach:v.add,onError:oe.add,isReady:de,install(X){const ve=this;X.component("RouterLink",sF),X.component("RouterView",dF),X.config.globalProperties.$router=ve,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>Ht(k)}),cs&&!Se&&k.value===wi&&(Se=!0,U(f.location).catch(Pe=>{}));const be={};for(const Pe in wi)Object.defineProperty(be,Pe,{get:()=>k.value[Pe],enumerable:!0});X.provide(jg,ve),X.provide(Ux,eg(be)),X.provide(Ff,k);const Ne=X.unmount;De.add(X),X.unmount=function(){De.delete(X),De.size<1&&(C=wi,J&&J(),J=null,k.value=wi,Se=!1,_e=!1),Ne()}}};function ke(X){return X.reduce((ve,be)=>ve.then(()=>q(be)),Promise.resolve())}return se}function hF(o,a){const c=[],u=[],f=[],g=Math.max(a.matched.length,o.matched.length);for(let p=0;p<g;p++){const v=a.matched[p];v&&(o.matched.find(C=>Es(C,v))?u.push(v):c.push(v));const k=o.matched[p];k&&(a.matched.find(C=>Es(C,k))||f.push(k))}return[c,u,f]}const fF=(o,a)=>{const c=o.__vccOpts||o;for(const[u,f]of a)c[u]=f;return c};const gF=Ie({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ft(),...sl({transition:{component:vx}})},"VCounter"),mF=Je()({name:"VCounter",functional:!0,props:gF(),setup(o,a){let{slots:c}=a;const u=G(()=>o.max?`${o.value} / ${o.max}`:String(o.value));return lt(()=>L(Si,{transition:o.transition},{default:()=>[Zn(L("div",{class:["v-counter",o.class],style:o.style},[c.default?c.default({counter:u.value,max:o.max,value:o.value}):u.value]),[[Oi,o.active]])]})),{}}});const pF=Ie({text:String,onClick:po(),...ft(),...hn()},"VLabel"),$x=Je()({name:"VLabel",props:pF(),setup(o,a){let{slots:c}=a;return lt(()=>{var u;return L("label",{class:["v-label",{"v-label--clickable":!!o.onClick},o.class],style:o.style,onClick:o.onClick},[o.text,(u=c.default)==null?void 0:u.call(c)])}),{}}}),bF=Ie({floating:Boolean,...ft()},"VFieldLabel"),xc=Je()({name:"VFieldLabel",props:bF(),setup(o,a){let{slots:c}=a;return lt(()=>L($x,{class:["v-field-label",{"v-field-label--floating":o.floating},o.class],style:o.style,"aria-hidden":o.floating||void 0},c)),{}}});function Wx(o){const{t:a}=Mg();function c(u){var k;let{name:f}=u;const g={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[f],p=o[`onClick:${f}`],v=p&&g?a(`$vuetify.input.${g}`,(k=o.label)!=null?k:""):void 0;return L(ht,{icon:o[`${f}Icon`],"aria-label":v,onClick:p},null)}return{InputIcon:c}}const Gx=Ie({focused:Boolean,"onUpdate:focused":po()},"focus");function qx(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo();const c=rn(o,"focused"),u=G(()=>({[`${a}--focused`]:c.value}));function f(){c.value=!0}function g(){c.value=!1}return{focusClasses:u,isFocused:c,focus:f,blur:g}}const kF=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Kx=Ie({appendInnerIcon:Mt,bgColor:String,clearable:Boolean,clearIcon:{type:Mt,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Mt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:o=>kF.includes(o)},"onClick:clear":po(),"onClick:appendInner":po(),"onClick:prependInner":po(),...ft(),...rx(),...jo(),...hn()},"VField"),Yx=Je()({name:"VField",inheritAttrs:!1,props:{id:String,...Gx(),...Kx()},emits:{"update:focused":o=>!0,"update:modelValue":o=>!0},setup(o,a){let{attrs:c,emit:u,slots:f}=a;const{themeClasses:g}=xn(o),{loaderClasses:p}=sx(o),{focusClasses:v,isFocused:k,focus:C,blur:y}=qx(o),{InputIcon:x}=Wx(o),{roundedClasses:A}=Ho(o),{rtlClasses:E}=Ri(),M=G(()=>o.dirty||o.active),N=G(()=>!o.singleLine&&!!(o.label||f.label)),O=Co(),H=G(()=>o.id||`input-${O}`),R=G(()=>`${H.value}-messages`),B=ze(),U=ze(),D=ze(),F=G(()=>["plain","underlined"].includes(o.variant)),{backgroundColorClasses:z,backgroundColorStyles:W}=ni($e(o,"bgColor")),{textColorClasses:q,textColorStyles:Y}=ti(G(()=>o.error||o.disabled?void 0:M.value&&k.value?o.color:o.baseColor));je(M,J=>{if(N.value){const re=B.value.$el,pe=U.value.$el;requestAnimationFrame(()=>{const oe=Sg(re),_e=pe.getBoundingClientRect(),Z=_e.x-oe.x,de=_e.y-oe.y-(oe.height/2-_e.height/2),Ce=_e.width/.75,me=Math.abs(Ce-oe.width)>1?{maxWidth:Ye(Ce)}:void 0,Ae=getComputedStyle(re),Se=getComputedStyle(pe),De=parseFloat(Ae.transitionDuration)*1e3||150,se=parseFloat(Se.getPropertyValue("--v-field-label-scale")),ke=Se.getPropertyValue("color");re.style.visibility="visible",pe.style.visibility="hidden",ds(re,{transform:`translate(${Z}px, ${de}px) scale(${se})`,color:ke,...me},{duration:De,easing:Jc,direction:J?"normal":"reverse"}).finished.then(()=>{re.style.removeProperty("visibility"),pe.style.removeProperty("visibility")})})}},{flush:"post"});const te=G(()=>({isActive:M,isFocused:k,controlRef:D,blur:y,focus:C}));function K(J){J.target!==document.activeElement&&J.preventDefault()}return lt(()=>{var Z,de,Ce,me;const J=o.variant==="outlined",re=f["prepend-inner"]||o.prependInnerIcon,pe=!!(o.clearable||f.clear),oe=!!(f["append-inner"]||o.appendInnerIcon||pe),_e=()=>f.label?f.label({...te.value,label:o.label,props:{for:H.value}}):o.label;return L("div",ot({class:["v-field",{"v-field--active":M.value,"v-field--appended":oe,"v-field--center-affix":(Z=o.centerAffix)!=null?Z:!F.value,"v-field--disabled":o.disabled,"v-field--dirty":o.dirty,"v-field--error":o.error,"v-field--flat":o.flat,"v-field--has-background":!!o.bgColor,"v-field--persistent-clear":o.persistentClear,"v-field--prepended":re,"v-field--reverse":o.reverse,"v-field--single-line":o.singleLine,"v-field--no-label":!_e(),[`v-field--variant-${o.variant}`]:!0},g.value,z.value,v.value,p.value,A.value,E.value,o.class],style:[W.value,o.style],onClick:K},c),[L("div",{class:"v-field__overlay"},null),L(aR,{name:"v-field",active:!!o.loading,color:o.error?"error":typeof o.loading=="string"?o.loading:o.color},{default:f.loader}),re&&L("div",{key:"prepend",class:"v-field__prepend-inner"},[o.prependInnerIcon&&L(x,{key:"prepend-icon",name:"prependInner"},null),(de=f["prepend-inner"])==null?void 0:de.call(f,te.value)]),L("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(o.variant)&&N.value&&L(xc,{key:"floating-label",ref:U,class:[q.value],floating:!0,for:H.value,style:Y.value},{default:()=>[_e()]}),L(xc,{ref:B,for:H.value},{default:()=>[_e()]}),(Ce=f.default)==null?void 0:Ce.call(f,{...te.value,props:{id:H.value,class:"v-field__input","aria-describedby":R.value},focus:C,blur:y})]),pe&&L(wx,{key:"clear"},{default:()=>[Zn(L("div",{class:"v-field__clearable",onMousedown:Ae=>{Ae.preventDefault(),Ae.stopPropagation()}},[f.clear?f.clear():L(x,{name:"clear"},null)]),[[Oi,o.dirty]])]}),oe&&L("div",{key:"append",class:"v-field__append-inner"},[(me=f["append-inner"])==null?void 0:me.call(f,te.value),o.appendInnerIcon&&L(x,{key:"append-icon",name:"appendInner"},null)]),L("div",{class:["v-field__outline",q.value],style:Y.value},[J&&L(We,null,[L("div",{class:"v-field__outline__start"},null),N.value&&L("div",{class:"v-field__outline__notch"},[L(xc,{ref:U,floating:!0,for:H.value},{default:()=>[_e()]})]),L("div",{class:"v-field__outline__end"},null)]),F.value&&N.value&&L(xc,{ref:U,floating:!0,for:H.value},{default:()=>[_e()]})])])}),{controlRef:D}}});function vF(o){const a=Object.keys(Yx.props).filter(c=>!xg(c)&&c!=="class"&&c!=="style");return v1(o,a)}const wF=Ie({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ft(),...sl({transition:{component:vx,leaveAbsolute:!0,group:!0}})},"VMessages"),_F=Je()({name:"VMessages",props:wF(),setup(o,a){let{slots:c}=a;const u=G(()=>Xo(o.messages)),{textColorClasses:f,textColorStyles:g}=ti(G(()=>o.color));return lt(()=>L(Si,{transition:o.transition,tag:"div",class:["v-messages",f.value,o.class],style:[g.value,o.style],role:"alert","aria-live":"polite"},{default:()=>[o.active&&u.value.map((p,v)=>L("div",{class:"v-messages__message",key:`${v}-${u.value}`},[c.message?c.message({message:p}):p]))]})),{}}}),CF=Symbol.for("vuetify:form");function Qx(){return pt(CF,null)}const AF=Ie({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Gx()},"validation");function yF(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vo(),c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Co();const u=rn(o,"modelValue"),f=G(()=>o.validationValue===void 0?u.value:o.validationValue),g=Qx(),p=ze([]),v=Fe(!0),k=G(()=>!!(Xo(u.value===""?null:u.value).length||Xo(f.value===""?null:f.value).length)),C=G(()=>{var U;return!!((U=o.disabled)!=null?U:g==null?void 0:g.isDisabled.value)}),y=G(()=>{var U;return!!((U=o.readonly)!=null?U:g==null?void 0:g.isReadonly.value)}),x=G(()=>{var U;return(U=o.errorMessages)!=null&&U.length?Xo(o.errorMessages).concat(p.value).slice(0,Math.max(0,+o.maxErrors)):p.value}),A=G(()=>{var F,z;let U=((F=o.validateOn)!=null?F:g==null?void 0:g.validateOn.value)||"input";U==="lazy"&&(U="input lazy");const D=new Set((z=U==null?void 0:U.split(" "))!=null?z:[]);return{blur:D.has("blur")||D.has("input"),input:D.has("input"),submit:D.has("submit"),lazy:D.has("lazy")}}),E=G(()=>{var U;return o.error||((U=o.errorMessages)==null?void 0:U.length)?!1:o.rules.length?v.value?p.value.length||A.value.lazy?null:!0:!p.value.length:!0}),M=Fe(!1),N=G(()=>({[`${a}--error`]:E.value===!1,[`${a}--dirty`]:k.value,[`${a}--disabled`]:C.value,[`${a}--readonly`]:y.value})),O=G(()=>{var U;return(U=o.name)!=null?U:Ht(c)});nl(()=>{g==null||g.register({id:O.value,validate:B,reset:H,resetValidation:R})}),bn(()=>{g==null||g.unregister(O.value)}),yn(async()=>{A.value.lazy||await B(!0),g==null||g.update(O.value,E.value,x.value)}),Ro(()=>A.value.input,()=>{je(f,()=>{if(f.value!=null)B();else if(o.focused){const U=je(()=>o.focused,D=>{D||B(),U()})}})}),Ro(()=>A.value.blur,()=>{je(()=>o.focused,U=>{U||B()})}),je([E,x],()=>{g==null||g.update(O.value,E.value,x.value)});function H(){u.value=null,Wt(R)}function R(){v.value=!0,A.value.lazy?p.value=[]:B(!0)}async function B(){var F;let U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const D=[];M.value=!0;for(const z of o.rules){if(D.length>=+((F=o.maxErrors)!=null?F:1))break;const q=await(typeof z=="function"?z:()=>z)(f.value);if(q!==!0){if(q!==!1&&typeof q!="string"){console.warn(`${q} is not a valid value. Rule functions must return boolean true or a string.`);continue}D.push(q||"")}}return p.value=D,M.value=!1,v.value=U,p.value}return{errorMessages:x,isDirty:k,isDisabled:C,isReadonly:y,isPristine:v,isValid:E,isValidating:M,reset:H,resetValidation:R,validate:B,validationClasses:N}}const Zx=Ie({id:String,appendIcon:Mt,centerAffix:{type:Boolean,default:!0},prependIcon:Mt,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:o=>["horizontal","vertical"].includes(o)},"onClick:prepend":po(),"onClick:append":po(),...ft(),...Fi(),...AF()},"VInput"),pA=Je()({name:"VInput",props:{...Zx()},emits:{"update:modelValue":o=>!0},setup(o,a){let{attrs:c,slots:u,emit:f}=a;const{densityClasses:g}=Vi(o),{rtlClasses:p}=Ri(),{InputIcon:v}=Wx(o),k=Co(),C=G(()=>o.id||`input-${k}`),y=G(()=>`${C.value}-messages`),{errorMessages:x,isDirty:A,isDisabled:E,isReadonly:M,isPristine:N,isValid:O,isValidating:H,reset:R,resetValidation:B,validate:U,validationClasses:D}=yF(o,"v-input",C),F=G(()=>({id:C,messagesId:y,isDirty:A,isDisabled:E,isReadonly:M,isPristine:N,isValid:O,isValidating:H,reset:R,resetValidation:B,validate:U})),z=G(()=>{var W;return((W=o.errorMessages)==null?void 0:W.length)||!N.value&&x.value.length?x.value:o.hint&&(o.persistentHint||o.focused)?o.hint:o.messages});return lt(()=>{var K,J,re,pe;const W=!!(u.prepend||o.prependIcon),q=!!(u.append||o.appendIcon),Y=z.value.length>0,te=!o.hideDetails||o.hideDetails==="auto"&&(Y||!!u.details);return L("div",{class:["v-input",`v-input--${o.direction}`,{"v-input--center-affix":o.centerAffix,"v-input--hide-spin-buttons":o.hideSpinButtons},g.value,p.value,D.value,o.class],style:o.style},[W&&L("div",{key:"prepend",class:"v-input__prepend"},[(K=u.prepend)==null?void 0:K.call(u,F.value),o.prependIcon&&L(v,{key:"prepend-icon",name:"prepend"},null)]),u.default&&L("div",{class:"v-input__control"},[(J=u.default)==null?void 0:J.call(u,F.value)]),q&&L("div",{key:"append",class:"v-input__append"},[o.appendIcon&&L(v,{key:"append-icon",name:"append"},null),(re=u.append)==null?void 0:re.call(u,F.value)]),te&&L("div",{class:"v-input__details"},[L(_F,{id:y.value,active:Y,messages:z.value},{message:u.message}),(pe=u.details)==null?void 0:pe.call(u,F.value)])])}),{reset:R,resetValidation:B,validate:U,isValid:O,errorMessages:x}}}),Xh=Symbol("Forwarded refs");function ef(o,a){let c=o;for(;c;){const u=Reflect.getOwnPropertyDescriptor(c,a);if(u)return u;c=Object.getPrototypeOf(c)}}function Hg(o){for(var a=arguments.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];return o[Xh]=c,new Proxy(o,{get(f,g){if(Reflect.has(f,g))return Reflect.get(f,g);if(!(typeof g=="symbol"||g.startsWith("$")||g.startsWith("__"))){for(const p of c)if(p.value&&Reflect.has(p.value,g)){const v=Reflect.get(p.value,g);return typeof v=="function"?v.bind(p.value):v}}},has(f,g){if(Reflect.has(f,g))return!0;if(typeof g=="symbol"||g.startsWith("$")||g.startsWith("__"))return!1;for(const p of c)if(p.value&&Reflect.has(p.value,g))return!0;return!1},set(f,g,p){if(Reflect.has(f,g))return Reflect.set(f,g,p);if(typeof g=="symbol"||g.startsWith("$")||g.startsWith("__"))return!1;for(const v of c)if(v.value&&Reflect.has(v.value,g))return Reflect.set(v.value,g,p);return!1},getOwnPropertyDescriptor(f,g){var v,k;const p=Reflect.getOwnPropertyDescriptor(f,g);if(p)return p;if(!(typeof g=="symbol"||g.startsWith("$")||g.startsWith("__"))){for(const C of c){if(!C.value)continue;const y=(k=ef(C.value,g))!=null?k:"_"in C.value?ef((v=C.value._)==null?void 0:v.setupState,g):void 0;if(y)return y}for(const C of c){const y=C.value&&C.value[Xh];if(!y)continue;const x=y.slice();for(;x.length;){const A=x.shift(),E=ef(A.value,g);if(E)return E;const M=A.value&&A.value[Xh];M&&x.push(...M)}}}}})}const xF=["color","file","time","date","datetime-local","week","month"],Jx=Ie({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Zx(),...Kx()},"VTextField"),Vf=Je()({name:"VTextField",directives:{Intersect:Q1},inheritAttrs:!1,props:Jx(),emits:{"click:control":o=>!0,"mousedown:control":o=>!0,"update:focused":o=>!0,"update:modelValue":o=>!0},setup(o,a){let{attrs:c,emit:u,slots:f}=a;const g=rn(o,"modelValue"),{isFocused:p,focus:v,blur:k}=qx(o),C=G(()=>{var F;return typeof o.counterValue=="function"?o.counterValue(g.value):typeof o.counterValue=="number"?o.counterValue:((F=g.value)!=null?F:"").toString().length}),y=G(()=>{if(c.maxlength)return c.maxlength;if(!(!o.counter||typeof o.counter!="number"&&typeof o.counter!="string"))return o.counter}),x=G(()=>["plain","underlined"].includes(o.variant));function A(F,z){var W,q;!o.autofocus||!F||(q=(W=z[0].target)==null?void 0:W.focus)==null||q.call(W)}const E=ze(),M=ze(),N=ze(),O=G(()=>xF.includes(o.type)||o.persistentPlaceholder||p.value||o.active);function H(){var F;N.value!==document.activeElement&&((F=N.value)==null||F.focus()),p.value||v()}function R(F){u("mousedown:control",F),F.target!==N.value&&(H(),F.preventDefault())}function B(F){H(),u("click:control",F)}function U(F){F.stopPropagation(),H(),Wt(()=>{g.value=null,J3(o["onClick:clear"],F)})}function D(F){var W;const z=F.target;if(g.value=z.value,((W=o.modelModifiers)==null?void 0:W.trim)&&["text","search","password","tel","url"].includes(o.type)){const q=[z.selectionStart,z.selectionEnd];Wt(()=>{z.selectionStart=q[0],z.selectionEnd=q[1]})}}return lt(()=>{const F=!!(f.counter||o.counter!==!1&&o.counter!=null),z=!!(F||f.details),[W,q]=_1(c),{modelValue:Y,...te}=pA.filterProps(o),K=vF(o);return L(pA,ot({ref:E,modelValue:g.value,"onUpdate:modelValue":J=>g.value=J,class:["v-text-field",{"v-text-field--prefixed":o.prefix,"v-text-field--suffixed":o.suffix,"v-input--plain-underlined":x.value},o.class],style:o.style},W,te,{centerAffix:!x.value,focused:p.value}),{...f,default:J=>{let{id:re,isDisabled:pe,isDirty:oe,isReadonly:_e,isValid:Z}=J;return L(Yx,ot({ref:M,onMousedown:R,onClick:B,"onClick:clear":U,"onClick:prependInner":o["onClick:prependInner"],"onClick:appendInner":o["onClick:appendInner"],role:o.role},K,{id:re.value,active:O.value||oe.value,dirty:oe.value||o.dirty,disabled:pe.value,focused:p.value,error:Z.value===!1}),{...f,default:de=>{let{props:{class:Ce,...me}}=de;const Ae=Zn(L("input",ot({ref:N,value:g.value,onInput:D,autofocus:o.autofocus,readonly:_e.value,disabled:pe.value,name:o.name,placeholder:o.placeholder,size:1,type:o.type,onFocus:H,onBlur:k},me,q),null),[[zi("intersect"),{handler:A},null,{once:!0}]]);return L(We,null,[o.prefix&&L("span",{class:"v-text-field__prefix"},[L("span",{class:"v-text-field__prefix__text"},[o.prefix])]),f.default?L("div",{class:Ce,"data-no-activator":""},[f.default(),Ae]):vo(Ae,{class:Ce}),o.suffix&&L("span",{class:"v-text-field__suffix"},[L("span",{class:"v-text-field__suffix__text"},[o.suffix])])])}})},details:z?J=>{var re;return L(We,null,[(re=f.details)==null?void 0:re.call(f,J),F&&L(We,null,[L("span",null,null),L(mF,{active:o.persistentCounter||p.value,value:C.value,max:y.value},f.counter)])])}:void 0})}),Hg({},E,M,N)}}),EF={};function SF(o,a){return it(),so(Vf,{placeholder:"\u641C\u5C0B\u4F60\u7684\u7B46\u8A18","prepend-inner-icon":"mdi-magnify",class:"search-input",variant:"plain","bg-color":"searchInputBg","hide-details":"","single-line":""})}const DF=fF(EF,[["render",SF]]);const TF={class:"note-card"},IF={key:0,class:"note-card__active"},MF={class:"note-card__content"},NF={class:"note-card__content-header"},PF={class:"header-fav"},BF=["title"],LF=["innerHTML"],zF={class:"note-card__content-footer"},OF={class:"footer-tags"},RF={class:"tag-item"},FF={class:"footer-right"},VF={key:0,class:"footer-file"},jF={class:"footer-time"},HF={__name:"NoteCard",props:{data:Object,active:Boolean},setup(o){return(a,c)=>(it(),Bt("div",TF,[o.active?(it(),Bt("div",IF)):mo("",!0),Qe("div",{class:Qn(["note-card__bg",{active:o.active}])},[Qe("div",{class:Qn(["note-card__mask",{active:o.active}])},null,2)],2),Qe("div",MF,[Qe("div",NF,[Qe("div",PF,[L(ht,{size:"22",color:"tagText",onClick:c[0]||(c[0]=Ag(u=>a.$emit("onClickFav",o.data.id),["stop"]))},{default:at(()=>[Lt(mn(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1})]),Qe("div",{class:"header-title",title:o.data.title},mn(o.data.title),9,BF)]),Qe("div",{class:"note-card__content-body",innerHTML:o.data.content},null,8,LF),Qe("div",zF,[Qe("div",OF,[(it(!0),Bt(We,null,Ti(o.data.tags,u=>(it(),Bt("div",RF,mn(u),1))),256))]),Qe("div",FF,[o.data.file?(it(),Bt("div",VF,[L(ht,{size:"18"},{default:at(()=>[Lt("mdi-paperclip")]),_:1})])):mo("",!0),Qe("div",jF,mn(o.data.time),1)])])])]))}};const UF={class:"note-summary__header"},$F=["title"],WF={class:"note-summary__content"},GF={class:"note-summary__footer"},qF={class:"footer-tags"},KF={class:"tag-item"},YF={class:"footer-right"},QF={key:0,class:"footer-file"},ZF={class:"footer-time"},JF={__name:"NoteSummary",props:{data:Object,active:Boolean},setup(o){return(a,c)=>(it(),Bt("div",{class:Qn(["note-summary",{active:o.active}])},[Qe("div",UF,[L(ht,{size:"22",color:"tagText",onClick:c[0]||(c[0]=Ag(u=>a.$emit("onClickFav",o.data.id),["stop"]))},{default:at(()=>[Lt(mn(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1}),Qe("div",{class:"header-title",title:o.data.title},mn(o.data.title),9,$F)]),Qe("div",WF,mn(o.data.content),1),Qe("div",GF,[Qe("div",qF,[(it(!0),Bt(We,null,Ti(o.data.tags,u=>(it(),Bt("div",KF,mn(u),1))),256))]),Qe("div",YF,[o.data.file?(it(),Bt("div",QF,[L(ht,{size:"18"},{default:at(()=>[Lt("mdi-paperclip")]),_:1})])):mo("",!0),Qe("div",ZF,mn(o.data.time),1)])])],2))}};var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function XF(o){var a=o.default;if(typeof a=="function"){var c=function(){return a.apply(this,arguments)};c.prototype=a.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(o).forEach(function(u){var f=Object.getOwnPropertyDescriptor(o,u);Object.defineProperty(c,u,f.get?f:{enumerable:!0,get:function(){return o[u]}})}),c}var jf={exports:{}};(function(o,a){(function(c){const u=c.en=c.en||{};u.dictionary=Object.assign(u.dictionary||{},{"%0 of %1":"%0 of %1","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Disc:"Disc","Document colors":"Document colors",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Huge:"Huge","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Small:"Small","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(c,u){o.exports=u()}(self,()=>(()=>{var c={3062:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=A},903:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const E=A},4717:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=A},9315:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=A},1896:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontcolor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CAEC,kBAAmB,CADnB,YAAa,CAEb,UACD,CAEA,8BACC,iBACD,CCNA,4CAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-button.ck-color-table__remove-color {
	display: flex;
	align-items: center;
	width: 100%;
}

label.ck.ck-color-grid__label {
	font-weight: unset;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck .ck-button.ck-color-table__remove-color {
	padding: calc(var(--ck-spacing-standard) / 2 ) var(--ck-spacing-standard);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	&:not(:focus) {
		border-bottom: 1px solid var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-standard);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-standard);
		}
	}
}

`],sourceRoot:""}]);const E=A},6007:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const E=A},8733:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=A},3508:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=A},2640:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=A},6270:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=A},5083:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},4036:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=A},3773:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=A},3689:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=A},1905:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},9773:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=A},2347:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},7754:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},4721:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=A},6082:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=A},2417:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-list-styles-list{display:grid}.ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:circle}.ck-content ul ul{list-style-type:disc}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CAEA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,sBAaD,CAXC,kBACC,oBASD,CAJE,6CACC,sBACD,CCnCH,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: circle;

	& ul {
		list-style-type: disc;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=A},4652:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=A},7442:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},9292:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},1613:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=A},6306:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=A},3881:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=A},6945:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},4906:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=A},5332:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=A},6781:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=A},5485:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},3949:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},7686:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},7339:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=A},9688:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},8847:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=A},6574:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},4879:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},3662:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=A},2577:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},1046:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},8793:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},4650:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=A},7676:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},5868:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},6764:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=A},9695:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=A},5542:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=A},3332:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=A},4793:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=A},3488:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=A},8506:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=A},4921:(p,v,k)=>{k.d(v,{Z:()=>E});var C=k(1799),y=k.n(C),x=k(2609),A=k.n(x)()(y());A.push([p.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=A},2609:p=>{p.exports=function(v){var k=[];return k.toString=function(){return this.map(function(C){var y=v(C);return C[2]?"@media ".concat(C[2]," {").concat(y,"}"):y}).join("")},k.i=function(C,y,x){typeof C=="string"&&(C=[[null,C,""]]);var A={};if(x)for(var E=0;E<this.length;E++){var M=this[E][0];M!=null&&(A[M]=!0)}for(var N=0;N<C.length;N++){var O=[].concat(C[N]);x&&A[O[0]]||(y&&(O[2]?O[2]="".concat(y," and ").concat(O[2]):O[2]=y),k.push(O))}},k}},1799:p=>{function v(C,y){return function(x){if(Array.isArray(x))return x}(C)||function(x,A){var E=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(E!=null){var M,N,O=[],H=!0,R=!1;try{for(E=E.call(x);!(H=(M=E.next()).done)&&(O.push(M.value),!A||O.length!==A);H=!0);}catch(B){R=!0,N=B}finally{try{H||E.return==null||E.return()}finally{if(R)throw N}}return O}}(C,y)||function(x,A){if(!!x){if(typeof x=="string")return k(x,A);var E=Object.prototype.toString.call(x).slice(8,-1);if(E==="Object"&&x.constructor&&(E=x.constructor.name),E==="Map"||E==="Set")return Array.from(x);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return k(x,A)}}(C,y)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(C,y){(y==null||y>C.length)&&(y=C.length);for(var x=0,A=new Array(y);x<y;x++)A[x]=C[x];return A}p.exports=function(C){var y=v(C,4),x=y[1],A=y[3];if(!A)return x;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),N="/*# ".concat(M," */"),O=A.sources.map(function(H){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(H," */")});return[x].concat(O).concat([N]).join(`
`)}return[x].join(`
`)}},6062:(p,v,k)=>{var C,y=function(){return C===void 0&&(C=Boolean(window&&document&&document.all&&!window.atob)),C},x=function(){var z={};return function(W){if(z[W]===void 0){var q=document.querySelector(W);if(window.HTMLIFrameElement&&q instanceof window.HTMLIFrameElement)try{q=q.contentDocument.head}catch{q=null}z[W]=q}return z[W]}}(),A=[];function E(z){for(var W=-1,q=0;q<A.length;q++)if(A[q].identifier===z){W=q;break}return W}function M(z,W){for(var q={},Y=[],te=0;te<z.length;te++){var K=z[te],J=W.base?K[0]+W.base:K[0],re=q[J]||0,pe="".concat(J," ").concat(re);q[J]=re+1;var oe=E(pe),_e={css:K[1],media:K[2],sourceMap:K[3]};oe!==-1?(A[oe].references++,A[oe].updater(_e)):A.push({identifier:pe,updater:F(_e,W),references:1}),Y.push(pe)}return Y}function N(z){var W=document.createElement("style"),q=z.attributes||{};if(q.nonce===void 0){var Y=k.nc;Y&&(q.nonce=Y)}if(Object.keys(q).forEach(function(K){W.setAttribute(K,q[K])}),typeof z.insert=="function")z.insert(W);else{var te=x(z.insert||"head");if(!te)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");te.appendChild(W)}return W}var O,H=(O=[],function(z,W){return O[z]=W,O.filter(Boolean).join(`
`)});function R(z,W,q,Y){var te=q?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if(z.styleSheet)z.styleSheet.cssText=H(W,te);else{var K=document.createTextNode(te),J=z.childNodes;J[W]&&z.removeChild(J[W]),J.length?z.insertBefore(K,J[W]):z.appendChild(K)}}function B(z,W,q){var Y=q.css,te=q.media,K=q.sourceMap;if(te?z.setAttribute("media",te):z.removeAttribute("media"),K&&typeof btoa<"u"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(K))))," */")),z.styleSheet)z.styleSheet.cssText=Y;else{for(;z.firstChild;)z.removeChild(z.firstChild);z.appendChild(document.createTextNode(Y))}}var U=null,D=0;function F(z,W){var q,Y,te;if(W.singleton){var K=D++;q=U||(U=N(W)),Y=R.bind(null,q,K,!1),te=R.bind(null,q,K,!0)}else q=N(W),Y=B.bind(null,q,W),te=function(){(function(J){if(J.parentNode===null)return!1;J.parentNode.removeChild(J)})(q)};return Y(z),function(J){if(J){if(J.css===z.css&&J.media===z.media&&J.sourceMap===z.sourceMap)return;Y(z=J)}else te()}}p.exports=function(z,W){(W=W||{}).singleton||typeof W.singleton=="boolean"||(W.singleton=y());var q=M(z=z||[],W);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var te=0;te<q.length;te++){var K=E(q[te]);A[K].references--}for(var J=M(Y,W),re=0;re<q.length;re++){var pe=E(q[re]);A[pe].references===0&&(A[pe].updater(),A.splice(pe,1))}q=J}}}}},u={};function f(p){var v=u[p];if(v!==void 0)return v.exports;var k=u[p]={id:p,exports:{}};return c[p](k,k.exports,f),k.exports}f.n=p=>{var v=p&&p.__esModule?()=>p.default:()=>p;return f.d(v,{a:v}),v},f.d=(p,v)=>{for(var k in v)f.o(v,k)&&!f.o(p,k)&&Object.defineProperty(p,k,{enumerable:!0,get:v[k]})},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(p,v)=>Object.prototype.hasOwnProperty.call(p,v),f.nc=void 0;var g={};return(()=>{f.d(g,{default:()=>Ph});const p=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),v={isMac:C(p),isWindows:function(r){return r.indexOf("windows")>-1}(p),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(p),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(p),isiOS:function(r){return!!r.match(/iphone|ipad/i)||C(r)&&navigator.maxTouchPoints>0}(p),isAndroid:function(r){return r.indexOf("android")>-1}(p),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(p),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}},k=v;function C(r){return r.indexOf("macintosh")>-1}function y(r,e,t,n){t=t||function(h,m){return h===m};const i=Array.isArray(r)?r:Array.prototype.slice.call(r),s=Array.isArray(e)?e:Array.prototype.slice.call(e),l=function(h,m,b){const w=x(h,m,b);if(w===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const _=A(h,w),S=A(m,w),T=x(_,S,b),I=h.length-T,P=m.length-T;return{firstIndex:w,lastIndexOld:I,lastIndexNew:P}}(i,s,t);return n?function(h,m){const{firstIndex:b,lastIndexOld:w,lastIndexNew:_}=h;if(b===-1)return Array(m).fill("equal");let S=[];return b>0&&(S=S.concat(Array(b).fill("equal"))),_-b>0&&(S=S.concat(Array(_-b).fill("insert"))),w-b>0&&(S=S.concat(Array(w-b).fill("delete"))),_<m&&(S=S.concat(Array(m-_).fill("equal"))),S}(l,s.length):function(h,m){const b=[],{firstIndex:w,lastIndexOld:_,lastIndexNew:S}=m;return S-w>0&&b.push({index:w,type:"insert",values:h.slice(w,S)}),_-w>0&&b.push({index:w+(S-w),type:"delete",howMany:_-w}),b}(s,l)}function x(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function A(r,e){return r.slice(e).reverse()}function E(r,e,t){t=t||function(I,P){return I===P};const n=r.length,i=e.length;if(n>200||i>200||n+i>300)return E.fastDiff(r,e,t,!0);let s,l;if(i<n){const I=r;r=e,e=I,s="delete",l="insert"}else s="insert",l="delete";const d=r.length,h=e.length,m=h-d,b={},w={};function _(I){const P=(w[I-1]!==void 0?w[I-1]:-1)+1,j=w[I+1]!==void 0?w[I+1]:-1,Q=P>j?-1:1;b[I+Q]&&(b[I]=b[I+Q].slice(0)),b[I]||(b[I]=[]),b[I].push(P>j?s:l);let ne=Math.max(P,j),ge=ne-I;for(;ge<d&&ne<h&&t(r[ge],e[ne]);)ge++,ne++,b[I].push("equal");return ne}let S,T=0;do{for(S=-T;S<m;S++)w[S]=_(S);for(S=m+T;S>m;S--)w[S]=_(S);w[m]=_(m),T++}while(w[m]!==h);return b[m].slice(1)}function M(r,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);n.concat(i).forEach(s=>{if(s in r.prototype||typeof t=="function"&&(s=="length"||s=="name"||s=="prototype"))return;const l=Object.getOwnPropertyDescriptor(t,s);l.enumerable=!1,Object.defineProperty(r.prototype,s,l)})})}E.fastDiff=y;const N=function(){return function r(){r.called=!0}};class O{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=N(),this.off=N()}}const H=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function R(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+H[r>>0&255]+H[r>>8&255]+H[r>>16&255]+H[r>>24&255]+H[e>>0&255]+H[e>>8&255]+H[e>>16&255]+H[e>>24&255]+H[t>>0&255]+H[t>>8&255]+H[t>>16&255]+H[t>>24&255]+H[n>>0&255]+H[n>>8&255]+H[n>>16&255]+H[n>>24&255]}const B={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function U(r,e){const t=B.get(e.priority);for(let n=0;n<r.length;n++)if(B.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}class D extends Error{constructor(e,t,n){super(function(i,s){const l=new WeakSet,d=(b,w)=>{if(typeof w=="object"&&w!==null){if(l.has(w))return`[object ${w.constructor.name}]`;l.add(w)}return w},h=s?` ${JSON.stringify(s,d)}`:"",m=W(i);return i+h+m}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new D(e.message,t);throw n.stack=e.stack,n}}function F(r,e){console.warn(...q(r,e))}function z(r,e){console.error(...q(r,e))}function W(r){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${r}`}function q(r,e){const t=W(r);return e?[r,e,t]:[r,t]}const Y="35.4.0",te=typeof window=="object"?window:f.g;if(te.CKEDITOR_VERSION)throw new D("ckeditor-duplicated-modules",null);te.CKEDITOR_VERSION=Y;const K=Symbol("listeningTo"),J=Symbol("emitterId"),re=Symbol("delegations"),pe=oe(Object);function oe(r){return r?class extends r{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(s,...l)=>{i||(i=!0,s.off(),t.call(this,s,...l))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let s,l;this[K]||(this[K]={});const d=this[K];Z(e)||_e(e);const h=Z(e);(s=d[h])||(s=d[h]={emitter:e,callbacks:{}}),(l=s.callbacks[t])||(l=s.callbacks[t]=[]),l.push(n),function(m,b,w,_,S){b._addEventListener?b._addEventListener(w,_,S):m._addEventListener.call(b,w,_,S)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[K];let s=e&&Z(e);const l=i&&s?i[s]:void 0,d=l&&t?l.callbacks[t]:void 0;if(!(!i||e&&!l||t&&!d))if(n)Se(this,e,t,n),d.indexOf(n)!==-1&&(d.length===1?delete l.callbacks[t]:Se(this,e,t,n));else if(d){for(;n=d.pop();)Se(this,e,t,n);delete l.callbacks[t]}else if(l){for(t in l.callbacks)this.stopListening(e,t);delete i[s]}else{for(s in i)this.stopListening(i[s].emitter);delete this[K]}}fire(e,...t){try{const n=e instanceof O?e:new O(this,e),i=n.name;let s=me(this,i);if(n.path.push(this),s){const d=[n,...t];s=Array.from(s);for(let h=0;h<s.length&&(s[h].callback.apply(this,d),n.off.called&&(delete n.off.called,this._removeEventListener(i,s[h].callback)),!n.stop.called);h++);}const l=this[re];if(l){const d=l.get(i),h=l.get("*");d&&Ae(d,n,t),h&&Ae(h,n,t)}return n.return}catch(n){D.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[re]||(this[re]=new Map),e.forEach(i=>{const s=this[re].get(i);s?s.set(t,n):this[re].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[re])if(e)if(t){const n=this[re].get(e);n&&n.delete(t)}else this[re].delete(e);else this[re].clear()}_addEventListener(e,t,n){(function(l,d){const h=de(l);if(h[d])return;let m=d,b=null;const w=[];for(;m!==""&&!h[m];)h[m]={callbacks:[],childEvents:[]},w.push(h[m]),b&&h[m].childEvents.push(b),b=m,m=m.substr(0,m.lastIndexOf(":"));if(m!==""){for(const _ of w)_.callbacks=h[m].callbacks.slice();h[m].childEvents.push(b)}})(this,e);const i=Ce(this,e),s={callback:t,priority:B.get(n.priority)};for(const l of i)U(l,s)}_removeEventListener(e,t){const n=Ce(this,e);for(const i of n)for(let s=0;s<i.length;s++)i[s].callback==t&&(i.splice(s,1),s--)}}:pe}function _e(r,e){r[J]||(r[J]=e||R())}function Z(r){return r[J]}function de(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function Ce(r,e){const t=de(r)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const s=Ce(r,t.childEvents[i]);n=n.concat(s)}return n}function me(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?me(r,e.substr(0,e.lastIndexOf(":"))):null}function Ae(r,e,t){for(let[n,i]of r){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const s=new O(e.source,i);s.path=[...e.path],n.fire(s,...t)}}function Se(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{oe[r]=pe.prototype[r]});const De=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},se=Symbol("observableProperties"),ke=Symbol("boundObservables"),X=Symbol("boundProperties"),ve=Symbol("decoratedMethods"),be=Symbol("decoratedOriginal"),Ne=Pe(oe());function Pe(r){return r?class extends r{set(e,t){if(De(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);qe(this);const n=this[se];if(e in this&&!n.has(e))throw new D("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const s=n.get(e);let l=this.fire(`set:${e}`,e,i,s);l===void 0&&(l=i),s===l&&n.has(e)||(n.set(e,l),this.fire(`change:${e}`,e,l,s))}}),this[e]=t}bind(...e){if(!e.length||!ee(e))throw new D("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new D("observable-bind-duplicate-properties",this);qe(this);const t=this[X];e.forEach(i=>{if(t.has(i))throw new D("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const s={property:i,to:[]};t.set(i,s),n.set(i,s)}),{to:V,toMany:$,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[se])return;const t=this[X],n=this[ke];if(e.length){if(!ee(e))throw new D("observable-unbind-wrong-properties",this);e.forEach(i=>{const s=t.get(i);s&&(s.to.forEach(([l,d])=>{const h=n.get(l),m=h[d];m.delete(s),m.size||delete h[d],Object.keys(h).length||(n.delete(l),this.stopListening(l,"change"))}),t.delete(i))})}else n.forEach((i,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){qe(this);const t=this[e];if(!t)throw new D("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][be]=t,this[ve]||(this[ve]=[]),this[ve].push(e)}stopListening(e,t,n){if(!e&&this[ve]){for(const i of this[ve])this[i]=this[i][be];delete this[ve]}super.stopListening(e,t,n)}}:Ne}function qe(r){r[se]||(Object.defineProperty(r,se,{value:new Map}),Object.defineProperty(r,ke,{value:new Map}),Object.defineProperty(r,X,{value:new Map}))}function V(...r){const e=function(...s){if(!s.length)throw new D("observable-bind-to-parse-error",null);const l={to:[]};let d;return typeof s[s.length-1]=="function"&&(l.callback=s.pop()),s.forEach(h=>{if(typeof h=="string")d.properties.push(h);else{if(typeof h!="object")throw new D("observable-bind-to-parse-error",null);d={observable:h,properties:[]},l.to.push(d)}}),l}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new D("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new D("observable-bind-to-extra-callback",this);var i;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new D("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(s=>{const l=i[ke];let d;l.get(s.observable)||i.listenTo(s.observable,"change",(h,m)=>{d=l.get(s.observable)[m],d&&d.forEach(b=>{ce(i,b.property)})})}),function(s){let l;s._bindings.forEach((d,h)=>{s._to.forEach(m=>{l=m.properties[d.callback?0:s._bindProperties.indexOf(h)],d.to.push([m.observable,l]),function(b,w,_,S){const T=b[ke],I=T.get(_),P=I||{};P[S]||(P[S]=new Set),P[S].add(w),I||T.set(_,P)}(s._observable,d,m.observable,l)})})}(this),this._bindProperties.forEach(s=>{ce(this._observable,s)})}function $(r,e,t){if(this._bindings.size>1)throw new D("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const s=n.map(l=>[l,i]);return Array.prototype.concat.apply([],s)}(r,e),t)}function ee(r){return r.every(e=>typeof e=="string")}function ce(r,e){const t=r[X].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}function le(r){let e=0;for(const t of r)e++;return e}function he(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}function ye(r){return!(!r||!r[Symbol.iterator])}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Pe[r]=Ne.prototype[r]});const we=typeof Ec=="object"&&Ec&&Ec.Object===Object&&Ec;var Ee=typeof self=="object"&&self&&self.Object===Object&&self;const ue=we||Ee||Function("return this")(),Te=ue.Symbol;var Me=Object.prototype,Be=Me.hasOwnProperty,Ve=Me.toString,Ze=Te?Te.toStringTag:void 0;const gt=function(r){var e=Be.call(r,Ze),t=r[Ze];try{r[Ze]=void 0;var n=!0}catch{}var i=Ve.call(r);return n&&(e?r[Ze]=t:delete r[Ze]),i};var Et=Object.prototype.toString;const Gt=function(r){return Et.call(r)};var Sn=Te?Te.toStringTag:void 0;const kn=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Sn&&Sn in Object(r)?gt(r):Gt(r)},Jt=Array.isArray,Xt=function(r){return r!=null&&typeof r=="object"},Hs=function(r){return typeof r=="string"||!Jt(r)&&Xt(r)&&kn(r)=="[object String]"};function fn(r,e,t={},n=[]){const i=t&&t.xmlns,s=i?r.createElementNS(i,e):r.createElement(e);for(const l in t)s.setAttribute(l,t[l]);!Hs(n)&&ye(n)||(n=[n]);for(let l of n)Hs(l)&&(l=r.createTextNode(l)),s.appendChild(l);return s}const Rn=function(r,e){return function(t){return r(e(t))}},Tr=Rn(Object.getPrototypeOf,Object);var fE=Function.prototype,gE=Object.prototype,$g=fE.toString,mE=gE.hasOwnProperty,pE=$g.call(Object);const Dn=function(r){if(!Xt(r)||kn(r)!="[object Object]")return!1;var e=Tr(r);if(e===null)return!0;var t=mE.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&$g.call(t)==pE},bE=function(){this.__data__=[],this.size=0},Us=function(r,e){return r===e||r!=r&&e!=e},al=function(r,e){for(var t=r.length;t--;)if(Us(r[t][0],e))return t;return-1};var kE=Array.prototype.splice;const vE=function(r){var e=this.__data__,t=al(e,r);return!(t<0)&&(t==e.length-1?e.pop():kE.call(e,t,1),--this.size,!0)},wE=function(r){var e=this.__data__,t=al(e,r);return t<0?void 0:e[t][1]},_E=function(r){return al(this.__data__,r)>-1},CE=function(r,e){var t=this.__data__,n=al(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function Ir(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Ir.prototype.clear=bE,Ir.prototype.delete=vE,Ir.prototype.get=wE,Ir.prototype.has=_E,Ir.prototype.set=CE;const ll=Ir,AE=function(){this.__data__=new ll,this.size=0},yE=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},xE=function(r){return this.__data__.get(r)},EE=function(r){return this.__data__.has(r)},$s=function(r){if(!De(r))return!1;var e=kn(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Dd=ue["__core-js_shared__"];var Wg=function(){var r=/[^.]+$/.exec(Dd&&Dd.keys&&Dd.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const SE=function(r){return!!Wg&&Wg in r};var DE=Function.prototype.toString;const ji=function(r){if(r!=null){try{return DE.call(r)}catch{}try{return r+""}catch{}}return""};var TE=/^\[object .+?Constructor\]$/,IE=Function.prototype,ME=Object.prototype,NE=IE.toString,PE=ME.hasOwnProperty,BE=RegExp("^"+NE.call(PE).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const LE=function(r){return!(!De(r)||SE(r))&&($s(r)?BE:TE).test(ji(r))},zE=function(r,e){return r==null?void 0:r[e]},Hi=function(r,e){var t=zE(r,e);return LE(t)?t:void 0},Ws=Hi(ue,"Map"),Gs=Hi(Object,"create"),OE=function(){this.__data__=Gs?Gs(null):{},this.size=0},RE=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var FE=Object.prototype.hasOwnProperty;const VE=function(r){var e=this.__data__;if(Gs){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return FE.call(e,r)?e[r]:void 0};var jE=Object.prototype.hasOwnProperty;const HE=function(r){var e=this.__data__;return Gs?e[r]!==void 0:jE.call(e,r)},UE=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=Gs&&e===void 0?"__lodash_hash_undefined__":e,this};function Mr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Mr.prototype.clear=OE,Mr.prototype.delete=RE,Mr.prototype.get=VE,Mr.prototype.has=HE,Mr.prototype.set=UE;const Gg=Mr,$E=function(){this.size=0,this.__data__={hash:new Gg,map:new(Ws||ll),string:new Gg}},WE=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},cl=function(r,e){var t=r.__data__;return WE(e)?t[typeof e=="string"?"string":"hash"]:t.map},GE=function(r){var e=cl(this,r).delete(r);return this.size-=e?1:0,e},qE=function(r){return cl(this,r).get(r)},KE=function(r){return cl(this,r).has(r)},YE=function(r,e){var t=cl(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function Nr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Nr.prototype.clear=$E,Nr.prototype.delete=GE,Nr.prototype.get=qE,Nr.prototype.has=KE,Nr.prototype.set=YE;const dl=Nr,QE=function(r,e){var t=this.__data__;if(t instanceof ll){var n=t.__data__;if(!Ws||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new dl(n)}return t.set(r,e),this.size=t.size,this};function Pr(r){var e=this.__data__=new ll(r);this.size=e.size}Pr.prototype.clear=AE,Pr.prototype.delete=yE,Pr.prototype.get=xE,Pr.prototype.has=EE,Pr.prototype.set=QE;const qs=Pr,ZE=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},ul=function(){try{var r=Hi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Td=function(r,e,t){e=="__proto__"&&ul?ul(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var JE=Object.prototype.hasOwnProperty;const Id=function(r,e,t){var n=r[e];JE.call(r,e)&&Us(n,t)&&(t!==void 0||e in r)||Td(r,e,t)},Br=function(r,e,t,n){var i=!t;t||(t={});for(var s=-1,l=e.length;++s<l;){var d=e[s],h=n?n(t[d],r[d],d,t,r):void 0;h===void 0&&(h=r[d]),i?Td(t,d,h):Id(t,d,h)}return t},XE=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},qg=function(r){return Xt(r)&&kn(r)=="[object Arguments]"};var Kg=Object.prototype,e2=Kg.hasOwnProperty,t2=Kg.propertyIsEnumerable;const Md=qg(function(){return arguments}())?qg:function(r){return Xt(r)&&e2.call(r,"callee")&&!t2.call(r,"callee")},n2=function(){return!1};var Yg=a&&!a.nodeType&&a,Qg=Yg&&!0&&o&&!o.nodeType&&o,Zg=Qg&&Qg.exports===Yg?ue.Buffer:void 0;const Ks=(Zg?Zg.isBuffer:void 0)||n2;var o2=/^(?:0|[1-9]\d*)$/;const Nd=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&o2.test(r))&&r>-1&&r%1==0&&r<e},Jg=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;const i2=function(r){return Xt(r)&&Jg(r.length)&&!!Dt[kn(r)]},Pd=function(r){return function(e){return r(e)}};var Xg=a&&!a.nodeType&&a,Ys=Xg&&!0&&o&&!o.nodeType&&o,Bd=Ys&&Ys.exports===Xg&&we.process;const Lr=function(){try{var r=Ys&&Ys.require&&Ys.require("util").types;return r||Bd&&Bd.binding&&Bd.binding("util")}catch{}}();var em=Lr&&Lr.isTypedArray;const Ld=em?Pd(em):i2;var r2=Object.prototype.hasOwnProperty;const tm=function(r,e){var t=Jt(r),n=!t&&Md(r),i=!t&&!n&&Ks(r),s=!t&&!n&&!i&&Ld(r),l=t||n||i||s,d=l?XE(r.length,String):[],h=d.length;for(var m in r)!e&&!r2.call(r,m)||l&&(m=="length"||i&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Nd(m,h))||d.push(m);return d};var s2=Object.prototype;const zd=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||s2)},a2=Rn(Object.keys,Object);var l2=Object.prototype.hasOwnProperty;const c2=function(r){if(!zd(r))return a2(r);var e=[];for(var t in Object(r))l2.call(r,t)&&t!="constructor"&&e.push(t);return e},hl=function(r){return r!=null&&Jg(r.length)&&!$s(r)},Od=function(r){return hl(r)?tm(r):c2(r)},d2=function(r,e){return r&&Br(e,Od(e),r)},u2=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var h2=Object.prototype.hasOwnProperty;const f2=function(r){if(!De(r))return u2(r);var e=zd(r),t=[];for(var n in r)(n!="constructor"||!e&&h2.call(r,n))&&t.push(n);return t},zr=function(r){return hl(r)?tm(r,!0):f2(r)},g2=function(r,e){return r&&Br(e,zr(e),r)};var nm=a&&!a.nodeType&&a,om=nm&&!0&&o&&!o.nodeType&&o,im=om&&om.exports===nm?ue.Buffer:void 0,rm=im?im.allocUnsafe:void 0;const sm=function(r,e){if(e)return r.slice();var t=r.length,n=rm?rm(t):new r.constructor(t);return r.copy(n),n},am=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},m2=function(r,e){for(var t=-1,n=r==null?0:r.length,i=0,s=[];++t<n;){var l=r[t];e(l,t,r)&&(s[i++]=l)}return s},lm=function(){return[]};var p2=Object.prototype.propertyIsEnumerable,cm=Object.getOwnPropertySymbols;const Rd=cm?function(r){return r==null?[]:(r=Object(r),m2(cm(r),function(e){return p2.call(r,e)}))}:lm,b2=function(r,e){return Br(r,Rd(r),e)},dm=function(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r},um=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)dm(e,Rd(r)),r=Tr(r);return e}:lm,k2=function(r,e){return Br(r,um(r),e)},hm=function(r,e,t){var n=e(r);return Jt(r)?n:dm(n,t(r))},Fd=function(r){return hm(r,Od,Rd)},v2=function(r){return hm(r,zr,um)},Vd=Hi(ue,"DataView"),jd=Hi(ue,"Promise"),Hd=Hi(ue,"Set"),Ud=Hi(ue,"WeakMap");var fm="[object Map]",gm="[object Promise]",mm="[object Set]",pm="[object WeakMap]",bm="[object DataView]",w2=ji(Vd),_2=ji(Ws),C2=ji(jd),A2=ji(Hd),y2=ji(Ud),Ui=kn;(Vd&&Ui(new Vd(new ArrayBuffer(1)))!=bm||Ws&&Ui(new Ws)!=fm||jd&&Ui(jd.resolve())!=gm||Hd&&Ui(new Hd)!=mm||Ud&&Ui(new Ud)!=pm)&&(Ui=function(r){var e=kn(r),t=e=="[object Object]"?r.constructor:void 0,n=t?ji(t):"";if(n)switch(n){case w2:return bm;case _2:return fm;case C2:return gm;case A2:return mm;case y2:return pm}return e});const Qs=Ui;var x2=Object.prototype.hasOwnProperty;const E2=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&x2.call(r,"index")&&(t.index=r.index,t.input=r.input),t},fl=ue.Uint8Array,$d=function(r){var e=new r.constructor(r.byteLength);return new fl(e).set(new fl(r)),e},S2=function(r,e){var t=e?$d(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var D2=/\w*$/;const T2=function(r){var e=new r.constructor(r.source,D2.exec(r));return e.lastIndex=r.lastIndex,e};var km=Te?Te.prototype:void 0,vm=km?km.valueOf:void 0;const I2=function(r){return vm?Object(vm.call(r)):{}},wm=function(r,e){var t=e?$d(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},M2=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return $d(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return S2(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return wm(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return T2(r);case"[object Symbol]":return I2(r)}};var _m=Object.create;const N2=function(){function r(){}return function(e){if(!De(e))return{};if(_m)return _m(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),Cm=function(r){return typeof r.constructor!="function"||zd(r)?{}:N2(Tr(r))},P2=function(r){return Xt(r)&&Qs(r)=="[object Map]"};var Am=Lr&&Lr.isMap;const B2=Am?Pd(Am):P2,L2=function(r){return Xt(r)&&Qs(r)=="[object Set]"};var ym=Lr&&Lr.isSet;const z2=ym?Pd(ym):L2;var xm="[object Arguments]",Em="[object Function]",Sm="[object Object]",St={};St[xm]=St["[object Array]"]=St["[object ArrayBuffer]"]=St["[object DataView]"]=St["[object Boolean]"]=St["[object Date]"]=St["[object Float32Array]"]=St["[object Float64Array]"]=St["[object Int8Array]"]=St["[object Int16Array]"]=St["[object Int32Array]"]=St["[object Map]"]=St["[object Number]"]=St[Sm]=St["[object RegExp]"]=St["[object Set]"]=St["[object String]"]=St["[object Symbol]"]=St["[object Uint8Array]"]=St["[object Uint8ClampedArray]"]=St["[object Uint16Array]"]=St["[object Uint32Array]"]=!0,St["[object Error]"]=St[Em]=St["[object WeakMap]"]=!1;const Wd=function r(e,t,n,i,s,l){var d,h=1&t,m=2&t,b=4&t;if(n&&(d=s?n(e,i,s,l):n(e)),d!==void 0)return d;if(!De(e))return e;var w=Jt(e);if(w){if(d=E2(e),!h)return am(e,d)}else{var _=Qs(e),S=_==Em||_=="[object GeneratorFunction]";if(Ks(e))return sm(e,h);if(_==Sm||_==xm||S&&!s){if(d=m||S?{}:Cm(e),!h)return m?k2(e,g2(d,e)):b2(e,d2(d,e))}else{if(!St[_])return s?e:{};d=M2(e,_,h)}}l||(l=new qs);var T=l.get(e);if(T)return T;l.set(e,d),z2(e)?e.forEach(function(P){d.add(r(P,t,n,P,e,l))}):B2(e)&&e.forEach(function(P,j){d.set(j,r(P,t,n,j,e,l))});var I=w?void 0:(b?m?v2:Fd:m?zr:Od)(e);return ZE(I||e,function(P,j){I&&(P=e[j=P]),Id(d,j,r(P,t,n,j,e,l))}),d},Dm=function(r,e){return Wd(r,5,e=typeof e=="function"?e:void 0)},Zs=function(r){return Xt(r)&&r.nodeType===1&&!Dn(r)};class Tm{constructor(e,t){this._config={},t&&this.define(Im(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Dn(t))return void this._setObjectToTarget(e,t,i);const s=t.split(".");t=s.pop();for(const l of s)Dn(e[l])||(e[l]={}),e=e[l];if(Dn(n))return Dn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Dn(e[i])){e=null;break}e=e[i]}return e?Im(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Im(r){return Dm(r,O2)}function O2(r){return Zs(r)?r:void 0}function ri(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}function gl(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}const Mm=si(oe());function si(r){return r?class extends r{listenTo(e,t,n,i={}){if(ri(e)||gl(e)){const s={capture:!!i.useCapture,passive:!!i.usePassive},l=this._getProxyEmitter(e,s)||new R2(e,s);this.listenTo(l,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if(ri(e)||gl(e)){const i=this._getAllProxyEmitters(e);for(const s of i)this.stopListening(s,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const s=n[K];return s&&s[i]?s[i].emitter:null}(this,Nm(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Mm}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{si[r]=Mm.prototype[r]});class R2 extends oe(){constructor(e,t){super(),_e(this,Nm(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),oe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){oe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Nm(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=R())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Gd;try{Gd={window,document}}catch{Gd={window:{},document:{}}}const tt=Gd;function Pm(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function Ft(r){return Object.prototype.toString.call(r)=="[object Text]"}function ml(r){return Object.prototype.toString.apply(r)=="[object Range]"}function Bm(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const Lm=["top","right","bottom","left","width","height"];class xt{constructor(e){const t=ml(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Om(e)||t)if(t){const n=xt.getDomRangeRects(e);pl(this,xt.getBoundingRect(n))}else pl(this,e.getBoundingClientRect());else if(gl(e)){const{innerWidth:n,innerHeight:i}=e;pl(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else pl(this,e)}clone(){return new xt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new xt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!zm(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!zm(n);){const i=new xt(n),s=t.getIntersection(i);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of Lm)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(gl(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const s=Bm(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new xt(i));else{let i=e.startContainer;Ft(i)&&(i=i.parentNode);const s=new xt(i.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new xt(t))}}function pl(r,e){for(const t of Lm)r[t]=e[t]}function zm(r){return!!Om(r)&&r===r.ownerDocument.body}function Om(r){return r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.getBoundingClientRect=="function"}class Tt{constructor(e,t){Tt._observerInstance||Tt._createObserver(),this._element=e,this._callback=t,Tt._addElementCallback(e,t),Tt._observerInstance.observe(e)}destroy(){Tt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Tt._elementCallbacks||(Tt._elementCallbacks=new Map);let n=Tt._elementCallbacks.get(e);n||(n=new Set,Tt._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=Tt._getElementCallbacks(e);n&&(n.delete(t),n.size||(Tt._elementCallbacks.delete(e),Tt._observerInstance.unobserve(e))),Tt._elementCallbacks&&!Tt._elementCallbacks.size&&(Tt._observerInstance=null,Tt._elementCallbacks=null)}static _getElementCallbacks(e){return Tt._elementCallbacks?Tt._elementCallbacks.get(e):null}static _createObserver(){Tt._observerInstance=new tt.window.ResizeObserver(e=>{for(const t of e){const n=Tt._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}}function F2(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}function Rm(r){return e=>e+r}function bl(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function Fm(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function Or(r){return r&&r.nodeType===Node.COMMENT_NODE}function $i(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}function Vm({element:r,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:s}){$s(e)&&(e=e()),$s(n)&&(n=n());const l=function(_){return _&&_.parentNode?_.offsetParent===tt.document.body?null:_.offsetParent:null}(r),d=new xt(r),h=new xt(e);let m;const b=i&&function(_){_=Object.assign({top:0,bottom:0,left:0,right:0},_);const S=new xt(tt.window);return S.top+=_.top,S.height-=_.top,S.bottom-=_.bottom,S.height-=_.bottom,S}(s)||null,w={targetRect:h,elementRect:d,positionedElementAncestor:l,viewportRect:b};if(n||i){const _=n&&new xt(n).getVisible();Object.assign(w,{limiterRect:_,viewportRect:b}),m=function(S,T){const{elementRect:I}=T,P=I.getArea(),j=S.map(ge=>new qd(ge,T)).filter(ge=>!!ge.name);let Q=0,ne=null;for(const ge of j){const{limiterIntersectionArea:Oe,viewportIntersectionArea:nt}=ge;if(Oe===P)return ge;const et=nt**2+Oe**2;et>Q&&(Q=et,ne=ge)}return ne}(t,w)||new qd(t[0],w)}else m=new qd(t[0],w);return m}function jm(r){const{scrollX:e,scrollY:t}=tt.window;return r.clone().moveBy(e,t)}Tt._observerInstance=null,Tt._elementCallbacks=null;class qd{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:i,top:s,name:l,config:d}=n;this.name=l,this.config=d,this._positioningFunctionCorrdinates={left:i,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=jm(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=jm(new xt(t)),i=Bm(t);let s=0,l=0;s-=n.left,l-=n.top,s+=t.scrollLeft,l+=t.scrollTop,s-=i.left,l-=i.top,e.moveBy(s,l)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Hm(r){const e=r.parentNode;e&&e.removeChild(r)}function V2(r,e,t){const n=e.clone().moveBy(0,t),i=e.clone().moveBy(0,-t),s=new xt(r).excludeScrollbarsAndBorders();if(![i,n].every(l=>s.contains(l))){let{scrollX:l,scrollY:d}=r;$m(i,s)?d-=s.top-e.top+t:Um(n,s)&&(d+=e.bottom-s.bottom+t),Wm(e,s)?l-=s.left-e.left+t:Gm(e,s)&&(l+=e.right-s.right+t),r.scrollTo(l,d)}}function j2(r,e){const t=Kd(r);let n,i;for(;r!=t.document.body;)i=e(),n=new xt(r).excludeScrollbarsAndBorders(),n.contains(i)||($m(i,n)?r.scrollTop-=n.top-i.top:Um(i,n)&&(r.scrollTop+=i.bottom-n.bottom),Wm(i,n)?r.scrollLeft-=n.left-i.left:Gm(i,n)&&(r.scrollLeft+=i.right-n.right)),r=r.parentNode}function Um(r,e){return r.bottom>e.bottom}function $m(r,e){return r.top<e.top}function Wm(r,e){return r.left<e.left}function Gm(r,e){return r.right>e.right}function Kd(r){return ml(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function H2(r){if(ml(r)){let e=r.commonAncestorContainer;return Ft(e)&&(e=e.parentNode),e}return r.parentNode}function qm(r,e){const t=Kd(r),n=new xt(r);if(t===e)return n;{let i=t;for(;i!=e;){const s=i.frameElement,l=new xt(s).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),i=i.parent}}return n}const U2={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},$2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},rt=function(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)r[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}(),W2=Object.fromEntries(Object.entries(rt).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function Rr(r){let e;if(typeof r=="string"){if(e=rt[r.toLowerCase()],!e)throw new D("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?rt.alt:0)+(r.ctrlKey?rt.ctrl:0)+(r.shiftKey?rt.shift:0)+(r.metaKey?rt.cmd:0);return e}function Yd(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Rr(t.slice(0,-1));const n=Rr(t);return k.isMac&&n==rt.ctrl?rt.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Km(r){let e=Yd(r);return Object.entries(k.isMac?U2:$2).reduce((t,[n,i])=>((e&rt[n])!=0&&(e&=~rt[n],t+=i),t),"")+(e?W2[e]:"")}function Qd(r,e){const t=e==="ltr";switch(r){case rt.arrowleft:return t?"left":"right";case rt.arrowright:return t?"right":"left";case rt.arrowup:return"up";case rt.arrowdown:return"down"}}function en(r){return Array.isArray(r)?r:[r]}function G2(r,e,t=1){if(typeof t!="number")throw new D("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(tt.window.CKEDITOR_TRANSLATIONS).length;n===1&&(r=Object.keys(tt.window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!function(h,m){return!!tt.window.CKEDITOR_TRANSLATIONS[h]&&!!tt.window.CKEDITOR_TRANSLATIONS[h].dictionary[m]}(r,i))return t!==1?e.plural:e.string;const s=tt.window.CKEDITOR_TRANSLATIONS[r].dictionary,l=tt.window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(h=>h===1?0:1),d=s[i];return typeof d=="string"?d:d[Number(l(t))]}tt.window.CKEDITOR_TRANSLATIONS||(tt.window.CKEDITOR_TRANSLATIONS={});const q2=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ym(r){return q2.includes(r)?"rtl":"ltr"}class K2{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Ym(this.uiLanguage),this.contentLanguageDirection=Ym(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=en(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,s){return i.replace(/%(\d+)/g,(l,d)=>d<s.length?s[d]:l)}(G2(this.uiLanguage,e,n),t)}}class vn extends oe(){constructor(e={},t={}){super();const n=ye(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new D("collection-add-item-invalid-index",this);let n=0;for(const i of e){const s=this._getItemIdBeforeAdding(i),l=t+n;this._items.splice(l,0,i),this._itemMap.set(s,i),this.fire("add",i,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new D("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new D("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,s,l)=>{const d=t._bindToCollection==this,h=t._bindToInternalToExternalMap.get(s);if(d&&h)this._bindToExternalToInternalMap.set(s,h),this._bindToInternalToExternalMap.set(h,s);else{const m=e(s);if(!m)return void this._skippedIndexesFromExternal.push(l);let b=l;for(const w of this._skippedIndexesFromExternal)l>w&&b--;for(const w of t._skippedIndexesFromExternal)b>=w&&b++;this._bindToExternalToInternalMap.set(s,m),this._bindToInternalToExternalMap.set(m,s),this.add(m,b);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)b<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,s,l)=>{const d=this._bindToExternalToInternalMap.get(s);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((h,m)=>(l<m&&h.push(m-1),l>m&&h.push(m),h),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new D("collection-add-invalid-id",this);if(this.get(n))throw new D("collection-add-item-already-exists",this)}else e[t]=n=R();return n}_remove(e){let t,n,i,s=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),s=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],s=!i,i&&(n=i[l])):(i=e,n=i[l],t=this._items.indexOf(i),s=t==-1||!this._itemMap.get(n)),s)throw new D("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(d),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Ut(r){const e=r.next();return e.done?null:e.value}class gn extends si(Pe()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new D("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Tn{constructor(){this._listener=new(si())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Rr(n),n)})}set(e,t,n={}){const i=Yd(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(l,d)=>{t(d,()=>{d.preventDefault(),d.stopPropagation(),l.stop()}),l.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Rr(e),e)}destroy(){this._listener.stopListening()}}function Ao(r){return ye(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}function Qm(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Zm(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Y2=function(){const r=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${r}|${e}(?:\u200D${e})*`,"ug")}();function Q2(r,e){const t=String(r).matchAll(Y2);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class ae extends Pe(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Jm,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Jm),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Jm(r){r.return=!1,r.stop()}class Ke extends Pe(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Xm,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Xm),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Xm(r){r.return=!1,r.stop()}class ep extends Ke{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){U(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class tp extends oe(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,s]of n)this._contextPlugins.set(i,s),this._contextPlugins.set(s,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new D("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,s=this._context;(function T(I,P=new Set){I.forEach(j=>{h(j)&&(P.has(j)||(P.add(j),j.pluginName&&!i._availablePlugins.has(j.pluginName)&&i._availablePlugins.set(j.pluginName,j),j.requires&&T(j.requires,P)))})})(e),_(e);const l=[...function T(I,P=new Set){return I.map(j=>h(j)?j:i._availablePlugins.get(j)).reduce((j,Q)=>P.has(Q)?j:(P.add(Q),Q.requires&&(_(Q.requires,Q),T(Q.requires,P).forEach(ne=>j.add(ne))),j.add(Q)),new Set)}(e.filter(T=>!b(T,t)))];(function(T,I){for(const P of I){if(typeof P!="function")throw new D("plugincollection-replace-plugin-invalid-type",null,{pluginItem:P});const j=P.pluginName;if(!j)throw new D("plugincollection-replace-plugin-missing-name",null,{pluginItem:P});if(P.requires&&P.requires.length)throw new D("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:j});const Q=i._availablePlugins.get(j);if(!Q)throw new D("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:j});const ne=T.indexOf(Q);if(ne===-1){if(i._contextPlugins.has(Q))return;throw new D("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:j})}if(Q.requires&&Q.requires.length)throw new D("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:j});T.splice(ne,1,P),i._availablePlugins.set(j,P)}})(l,n);const d=function(T){return T.map(I=>{let P=i._contextPlugins.get(I);return P=P||new I(s),i._add(I,P),P})}(l);return S(d,"init").then(()=>S(d,"afterInit")).then(()=>d);function h(T){return typeof T=="function"}function m(T){return h(T)&&T.isContextPlugin}function b(T,I){return I.some(P=>P===T||w(T)===P||w(P)===T)}function w(T){return h(T)?T.pluginName||T.name:T}function _(T,I=null){T.map(P=>h(P)?P:i._availablePlugins.get(P)||P).forEach(P=>{(function(j,Q){if(!h(j))throw Q?new D("plugincollection-soft-required",s,{missingPlugin:j,requiredBy:w(Q)}):new D("plugincollection-plugin-not-found",s,{plugin:j})})(P,I),function(j,Q){if(!!m(Q)&&!m(j))throw new D("plugincollection-context-required",s,{plugin:w(j),requiredBy:w(Q)})}(P,I),function(j,Q){if(!!Q&&!!b(j,t))throw new D("plugincollection-required",s,{plugin:w(j),requiredBy:w(Q)})}(P,I)})}function S(T,I){return T.reduce((P,j)=>j[I]?i._contextPlugins.has(j)?P:P.then(j[I].bind(j)):P,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new D("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Z2{constructor(e){this.config=new Tm(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new tp(this,t);const n=this.config.get("language")||{};this.locale=new K2({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new vn,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new D("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new D("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new D("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class kl extends Pe(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var J2=f(6062),Re=f.n(J2),np=f(4717),X2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(np.Z,X2),np.Z.locals;const vl=new WeakMap;function op(r){const{view:e,element:t,text:n,isDirectHost:i=!0,keepOnFocus:s=!1}=r,l=e.document;vl.has(l)||(vl.set(l,new Map),l.registerPostFixer(d=>Zd(l,d)),l.on("change:isComposing",()=>{e.change(d=>Zd(l,d))},{priority:"high"})),vl.get(l).set(t,{text:n,isDirectHost:i,keepOnFocus:s,hostElement:i?t:null}),e.change(d=>Zd(l,d))}function eS(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function Zd(r,e){const t=vl.get(r),n=[];let i=!1;for(const[s,l]of t)l.isDirectHost&&(n.push(s),ip(e,s,l)&&(i=!0));for(const[s,l]of t){if(l.isDirectHost)continue;const d=tS(s);d&&(n.includes(d)||(l.hostElement=d,ip(e,s,l)&&(i=!0)))}return i}function ip(r,e,t){const{text:n,isDirectHost:i,hostElement:s}=t;let l=!1;return s.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,s),l=!0),(i||e.childCount==1)&&function(d,h){if(!d.isAttached()||Array.from(d.getChildren()).some(_=>!_.is("uiElement")))return!1;const b=d.document,w=b.selection.anchor;return!(b.isComposing&&w&&w.parent===d||!h&&b.isFocused&&(!w||w.parent===d))}(s,t.keepOnFocus)?function(d,h){return!h.hasClass("ck-placeholder")&&(d.addClass("ck-placeholder",h),!0)}(r,s)&&(l=!0):eS(r,s)&&(l=!0),l}function tS(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Wi{is(){throw new Error("is() method is abstract")}}const rp=function(r){return Wd(r,4)};class Gi extends oe(Wi){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new D("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=he(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=rp(this);return delete e.parent,e}}Gi.prototype.is=function(r){return r==="node"||r==="view:node"};class _t extends Gi{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof _t&&(this===e||this.data===e.data)}_clone(){return new _t(this.document,this.data)}}_t.prototype.is=function(r){return r==="$text"||r==="view:$text"||r==="text"||r==="view:text"||r==="node"||r==="view:node"};class yo extends Wi{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new D("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new D("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}yo.prototype.is=function(r){return r==="$textProxy"||r==="view:$textProxy"||r==="textProxy"||r==="view:textProxy"};class xo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=sp(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const s=sp(n,i);s&&t.push({element:n,pattern:i,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function sp(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const s=new Set(i.getAttributeKeys());return Dn(n)?(n.style!==void 0&&F("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&F("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),Jd(n,s,l=>i.getAttribute(l))}(e.attributes,r),!t.attributes)||e.classes&&(t.classes=function(n,i){return Jd(n,i.getClassNames(),()=>{})}(e.classes,r),!t.classes)||e.styles&&(t.styles=function(n,i){return Jd(n,i.getStyleNames(!0),s=>i.getStyle(s))}(e.styles,r),!t.styles)?null:t}function Jd(r,e,t){const n=function(l){return Array.isArray(l)?l.map(d=>Dn(d)?(d.key!==void 0&&d.value!==void 0||F("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):Dn(l)?Object.entries(l):[[l,!0]]}(r),i=Array.from(e),s=[];if(n.forEach(([l,d])=>{i.forEach(h=>{(function(m,b){return m===!0||m===b||m instanceof RegExp&&b.match(m)})(l,h)&&function(m,b,w){if(m===!0)return!0;const _=w(b);return m===_||m instanceof RegExp&&!!String(_).match(m)}(d,h,t)&&s.push(h)})}),n.length&&!(s.length<n.length))return s}const wl=function(r){return typeof r=="symbol"||Xt(r)&&kn(r)=="[object Symbol]"};var nS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oS=/^\w*$/;const iS=function(r,e){if(Jt(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!wl(r))||oS.test(r)||!nS.test(r)||e!=null&&r in Object(e)};function Xd(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var l=r.apply(this,n);return t.cache=s.set(i,l)||s,l};return t.cache=new(Xd.Cache||dl),t}Xd.Cache=dl;const rS=Xd;var sS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aS=/\\(\\)?/g,lS=function(r){var e=rS(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(sS,function(t,n,i,s){e.push(i?s.replace(aS,"$1"):n||t)}),e});const cS=lS,dS=function(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i};var ap=Te?Te.prototype:void 0,lp=ap?ap.toString:void 0;const uS=function r(e){if(typeof e=="string")return e;if(Jt(e))return dS(e,r)+"";if(wl(e))return lp?lp.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},eu=function(r){return r==null?"":uS(r)},tu=function(r,e){return Jt(r)?r:iS(r,e)?[r]:cS(eu(r))},hS=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},nu=function(r){if(typeof r=="string"||wl(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},cp=function(r,e){for(var t=0,n=(e=tu(e,r)).length;r!=null&&t<n;)r=r[nu(e[t++])];return t&&t==n?r:void 0},dp=function(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=r[n+e];return s},fS=function(r,e){return e.length<2?r:cp(r,dp(e,0,-1))},gS=function(r,e){return e=tu(e,r),(r=fS(r,e))==null||delete r[nu(hS(e))]},mS=function(r,e){return r==null||gS(r,e)},_l=function(r,e,t){var n=r==null?void 0:cp(r,e);return n===void 0?t:n},ou=function(r,e,t){(t!==void 0&&!Us(r[e],t)||t===void 0&&!(e in r))&&Td(r,e,t)},pS=function(r){return function(e,t,n){for(var i=-1,s=Object(e),l=n(e),d=l.length;d--;){var h=l[r?d:++i];if(t(s[h],h,s)===!1)break}return e}}(),bS=function(r){return Xt(r)&&hl(r)},iu=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},kS=function(r){return Br(r,zr(r))},vS=function(r,e,t,n,i,s,l){var d=iu(r,t),h=iu(e,t),m=l.get(h);if(m)ou(r,t,m);else{var b=s?s(d,h,t+"",r,e,l):void 0,w=b===void 0;if(w){var _=Jt(h),S=!_&&Ks(h),T=!_&&!S&&Ld(h);b=h,_||S||T?Jt(d)?b=d:bS(d)?b=am(d):S?(w=!1,b=sm(h,!0)):T?(w=!1,b=wm(h,!0)):b=[]:Dn(h)||Md(h)?(b=d,Md(d)?b=kS(d):De(d)&&!$s(d)||(b=Cm(h))):w=!1}w&&(l.set(h,b),i(b,h,n,s,l),l.delete(h)),ou(r,t,b)}},wS=function r(e,t,n,i,s){e!==t&&pS(t,function(l,d){if(s||(s=new qs),De(l))vS(e,t,d,n,r,i,s);else{var h=i?i(iu(e,d),l,d+"",e,t,s):void 0;h===void 0&&(h=l),ou(e,d,h)}},zr)},qi=function(r){return r},_S=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var up=Math.max;const CS=function(r,e,t){return e=up(e===void 0?r.length-1:e,0),function(){for(var n=arguments,i=-1,s=up(n.length-e,0),l=Array(s);++i<s;)l[i]=n[e+i];i=-1;for(var d=Array(e+1);++i<e;)d[i]=n[i];return d[e]=t(l),_S(r,this,d)}},AS=function(r){return function(){return r}},yS=ul?function(r,e){return ul(r,"toString",{configurable:!0,enumerable:!1,value:AS(e),writable:!0})}:qi;var xS=Date.now;const ES=function(r){var e=0,t=0;return function(){var n=xS(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(yS),SS=function(r,e){return ES(CS(r,e,qi),r+"")},DS=function(r,e,t){if(!De(t))return!1;var n=typeof e;return!!(n=="number"?hl(t)&&Nd(e,t.length):n=="string"&&e in t)&&Us(t[e],r)},hp=function(r){return SS(function(e,t){var n=-1,i=t.length,s=i>1?t[i-1]:void 0,l=i>2?t[2]:void 0;for(s=r.length>3&&typeof s=="function"?(i--,s):void 0,l&&DS(t[0],t[1],l)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var d=t[n];d&&r(e,d,n,s)}return e})},fp=hp(function(r,e,t){wS(r,e,t)}),TS=function(r,e,t,n){if(!De(r))return r;for(var i=-1,s=(e=tu(e,r)).length,l=s-1,d=r;d!=null&&++i<s;){var h=nu(e[i]),m=t;if(h==="__proto__"||h==="constructor"||h==="prototype")return r;if(i!=l){var b=d[h];(m=n?n(b,h,d):void 0)===void 0&&(m=De(b)?b:Nd(e[i+1])?[]:{})}Id(d,h,m),d=d[h]}return r},IS=function(r,e,t){return r==null?r:TS(r,e,t)};class MS{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let i=null,s=0,l=0,d=null;const h=new Map;if(n==="")return h;n.charAt(n.length-1)!=";"&&(n+=";");for(let m=0;m<n.length;m++){const b=n.charAt(m);if(i===null)switch(b){case":":d||(d=n.substr(s,m-s),l=m+1);break;case'"':case"'":i=b;break;case";":{const w=n.substr(l,m-l);d&&h.set(d.trim(),w.trim()),d=null,s=m+1;break}}else b===i&&(i=null)}return h}(e).entries());for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(De(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=ru(e);mS(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!De(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=_l(this._styles,n);!i||!Array.from(Object.keys(i)).length&&this.remove(n)}}class NS{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(De(t))su(n,ru(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:s,value:l}=i(t);su(n,s,l)}else su(n,e,t)}getNormalized(e,t){if(!e)return fp({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return _l(t,n);const i=n(e,t);if(i)return i}return _l(t,ru(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const s=this.getNormalized(i,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function ru(r){return r.replace("-",".")}function su(r,e,t){let n=t;De(t)&&(n=fp({},_l(r,e),t)),IS(r,e,n)}class Fn extends Gi{constructor(e,t,n,i){if(super(e),this.name=t,this._attrs=function(s){const l=Ao(s);for(const[d,h]of l)h===null?l.delete(d):typeof h!="string"&&l.set(d,String(h));return l}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");gp(this._classes,s),this._attrs.delete("class")}this._styles=new MS(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Fn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new xo(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new _t(s,l)]:(ye(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new _t(s,d):d instanceof yo?new _t(s,d.data):d))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?gp(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Dn(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of en(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function gp(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}Fn.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="view:element"):r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Js extends Fn{constructor(...e){super(...e),this.getFillerOffset=mp}}function mp(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}Js.prototype.is=function(r,e){return e?e===this.name&&(r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Cl extends Pe(Js){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Cl.prototype.is=function(r,e){return e?e===this.name&&(r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const pp=Symbol("rootName");class bp extends Cl{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(pp)}set rootName(e){this._setCustomProperty(pp,e)}set _name(e){this.name=e}}bp.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Ki{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new D("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new D("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=xe._createAt(e.startPosition):this.position=xe._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,i;do i=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtEnd)return this.position=xe._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof Fn)return this.shallow?e.offset++:e=new xe(i,0),this.position=e,this._formatReturnValue("elementStart",i,t,e,1);if(i instanceof _t){if(this.singleCharacters)return e=new xe(i,0),this.position=e,this._next();{let s,l=i.data.length;return i==this._boundaryEndParent?(l=this.boundaries.end.offset,s=new yo(i,0,l),e=xe._createAfter(s)):(s=new yo(i,0,i.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,l)}}if(typeof i=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new yo(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",l,t,e,s)}return e=xe._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof _t){if(e.isAtStart)return this.position=xe._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof Fn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new xe(i,i.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof _t){if(this.singleCharacters)return e=new xe(i,i.data.length),this.position=e,this._previous();{let s,l=i.data.length;if(i==this._boundaryStartParent){const d=this.boundaries.start.offset;s=new yo(i,d,i.data.length-d),l=s.data.length,e=xe._createBefore(s)}else s=new yo(i,0,i.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,l)}}if(typeof i=="string"){let s;if(this.singleCharacters)s=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-d}e.offset-=s;const l=new yo(n,e.offset,s);return this.position=e,this._formatReturnValue("text",l,t,e,s)}return e=xe._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,s){return t instanceof yo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=xe._createAfter(t.textNode):(i=xe._createAfter(t.textNode),this.position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=xe._createBefore(t.textNode):(i=xe._createBefore(t.textNode),this.position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:s}}}}class xe extends Wi{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Cl);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=xe._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Ki(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=he(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ki(e)}clone(){return new xe(this.parent,this.offset)}static _createAt(e,t){if(e instanceof xe)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new D("view-createpositionat-offset-required",n)}return new xe(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new xe(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new D("view-position-after-root",e,{root:e});return new xe(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new xe(e.textNode,e.offsetInText);if(!e.parent)throw new D("view-position-before-root",e,{root:e});return new xe(e.parent,e.index)}}xe.prototype.is=function(r){return r==="position"||r==="view:position"};class He extends Wi{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ki({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Al,{direction:"backward"}),t=this.end.getLastMatchingPosition(Al);return e.parent.is("$text")&&e.isAtStart&&(e=xe._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=xe._createAfter(t.parent)),new He(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Al);if(e.isAfter(this.end)||e.isEqual(this.end))return new He(e,e);let t=this.end.getLastMatchingPosition(Al,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new xe(n,0)),i&&i.is("$text")&&(t=new xe(i,i.data.length)),new He(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new He(this.start,e.start)),this.containsPosition(e.end)&&t.push(new He(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new He(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Ki(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new He(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ki(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Ki(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new xe(e,t),new xe(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(xe._createBefore(e),t)}}function Al(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}He.prototype.is=function(r){return r==="range"||r==="view:range"};class Eo extends oe(Wi){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=le(this.getRanges());if(t!=le(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Eo||t instanceof au)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof He)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof xe)this._setRanges([new He(t)]),this._setFakeOptions(i);else if(t instanceof Gi){const s=!!i&&!!i.backward;let l;if(n===void 0)throw new D("view-selection-setto-required-second-parameter",this);l=n=="in"?He._createIn(t):n=="on"?He._createOn(t):new He(xe._createAt(t,n)),this._setRanges([l],s),this._setFakeOptions(i)}else{if(!ye(t))throw new D("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new D("view-selection-setfocus-no-ranges",this);const n=xe._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new He(n,i),!0):this._addRange(new He(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof He))throw new D("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new D("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new He(e.start,e.end))}}Eo.prototype.is=function(r){return r==="selection"||r==="view:selection"};class au extends oe(Wi){constructor(...e){super(),this._selection=new Eo,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}au.prototype.is=function(r){return r==="selection"||r=="documentSelection"||r=="view:selection"||r=="view:documentSelection"};class Fr extends O{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const lu=Symbol("bubbling contexts");function cu(r){return class extends r{fire(e,...t){try{const n=e instanceof O?e:new O(this,e),i=du(this);if(!i.size)return;if(Xs(n,"capturing",this),Vr(i,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),l=s?s.getContainedElement():null,d=!!l&&Boolean(kp(i,l));let h=l||function(m){if(!m)return null;const b=m.start.parent,w=m.end.parent,_=b.getPath(),S=w.getPath();return _.length>S.length?b:w}(s);if(Xs(n,"atTarget",h),!d){if(Vr(i,"$text",n,...t))return n.return;Xs(n,"bubbling",h)}for(;h;){if(h.is("rootElement")){if(Vr(i,"$root",n,...t))return n.return}else if(h.is("element")&&Vr(i,h.name,n,...t))return n.return;if(Vr(i,h,n,...t))return n.return;h=h.parent,Xs(n,"bubbling",h)}return Xs(n,"bubbling",this),Vr(i,"$document",n,...t),n.return}catch(n){D.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=en(n.context||"$document"),s=du(this);for(const l of i){let d=s.get(l);d||(d=new(oe()),s.set(l,d)),this.listenTo(d,e,t,n)}}_removeEventListener(e,t){const n=du(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const r=cu(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{cu[e]=r.prototype[e]})}function Xs(r,e,t){r instanceof Fr&&(r._eventPhase=e,r._currentTarget=t)}function Vr(r,e,t,...n){const i=typeof e=="string"?r.get(e):kp(r,e);return!!i&&(i.fire(t,...n),t.stop.called)}function kp(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function du(r){return r[lu]||(r[lu]=new Map),r[lu]}class yl extends cu(Pe()){constructor(e){super(),this.selection=new au,this.roots=new vn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Yi extends Fn{constructor(...e){super(...e),this.getFillerOffset=PS,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new D("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function PS(){if(uu(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(uu(r)>1)return null;r=r.parent}return!r||uu(r)>1?null:this.childCount}function uu(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}Yi.DEFAULT_PRIORITY=10,Yi.prototype.is=function(r,e){return e?e===this.name&&(r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"):r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class hu extends Fn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=BS}_insertChild(e,t){if(t&&(t instanceof Gi||Array.from(t).length>0))throw new D("view-emptyelement-cannot-add",[this,t]);return 0}}function BS(){return null}hu.prototype.is=function(r,e){return e?e===this.name&&(r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"):r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class xl extends Fn{constructor(...e){super(...e),this.getFillerOffset=zS}_insertChild(e,t){if(t&&(t instanceof Gi||Array.from(t).length>0))throw new D("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function LS(r){r.document.on("arrowKey",(e,t)=>function(n,i,s){if(i.keyCode==rt.arrowright){const l=i.domTarget.ownerDocument.defaultView.getSelection(),d=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(d||i.shiftKey){const h=l.focusNode,m=l.focusOffset,b=s.domPositionToView(h,m);if(b===null)return;let w=!1;const _=b.getLastMatchingPosition(S=>(S.item.is("uiElement")&&(w=!0),!(!S.item.is("uiElement")&&!S.item.is("attributeElement"))));if(w){const S=s.viewPositionToDom(_);d?l.collapse(S.parent,S.offset):l.extend(S.parent,S.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function zS(){return null}xl.prototype.is=function(r,e){return e?e===this.name&&(r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"):r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class fu extends Fn{constructor(...e){super(...e),this.getFillerOffset=OS}_insertChild(e,t){if(t&&(t instanceof Gi||Array.from(t).length>0))throw new D("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function OS(){return null}fu.prototype.is=function(r,e){return e?e===this.name&&(r==="rawElement"||r==="view:rawElement"||r==="element"||r==="view:element"):r==="rawElement"||r==="view:rawElement"||r===this.name||r==="view:"+this.name||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Qi extends oe(Wi){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,l){return typeof l=="string"?[new _t(s,l)]:(ye(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new _t(s,d):d instanceof yo?new _t(s,d.data):d))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Qi.prototype.is=function(r){return r==="documentFragment"||r==="view:documentFragment"};class vp{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new Qi(this.document,e)}createText(e){return new _t(this.document,e)}createAttributeElement(e,t,n={}){const i=new Yi(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let s=null;Dn(n)?i=n:s=n;const l=new Js(this.document,e,t,s);return i.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const i=new Cl(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new hu(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new xl(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const s=new fu(this.document,e,t);return n&&(s.render=n),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Dn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof xe?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new D("view-writer-break-non-container-element",this.document);if(!t.parent)throw new D("view-writer-break-root",this.document);if(e.isAtStart)return xe._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(xe._createAfter(t),n);const i=new He(e,xe._createAt(t,"end")),s=new xe(n,0);this.move(i,s)}return xe._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new xe(l,d))}const i=n.getChild(t-1),s=n.getChild(t);if(!i||!s)return e;if(i.is("$text")&&s.is("$text"))return _p(i,s);if(i.is("attributeElement")&&s.is("attributeElement")&&i.isSimilar(s)){const l=i.childCount;return i._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new xe(i,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new D("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),s=i instanceof _t?xe._createAt(i,"end"):xe._createAt(t,"end");return this.move(He._createIn(n),xe._createAt(t,"end")),this.remove(He._createOn(n)),s}insert(e,t){Cp(t=ye(t)?[...t]:[t],this.document);const n=t.reduce((l,d)=>{const h=l[l.length-1],m=!d.is("uiElement");return h&&h.breakAttributes==m?h.nodes.push(d):l.push({breakAttributes:m,nodes:[d]}),l},[]);let i=null,s=e;for(const{nodes:l,breakAttributes:d}of n){const h=this._insertNodes(s,l,d);i||(i=h.start),s=h.end}return i?new He(i,s):new He(e)}remove(e){const t=e instanceof He?e:He._createOn(e);if(ea(t,this.document),t.isCollapsed)return new Qi(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),s=n.parent,l=i.offset-n.offset,d=s._removeChildren(n.offset,l);for(const m of d)this._removeFromClonedElementsGroup(m);const h=this.mergeAttributes(n);return t.start=h,t.end=h.clone(),new Qi(this.document,d)}clear(e,t){ea(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const s=i.item;let l;if(s.is("element")&&t.isSimilar(s))l=He._createOn(s);else if(!i.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const d=s.getAncestors().find(h=>h.is("element")&&t.isSimilar(h));d&&(l=He._createIn(d))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,s=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Yi))throw new D("view-writer-wrap-invalid-attribute",this.document);if(ea(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(i=i.getLastMatchingPosition(l=>l.item.is("uiElement"))),i=this._wrapPosition(i,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new He(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Yi))throw new D("view-writer-unwrap-invalid-attribute",this.document);if(ea(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._unwrapChildren(s,n.offset,i.offset,t),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const h=this.mergeAttributes(l.end);return new He(d,h)}rename(e,t){const n=new Js(this.document,e,t.getAttributes());return this.insert(xe._createAfter(t),n),this.move(He._createIn(t),xe._createAt(n,0)),this.remove(He._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return xe._createAt(e,t)}createPositionAfter(e){return xe._createAfter(e)}createPositionBefore(e){return xe._createBefore(e)}createRange(...e){return new He(...e)}createRangeOn(e){return He._createOn(e)}createRangeIn(e){return He._createIn(e)}createSelection(...e){return new Eo(...e)}createSlot(e){if(!this._slotFactory)throw new D("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,s;if(i=n?gu(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new D("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?mu(e):e;const l=i._insertChild(s.offset,t);for(const b of t)this._addToClonedElementsGroup(b);const d=s.getShiftedBy(l),h=this.mergeAttributes(s);h.isEqual(s)||d.offset--;const m=this.mergeAttributes(d);return new He(h,m)}_wrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const h=e.getChild(s),m=h.is("$text"),b=h.is("attributeElement");if(b&&this._wrapAttributeElement(i,h))l.push(new xe(e,s));else if(m||!b||RS(i,h)){const w=i._clone();h._remove(),w._appendChild(h),e._insertChild(s,w),this._addToClonedElementsGroup(w),l.push(new xe(e,s))}else this._wrapChildren(h,0,h.childCount,i);s++}let d=0;for(const h of l)h.offset-=d,h.offset!=t&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return He._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let s=t;const l=[];for(;s<n;){const h=e.getChild(s);if(h.is("attributeElement"))if(h.isSimilar(i)){const m=h.getChildren(),b=h.childCount;h._remove(),e._insertChild(s,m),this._removeFromClonedElementsGroup(h),l.push(new xe(e,s),new xe(e,s+b)),s+=b,n+=b-1}else this._unwrapAttributeElement(i,h)?(l.push(new xe(e,s),new xe(e,s+1)),s++):(this._unwrapChildren(h,0,h.childCount,i),s++);else s++}let d=0;for(const h of l)h.offset-=d,!(h.offset==t||h.offset==n)&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return He._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,l=this._wrapChildren(s,n.offset,i.offset,t),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const h=this.mergeAttributes(l.end);return new He(d,h)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return wp(e.clone());e.parent.is("$text")&&(e=mu(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new He(e,e.getShiftedBy(1));this.wrap(i,t);const s=new xe(n.parent,n.index);n._remove();const l=s.nodeBefore,d=s.nodeAfter;return l instanceof _t&&d instanceof _t?_p(l,d):wp(s)}_wrapAttributeElement(e,t){if(!Ap(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Ap(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(ea(e,this.document),e.isCollapsed){const h=this._breakAttributes(e.start,t);return new He(h,h)}const s=this._breakAttributes(i,t),l=s.parent.childCount,d=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-l,new He(d,s)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new D("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new D("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new D("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&pu(i.parent)||pu(i))return e.clone();if(i.is("$text"))return this._breakAttributes(mu(e),t);if(n==i.childCount){const s=new xe(i.parent,i.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new xe(i.parent,i.index);return this._breakAttributes(s,t)}{const s=i.index+1,l=i._clone();i.parent._insertChild(s,l),this._addToClonedElementsGroup(l);const d=i.childCount-n,h=i._removeChildren(n,d);l._appendChild(h);const m=new xe(i.parent,s);return this._breakAttributes(m,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function gu(r){let e=r.parent;for(;!pu(e);){if(!e)return;e=e.parent}return e}function RS(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function wp(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new xe(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new xe(t,0):r}function mu(r){if(r.offset==r.parent.data.length)return new xe(r.parent.parent,r.parent.index+1);if(r.offset===0)return new xe(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new _t(r.root.document,e)),new xe(r.parent.parent,r.parent.index+1)}function _p(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new xe(r,t)}const FS=[_t,Yi,Js,hu,fu,xl];function Cp(r,e){for(const t of r){if(!FS.some(n=>t instanceof n))throw new D("view-writer-insert-invalid-node-type",e);t.is("$text")||Cp(t.getChildren(),e)}}function pu(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function ea(r,e){const t=gu(r.start),n=gu(r.end);if(!t||!n||t!==n)throw new D("view-writer-invalid-range-container",e)}function Ap(r,e){return r.id===null&&e.id===null}const yp=r=>r.createTextNode("\xA0"),xp=r=>{const e=r.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},Ep=r=>{const e=r.createElement("br");return e.dataset.ckeFiller="true",e},El="\u2060".repeat(7);function Vn(r){return Ft(r)&&r.data.substr(0,7)===El}function ta(r){return r.data.length==7&&Vn(r)}function Sp(r){return Vn(r)?r.data.slice(7):r.data}function VS(r,e){if(e.keyCode==rt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;Vn(n)&&i<=7&&t.collapse(n,0)}}}var Dp=f(9315),jS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Dp.Z,jS),Dp.Z.locals;class HS extends Pe(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("_isFocusChanging",!1),this.set("isSelecting",!1),k.isBlink&&!k.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new D("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!k.isAndroid)return;let e=null;const t=!(k.isBlink&&!k.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=xe._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;Vn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Tp(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),i=this._diffNodeLists(t,n),s=this._findReplaceActions(i,t,n);if(s.indexOf("replace")!==-1){const l={equal:0,insert:0,delete:0};for(const d of s)if(d==="replace"){const h=l.equal+l.insert,m=l.equal+l.delete,b=e.getChild(h);!b||b.is("uiElement")||b.is("rawElement")||this._updateElementMappings(b,t[m]),Hm(n[h]),l.equal++}else l[d]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?xe._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Ft(t.parent)&&Vn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Vn(e))throw new D("view-renderer-filler-was-lost",this);ta(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const d=l.findAncestor(h=>h.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,s=e.nodeAfter;return!(i instanceof _t||s instanceof _t)&&(!k.isAndroid||!i&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(i=El+i),Np(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),i=e.getAttributeKeys();for(const s of i)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(k.isAndroid){let w=null;for(const _ of Array.from(n.childNodes)){if(w&&Ft(w)&&Ft(_)){n.normalize();break}w=_}}const i=t.inlineFillerPosition,s=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Tp(n.ownerDocument,l,i.offset);const d=this._diffNodeLists(s,l),h=k.isAndroid?this._findReplaceActions(d,s,l,{replaceText:!0}):d;let m=0;const b=new Set;for(const w of h)w==="delete"?(b.add(s[m]),Hm(s[m])):w!=="equal"&&w!=="replace"||m++;m=0;for(const w of h)w==="insert"?(Fm(n,m,l[m]),m++):w==="replace"?(Np(s[m],l[m].data),m++):w==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[m])),m++);for(const w of b)w.parentNode||this.domConverter.unbindDomElement(w)}_diffNodeLists(e,t){return e=function(n,i){const s=Array.from(n);return s.length==0||!i||s[s.length-1]==i&&s.pop(),s}(e,this._fakeSelectionContainer),E(e,t,US.bind(null,this.domConverter))}_findReplaceActions(e,t,n,i={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],l=[],d=[];const h={equal:0,insert:0,delete:0};for(const m of e)m==="insert"?d.push(n[h.equal+h.insert]):m==="delete"?l.push(t[h.equal+h.delete]):(s=s.concat(E(l,d,i.replaceText?Mp:Ip).map(b=>b==="equal"?"replace":b)),s.push("equal"),l=[],d=[]),h[m]++;return s.concat(E(l,d,i.replaceText?Mp:Ip).map(m=>m==="equal"?"replace":m))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(k.isBlink&&!k.isAndroid&&this.isSelecting&&!this.markedChildren.size||this._isFocusChanging)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&k.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const d=l.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent="\xA0",d}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const i=t.getSelection(),s=t.createRange();i.removeAllRanges(),s.selectNodeContents(n),i.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(i.parent,i.offset),k.isGecko&&function(s,l){const d=s.parent;if(d.nodeType!=Node.ELEMENT_NODE||s.offset!=d.childNodes.length-1)return;const h=d.childNodes[s.offset];h&&h.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Tp(r,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(Ft(i))return i.data=El+i.data,i;{const s=r.createTextNode(El);return Array.isArray(e)?n.splice(t,0,s):Fm(e,t,s),s}}function Ip(r,e){return ri(r)&&ri(e)&&!Ft(r)&&!Ft(e)&&!Or(r)&&!Or(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function Mp(r,e){return ri(r)&&ri(e)&&Ft(r)&&Ft(e)}function US(r,e,t){return e===t||(Ft(e)&&Ft(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}function Np(r,e){const t=r.data;if(t==e)return;const n=y(t,e);for(const i of n)i.type==="insert"?r.insertData(i.index,i.values.join("")):r.deleteData(i.index,i.howMany)}const $S=Ep(tt.document),WS=yp(tt.document),GS=xp(tt.document),Sl="data-ck-unsafe-attribute-",Pp="data-ck-unsafe-element";class Dl{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?tt.document:tt.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new xo,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Eo(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)i.appendChild(s[0]);const l=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),d=[];let h;for(;h=l.nextNode();)d.push(h);for(const m of d){for(const w of m.getAttributeNames())this.setDomElementAttribute(m,w,m.getAttribute(w));const b=m.tagName.toLowerCase();this._shouldRenameElement(b)&&(zp(b),m.replaceWith(this._createReplacementDomElement(b,m)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(zp(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const i of e.getAttributeKeys())this.setDomElementAttribute(n,i,e.getAttribute(i),e)}if(t.withChildren!==!1)for(const i of this.viewChildrenToDom(e,t))n.appendChild(i);return n}}setDomElementAttribute(e,t,n,i){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);s||F("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Sl+t)&&s&&e.removeAttribute(Sl+t),e.setAttribute(s?t:Sl+t,n)}removeDomElementAttribute(e,t){t!=Pp&&(e.removeAttribute(t),e.removeAttribute(Sl+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const s of e.getChildren()){n===i&&(yield this._getBlockFiller());const l=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(l&&F("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return Vn(n)&&(i+=7),{parent:n,offset:i}}{let n,i,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const l=e.nodeBefore;if(i=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(l),!i)return null;n=i.parentNode,s=i.nextSibling}return Ft(s)&&Vn(s)?{parent:s,offset:7}:{parent:n,offset:i?bl(i)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(Or(e)&&t.skipComments)return null;if(Ft(e)){if(ta(e))return null;{const i=this._processDataFromDomText(e);return i===""?null:new _t(this.document,i)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new Qi(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const s=e.attributes;if(s)for(let l=s.length,d=0;d<l;d++)i._setAttribute(s[d].name,s[d].value);if(this._isViewElementWithRawContent(i,t)||Or(e)){const l=Or(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",l),this._encounteredRawContentDomNodes.add(e),i}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))i._appendChild(s);return i}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n],s=this.domToView(i,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;Ft(i)&&(i=i.parentNode);const s=this.fakeSelectionToView(i);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const s=e.getRangeAt(i),l=this.domRangeToView(s);l&&n.push(l)}return new Eo(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new He(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,bl(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return xe._createBefore(n);if(Ft(e)){if(ta(e))return this.domPositionToView(e.parentNode,bl(e));const i=this.findCorrespondingViewText(e);let s=t;return i?(Vn(e)&&(s-=7,s=s<0?0:s),new xe(i,s)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new xe(i,0)}else{const i=e.childNodes[t-1];if(Ft(i)&&ta(i))return this.domPositionToView(i.parentNode,bl(i));const s=Ft(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(s&&s.parent)return new xe(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(ta(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const s=i.nextSibling;return s instanceof _t?s:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const s=i.getChild(0);return s instanceof _t?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=tt.window,s=[];Bp(t,l=>{const{scrollLeft:d,scrollTop:h}=l;s.push([d,h])}),t.focus(),Bp(t,l=>{const[d,h]=s.shift();l.scrollLeft=d,l.scrollTop=h}),tt.window.scrollTo(n,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode($S):!(e.tagName!=="BR"||!Lp(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(GS)||function(t,n){return t.isEqualNode(WS)&&Lp(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Pm(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return yp(this._domDocument);case"markedNbsp":return xp(this._domDocument);case"br":return Ep(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Ft(e)&&Vn(e)&&t<7||this.isElement(e)&&Vn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(m,b){return Pm(m).some(_=>_.tagName&&b.includes(_.tagName.toLowerCase()))}(e,this.preElements))return Sp(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),i=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),l=this._checkShouldRightTrimDomText(e,i);s&&(t=t.replace(/^ /,"")),l&&(t=t.replace(/ $/,"")),t=Sp(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const d=i&&this.isElement(i)&&i.tagName!="BR",h=i&&Ft(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!i||d||h)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Vn(e)}_getTouchingInlineViewNode(e,t){const n=new Ki({startPosition:t?xe._createAfter(e):xe._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",i=t?"nextSibling":"previousSibling";let s=!0,l=e;do if(!s&&l[n]?l=l[n]:l[i]?(l=l[i],s=!1):(l=l.parentNode,s=!0),!l||this._isBlockElement(l))return null;while(!Ft(l)&&l.tagName!="BR"&&!this._isInlineObjectElement(l));return l}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(Or(e))return new xl(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Fn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Pp,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function Bp(r,e){let t=r;for(;t;)e(t),t=t.parentElement}function Lp(r,e){const t=r.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function zp(r){r==="script"&&F("domconverter-unsafe-script-element-detected"),r==="style"&&F("domconverter-unsafe-style-element-detected")}class So extends si(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Op=hp(function(r,e){Br(e,zr(e),r)});class jr{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Op(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ai extends So{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new jr(this.view,t,n))}}class qS extends ai{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Rr(this)}};this.fire(e.type,e,t)}}const bu=function(){return ue.Date.now()};var KS=/\s/;const YS=function(r){for(var e=r.length;e--&&KS.test(r.charAt(e)););return e};var QS=/^\s+/;const ZS=function(r){return r&&r.slice(0,YS(r)+1).replace(QS,"")};var JS=/^[-+]0x[0-9a-f]+$/i,XS=/^0b[01]+$/i,eD=/^0o[0-7]+$/i,tD=parseInt;const Rp=function(r){if(typeof r=="number")return r;if(wl(r))return NaN;if(De(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=De(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=ZS(r);var t=XS.test(r);return t||eD.test(r)?tD(r.slice(2),t?2:8):JS.test(r)?NaN:+r};var nD=Math.max,oD=Math.min;const na=function(r,e,t){var n,i,s,l,d,h,m=0,b=!1,w=!1,_=!0;if(typeof r!="function")throw new TypeError("Expected a function");function S(ne){var ge=n,Oe=i;return n=i=void 0,m=ne,l=r.apply(Oe,ge)}function T(ne){return m=ne,d=setTimeout(P,e),b?S(ne):l}function I(ne){var ge=ne-h;return h===void 0||ge>=e||ge<0||w&&ne-m>=s}function P(){var ne=bu();if(I(ne))return j(ne);d=setTimeout(P,function(ge){var Oe=e-(ge-h);return w?oD(Oe,s-(ge-m)):Oe}(ne))}function j(ne){return d=void 0,_&&n?S(ne):(n=i=void 0,l)}function Q(){var ne=bu(),ge=I(ne);if(n=arguments,i=this,h=ne,ge){if(d===void 0)return T(h);if(w)return clearTimeout(d),d=setTimeout(P,e),S(h)}return d===void 0&&(d=setTimeout(P,e)),l}return e=Rp(e)||0,De(t)&&(b=!!t.leading,s=(w="maxWait"in t)?nD(Rp(t.maxWait)||0,e):s,_="trailing"in t?!!t.trailing:_),Q.cancel=function(){d!==void 0&&clearTimeout(d),m=0,n=h=i=d=void 0},Q.flush=function(){return d===void 0?l:j(bu())},Q};class iD extends So{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=na(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Eo(t.getRanges(),{backward:t.isBackward,fake:!1});e!=rt.arrowleft&&e!=rt.arrowup||n.setTo(n.getFirstPosition()),e!=rt.arrowright&&e!=rt.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const rD=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},sD=function(r){return this.__data__.has(r)};function Tl(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new dl;++e<t;)this.add(r[e])}Tl.prototype.add=Tl.prototype.push=rD,Tl.prototype.has=sD;const aD=Tl,lD=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},cD=function(r,e){return r.has(e)},Fp=function(r,e,t,n,i,s){var l=1&t,d=r.length,h=e.length;if(d!=h&&!(l&&h>d))return!1;var m=s.get(r),b=s.get(e);if(m&&b)return m==e&&b==r;var w=-1,_=!0,S=2&t?new aD:void 0;for(s.set(r,e),s.set(e,r);++w<d;){var T=r[w],I=e[w];if(n)var P=l?n(I,T,w,e,r,s):n(T,I,w,r,e,s);if(P!==void 0){if(P)continue;_=!1;break}if(S){if(!lD(e,function(j,Q){if(!cD(S,Q)&&(T===j||i(T,j,t,n,s)))return S.push(Q)})){_=!1;break}}else if(T!==I&&!i(T,I,t,n,s)){_=!1;break}}return s.delete(r),s.delete(e),_},dD=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,i){t[++e]=[i,n]}),t},uD=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var Vp=Te?Te.prototype:void 0,ku=Vp?Vp.valueOf:void 0;const hD=function(r,e,t,n,i,s,l){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!s(new fl(r),new fl(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Us(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var d=dD;case"[object Set]":var h=1&n;if(d||(d=uD),r.size!=e.size&&!h)return!1;var m=l.get(r);if(m)return m==e;n|=2,l.set(r,e);var b=Fp(d(r),d(e),n,i,s,l);return l.delete(r),b;case"[object Symbol]":if(ku)return ku.call(r)==ku.call(e)}return!1};var fD=Object.prototype.hasOwnProperty;const gD=function(r,e,t,n,i,s){var l=1&t,d=Fd(r),h=d.length;if(h!=Fd(e).length&&!l)return!1;for(var m=h;m--;){var b=d[m];if(!(l?b in e:fD.call(e,b)))return!1}var w=s.get(r),_=s.get(e);if(w&&_)return w==e&&_==r;var S=!0;s.set(r,e),s.set(e,r);for(var T=l;++m<h;){var I=r[b=d[m]],P=e[b];if(n)var j=l?n(P,I,b,e,r,s):n(I,P,b,r,e,s);if(!(j===void 0?I===P||i(I,P,t,n,s):j)){S=!1;break}T||(T=b=="constructor")}if(S&&!T){var Q=r.constructor,ne=e.constructor;Q==ne||!("constructor"in r)||!("constructor"in e)||typeof Q=="function"&&Q instanceof Q&&typeof ne=="function"&&ne instanceof ne||(S=!1)}return s.delete(r),s.delete(e),S};var jp="[object Arguments]",Hp="[object Array]",Il="[object Object]",Up=Object.prototype.hasOwnProperty;const mD=function(r,e,t,n,i,s){var l=Jt(r),d=Jt(e),h=l?Hp:Qs(r),m=d?Hp:Qs(e),b=(h=h==jp?Il:h)==Il,w=(m=m==jp?Il:m)==Il,_=h==m;if(_&&Ks(r)){if(!Ks(e))return!1;l=!0,b=!1}if(_&&!b)return s||(s=new qs),l||Ld(r)?Fp(r,e,t,n,i,s):hD(r,e,h,t,n,i,s);if(!(1&t)){var S=b&&Up.call(r,"__wrapped__"),T=w&&Up.call(e,"__wrapped__");if(S||T){var I=S?r.value():r,P=T?e.value():e;return s||(s=new qs),i(I,P,t,n,s)}}return!!_&&(s||(s=new qs),gD(r,e,t,n,i,s))},$p=function r(e,t,n,i,s){return e===t||(e==null||t==null||!Xt(e)&&!Xt(t)?e!=e&&t!=t:mD(e,t,n,i,r,s))},pD=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?$p(r,e,void 0,t):!!n};class Wp extends So{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const l of e){const d=t.mapDomToView(l.target);d&&(d.is("uiElement")||d.is("rawElement")||l.type!=="childList"||this._isBogusBrMutation(l)||i.add(d))}for(const l of e){const d=t.mapDomToView(l.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&l.type==="characterData"){const h=t.findCorrespondingViewText(l.target);h&&!i.has(h.parent)?n.add(h):!h&&Vn(l.target)&&i.add(t.mapDomToView(l.target.parentNode))}}let s=!1;for(const l of n)s=!0,this.renderer.markToSync("text",l);for(const l of i){const d=t.mapViewToDom(l),h=Array.from(l.getChildren()),m=Array.from(t.domChildrenToView(d,{withChildren:!1}));pD(h,m,bD)||(s=!0,this.renderer.markToSync("children",l))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function bD(r,e){if(!Array.isArray(r))return r===e||!(!r.is("$text")||!e.is("$text"))&&r.data===e.data}class kD extends So{constructor(e){super(e),this.mutationObserver=e.getObserver(Wp),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=na(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=na(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,s)=>{this.document.isComposing&&!k.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(i))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:i,domSelection:n};this.document._isFocusChanging=!1,this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class vD extends ai{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,t._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{t._isFocusChanging=!1,e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const s=t.selection.editableElement;s!==null&&s!==i.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class wD extends ai{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Gp{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),i=Array.from(t.items||[]);return n.length?n:i.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class _D extends ai{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let s=null,l=null,d=[];if(e.dataTransfer&&(s=new Gp(e.dataTransfer)),e.data!==null?l=e.data:s&&(l=s.getData("text/plain")),i.selection.isFake)d=Array.from(i.selection.getRanges());else if(t.length)d=t.map(h=>n.domConverter.domRangeToView(h));else if(k.isAndroid){const h=e.target.ownerDocument.defaultView.getSelection();d=Array.from(n.domConverter.domSelectionToView(h).getRanges())}if(k.isAndroid&&e.inputType=="insertCompositionText"&&l&&l.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(d[0].end)]});else if(e.inputType=="insertText"&&l&&l.includes(`
`)){const h=l.split(/\n{1,2}/g);let m=d;for(let b=0;b<h.length;b++){const w=h[b];w!=""&&(this.fire(e.type,e,{data:w,dataTransfer:s,targetRanges:m,inputType:e.inputType,isComposing:e.isComposing}),m=[i.selection.getFirstRange()]),b+1<h.length&&(this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:m}),m=[i.selection.getFirstRange()])}}else this.fire(e.type,e,{data:l,dataTransfer:s,targetRanges:d,inputType:e.inputType,isComposing:e.isComposing})}}class CD extends So{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((i=n.keyCode)==rt.arrowright||i==rt.arrowleft||i==rt.arrowup||i==rt.arrowdown)){const s=new Fr(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var i})}observe(){}}class AD extends So{constructor(e){super(e);const t=this.document;t.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=rt.tab||i.ctrlKey)return;const s=new Fr(t,"tab",t.selection.getFirstRange());t.fire(s,i),s.stop.called&&n.stop()})}observe(){}}class yD extends Pe(){constructor(e){super(),this.document=new yl(e),this.domConverter=new Dl(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new HS(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing","_isFocusChanging").to(this.document,"isFocused","isSelecting","isComposing","_isFocusChanging"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new vp(this.document),this.addObserver(Wp),this.addObserver(kD),this.addObserver(vD),this.addObserver(qS),this.addObserver(iD),this.addObserver(wD),this.addObserver(CD),this.addObserver(_D),this.addObserver(AD),this.document.on("arrowKey",VS,{priority:"low"}),LS(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const i={};for(const{name:l,value:d}of Array.from(e.attributes))i[l]=d,l==="class"?this._writer.addClass(d.split(" "),n):this._writer.setAttribute(l,d,n);this._initialDomRootAttributes.set(e,i);const s=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(l,d)=>this._renderer.markToSync("children",d)),n.on("change:attributes",(l,d)=>this._renderer.markToSync("attributes",d)),n.on("change:text",(l,d)=>this._renderer.markToSync("text",d)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const l of this._observers.values())l.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:i})=>t.removeAttribute(i));const n=this._initialDomRootAttributes.get(t);for(const i in n)t.setAttribute(i,n[i]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,i]of this.domRoots)t.observe(i,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const i=Kd(t);let s=i,l=null;for(;s;){let d;d=H2(s==i?t:l),j2(d,()=>qm(t,s));const h=qm(t,s);if(V2(s,h,n),s.parent!=s){if(l=s.frameElement,s=s.parent,!l)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new D("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){D.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.document._isFocusChanging=!1,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return xe._createAt(e,t)}createPositionAfter(e){return xe._createAfter(e)}createPositionBefore(e){return xe._createBefore(e)}createRange(...e){return new He(...e)}createRangeOn(e){return He._createOn(e)}createRangeIn(e){return He._createIn(e)}createSelection(...e){return new Eo(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class li{is(){throw new Error("is() method is abstract")}}class ci extends li{constructor(e){super(),this.parent=null,this._attrs=Ao(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new D("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new D("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=he(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new ci(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Ao(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}ci.prototype.is=function(r){return r==="node"||r==="model:node"};class oa{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new D("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new D("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof ci))throw new D("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,i,s,l){if(Math.max(i.length,n.length)>1e4)return n.slice(0,s).concat(i).concat(n.slice(s+l,n.length));{const d=Array.from(n);return d.splice(s,l,...i),d}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Ct extends ci{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Ct(this.data,this.getAttributes())}static fromJSON(e){return new Ct(e.data,e.attributes)}}Ct.prototype.is=function(r){return r==="$text"||r==="model:$text"||r==="text"||r==="model:text"||r==="node"||r==="model:node"};class lo extends li{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new D("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new D("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}lo.prototype.is=function(r){return r==="$textProxy"||r==="model:$textProxy"||r==="textProxy"||r==="model:textProxy"};class bt extends ci{constructor(e,t,n){super(t),this.name=e,this._children=new oa,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new bt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new Ct(i)]:(ye(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new Ct(s):s instanceof lo?new Ct(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(bt.fromJSON(n)):t.push(Ct.fromJSON(n))}return new bt(e.name,e.attributes,t)}}bt.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="model:element"):r==="element"||r==="model:element"||r==="node"||r==="model:node"};class Do{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new D("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new D("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=fe._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,i,s;do i=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=ia(t,n),s=i||qp(t,n,i);if(s instanceof bt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,Zi("elementStart",s,e,t,1);if(s instanceof Ct){let l;if(this.singleCharacters)l=1;else{let m=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<m&&(m=this.boundaries.end.offset),l=m-t.offset}const d=t.offset-s.startOffset,h=new lo(s,d,l);return t.offset+=l,this.position=t,Zi("text",h,e,t,l)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Zi("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=t.parent,s=ia(t,i),l=s||Kp(t,i,s);if(l instanceof bt)return t.offset--,this.shallow?(this.position=t,Zi("elementStart",l,e,t,1)):(t.path.push(l.maxOffset),this.position=t,this._visitedParent=l,this.ignoreElementEnd?this._previous():Zi("elementEnd",l,e,t));if(l instanceof Ct){let d;if(this.singleCharacters)d=1;else{let b=l.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>b&&(b=this.boundaries.start.offset),d=t.offset-b}const h=t.offset-l.startOffset,m=new lo(l,h-d,d);return t.offset-=d,this.position=t,Zi("text",m,e,t,d)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,Zi("elementStart",n,e,t,1)}}function Zi(r,e,t,n,i){return{done:!1,value:{type:r,item:e,previousPosition:t,nextPosition:n,length:i}}}class fe extends li{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new D("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new D("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new D("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new D("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return ia(this,this.parent)}get nodeAfter(){const e=this.parent;return qp(this,e,ia(this,e))}get nodeBefore(){const e=this.parent;return Kp(this,e,ia(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=he(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Do(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=he(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const i=this.path[n]-e.path[n];if(i<-1||i>1)return!1;if(i===1)return Yp(e,this,n);if(i===-1)return Yp(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?vu(this.path,t):vu(e.path,t))}hasSameParentAs(e){return this.root!==e.root?!1:he(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=fe._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?fe._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=fe._createAt(this);if(this.root!=e.root)return n;if(he(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(he(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;if(e.offset<=this.path[i]){if(e.offset+t>this.path[i])return null;n.path[i]-=t}}return n}_getTransformedByInsertion(e,t){const n=fe._createAt(this);if(this.root!=e.root)return n;if(he(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(he(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;e.offset<=this.path[i]&&(n.path[i]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return fe._createAt(this);const i=this._getTransformedByDeletion(e,n);return i===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):i._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,i=fe._createAt(t);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-e.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof fe)return new fe(e.root,e.path,e.stickiness);{const i=e;if(t=="end")t=i.maxOffset;else{if(t=="before")return this._createBefore(i,n);if(t=="after")return this._createAfter(i,n);if(t!==0&&!t)throw new D("model-createpositionat-offset-required",[this,e])}if(!i.is("element")&&!i.is("documentFragment"))throw new D("model-position-parent-incorrect",[this,e]);const s=i.getPath();return s.push(t),new this(i.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new D("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new D("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new fe(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new D("model-position-fromjson-no-root",t,{rootName:e.root});return new fe(t.getRoot(e.root),e.path,e.stickiness)}}function ia(r,e){const t=e.getChild(e.offsetToIndex(r.offset));return t&&t.is("$text")&&t.startOffset<r.offset?t:null}function qp(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset))}function Kp(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset)-1)}function Yp(r,e,t){return t+1!==r.path.length&&!!vu(e.path,t+1)&&!!function(n,i){let s=n.parent,l=n.path.length-1,d=0;for(;l>=i;){if(n.path[l]+d!==s.maxOffset)return!1;d=1,l--,s=s.parent}return!0}(r,t+1)}function vu(r,e){for(;e<r.length;){if(r[e]!==0)return!1;e++}return!0}fe.prototype.is=function(r){return r==="position"||r==="model:position"};class ie extends li{constructor(e,t){super(),this.start=fe._createAt(e),this.end=t?fe._createAt(t):fe._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Do({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return he(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}containsItem(e){const t=fe._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ie(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ie(e.end,this.end))):t.push(new ie(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ie(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let i=this.start,s=this.end;return e.start.isBefore(i)&&(i=e.start),e.end.isAfter(s)&&(s=e.end),new ie(i,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=fe._createAt(this.start);let i=n.parent;for(;n.path.length>t+1;){const s=i.maxOffset-n.offset;s!==0&&e.push(new ie(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],l=s-n.offset;l!==0&&e.push(new ie(n,n.getShiftedBy(l))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Do(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Do(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Do(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new ie(this.start,this.end)]}getTransformedByOperations(e){const t=[new ie(this.start,this.end)];for(const n of e)for(let i=0;i<t.length;i++){const s=t[i].getTransformedByOperation(n);t.splice(i,1,...s),i+=s.length-1}for(let n=0;n<t.length;n++){const i=t[n];for(let s=n+1;s<t.length;s++){const l=t[s];(i.containsRange(l)||l.containsRange(i)||i.isEqual(l))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,i=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,i,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new ie(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new ie(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=fe._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new ie(t,n)):new ie(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new ie(this.start,e),new ie(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new ie(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,n,i=!1){if(this.isCollapsed){const w=this.start._getTransformedByMove(e,t,n);return[new ie(w)]}const s=ie._createFromPositionAndShift(e,n),l=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!i&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const w=this.start._getTransformedByMove(e,t,n),_=this.end._getTransformedByMove(e,t,n);return[new ie(w,_)]}let d;const h=this.getDifference(s);let m=null;const b=this.getIntersection(s);if(h.length==1?m=new ie(h[0].start._getTransformedByDeletion(e,n),h[0].end._getTransformedByDeletion(e,n)):h.length==2&&(m=new ie(this.start,this.end._getTransformedByDeletion(e,n))),d=m?m._getTransformedByInsertion(l,n,b!==null||i):[],b){const w=new ie(b.start._getCombined(s.start,l),b.end._getCombined(s.start,l));d.length==2?d.splice(1,0,w):d.push(w)}return d}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),i=this.end._getTransformedByDeletion(e,t);return n==null&&i==null?null:(n==null&&(n=e),i==null&&(i=e),new ie(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return new this(fe._createAt(e,0),fe._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(fe._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new D("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,l)=>s.start.isAfter(l.start)?1:-1);const n=e.indexOf(t),i=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(i.start);s++)i.start=fe._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(i.end);s++)i.end=fe._createAt(e[s].end);return i}static fromJSON(e,t){return new this(fe.fromJSON(e.start,t),fe.fromJSON(e.end,t))}}ie.prototype.is=function(r){return r==="range"||r==="model:range"};class Qp extends oe(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new D("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),i=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=fe._createAt(i,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const i of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(i);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const i=this._elementToMarkerNames.get(e)||new Set;i.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,i)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const i=this._elementToMarkerNames.get(e);i&&(i.delete(t),i.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new ie(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new He(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const i of t)if(i.is("attributeElement"))for(const s of i.getElementsWithSameId())n.add(s);else n.add(i);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let i=0;for(let s=0;s<t;s++)i+=this.getModelLength(e.getChild(s));return i}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,i=0,s=0,l=0;if(e.is("$text"))return new xe(e,t);for(;s<t;)n=e.getChild(l),i=this.getModelLength(n),s+=i,l++;return s==t?this._moveViewPositionToTextNode(new xe(e,l)):this.findPositionIn(n,t-(s-i))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof _t?new xe(t,t.data.length):n instanceof _t?new xe(n,0):e}}class xD{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Ml(t),e instanceof lo&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Ml(t),e instanceof lo&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Ml(t),e instanceof lo&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const i=n.get(t);return i===void 0?null:i}revert(e,t){t=Ml(t),e instanceof lo&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,i]of this._consumable)for(const[s,l]of i){const d=s.split(":")[0];l&&e==d&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new D("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const i=n.get(e.endOffset);i&&(t=i.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,i=e.parent,s=Symbol("$textProxy:"+e.data);let l,d;return l=this._textProxyRegistry.get(t),l||(l=new Map,this._textProxyRegistry.set(t,l)),d=l.get(n),d||(d=new Map,l.set(n,d)),d.set(i,s),s}}function Ml(r){const e=r.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?r:e.length>1?e[0]+":"+e[1]:e[0]}class Zp extends oe(){constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const i=this._createConversionApi(n,e.getRefreshedItems());for(const l of e.getMarkersToRemove())this._convertMarkerRemove(l.name,l.range,i);const s=this._reduceChanges(e.getChanges());for(const l of s)l.type==="insert"?this._convertInsert(ie._createFromPositionAndShift(l.position,l.length),i):l.type==="reinsert"?this._convertReinsert(ie._createFromPositionAndShift(l.position,l.length),i):l.type==="remove"?this._convertRemove(l.position,l.length,l.name,i):this._convertAttribute(l.range,l.attributeKey,l.attributeOldValue,l.attributeNewValue,i);for(const l of i.mapper.flushUnboundMarkerNames()){const d=t.get(l).getRange();this._convertMarkerRemove(l,d,i),this._convertMarkerAdd(l,d,i)}for(const l of e.getMarkersToAdd())this._convertMarkerAdd(l.name,l.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(e,t,n,i={}){const s=this._createConversionApi(n,void 0,i);this._convertInsert(e,s);for(const[l,d]of t)this._convertMarkerAdd(l,d,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const i=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,i),this.fire("selection",{selection:e},s),e.isCollapsed){for(const l of i){const d=l.getRange();if(!ED(e.getFirstPosition(),l,s.mapper))continue;const h={item:e,markerName:l.name,markerRange:d};s.consumable.test(e,"addMarker:"+l.name)&&this.fire(`addMarker:${l.name}`,h,s)}for(const l of e.getAttributeKeys()){const d={item:e,range:e.getFirstRange(),attributeKey:l,attributeOldValue:null,attributeNewValue:e.getAttribute(l)};s.consumable.test(e,"attribute:"+d.attributeKey)&&this.fire(`attribute:${d.attributeKey}:$text`,d,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const i of Array.from(e.getWalker({shallow:!0})).map(Jp))this._testAndFire("insert",i,t)}_convertRemove(e,t,n,i){this.fire(`remove:${n}`,{position:e,length:t},i)}_convertAttribute(e,t,n,i,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const l of e){const d={item:l.item,range:ie._createFromPositionAndShift(l.previousPosition,l.length),attributeKey:t,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${t}`,d,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const i of n.map(Jp))this._testAndFire("insert",{...i,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const i=`addMarker:${e}`;if(n.consumable.add(t,i),this.fire(i,{markerName:e,markerRange:t},n),n.consumable.consume(t,i)){this._addConsumablesForRange(n.consumable,t,i);for(const s of t.getItems()){if(!n.consumable.test(s,i))continue;const l={item:s,range:ie._createOn(s),markerName:e,markerRange:t};this.fire(i,l,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const i=n.item;if(e.test(i,"insert")===null){e.add(i,"insert");for(const s of i.getAttributeKeys())e.add(i,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const i of t.getItems())e.add(i,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const i of n)e.add(t,"addMarker:"+i.name);for(const i of t.getAttributeKeys())e.add(t,"attribute:"+i);return e}_testAndFire(e,t,n){const i=function(h,m){const b=m.item.is("element")?m.item.name:"$text";return`${h}:${b}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,l=this._firedEventsMap.get(n),d=l.get(s);if(d){if(d.has(i))return;d.add(i)}else l.set(s,new Set([i]));this.fire(i,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:ie._createOn(e)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,t)}_createConversionApi(e,t=new Set,n={}){const i={...this._conversionApi,consumable:new xD,writer:e,options:n,convertItem:s=>this._convertInsert(ie._createOn(s),i),convertChildren:s=>this._convertInsert(ie._createIn(s),i,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,i),canReuseView:s=>!t.has(i.mapper.toModelElement(s))};return this._firedEventsMap.set(i,new Map),i}}function ED(r,e,t){const n=e.getRange(),i=Array.from(r.getAncestors());return i.shift(),i.reverse(),!i.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function Jp(r){return{item:r.item,range:ie._createFromPositionAndShift(r.previousPosition,r.length)}}class To extends oe(li){constructor(...e){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new ie(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new ie(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new ie(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof To)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof ie)this._setRanges([t],!!i&&!!i.backward);else if(t instanceof fe)this._setRanges([new ie(t)]);else if(t instanceof ci){const s=!!i&&!!i.backward;let l;if(n=="in")l=ie._createIn(t);else if(n=="on")l=ie._createOn(t);else{if(n===void 0)throw new D("model-selection-setto-required-second-parameter",[this,t]);l=new ie(fe._createAt(t,n))}this._setRanges([l],s)}else{if(!ye(t))throw new D("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,i&&!!i.backward)}}_setRanges(e,t=!1){const n=Array.from(e),i=n.some(s=>{if(!(s instanceof ie))throw new D("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(l=>!l.isEqual(s))});(n.length!==this._ranges.length||i)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new D("model-selection-setfocus-no-ranges",[this,e]);const n=fe._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new ie(n,i)),this._lastRangeBackward=!0):(this._pushRange(new ie(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=eb(t.start,e);n&&wu(n,t)&&(yield n);for(const s of t.getWalker()){const l=s.item;s.type=="elementEnd"&&SD(l,e,t)&&(yield l)}const i=eb(t.end,e);i&&!t.end.isTouching(fe._createAt(i,0))&&wu(i,t)&&(yield i)}}containsEntireContent(e=this.anchor.root){const t=fe._createAt(e,0),n=fe._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new ie(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new D("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Xp(r,e){return!e.has(r)&&(e.add(r),r.root.document.model.schema.isBlock(r)&&!!r.parent)}function SD(r,e,t){return Xp(r,e)&&wu(r,t)}function eb(r,e){const t=r.parent.root.document.model.schema,n=r.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const s=n.find(l=>!i&&(i=t.isLimit(l),!i&&Xp(l,e)));return n.forEach(l=>e.add(l)),s}function wu(r,e){const t=function(n){const i=n.root.document.model.schema;let s=n.parent;for(;s;){if(i.isBlock(s))return s;s=s.parent}}(r);return t?!e.containsRange(ie._createOn(t),!0):!0}To.prototype.is=function(r){return r==="selection"||r==="model:selection"};class co extends oe(ie){constructor(e,t){super(e,t),DD.call(this)}detach(){this.stopListening()}toRange(){return new ie(this.start,this.end)}static fromRange(e){return new co(e.start,e.end)}}function DD(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&TD.call(this,t)},{priority:"low"})}function TD(r){const e=this.getTransformedByOperation(r),t=ie._createFromRanges(e),n=!t.isEqual(this),i=function(l,d){switch(d.type){case"insert":return l.containsPosition(d.position);case"move":case"remove":case"reinsert":case"merge":return l.containsPosition(d.sourcePosition)||l.start.isEqual(d.sourcePosition)||l.containsPosition(d.targetPosition);case"split":return l.containsPosition(d.splitPosition)||l.containsPosition(d.insertionPosition)}return!1}(this,r);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=r.type=="remove"?r.sourcePosition:r.deletionPosition);const l=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",l,{deletionPosition:s})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:s})}co.prototype.is=function(r){return r==="liveRange"||r==="model:liveRange"||r=="range"||r==="model:range"};const ra="selection:";class Xn extends oe(li){constructor(e){super(),this._selection=new ID(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return ra+e}static _isStoreAttributeKey(e){return e.startsWith(ra)}}Xn.prototype.is=function(r){return r==="selection"||r=="model:selection"||r=="documentSelection"||r=="model:documentSelection"};class ID extends To{constructor(e){super(),this.markers=new vn({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,i,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(i,s){const l=i.document.differ;for(const d of l.getChanges()){if(d.type!="insert")continue;const h=d.position.parent;d.length===h.maxOffset&&i.enqueueChange(s,m=>{const b=Array.from(h.getAttributeKeys()).filter(w=>w.startsWith(ra));for(const w of b)m.removeAttribute(w,h)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=R();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new D("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new D("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=co.fromRange(e);return t.on("change:range",(n,i,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const l=this._ranges.indexOf(t);this._ranges.splice(l,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const i of this._model.markers){const s=i.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const l=i.getRange();for(const d of this.getRanges())l.containsRange(d,!d.isCollapsed)&&e.push(i)}const n=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const s=Array.from(this.markers),l=this.markers.has(e);if(t){let d=!1;for(const h of this.getRanges())if(t.containsRange(h,!h.isCollapsed)){d=!0;break}d&&!l?(this.markers.add(e),i=!0):!d&&l&&(this.markers.remove(e),i=!0)}else l&&(this.markers.remove(e),i=!0);i&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=Ao(this._getSurroundingAttributes()),n=Ao(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,l]of this._attributePriority)l=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const i=[];for(const[s,l]of this.getAttributes())n.has(s)&&n.get(s)===l||i.push(s);for(const[s]of n)this.hasAttribute(s)||i.push(s);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(e,t,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,i),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,i]of this.getAttributes())e.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of e)this._setAttribute(n,i,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(ra)&&(yield[t.substr(ra.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const i=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Nl(i)),n||(n=Nl(s)),!this.isGravityOverridden&&!n){let l=i;for(;l&&!t.isInline(l)&&!n;)l=l.previousSibling,n=Nl(l)}if(!n){let l=s;for(;l&&!t.isInline(l)&&!n;)l=l.nextSibling,n=Nl(l)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const s of i){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Nl(r){return r instanceof lo||r instanceof Ct?r.getAttributes():null}class tb{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const Ji=function(r){return Wd(r,5)};class MD extends tb{elementToElement(e){return this.add(function(t){const n=ib(t.model),i=sa(t.view,"container");return n.attributes.length&&(n.children=!0),s=>{s.on(`insert:${n.name}`,function(l,d=PD){return(h,m,b)=>{if(!d(m.item,b.consumable,{preflight:!0}))return;const w=l(m.item,b,m);if(!w)return;d(m.item,b.consumable);const _=b.mapper.toViewPosition(m.range.start);b.mapper.bindElements(m.item,w),b.writer.insert(_,w),b.convertAttributes(m.item),cb(w,m.item.getChildren(),b,{reconversion:m.reconversion})}}(i,lb(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&s.on("reduceChanges",ab(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=ib(t.model),i=sa(t.view,"container");return n.children=!0,s=>{if(s._conversionApi.schema.checkChild(n.name,"$text"))throw new D("conversion-element-to-structure-disallowed-text",s,{elementName:n.name});var l,d;s.on(`insert:${n.name}`,(l=i,d=lb(n),(h,m,b)=>{if(!d(m.item,b.consumable,{preflight:!0}))return;const w=new Map;b.writer._registerSlotFactory(function(T,I,P){return(j,Q="children")=>{const ne=j.createContainerElement("$slot");let ge=null;if(Q==="children")ge=Array.from(T.getChildren());else{if(typeof Q!="function")throw new D("conversion-slot-mode-unknown",P.dispatcher,{modeOrFilter:Q});ge=Array.from(T.getChildren()).filter(Oe=>Q(Oe))}return I.set(ne,ge),ne}}(m.item,w,b));const _=l(m.item,b,m);if(b.writer._clearSlotFactory(),!_)return;(function(T,I,P){const j=Array.from(I.values()).flat(),Q=new Set(j);if(Q.size!=j.length)throw new D("conversion-slot-filter-overlap",P.dispatcher,{element:T});if(Q.size!=T.childCount)throw new D("conversion-slot-filter-incomplete",P.dispatcher,{element:T})})(m.item,w,b),d(m.item,b.consumable);const S=b.mapper.toViewPosition(m.range.start);b.mapper.bindElements(m.item,_),b.writer.insert(S,_),b.convertAttributes(m.item),function(T,I,P,j){P.mapper.on("modelToViewPosition",ge,{priority:"highest"});let Q=null,ne=null;for([Q,ne]of I)cb(T,ne,P,j),P.writer.move(P.writer.createRangeIn(Q),P.writer.createPositionBefore(Q)),P.writer.remove(Q);function ge(Oe,nt){const et=nt.modelPosition.nodeAfter,Pt=ne.indexOf(et);Pt<0||(nt.viewPosition=nt.mapper.findPositionIn(Q,Pt))}P.mapper.off("modelToViewPosition",ge)}(_,w,b,{reconversion:m.reconversion})}),{priority:t.converterPriority||"normal"}),s.on("reduceChanges",ab(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=Ji(t);let n=t.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const l of n.values)t.view[l]=sa(t.view[l],"attribute");else t.view=sa(t.view,"attribute");const s=rb(t);return l=>{l.on(i,function(d){return(h,m,b)=>{if(!b.consumable.test(m.item,h.name))return;const w=d(m.attributeOldValue,b,m),_=d(m.attributeNewValue,b,m);if(!w&&!_)return;b.consumable.consume(m.item,h.name);const S=b.writer,T=S.document.selection;if(m.item instanceof To||m.item instanceof Xn)S.wrap(T.getFirstRange(),_);else{let I=b.mapper.toViewRange(m.range);m.attributeOldValue!==null&&w&&(I=S.unwrap(I,w)),m.attributeNewValue!==null&&_&&S.wrap(I,_)}}}(s),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Ji(t);let n=t.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const l of n.values)t.view[l]=sb(t.view[l]);else t.view=sb(t.view);const s=rb(t);return l=>{var d;l.on(i,(d=s,(h,m,b)=>{if(!b.consumable.test(m.item,h.name))return;const w=d(m.attributeOldValue,b,m),_=d(m.attributeNewValue,b,m);if(!w&&!_)return;b.consumable.consume(m.item,h.name);const S=b.mapper.toViewElement(m.item),T=b.writer;if(!S)throw new D("conversion-attribute-to-attribute-on-text",b.dispatcher,m);if(m.attributeOldValue!==null&&w)if(w.key=="class"){const I=en(w.value);for(const P of I)T.removeClass(P,S)}else if(w.key=="style"){const I=Object.keys(w.value);for(const P of I)T.removeStyle(P,S)}else T.removeAttribute(w.key,S);if(m.attributeNewValue!==null&&_)if(_.key=="class"){const I=en(_.value);for(const P of I)T.addClass(P,S)}else if(_.key=="style"){const I=Object.keys(_.value);for(const P of I)T.setStyle(P,_.value[P],S)}else T.setAttribute(_.key,_.value,S)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=sa(t.view,"ui");return i=>{var s;i.on(`addMarker:${t.model}`,(s=n,(l,d,h)=>{d.isOpening=!0;const m=s(d,h);d.isOpening=!1;const b=s(d,h);if(!m||!b)return;const w=d.markerRange;if(w.isCollapsed&&!h.consumable.consume(w,l.name))return;for(const T of w)if(!h.consumable.consume(T.item,l.name))return;const _=h.mapper,S=h.writer;S.insert(_.toViewPosition(w.start),m),h.mapper.bindElementToMarker(m,d.markerName),w.isCollapsed||(S.insert(_.toViewPosition(w.end),b),h.mapper.bindElementToMarker(b,d.markerName)),l.stop()}),{priority:t.converterPriority||"normal"}),i.on(`removeMarker:${t.model}`,(l,d,h)=>{const m=h.mapper.markerNameToElements(d.markerName);if(m){for(const b of m)h.mapper.unbindElementFromMarkerName(b,d.markerName),h.writer.clear(h.writer.createRangeOn(b),b);h.writer.clearClonedElementsGroup(d.markerName),l.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var i;n.on(`addMarker:${t.model}`,(i=t.view,(s,l,d)=>{if(!l.item||!(l.item instanceof To||l.item instanceof Xn||l.item.is("$textProxy")))return;const h=_u(i,l,d);if(!h||!d.consumable.consume(l.item,s.name))return;const m=d.writer,b=nb(m,h),w=m.document.selection;if(l.item instanceof To||l.item instanceof Xn)m.wrap(w.getFirstRange(),b);else{const _=d.mapper.toViewRange(l.range),S=m.wrap(_,b);for(const T of S.getItems())if(T.is("attributeElement")&&T.isSimilar(b)){d.mapper.bindElementToMarker(T,l.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(s){return(l,d,h)=>{if(!d.item||!(d.item instanceof bt))return;const m=_u(s,d,h);if(!m||!h.consumable.test(d.item,l.name))return;const b=h.mapper.toViewElement(d.item);if(b&&b.getCustomProperty("addHighlight")){h.consumable.consume(d.item,l.name);for(const w of ie._createIn(d.item))h.consumable.consume(w.item,l.name);b.getCustomProperty("addHighlight")(b,m,h.writer),h.mapper.bindElementToMarker(b,d.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(s){return(l,d,h)=>{if(d.markerRange.isCollapsed)return;const m=_u(s,d,h);if(!m)return;const b=nb(h.writer,m),w=h.mapper.markerNameToElements(d.markerName);if(w){for(const _ of w)h.mapper.unbindElementFromMarkerName(_,d.markerName),_.is("attributeElement")?h.writer.unwrap(h.writer.createRangeOn(_),b):_.getCustomProperty("removeHighlight")(_,m.id,h.writer);h.writer.clearClonedElementsGroup(d.markerName),l.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){t=Ji(t);const n=t.model;let i=t.view;return i||(i=s=>({group:n,name:s.substr(t.model.length+1)})),s=>{var l;s.on(`addMarker:${n}`,(l=i,(d,h,m)=>{const b=l(h.markerName,m);if(!b)return;const w=h.markerRange;m.consumable.consume(w,d.name)&&(ob(w,!1,m,h,b),ob(w,!0,m,h,b),d.stop())}),{priority:t.converterPriority||"normal"}),s.on(`removeMarker:${n}`,function(d){return(h,m,b)=>{const w=d(m.markerName,b);if(!w)return;const _=b.mapper.markerNameToElements(m.markerName);if(_){for(const T of _)b.mapper.unbindElementFromMarkerName(T,m.markerName),T.is("containerElement")?(S(`data-${w.group}-start-before`,T),S(`data-${w.group}-start-after`,T),S(`data-${w.group}-end-before`,T),S(`data-${w.group}-end-after`,T)):b.writer.clear(b.writer.createRangeOn(T),T);b.writer.clearClonedElementsGroup(m.markerName),h.stop()}function S(T,I){if(I.hasAttribute(T)){const P=new Set(I.getAttribute(T).split(","));P.delete(w.name),P.size==0?b.writer.removeAttribute(T,I):b.writer.setAttribute(T,Array.from(P).join(","),I)}}}}(i),{priority:t.converterPriority||"normal"})}}(e))}}function nb(r,e){const t=r.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function ob(r,e,t,n,i){const s=e?r.start:r.end,l=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,d=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(l||d){let h,m;e&&l||!e&&!d?(h=l,m=!0):(h=d,m=!1);const b=t.mapper.toViewElement(h);if(b)return void function(w,_,S,T,I,P){const j=`data-${P.group}-${_?"start":"end"}-${S?"before":"after"}`,Q=w.hasAttribute(j)?w.getAttribute(j).split(","):[];Q.unshift(P.name),T.writer.setAttribute(j,Q.join(","),w),T.mapper.bindElementToMarker(w,I.markerName)}(b,e,m,t,n,i)}(function(h,m,b,w,_){const S=`${_.group}-${m?"start":"end"}`,T=_.name?{name:_.name}:null,I=b.writer.createUIElement(S,T);b.writer.insert(h,I),b.mapper.bindElementToMarker(I,w.markerName)})(t.mapper.toViewPosition(s),e,t,n,i)}function ib(r){return typeof r=="string"&&(r={name:r}),r.attributes?Array.isArray(r.attributes)||(r.attributes=[r.attributes]):r.attributes=[],r.children=!!r.children,r}function sa(r,e){return typeof r=="function"?r:(t,n)=>function(i,s,l){typeof i=="string"&&(i={name:i});let d;const h=s.writer,m=Object.assign({},i.attributes);if(l=="container")d=h.createContainerElement(i.name,m);else if(l=="attribute"){const b={priority:i.priority||Yi.DEFAULT_PRIORITY};d=h.createAttributeElement(i.name,m,b)}else d=h.createUIElement(i.name,m);if(i.styles){const b=Object.keys(i.styles);for(const w of b)h.setStyle(w,i.styles[w],d)}if(i.classes){const b=i.classes;if(typeof b=="string")h.addClass(b,d);else for(const w of b)h.addClass(w,d)}return d}(r,n,e)}function rb(r){return r.model.values?(e,t,n)=>{const i=r.view[e];return i?i(e,t,n):null}:r.view}function sb(r){return typeof r=="string"?e=>({key:r,value:e}):typeof r=="object"?r.value?()=>r:e=>({key:r.key,value:e}):r}function _u(r,e,t){const n=typeof r=="function"?r(e,t):r;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function ab(r){const e=function(t){return(n,i)=>{if(!n.is("element",t.name))return!1;if(i.type=="attribute"){if(t.attributes.includes(i.attributeKey))return!0}else if(t.children)return!0;return!1}}(r);return(t,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const l=s.type=="attribute"?s.range.start.nodeAfter:s.position.parent;if(l&&e(l,s)){if(!n.reconvertedElements.has(l)){n.reconvertedElements.add(l);const d=fe._createBefore(l);i.push({type:"remove",name:l.name,position:d,length:1},{type:"reinsert",name:l.name,position:d,length:1})}}else i.push(s)}n.changes=i}}function lb(r){return(e,t,n={})=>{const i=["insert"];for(const s of r.attributes)e.hasAttribute(s)&&i.push(`attribute:${s}`);return!!i.every(s=>t.test(e,s))&&(n.preflight||i.forEach(s=>t.consume(e,s)),!0)}}function cb(r,e,t,n){for(const i of e)ND(r.root,i,t,n)||t.convertItem(i)}function ND(r,e,t,n){const{writer:i,mapper:s}=t;if(!n.reconversion)return!1;const l=s.toViewElement(e);return!(!l||l.root==r)&&!!t.canReuseView(l)&&(i.move(i.createRangeOn(l),s.toViewPosition(fe._createBefore(e))),!0)}function PD(r,e,{preflight:t}={}){return t?e.test(r,"insert"):e.consume(r,"insert")}function db(r){const{schema:e,document:t}=r.model;for(const n of t.getRootNames()){const i=t.getRoot(n);if(i.isEmpty&&!e.checkChild(i,"$text")&&e.checkChild(i,"paragraph"))return r.insertElement("paragraph",i),!0}return!1}function ub(r,e,t){const n=t.createContext(r);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function hb(r,e){const t=e.createElement("paragraph");return e.insert(t,r),e.createPositionAt(t,0)}class BD extends tb{elementToElement(e){return this.add(fb(e))}elementToAttribute(e){return this.add(function(t){t=Ji(t),gb(t);const n=mb(t,!1),i=Cu(t.view),s=i?`element:${i}`:"element";return l=>{l.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Ji(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const l=s.view.key;let d;return l=="class"||l=="style"?d={[l=="class"?"classes":"styles"]:s.view.value}:d={attributes:{[l]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(d.name=s.view.name),s.view=d,l}(t)),gb(t,n);const i=mb(t,!0);return s=>{s.on("element",i,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(i){return(s,l)=>{const d=typeof i=="string"?i:i(s,l);return l.writer.createElement("$marker",{"data-name":d})}}(t.model);return fb({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){t=Ji(t),t.model||(t.model=l=>l?t.view+":"+l:t.view);const n={view:t.view,model:t.model},i=Au(pb(n,"start")),s=Au(pb(n,"end"));return l=>{l.on(`element:${t.view}-start`,i,{priority:t.converterPriority||"normal"}),l.on(`element:${t.view}-end`,s,{priority:t.converterPriority||"normal"});const d=B.get("low"),h=B.get("highest"),m=B.get(t.converterPriority)/h;l.on("element",function(b){return(w,_,S)=>{const T=`data-${b.view}`;function I(P,j){for(const Q of j){const ne=b.model(Q,S),ge=S.writer.createElement("$marker",{"data-name":ne});S.writer.insert(ge,P),_.modelCursor.isEqual(P)?_.modelCursor=_.modelCursor.getShiftedBy(1):_.modelCursor=_.modelCursor._getTransformedByInsertion(P,1),_.modelRange=_.modelRange._getTransformedByInsertion(P,1)[0]}}(S.consumable.test(_.viewItem,{attributes:T+"-end-after"})||S.consumable.test(_.viewItem,{attributes:T+"-start-after"})||S.consumable.test(_.viewItem,{attributes:T+"-end-before"})||S.consumable.test(_.viewItem,{attributes:T+"-start-before"}))&&(_.modelRange||Object.assign(_,S.convertChildren(_.viewItem,_.modelCursor)),S.consumable.consume(_.viewItem,{attributes:T+"-end-after"})&&I(_.modelRange.end,_.viewItem.getAttribute(T+"-end-after").split(",")),S.consumable.consume(_.viewItem,{attributes:T+"-start-after"})&&I(_.modelRange.end,_.viewItem.getAttribute(T+"-start-after").split(",")),S.consumable.consume(_.viewItem,{attributes:T+"-end-before"})&&I(_.modelRange.start,_.viewItem.getAttribute(T+"-end-before").split(",")),S.consumable.consume(_.viewItem,{attributes:T+"-start-before"})&&I(_.modelRange.start,_.viewItem.getAttribute(T+"-start-before").split(",")))}}(n),{priority:d+m})}}(e))}}function fb(r){const e=Au(r=Ji(r)),t=Cu(r.view),n=t?`element:${t}`:"element";return i=>{i.on(n,e,{priority:r.converterPriority||"normal"})}}function Cu(r){return typeof r=="string"?r:typeof r=="object"&&typeof r.name=="string"?r.name:null}function Au(r){const e=new xo(r.view);return(t,n,i)=>{const s=e.match(n.viewItem);if(!s)return;const l=s.match;if(l.name=!0,!i.consumable.test(n.viewItem,l))return;const d=function(h,m,b){return h instanceof Function?h(m,b):b.writer.createElement(h)}(r.model,n.viewItem,i);d&&i.safeInsert(d,n.modelCursor)&&(i.consumable.consume(n.viewItem,l),i.convertChildren(n.viewItem,d),i.updateConversionResult(d,n))}}function gb(r,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof r.model!="object"?r.model:r.model.key,i=typeof r.model!="object"||r.model.value===void 0?t:r.model.value;r.model={key:n,value:i}}function mb(r,e){const t=new xo(r.view);return(n,i,s)=>{if(!i.modelRange&&e)return;const l=t.match(i.viewItem);if(!l||(function(b,w){const _=typeof b=="function"?b(w):b;return typeof _=="object"&&!Cu(_)?!1:!_.classes&&!_.attributes&&!_.styles}(r.view,i.viewItem)?l.match.name=!0:delete l.match.name,!s.consumable.test(i.viewItem,l.match)))return;const d=r.model.key,h=typeof r.model.value=="function"?r.model.value(i.viewItem,s):r.model.value;if(h===null)return;i.modelRange||Object.assign(i,s.convertChildren(i.viewItem,i.modelCursor)),function(b,w,_,S){let T=!1;for(const I of Array.from(b.getItems({shallow:_})))S.schema.checkAttribute(I,w.key)&&(T=!0,I.hasAttribute(w.key)||S.writer.setAttribute(w.key,w.value,I));return T}(i.modelRange,{key:d,value:h},e,s)&&(s.consumable.test(i.viewItem,{name:!0})&&(l.match.name=!0),s.consumable.consume(i.viewItem,l.match))}}function pb(r,e){return{view:`${r.view}-${e}`,model:(t,n)=>{const i=t.getAttribute("name"),s=r.model(i,n);return n.writer.createElement("$marker",{"data-name":s})}}}class LD extends Pe(){constructor(e,t){super(),this.model=e,this.view=new yD(t),this.mapper=new Qp,this.downcastDispatcher=new Zp({mapper:this.mapper,schema:e.schema});const n=this.model.document,i=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(l=>{this.downcastDispatcher.convertChanges(n.differ,s,l),this.downcastDispatcher.convertSelection(i,s,l)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(l,d){return(h,m)=>{const b=m.newSelection,w=[];for(const S of b.getRanges())w.push(d.toModelRange(S));const _=l.createSelection(w,{backward:b.isBackward});_.isEqual(l.document.selection)||l.change(S=>{S.setSelection(_)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(l,d,h)=>{if(!h.consumable.consume(d.item,l.name))return;const m=h.writer,b=h.mapper.toViewPosition(d.range.start),w=m.createText(d.item.data);m.insert(b,w)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(l,d,h)=>{h.convertAttributes(d.item),d.reconversion||!d.item.is("element")||d.item.isEmpty||h.convertChildren(d.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(l,d,h)=>{const m=h.mapper.toViewPosition(d.position),b=d.position.getShiftedBy(d.length),w=h.mapper.toViewPosition(b,{isPhantom:!0}),_=h.writer.createRange(m,w),S=h.writer.remove(_.getTrimmed());for(const T of h.writer.createRangeIn(S).getItems())h.mapper.unbindViewElement(T,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const m=h.writer,b=m.document.selection;for(const w of b.getRanges())w.isCollapsed&&w.end.parent.isAttached()&&h.writer.mergeAttributes(w.start);m.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const m=d.selection;if(m.isCollapsed||!h.consumable.consume(m,"selection"))return;const b=[];for(const w of m.getRanges())b.push(h.mapper.toViewRange(w));h.writer.setSelection(b,{backward:m.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const m=d.selection;if(!m.isCollapsed||!h.consumable.consume(m,"selection"))return;const b=h.writer,w=m.getFirstPosition(),_=h.mapper.toViewPosition(w),S=b.breakAttributes(_);b.setSelection(S)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(l=>{if(l.rootName=="$graveyard")return null;const d=new bp(this.view.document,l.name);return d.rootName=l.rootName,this.mapper.bindElements(l,d),d})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new D("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class aa{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new zD(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const l of n)l!="style"&&l!="class"&&t.attributes.push(l);const i=e.getClassNames();for(const l of i)t.classes.push(l);const s=e.getStyleNames();for(const l of s)t.styles.push(l);return t}static createFrom(e,t){if(t||(t=new aa),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,aa.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=aa.createFrom(n,t);return t}}const Pl=["attributes","classes","styles"];class zD{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of Pl)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of Pl)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of Pl)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of Pl)t in e&&this._revert(t,e[t])}_add(e,t){const n=Jt(t)?t:[t],i=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new D("viewconsumable-invalid-attribute",this);if(i.set(s,!0),e==="styles")for(const l of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(l,!0)}}_test(e,t){const n=Jt(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const l=i.get(s);if(l===void 0)return null;if(!l)return!1}else{const l=s=="class"?"classes":"styles",d=this._test(l,[...this._consumables[l].keys()]);if(d!==!0)return d}return!0}_consume(e,t){const n=Jt(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(i.set(s,!1),e=="styles")for(const l of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(l,!1)}else{const l=s=="class"?"classes":"styles";this._consume(l,[...this._consumables[l].keys()])}}_revert(e,t){const n=Jt(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")i.get(s)===!1&&i.set(s,!0);else{const l=s=="class"?"classes":"styles";this._revert(l,[...this._consumables[l].keys()])}}}class OD extends Pe(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Xi(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Xi(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new D("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new D("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof fe){const n=e.nodeBefore,i=e.nodeAfter;if(!(n instanceof bt))throw new D("schema-check-merge-no-element-before",this);if(!(i instanceof bt))throw new D("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,i])=>{if(!i)return;const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,i])=>{const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof fe?t=e.parent:t=(e instanceof ie?[e]:Array.from(e.getRanges())).reduce((n,i)=>{const s=i.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new Ct("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const i of n)for(const s of i)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new ie(e);let n,i;const s=e.getAncestors().reverse().find(l=>this.isLimit(l))||e.root;t!="both"&&t!="backward"||(n=new Do({boundaries:ie._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(i=new Do({boundaries:ie._createIn(s),startPosition:e}));for(const l of function*(d,h){let m=!1;for(;!m;){if(m=!0,d){const b=d.next();b.done||(m=!1,yield{walker:d,value:b.value})}if(h){const b=h.next();b.done||(m=!1,yield{walker:h,value:b.value})}}}(n,i)){const d=l.walker==n?"elementEnd":"elementStart",h=l.value;if(h.type==d&&this.isObject(h.item))return ie._createOn(h.item);if(this.checkChild(h.nextPosition,"$text"))return new ie(h.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const i=n.model;for(const[s,l]of Object.entries(t))i.schema.checkAttribute(e,s)&&n.setAttribute(s,l,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))bb(this,n,t);else{const i=ie._createIn(n).getPositions();for(const s of i)bb(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const i={};for(const[s,l]of e.getAttributes()){const d=this.getAttributeProperties(s);d[t]!==void 0&&(n!==void 0&&n!==d[t]||(i[s]=l))}return i}createContext(e){return new Xi(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const i of n)e[i]=RD(t[i],i);for(const i of n)FD(e,i);for(const i of n)VD(e,i);for(const i of n)jD(e,i);for(const i of n)HD(e,i),UD(e,i);for(const i of n)$D(e,i),WD(e,i),GD(e,i);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const i=t.getItem(n);if(e.allowIn.includes(i.name)){if(n==0)return!0;{const s=this.getDefinition(i);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,i=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(ie._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(i)||(yield new ie(n,i)),n=fe._createAfter(s)),i=fe._createAfter(s);n.isEqual(i)||(yield new ie(n,i))}}class Xi{constructor(e){if(e instanceof Xi)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(KD)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Xi([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function RD(r,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const s of n){const l=Object.keys(s).filter(d=>d.startsWith("is"));for(const d of l)i[d]=!!s[d]}}(r,t),er(r,t,"allowIn"),er(r,t,"allowContentOf"),er(r,t,"allowWhere"),er(r,t,"allowAttributes"),er(r,t,"allowAttributesOf"),er(r,t,"allowChildren"),er(r,t,"inheritTypesFrom"),function(n,i){for(const s of n){const l=s.inheritAllFrom;l&&(i.allowContentOf.push(l),i.allowWhere.push(l),i.allowAttributesOf.push(l),i.inheritTypesFrom.push(l))}}(r,t),t}function FD(r,e){const t=r[e];for(const n of t.allowChildren){const i=r[n];i&&i.allowIn.push(e)}t.allowChildren.length=0}function VD(r,e){for(const t of r[e].allowContentOf)r[t]&&qD(r,t).forEach(n=>{n.allowIn.push(e)});delete r[e].allowContentOf}function jD(r,e){for(const t of r[e].allowWhere){const n=r[t];if(n){const i=n.allowIn;r[e].allowIn.push(...i)}}delete r[e].allowWhere}function HD(r,e){for(const t of r[e].allowAttributesOf){const n=r[t];if(n){const i=n.allowAttributes;r[e].allowAttributes.push(...i)}}delete r[e].allowAttributesOf}function UD(r,e){const t=r[e];for(const n of t.inheritTypesFrom){const i=r[n];if(i){const s=Object.keys(i).filter(l=>l.startsWith("is"));for(const l of s)l in t||(t[l]=i[l])}}delete t.inheritTypesFrom}function $D(r,e){const t=r[e],n=t.allowIn.filter(i=>r[i]);t.allowIn=Array.from(new Set(n))}function WD(r,e){const t=r[e];for(const n of t.allowIn)r[n].allowChildren.push(e)}function GD(r,e){const t=r[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function er(r,e,t){for(const n of r){const i=n[t];typeof i=="string"?e[t].push(i):Array.isArray(i)&&e[t].push(...i)}}function qD(r,e){const t=r[e];return(n=r,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(t.name));var n}function KD(r){return typeof r=="string"||r.is("documentFragment")?{name:typeof r=="string"?r:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:r.is("element")?r.name:"$text",*getAttributeKeys(){yield*r.getAttributeKeys()},getAttribute:e=>r.getAttribute(e)}}function bb(r,e,t){for(const n of e.getAttributeKeys())r.checkAttribute(e,n)||t.removeAttribute(n,e)}class YD extends oe(){constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(l,d){let h;for(const m of new Xi(l)){const b={};for(const _ of m.getAttributeKeys())b[_]=m.getAttribute(_);const w=d.createElement(m.name,b);h&&d.insert(w,h),h=fe._createAt(w,0)}return h}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=aa.createFrom(e),this.conversionApi.store={};const{modelRange:i}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(i){this._removeEmptyElements();for(const l of Array.from(this._modelCursor.parent.getChildren()))t.append(l,s);s.markers=function(l,d){const h=new Set,m=new Map,b=ie._createIn(l).getItems();for(const w of b)w.is("element","$marker")&&h.add(w);for(const w of h){const _=w.getAttribute("data-name"),S=d.createPositionBefore(w);m.has(_)?m.get(_).end=S.clone():m.set(_,new ie(S.clone())),d.remove(w)}return m}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof ie))throw new D("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:fe._createAt(t,0);const i=new ie(n);for(const s of Array.from(e.getChildren())){const l=this._convertItem(s,n);l.modelRange instanceof ie&&(i.end=l.modelRange.end,n=l.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),i=this.conversionApi.writer;t.modelRange||(t.modelRange=i.createRange(i.createPositionBefore(e),i.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?i.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:i}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return ub(t,e,n)?{position:hb(t,i)}:null;const l=this.conversionApi.writer.split(t,s),d=[];for(const m of l.range.getWalker())if(m.type=="elementEnd")d.push(m.item);else{const b=d.pop(),w=m.item;this._registerSplitPair(b,w)}const h=l.range.end.parent;return this._cursorParents.set(e,h),{position:l.position,cursorParent:h}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class QD{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class ZD{constructor(e){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new Dl(e,{renderingMode:"data"}),this.htmlWriter=new QD}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t,{skipComments:this.skipComments})}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class JD extends oe(){constructor(e,t){super(),this.model=e,this.mapper=new Qp,this.downcastDispatcher=new Zp({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,i,s)=>{if(!s.consumable.consume(i.item,n.name))return;const l=s.writer,d=s.mapper.toViewPosition(i.range.start),h=l.createText(i.item.data);l.insert(d,h)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,s)=>{s.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||s.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new YD({schema:e.schema}),this.viewDocument=new yl(t),this.stylesProcessor=t,this.htmlProcessor=new ZD(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new vp(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:s,consumable:l,writer:d})=>{let h=i.modelCursor;if(!l.test(i.viewItem))return;if(!s.checkChild(h,"$text")){if(!ub(h,"$text",s)||i.viewItem.data.trim().length==0)return;h=hb(h,d)}l.consume(i.viewItem);const m=d.createText(i.viewItem.data);d.insert(m,h),i.modelRange=d.createRange(h,h.getShiftedBy(m.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:l,modelCursor:d}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=l,i.modelCursor=d}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:l,modelCursor:d}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=l,i.modelCursor=d}},{priority:"lowest"}),Pe().prototype.decorate.call(this,"init"),Pe().prototype.decorate.call(this,"set"),Pe().prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},db)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new D("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const s=ie._createIn(e),l=new Qi(n);this.mapper.bindElements(e,l);const d=e.is("documentFragment")?e.markers:function(h){const m=[],b=h.root.document;if(!b)return new Map;const w=ie._createIn(h);for(const _ of b.model.markers){const S=_.getRange(),T=S.isCollapsed,I=S.start.isEqual(w.start)||S.end.isEqual(w.end);if(T&&I)m.push([_.name,S]);else{const P=w.getIntersection(S);P&&m.push([_.name,P])}}return m.sort(([_,S],[T,I])=>{if(S.end.compareWith(I.start)!=="after")return 1;if(S.start.compareWith(I.end)!=="before")return-1;switch(S.start.compareWith(I.start)){case"before":return 1;case"after":return-1;default:switch(S.end.compareWith(I.end)){case"before":return 1;case"after":return-1;default:return T.localeCompare(_)}}}),new Map(m)}(e);return this.downcastDispatcher.convert(s,d,i,t),l}init(e){if(this.model.document.version)throw new D("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new D("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(t)){const s=this.model.document.getRoot(i);n.insert(this.parse(t[i],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new D("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const l=this.model.document.getRoot(s);i.remove(i.createRangeIn(l)),i.insert(this.parse(n[s],l),l,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class XD{constructor(e,t){this._helpers=new Map,this._downcast=en(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=en(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new D("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new D("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of yu(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of yu(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of yu(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new D("conversion-group-exists",this);const i=n?new MD(t):new BD(t);this._helpers.set(e,i)}}function*yu(r){if(r.model.values)for(const e of r.model.values){const t={key:r.model.key,value:e},n=r.view[e],i=r.upcastAlso?r.upcastAlso[e]:void 0;yield*kb(t,n,i)}else yield*kb(r.model,r.view,r.upcastAlso)}function*kb(r,e,t){if(yield{model:r,view:e},t)for(const n of en(t))yield{model:r,view:n}}class eo{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function xu(r,e){const t=wb(e),n=t.reduce((l,d)=>l+d.offsetSize,0),i=r.parent;da(r);const s=r.index;return i._insertChild(s,t),ca(i,s+t.length),ca(i,s),new ie(r,r.getShiftedBy(n))}function vb(r){if(!r.isFlat)throw new D("operation-utils-remove-range-not-flat",this);const e=r.start.parent;da(r.start),da(r.end);const t=e._removeChildren(r.start.index,r.end.index-r.start.index);return ca(e,r.start.index),t}function la(r,e){if(!r.isFlat)throw new D("operation-utils-move-range-not-flat",this);const t=vb(r);return xu(e=e._getTransformedByDeletion(r.start,r.end.offset-r.start.offset),t)}function wb(r){const e=[];(function t(n){if(typeof n=="string")e.push(new Ct(n));else if(n instanceof lo)e.push(new Ct(n.data,n.getAttributes()));else if(n instanceof ci)e.push(n);else if(ye(n))for(const i of n)t(i)})(r);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof Ct&&i instanceof Ct&&_b(n,i)&&(e.splice(t-1,2,new Ct(i.data+n.data,i.getAttributes())),t--)}return e}function ca(r,e){const t=r.getChild(e-1),n=r.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&_b(t,n)){const i=new Ct(t.data+n.data,t.getAttributes());r._removeChildren(e-1,2),r._insertChild(e-1,i)}}function da(r){const e=r.textNode,t=r.parent;if(e){const n=r.offset-e.startOffset,i=e.index;t._removeChildren(i,1);const s=new Ct(e.data.substr(0,n),e.getAttributes()),l=new Ct(e.data.substr(n),e.getAttributes());t._insertChild(i,[s,l])}}function _b(r,e){const t=r.getAttributes(),n=e.getAttributes();for(const i of t){if(i[1]!==e.getAttribute(i[0]))return!1;n.next()}return n.next().done}class ut extends eo{constructor(e,t,n,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new ut(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new ut(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new D("move-operation-nodes-do-not-exist",this);if(e===t&&n<i&&i<n+this.howMany)throw new D("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&he(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new D("move-operation-node-into-itself",this)}}_execute(){la(ie._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=fe.fromJSON(e.sourcePosition,t),i=fe.fromJSON(e.targetPosition,t);return new this(n,e.howMany,i,e.baseVersion)}}class tn extends eo{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new oa(wb(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new oa([...this.nodes].map(n=>n._clone(!0))),t=new tn(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new fe(e,[0]);return new ut(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new D("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new oa([...e].map(t=>t._clone(!0))),xu(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(bt.fromJSON(s)):n.push(Ct.fromJSON(s));const i=new tn(fe.fromJSON(e.position,t),n,e.baseVersion);return i.shouldReceiveAttributes=e.shouldReceiveAttributes,i}}class In extends eo{constructor(e,t,n,i,s,l){super(l),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=i}get type(){return"marker"}clone(){return new In(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new In(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new In(e.name,e.oldRange?ie.fromJSON(e.oldRange,t):null,e.newRange?ie.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}const Cb=function(r,e){return $p(r,e)};class $t extends eo{constructor(e,t,n,i,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new $t(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new $t(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new D("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Cb(e.getAttribute(this.key),this.oldValue))throw new D("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new D("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Cb(this.oldValue,this.newValue)||function(e,t,n){da(e.start),da(e.end);for(const i of e.getItems({shallow:!0})){const s=i.is("$textProxy")?i.textNode:i;n!==null?s._setAttribute(t,n):s._removeAttribute(t),ca(s.parent,s.index)}ca(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new $t(ie.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class nn extends eo{get type(){return"noop"}clone(){return new nn(this.baseVersion)}getReversed(){return new nn(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Mn extends eo{constructor(e,t,n,i){super(i),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new Mn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Mn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof bt))throw new D("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new D("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Mn(fe.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Uo extends eo{constructor(e,t,n,i,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Uo(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Uo(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new D("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new D("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new D("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new D("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Uo(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Vt extends eo{constructor(e,t,n,i,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new fe(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new ie(this.sourcePosition,e)}clone(){return new Vt(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new fe(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new At(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new D("merge-operation-source-position-invalid",this);if(!t.parent)throw new D("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new D("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;la(ie._createIn(e),this.targetPosition),la(ie._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=fe.fromJSON(e.sourcePosition,t),i=fe.fromJSON(e.targetPosition,t),s=fe.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,i,s,e.baseVersion)}}class At extends eo{constructor(e,t,n,i,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new fe(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new ie(this.splitPosition,e)}clone(){return new At(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new fe(e,[0]);return new Vt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new D("split-operation-position-invalid",this);if(!e.parent)throw new D("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new D("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new D("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)la(ie._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();xu(this.insertionPosition,t)}la(new ie(fe._createAt(e,this.splitPosition.offset),fe._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new fe(e.root,t,"toPrevious")}static fromJSON(e,t){const n=fe.fromJSON(e.splitPosition,t),i=fe.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?fe.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,i,s,e.baseVersion)}}const uo={};uo[$t.className]=$t,uo[tn.className]=tn,uo[In.className]=In,uo[ut.className]=ut,uo[nn.className]=nn,uo[eo.className]=eo,uo[Mn.className]=Mn,uo[Uo.className]=Uo,uo[At.className]=At,uo[Vt.className]=Vt;class eT{static fromJSON(e,t){return uo[e.__className].fromJSON(e,t)}}const Eu=new Map;function ct(r,e,t){let n=Eu.get(r);n||(n=new Map,Eu.set(r,n)),n.set(e,t)}function tT(r){return[r]}function Ab(r,e,t={}){const n=function(i,s){const l=Eu.get(i);return l&&l.has(s)?l.get(s):tT}(r.constructor,e.constructor);try{return n(r=r.clone(),e,t)}catch(i){throw i}}function nT(r,e,t){r=r.slice(),e=e.slice();const n=new oT(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(r),n.setOriginalOperations(e);const i=n.originalOperations;if(r.length==0||e.length==0)return{operationsA:r,operationsB:e,originalOperations:i};const s=new WeakMap;for(const h of r)s.set(h,0);const l={nextBaseVersionA:r[r.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:r.length,originalOperationsBCount:e.length};let d=0;for(;d<r.length;){const h=r[d],m=s.get(h);if(m==e.length){d++;continue}const b=e[m],w=Ab(h,b,n.getContext(h,b,!0)),_=Ab(b,h,n.getContext(b,h,!1));n.updateRelation(h,b),n.setOriginalOperations(w,h),n.setOriginalOperations(_,b);for(const S of w)s.set(S,m+_.length);r.splice(d,1,...w),e.splice(m,1,..._)}if(t.padWithNoOps){const h=r.length-l.originalOperationsACount,m=e.length-l.originalOperationsBCount;xb(r,m-h),xb(e,h-m)}return yb(r,l.nextBaseVersionB),yb(e,l.nextBaseVersionA),{operationsA:r,operationsB:e,originalOperations:i}}class oT{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const i of e)this.originalOperations.set(i,n||i)}updateRelation(e,t){if(e instanceof ut)t instanceof Vt?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof ut&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof At){if(t instanceof Vt)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof ut)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=ie._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:i,offset:s})}}}else if(e instanceof Vt)t instanceof Vt?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof At&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof In){const n=e.newRange;if(!n)return;if(t instanceof ut){const i=ie._createFromPositionAndShift(t.sourcePosition,t.howMany),s=i.containsPosition(n.start)||i.start.isEqual(n.start),l=i.containsPosition(n.end)||i.end.isEqual(n.end);!s&&!l||i.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()})}else if(t instanceof Vt){const i=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),l=n.end.isEqual(t.deletionPosition),d=n.end.isEqual(t.sourcePosition);(i||s||l||d)&&this._setRelation(e,t,{wasInLeftElement:i,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:l,wasInRightElement:d})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),i=this._history.getUndoneOperation(n);if(!i)return null;const s=this.originalOperations.get(e),l=this._relations.get(s);return l&&l.get(i)||null}_setRelation(e,t,n){const i=this.originalOperations.get(e),s=this.originalOperations.get(t);let l=this._relations.get(i);l||(l=new Map,this._relations.set(i,l)),l.set(s,n)}}function yb(r,e){for(const t of r)t.baseVersion=e++}function xb(r,e){for(let t=0;t<e;t++)r.push(new nn(0))}function Eb(r,e,t){const n=r.nodes.getNode(0).getAttribute(e);if(n==t)return null;const i=new ie(r.position,r.position.getShiftedBy(r.howMany));return new $t(i,e,n,t,0)}function Sb(r,e){return r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Hr(r,e){const t=[];for(let n=0;n<r.length;n++){const i=r[n],s=new ut(i.start,i.end.offset-i.start.offset,e,0);t.push(s);for(let l=n+1;l<r.length;l++)r[l]=r[l]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}ct($t,$t,(r,e,t)=>{if(r.key===e.key&&r.range.start.hasSameParentAs(e.range.start)){const n=r.range.getDifference(e.range).map(s=>new $t(s,r.key,r.oldValue,r.newValue,0)),i=r.range.getIntersection(e.range);return i&&t.aIsStrong&&n.push(new $t(i,e.key,e.newValue,r.newValue,0)),n.length==0?[new nn(0)]:n}return[r]}),ct($t,tn,(r,e)=>{if(r.range.start.hasSameParentAs(e.position)&&r.range.containsPosition(e.position)){const t=r.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new $t(n,r.key,r.oldValue,r.newValue,r.baseVersion));if(e.shouldReceiveAttributes){const n=Eb(e,r.key,r.oldValue);n&&t.unshift(n)}return t}return r.range=r.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[r]}),ct($t,Vt,(r,e)=>{const t=[];r.range.start.hasSameParentAs(e.deletionPosition)&&(r.range.containsPosition(e.deletionPosition)||r.range.start.isEqual(e.deletionPosition))&&t.push(ie._createFromPositionAndShift(e.graveyardPosition,1));const n=r.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(i=>new $t(i,r.key,r.oldValue,r.newValue,r.baseVersion))}),ct($t,ut,(r,e)=>function(n,i){const s=ie._createFromPositionAndShift(i.sourcePosition,i.howMany);let l=null,d=[];s.containsRange(n,!0)?l=n:n.start.hasSameParentAs(s.start)?(d=n.getDifference(s),l=n.getIntersection(s)):d=[n];const h=[];for(let m of d){m=m._getTransformedByDeletion(i.sourcePosition,i.howMany);const b=i.getMovedRangeStart(),w=m.start.hasSameParentAs(b),_=m._getTransformedByInsertion(b,i.howMany,w);h.push(..._)}return l&&h.push(l._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),h}(r.range,e).map(n=>new $t(n,r.key,r.oldValue,r.newValue,r.baseVersion))),ct($t,At,(r,e)=>{if(r.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.range.end.offset++,[r];if(r.range.start.hasSameParentAs(e.splitPosition)&&r.range.containsPosition(e.splitPosition)){const t=r.clone();return t.range=new ie(e.moveTargetPosition.clone(),r.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),r.range.end=e.splitPosition.clone(),r.range.end.stickiness="toPrevious",[r,t]}return r.range=r.range._getTransformedBySplitOperation(e),[r]}),ct(tn,$t,(r,e)=>{const t=[r];if(r.shouldReceiveAttributes&&r.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(r.position)){const n=Eb(r,e.key,e.newValue);n&&t.push(n)}return t}),ct(tn,tn,(r,e,t)=>(r.position.isEqual(e.position)&&t.aIsStrong||(r.position=r.position._getTransformedByInsertOperation(e)),[r])),ct(tn,ut,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),ct(tn,At,(r,e)=>(r.position=r.position._getTransformedBySplitOperation(e),[r])),ct(tn,Vt,(r,e)=>(r.position=r.position._getTransformedByMergeOperation(e),[r])),ct(In,tn,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByInsertOperation(e)[0]),r.newRange&&(r.newRange=r.newRange._getTransformedByInsertOperation(e)[0]),[r])),ct(In,In,(r,e,t)=>{if(r.name==e.name){if(!t.aIsStrong)return[new nn(0)];r.oldRange=e.newRange?e.newRange.clone():null}return[r]}),ct(In,Vt,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByMergeOperation(e)),r.newRange&&(r.newRange=r.newRange._getTransformedByMergeOperation(e)),[r])),ct(In,ut,(r,e,t)=>{if(r.oldRange&&(r.oldRange=ie._createFromRanges(r.oldRange._getTransformedByMoveOperation(e))),r.newRange){if(t.abRelation){const n=ie._createFromRanges(r.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(r.newRange.start))return r.newRange.end=n.end,r.newRange.start.path=t.abRelation.path,[r];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(r.newRange.end))return r.newRange.start=n.start,r.newRange.end.path=t.abRelation.path,[r]}r.newRange=ie._createFromRanges(r.newRange._getTransformedByMoveOperation(e))}return[r]}),ct(In,At,(r,e,t)=>{if(r.oldRange&&(r.oldRange=r.oldRange._getTransformedBySplitOperation(e)),r.newRange){if(t.abRelation){const n=r.newRange._getTransformedBySplitOperation(e);return r.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?r.newRange.start=fe._createAt(e.insertionPosition):r.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(r.newRange.start=fe._createAt(e.moveTargetPosition)),r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?r.newRange.end=fe._createAt(e.moveTargetPosition):r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?r.newRange.end=fe._createAt(e.insertionPosition):r.newRange.end=n.end,[r]}r.newRange=r.newRange._getTransformedBySplitOperation(e)}return[r]}),ct(Vt,tn,(r,e)=>(r.sourcePosition.hasSameParentAs(e.position)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByInsertOperation(e),r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e),[r])),ct(Vt,Vt,(r,e,t)=>{if(r.sourcePosition.isEqual(e.sourcePosition)&&r.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),r.sourcePosition=new fe(e.graveyardPosition.root,n),r.howMany=0,[r]}return[new nn(0)]}if(r.sourcePosition.isEqual(e.sourcePosition)&&!r.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=r.targetPosition.root.rootName=="$graveyard",i=e.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const s=e.targetPosition._getTransformedByMergeOperation(e),l=r.targetPosition._getTransformedByMergeOperation(e);return[new ut(s,r.howMany,l,0)]}return[new nn(0)]}return r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMergeOperation(e),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),r.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),ct(Vt,ut,(r,e,t)=>{const n=ie._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&r.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.sourcePosition)?[new nn(0)]:(r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition.hasSameParentAs(e.sourcePosition)&&(r.howMany-=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMoveOperation(e),r.targetPosition=r.targetPosition._getTransformedByMoveOperation(e),r.graveyardPosition.isEqual(e.targetPosition)||(r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)),[r])}),ct(Vt,At,(r,e,t)=>{if(e.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),r.deletionPosition.isEqual(e.graveyardPosition)&&(r.howMany=e.howMany)),r.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,i=e.graveyardPosition&&r.deletionPosition.isEqual(e.graveyardPosition);if(n||i||t.abRelation=="mergeTargetNotMoved")return r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),[r]}if(r.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return r.howMany=0,r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r];if(t.abRelation=="mergeSameElement"||r.sourcePosition.offset>0)return r.sourcePosition=e.moveTargetPosition.clone(),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}return r.sourcePosition.hasSameParentAs(e.splitPosition)&&(r.howMany=e.splitPosition.offset),r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}),ct(ut,tn,(r,e)=>{const t=ie._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByInsertOperation(e,!1)[0];return r.sourcePosition=t.start,r.howMany=t.end.offset-t.start.offset,r.targetPosition.isEqual(e.position)||(r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e)),[r]}),ct(ut,ut,(r,e,t)=>{const n=ie._createFromPositionAndShift(r.sourcePosition,r.howMany),i=ie._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,l=t.aIsStrong,d=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?d=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(d=!1),s=r.targetPosition.isEqual(e.targetPosition)&&d?r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):r.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Sb(r,e)&&Sb(e,r))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Hr([n],s);if(i.containsPosition(r.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Hr([n],s);const h=he(r.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(h=="prefix"||h=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Hr([n],s);r.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?r.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(l=!1):l=!0;const m=[],b=n.getDifference(i);for(const _ of b){_.start=_.start._getTransformedByDeletion(e.sourcePosition,e.howMany),_.end=_.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const S=he(_.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",T=_._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,S);m.push(...T)}const w=n.getIntersection(i);return w!==null&&l&&(w.start=w.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),w.end=w.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),m.length===0?m.push(w):m.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?m.unshift(w):m.push(w):m.splice(1,0,w)),m.length===0?[new nn(r.baseVersion)]:Hr(m,s)}),ct(ut,At,(r,e,t)=>{let n=r.targetPosition.clone();r.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=r.targetPosition._getTransformedBySplitOperation(e));const i=ie._createFromPositionAndShift(r.sourcePosition,r.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.howMany++,r.targetPosition=n,[r];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let l=new ie(e.splitPosition,i.end);return l=l._getTransformedBySplitOperation(e),Hr([new ie(i.start,e.splitPosition),l],n)}r.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),r.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=r.targetPosition);const s=[i._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const l=i.start.isEqual(e.graveyardPosition)||i.containsPosition(e.graveyardPosition);r.howMany>1&&l&&!t.aWasUndone&&s.push(ie._createFromPositionAndShift(e.insertionPosition,1))}return Hr(s,n)}),ct(ut,Vt,(r,e,t)=>{const n=ie._createFromPositionAndShift(r.sourcePosition,r.howMany);if(e.deletionPosition.hasSameParentAs(r.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(r.type!="remove"||t.forceWeakRemove){if(r.howMany==1)return t.bWasUndone?(r.sourcePosition=e.graveyardPosition.clone(),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]):[new nn(0)]}else if(!t.aWasUndone){const s=[];let l=e.graveyardPosition.clone(),d=e.targetPosition._getTransformedByMergeOperation(e);r.howMany>1&&(s.push(new ut(r.sourcePosition,r.howMany-1,r.targetPosition,0)),l=l._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1),d=d._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1));const h=e.deletionPosition._getCombined(r.sourcePosition,r.targetPosition),m=new ut(l,1,h,0),b=m.getMovedRangeStart().path.slice();b.push(0);const w=new fe(m.targetPosition.root,b);d=d._getTransformedByMove(l,h,1);const _=new ut(d,e.howMany,w,0);return s.push(m),s.push(_),s}}const i=ie._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByMergeOperation(e);return r.sourcePosition=i.start,r.howMany=i.end.offset-i.start.offset,r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]}),ct(Mn,tn,(r,e)=>(r.position=r.position._getTransformedByInsertOperation(e),[r])),ct(Mn,Vt,(r,e)=>r.position.isEqual(e.deletionPosition)?(r.position=e.graveyardPosition.clone(),r.position.stickiness="toNext",[r]):(r.position=r.position._getTransformedByMergeOperation(e),[r])),ct(Mn,ut,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),ct(Mn,Mn,(r,e,t)=>{if(r.position.isEqual(e.position)){if(!t.aIsStrong)return[new nn(0)];r.oldName=e.newName}return[r]}),ct(Mn,At,(r,e)=>{if(he(r.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new Mn(r.position.getShiftedBy(1),r.oldName,r.newName,0);return[r,t]}return r.position=r.position._getTransformedBySplitOperation(e),[r]}),ct(Uo,Uo,(r,e,t)=>{if(r.root===e.root&&r.key===e.key){if(!t.aIsStrong||r.newValue===e.newValue)return[new nn(0)];r.oldValue=e.newValue}return[r]}),ct(At,tn,(r,e)=>(r.splitPosition.hasSameParentAs(e.position)&&r.splitPosition.offset<e.position.offset&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByInsertOperation(e),r.insertionPosition=r.insertionPosition._getTransformedByInsertOperation(e),[r])),ct(At,Vt,(r,e,t)=>{if(!r.graveyardPosition&&!t.bWasUndone&&r.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new fe(e.graveyardPosition.root,n),s=At.getInsertionPosition(new fe(e.graveyardPosition.root,n)),l=new At(i,0,s,null,0);return r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=At.getInsertionPosition(r.splitPosition),r.graveyardPosition=l.insertionPosition.clone(),r.graveyardPosition.stickiness="toNext",[l,r]}return r.splitPosition.hasSameParentAs(e.deletionPosition)&&!r.splitPosition.isAfter(e.deletionPosition)&&r.howMany--,r.splitPosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=At.getInsertionPosition(r.splitPosition),r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),ct(At,ut,(r,e,t)=>{const n=ie._createFromPositionAndShift(e.sourcePosition,e.howMany);if(r.graveyardPosition){const s=n.start.isEqual(r.graveyardPosition)||n.containsPosition(r.graveyardPosition);if(!t.bWasUndone&&s){const l=r.splitPosition._getTransformedByMoveOperation(e),d=r.graveyardPosition._getTransformedByMoveOperation(e),h=d.path.slice();h.push(0);const m=new fe(d.root,h);return[new ut(l,r.howMany,m,0)]}r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)}const i=r.splitPosition.isEqual(e.targetPosition);if(i&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return r.howMany+=e.howMany,r.splitPosition=r.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),r.insertionPosition=At.getInsertionPosition(r.splitPosition),[r];if(i&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:l}=t.abRelation;return r.howMany+=s,r.splitPosition=r.splitPosition.getShiftedBy(l),[r]}if(r.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.splitPosition)){const s=e.howMany-(r.splitPosition.offset-e.sourcePosition.offset);return r.howMany-=s,r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany),r.splitPosition=e.sourcePosition.clone(),r.insertionPosition=At.getInsertionPosition(r.splitPosition),[r]}return e.sourcePosition.isEqual(e.targetPosition)||(r.splitPosition.hasSameParentAs(e.sourcePosition)&&r.splitPosition.offset<=e.sourcePosition.offset&&(r.howMany-=e.howMany),r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany)),r.splitPosition.stickiness="toNone",r.splitPosition=r.splitPosition._getTransformedByMoveOperation(e),r.splitPosition.stickiness="toNext",r.graveyardPosition?r.insertionPosition=r.insertionPosition._getTransformedByMoveOperation(e):r.insertionPosition=At.getInsertionPosition(r.splitPosition),[r]}),ct(At,At,(r,e,t)=>{if(r.splitPosition.isEqual(e.splitPosition)){if(!r.graveyardPosition&&!e.graveyardPosition)return[new nn(0)];if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition))return[new nn(0)];if(t.abRelation=="splitBefore")return r.howMany=0,r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e),[r]}if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition)){const n=r.splitPosition.root.rootName=="$graveyard",i=e.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const s=[];return e.howMany&&s.push(new ut(e.moveTargetPosition,e.howMany,e.splitPosition,0)),r.howMany&&s.push(new ut(r.splitPosition,r.howMany,r.moveTargetPosition,0)),s}return[new nn(0)]}if(r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e)),r.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return r.howMany++,[r];if(e.splitPosition.isEqual(r.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const i=new fe(e.insertionPosition.root,n);return[r,new ut(r.insertionPosition,1,i,0)]}return r.splitPosition.hasSameParentAs(e.splitPosition)&&r.splitPosition.offset<e.splitPosition.offset&&(r.howMany-=e.howMany),r.splitPosition=r.splitPosition._getTransformedBySplitOperation(e),r.insertionPosition=At.getInsertionPosition(r.splitPosition),[r]});class sn extends oe(fe){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new D("model-liveposition-root-not-rootelement",e);iT.call(this)}detach(){this.stopListening()}toPosition(){return new fe(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function iT(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&rT.call(this,t)},{priority:"low"})}function rT(r){const e=this.getTransformedByOperation(r);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}sn.prototype.is=function(r){return r==="livePosition"||r==="model:livePosition"||r=="position"||r==="model:position"};class Ur{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},F("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:i=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=i,this.isTyping=s}get type(){return F("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class sT{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),i=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),i||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=ie._createFromPositionAndShift(t.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const s=i.getData();this.bufferMarkerChange(i.name,s,s)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=t.graveyardPosition.parent;this._markInsert(i,t.graveyardPosition.offset,1);const s=t.targetPosition.parent;this._isInInsertedElement(s)||this._markInsert(s,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const i=this._changedMarkers.get(e);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,i=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||i||s)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((b,w)=>b.offset===w.offset?b.type!=w.type?b.type=="remove"?-1:1:0:b.offset<w.offset?-1:1),s=this._elementSnapshots.get(n),l=Db(n.getChildren()),d=aT(s.length,i);let h=0,m=0;for(const b of d)if(b==="i")t.push(this._getInsertDiff(n,h,l[h])),h++;else if(b==="r")t.push(this._getRemoveDiff(n,h,s[m])),m++;else if(b==="a"){const w=l[h].attributes,_=s[m].attributes;let S;if(l[h].name=="$text")S=new ie(fe._createAt(n,h),fe._createAt(n,h+1));else{const T=n.offsetToIndex(h);S=new ie(fe._createAt(n,h),fe._createAt(n.getChild(T),0))}t.push(...this._getAttributesDiff(S,_,w)),h++,m++}else h++,m++}t.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<t.length;n++){const s=t[i],l=t[n],d=s.type=="remove"&&l.type=="remove"&&s.name=="$text"&&l.name=="$text"&&s.position.isEqual(l.position),h=s.type=="insert"&&l.type=="insert"&&s.name=="$text"&&l.name=="$text"&&s.position.parent==l.position.parent&&s.position.offset+s.length==l.position.offset,m=s.type=="attribute"&&l.type=="attribute"&&s.position.parent==l.position.parent&&s.range.isFlat&&l.range.isFlat&&s.position.offset+s.length==l.position.offset&&s.attributeKey==l.attributeKey&&s.attributeOldValue==l.attributeOldValue&&s.attributeNewValue==l.attributeNewValue;d||h||m?(s.length++,m&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):i=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(lT),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=ie._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(e,t,n){const i={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i)}_markRemove(e,t,n){const i={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Db(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const i=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const l=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:i,howMany:l-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=e.howMany;else if(i<=s)if(e.offset<n.offset){const l=i-n.offset;n.offset=e.offset,n.howMany-=l,e.nodesToHandle-=l}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const l=s-e.offset;n.howMany-=l,e.nodesToHandle-=l}}if(n.type=="remove"&&(i<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const l=i-n.offset;n.offset=e.offset,n.howMany-=l}else if(e.offset<s)if(i<=s){const l=n.howMany;n.howMany=e.offset-n.offset;const d=l-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:d,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&i>n.offset){if(i>s){const l={type:"attribute",offset:s,howMany:i-s,count:this._changeCount++};this._handleChange(l,t),t.push(l)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(i>s?(e.nodesToHandle=i-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&i>n.offset){const l={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(l,t),t.push(l),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&i<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&i>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:fe._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:fe._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const i=[];n=new Map(n);for(const[s,l]of t){const d=n.has(s)?n.get(s):null;d!==l&&i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:l,attributeNewValue:d,changeCount:this._changeCount++}),n.delete(s)}for(const[s,l]of n)i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:l,changeCount:this._changeCount++});return i}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),i=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&i>=s.offset&&i<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const i=new ie(fe._createAt(e,t),fe._createAt(e,t+n));for(const s of i.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function Db(r){const e=[];for(const t of r)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function aT(r,e){const t=[];let n=0,i=0;for(const s of e){if(s.offset>n){for(let l=0;l<s.offset-n;l++)t.push("e");i+=s.offset-n}if(s.type=="insert"){for(let l=0;l<s.howMany;l++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let l=0;l<s.howMany;l++)t.push("r");n=s.offset,i+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,i+=s.howMany}if(i<r)for(let s=0;s<r-i-n;s++)t.push("e");return t}function lT(r){const e="position"in r&&r.position.root.rootName=="$graveyard",t="range"in r&&r.range.root.rootName=="$graveyard";return!e&&!t}class cT{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new D("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let i=t-1;for(const[d,h]of this._gaps)e>d&&e<h&&(e=h),i>d&&i<h&&(i=d-1);if(i<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let l=this._baseVersionToOperationIndex.get(i);return l===void 0&&(l=this._operations.length-1),this._operations.slice(s,l+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Bl extends bt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}Bl.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"):r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"||r==="node"||r==="model:node"};const Su="$graveyard";class dT extends oe(){constructor(e){super(),this.model=e,this.history=new cT,this.selection=new Xn(this),this.roots=new vn({idProperty:"rootName"}),this.differ=new sT(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Su),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,i,s,l)=>{const d={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,l,d),i===null&&n.on("change",(h,m)=>{const b=n.getData();this.differ.bufferMarkerChange(n.name,{...b,range:m},b)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Su)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new D("model-document-createroot-name-exists",this,{name:t});const n=new Bl(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Su)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=rp(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,i=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(i)||t.createRange(i)}_validateSelectionRange(e){return Tb(e.start)&&Tb(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Tb(r){const e=r.textNode;if(e){const t=e.data,n=r.offset-e.startOffset;return!Qm(t,n)&&!Zm(t,n)}return!0}class uT extends oe(){constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof $r?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,i=!1){const s=e instanceof $r?e.name:e;if(s.includes(","))throw new D("markercollection-incorrect-marker-name",this);const l=this._markers.get(s);if(l){const m=l.getData(),b=l.getRange();let w=!1;return b.isEqual(t)||(l._attachLiveRange(co.fromRange(t)),w=!0),n!=l.managedUsingOperations&&(l._managedUsingOperations=n,w=!0),typeof i=="boolean"&&i!=l.affectsData&&(l._affectsData=i,w=!0),w&&this.fire(`update:${s}`,l,b,t,m),l}const d=co.fromRange(t),h=new $r(s,d,n,i);return this._markers.set(s,h),this.fire(`update:${s}`,h,null,t,{...h.getData(),range:null}),h}_remove(e){const t=e instanceof $r?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof $r?e.name:e,n=this._markers.get(t);if(!n)throw new D("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${t}`,n,i,i,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class $r extends oe(li){constructor(e,t,n,i){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}$r.prototype.is=function(r){return r==="marker"||r==="model:marker"};class hT extends eo{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new D("detach-operation-on-document-node",this)}_execute(){vb(ie._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class $o extends li{constructor(e){super(),this.markers=new Map,this._children=new oa,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(bt.fromJSON(n)):t.push(Ct.fromJSON(n));return new $o(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new Ct(i)]:(ye(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new Ct(s):s instanceof lo?new Ct(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}}$o.prototype.is=function(r){return r==="documentFragment"||r==="model:documentFragment"};class fT{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Ct(e,t)}createElement(e,t){return new bt(e,t)}createDocumentFragment(){return new $o}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof Ct&&e.data=="")return;const i=fe._createAt(t,n);if(e.parent){if(Nb(e.root,i.root))return void this.move(ie._createOn(e),i);if(e.root.document)throw new D("model-writer-insert-forbidden-move",this);this.remove(e)}const s=i.root.document?i.root.document.version:null,l=new tn(i,e,s);if(e instanceof Ct&&(l.shouldReceiveAttributes=!0),this.batch.addOperation(l),this.model.applyOperation(l),e instanceof $o)for(const[d,h]of e.markers){const m=fe._createAt(h.root,0),b={range:new ie(h.start._getCombined(m,i),h.end._getCombined(m,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(d)?this.updateMarker(d,b):this.addMarker(d,b)}}insertText(e,t,n,i){t instanceof $o||t instanceof bt||t instanceof fe?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,i)}insertElement(e,t,n,i){t instanceof $o||t instanceof bt||t instanceof fe?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,i)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof $o||t instanceof bt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof $o||t instanceof bt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof ie){const i=n.getMinimalFlatRanges();for(const s of i)Ib(this,e,t,s)}else Mb(this,e,t,n)}setAttributes(e,t){for(const[n,i]of Ao(e))this.setAttribute(n,i,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof ie){const n=t.getMinimalFlatRanges();for(const i of n)Ib(this,e,null,i)}else Mb(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(e instanceof ie)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof ie))throw new D("writer-move-invalid-range",this);if(!e.isFlat)throw new D("writer-move-range-not-flat",this);const i=fe._createAt(t,n);if(i.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Nb(e.root,i.root))throw new D("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,l=new ut(e.start,e.end.offset-e.start.offset,i,s);this.batch.addOperation(l),this.model.applyOperation(l)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof ie?e:ie._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),gT(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof bt))throw new D("writer-merge-no-element-before",this);if(!(n instanceof bt))throw new D("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(ie._createIn(n),fe._createAt(t,"end")),this.remove(n)}_merge(e){const t=fe._createAt(e.nodeBefore,"end"),n=fe._createAt(e.nodeAfter,0),i=e.root.document.graveyard,s=new fe(i,[0]),l=e.root.document.version,d=new Vt(n,e.nodeAfter.maxOffset,t,s,l);this.batch.addOperation(d),this.model.applyOperation(d)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof bt))throw new D("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,i=new Mn(fe._createBefore(e),e.name,t,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let n,i,s=e.parent;if(!s.parent)throw new D("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new D("writer-split-invalid-limit-element",this);do{const l=s.root.document?s.root.document.version:null,d=s.maxOffset-e.offset,h=At.getInsertionPosition(e),m=new At(e,d,h,null,l);this.batch.addOperation(m),this.model.applyOperation(m),n||i||(n=s,i=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new ie(fe._createAt(n,"end"),fe._createAt(i,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new D("writer-wrap-range-not-flat",this);const n=t instanceof bt?t:new bt(t);if(n.childCount>0)throw new D("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new D("writer-wrap-element-attached",this);this.insert(n,e.start);const i=new ie(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(i,fe._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new D("writer-unwrap-element-no-parent",this);this.move(ie._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new D("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,i=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new D("writer-addmarker-marker-exists",this);if(!i)throw new D("writer-addmarker-no-range",this);return n?(ua(this,e,null,i,s),this.model.markers.get(e)):this.model.markers._set(e,i,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,i=this.model.markers.get(n);if(!i)throw new D("writer-updatemarker-marker-not-exists",this);if(!t)return F("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const s=typeof t.usingOperation=="boolean",l=typeof t.affectsData=="boolean",d=l?t.affectsData:i.affectsData;if(!s&&!t.range&&!l)throw new D("writer-updatemarker-wrong-options",this);const h=i.getRange(),m=t.range?t.range:h;s&&t.usingOperation!==i.managedUsingOperations?t.usingOperation?ua(this,n,null,m,d):(ua(this,n,h,null,d),this.model.markers._set(n,m,void 0,d)):i.managedUsingOperations?ua(this,n,h,m,d):this.model.markers._set(n,m,void 0,d)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new D("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);ua(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,i]of Ao(e))this._setSelectionAttribute(n,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=Xn._getStoreAttributeKey(e);this.setAttribute(i,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=Xn._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new D("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let s=!1;if(e==="move"){const l=t;s=l.containsPosition(i.start)||l.start.isEqual(i.start)||l.containsPosition(i.end)||l.end.isEqual(i.end)}else{const l=t,d=l.nodeBefore,h=l.nodeAfter,m=i.start.parent==d&&i.start.isAtEnd,b=i.end.parent==h&&i.end.offset==0,w=i.end.nodeAfter==h,_=i.start.nodeAfter==h;s=m||b||w||_}s&&this.updateMarker(n.name,{range:i})}}}function Ib(r,e,t,n){const i=r.model,s=i.document;let l,d,h,m=n.start;for(const w of n.getWalker({shallow:!0}))h=w.item.getAttribute(e),l&&d!=h&&(d!=t&&b(),m=l),l=w.nextPosition,d=h;function b(){const w=new ie(m,l),_=w.root.document?s.version:null,S=new $t(w,e,d,t,_);r.batch.addOperation(S),i.applyOperation(S)}l instanceof fe&&l!=m&&d!=t&&b()}function Mb(r,e,t,n){const i=r.model,s=i.document,l=n.getAttribute(e);let d,h;if(l!=t){if(n.root===n){const m=n.document?s.version:null;h=new Uo(n,e,l,t,m)}else{d=new ie(fe._createBefore(n),r.createPositionAfter(n));const m=d.root.document?s.version:null;h=new $t(d,e,l,t,m)}r.batch.addOperation(h),i.applyOperation(h)}}function ua(r,e,t,n,i){const s=r.model,l=s.document,d=new In(e,t,n,s.markers,!!i,l.version);r.batch.addOperation(d),s.applyOperation(d)}function gT(r,e,t,n){let i;if(r.root.document){const s=n.document,l=new fe(s.graveyard,[0]);i=new ut(r,e,l,s.version)}else i=new hT(r,e);t.addOperation(i),n.applyOperation(i)}function Nb(r,e){return r===e||r instanceof Bl&&e instanceof Bl}function mT(r){r.document.registerPostFixer(e=>function(t,n){const i=n.document.selection,s=n.schema,l=[];let d=!1;for(const h of i.getRanges()){const m=pT(h,s);m&&!m.isEqual(h)?(l.push(m),d=!0):l.push(h)}return d&&t.setSelection(function(h){const m=[...h],b=new Set;let w=1;for(;w<m.length;){const _=m[w],S=m.slice(0,w);for(const[T,I]of S.entries())if(!b.has(T)){if(_.isEqual(I))b.add(T);else if(_.isIntersecting(I)){b.add(T),b.add(w);const P=_.getJoined(I);m.push(P)}}w++}return m.filter((_,S)=>!b.has(S))}(l),{backward:i.isBackward}),!1}(e,r))}function pT(r,e){return r.isCollapsed?function(t,n){const i=t.start,s=n.getNearestSelectionRange(i);if(!s){const d=i.getAncestors().reverse().find(h=>n.isObject(h));return d?ie._createOn(d):null}if(!s.isCollapsed)return s;const l=s.start;return i.isEqual(l)?null:new ie(l)}(r,e):function(t,n){const{start:i,end:s}=t,l=n.checkChild(i,"$text"),d=n.checkChild(s,"$text"),h=n.getLimitElement(i),m=n.getLimitElement(s);if(h===m){if(l&&d)return null;if(function(_,S,T){const I=_.nodeAfter&&!T.isLimit(_.nodeAfter)||T.checkChild(_,"$text"),P=S.nodeBefore&&!T.isLimit(S.nodeBefore)||T.checkChild(S,"$text");return I||P}(i,s,n)){const _=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),S=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),T=_?_.start:i,I=S?S.end:s;return new ie(T,I)}}const b=h&&!h.is("rootElement"),w=m&&!m.is("rootElement");if(b||w){const _=i.nodeAfter&&s.nodeBefore&&i.nodeAfter.parent===s.nodeBefore.parent,S=b&&(!_||!Bb(i.nodeAfter,n)),T=w&&(!_||!Bb(s.nodeBefore,n));let I=i,P=s;return S&&(I=fe._createBefore(Pb(h,n))),T&&(P=fe._createAfter(Pb(m,n))),new ie(I,P)}return null}(r,e)}function Pb(r,e){let t=r,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Bb(r,e){return r&&e.isSelectable(r)}function bT(r,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=r.schema;r.change(s=>{if(!t.doNotResetEntireContent&&function(m,b){const w=m.getLimitElement(b);if(!b.containsEntireContent(w))return!1;const _=b.getFirstRange();return _.start.parent==_.end.parent?!1:m.checkChild(w,"paragraph")}(i,e))return void function(m,b){const w=m.model.schema.getLimitElement(b);m.remove(m.createRangeIn(w)),Ob(m,m.createPositionAt(w,0),b)}(s,e);const l={};if(!t.doNotAutoparagraph){const m=e.getSelectedElement();m&&Object.assign(l,i.getAttributesWithProperty(m,"copyOnReplace",!0))}const[d,h]=function(m){const b=m.root.document.model,w=m.start;let _=m.end;if(b.hasContent(m,{ignoreMarkers:!0})){const S=function(T){const I=T.parent,P=I.root.document.model.schema,j=I.getAncestors({parentFirst:!0,includeSelf:!0});for(const Q of j){if(P.isLimit(Q))return null;if(P.isBlock(Q))return Q}}(_);if(S&&_.isTouching(b.createPositionAt(S,0))){const T=b.createSelection(m);b.modifySelection(T,{direction:"backward"});const I=T.getLastPosition(),P=b.createRange(I,_);b.hasContent(P,{ignoreMarkers:!0})||(_=I)}}return[sn.fromPosition(w,"toPrevious"),sn.fromPosition(_,"toNext")]}(n);d.isTouching(h)||s.remove(s.createRange(d,h)),t.leaveUnmerged||(function(m,b,w){const _=m.model;if(!Du(m.model.schema,b,w))return;const[S,T]=function(I,P){const j=I.getAncestors(),Q=P.getAncestors();let ne=0;for(;j[ne]&&j[ne]==Q[ne];)ne++;return[j[ne],Q[ne]]}(b,w);!S||!T||(!_.hasContent(S,{ignoreMarkers:!0})&&_.hasContent(T,{ignoreMarkers:!0})?zb(m,b,w,S.parent):Lb(m,b,w,S.parent))}(s,d,h),i.removeDisallowedAttributes(d.parent.getChildren(),s)),Rb(s,e,d),!t.doNotAutoparagraph&&function(m,b){const w=m.checkChild(b,"$text"),_=m.checkChild(b,"paragraph");return!w&&_}(i,d)&&Ob(s,d,e,l),d.detach(),h.detach()})}function Lb(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(s,e),r.merge(e);t.parent.isEmpty;){const l=t.parent;t=r.createPositionBefore(l),r.remove(l)}Du(r.model.schema,e,t)&&Lb(r,e,t,n)}}function zb(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(i,t);e.parent.isEmpty;){const l=e.parent;e=r.createPositionBefore(l),r.remove(l)}t=r.createPositionBefore(s),function(l,d){const h=d.nodeBefore,m=d.nodeAfter;h.name!=m.name&&l.rename(h,m.name),l.clearAttributes(h),l.setAttributes(Object.fromEntries(m.getAttributes()),h),l.merge(d)}(r,t),Du(r.model.schema,e,t)&&zb(r,e,t,n)}}function Du(r,e,t){const n=e.parent,i=t.parent;return n!=i&&!r.isLimit(n)&&!r.isLimit(i)&&function(s,l,d){const h=new ie(s,l);for(const m of h.getWalker())if(d.isLimit(m.item))return!1;return!0}(e,t,r)}function Ob(r,e,t,n={}){const i=r.createElement("paragraph");r.model.schema.setAllowedAttributes(i,n,r),r.insert(i,e),Rb(r,t,r.createPositionAt(i,0))}function Rb(r,e,t){e instanceof Xn?r.setSelection(t):e.setTo(t)}function Fb(r,e){const t=[];Array.from(r.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(r.start)||n.start.isEqual(r.start))&&(n.end.isBefore(r.end)||n.end.isEqual(r.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const s=e.createRangeOn(i);i=i.parent,e.remove(s)}})}class kT{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new D("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?ie._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new ie(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=sn.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new D("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=sn.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=sn.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof bt)||!this._canMergeLeft(e))return;const t=sn._createBefore(e);t.stickiness="toNext";const n=sn.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=sn._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=sn._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof bt)||!this._canMergeRight(e))return;const t=sn._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new D("insertcontent-invalid-insertion-position",this);this.position=fe._createAt(t.nodeBefore,"end");const n=sn.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=sn._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=sn._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof bt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof bt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Vb(r,e,t="auto"){const n=r.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const i=Ut(r.getSelectedBlocks());if(!i)return e.createRange(r.focus);if(i.isEmpty)return e.createRange(e.createPositionAt(i,0));const s=e.createPositionAfter(i);return r.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(i))}function vT(r,e,t,n,i={}){if(!r.schema.isObject(e))throw new D("insertobject-element-not-an-object",r,{object:e});let s;s=t?t instanceof To||t instanceof Xn?t:r.createSelection(t,n):r.document.selection;let l=s;i.findOptimalPosition&&r.schema.isBlock(e)&&(l=r.createSelection(Vb(s,r,i.findOptimalPosition)));const d=Ut(s.getSelectedBlocks()),h={};return d&&Object.assign(h,r.schema.getAttributesWithProperty(d,"copyOnReplace",!0)),r.change(m=>{l.isCollapsed||r.deleteContent(l,{doNotAutoparagraph:!0});let b=e;const w=l.anchor.parent;!r.schema.checkChild(w,e)&&r.schema.checkChild(w,"paragraph")&&r.schema.checkChild("paragraph",e)&&(b=m.createElement("paragraph"),m.insert(e,b)),r.schema.setAllowedAttributes(b,h,m);const _=r.insertContent(b,l);return _.isCollapsed||i.setSelection&&function(S,T,I,P){const j=S.model;if(I=="on")return void S.setSelection(T,"on");if(I!="after")throw new D("insertobject-invalid-place-parameter-value",j);let Q=T.nextSibling;if(j.schema.isInline(T))return void S.setSelection(T,"after");!(Q&&j.schema.checkChild(Q,"$text"))&&j.schema.checkChild(T.parent,"paragraph")&&(Q=S.createElement("paragraph"),j.schema.setAllowedAttributes(Q,P,S),j.insertContent(Q,S.createPositionAfter(T))),Q&&S.setSelection(Q,0)}(m,e,i.setSelection,h),_})}function wT(r,e){const{isForward:t,walker:n,unit:i,schema:s,treatEmojiAsSingleUnit:l}=r,{type:d,item:h,nextPosition:m}=e;if(d=="text")return r.unit==="word"?function(b,w){let _=b.position.textNode;for(_||(_=w?b.position.nodeAfter:b.position.nodeBefore);_&&_.is("$text");){const S=b.position.offset-_.startOffset;if(AT(_,S,w))_=w?b.position.nodeAfter:b.position.nodeBefore;else{if(CT(_.data,S,w))break;b.next()}}return b.position}(n,t):function(b,w,_){const S=b.position.textNode;if(S){const T=S.data;let I=b.position.offset-S.startOffset;for(;Qm(T,I)||w=="character"&&Zm(T,I)||_&&Q2(T,I);)b.next(),I=b.position.offset-S.startOffset}return b.position}(n,i,l);if(d==(t?"elementStart":"elementEnd")){if(s.isSelectable(h))return fe._createAt(h,t?"after":"before");if(s.checkChild(m,"$text"))return m}else{if(s.isLimit(h))return void n.skip(()=>!0);if(s.checkChild(m,"$text"))return m}}function _T(r,e){const t=r.root,n=fe._createAt(t,e?"end":0);return e?new ie(r,n):new ie(n,r)}function CT(r,e,t){const n=e+(t?0:-1);return' ,.?!:;"-()'.includes(r.charAt(n))}function AT(r,e,t){return e===(t?r.offsetSize:0)}class yT extends Pe(){constructor(){super(),this.markers=new uT,this.document=new dT(this),this.schema=new OD,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),mT(this),this.document.registerPostFixer(db)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Ur,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){D.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Ur):e instanceof Ur||(e=new Ur(e)):e=new Ur,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){D.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(i,s,l,d){return i.change(h=>{let m;m=l?l instanceof To||l instanceof Xn?l:h.createSelection(l,d):i.document.selection,m.isCollapsed||i.deleteContent(m,{doNotAutoparagraph:!0});const b=new kT(i,h,m.anchor),w=[];let _;if(s.is("documentFragment")){if(s.markers.size){const I=[];for(const[P,j]of s.markers){const{start:Q,end:ne}=j,ge=Q.isEqual(ne);I.push({position:Q,name:P,isCollapsed:ge},{position:ne,name:P,isCollapsed:ge})}I.sort(({position:P},{position:j})=>P.isBefore(j)?1:-1);for(const{position:P,name:j,isCollapsed:Q}of I){let ne=null,ge=null;const Oe=P.parent===s&&P.isAtStart,nt=P.parent===s&&P.isAtEnd;Oe||nt?Q&&(ge=Oe?"start":"end"):(ne=h.createElement("$marker"),h.insert(ne,P)),w.push({name:j,element:ne,collapsed:ge})}}_=s.getChildren()}else _=[s];b.handleNodes(_);let S=b.getSelectionRange();if(s.is("documentFragment")&&w.length){const I=S?co.fromRange(S):null,P={};for(let j=w.length-1;j>=0;j--){const{name:Q,element:ne,collapsed:ge}=w[j],Oe=!P[Q];if(Oe&&(P[Q]=[]),ne){const nt=h.createPositionAt(ne,"before");P[Q].push(nt),h.remove(ne)}else{const nt=b.getAffectedRange();if(!nt){ge&&P[Q].push(b.position);continue}ge?P[Q].push(nt[ge]):P[Q].push(Oe?nt.start:nt.end)}}for(const[j,[Q,ne]]of Object.entries(P))Q&&ne&&Q.root===ne.root&&h.addMarker(j,{usingOperation:!0,affectsData:!0,range:new ie(Q,ne)});I&&(S=I.toRange(),I.detach())}S&&(m instanceof Xn?h.setSelection(S):m.setTo(S));const T=b.getAffectedRange()||i.createRange(m.anchor);return b.destroy(),T})}(this,e,t,n)}insertObject(e,t,n,i){return vT(this,e,t,n,i)}deleteContent(e,t){bT(this,e,t)}modifySelection(e,t){(function(n,i,s={}){const l=n.schema,d=s.direction!="backward",h=s.unit?s.unit:"character",m=!!s.treatEmojiAsSingleUnit,b=i.focus,w=new Do({boundaries:_T(b,d),singleCharacters:!0,direction:d?"forward":"backward"}),_={walker:w,schema:l,isForward:d,unit:h,treatEmojiAsSingleUnit:m};let S;for(;S=w.next();){if(S.done)return;const T=wT(_,S.value);if(T)return void(i instanceof Xn?n.change(I=>{I.setSelectionFocus(T)}):i.setFocus(T))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(i=>{const s=i.createDocumentFragment(),l=n.getFirstRange();if(!l||l.isCollapsed)return s;const d=l.start.root,h=l.start.getCommonPath(l.end),m=d.getNodeByPath(h);let b;b=l.start.parent==l.end.parent?l:i.createRange(i.createPositionAt(m,l.start.path[h.length]),i.createPositionAt(m,l.end.path[h.length]+1));const w=b.end.offset-b.start.offset;for(const _ of b.getItems({shallow:!0}))_.is("$textProxy")?i.appendText(_.data,_.getAttributes(),s):i.append(i.cloneElement(_,!0),s);if(b!=l){const _=l._getTransformedByMove(b.start,i.createPositionAt(s,0),w)[0],S=i.createRange(i.createPositionAt(s,0),_.start);Fb(i.createRange(_.end,i.createPositionAt(s,"end")),i),Fb(S,i)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof ie?e:ie._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:s=!1}=t;if(!s){for(const l of this.markers.getMarkersIntersectingRange(n))if(l.affectsData)return!0}for(const l of n.getItems())if(this.schema.isContent(l)&&(!l.is("$textProxy")||!i||l.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new fe(e,t,n)}createPositionAt(e,t){return fe._createAt(e,t)}createPositionAfter(e){return fe._createAfter(e)}createPositionBefore(e){return fe._createBefore(e)}createRange(e,t){return new ie(e,t)}createRangeIn(e){return ie._createIn(e)}createRangeOn(e){return ie._createOn(e)}createSelection(...e){return new To(...e)}createBatch(e){return new Ur(e)}createOperationFromJSON(e){return eT.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new fT(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class xT extends ai{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class Ll extends ai{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Wr{constructor(e){this.document=e}createDocumentFragment(e){return new Qi(this.document,e)}createElement(e,t,n){return new Fn(this.document,e,t,n)}createText(e){return new _t(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const i=n.getChildIndex(e);return this.removeChildren(i,1,n),this.insertChild(i,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Fn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Dn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return xe._createAt(e,t)}createPositionAfter(e){return xe._createAfter(e)}createPositionBefore(e){return xe._createBefore(e)}createRange(e,t){return new He(e,t)}createRangeOn(e){return He._createOn(e)}createRangeIn(e){return He._createIn(e)}createSelection(...e){return new Eo(...e)}}const ET=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,ST=/^rgb\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}[0-9]{1,3}[ %]?\)$/i,DT=/^rgba\([ ]?([0-9]{1,3}[ %]?,[ ]?){3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,TT=/^hsl\([ ]?([0-9]{1,3}[ %]?[,]?[ ]*){3}(1|[0-9]+%|[0]?\.?[0-9]+)?\)$/i,IT=/^hsla\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,MT=new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","activeborder","activecaption","appworkspace","background","buttonface","buttonhighlight","buttonshadow","buttontext","captiontext","graytext","highlight","highlighttext","inactiveborder","inactivecaption","inactivecaptiontext","infobackground","infotext","menu","menutext","scrollbar","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","window","windowframe","windowtext","rebeccapurple","currentcolor","transparent"]);function NT(r){return r.startsWith("#")?ET.test(r):r.startsWith("rgb")?ST.test(r)||DT.test(r):r.startsWith("hsl")?TT.test(r)||IT.test(r):MT.has(r.toLowerCase())}const PT=/^([+-]?[0-9]*([.][0-9]+)?(px|cm|mm|in|pc|pt|ch|em|ex|rem|vh|vw|vmin|vmax)|0)$/,BT=/^[+-]?[0-9]*([.][0-9]+)?%$/,LT=["repeat-x","repeat-y","repeat","space","round","no-repeat"];function zT(r){return LT.includes(r)}const OT=["center","top","bottom","left","right"];function RT(r){return OT.includes(r)}const FT=["fixed","scroll","local"];function VT(r){return FT.includes(r)}const jT=/^url\(/;function HT(r){return jT.test(r)}function UT(r=""){if(r==="")return{top:void 0,right:void 0,bottom:void 0,left:void 0};const e=jb(r),t=e[0],n=e[2]||t,i=e[1]||t;return{top:t,bottom:n,right:i,left:e[3]||i}}function $T({top:r,right:e,bottom:t,left:n}){const i=[];return n!==e?i.push(r,e,t,n):t!==r?i.push(r,e,t):e!==r?i.push(r,e):i.push(r),i.join(" ")}function jb(r){return r.replace(/, /g,",").split(" ").map(e=>e.replace(/,/g,", "))}function WT(r){r.setNormalizer("background",e=>{const t={},n=jb(e);for(const i of n)zT(i)?(t.repeat=t.repeat||[],t.repeat.push(i)):RT(i)?(t.position=t.position||[],t.position.push(i)):VT(i)?t.attachment=i:NT(i)?t.color=i:HT(i)&&(t.image=i);return{path:"background",value:t}}),r.setNormalizer("background-color",e=>({path:"background.color",value:e})),r.setReducer("background",e=>{const t=[];return t.push(["background-color",e.color]),t}),r.setStyleRelation("background",["background-color"])}function GT(r){var e,t;r.setNormalizer("margin",(e="margin",n=>({path:e,value:UT(n)}))),r.setNormalizer("margin-top",n=>({path:"margin.top",value:n})),r.setNormalizer("margin-right",n=>({path:"margin.right",value:n})),r.setNormalizer("margin-bottom",n=>({path:"margin.bottom",value:n})),r.setNormalizer("margin-left",n=>({path:"margin.left",value:n})),r.setReducer("margin",(t="margin",n=>{const{top:i,right:s,bottom:l,left:d}=n,h=[];return[i,s,d,l].every(m=>!!m)?h.push([t,$T(n)]):(i&&h.push([t+"-top",i]),s&&h.push([t+"-right",s]),l&&h.push([t+"-bottom",l]),d&&h.push([t+"-left",d])),h})),r.setStyleRelation("margin",["margin-top","margin-right","margin-bottom","margin-left"])}class qT{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new D("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class KT extends Tn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(s,l)=>{this.editor.execute(i),l()}}super.set(e,t,n)}}class YT extends Pe(){constructor(e={}){super();const t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new Z2({language:n}),this._context._addEditor(this,!e.context);const i=Array.from(t.builtinPlugins||[]);this.config=new Tm(e,t.defaultConfig),this.config.define("plugins",i),this.config.define(this._context._getEditorConfig()),this.plugins=new tp(this,i,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new qT,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new yT;const s=new NS;this.data=new JD(this.model,s),this.editing=new LD(this.model,s),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new XD([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new KT(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new D("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new D("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new D("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],i=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(i),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(n){D.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}class QT{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Tu(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new D("componentfactory-item-missing",this,{name:e});return this._components.get(Tu(e)).callback(this.editor.locale)}has(e){return this._components.has(Tu(e))}}function Tu(r){return String(r).toLowerCase()}class Wo extends vn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new D("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const s of e)i.delegate(s).to(t)}),this.on("remove",(n,i)=>{for(const s of e)i.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}class to extends oe(){constructor(e){super(),Object.assign(this,Wb($b(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new D("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Ol(n)?yield n:Iu(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new ZT({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,s)=>new Hb({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:s})}}static extend(e,t){if(e._isRendered)throw new D("template-extend-render",[this,e]);Yb(e,Wb($b(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new D("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),zl(this.text)?this._bindToObservable({schema:this.text,updater:JT(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const s=t.getAttribute(i),l=this.attributes[i];n&&(n.attributes[i]=s);const d=Qb(l)?l[0].ns:null;if(zl(l)){const h=Qb(l)?l[0].value:l;n&&Zb(i)&&h.unshift(s),this._bindToObservable({schema:h,updater:XT(t,i,d),data:e})}else if(i=="style"&&typeof l[0]!="string")this._renderStyleAttribute(l[0],e);else{n&&s&&Zb(i)&&l.unshift(s);const h=l.map(m=>m&&m.value||m).reduce((m,b)=>m.concat(b),[]).reduce(qb,"");Gr(h)||t.setAttributeNS(d,i,h)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const s=e[i];zl(s)?this._bindToObservable({schema:[s],updater:eI(n,i),data:t}):n.style[i]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let s=0;for(const l of this.children)if(Mu(l)){if(!i){l.setParent(t);for(const d of l)n.appendChild(d.element)}}else if(Ol(l))i||(l.isRendered||l.render(),n.appendChild(l.element));else if(ri(l))n.appendChild(l);else if(i){const d={children:[],bindings:[],attributes:{}};e.revertData.children.push(d),l._renderNode({intoFragment:!1,node:n.childNodes[s++],isApplying:!0,revertData:d})}else n.appendChild(l.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[s,l]=t.split("@");return i.activateDomEventListener(s,l,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;Ub(e,t,n);const s=e.filter(l=>!Gr(l)).filter(l=>l.observable).map(l=>l.activateAttributeListener(e,t,n));i&&i.bindings.push(s)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const s of i)s();if(t.text)return void(e.textContent=t.text);const n=e;for(const i in t.attributes){const s=t.attributes[i];s===null?n.removeAttribute(i):n.setAttribute(i,s)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class ha{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>Ub(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class ZT extends ha{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(s,l)=>{t&&!l.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(l):this.observable.fire(this.eventNameOrFunction,l))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class Hb extends ha{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!Gr(super.getValue(e))&&(this.valueIfTrue||!0)}}function zl(r){return!!r&&(r.value&&(r=r.value),Array.isArray(r)?r.some(zl):r instanceof ha)}function Ub(r,e,{node:t}){const n=function(s,l){return s.map(d=>d instanceof ha?d.getValue(l):d)}(r,t);let i;i=r.length==1&&r[0]instanceof Hb?n[0]:n.reduce(qb,""),Gr(i)?e.remove():e.set(i)}function JT(r){return{set(e){r.textContent=e},remove(){r.textContent=""}}}function XT(r,e,t){return{set(n){r.setAttributeNS(t,e,n)},remove(){r.removeAttributeNS(t,e)}}}function eI(r,e){return{set(t){r.style[e]=t},remove(){r.style[e]=null}}}function $b(r){return Dm(r,e=>{if(e&&(e instanceof ha||Iu(e)||Ol(e)||Mu(e)))return e})}function Wb(r){if(typeof r=="string"?r=function(e){return{text:[e]}}(r):r.text&&function(e){e.text=en(e.text)}(r),r.on&&(r.eventListeners=function(e){for(const t in e)Gb(e,t);return e}(r.on),delete r.on),!r.text){r.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=en(t[n].value)),Gb(t,n)}(r.attributes);const e=[];if(r.children)if(Mu(r.children))e.push(r.children);else for(const t of r.children)Iu(t)||Ol(t)||ri(t)?e.push(t):e.push(new to(t));r.children=e}return r}function Gb(r,e){r[e]=en(r[e])}function qb(r,e){return Gr(e)?r:Gr(r)?e:`${r} ${e}`}function Kb(r,e){for(const t in e)r[t]?r[t].push(...e[t]):r[t]=e[t]}function Yb(r,e){if(e.attributes&&(r.attributes||(r.attributes={}),Kb(r.attributes,e.attributes)),e.eventListeners&&(r.eventListeners||(r.eventListeners={}),Kb(r.eventListeners,e.eventListeners)),e.text&&r.text.push(...e.text),e.children&&e.children.length){if(r.children.length!=e.children.length)throw new D("ui-template-extend-children-mismatch",r);let t=0;for(const n of e.children)Yb(r.children[t++],n)}}function Gr(r){return!r&&r!==0}function Ol(r){return r instanceof Xe}function Iu(r){return r instanceof to}function Mu(r){return r instanceof Wo}function Qb(r){return De(r[0])&&r[0].ns}function Zb(r){return r=="class"||r=="style"}var Jb=f(4793),tI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Jb.Z,tI),Jb.Z.locals;class Xe extends si(Pe()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new vn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=to.bind(this,this)}createCollection(e){const t=new Wo(e);return this._viewCollections.add(t),t}registerChild(e){ye(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){ye(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new to(e)}extendTemplate(e){to.extend(this.template,e)}render(){if(this.isRendered)throw new D("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}var Xb=f(8793),nI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Xb.Z,nI),Xb.Z.locals;const ek=Rm("px"),tk=tt.document.body;class wn extends Xe{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",ek),left:t.to("left",ek)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=wn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:tk,fitInViewport:!0},e),i=wn._getOptimalPosition(n),s=parseInt(i.left),l=parseInt(i.top),d=i.name,h=i.config||{},{withArrow:m=!0}=h;this.top=l,this.left=s,this.position=d,this.withArrow=m}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=Nu(e.target),n=e.limiter?Nu(e.limiter):tk;this.listenTo(tt.document,"scroll",(i,s)=>{const l=s.target,d=t&&l.contains(t),h=n&&l.contains(n);!d&&!h&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(tt.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(tt.document,"scroll"),this.stopListening(tt.window,"resize")}}function Nu(r){return Zs(r)?r:ml(r)?r.commonAncestorContainer:typeof r=="function"?Nu(r()):null}function nk(r={}){const{sideOffset:e=wn.arrowSideOffset,heightOffset:t=wn.arrowHeightOffset,stickyVerticalOffset:n=wn.stickyVerticalOffset,config:i}=r;return{northWestArrowSouthWest:(d,h)=>({top:s(d,h),left:d.left-e,name:"arrow_sw",...i&&{config:i}}),northWestArrowSouthMiddleWest:(d,h)=>({top:s(d,h),left:d.left-.25*h.width-e,name:"arrow_smw",...i&&{config:i}}),northWestArrowSouth:(d,h)=>({top:s(d,h),left:d.left-h.width/2,name:"arrow_s",...i&&{config:i}}),northWestArrowSouthMiddleEast:(d,h)=>({top:s(d,h),left:d.left-.75*h.width+e,name:"arrow_sme",...i&&{config:i}}),northWestArrowSouthEast:(d,h)=>({top:s(d,h),left:d.left-h.width+e,name:"arrow_se",...i&&{config:i}}),northArrowSouthWest:(d,h)=>({top:s(d,h),left:d.left+d.width/2-e,name:"arrow_sw",...i&&{config:i}}),northArrowSouthMiddleWest:(d,h)=>({top:s(d,h),left:d.left+d.width/2-.25*h.width-e,name:"arrow_smw",...i&&{config:i}}),northArrowSouth:(d,h)=>({top:s(d,h),left:d.left+d.width/2-h.width/2,name:"arrow_s",...i&&{config:i}}),northArrowSouthMiddleEast:(d,h)=>({top:s(d,h),left:d.left+d.width/2-.75*h.width+e,name:"arrow_sme",...i&&{config:i}}),northArrowSouthEast:(d,h)=>({top:s(d,h),left:d.left+d.width/2-h.width+e,name:"arrow_se",...i&&{config:i}}),northEastArrowSouthWest:(d,h)=>({top:s(d,h),left:d.right-e,name:"arrow_sw",...i&&{config:i}}),northEastArrowSouthMiddleWest:(d,h)=>({top:s(d,h),left:d.right-.25*h.width-e,name:"arrow_smw",...i&&{config:i}}),northEastArrowSouth:(d,h)=>({top:s(d,h),left:d.right-h.width/2,name:"arrow_s",...i&&{config:i}}),northEastArrowSouthMiddleEast:(d,h)=>({top:s(d,h),left:d.right-.75*h.width+e,name:"arrow_sme",...i&&{config:i}}),northEastArrowSouthEast:(d,h)=>({top:s(d,h),left:d.right-h.width+e,name:"arrow_se",...i&&{config:i}}),southWestArrowNorthWest:d=>({top:l(d),left:d.left-e,name:"arrow_nw",...i&&{config:i}}),southWestArrowNorthMiddleWest:(d,h)=>({top:l(d),left:d.left-.25*h.width-e,name:"arrow_nmw",...i&&{config:i}}),southWestArrowNorth:(d,h)=>({top:l(d),left:d.left-h.width/2,name:"arrow_n",...i&&{config:i}}),southWestArrowNorthMiddleEast:(d,h)=>({top:l(d),left:d.left-.75*h.width+e,name:"arrow_nme",...i&&{config:i}}),southWestArrowNorthEast:(d,h)=>({top:l(d),left:d.left-h.width+e,name:"arrow_ne",...i&&{config:i}}),southArrowNorthWest:d=>({top:l(d),left:d.left+d.width/2-e,name:"arrow_nw",...i&&{config:i}}),southArrowNorthMiddleWest:(d,h)=>({top:l(d),left:d.left+d.width/2-.25*h.width-e,name:"arrow_nmw",...i&&{config:i}}),southArrowNorth:(d,h)=>({top:l(d),left:d.left+d.width/2-h.width/2,name:"arrow_n",...i&&{config:i}}),southArrowNorthMiddleEast:(d,h)=>({top:l(d),left:d.left+d.width/2-.75*h.width+e,name:"arrow_nme",...i&&{config:i}}),southArrowNorthEast:(d,h)=>({top:l(d),left:d.left+d.width/2-h.width+e,name:"arrow_ne",...i&&{config:i}}),southEastArrowNorthWest:d=>({top:l(d),left:d.right-e,name:"arrow_nw",...i&&{config:i}}),southEastArrowNorthMiddleWest:(d,h)=>({top:l(d),left:d.right-.25*h.width-e,name:"arrow_nmw",...i&&{config:i}}),southEastArrowNorth:(d,h)=>({top:l(d),left:d.right-h.width/2,name:"arrow_n",...i&&{config:i}}),southEastArrowNorthMiddleEast:(d,h)=>({top:l(d),left:d.right-.75*h.width+e,name:"arrow_nme",...i&&{config:i}}),southEastArrowNorthEast:(d,h)=>({top:l(d),left:d.right-h.width+e,name:"arrow_ne",...i&&{config:i}}),westArrowEast:(d,h)=>({top:d.top+d.height/2-h.height/2,left:d.left-h.width-t,name:"arrow_e",...i&&{config:i}}),eastArrowWest:(d,h)=>({top:d.top+d.height/2-h.height/2,left:d.right+t,name:"arrow_w",...i&&{config:i}}),viewportStickyNorth:(d,h,m)=>d.getIntersection(m)?{top:m.top+n,left:d.left+d.width/2-h.width/2,name:"arrowless",config:{withArrow:!1,...i}}:null};function s(d,h){return d.top-h.height-t}function l(d){return d.bottom+t}}wn.arrowSideOffset=25,wn.arrowHeightOffset=10,wn.stickyVerticalOffset=20,wn._getOptimalPosition=Vm,wn.defaultPositions=nk();var ok=f(3332),oI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(ok.Z,oI),ok.Z.locals;const ik="ck-tooltip";class on extends si(){constructor(e){if(super(),on._editors.add(e),on._instance)return on._instance;on._instance=this,this.tooltipTextView=new Xe(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new wn(e.locale),this.balloonPanelView.class=ik,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=na(this._pinTooltip,600),this.listenTo(tt.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(tt.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(tt.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(tt.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(tt.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){const t=e.ui.view&&e.ui.view.body;on._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),on._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),on._instance=null)}static getPositioningFunctions(e){const t=on.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){const n=Pu(t);var i;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(i=n).dataset.ckeTooltipText,position:i.dataset.ckeTooltipPosition||"s",cssClass:i.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!Zs(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const i=Pu(t),s=Pu(n);i&&i!==s&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:i}){const s=Ut(on._editors.values()).ui.view.body;s.has(this.balloonPanelView)||s.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:on.getPositioningFunctions(n)}),this._resizeObserver=new Tt(e,()=>{$i(e)||this._unpinTooltip()}),this.balloonPanelView.class=[ik,i].filter(l=>l).join(" ");for(const l of on._editors)this.listenTo(l.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of on._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){$i(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:on.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function Pu(r){return Zs(r)?r.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}on.defaultBalloonPositions=nk({heightOffset:5,sideOffset:13}),on._editors=new Set,on._instance=null;class iI extends Pe(){constructor(e){super(),this.editor=e,this.componentFactory=new QT(e),this.focusTracker=new gn,this.tooltipManager=new on(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(s,l)=>{const d=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(d)&&!Array.from(t.domRoots.values()).includes(d)&&(n=d);const h=this._getCurrentFocusedToolbarDefinition();h&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let m=0;m<i.length;m++){const b=i.shift();if(i.push(b),b!==h&&this._focusFocusableCandidateToolbar(b)){h&&h.options.afterBlur&&h.options.afterBlur();break}}l()}),e.keystrokes.set("Esc",(s,l)=>{const d=this._getCurrentFocusedToolbarDefinition();d&&(n?(n.focus(),n=null):e.editing.view.focus(),d.options.afterBlur&&d.options.afterBlur(),l())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;($i(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>rk(t)-rk(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!$i(t.element)&&(t.focus(),!0)}}function rk(r){const{toolbarView:e,options:t}=r;let n=10;return $i(e.element)&&n--,t.isContextual&&n--,n}function Rl(r){return class extends r{setData(e){this.data.set(e)}getData(e){return this.data.get(e)}}}{const r=Rl(Object);Rl.setData=r.prototype.setData,Rl.getData=r.prototype.getData}function Bu(r){return class extends r{updateSourceElement(e=this.data.get()){if(!this.sourceElement)throw new D("editor-missing-sourceelement",this);const t=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;F2(this.sourceElement,t||n?e:"")}}}Bu.updateSourceElement=Bu(Object).prototype.updateSourceElement;class sk extends kl{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new vn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new D("pendingactions-add-invalid-message",this);const t=new(Pe());return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const mt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};class rI extends iI{constructor(e,t){super(e),this.view=t}init(){const e=this.editor,t=this.view,n=e.editing.view,i=t.editable,s=n.document.getRoot();i.name=s.rootName,t.render();const l=i.element;this.setEditableElement(i.name,l),t.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(l),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view;t.toolbar.fillFromConfig(e.config.get("toolbar"),this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement,s=e.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");s&&op({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}function Lu({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(i,s)=>{if(!e())return;const l=typeof s.composedPath=="function"?s.composedPath():[];for(const d of n)if(d.contains(s.target)||l.includes(d))return;t()})}function zu(r){const e=r;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Ou({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}function Ru({keystrokeHandler:r,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:i}){const s=typeof n=="number"?()=>n:n;function l(m){return b=>{const w=t.find(T=>T.element===e.focusedElement),_=t.getIndex(w),S=m(_,t);t.get(S).focus(),b.stopPropagation(),b.preventDefault()}}function d(m,b){return m===b-1?0:m+1}function h(m,b){return m===0?b-1:m-1}r.set("arrowright",l((m,b)=>i==="rtl"?h(m,b.length):d(m,b.length))),r.set("arrowleft",l((m,b)=>i==="rtl"?d(m,b.length):h(m,b.length))),r.set("arrowup",l((m,b)=>{let w=m-s();return w<0&&(w=m+s()*Math.floor(b.length/s()),w>b.length-1&&(w-=s())),w})),r.set("arrowdown",l((m,b)=>{let w=m+s();return w>b.length-1&&(w=m%s()),w}))}class sI extends Wo{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new to({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=fn(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var ak=f(6574),aI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(ak.Z,aI),ak.Z.locals;class tr extends Xe{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:i}of Array.from(e.attributes))tr.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,i);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}tr.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var lk=f(4906),lI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(lk.Z,lI),lk.Z.locals;class st extends Xe{constructor(e){super(e);const t=this.bindTemplate,n=R();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new tr,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};k.isSafari&&(i.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new Xe,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Km(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Km(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var ck=f(5332),cI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(ck.Z,cI),ck.Z.locals;class fa extends st{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}function dI(r){return typeof r=="string"?{model:r,label:r,hasBorder:!1,view:{name:"span",styles:{color:r}}}:{model:r.color,label:r.label||r.color,hasBorder:r.hasBorder!==void 0&&r.hasBorder,view:{name:"span",styles:{color:`${r.color}`}}}}class dk extends st{constructor(e){super(e);const t=this.bindTemplate;this.set("color",void 0),this.set("hasBorder",!1),this.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',this.extendTemplate({attributes:{style:{backgroundColor:t.to("color")},class:["ck","ck-color-grid__tile",t.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}var uk=f(6781),uI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(uk.Z,uI),uk.Z.locals;class hk extends Xe{constructor(e,t){super(e);const n=t&&t.colorDefinitions||[];this.columns=t&&t.columns?t.columns:5;const i={gridTemplateColumns:`repeat( ${this.columns}, 1fr)`};this.set("selectedColor",void 0),this.items=this.createCollection(),this.focusTracker=new gn,this.keystrokes=new Tn,this.items.on("add",(s,l)=>{l.isOn=l.color===this.selectedColor}),n.forEach(s=>{const l=new dk;l.set({color:s.color,label:s.label,tooltip:!0,hasBorder:s.options.hasBorder}),l.on("execute",()=>{this.fire("execute",{value:s.color,hasBorder:s.options.hasBorder,label:s.label})}),this.items.add(l)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(s,l,d)=>{for(const h of this.items)h.isOn=h.color===d})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),Ru({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:this.columns,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}}const Fu='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class fk extends st{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new tr;return e.content=Fu,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var gk=f(7686),hI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(gk.Z,hI),gk.Z.locals;class Fl extends Xe{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Tn,this.focusTracker=new gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new st;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new st,t=e.bindTemplate;return e.icon=Fu,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class fI extends Xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():F("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var mk=f(5485),gI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(mk.Z,gI),mk.Z.locals;class qr extends Xe{constructor(e,t,n){super(e);const i=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Tn,this.focusTracker=new gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",s=>!s)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":i.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,i)=>{i&&(this.panelPosition==="auto"?this.panelView.position=qr._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:i,northEast:s,northWest:l,southMiddleEast:d,southMiddleWest:h,northMiddleEast:m,northMiddleWest:b}=qr.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,d,h,e,s,l,m,b,t]:[i,n,h,d,e,l,s,b,m,t]}}qr.defaultPanelPositions={south:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/2,name:"s"}),southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),southMiddleEast:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/4,name:"sme"}),southMiddleWest:(r,e)=>({top:r.bottom,left:r.left-3*(e.width-r.width)/4,name:"smw"}),north:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/2,name:"n"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),northMiddleEast:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/4,name:"nme"}),northMiddleWest:(r,e)=>({top:r.top-e.height,left:r.left-3*(e.width-r.width)/4,name:"nmw"})},qr._getOptimalPosition=Vm;class di{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(s,l)=>{this[t](),l()})}}get first(){return this.focusables.find(Vu)||null}get last(){return this.focusables.filter(Vu).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let i=(t+n+e)%n;do{const s=this.focusables.get(i);if(Vu(s))return s;i=(i+n+e)%n}while(i!==t);return null}}function Vu(r){return!(!r.focus||!$i(r.element))}class pk extends Xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class mI extends Xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var bk=f(5542),pI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(bk.Z,pI),bk.Z.locals;const{threeVerticalDots:kk}=mt,bI={alignLeft:mt.alignLeft,bold:mt.bold,importExport:mt.importExport,paragraph:mt.paragraph,plus:mt.plus,text:mt.text,threeVerticalDots:mt.threeVerticalDots};class ju extends Xe{constructor(e,t){super(e);const n=this.bindTemplate,i=this.t;this.options=t||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new gn,this.keystrokes=new Tn,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new kI(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new di({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const l=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var d;this.options.shouldGroupWhenFull&&this.options.isFloating&&l.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:l,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(d=this,d.bindTemplate.to(h=>{h.target===d.element&&h.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new wI(this):new vI(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){const i=function(d){return Array.isArray(d)?{items:d,removeItems:[]}:d?Object.assign({items:[],removeItems:[]},d):{items:[],removeItems:[]}}(e),s=n||i.removeItems,l=this._cleanItemsConfiguration(i.items,t,s).map(d=>De(d)?this._createNestedToolbarDropdown(d,t,s):d==="|"?new pk:d==="-"?new mI:t.create(d)).filter(d=>!!d);this.items.addMany(l)}_cleanItemsConfiguration(e,t,n){const i=e.filter((s,l,d)=>s==="|"||n.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(F("toolbarview-line-break-ignored-when-grouping-items",d),!1):!(!De(s)&&!t.has(s))||(F("toolbarview-item-unavailable",{item:s}),!1)));return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(e){const t=l=>l!=="-"&&l!=="|",n=e.length,i=e.findIndex(t);if(i===-1)return[];const s=n-e.slice().reverse().findIndex(t);return e.slice(i,s).filter((l,d,h)=>t(l)?!0:!(d>0&&h[d-1]===l))}_createNestedToolbarDropdown(e,t,n){let{label:i,icon:s,items:l,tooltip:d=!0,withText:h=!1}=e;if(l=this._cleanItemsConfiguration(l,t,n),!l.length)return null;const m=Nn(this.locale);return i||F("toolbarview-nested-toolbar-dropdown-missing-label",e),m.class="ck-toolbar__nested-toolbar-dropdown",m.buttonView.set({label:i,tooltip:d,withText:!!h}),s!==!1?m.buttonView.icon=bI[s]||s||kk:m.buttonView.withText=!0,Vl(m,[]),m.toolbarView.fillFromConfig(l,t,n),m}}class kI extends Xe{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class vI{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class wI{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),e.children.on("change",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const i=n.index,s=Array.from(n.added);for(const l of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(l):this.ungroupedItems.remove(l);for(let l=i;l<i+s.length;l++){const d=s[l-i];l>this.ungroupedItems.length?this.groupedItems.add(d,l-this.ungroupedItems.length):this.ungroupedItems.add(d,l)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!$i(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new xt(e.lastChild),i=new xt(e);if(!this.cachedPadding){const s=tt.window.getComputedStyle(e),l=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[l])}return t==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new Tt(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new pk),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Nn(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",Vl(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:kk}),n.toolbarView.items.bindTo(this.groupedItems).using(i=>i),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var vk=f(1046),_I={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(vk.Z,_I),vk.Z.locals;class CI extends Xe{constructor(e){super(e),this.items=this.createCollection(),this.focusTracker=new gn,this.keystrokes=new Tn,this._focusCycler=new di({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class wk extends Xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class AI extends Xe{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var _k=f(7339),yI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(_k.Z,yI),_k.Z.locals;var Ck=f(3949),xI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Ck.Z,xI),Ck.Z.locals;function Nn(r,e=fk){const t=new e(r),n=new fI(r),i=new qr(r,t,n);return t.bind("isEnabled").to(i),t instanceof Fl?t.arrowView.bind("isOn").to(i,"isOpen"):t.bind("isOn").to(i,"isOpen"),function(s){(function(l){l.on("render",()=>{Lu({emitter:l,activator:()=>l.isOpen,callback:()=>{l.isOpen=!1},contextElements:[l.element]})})})(s),function(l){l.on("execute",d=>{d.source instanceof fa||(l.isOpen=!1)})}(s),function(l){l.focusTracker.on("change:isFocused",(d,h,m)=>{l.isOpen&&!m&&(l.isOpen=!1)})}(s),function(l){l.keystrokes.set("arrowdown",(d,h)=>{l.isOpen&&(l.panelView.focus(),h())}),l.keystrokes.set("arrowup",(d,h)=>{l.isOpen&&(l.panelView.focusLast(),h())})}(s),function(l){l.on("change:isOpen",(d,h,m)=>{m||l.panelView.element.contains(tt.document.activeElement)&&l.buttonView.focus()})}(s),function(l){l.on("change:isOpen",(d,h,m)=>{m&&l.panelView.focus()},{priority:"low"})}(s)}(i),i}function Vl(r,e,t={}){const n=r.locale,i=n.t,s=r.toolbarView=new ju(n);s.set("ariaLabel",i("Dropdown toolbar")),r.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(l=>s.items.add(l)),t.enableActiveItemFocusOnDropdownOpen&&jl(r,()=>s.items.find(l=>l.isOn)),r.panelView.children.add(s),s.items.delegate("execute").to(r)}function ga(r,e){const t=r.locale,n=r.listView=new CI(t);n.items.bindTo(e).using(i=>{if(i.type==="separator")return new AI(t);if(i.type==="button"||i.type==="switchbutton"){const s=new wk(t);let l;return l=i.type==="button"?new st(t):new fa(t),l.bind(...Object.keys(i.model)).to(i.model),l.delegate("execute").to(s),s.children.add(l),s}return null}),r.panelView.children.add(n),n.items.delegate("execute").to(r),jl(r,()=>n.items.find(i=>i instanceof wk&&i.children.first.isOn))}function jl(r,e){r.on("change:isOpen",()=>{if(!r.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():F("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:B.low-10})}var Ak=f(9688),EI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Ak.Z,EI),Ak.Z.locals;class SI extends Xe{constructor(e){super(e),this.body=new sI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var yk=f(3662),DI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(yk.Z,DI),yk.Z.locals;class xk extends Xe{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${R()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class TI extends Xe{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const s=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",s),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(s,l,d)=>{d?n(i):t(i)})}(this):t(this)}}class II extends TI{constructor(e,t,n,i={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var Ek=f(8847),MI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Ek.Z,MI),Ek.Z.locals;var Sk=f(4879),NI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Sk.Z,NI),Sk.Z.locals;class Dk extends Xe{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new gn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class PI extends Dk{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}class BI extends Dk{constructor(e,{min:t,max:n,step:i}={}){super(e);const s=this.bindTemplate;this.set("min",t),this.set("max",n),this.set("step",i),this.extendTemplate({attributes:{type:"number",class:["ck-input-number"],min:s.to("min"),max:s.to("max"),step:s.to("step")}})}}var Tk=f(2577),LI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Tk.Z,LI),Tk.Z.locals;class Hl extends Xe{constructor(e,t){super(e);const n=`ck-labeled-field-view-${R()}`,i=`ck-labeled-field-view-status-${R()}`;this.fieldView=t(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(l,d)=>l||d);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",l=>!l),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new xk(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new Xe(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function Hu(r,e,t){const n=new PI(r.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}function zI(r,e,t){const n=new BI(r.locale);return n.set({id:e,ariaDescribedById:t,inputMode:"numeric"}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}class Uu extends kl{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class ma extends Pe(){constructor(e,t){super(),t&&Op(this,t),e&&this.set(e)}}var Ik=f(4650),OI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Ik.Z,OI),Ik.Z.locals;var Mk=f(7676),RI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Mk.Z,RI),Mk.Z.locals;const Ul=Rm("px");class $l extends ae{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new wn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new D("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new D("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new D("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new FI(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new VI(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class FI extends Xe{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new gn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new st(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class VI extends Xe{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Ul),left:n.to("left",Ul),width:n.to("width",Ul),height:n.to("height",Ul)}},children:this.content}),this.on("change:numberOfPanels",(i,s,l,d)=>{l>d?this._addPanels(l-d):this._removePanels(d-l),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Xe;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new xt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Nk=f(5868),jI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Nk.Z,jI),Nk.Z.locals;var Pk=f(9695),HI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Re()(Pk.Z,HI),Pk.Z.locals;class UI extends SI{constructor(e,t,n={}){super(e);const i=e.t;this.toolbar=new ju(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new II(e,t,n.editableElement,{label:s=>i("Rich Text Editor. Editing area: %0",s.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:e.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}class $I extends Rl(Bu(YT)){constructor(e,t={}){if(!Wl(e)&&t.initialData!==void 0)throw new D("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Wl(s)?(l=s,l instanceof HTMLTextAreaElement?l.value:l.innerHTML):s;var l}(e)),Wl(e)&&(this.sourceElement=e,function(s){const l=s.sourceElement;if(l){if(l.ckeditorInstance)throw new D("editor-source-element-already-used",s);l.ckeditorInstance=s,s.once("destroy",()=>{delete l.ckeditorInstance})}}(this)),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new UI(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:n});this.ui=new rI(this,i)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(n=>{if(Wl(e)&&e.tagName==="TEXTAREA")throw new D("editor-wrong-element",null);const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init()).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Wl(r){return Zs(r)}class $u extends ai{constructor(e){super(e);const t=this.document;function n(i){return(s,l)=>{l.preventDefault();const d=l.dropRange?[l.dropRange]:null,h=new O(t,i);t.fire(h,{dataTransfer:l.dataTransfer,method:s.name,targetRanges:d,target:l.target}),h.stop.called&&l.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new Gp("clipboardData"in e?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,i){const s=i.target.ownerDocument,l=i.clientX,d=i.clientY;let h;return s.caretRangeFromPoint&&s.caretRangeFromPoint(l,d)?h=s.caretRangeFromPoint(l,d):i.rangeParent&&(h=s.createRange(),h.setStart(i.rangeParent,i.rangeOffset),h.collapse(!0)),h?n.domConverter.domRangeToView(h):null}(this.view,e)),this.fire(e.type,e,t)}}const Bk=["figcaption","li"];function Lk(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const i=Lk(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Bk.includes(t.name)||Bk.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(o,a){(function(c,u){o.exports=u(v7)})(window,function(c){return function(u){var f={};function g(p){if(f[p])return f[p].exports;var v=f[p]={i:p,l:!1,exports:{}};return u[p].call(v.exports,v,v.exports,g),v.l=!0,v.exports}return g.m=u,g.c=f,g.d=function(p,v,k){g.o(p,v)||Object.defineProperty(p,v,{enumerable:!0,get:k})},g.r=function(p){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},g.t=function(p,v){if(1&v&&(p=g(p)),8&v||4&v&&typeof p=="object"&&p&&p.__esModule)return p;var k=Object.create(null);if(g.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:p}),2&v&&typeof p!="string")for(var C in p)g.d(k,C,function(y){return p[y]}.bind(null,C));return k},g.n=function(p){var v=p&&p.__esModule?function(){return p.default}:function(){return p};return g.d(v,"a",v),v},g.o=function(p,v){return Object.prototype.hasOwnProperty.call(p,v)},g.p="",g(g.s=3)}([function(u,f){u.exports=c},function(u,f,g){(function(p){var v=typeof p=="object"&&p&&p.Object===Object&&p;f.a=v}).call(this,g(2))},function(u,f){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch{typeof window=="object"&&(g=window)}u.exports=g},function(u,f,g){g.r(f);var p=g(0),v=g.n(p),k=function(se){var ke=typeof se;return se!=null&&(ke=="object"||ke=="function")},C=g(1),y=typeof self=="object"&&self&&self.Object===Object&&self,x=C.a||y||Function("return this")(),A=function(){return x.Date.now()},E=/\s/,M=function(se){for(var ke=se.length;ke--&&E.test(se.charAt(ke)););return ke},N=/^\s+/,O=function(se){return se&&se.slice(0,M(se)+1).replace(N,"")},H=x.Symbol,R=Object.prototype,B=R.hasOwnProperty,U=R.toString,D=H?H.toStringTag:void 0,F=function(se){var ke=B.call(se,D),X=se[D];try{se[D]=void 0;var ve=!0}catch{}var be=U.call(se);return ve&&(ke?se[D]=X:delete se[D]),be},z=Object.prototype.toString,W=function(se){return z.call(se)},q=H?H.toStringTag:void 0,Y=function(se){return se==null?se===void 0?"[object Undefined]":"[object Null]":q&&q in Object(se)?F(se):W(se)},te=function(se){return se!=null&&typeof se=="object"},K=function(se){return typeof se=="symbol"||te(se)&&Y(se)=="[object Symbol]"},J=/^[-+]0x[0-9a-f]+$/i,re=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,oe=parseInt,_e=function(se){if(typeof se=="number")return se;if(K(se))return NaN;if(k(se)){var ke=typeof se.valueOf=="function"?se.valueOf():se;se=k(ke)?ke+"":ke}if(typeof se!="string")return se===0?se:+se;se=O(se);var X=re.test(se);return X||pe.test(se)?oe(se.slice(2),X?2:8):J.test(se)?NaN:+se},Z=Math.max,de=Math.min,Ce=function(se,ke,X){var ve,be,Ne,Pe,qe,V,$=0,ee=!1,ce=!1,le=!0;if(typeof se!="function")throw new TypeError("Expected a function");function he(Me){var Be=ve,Ve=be;return ve=be=void 0,$=Me,Pe=se.apply(Ve,Be)}function ye(Me){return $=Me,qe=setTimeout(Ee,ke),ee?he(Me):Pe}function we(Me){var Be=Me-V;return V===void 0||Be>=ke||Be<0||ce&&Me-$>=Ne}function Ee(){var Me=A();if(we(Me))return ue(Me);qe=setTimeout(Ee,function(Be){var Ve=ke-(Be-V);return ce?de(Ve,Ne-(Be-$)):Ve}(Me))}function ue(Me){return qe=void 0,le&&ve?he(Me):(ve=be=void 0,Pe)}function Te(){var Me=A(),Be=we(Me);if(ve=arguments,be=this,V=Me,Be){if(qe===void 0)return ye(V);if(ce)return clearTimeout(qe),qe=setTimeout(Ee,ke),he(V)}return qe===void 0&&(qe=setTimeout(Ee,ke)),Pe}return ke=_e(ke)||0,k(X)&&(ee=!!X.leading,Ne=(ce="maxWait"in X)?Z(_e(X.maxWait)||0,ke):Ne,le="trailing"in X?!!X.trailing:le),Te.cancel=function(){qe!==void 0&&clearTimeout(qe),$=0,ve=V=be=qe=void 0},Te.flush=function(){return qe===void 0?Pe:ue(A())},Te},me={name:"ckeditor",created(){const{CKEDITOR_VERSION:se}=window;if(se){const[ke]=se.split(".").map(Number);ke<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(p.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const se=Object.assign({},this.config);this.modelValue&&(se.initialData=this.modelValue),this.editor.create(this.$el,se).then(ke=>{this.instance=Object(p.markRaw)(ke),this.setUpEditorEvents(),this.modelValue!==se.initialData&&ke.setData(this.modelValue),this.disabled&&ke.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ke)}).catch(ke=>{console.error(ke)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(se){this.instance&&se!==this.lastEditorData&&this.instance.setData(se)},disabled(se){se?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const se=this.instance,ke=Ce(X=>{const ve=this.lastEditorData=se.getData();this.$emit("update:modelValue",ve,X,se),this.$emit("input",ve,X,se)},300,{leading:!0});se.model.document.on("change:data",ke),se.editing.view.document.on("focus",X=>{this.$emit("focus",X,se)}),se.editing.view.document.on("blur",X=>{this.$emit("blur",X,se)})}}};const Ae=v.a?v.a.version:p.version,[Se]=Ae.split(".").map(se=>parseInt(se,10));if(Se<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const De={install(se){se.component("ckeditor",me)},component:me};f.default=De}]).default})})(hE);const w7=Xx(hE.exports),Ug=f1(r6).use(_V).use(l6).use(w7);Ug.component("icon-select",YV);Ug.component("text-select",k7);Ug.mount("#app");