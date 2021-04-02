import commonStyles from "./styles/common";
import codeMirrorStyles from "./styles/codemirror";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    ${commonStyles}
    ${codeMirrorStyles}

    :root {
        --safe-padding: ${(props) => props.theme.safePadding};
        --safe-padding-bottom: ${(props) => props.theme.safePaddingBottom};
        --primary-color: ${(props) => props.theme.primaryColor};
        --primary-color-alt: ${(props) => props.theme.primaryColorAlt};
        --primary-dark: ${(props) => props.theme.primaryDark};
        --primary-light: ${(props) => props.theme.primaryLight};
        --slide-foreground: ${(props) => props.theme.slideForeground};
        --slide-background: ${(props) => props.theme.slideBackground};
    }
`;

export default Styles;
