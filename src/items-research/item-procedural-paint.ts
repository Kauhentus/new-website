import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import procedural_paint_picture from '../assets/painted-cube.png';

@customElement('item-procedural-paint')
export class ItemProceduralPaint extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Procedural 3D Paint"
            date="winter 2021 - spring 2022"
            description="A custom brush engine for painterly texture generation with 3D models. Helping artists paint light on textures in 3D with global illumination."
            read_more_link="https://the3dsquare.com/project-pages/procedural-paint.html"
            picture_src_href="${procedural_paint_picture}"></my-item>`;
    }
}