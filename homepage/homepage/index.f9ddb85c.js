!function(e,t,r,s,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n="function"==typeof o[s]&&o[s],l=n.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!l[t]){if(!e[t]){var i="function"==typeof o[s]&&o[s];if(!r&&i)return i(t,!0);if(n)return n(t,!0);if(a&&"string"==typeof t)return a(t);var p=Error("Cannot find module '"+t+"'");throw p.code="MODULE_NOT_FOUND",p}h.resolve=function(r){var s=e[t][1][r];return null!=s?s:r},h.cache={};var d=l[t]=new c.Module(t);e[t][0].call(d.exports,h,d,d.exports,this)}return l[t].exports;function h(e){var t=h.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=n,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return o[s]}}),o[s]=c;for(var p=0;p<t.length;p++)c(t[p]);if(r){var d=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({"1wRUE":[function(e,t,r){e("1fd4dcc8b0d9c8f8").register(e("5c1e175a9b04c894").getBundleURL("FtrIg"),JSON.parse('["FtrIg","index.f9ddb85c.js","e1F8E","profile-picture-1.7495cca9.jpg","7EaHx","new_pfp.f412a206.png","jTVYt","resume_fall2023.9e092d6e.pdf","13Ov8","arrow_down.fbe43fd1.svg","44ghR","portalink_solar_system_example.2cd6b5b4.png","4GSS8","portalink.b7627d08.gif","7CYxD","village-gif.5abbfea4.gif","4LnCX","village.befd9f6b.png","anOvj","painted-cube.1c2d5e2f.png"]'))},{"1fd4dcc8b0d9c8f8":"fyJL2","5c1e175a9b04c894":"c7Tr5"}],fyJL2:[function(e,t,r){var s=new Map;t.exports.register=function(e,t){for(var r=0;r<t.length-1;r+=2)s.set(t[r],{baseUrl:e,path:t[r+1]})},t.exports.resolve=function(e){var t=s.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}},{}],c7Tr5:[function(e,t,r){var s={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=s[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),s[e]=t),t},r.getBaseURL=i,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],"8RSWf":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"relative_root",()=>m),s.export(r,"MyElement",()=>g);var i=e("lit"),o=e("lit/decorators.js");e("./components/navbar.ts"),e("./components/footer.ts"),e("./components/item.ts");var n=e("url:./assets/profile-picture-1.jpg"),l=s.interopDefault(n),a=e("url:./assets/new_pfp.png"),c=s.interopDefault(a),p=e("url:./assets/resume_fall2023.pdf"),d=s.interopDefault(p),h=e("url:./assets/arrow_down.svg"),f=s.interopDefault(h);e("./items-research/item-portalink.ts"),e("./items-research/item-filtered-ink.ts"),e("./items-research/item-procedural-paint.ts");var u=e("./style/global.ts");let m="",g=class extends i.LitElement{static get styles(){return[u.GlobalCSS,(0,i.css)`:host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #header-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        
            width: fit-content;
            margin-top: 4rem;
        }
        
        #header-container-left {
            display: flex;
            flex-direction: column;
        
            width: 32rem;
            margin-right: 4rem;
        }
        
        #header-container-right {
            position: relative;
            display: flex;
        
            width: 16rem;
            top: -10rem;
        }

        #header-profile-picture-1 {
            position: absolute;
            z-index: -10;
            width: 14rem;
            height: 18rem;
            object-fit: cover;
            filter: blur(0.5px);
        
            top: 2.5rem;
            left: 2.5rem;
        }
        
        #header-profile-picture-2 {
            position: absolute;
            width: 14rem;
            height: 18rem;
            object-fit: cover;
            border: 4px white solid;
            filter: blur(0.5px);
        }
            
        #selected-research-header {
            margin-top: 6rem;
            margin-bottom: 4rem;
        }
            
        `]}render(){return(0,i.html)`
    <my-navbar></my-navbar>
      
    <div id="header-container">
        <div id="header-container-left">
            <h1>Joshua Yang</h1>
            <p>
                Hello! I'm an undergraduate student at Brown University studying Computer Science and Applied Mathematics.
                I'm a fanatic of CGI, digital creator tools, and cross-country roadtrips. 
                You'll find me bouncing around the Brown Human-Computer Interaction Lab researching new forms of creativity support for artists.
                <div class="small-text">Contact me at joshua_yang (at) brown.edu!</div>
                <div class="small-text"><a href=${d.default} target="_blank">Resume / CV</a></div>
            </p>
        </div>

        <div id="header-container-right">
            <img id="header-profile-picture-2" src="${c.default}">
            <img id="header-profile-picture-1" src="${l.default}">
        </div>
    </div>

    <div class="pointer-container">
        <img class="arrow-down animated bounce" src="${f.default}">
    </div>

    <h2 id="selected-research-header">Selected Research + Projects</h2>

    <item-portalink></item-portalink>
    <item-filtered-ink></item-filtered-ink>
    <item-procedural-paint></item-procedural-paint>

    <my-footer></my-footer>
    `}};g=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("index-page")],g)},{lit:"aCmte","lit/decorators.js":"kQrIl","./components/navbar.ts":"9SQ1S","./components/footer.ts":"fo7h0","./components/item.ts":"iQMSz","url:./assets/profile-picture-1.jpg":"8Vkov","url:./assets/new_pfp.png":"5Vowa","url:./assets/resume_fall2023.pdf":"l2tlN","url:./assets/arrow_down.svg":"eWLz8","./items-research/item-portalink.ts":"aEJPz","./items-research/item-filtered-ink.ts":"5bncE","./items-research/item-procedural-paint.ts":"egzT3","./style/global.ts":"7QH8W","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aCmte:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),e("@lit/reactive-element"),e("lit-html");var i=e("lit-element/lit-element.js");s.exportAll(i,r);var o=e("lit-html/is-server.js");s.exportAll(o,r)},{"@lit/reactive-element":"hUcCl","lit-html":"4A25t","lit-element/lit-element.js":"8BOF1","lit-html/is-server.js":"2Mmwb","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hUcCl:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"CSSResult",()=>i.CSSResult),s.export(r,"adoptStyles",()=>i.adoptStyles),s.export(r,"css",()=>i.css),s.export(r,"getCompatibleStyle",()=>i.getCompatibleStyle),s.export(r,"supportsAdoptingStyleSheets",()=>i.supportsAdoptingStyleSheets),s.export(r,"unsafeCSS",()=>i.unsafeCSS),s.export(r,"ReactiveElement",()=>v),s.export(r,"defaultConverter",()=>g),s.export(r,"notEqual",()=>_);var i=e("./css-tag.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{is:o,defineProperty:n,getOwnPropertyDescriptor:l,getOwnPropertyNames:a,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,d=globalThis,h=d.trustedTypes,f=h?h.emptyScript:"",u=d.reactiveElementPolyfillSupport,m=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!o(e,t),y={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;class v extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);void 0!==s&&n(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){let{get:s,set:i}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){let o=s?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;let e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){let e=this.properties;for(let t of[...a(e),...c(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift((0,i.getCompatibleStyle)(r));else void 0!==e&&t.push((0,i.getCompatibleStyle)(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,i.adoptStyles)(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(void 0!==s&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:g).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,s=r._$Eh.get(e);if(void 0!==s&&this._$Em!==s){let e=r.getPropertyOptions(s),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:g;this._$Em=s,this[s]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??_)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,u?.({ReactiveElement:v}),(d.reactiveElementVersions??=[]).push("2.0.4")},{"./css-tag.js":"gSCbb","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gSCbb:[function(e,t,r){/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"CSSResult",()=>a),s.export(r,"adoptStyles",()=>d),s.export(r,"css",()=>p),s.export(r,"getCompatibleStyle",()=>h),s.export(r,"supportsAdoptingStyleSheets",()=>o),s.export(r,"unsafeCSS",()=>c);let i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),l=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&l.set(t,e))}return e}toString(){return this.cssText}}let c=e=>new a("string"==typeof e?e:e+"",void 0,n),p=(e,...t)=>new a(1===e.length?e[0]:t.reduce((t,r,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]),e,n),d=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),s=i.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=r.cssText,e.appendChild(t)}},h=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return c(t)})(e):e},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"4A25t":[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"_$LH",()=>B),s.export(r,"html",()=>x),s.export(r,"mathml",()=>w),s.export(r,"noChange",()=>k),s.export(r,"nothing",()=>R),s.export(r,"render",()=>W),s.export(r,"svg",()=>E);let i=globalThis,o=i.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,l="$lit$",a=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+a,p=`<${c}>`,d=document,h=()=>d.createComment(""),f=e=>null===e||"object"!=typeof e&&"function"!=typeof e,u=Array.isArray,m=e=>u(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,v=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,$=/"/g,A=/^(?:script|style|textarea|title)$/i,S=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),x=S(1),E=S(2),w=S(3),k=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),C=new WeakMap,P=d.createTreeWalker(d,129);function H(e,t){if(!u(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}let F=(e,t)=>{let r=e.length-1,s=[],i,o=2===t?"<svg>":3===t?"<math>":"",n=_;for(let t=0;t<r;t++){let r=e[t],c,d,h=-1,f=0;for(;f<r.length&&(n.lastIndex=f,null!==(d=n.exec(r)));)f=n.lastIndex,n===_?"!--"===d[1]?n=y:void 0!==d[1]?n=v:void 0!==d[2]?(A.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=b):void 0!==d[3]&&(n=b):n===b?">"===d[0]?(n=i??_,h=-1):void 0===d[1]?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=void 0===d[3]?b:'"'===d[3]?$:j):n===$||n===j?n=b:n===y||n===v?n=_:(n=b,i=void 0);let u=n===b&&e[t+1].startsWith("/>")?" ":"";o+=n===_?r+p:h>=0?(s.push(c),r.slice(0,h)+l+r.slice(h)+a+u):r+a+(-2===h?t:u)}return[H(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class I{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,n=0,p=e.length-1,d=this.parts,[f,u]=F(e,t);if(this.el=I.createElement(f,r),P.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=P.nextNode())&&d.length<p;){if(1===s.nodeType){if(s.hasAttributes())for(let e of s.getAttributeNames())if(e.endsWith(l)){let t=u[n++],r=s.getAttribute(e).split(a),o=/([.?@])?(.*)/.exec(t);d.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?L:"?"===o[1]?D:"@"===o[1]?N:M}),s.removeAttribute(e)}else e.startsWith(a)&&(d.push({type:6,index:i}),s.removeAttribute(e));if(A.test(s.tagName)){let e=s.textContent.split(a),t=e.length-1;if(t>0){s.textContent=o?o.emptyScript:"";for(let r=0;r<t;r++)s.append(e[r],h()),P.nextNode(),d.push({type:2,index:++i});s.append(e[t],h())}}}else if(8===s.nodeType){if(s.data===c)d.push({type:2,index:i});else{let e=-1;for(;-1!==(e=s.data.indexOf(a,e+1));)d.push({type:7,index:i}),e+=a.length-1}}i++}}static createElement(e,t){let r=d.createElement("template");return r.innerHTML=e,r}}function O(e,t,r=e,s){if(t===k)return t;let i=void 0!==s?r.o?.[s]:r.l,o=f(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e))._$AT(e,r,s),void 0!==s?(r.o??=[])[s]=i:r.l=i),void 0!==i&&(t=O(e,i._$AS(e,t.values),i,s)),t}class U{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??d).importNode(t,!0);P.currentNode=s;let i=P.nextNode(),o=0,n=0,l=r[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new T(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new z(i,this,e)),this._$AV.push(t),l=r[++n]}o!==l?.index&&(i=P.nextNode(),o++)}return P.currentNode=d,s}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class T{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,r,s){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){f(e=O(this,e,t))?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):m(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&f(this._$AH)?this._$AA.nextSibling.data=e:this.T(d.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=I.createElement(H(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{let e=new U(s,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=C.get(e.strings);return void 0===t&&C.set(e.strings,t=new I(e)),t}k(e){u(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let i of e)s===t.length?t.push(r=new T(this.O(h()),this.O(h()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=R}_$AI(e,t=this,r,s){let i=this.strings,o=!1;if(void 0===i)(o=!f(e=O(this,e,t,0))||e!==this._$AH&&e!==k)&&(this._$AH=e);else{let s,n;let l=e;for(e=i[0],s=0;s<i.length-1;s++)(n=O(this,l[r+s],t,s))===k&&(n=this._$AH[s]),o||=!f(n)||n!==this._$AH[s],n===R?e=R:e!==R&&(e+=(n??"")+i[s+1]),this._$AH[s]=n}o&&!s&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class L extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class D extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class N extends M{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??R)===k)return;let r=this._$AH,s=e===R&&r!==R||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==R&&(r===R||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}let B={M:l,P:a,A:c,C:1,L:F,R:U,D:m,V:O,I:T,H:M,N:D,U:N,B:L,F:z},q=i.litHtmlPolyfillSupport;q?.(I,T),(i.litHtmlVersions??=[]).push("3.2.0");let W=(e,t,r)=>{let s=r?.renderBefore??t,i=s._$litPart$;if(void 0===i){let e=r?.renderBefore??null;s._$litPart$=i=new T(t.insertBefore(h(),e),e,void 0,r??{})}return i._$AI(e),i}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8BOF1":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"LitElement",()=>n),s.export(r,"_$LE",()=>a);var i=e("@lit/reactive-element");s.exportAll(i,r);var o=e("lit-html");s.exportAll(o,r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=(0,o.render)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return o.noChange}}n._$litElement$=!0,n.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:n});let l=globalThis.litElementPolyfillSupport;l?.({LitElement:n});let a={_$AK:(e,t,r)=>{e._$AK(t,r)},_$AL:e=>e._$AL};(globalThis.litElementVersions??=[]).push("4.1.0")},{"@lit/reactive-element":"hUcCl","lit-html":"4A25t","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2Mmwb":[function(e,t,r){/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"isServer",()=>i);let i=!1},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kQrIl:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r);var i=e("@lit/reactive-element/decorators/custom-element.js");s.exportAll(i,r);var o=e("@lit/reactive-element/decorators/property.js");s.exportAll(o,r);var n=e("@lit/reactive-element/decorators/state.js");s.exportAll(n,r);var l=e("@lit/reactive-element/decorators/event-options.js");s.exportAll(l,r);var a=e("@lit/reactive-element/decorators/query.js");s.exportAll(a,r);var c=e("@lit/reactive-element/decorators/query-all.js");s.exportAll(c,r);var p=e("@lit/reactive-element/decorators/query-async.js");s.exportAll(p,r);var d=e("@lit/reactive-element/decorators/query-assigned-elements.js");s.exportAll(d,r);var h=e("@lit/reactive-element/decorators/query-assigned-nodes.js");s.exportAll(h,r)},{"@lit/reactive-element/decorators/custom-element.js":"dYoHp","@lit/reactive-element/decorators/property.js":"dggVt","@lit/reactive-element/decorators/state.js":"dJKtr","@lit/reactive-element/decorators/event-options.js":"9SENf","@lit/reactive-element/decorators/query.js":"12Pya","@lit/reactive-element/decorators/query-all.js":"gzvjw","@lit/reactive-element/decorators/query-async.js":"kZTrS","@lit/reactive-element/decorators/query-assigned-elements.js":"6ZZSg","@lit/reactive-element/decorators/query-assigned-nodes.js":"l1UPB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dYoHp:[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"customElement",()=>i);let i=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dggVt:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"property",()=>l),s.export(r,"standardProperty",()=>n);var i=e("../reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:i.defaultConverter,reflect:!1,hasChanged:i.notEqual},n=(e=o,t,r)=>{let{kind:s,metadata:i}=r,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,e),"accessor"===s){let{name:s}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(s,i,e)},init(t){return void 0!==t&&this.P(s,void 0,e),t}}}if("setter"===s){let{name:s}=r;return function(r){let i=this[s];t.call(this,r),this.requestUpdate(s,i,e)}}throw Error("Unsupported decorator location: "+s)};function l(e){return(t,r)=>"object"==typeof r?n(e,t,r):((e,t,r)=>{let s=t.hasOwnProperty(r);return t.constructor.createProperty(r,s?{...e,wrapped:!0}:e),s?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},{"../reactive-element.js":"hUcCl","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dJKtr:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"state",()=>o);var i=e("./property.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(0,i.property)({...e,state:!0,attribute:!1})}},{"./property.js":"dggVt","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9SENf":[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e){return(t,r)=>{Object.assign("function"==typeof t?t:t[r],e)}}s.defineInteropFlag(r),s.export(r,"eventOptions",()=>i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"12Pya":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"query",()=>o);var i=e("./base.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e,t){return(r,s,o)=>{let n=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof s?r:o??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return(0,i.desc)(r,s,{get(){let r=e.call(this);return void 0===r&&(null!==(r=n(this))||this.hasUpdated)&&t.call(this,r),r}})}return(0,i.desc)(r,s,{get(){return n(this)}})}}},{"./base.js":"f4sFH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],f4sFH:[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"desc",()=>i);let i=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gzvjw:[function(e,t,r){let s;var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"queryAll",()=>n);var o=e("./base.js");function n(e){return(t,r)=>(0,o.desc)(t,r,{get(){return(this.renderRoot??(s??=document.createDocumentFragment())).querySelectorAll(e)}})}},{"./base.js":"f4sFH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],kZTrS:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"queryAsync",()=>o);var i=e("./base.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(t,r)=>(0,i.desc)(t,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}},{"./base.js":"f4sFH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6ZZSg":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"queryAssignedElements",()=>o);var i=e("./base.js");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(t,r)=>{let{slot:s,selector:o}=e??{},n="slot"+(s?`[name=${s}]`:":not([name])");return(0,i.desc)(t,r,{get(){let t=this.renderRoot?.querySelector(n),r=t?.assignedElements(e)??[];return void 0===o?r:r.filter(e=>e.matches(o))}})}}},{"./base.js":"f4sFH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],l1UPB:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"queryAssignedNodes",()=>o);var i=e("./base.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(t,r)=>{let{slot:s}=e??{},o="slot"+(s?`[name=${s}]`:":not([name])");return(0,i.desc)(t,r,{get(){let t=this.renderRoot?.querySelector(o);return t?.assignedNodes(e)??[]}})}}},{"./base.js":"f4sFH","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9SQ1S":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"MyNavbar",()=>a);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts"),l=e("../index.ts");let a=class extends i.LitElement{static get styles(){return[n.GlobalCSS,(0,i.css)`:host {
            width: 100%;
        }
        
        nav {
            width: fit-content;
            margin-left: auto;
            margin-right: 4rem;
            
            margin-top: 2rem;
            margin-bottom: 4rem;
        }

        nav a {
            font-family: system-ui;
            font-size: 16pt;
            
            color: black;
            text-decoration: none;
            cursor: pointer;

            margin-left: 1rem;
            margin-right: 1rem;
        }
    `]}render(){return(0,i.html)`
        <nav>
            <a href="${l.relative_root}/index.html">About</a>
            <a href="${l.relative_root}/pages/research.html">Research</a>
            <a href="${l.relative_root}/pages/projects.html">Projects</a>
            <!-- <a href="/pages/blog.html">Blog</a> -->
            <a href="${l.relative_root}/pages/artwork.html">Artwork</a>
        </nav>`}};a=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("my-navbar")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../index.ts":"8RSWf","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7QH8W":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"GlobalCSS",()=>i);let i=(0,e("lit").unsafeCSS)(`
h1 {
    font-family: MainFont, system-ui;
    font-size: 48pt;

    margin-top: 1rem;
    margin-bottom: 1rem;
}

h2 {
    font-family: MainFont, system-ui;
    font-size: 32pt;
}

h3 {
    font-family: MainFont, system-ui;
    font-size: 24pt;
}

h4 {
    font-family: MainFont, system-ui;
    font-size: 16pt;
}

p {
    font-family: MainFontLight, system-ui;
    font-size: 14pt;
}

a {
    font-family: MainFontLight, system-ui;
    font-size: 14pt;
}

.small-text {
    font-family: MainFontLight, system-ui;
    font-size: 11pt;
}

`)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fo7h0:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"MyFooter",()=>l);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts");let l=class extends i.LitElement{static get styles(){return[n.GlobalCSS,(0,i.css)`:host {
            margin-top: 4rem;
            margin-bottom: 1rem;
        }
    `]}render(){return(0,i.html)`
        <p>Designed and built with &#127912; by Josh Yang</p>
        `}};l=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("my-footer")],l)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iQMSz:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"MyItem",()=>p);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts"),l=e("../style/item-img-style.ts"),a=e("lit/directives/unsafe-html.js"),c=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};let p=class extends i.LitElement{constructor(){super(...arguments),this.title="",this.date="",this.description="",this.check_it_out_link="",this.custom_check_it_out_writing="",this.read_more_link="",this.alt_picture_src_href="",this.picture_src_href="",this.under_construction=!1}static get styles(){return[n.GlobalCSS,(0,i.css)`:host {

        }

        .item-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 4rem;
        }
        
        .item-container-left {
            display: flex;
            flex-direction: column;
        
            margin-right: 4rem;
        }
        
        .item-container-right {
            display: flex;
            flex-direction: column;

            width: 32rem;
        }

        .item-img-container {
            width: 16rem;
            height: 16rem;

            border: 1.5px solid black;
            overflow: hidden;
            display: flex;
            position: relative;
        }

        .item-snippet-small-screen {
            display: none;
        }

        .item-container h3 {
            font-family: MainFont, system-ui;
            font-size: 24pt;

            margin-top: 0;
            margin-bottom: 0;
        }

        .item-container h4 {
            font-family: MainFont, system-ui;
            font-size: 16pt;

            margin-top: 0;
            margin-bottom: 0;
        }

        .img-above {
            position: absolute !important;
            z-index: 100;
        }

        .img-below {
            position: absolute !important;
            z-index: 0;
        }
    `]}render(){return(0,i.html)`
        <div class="item-container">
            <div class="item-container-left">
                <div class="item-img-container">
                    ${""!==this.alt_picture_src_href?(0,i.html)`<img class="img-below" id=${this.title} style=${l.item_image_css[this.title]} src="${this.alt_picture_src_href}">`:""}
                    <img class="img-above" id=${this.title} style=${l.item_image_css[this.title]} src="${this.picture_src_href}">
                </div>
            </div>
            
            <div class="item-container-right">
                <h3>${this.title}</h3>
                <h4>${this.date}</h4>
                <p>${(0,a.unsafeHTML)(this.description)}</p>
                ${""!==this.check_it_out_link?(0,i.html)`<a class="item-check-it-out" href="${this.check_it_out_link}" target="_blank">${""!==this.custom_check_it_out_writing?this.custom_check_it_out_writing:"Check it out"} &#8594;</a>`:""}
                ${""!==this.read_more_link?(0,i.html)`<a class="item-check-it-out" href="${this.read_more_link}">Read more &#8594;</a>`:""}
                ${this.under_construction?(0,i.html)`<a class="item-check-it-out" href="">Project page under construction &#x1f6a7;</a>`:""}
            </div>
        </div>
        `}};c([(0,o.property)({type:"String"})],p.prototype,"title",void 0),c([(0,o.property)({type:"String"})],p.prototype,"date",void 0),c([(0,o.property)({type:"String"})],p.prototype,"description",void 0),c([(0,o.property)({type:"String"})],p.prototype,"check_it_out_link",void 0),c([(0,o.property)({type:"String"})],p.prototype,"custom_check_it_out_writing",void 0),c([(0,o.property)({type:"String"})],p.prototype,"read_more_link",void 0),c([(0,o.property)({type:"String"})],p.prototype,"alt_picture_src_href",void 0),c([(0,o.property)({type:"String"})],p.prototype,"picture_src_href",void 0),c([(0,o.property)({type:"Boolean"})],p.prototype,"under_construction",void 0),p=c([(0,o.customElement)("my-item")],p)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../style/item-img-style.ts":"9jMoh","lit/directives/unsafe-html.js":"gPTqb","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9jMoh":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"item_image_css",()=>o);var i=e("lit");let o={"ReSTIR Path Tracing":(0,i.css)`
        width: 100%;
        filter: brightness(2.5);`,"Geometry Processing":(0,i.css)`
        width: 100%;
        filter: brightness(1.5);`,"Path Tracing":(0,i.css)`
        width: 100%;
        filter: brightness(1.5);`,"Reaction-Diffusion Simulation":(0,i.css)`
        filter: brightness(1.5);`,"Cloud Volume Rendering":(0,i.css)`
        position: relative;
        height: 16rem;
        left: -10rem;`,"Conformal Map Viewer":(0,i.css)`
        position: relative;
        height: 16rem;`,"Hello Munchkins":(0,i.css)`
        position: relative;
        width: 24rem;
        left: -4.1rem;`,"Color.io":(0,i.css)`
        position: relative;
        height: 16rem;`,"filtered.ink":(0,i.css)`
        filter: saturate(1.3);
        position: relative;
        width: 30rem;
        left: -8rem;`,PortalInk:(0,i.css)`
        width: 100%;
        height: 100%;`,"Procedural 3D Paint":(0,i.css)`
        filter: saturate(1.3);
        position: relative;
        width: 25rem;
        left: -4rem;
        top: -1rem;`}},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gPTqb:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r);var i=e("lit-html/directives/unsafe-html.js");s.exportAll(i,r)},{"lit-html/directives/unsafe-html.js":"4DFR8","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"4DFR8":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"UnsafeHTMLDirective",()=>n),s.export(r,"unsafeHTML",()=>l);var i=e("../lit-html.js"),o=e("../directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends o.Directive{constructor(e){if(super(e),this.it=i.nothing,e.type!==o.PartType.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.nothing||null==e)return this._t=void 0,this.it=e;if(e===i.noChange)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;let l=(0,o.directive)(n)},{"../lit-html.js":"4A25t","../directive.js":"k6ssg","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k6ssg:[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"Directive",()=>n),s.export(r,"PartType",()=>i),s.export(r,"directive",()=>o);let i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this.t=e,this._$AM=t,this.i=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8Vkov":[function(e,t,r){t.exports=e("ab9831f8bdb53c1e").getBundleURL("FtrIg")+"profile-picture-1.7495cca9.jpg"},{ab9831f8bdb53c1e:"c7Tr5"}],"5Vowa":[function(e,t,r){t.exports=e("c4fd8f51c3e033ff").getBundleURL("FtrIg")+"new_pfp.f412a206.png"},{c4fd8f51c3e033ff:"c7Tr5"}],l2tlN:[function(e,t,r){t.exports=e("502c221a93f2be2a").getBundleURL("FtrIg")+"resume_fall2023.9e092d6e.pdf"},{"502c221a93f2be2a":"c7Tr5"}],eWLz8:[function(e,t,r){t.exports=e("a9ef4b32528c6bd3").getBundleURL("FtrIg")+"arrow_down.fbe43fd1.svg"},{a9ef4b32528c6bd3:"c7Tr5"}],aEJPz:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"ItemPortalInk",()=>d);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts");e("../components/item.ts");var l=e("../assets/portalink_solar_system_example.png"),a=s.interopDefault(l),c=e("../assets/portalink.gif"),p=s.interopDefault(c);let d=class extends i.LitElement{static get styles(){return[n.GlobalCSS,(0,i.css)`:host {

        }
    `]}render(){return(0,i.html)`
        <my-item
            title="PortalInk"
            date="fall 2023 - summer 2024"
            description="Extending filtered.ink for 2.5D visual storytelling in vector graphics. 
            Enabling artists to craft 2.5D experiences while maintaining traditional
            2D workflows through SVG transitions and portals. <br> Led to 1 publication at UIST '24."
            check_it_out_link="https://filtered.ink/#/"
            alt_picture_src_href="${a.default}"
            picture_src_href="${p.default}"></my-item>`}};d=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("item-portalink")],d)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/portalink_solar_system_example.png":"6MeND","../assets/portalink.gif":"bBlcd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6MeND":[function(e,t,r){t.exports=e("23acee45e66da9af").getBundleURL("FtrIg")+"portalink_solar_system_example.2cd6b5b4.png"},{"23acee45e66da9af":"c7Tr5"}],bBlcd:[function(e,t,r){t.exports=e("3343a4d622760b0d").getBundleURL("FtrIg")+"portalink.b7627d08.gif"},{"3343a4d622760b0d":"c7Tr5"}],"5bncE":[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"ItemFilteredInk",()=>d);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts");e("../components/item.ts");var l=e("../assets/village-gif.gif"),a=s.interopDefault(l),c=e("../assets/village.png"),p=s.interopDefault(c);let d=class extends i.LitElement{static get styles(){return[n.GlobalCSS,(0,i.css)`:host {

        }
    `]}render(){return(0,i.html)`
        <my-item
            title="filtered.ink"
            date="spring 2022 - fall 2023"
            description="A complete, web-based illustration system for vector graphics. 
            Augmenting artist users with dynamic textures and animated patterns 
            for novel stylization in the vector format. <br> Led to 2 publications at CHI '23."
            check_it_out_link="https://filtered.ink/#/"
            read_more_link="https://the3dsquare.com/project-pages/filteredink.html"
            alt_picture_src_href="${p.default}"
            picture_src_href="${a.default}"></my-item>`}};d=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("item-filtered-ink")],d)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/village-gif.gif":"fmwh2","../assets/village.png":"aJ5XW","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fmwh2:[function(e,t,r){t.exports=e("df479f8eebdc424c").getBundleURL("FtrIg")+"village-gif.5abbfea4.gif"},{df479f8eebdc424c:"c7Tr5"}],aJ5XW:[function(e,t,r){t.exports=e("adbce44dfa5d9ed1").getBundleURL("FtrIg")+"village.befd9f6b.png"},{adbce44dfa5d9ed1:"c7Tr5"}],egzT3:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"ItemProceduralPaint",()=>c);var i=e("lit"),o=e("lit/decorators.js"),n=e("../style/global.ts");e("../components/item.ts");var l=e("../assets/painted-cube.png"),a=s.interopDefault(l);let c=class extends i.LitElement{static get styles(){return[n.GlobalCSS,(0,i.css)`:host {

        }
    `]}render(){return(0,i.html)`
        <my-item
            title="Procedural 3D Paint"
            date="winter 2021 - spring 2022"
            description="A custom brush engine for painterly texture generation with 3D models. Helping artists paint light on textures in 3D with global illumination."
            read_more_link="https://the3dsquare.com/project-pages/procedural-paint.html"
            picture_src_href="${a.default}"></my-item>`}};c=function(e,t,r,s){var i,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(n=(o<3?i(n):o>3?i(t,r,n):i(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,o.customElement)("item-procedural-paint")],c)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/painted-cube.png":"b34pD","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],b34pD:[function(e,t,r){t.exports=e("362b3f9cc7e2b47e").getBundleURL("FtrIg")+"painted-cube.1c2d5e2f.png"},{"362b3f9cc7e2b47e":"c7Tr5"}]},["1wRUE","8RSWf"],"8RSWf","parcelRequireb742");
//# sourceMappingURL=index.f9ddb85c.js.map
