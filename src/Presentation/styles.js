import commonStyles from "./styles/common";
import codeMirrorStyles from "./styles/codemirror";
import { createStylesHook } from "../helpers/styling";

export const useStyles = createStylesHook(`
    ${commonStyles}
    ${codeMirrorStyles}
`);
