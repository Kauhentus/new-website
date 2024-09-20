import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import filtered_ink_gif from '../assets/village-gif.gif';
// @ts-ignore
import filtered_ink_picture from '../assets/village.png';

@customElement('item-filtered-ink')
export class ItemFilteredInk extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="filtered.ink"
            date="spring 2022 - fall 2023"
            description="A complete, web-based illustration system for vector graphics. 
            Augmenting artist users with dynamic textures and animated patterns 
            for novel stylization in the vector format. <br> Led to 2 publications at CHI '23."
            check_it_out_link="https://filtered.ink/#/"
            read_more_link="https://the3dsquare.com/project-pages/filteredink.html"
            alt_picture_src_href="${filtered_ink_picture}"
            picture_src_href="${filtered_ink_gif}"></my-item>`;
    }
}