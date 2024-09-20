import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import geometry_picture from '../assets/geometry_processing.jpg';

@customElement('item-geometry-processing')
export class ItemGeometryProcessing extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Geometry Processing"
            date="spring 2024"
            description="A basic geometry processing demo implemented in Javascript. Supports subdivision, decimate, remesh, and filtering operations. Project for Brown CSCI 2240."
            check_it_out_link=${"https://the3dsquare.com/basic-geometry-processing/"}
            picture_src_href="${geometry_picture}"></my-item>`;
    }
}