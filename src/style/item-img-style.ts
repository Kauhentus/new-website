import { css, CSSResult } from "lit";

export const item_image_css: {[key: string]: CSSResult} = {
    // ###################
    // PROJECT ITEMS CSS
    // ###################

    "ReSTIR Path Tracing": css`
        width: 100%;
        filter: brightness(2.5);`,

    "Geometry Processing": css`
        width: 100%;
        filter: brightness(1.5);`,

    "Path Tracing": css`
        width: 100%;
        filter: brightness(1.5);`,

    "Reaction-Diffusion Simulation": css`
        filter: brightness(1.5);`,

    "Cloud Volume Rendering": css`
        position: relative;
        height: 16rem;
        left: -10rem;`,

    "Conformal Map Viewer": css`
        position: relative;
        height: 16rem;`,

    "Hello Munchkins": css`
        position: relative;
        width: 24rem;
        left: -4.1rem;`,

    "Color.io": css`
        position: relative;
        height: 16rem;`,

    // ###################
    // RESEARCH ITEMS CSS
    // ###################

    "filtered.ink": css`
        filter: saturate(1.3);
        position: relative;
        width: 30rem;
        left: -8rem;`,

    "PortalInk": css`
        width: 100%;
        height: 100%;`,

    "Procedural 3D Paint": css`
        filter: saturate(1.3);
        position: relative;
        width: 25rem;
        left: -4rem;
        top: -1rem;`
}