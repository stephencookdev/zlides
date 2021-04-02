import React, { useState } from "react";
import { Presentation as RawPresentation, Slide } from "react-presents";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Styles from "./styles";
import CursorHider from "../helpers/CursorHider";
import CodeZoomHandler from "../helpers/CodeZoomHandler";
import Sandbox from "../helpers/Sandbox";
import { misdreavus } from "../themes";

const pickSandboxOptions = (obj, name) => {
  if (!obj.index || !obj.styles) return null;

  const extractionNeeded = typeof obj.index !== "string";
  const main = extractionNeeded ? Object.values(obj.index)[0] : obj.index;
  const styles = extractionNeeded ? Object.values(obj.styles)[0] : obj.styles;

  return {
    route: name ? `/sandbox/${name.replace(/\s/g, "")}` : "/sandbox",
    props: { main, styles },
  };
};

const getSandboxes = (rawSandboxes) => {
  if (!rawSandboxes) return [];

  const sandboxesOptions = [
    pickSandboxOptions(rawSandboxes),
    ...Object.keys(rawSandboxes).map((s) =>
      pickSandboxOptions(rawSandboxes[s], s)
    ),
  ].filter(Boolean);

  const sandboxes = sandboxesOptions.map((options) => ({
    route: options.route,
    render: () => <Sandbox {...options.props} />,
  }));

  return sandboxes;
};

const PresentationRoute = ({ slides, theme, title }) => {
  const [darkMode, setDarkMode] = useState(!!localStorage.getItem("darkMode"));
  window.toggleDarkMode = () => {
    if (darkMode) {
      localStorage.removeItem("darkMode");
    } else {
      localStorage.setItem("darkMode", 1);
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "" : "light-mode"}>
      <Helmet>
        <title>{title || "Presentation using Zlides"}</title>
      </Helmet>
      <ThemeProvider theme={theme({ darkMode })}>
        <RawPresentation disableTheme>
          <Styles />
          <CursorHider />
          <CodeZoomHandler />

          {Object.keys(slides)
            .sort((s1, s2) => s1.localeCompare(s2))
            .map((name) => (
              <Slide
                component={slides[name].default || slides[name]}
                key={name}
              />
            ))}
        </RawPresentation>
      </ThemeProvider>
    </div>
  );
};

const Error404 = () => {
  return <h1>404</h1>;
};

const Presentation = ({
  slides,
  sandboxes: rawSandboxes,
  theme = misdreavus,
}) => {
  const sandboxes = getSandboxes(rawSandboxes);

  return (
    <HashRouter>
      <Switch>
        <Route
          path="/([0-9]+/[0-9]+)?"
          exact
          render={() => <PresentationRoute slides={slides} theme={theme} />}
        />
        {sandboxes.map((s) => (
          <Route exact key={s.route} path={s.route} render={s.render} />
        ))}
        <Route component={Error404} />
      </Switch>
    </HashRouter>
  );
};

export default Presentation;
