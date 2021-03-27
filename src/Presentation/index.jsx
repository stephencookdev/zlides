import React from "react";
import { Presentation as RawPresentation, Slide } from "react-presents";

import { useStyles } from "./styles";
import CursorHider from "../helpers/CursorHider";
import CodeZoomHandler from "../helpers/CodeZoomHandler";

const Presentation = ({ slides }) => {
  useStyles();

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

export default Presentation;
