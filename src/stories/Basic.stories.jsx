import React from "react";

import { Presentation, Slide } from "../";

const Slide1 = () => {
  return <Slide>Hello</Slide>;
};

const Slide2 = () => {
  return <Slide>Goodbye</Slide>;
};

const App = () => {
  return <Presentation slides={{ Slide1, Slide2 }} />;
};

export default {
  title: "Basic",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
