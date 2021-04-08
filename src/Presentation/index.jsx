import React from "react";
import { Presentation as RawPresentation, Slide } from "react-presents";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Styles from "./styles";
import CursorHider from "../helpers/CursorHider";
import CodeZoomHandler from "../helpers/CodeZoomHandler";
import Sandbox from "../helpers/Sandbox";
import { useGlobalShortcuts } from "../helpers/shortcuts";
import { misdreavus } from "../themes";

const pickSandboxOptions = (obj, name) => {
  if (!obj.index) return null;

  const extractionNeeded = typeof obj.index !== "string";
  const main = extractionNeeded ? Object.values(obj.index)[0] : obj.index;
  const styles = obj.styles
    ? extractionNeeded
      ? Object.values(obj.styles)[0]
      : obj.styles
    : null;

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
  const { darkMode, hideSkippedSlides } = useGlobalShortcuts();

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
            .map((name) => ({
              name,
              slide: slides[name].default || slides[name],
              skip: !!slides[name].skip,
            }))
            .filter(({ skip }) => !hideSkippedSlides || !skip)
            .map(({ name, slide }) => (
              <Slide component={slide} key={name} />
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
  sandboxes: rawSandboxes,
  theme = misdreavus,
  ...rest
}) => {
  const sandboxes = getSandboxes(rawSandboxes);

  return (
    <HashRouter>
      <Switch>
        <Route
          path="/([0-9]+/[0-9]+)?"
          exact
          render={() => <PresentationRoute theme={theme} {...rest} />}
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
