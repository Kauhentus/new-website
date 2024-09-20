import { unsafeCSS } from 'lit';
import { css } from 'lit-element';

export const GlobalCSS = unsafeCSS(`
h1 {
    font-family: MainFont, system-ui;
    font-size: 48pt;

    margin-top: 1rem;
    margin-bottom: 1rem;
}

h2 {
    font-family: MainFont, system-ui;
    font-size: 32pt;
}

h3 {
    font-family: MainFont, system-ui;
    font-size: 24pt;
}

h4 {
    font-family: MainFont, system-ui;
    font-size: 16pt;
}

p {
    font-family: MainFontLight, system-ui;
    font-size: 14pt;
}

a {
    font-family: MainFontLight, system-ui;
    font-size: 14pt;
}

.small-text {
    font-family: MainFontLight, system-ui;
    font-size: 11pt;
}

`);