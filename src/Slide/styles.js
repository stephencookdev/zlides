import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    .slide {
        background: #282a36;
        color: #f8f8f2;
        width: 100%;
        height: 100%;
        line-height: 1.5;
        padding: 2vh 2vh 8vh;
        box-sizing: border-box;
        overflow: hidden;
    }

    .slide.light-mode {
        background: #5b5d69;
    }
    
    .slide h1 {
        border-bottom: 0.5vh solid currentColor;
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
        background: #222;
        border: 1px solid #111;
        padding: 4px 8px;
    }

    .slide a {
        color: #f92672;
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
    
    .slide.light-mode.ReactCodeMirror {
        border-radius: 0.5em;
        overflow: hidden;
    }
    
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror {
        background: #fff !important;
        color: #000 !important;
    }
    
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror div.CodeMirror-cursor {
        border-left: 3px solid #000000;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-activeline-background {
        background: #0000001a;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-selected {
        background: #bad6fd;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-string {
        color: #c41a16;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-number {
        color: null;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-keyword {
        color: #aa0d91;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-atom {
        color: null;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-variable {
        color: #000000;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-def {
        font-style: italic;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-comment {
        color: #007400;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-variable-2 {
        color: #881280;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-property {
        color: null;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .cm-operator {
        color: #aa0d91;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .CodeMirror-linenumber {
        color: #007400;
    }
    .slide.light-mode .ReactCodeMirror .cm-s-reactpresents.CodeMirror .highlight {
        background: #e8f2ff;
    }
    
    .title-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    
        h1 {
            padding-right: 0 !important;
        }
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
