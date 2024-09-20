import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/navbar';

@customElement('artwork-page')
export class MyElement extends LitElement {
    static styles = css`
        :host {
        display: block;
        padding: 16px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 5px;
        }
        h1 {
        color: #333;
        font-size: 24px;
        }
    `;

    render() {
        return html`
            <my-navbar></my-navbar>
            <h1>THIS IS ARTWORK</h1>
        `;
    }
}