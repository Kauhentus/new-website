import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import color_io_picture from '../assets/colorio.png';

@customElement('item-color-io')
export class ItemColorIO extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Color.io"
            date="spring 2018 - present"
            description="A Discord bot supporting online art communities with color palette generation and image filtering. Currently serving 439 Discord guilds with 42538 members."
            check_it_out_link=${"https://discord.com/oauth2/authorize?client_id=918618009751404575&permissions=51264&scope=bot"}
            custom_check_it_out_writing="Invite Color.io to your server"
            picture_src_href="${color_io_picture}"></my-item>`;
    }
}