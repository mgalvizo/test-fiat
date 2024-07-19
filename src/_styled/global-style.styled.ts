'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --max-design-width: 1024px;
    --base-fsz: 62.5%;
    --body-ffam: var(--font-lato);
    --body-fsz: 1.1rem;
    --body-lht: 1.5;
    --regular: 400;
    --bold: 700;
    --x-bold: 900;
    /* COLORS */
    --red: #ff0000;
    --white: #FFFFFF;
    --black: #000000;
    --blue: #4957d1;
    --gradient: linear-gradient(170deg, var(--blue) 0%, var(--blue) 55%, var(--red) 55%, var(--red) 100%);
    /* HEADINGS */
    --heading-ffam: var(--font-playfair_display);
    --heading-fsz-1: 1.1rem;
    --heading-fsz-2-s: 1.1rem;
    --heading-fsz-2-m: 1.2rem;
    --h2-dec-line-wt-m: 64px;
    --h2-dec-line-wt-l: 55px;
    --h2-dec-line-ht-m: 1px;
    --heading-fsz-3-s: 4.0rem;
    --heading-fsz-3-m: 7.7rem;
    --heading-fsz-3-l: 11.0rem;
    --heading-fsz-4-s: 2.9rem;
    --heading-fsz-4-m: 3.9em;
    --heading-fsz-4-l: 4.3rem;
    --h4-dec-line-wt-m: 94px;
    --h4-dec-line-wt-l: 170px;
    --h4-dec-line-ht-m: 1px;
    --heading-fsz-5: 1.1rem;
    --heading-lht: 1;
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
    /* FORM */
    --label-lht: 1;
    --input-sz: 40px;
    --dropdown-ht: 300px;
    --option-sz: 30px;
    --chevron-wt: 13px;
    --chevron-ht: 13px;
    /* MISC*/
    --menu-ht: 50px;
    --hamburguer-wt: 35px;
    --hamburguer-icon-ht: 15px;
    --hamburguer-bar-wt: 18px; 
    --hamburguer-bar-ht: 3px; 
    --logo-sz: 119px;
    --car-i-wt-s: 234px;  
    --car-i-wt-m: 388px;  
    --car-i-wt-l: 468px;  
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
    font-size: var(--body-fsz);
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
  font-weight: var(--bold);
  line-height: var(--heading-lht);
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
