!function(e,t,r,o,n){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof s[o]&&s[o],c=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,r){if(!c[t]){if(!e[t]){var n="function"==typeof s[o]&&s[o];if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var m=Error("Cannot find module '"+t+"'");throw m.code="MODULE_NOT_FOUND",m}p.resolve=function(r){var o=e[t][1][r];return null!=o?o:r},p.cache={};var f=c[t]=new a.Module(t);e[t][0].call(f.exports,p,f,f.exports,this)}return c[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:a(t)}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=c,a.parent=i,a.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(a,"root",{get:function(){return s[o]}}),s[o]=a;for(var m=0;m<t.length;m++)a(t[m]);if(r){var f=a(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define(function(){return f})}}({eNwbt:[function(e,t,r){e("12c951e066f5effe").register(e("c75be725fd4c7f3d").getBundleURL("7ZT2X"),JSON.parse('["7ZT2X","projects.30e7625c.js","eCqVE","../restir_thumbnail.73c65482.png","3WLWh","../geometry_processing.2bbf5296.jpg","7h7tg","../path-tracer-pic.8484a58d.png","8czna","../reaction-diffusion.6717421c.png","9zunF","../cloud-banner-preview.402d804a.png","c0mUb","../conformal-preview.25d90d1c.png","PwxvO","../hellomunchkin.f3d65a89.png","bOx9U","../colorio.4db396cf.png","FtrIg","../index.dedcfd8f.js"]'))},{"12c951e066f5effe":"fyJL2",c75be725fd4c7f3d:"c7Tr5"}],fyJL2:[function(e,t,r){var o=new Map;t.exports.register=function(e,t){for(var r=0;r<t.length-1;r+=2)o.set(t[r],{baseUrl:e,path:t[r+1]})},t.exports.resolve=function(e){var t=o.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}},{}],c7Tr5:[function(e,t,r){var o={};function n(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return n(e[2])}return"/"}(),o[e]=t),t},r.getBaseURL=n,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],kJYGb:[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"MyElement",()=>c);var n=e("lit"),s=e("lit/decorators.js");e("../components/navbar");var i=e("../style/global.ts");e("../items-project/item-restir.ts"),e("../items-project/item-geometry-processing.ts"),e("../items-project/item-path-tracing.ts"),e("../items-project/item-reaction-diffusion.ts"),e("../items-project/item-cloud-rendering.ts"),e("../items-project/item-conformal-map.ts"),e("../items-project/item-hello-munchkins.ts"),e("../items-project/item-color-io.ts");let c=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            margin-bottom: 4rem;
        }
    `]}render(){return(0,n.html)`
            <my-navbar></my-navbar>
            <h1>My Projects</h1>

            <item-restir></item-restir>
            <item-geometry-processing></item-geometry-processing>
            <item-path-tracer></item-path-tracer>

            <item-reaction-diffusion></item-reaction-diffusion>
            <item-cloud-rendering></item-cloud-rendering>
            <item-conformal-map></item-conformal-map>
            <item-hello-munchkins></item-hello-munchkins>
            <item-color-io></item-color-io>

            <my-footer></my-footer>
        `}};c=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("project-page")],c)},{lit:"aCmte","lit/decorators.js":"kQrIl","../components/navbar":"9SQ1S","../style/global.ts":"7QH8W","../items-project/item-restir.ts":"6oyrR","../items-project/item-geometry-processing.ts":"9I3bw","../items-project/item-path-tracing.ts":"5XLSm","../items-project/item-reaction-diffusion.ts":"9qfI8","../items-project/item-cloud-rendering.ts":"lpcDH","../items-project/item-conformal-map.ts":"kIvKU","../items-project/item-hello-munchkins.ts":"4djRD","../items-project/item-color-io.ts":"5Ygka","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6oyrR":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemReSTIR",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/restir_thumbnail.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="ReSTIR Path Tracing"
            date="spring 2024"
            description="Implemented NVIDIA's Spatiotemporal Reservoir Resampling (ReSTIR) paper in a GPU-based path tracer. Realtime rendering with millions of lights. Written with C++/CUDA/OptiX. Final project for Brown CSCI 2240."
            under_construction=${!0}
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-restir")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/restir_thumbnail.png":"7bLHO","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7bLHO":[function(e,t,r){t.exports=e("e7f99b25af20ba2").getBundleURL("7ZT2X")+"../restir_thumbnail.73c65482.png"},{e7f99b25af20ba2:"c7Tr5"}],"9I3bw":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemGeometryProcessing",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/geometry_processing.jpg"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Geometry Processing"
            date="spring 2024"
            description="A basic geometry processing demo implemented in Javascript. Supports subdivision, decimate, remesh, and filtering operations. Project for Brown CSCI 2240."
            check_it_out_link=${"https://the3dsquare.com/basic-geometry-processing/"}
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-geometry-processing")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/geometry_processing.jpg":"etxDN","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],etxDN:[function(e,t,r){t.exports=e("e4c01c3c02d4c5cd").getBundleURL("7ZT2X")+"../geometry_processing.2bbf5296.jpg"},{e4c01c3c02d4c5cd:"c7Tr5"}],"5XLSm":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemGeometryProcessing",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/path-tracer-pic.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Path Tracing"
            date="spring 2024"
            description="A basic path tracer demo implemented in WebGPU and WGSL. Supports Lambertian, Phong, and Beckmann BRDFs along with reflection + fresnel refraction. Project for Brown CSCI 2240."
            check_it_out_link=${"https://the3dsquare.com/basic-path-tracer/"}
            custom_check_it_out_writing="Check it out (Chromium only)"
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-path-tracer")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/path-tracer-pic.png":"hdRqe","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hdRqe:[function(e,t,r){t.exports=e("bb409dcc3377417").getBundleURL("7ZT2X")+"../path-tracer-pic.8484a58d.png"},{bb409dcc3377417:"c7Tr5"}],"9qfI8":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemReactionDiffusion",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/reaction-diffusion.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Reaction-Diffusion Simulation"
            date="winter 2024"
            description="An interactive, reaction-diffusion simulation modeled with the Grey-Scott model. Produces a wide range of patterns reminiscent of those we observe in nature. Implemented in WebGPU and WGSL."
            check_it_out_link=${"https://the3dsquare.com/reaction-diffusion/"}
            custom_check_it_out_writing="Check it out (Chromium only)"
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-reaction-diffusion")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/reaction-diffusion.png":"b6zxL","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],b6zxL:[function(e,t,r){t.exports=e("3b5495315119a184").getBundleURL("7ZT2X")+"../reaction-diffusion.6717421c.png"},{"3b5495315119a184":"c7Tr5"}],lpcDH:[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemCloudRendering",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/cloud-banner-preview.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Cloud Volume Rendering"
            date="fall 2023"
            description="A volumetric raymarcher that renders procedural clouds with single scattering and the Nishita sky model. Implemented in WebGPU and WGSL."
            read_more_link=${"https://the3dsquare.com/project-pages/cloudrendering.html"}
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-cloud-rendering")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/cloud-banner-preview.png":"aYysn","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aYysn:[function(e,t,r){t.exports=e("85fae47d58cba4b3").getBundleURL("7ZT2X")+"../cloud-banner-preview.402d804a.png"},{"85fae47d58cba4b3":"c7Tr5"}],kIvKU:[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemConformalMap",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/conformal-preview.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Conformal Map Viewer"
            date="fall 2023"
            description="An interactive viewer of conformal maps with zoom and pan. Supports animation and iterative functions. Runs in realtime with a WebGPU backend."
            check_it_out_link=${"https://the3dsquare.com/conformal/"}
            custom_check_it_out_writing="Check out the interactive viewer (Chromium only)"
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-conformal-map")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/conformal-preview.png":"bLQyG","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],bLQyG:[function(e,t,r){t.exports=e("322aff27f0046475").getBundleURL("7ZT2X")+"../conformal-preview.25d90d1c.png"},{"322aff27f0046475":"c7Tr5"}],"4djRD":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemHelloMunchkins",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/hellomunchkin.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Hello Munchkins"
            date="summer 2019 - spring 2023"
            description="A kid-friendly application to design custom name keychain 3D models for 3D printing. Used by Toysinbox 3D Printing to host library programs to children across the country."
            check_it_out_link=${"https://toysinbox3dprinting.com/hellomunchkin-2023/"}
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-hello-munchkins")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/hellomunchkin.png":"FGgKN","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],FGgKN:[function(e,t,r){t.exports=e("1db40107138cc86b").getBundleURL("7ZT2X")+"../hellomunchkin.f3d65a89.png"},{"1db40107138cc86b":"c7Tr5"}],"5Ygka":[function(e,t,r){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"ItemColorIO",()=>a);var n=e("lit"),s=e("lit/decorators.js"),i=e("../style/global.ts");e("../components/item.ts");var c=e("../assets/colorio.png"),l=o.interopDefault(c);let a=class extends n.LitElement{static get styles(){return[i.GlobalCSS,(0,n.css)`:host {

        }
    `]}render(){return(0,n.html)`
        <my-item
            title="Color.io"
            date="spring 2018 - present"
            description="A Discord bot supporting online art communities with color palette generation and image filtering. Currently serving 439 Discord guilds with 42538 members."
            check_it_out_link=${"https://discord.com/oauth2/authorize?client_id=918618009751404575&permissions=51264&scope=bot"}
            custom_check_it_out_writing="Invite Color.io to your server"
            picture_src_href="${l.default}"></my-item>`}};a=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([(0,s.customElement)("item-color-io")],a)},{lit:"aCmte","lit/decorators.js":"kQrIl","../style/global.ts":"7QH8W","../components/item.ts":"iQMSz","../assets/colorio.png":"iVh7Q","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iVh7Q:[function(e,t,r){t.exports=e("15cdf7dac4d7261a").getBundleURL("7ZT2X")+"../colorio.4db396cf.png"},{"15cdf7dac4d7261a":"c7Tr5"}]},["eNwbt","kJYGb"],"kJYGb","parcelRequireb742");
//# sourceMappingURL=projects.30e7625c.js.map
