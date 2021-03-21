import React from "react";
import { Presentation as RawPresentation, Slide } from "react-presents";

import CursorHider from "./helpers/CursorHider";
import CodeZoomHandler from "./helpers/CodeZoomHandler";

export { Step, Code } from "react-presents";

require("codemirror/mode/css/css");
require("codemirror/mode/htmlmixed/htmlmixed");

export const Presentation = ({ slides }) => {
  return (
    <RawPresentation disableTheme>
      <CursorHider />
      <CodeZoomHandler />

      {Object.keys(slides)
        .sort((s1, s2) => s1.localeCompare(s2))
        .map((name) => (
          <Slide component={slides[name]} key={name} />
        ))}
    </RawPresentation>
  );
};
