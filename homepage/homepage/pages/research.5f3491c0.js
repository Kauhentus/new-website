!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[n]&&i[n],l=s.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,r){if(!l[t]){if(!e[t]){var o="function"==typeof i[n]&&i[n];if(!r&&o)return o(t,!0);if(s)return s(t,!0);if(a&&"string"==typeof t)return a(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}m.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},m.cache={};var u=l[t]=new f.Module(t);e[t][0].call(u.exports,m,u,u.exports,this)}return l[t].exports;function m(e){var t=m.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=l,f.parent=s,f.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(f,"root",{get:function(){return i[n]}}),i[n]=f;for(var c=0;c<t.length;c++)f(t[c]);if(r){var u=f(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({htWm9:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"MyElement",()=>l);var o=e("lit"),i=e("lit/decorators.js"),s=e("../style/global.ts");e("../components/navbar"),e("../components/footer.ts"),e("../components/item.ts"),e("../items-research/item-portalink.ts"),e("../items-research/item-filtered-ink.ts"),e("../items-research/item-procedural-paint.ts");let l=class extends o.LitElement{static get styles(){return[s.GlobalCSS,(0,o.css)`:host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            margin-bottom: 4rem;
        }
    `]}render(){return(0,o.html)`
            <my-navbar></my-navbar>
            <h1>My Research</h1>

            <item-portalink></item-portalink>
            <item-filtered-ink></item-filtered-ink>
            <item-procedural-paint></item-procedural-paint>

            <my-footer></my-footer>
        `}};l=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}([(0,i.customElement)("research-page")],l)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/navbar":"9SQ1S","../components/footer.ts":"fo7h0","../components/item.ts":"iQMSz","../items-research/item-portalink.ts":"aEJPz","../items-research/item-filtered-ink.ts":"5bncE","../items-research/item-procedural-paint.ts":"egzT3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["htWm9"],"htWm9","parcelRequireb742");
//# sourceMappingURL=research.5f3491c0.js.map
