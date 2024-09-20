import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';
import { item_image_css } from '../style/item-img-style.ts';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('my-item')
export class MyItem extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }

        .item-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 4rem;
        }
        
        .item-container-left {
            display: flex;
            flex-direction: column;
        
            margin-right: 4rem;
        }
        
        .item-container-right {
            display: flex;
            flex-direction: column;

            width: 32rem;
        }

        .item-img-container {
            width: 16rem;
            height: 16rem;

            border: 1.5px solid black;
            overflow: hidden;
            display: flex;
            position: relative;
        }

        .item-snippet-small-screen {
            display: none;
        }

        .item-container h3 {
            font-family: MainFont, system-ui;
            font-size: 24pt;

            margin-top: 0;
            margin-bottom: 0;
        }

        .item-container h4 {
            font-family: MainFont, system-ui;
            font-size: 16pt;

            margin-top: 0;
            margin-bottom: 0;
        }

        .img-above {
            position: absolute !important;
            z-index: 100;
        }

        .img-below {
            position: absolute !important;
            z-index: 0;
        }
    `]};

    @property({type: 'String'}) title = '';
    @property({type: 'String'}) date = '';
    @property({type: 'String'}) description = '';
    @property({type: 'String'}) check_it_out_link = '';
    @property({type: 'String'}) custom_check_it_out_writing = '';
    @property({type: 'String'}) read_more_link = '';
    @property({type: 'String'}) alt_picture_src_href = '';
    @property({type: 'String'}) picture_src_href = '';
    @property({type: 'Boolean'}) under_construction = false;

    render() {
        return html`
        <div class="item-container">
            <div class="item-container-left">
                <div class="item-img-container">
                    ${this.alt_picture_src_href !== '' ?
                        html`<img class="img-below" id=${this.title} style=${item_image_css[this.title]} src="${this.alt_picture_src_href}">` : ""}
                    <img class="img-above" id=${this.title} style=${item_image_css[this.title]} src="${this.picture_src_href}">
                </div>
            </div>
            
            <div class="item-container-right">
                <h3>${this.title}</h3>
                <h4>${this.date}</h4>
                <p>${unsafeHTML(this.description)}</p>
                ${this.check_it_out_link !== '' ?
                    html`<a class="item-check-it-out" href="${this.check_it_out_link}" target="_blank">${
                        this.custom_check_it_out_writing !== "" ? this.custom_check_it_out_writing : "Check it out"} &#8594;</a>` : ""}
                ${this.read_more_link !== '' ?
                    html`<a class="item-check-it-out" href="${this.read_more_link}">Read more &#8594;</a>` : ""}
                ${this.under_construction ?
                    html`<a class="item-check-it-out" href="">Project page under construction &#x1f6a7;</a>` : ""}
            </div>
        </div>
        `;
    }
}