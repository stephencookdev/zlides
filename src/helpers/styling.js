import { useEffect } from "react";

export const createStylesHook = (styles) => () => {
  useEffect(() => {
    const styleNode = document.createElement("style");
    styleNode.setAttribute("type", "text/css");
    styleNode.innerHTML = styles;

    document.head.appendChild(styleNode);
    return () => document.head.removeChild(styleNode);
  }, [styles]);
};
