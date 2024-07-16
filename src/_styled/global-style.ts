"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --max-design-width: 1024px;
    --base-fsz: 62.5%;
    --body-ffam: var(--font-lato);
    --body-fsz-s: 1.0rem;
    --body-fsz-m: 1.1rem;
    --body-fsz-l: 1.2rem;
    --body-lht: 1.5;
    --regular: 400;
    --bold: 700;
    --x-bold: 900;
    /* COLORS */
    --red: #ff0000;
    --white: #FFFFFF;
    --black: #000000;
    --blue: #4957d1;
    --gradient: linear-gradient(170deg, var(--red) 0%, var(--red) 50%, var(--blue) 50%, var(--blue) 100%);
    /* HEADINGS */
    --heading-ffam: var(--font-playfair_display);
    --heading-fsz-s: 1.4rem;
    --heading-fsz-m: 1.8rem;
    --heading-fsz-l: 2rem;
    --heading-lht: 1.5;
    /* SPACING */
    --web-padding-xs: 4px;
    --web-padding-s: 8px;
    --web-padding-m: 16px;
    --web-padding-l: 24px;
    --web-padding-xl: 32px;
    --web-padding-xl2: 40px;
    --web-margin-xs: 4px;
    --web-margin-s: 8px;
    --web-margin-m: 16px;
    --web-margin-l: 24px;
    --web-margin-xl: 32px;
    --web-margin-xl2: 40px;
    /* MISC*/
    --menu-height: 50px;
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-small-desktop: 48em; /* 768px */
    --media-s-l-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    font-size: var(--base-fsz);
    font-family: sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    scrollbar-gutter: stable;
}

body {
    background-color: var(--white);
    font-size: var(--body-fsz-m);
    line-height: var(--body-lht);
    overflow-x: hidden;
    font-family: var(--body-ffam);
    color: var(--black);
}

main{
    width: 100%;
}

img,
svg {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    font-weight: var(--regular);
    color: var(--red);
    text-decoration: none;
}

a:link:hover,
a:visited:hover {
    text-decoration: underline;
}

button {
    font-family: inherit;
    color: inherit;
    font-weight: bold;
    outline: none;
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  font-family: var(--font-playfair_display);
    font-weight: var(--x-bold);
}

strong {
  font-weight: var(--bold);
}

// 768px
@media only screen and (min-width: 48em) {}

// 1024px
@media only screen and (min-width: 64em) {}
`;

export default GlobalStyle;
