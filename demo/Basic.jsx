import React from "react";

import { Presentation, Slide, HighlightList } from "../src";

const Slide1 = () => {
  return <Slide>Hello</Slide>;
};

const Slide2 = () => {
  return <Slide>Goodbye</Slide>;
};

const Slide3 = () => {
  return (
    <Slide title>
      <div className="hugeText">
        <q className="quote">
          <span className="quoteHighlight">Let me emphasise.</span>
          This is a quote. It's a quote about a lot of things with things.
        </q>
      </div>
    </Slide>
  );
};

const Slide4 = () => {
  return (
    <Slide>
      <q className="quote">
        <span className="quoteHighlight">Let me emphasise.</span>
        This is a quote. It's a quote about a lot of things with things.
      </q>
    </Slide>
  );
};

const Slide5 = () => {
  return (
    <Slide>
      <HighlightList items={["Hello", "Goodbye"]} />
    </Slide>
  );
};

export const Basic = () => {
  return (
    <div style={{ height: "50vh", minHeight: "fit-content" }}>
      <Presentation slides={{ Slide1, Slide2, Slide3, Slide4, Slide5 }} />
    </div>
  );
};

export default {
  title: "Basic",
  component: Basic,
};

// Storybook gets mad if these don't exist
Basic.args = {};
const Template = (args) => <Basic {...args} />;
