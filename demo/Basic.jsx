import React from "react";

import { Presentation, Slide } from "../src";

const Slide1 = () => {
  return <Slide>Hello</Slide>;
};

const Slide2 = () => {
  return <Slide>Goodbye</Slide>;
};

export const Basic = () => {
  return (
    <div style={{ height: "50vh", minHeight: "fit-content" }}>
      <Presentation slides={{ Slide1, Slide2 }} />
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
