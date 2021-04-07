import React from "react";
import { SandboxBody } from "./styles";

const transformHtml = (html, styles) =>
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c] || c}"`);

const Sandbox = ({ main, styles }) => {
  return (
    <SandboxBody
      dangerouslySetInnerHTML={{ __html: transformHtml(main, styles) }}
    />
  );
};

export default Sandbox;
