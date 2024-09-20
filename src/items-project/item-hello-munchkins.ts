import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import hello_munchkins_picture from '../assets/hellomunchkin.png';

@customElement('item-hello-munchkins')
export class ItemHelloMunchkins extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Hello Munchkins"
            date="summer 2019 - spring 2023"
            description="A kid-friendly application to design custom name keychain 3D models for 3D printing. Used by Toysinbox 3D Printing to host library programs to children across the country."
            check_it_out_link=${"https://toysinbox3dprinting.com/hellomunchkin-2023/"}
            picture_src_href="${hello_munchkins_picture}"></my-item>`;
    }
}