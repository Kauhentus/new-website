import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import path_tracer_picture from '../assets/path-tracer-pic.png';

@customElement('item-path-tracer')
export class ItemGeometryProcessing extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Path Tracing"
            date="spring 2024"
            description="A basic path tracer demo implemented in WebGPU and WGSL. Supports Lambertian, Phong, and Beckmann BRDFs along with reflection + fresnel refraction. Project for Brown CSCI 2240."
            check_it_out_link=${"https://the3dsquare.com/basic-path-tracer/"}
            custom_check_it_out_writing="Check it out (Chromium only)"
            picture_src_href="${path_tracer_picture}"></my-item>`;
    }
}