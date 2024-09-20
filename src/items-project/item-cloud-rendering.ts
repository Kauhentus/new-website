import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import cloud_volume_picture from '../assets/cloud-banner-preview.png';

@customElement('item-cloud-rendering')
export class ItemCloudRendering extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Cloud Volume Rendering"
            date="fall 2023"
            description="A volumetric raymarcher that renders procedural clouds with single scattering and the Nishita sky model. Implemented in WebGPU and WGSL."
            read_more_link=${"https://the3dsquare.com/project-pages/cloudrendering.html"}
            picture_src_href="${cloud_volume_picture}"></my-item>`;
    }
}