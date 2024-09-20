import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import restir_picture from '../assets/restir_thumbnail.png';

@customElement('item-restir')
export class ItemReSTIR extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="ReSTIR Path Tracing"
            date="spring 2024"
            description="Implemented NVIDIA's Spatiotemporal Reservoir Resampling (ReSTIR) paper in a GPU-based path tracer. Realtime rendering with millions of lights. Written with C++/CUDA/OptiX. Final project for Brown CSCI 2240."
            under_construction=${true}
            picture_src_href="${restir_picture}"></my-item>`;
    }
}