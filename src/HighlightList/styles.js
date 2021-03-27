import { createStylesHook } from "../helpers/styling";

export default createStylesHook(`
    .highlightList-list li {
        opacity: 0.5;
        transition: 0.4s ease opacity;
    }
    
    .highlightList-list li.highlightList-active {
        opacity: 1;
    }
`);
