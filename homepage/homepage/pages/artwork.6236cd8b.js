!function(e,r,t,o,n){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f="function"==typeof i[o]&&i[o],l=f.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(r,t){if(!l[r]){if(!e[r]){var n="function"==typeof i[o]&&i[o];if(!t&&n)return n(r,!0);if(f)return f(r,!0);if(c&&"string"==typeof r)return c(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(t){var o=e[r][1][t];return null!=o?o:t},d.cache={};var a=l[r]=new s.Module(r);e[r][0].call(a.exports,d,a,a.exports,this)}return l[r].exports;function d(e){var r=d.resolve(e);return!1===r?{}:s(r)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=l,s.parent=f,s.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return i[o]}}),i[o]=s;for(var u=0;u<r.length;u++)s(r[u]);if(t){var a=s(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define(function(){return a})}}({aZMTU:[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t),o.export(t,"MyElement",()=>f);var n=e("lit"),i=e("lit/decorators.js");e("../components/navbar");let f=class extends n.LitElement{render(){return(0,n.html)`
            <my-navbar></my-navbar>
            <h1>THIS IS ARTWORK</h1>
        `}};f.styles=(0,n.css)`
        :host {
        display: block;
        padding: 16px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        }
        h1 {
        color: #333;
        font-size: 24px;
        }
    `,f=function(e,r,t,o){var n,i=arguments.length,f=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,r,t,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(f=(i<3?n(f):i>3?n(r,t,f):n(r,t))||f);return i>3&&f&&Object.defineProperty(r,t,f),f}([(0,i.customElement)("artwork-page")],f)},{lit:"aCmte","lit/decorators.js":"kQrIl","../components/navbar":"9SQ1S","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["aZMTU"],"aZMTU","parcelRequireb742");
//# sourceMappingURL=artwork.6236cd8b.js.map
