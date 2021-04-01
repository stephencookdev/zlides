import manjari from "./manjari.woff2";

export default `
    @font-face {
        font-family: "Manjari";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("Manjari Regular"), local("Manjari-Regular"),
            url(${manjari}) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
        U+FEFF, U+FFFD;
    }
    
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: "Manjari", sans-serif;
    }
    
    .subtitle {
        font-size: 3vh;
        text-transform: uppercase;
        letter-spacing: 1.5vh;
        word-spacing: .5vh;
        margin: 0;
    }
    
    .checkboxLabel {
        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .checkboxLabel span {
        margin-left: 16px;
    }
    .center {
        display: flex;
        text-align: center;
        justify-content: center;
    }
    .middle {
        display: flex;
        align-items: center;
    }
    .scrollMiddle {
        display: flex;
        justify-content: center;
        height: 100%;
        overflow: auto;
    }
    .centerCode {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    
    .me {
        font-size: 5vh;
        display: flex;
        align-items: center;
    }
    .me svg,
    .me img {
        margin-right: 1rem;
    }
    .twitter {
        font-size: 12vh;
        margin-bottom: 6vh;
    }
    
    .largerFont {
        font-size: 4vh;
    }
    .largerFont input[type="radio"] {
        width: 2em;
        height: 2em;
    }
    
    .hugeText {
        text-align: center;
        font-size: 5vh;
    }
    .hugeText .main,
    .hugeText .pink,
    .hugeText .orange {
        font-size: 10vh;
    }
    .hugeText .main {
        color: var(--primary-color-alt);
    }
    .hugeText .main:nth-of-type(2n) {
        color: var(--primary-color);
    }

    .centerWithHeader {
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .centerWithHeader img:first-of-type:last-of-type {
        height: 50vh;
    }

    .spread {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    
    .sidebyside {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        width: 100%;
    }
    .displayRight {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: center;
    }
    .flexDown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .orange {
        color: var(--primary-color-alt);
    }
    .pink {
        color: var(--primary-color);
    }
    
    .quote {
        quotes: none;
    }
    .quote::before {
        content: "❝";
        position: relative;
        top: 0.8em;
        text-align: left;
    }
    .quote::after {
        content: "❞";
        text-align: right;
    }
    .quote::before,
    .quote::after {
        display: block;
        color: var(--primary-color-alt);
        font-size: 300%;
    }
    .quoteHighlight {
        display: block;
        font-size: 200%;
        color: var(--primary-color);
    }
    
    .nowrap {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .fixedImageContainer {
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fixedImageContainer img {
        display: block;
        max-width: 100%;
    }
`;
