import{$ as ct,A as At,B as wt,C as T,D as Nt,F as A,G as xt,H as it,J as l,Ja as dt,K as G,Ka as Gt,L as h,M as at,Ma as $,N as c,Na as lt,O as Ct,Q as U,Sa as Ut,T as Rt,U as Pt,Z as Ft,_ as V,a as d,b as R,ba as M,ca as jt,d as m,e as J,fa as kt,h as tt,i as P,j as D,k as Tt,ka as ut,l as F,m as et,n as O,o as j,p as nt,q as _,r as b,s as rt,u as I,v as ot,x as st,y as k,z as Dt}from"./chunk-X474HETQ.js";var X=class{constructor(r){this.product=r}static type="[Cart] Add Product"},B=class{constructor(r){this.product=r}static type="[Cart] Remove Product"},H=class{constructor(r,e){this.product=r;this.quantity=e}static type="[Cart] Edit Product Quantity"};function ft(t,r){let e=!r?.manualCleanup;e&&!r?.injector&&Pt(ft);let n=e?r?.injector?.get(ct)??c(ct):null,o=he(r?.equal),s;r?.requireSync?s=ut({kind:0},{equal:o}):s=ut({kind:1,value:r?.initialValue},{equal:o});let i=t.subscribe({next:a=>s.set({kind:1,value:a}),error:a=>{if(r?.rejectErrors)throw a;s.set({kind:2,error:a})}});if(r?.requireSync&&s().kind===0)throw new it(601,!1);return n?.onDestroy(i.unsubscribe.bind(i)),$(()=>{let a=s();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new it(601,!1)}},{equal:r?.equal})}function he(t=Object.is){return(r,e)=>r.kind===1&&e.kind===1&&t(r.value,e.value)}var v="NGXS_META",gt="NGXS_OPTIONS_META",pt="NGXS_SELECTOR_META";function St(t){if(!t.hasOwnProperty(v)){let r={name:null,actions:{},defaults:{},path:null,makeRootSelector(e){return e.getStateGetter(r.name)},children:[]};Object.defineProperty(t,v,{value:r})}return w(t)}function w(t){return t[v]}function $t(t){return t.hasOwnProperty(pt)||Object.defineProperty(t,pt,{value:{makeRootSelector:null,originalFn:null,containerClass:null,selectorName:null,getSelectorOptions:()=>({})}}),yt(t)}function yt(t){return t[pt]}function ge(t,r,e){if(r===null||e===null||r.length!==e.length)return!1;let n=r.length;for(let o=0;o<n;o++)if(!t(r[o],e[o]))return!1;return!0}function q(t,r=Object.is){let e=null,n=null;function o(){return ge(r,e,arguments)||(n=t.apply(null,arguments)),e=arguments,n}return o.reset=function(){e=null,n=null},o}var Se=(()=>{class t{static{this._value={}}static set(e){this._value=e}static pop(){let e=this._value;return this._value={},e}}return t})(),vt=new h("",{providedIn:"root",factory:()=>Se.pop()}),mt=(()=>{class t extends F{constructor(){super(1)}bootstrap(){this.next(!0),this.complete()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Xt(t){let r=[],e=!1;return function(...o){if(e){r.unshift(o);return}for(e=!0,t(...o);r.length>0;){let s=r.pop();s&&t(...s)}e=!1}}var L=class extends D{constructor(){super(...arguments),this._orderedNext=Xt(r=>super.next(r))}next(r){this._orderedNext(r)}},ht=class extends Tt{constructor(r){super(r),this._orderedNext=Xt(e=>super.next(e)),this._currentValue=r}getValue(){return this._currentValue}next(r){this._currentValue=r,this._orderedNext(r)}};function Ot(t){return r=>new P(e=>r.subscribe({next(n){t(()=>e.next(n))},error(n){t(()=>e.error(n))},complete(){t(()=>e.complete())}}))}var Z=(()=>{class t extends ht{constructor(){super({}),this.state=ft(this.pipe(Ot(lt)),{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Bt=(()=>{class t{static{this.type="@@INIT"}}return t})(),Ht=(()=>{class t{static{this.type="@@UPDATE_STATE"}constructor(e){this.addedStates=e}}return t})(),Lt=new h("");function z(t){return t.constructor?.type||t.type}var Et=(t,r,e)=>{t=d({},t);let n=r.split("."),o=n.length-1;return n.reduce((s,i,a)=>(a===o?s[i]=e:s[i]=Array.isArray(s[i])?s[i].slice():d({},s[i]),s&&s[i]),t),t},Y=(t,r)=>r.split(".").reduce((e,n)=>e&&e[n],t);function qt(t){return typeof t=="function"}var ye=(()=>{class t{enter(e){return e()}leave(e){return e()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Qt=(()=>{class t{constructor(){this._ngZone=c(M),this._isServer=Ut(c(kt))}enter(e){return this._isServer?this.runInsideAngular(e):this.runOutsideAngular(e)}leave(e){return this.runInsideAngular(e)}runInsideAngular(e){return M.isInAngularZone()?e():this._ngZone.run(e)}runOutsideAngular(e){return M.isInAngularZone()?this._ngZone.runOutsideAngular(e):e()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Jt=new h(""),ve=new h("",{providedIn:"root",factory:()=>{let t=c(M),r=c(Ct),e=r.get(Jt),n=t instanceof M;return e?r.get(e):r.get(n?Qt:ye)}}),te=(()=>{class t{constructor(){this._executionStrategy=c(ve)}enter(e){return this._executionStrategy.enter(e)}leave(e){return this._executionStrategy.leave(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function K(t){return Ot(r=>t.leave(r))}var ee=(()=>{class t extends L{constructor(){super(),this.dispatched$=new D,this.pipe(I(e=>e.status==="DISPATCHED")).subscribe(e=>{this.dispatched$.next(e)})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ne=(()=>{class t{constructor(){this.plugins=[],this._parentManager=c(t,{optional:!0,skipSelf:!0}),this._pluginHandlers=c(Lt,{optional:!0}),this.registerHandlers()}get _rootPlugins(){return this._parentManager?.plugins||this.plugins}registerHandlers(){let e=this.getPluginHandlers();this._rootPlugins.push(...e)}getPluginHandlers(){return(this._pluginHandlers||[]).map(n=>n.handle?n.handle.bind(n):n)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Mt=new WeakMap,Zt=!1;function me(){if(Zt)return;let t=tt.onUnhandledError;tt.onUnhandledError=function(r){let e=Mt.get(r);if(e)e();else if(t)t.call(this,r);else throw r},Zt=!0}function Oe(t){let r=Mt.get(t);return r?(r(),!0):!1}function Ee(t,r){if(t!==null&&typeof t=="object"){let e=!1;Mt.set(t,()=>{e||(e=!0,r())})}return t}function Ie(t){return r=>{let e=r.subscribe({error:n=>{t.runOutsideAngular(()=>{queueMicrotask(()=>{e&&Oe(n)})})}});return new P(n=>(e?.unsubscribe(),e=null,r.subscribe(n)))}}var re=(()=>{class t extends D{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=Ft(t)))(o||t)}})()}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Me=(()=>{class t{constructor(){this._ngZone=c(M),this._actions=c(ee),this._actionResults=c(re),this._pluginManager=c(ne),this._stateStream=c(Z),this._ngxsExecutionStrategy=c(te),this._injector=c(V)}dispatch(e){return this._ngxsExecutionStrategy.enter(()=>this.dispatchByEvents(e)).pipe(Ie(this._ngZone),K(this._ngxsExecutionStrategy))}dispatchByEvents(e){return Array.isArray(e)?e.length===0?O(void 0):rt(e.map(n=>this.dispatchSingle(n))).pipe(_(()=>{})):this.dispatchSingle(e)}dispatchSingle(e){let n=this._stateStream.getValue(),o=this._pluginManager.plugins;return oe(this._injector,[...o,(s,i)=>{s!==n&&this._stateStream.next(s);let a=this.getActionResultStream(i);return a.subscribe(u=>this._actions.next(u)),this._actions.next({action:i,status:"DISPATCHED"}),this.createDispatchObservable(a)}])(n,e).pipe(T())}getActionResultStream(e){return this._actionResults.pipe(I(n=>n.action===e&&n.status!=="DISPATCHED"),k(1),T())}createDispatchObservable(e){return e.pipe(b(n=>{switch(n.status){case"SUCCESSFUL":return O(this._stateStream.getValue());case"ERRORED":return j(()=>n.error);default:return O()}}),T())}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),oe=(t,r)=>(...e)=>{let n=r.shift();return Rt(t,()=>n(...e,(...o)=>oe(t,r)(...o)))},se=new h(""),ie=new h(""),ae=new h(""),N=(()=>{class t{constructor(){this.compatibility={strictContentSecurityPolicy:!1},this.executionStrategy=Qt,this.selectorOptions={injectContainerState:!1,suppressErrors:!1}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:()=>(()=>{let e=new t,n=c(ae);return R(d(d({},e),n),{selectorOptions:d(d({},e.selectorOptions),n.selectorOptions)})})(),providedIn:"root"})}}return t})(),It=class{constructor(r,e,n){this.previousValue=r,this.currentValue=e,this.firstChange=n}};var x=(()=>{class t{constructor(){this._stateStream=c(Z),this._dispatcher=c(Me),this._config=c(N)}getRootStateOperations(){return{getState:()=>this._stateStream.getValue(),setState:n=>this._stateStream.next(n),dispatch:n=>this._dispatcher.dispatch(n)}}setStateToTheCurrentWithNew(e){let n=this.getRootStateOperations(),o=n.getState();n.setState(d(d({},o),e.defaults))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function _e(t,r,e){return n=>{let{argumentSelectorFunctions:o,selectorOptions:s}=Te(n,t,r),{suppressErrors:i}=s;return function(u){let g=o.map(y=>y(u));try{return e(...g)}catch(y){if(i&&y instanceof TypeError)return;throw y}}}}function be(t,r){let e=r&&r.containerClass,o=q(function(){let i=t.apply(e,arguments);return typeof i=="function"?q.apply(null,[i]):i});return Object.setPrototypeOf(o,t),o}function Te(t,r,e=[]){let n=r.getSelectorOptions(),o=t.getSelectorOptions(n),i=De(e,o,r.containerClass).map(a=>ce(a)(t));return{selectorOptions:o,argumentSelectorFunctions:i}}function De(t=[],r,e){let n=[],o=r.injectContainerState||t.length===0;return e&&o&&w(e)&&n.push(e),n.push(...t),n}function ce(t){let r=yt(t)||w(t);return r&&r.makeRootSelector||(()=>t)}function Ae(t){return r=>{for(let e=0;e<t.length;e++){if(!r)return;r=r[t[e]]}return r}}function we(t){let r=t,e="store."+r[0],n=0,o=r.length,s=e;for(;++n<o;)s=s+" && "+(e=e+"."+r[n]);return new Function("store","return "+s+";")}var Ne=new h("",{providedIn:"root",factory:()=>c(N).compatibility?.strictContentSecurityPolicy?Ae:we});function xe(t){let r=e=>t.find(o=>o===e)[v].name;return t.reduce((e,n)=>{let{name:o,children:s}=n[v];return e[o]=(s||[]).map(r),e},{})}function Ce(t){return t.reduce((r,e)=>{let n=e[v];return r[n.name]=e,r},{})}function Re(t,r={}){let e=(n,o)=>{for(let s in n)if(n.hasOwnProperty(s)&&n[s].indexOf(o)>=0){let i=e(n,s);return i!==null?`${i}.${s}`:s}return null};for(let n in t)if(t.hasOwnProperty(n)){let o=e(t,n);r[n]=o?`${o}.${n}`:n}return r}function Pe(t){let r=[],e={},n=(o,s=[])=>{Array.isArray(s)||(s=[]),s.push(o),e[o]=!0,t[o].forEach(i=>{e[i]||n(i,s.slice(0))}),r.indexOf(o)<0&&r.push(o)};return Object.keys(t).forEach(o=>n(o)),r.reverse()}var Fe=(()=>{class t{constructor(){this._actionTypeToHandlersMap=new Map}ngOnDestroy(){this._actionTypeToHandlersMap.clear()}get(e){return this._actionTypeToHandlersMap.get(e)}register(e,n){let o=this._actionTypeToHandlersMap.get(e)??new Set;return o.add(n),this._actionTypeToHandlersMap.set(e,o),()=>{this._actionTypeToHandlersMap.get(e).delete(n)}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Fn=new RegExp("^[a-zA-Z0-9_]+$");var je=(()=>{class t{constructor(){this._ngZone=c(M),this._errorHandler=c(jt)}handleError(e,n){this._ngZone.runOutsideAngular(()=>this._errorHandler.handleError(e))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ke(t){return r=>{let e=d({},r);for(let n in t)e[n]=t[n];return e}}var ue=(()=>{class t{constructor(){this._internalStateOperations=c(x)}createStateContext(e){let n=this._internalStateOperations.getRootStateOperations();return{getState(){let o=n.getState();return le(o,e)},patchState(o){let s=n.getState(),i=ke(o);zt(n,s,i,e)},setState(o){let s=n.getState();qt(o)?zt(n,s,o,e):de(n,s,o,e)},dispatch(o){return n.dispatch(o)}}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function de(t,r,e,n){let o=Et(r,n,e);return t.setState(o),o}function zt(t,r,e,n){let o=le(r,n),s=e(o);return de(t,r,s,n)}function le(t,r){return Y(t,r)}function Ge(...t){return Ue(t,["DISPATCHED"])}function Ue(t,r,e=$e){let n=Xe(t),o=r&&Be(r);return function(s){return s.pipe(Ve(n,o),e())}}function Ve(t,r){return I(e=>{let n=z(e.action),o=t[n],s=r?r[e.status]:!0;return o&&s})}function $e(){return _(t=>t.action)}function Xe(t){return t.reduce((r,e)=>(r[z(e)]=!0,r),{})}function Be(t){return t.reduce((r,e)=>(r[e]=!0,r),{})}function He(t){let r=t===void 0?{}:t;return t&&(Array.isArray(t)?r=t.slice():typeof t=="object"&&(r=d({},t))),r}var _t=(()=>{class t{constructor(){this._injector=c(V),this._config=c(N),this._stateContextFactory=c(ue),this._actions=c(ee),this._actionResults=c(re),this._initialState=c(vt,{optional:!0}),this._actionRegistry=c(Fe),this._propGetter=c(Ne),this._actionsSubscription=null,this._ngxsUnhandledErrorHandler=null,this._states=[],this._statesByName={},this._statePaths={},this.getRuntimeSelectorContext=q(()=>{let e=this,n=e._propGetter;function o(i){let a=e._statePaths[i];return a?n(a.split(".")):null}return{getStateGetter(i){let a=o(i);return a||((...u)=>(a||(a=o(i)),a?a(...u):void 0))},getSelectorOptions(i){let a=e._config.selectorOptions;return d(d({},a),i||{})}}})}ngOnDestroy(){this._actionsSubscription?.unsubscribe()}add(e){let{newStates:n}=this.addToStatesMap(e);if(!n.length)return[];let o=xe(n),s=Pe(o),i=Re(o),a=Ce(n),u=[];for(let g of s){let y=a[g],E=i[g],p=y[v];this.addRuntimeInfoToMeta(p,E);let S={name:g,path:E,isInitialised:!1,actions:p.actions,instance:c(y),defaults:He(p.defaults)};this.hasBeenMountedAndBootstrapped(g,E)||u.push(S),this._states.push(S),this.hydrateActionMetasMap(S)}return u}addAndReturnDefaults(e){let n=e||[],o=this.add(n);return{defaults:o.reduce((i,a)=>Et(i,a.path,a.defaults),{}),states:o}}connectActionHandlers(){this._actionsSubscription=this._actions.pipe(I(e=>e.status==="DISPATCHED"),b(e=>{let n=e.action;return this.invokeActions(n).pipe(_(()=>({action:n,status:"SUCCESSFUL"})),st({action:n,status:"CANCELED"}),ot(o=>{let s=this._ngxsUnhandledErrorHandler||=this._injector.get(je),i=Ee(o,()=>s.handleError(o,{action:n}));return O({action:n,status:"ERRORED",error:i})}))})).subscribe(e=>this._actionResults.next(e))}invokeActions(e){let n=z(e),o=[],s=!1,i=this._actionRegistry.get(n);if(i)for(let a of i){let u;try{u=a(e)}catch(g){u=j(()=>g)}o.push(u),s=!0}return o.length||o.push(O(void 0)),rt(o)}addToStatesMap(e){let n=[],o=this._statesByName;for(let s of e){let i=w(s).name;!o[i]&&(n.push(s),o[i]=s)}return{newStates:n}}addRuntimeInfoToMeta(e,n){this._statePaths[e.name]=n,e.path=n}hasBeenMountedAndBootstrapped(e,n){let o=Y(this._initialState,n)!==void 0;return this._statesByName[e]&&o}hydrateActionMetasMap({path:e,actions:n,instance:o}){let{dispatched$:s}=this._actions;for(let i of Object.keys(n)){let a=n[i].map(u=>{let g=!!u.options.cancelUncompleted;return y=>{let E=this._stateContextFactory.createStateContext(e),p=o[u.fn](E,y);if(dt(p)&&(p=et(p)),nt(p)){if(p=p.pipe(b(S=>dt(S)?et(S):nt(S)?S:O(S)),st(void 0)),g){let S=s.pipe(Ge(y));p=p.pipe(A(S))}p=p.pipe(At(()=>{E.setState=Yt,E.patchState=Yt}))}else p=O(void 0);return p}});for(let u of a)this._actionRegistry.register(i,u)}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Yt(){}var W=(()=>{class t{constructor(){this._stateStream=c(Z),this._internalStateOperations=c(x),this._config=c(N),this._internalExecutionStrategy=c(te),this._stateFactory=c(_t),this._selectableStateStream=this._stateStream.pipe(K(this._internalExecutionStrategy),T({bufferSize:1,refCount:!0})),this.initStateStream()}dispatch(e){return this._internalStateOperations.getRootStateOperations().dispatch(e)}select(e){let n=this.getStoreBoundSelectorFn(e);return this._selectableStateStream.pipe(_(n),ot(o=>this._config.selectorOptions.suppressErrors&&o instanceof TypeError?O(void 0):j(o)),Dt(),K(this._internalExecutionStrategy))}selectOnce(e){return this.select(e).pipe(k(1))}selectSnapshot(e){return this.getStoreBoundSelectorFn(e)(this._stateStream.getValue())}selectSignal(e){let n=this.getStoreBoundSelectorFn(e);return $(()=>n(this._stateStream.state()))}subscribe(e){return this._selectableStateStream.pipe(K(this._internalExecutionStrategy)).subscribe(e)}snapshot(){return this._internalStateOperations.getRootStateOperations().getState()}reset(e){this._internalStateOperations.getRootStateOperations().setState(e)}getStoreBoundSelectorFn(e){let n=ce(e),o=this._stateFactory.getRuntimeSelectorContext();return n(o)}initStateStream(){let e=c(vt),n=this._stateStream.value;(!n||Object.keys(n).length===0)&&this._stateStream.next(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Le=new h("");var qe=(()=>{class t{static{this.store=null}static{this.config=null}constructor(e,n){t.store=e,t.config=n}ngOnDestroy(){t.store=null,t.config=null}static{this.\u0275fac=function(n){return new(n||t)(at(W),at(N))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),fe=(()=>{class t{constructor(){this._store=c(W),this._internalStateOperations=c(x),this._stateContextFactory=c(ue),this._appBootstrappedState=c(mt),this._destroy$=new F(1)}ngOnDestroy(){this._destroy$.next()}ngxsBootstrap(e,n){this._internalStateOperations.getRootStateOperations().dispatch(e).pipe(I(()=>!!n),xt(()=>this._invokeInitOnStates(n.states)),b(()=>this._appBootstrappedState),I(o=>!!o),A(this._destroy$)).subscribe(()=>this._invokeBootstrapOnStates(n.states))}_invokeInitOnStates(e){for(let n of e){let o=n.instance;o.ngxsOnChanges&&this._store.select(s=>Y(s,n.path)).pipe(Nt(void 0),wt(),A(this._destroy$)).subscribe(([s,i])=>{let a=new It(s,i,!n.isInitialised);o.ngxsOnChanges(a)}),o.ngxsOnInit&&o.ngxsOnInit(this._getStateContext(n)),n.isInitialised=!0}}_invokeBootstrapOnStates(e){for(let n of e){let o=n.instance;o.ngxsAfterBootstrap&&o.ngxsAfterBootstrap(this._getStateContext(n))}}_getStateContext(e){return this._stateContextFactory.createStateContext(e.path)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Ze(){me(),(c(Le,{optional:!0})||[]).forEach(i=>i());let r=c(_t),e=c(x);c(W),c(qe);let n=c(se,{optional:!0})||[],o=c(fe),s=r.addAndReturnDefaults(n);e.setStateToTheCurrentWithNew(s),r.connectActionHandlers(),o.ngxsBootstrap(new Bt,s)}function ze(){c(W);let t=c(x),r=c(_t),e=c(ie,{optional:!0})||[],n=c(fe),o=e.reduce((i,a)=>i.concat(a),[]),s=r.addAndReturnDefaults(o);s.states.length&&(t.setStateToTheCurrentWithNew(s),n.ngxsBootstrap(new Ht(s.defaults),s))}var jn=new h(""),kn=new h("");var Ye=(()=>{class t{constructor(){Ze()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=U({type:t})}static{this.\u0275inj=G({})}}return t})(),Ke=(()=>{class t{constructor(){ze()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=U({type:t})}static{this.\u0275inj=G({})}}return t})();function We(t,r){return[...t,{provide:se,useValue:t},{provide:Gt,useFactory:()=>{let e=c(mt);return()=>e.bootstrap()},multi:!0},{provide:ae,useValue:r},{provide:Jt,useValue:r.executionStrategy}]}function Qe(t){return[ne,...t,{provide:ie,multi:!0,useValue:t}]}var Gn=(()=>{class t{static forRoot(e=[],n={}){return{ngModule:Ye,providers:We(e,n)}}static forFeature(e=[]){return{ngModule:Ke,providers:Qe(e)}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=U({type:t})}static{this.\u0275inj=G({})}}return t})();function Q(t,r){return(e,n,o)=>{let s=St(e.constructor),i=Array.isArray(t)?t:[t];for(let a of i){let u=a.type;s.actions[u]||(s.actions[u]=[]),s.actions[u].push({fn:n,options:r||{},type:u})}}}function pe(t){return r=>{let e=r,n=St(e),o=Object.getPrototypeOf(e),s=Je(o,t);tn({meta:n,inheritedStateClass:o,optionsWithInheritance:s}),e[gt]=s}}function Je(t,r){let e=t[gt]||{};return d(d({},e),r)}function tn(t){let{meta:r,inheritedStateClass:e,optionsWithInheritance:n}=t,{children:o,defaults:s,name:i}=n,a=typeof i=="string"?i:i&&i.getName()||null;if(e.hasOwnProperty(v)){let u=e[v]||{};r.actions=d(d({},r.actions),u.actions)}r.children=o,r.defaults=s,r.name=a}var Kt="NGXS_SELECTOR_OPTIONS_META",Wt={getOptions:t=>t&&t[Kt]||{},defineOptions:(t,r)=>{t&&(t[Kt]=r)}};function en(t,r){let e=$t(t);e.originalFn=t;let n=()=>({});r&&(e.containerClass=r.containerClass,e.selectorName=r.selectorName||null,n=r.getSelectorOptions||n);let o=d({},e);return e.getSelectorOptions=()=>nn(o,n()),e}function nn(t,r){return d(d(d(d({},Wt.getOptions(t.containerClass)||{}),Wt.getOptions(t.originalFn)||{}),t.getSelectorOptions()||{}),r)}function bt(t,r,e){let n=be(r,e),o=en(r,e);return o.makeRootSelector=_e(o,t,n),n}function C(t){return(r,e,n)=>{n||=Object.getOwnPropertyDescriptor(r,e);let o=n?.value,s=bt(t,o,{containerClass:r,selectorName:e.toString(),getSelectorOptions(){return{}}});return{configurable:!0,get(){return s},originalFn:o}}}var f=class{static getProductsCount(r){return r.products.reduce((e,n)=>e+n.quantity,0)}static getTotalPriceCents(r){return r.products.reduce((e,n)=>e+n.priceCents*n.quantity,0)}static getProducts(r){return r.products}static getProductQuantity(r){return bt([f],({cart:e})=>e.products.find(o=>o.id===r.id)?.quantity??0)}addProduct({getState:r,patchState:e},{product:n}){let s={products:[...r().products]},i=s.products.findIndex(u=>u.id===n.id),a=s.products[i];a!=null?a.quantity+=1:s.products.push(R(d({},n),{quantity:1})),e(s)}removeProduct({getState:r,patchState:e},{product:n}){let s={products:[...r().products]},i=s.products.findIndex(u=>u.id===n.id),a=s.products[i];a!=null&&(a.quantity>1?a.quantity-=1:s.products.splice(i,1),e(s))}editProductQuantity({getState:r,patchState:e},{product:n,quantity:o}){let i={products:[...r().products]},a=i.products.findIndex(g=>g.id===n.id),u=i.products[a];u!=null&&(u.quantity=o,u.quantity<=0&&i.products.splice(a,1),e(i))}};J(f,"\u0275fac",function(e){return new(e||f)}),J(f,"\u0275prov",l({token:f,factory:f.\u0275fac})),m([Q(X)],f.prototype,"addProduct",1),m([Q(B)],f.prototype,"removeProduct",1),m([Q(H)],f.prototype,"editProductQuantity",1),m([C()],f,"getProductsCount",1),m([C()],f,"getTotalPriceCents",1),m([C()],f,"getProducts",1),m([C()],f,"getProductQuantity",1),f=m([pe({name:"cart",defaults:{products:[]}})],f);export{X as a,B as b,H as c,W as d,Gn as e,f};
