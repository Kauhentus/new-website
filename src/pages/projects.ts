import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../components/navbar';
import { GlobalCSS } from '../style/global.ts';

import '../items-project/item-restir.ts'
import '../items-project/item-geometry-processing.ts'
import '../items-project/item-path-tracing.ts'

import '../items-project/item-reaction-diffusion.ts'
import '../items-project/item-cloud-rendering.ts'
import '../items-project/item-conformal-map.ts'
import '../items-project/item-hello-munchkins.ts'
import '../items-project/item-color-io.ts'

@customElement('project-page')
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
            <h1>My Projects</h1>

            <item-restir></item-restir>
            <item-geometry-processing></item-geometry-processing>
            <item-path-tracer></item-path-tracer>

            <item-reaction-diffusion></item-reaction-diffusion>
            <item-cloud-rendering></item-cloud-rendering>
            <item-conformal-map></item-conformal-map>
            <item-hello-munchkins></item-hello-munchkins>
            <item-color-io></item-color-io>

            <my-footer></my-footer>
        `;
    }
}