import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    .slide {
        background: var(--slide-background);
        color: var(--slide-foreground);
        width: 100%;
        height: 100%;
        line-height: 1.5;
        padding: var(--safe-padding) var(--safe-padding) var(--safe-padding-bottom);
        box-sizing: border-box;
        overflow: hidden;
    }
    
    .slide h1 {
        border-bottom: 1vh solid var(--primary-color);
        padding-bottom: 1rem;
        margin: 1rem 0 3rem;
        font-size: 9vh;
        line-height: 1;
        }
    }
    @media (max-width: 856px) {
        .slide h1 {
            margin: 1rem 0;
        }
    }

    .slide ul {
        font-size: 5vh;
    }

    .slide hr {
        border: 0;
        width: 50%;
        border-color: currentColor;
        border-style: solid;
        border-top-width: 1vh;
        margin: 4vh 0;
    }

    .slide code {
        background: var(--primary-dark);
        border: 1px solid var(--primary-dark);
        padding: 4px 8px;
    }

    .slide a {
        color: var(--primary-color);
        text-decoration: underline;
    }

    .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror {
        height: fit-content;
        width: fit-content;
        zoom: var(--code-zoom-amount, 2);
        border-radius: 0.5em;
        font-size: 1.5vh;
    }

    .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-line {
        overflow: hidden;
    }

    .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .highlight {
        display: inline-block;
    }
    .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .highlight:last-of-type {
        width: 100%;
    }
    
    .light-mode .slide .ReactCodeMirror {
        box-shadow: 0 0 2px var(--primary-dark);
        border-radius: 0.5em;
        overflow: hidden;
    }
    
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror {
        background: #fff !important;
        color: #000 !important;
    }
    
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror div.CodeMirror-cursor {
        border-left: 3px solid #000000;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-activeline-background {
        background: #00001a;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-selected {
        background: #bad6fd;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-string {
        color: #c41a16;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-number {
        color: null;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-keyword {
        color: #aa0d91;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-atom {
        color: null;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-variable {
        color: #000000;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-def {
        font-style: italic;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-comment {
        color: #007400;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-variable-2 {
        color: #881280;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-property {
        color: null;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-operator {
        color: #aa0d91;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-linenumber {
        color: #007400;
    }
    .light-mode .slide .ReactCodeMirror .cm-s-reactpresents.CodeMirror .highlight {
        background: #e8f2ff;
    }
    
    .title-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .title-slide h1 {
        padding-right: 0 !important;
    }
    
    /**
     * this is the react-presents \`TouchNav\`, and I can't see that there's another
     * way to disable it :/ */
    .slide + div button:disabled {
        opacity: 0.3;
    }
    @media (min-width: 856px) {
        .slide + div {
            display: none;
        }
    }
`;

export default Styles;
