import React from "react";

import { Presentation, Slide } from "../src";

const Slide1 = () => {
  return <Slide>Hello</Slide>;
};

const Slide2 = () => {
  return <Slide>Goodbye</Slide>;
};

export const Basic = () => {
  return <Presentation slides={{ Slide1, Slide2 }} />;
};

export default {
  title: "Basic",
  component: Basic,
};

// Storybook gets mad if these don't exist
Basic.args = {};
const Template = (args) => <Basic {...args} />;
