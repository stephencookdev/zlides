import commonStyles from "./styles/common";
import codeMirrorStyles from "./styles/codemirror";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    ${commonStyles}
    ${codeMirrorStyles}
`;

export default Styles;
