import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import portalink_picture from '../assets/portalink_solar_system_example.png';
// @ts-ignore
import portalink_gif from '../assets/portalink.gif';

@customElement('item-portalink')
export class ItemPortalInk extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="PortalInk"
            date="fall 2023 - summer 2024"
            description="Extending filtered.ink for 2.5D visual storytelling in vector graphics. 
            Enabling artists to craft 2.5D experiences while maintaining traditional
            2D workflows through SVG transitions and portals. <br> Led to 1 publication at UIST '24."
            check_it_out_link="https://filtered.ink/#/"
            alt_picture_src_href="${portalink_picture}"
            picture_src_href="${portalink_gif}"></my-item>`;
    }
}

