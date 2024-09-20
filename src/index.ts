import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

export const relative_root = "/homepage";

import './components/navbar.ts';
import './components/footer.ts';
import './components/item.ts';

// ## TOP HALF IMAGE IMPORTS
// @ts-ignore
import profile_picture from 'url:./assets/profile-picture-1.jpg';
// @ts-ignore
import profile_leaf_border from "url:./assets/new_pfp.png";
// @ts-ignore
import resume_cv_href from 'url:./assets/resume_fall2023.pdf';
// @ts-ignore
import down_arrow from 'url:./assets/arrow_down.svg';
// @ts-ignore
import arrow_css from 'url:./style/arrow.css';

// ## BOTTOM HALF IMAGE IMPORTS
import './items-research/item-portalink.ts';
import './items-research/item-filtered-ink.ts';
import './items-research/item-procedural-paint.ts'

import { GlobalCSS } from './style/global.ts';

@customElement('index-page')
export class MyElement extends LitElement {
    static get styles(){ return [
        GlobalCSS,
        css`:host {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #header-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        
            width: fit-content;
            margin-top: 4rem;
        }
        
        #header-container-left {
            display: flex;
            flex-direction: column;
        
            width: 32rem;
            margin-right: 4rem;
        }
        
        #header-container-right {
            position: relative;
            display: flex;
        
            width: 16rem;
            top: -10rem;
        }

        #header-profile-picture-1 {
            position: absolute;
            z-index: -10;
            width: 14rem;
            height: 18rem;
            object-fit: cover;
            filter: blur(0.5px);
        
            top: 2.5rem;
            left: 2.5rem;
        }
        
        #header-profile-picture-2 {
            position: absolute;
            width: 14rem;
            height: 18rem;
            object-fit: cover;
            border: 4px white solid;
            filter: blur(0.5px);
        }
            
        #selected-research-header {
            margin-top: 6rem;
            margin-bottom: 4rem;
        }
            
        `]
    };

    render() {
    return html`
    <link rel="stylesheet" type="text/css" href="${arrow_css}"/>
    <my-navbar></my-navbar>
      
    <div id="header-container">
        <div id="header-container-left">
            <h1>Joshua Yang</h1>
            <p>
                Hello! I'm an undergraduate student at Brown University studying Computer Science and Applied Mathematics.
                I'm a fanatic of CGI, digital creator tools, and cross-country roadtrips. 
                You'll find me bouncing around the Brown Human-Computer Interaction Lab researching new forms of creativity support for artists.
                <div class="small-text">Contact me at joshua_yang (at) brown.edu!</div>
                <div class="small-text"><a href=${resume_cv_href} target="_blank">Resume / CV</a></div>
            </p>
        </div>

        <div id="header-container-right">
            <img id="header-profile-picture-2" src="${profile_leaf_border}">
            <img id="header-profile-picture-1" src="${profile_picture}">
        </div>
    </div>

    <div class="pointer-container">
        <img class="arrow-down animated bounce" src="${down_arrow}">
    </div>

    <h2 id="selected-research-header">Selected Research + Projects</h2>

    <item-portalink></item-portalink>
    <item-filtered-ink></item-filtered-ink>
    <item-procedural-paint></item-procedural-paint>

    <my-footer></my-footer>
    `; 
    }
}