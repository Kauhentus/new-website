import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

@customElement('my-footer')
export class MyFooter extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {
            margin-top: 4rem;
            margin-bottom: 1rem;
        }
    `]};

    render() {
        return html`
        <p>Designed and built with &#127912; by Josh Yang</p>
        `;
    }
}