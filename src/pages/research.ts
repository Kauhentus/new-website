import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/navbar';
import '../components/footer.ts';
import '../components/item.ts';

// ## BOTTOM HALF IMAGE IMPORTS
import '../items-research/item-portalink.ts';
import '../items-research/item-filtered-ink.ts';
import '../items-research/item-procedural-paint.ts'

@customElement('research-page')
export class MyElement extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            margin-bottom: 4rem;
        }
    `]};

    render() {
        return html`
            <my-navbar></my-navbar>
            <h1>My Research</h1>

            <item-portalink></item-portalink>
            <item-filtered-ink></item-filtered-ink>
            <item-procedural-paint></item-procedural-paint>

            <my-footer></my-footer>
        `;
    }
}