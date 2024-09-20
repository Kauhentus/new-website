import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import conformal_map_picture from '../assets/conformal-preview.png';

@customElement('item-conformal-map')
export class ItemConformalMap extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Conformal Map Viewer"
            date="fall 2023"
            description="An interactive viewer of conformal maps with zoom and pan. Supports animation and iterative functions. Runs in realtime with a WebGPU backend."
            check_it_out_link=${"https://the3dsquare.com/conformal/"}
            custom_check_it_out_writing="Check out the interactive viewer (Chromium only)"
            picture_src_href="${conformal_map_picture}"></my-item>`;
    }
}