import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GlobalCSS } from '../style/global.ts';
import { relative_root } from '../index.ts';

@customElement('my-navbar')
export class MyNavbar extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {
            width: 100%;
        }
        
        nav {
            width: fit-content;
            margin-left: auto;
            margin-right: 4rem;
            
            margin-top: 2rem;
            margin-bottom: 4rem;
        }

        nav a {
            font-family: system-ui;
            font-size: 16pt;
            
            color: black;
            text-decoration: none;
            cursor: pointer;

            margin-left: 1rem;
            margin-right: 1rem;
        }
    `]};

    render() {
        return html`
        <nav>
            <a href="${relative_root}/index.html">About</a>
            <a href="${relative_root}/pages/research.html">Research</a>
            <a href="${relative_root}/pages/projects.html">Projects</a>
            <!-- <a href="/pages/blog.html">Blog</a> -->
            <a href="${relative_root}/pages/artwork.html">Artwork</a>
        </nav>`;
    }
}