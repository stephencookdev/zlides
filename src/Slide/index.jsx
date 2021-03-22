import React, { useState } from "react";
import { useStyles } from "./styles";

const Slide = ({ children, title }) => {
  useStyles();

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
    <div
      className={`slide ${title ? "title-slide" : ""} ${
        darkMode ? "" : "light-mode"
      }`}
    >
      {children}
    </div>
  );
};

export default Slide;
