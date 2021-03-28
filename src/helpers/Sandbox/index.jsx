import React from "react";

const transformHtml = (html, styles) =>
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c] || c}"`);

const Sandbox = ({ main, styles }) => {
  return (
    <>
      <style type="text/css">{`
        .sandbox-body {
            padding: 5vh;
            font-size: 4vh;
        }
        .sandbox-body input {
            font-size: inherit;
        }
        `}</style>
      <div
        className="sandbox-body"
        dangerouslySetInnerHTML={{ __html: transformHtml(main, styles) }}
      />
    </>
  );
};

export default Sandbox;
