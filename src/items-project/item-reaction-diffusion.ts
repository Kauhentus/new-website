import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';

import '../components/item.ts';
// @ts-ignore
import reaction_diffusion_picture from '../assets/reaction-diffusion.png';

@customElement('item-reaction-diffusion')
export class ItemReactionDiffusion extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {

        }
    `]};

    render() {
        return html`
        <my-item
            title="Reaction-Diffusion Simulation"
            date="winter 2024"
            description="An interactive, reaction-diffusion simulation modeled with the Grey-Scott model. Produces a wide range of patterns reminiscent of those we observe in nature. Implemented in WebGPU and WGSL."
            check_it_out_link=${"https://the3dsquare.com/reaction-diffusion/"}
            custom_check_it_out_writing="Check it out (Chromium only)"
            picture_src_href="${reaction_diffusion_picture}"></my-item>`;
    }
}