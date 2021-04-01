import React from "react";
import Styles from "./styles";

const Slide = ({ children, title }) => {
  return (
    <div className={`slide ${title ? "title-slide" : ""}`}>
      <Styles />
      {children}
    </div>
  );
};

export default Slide;
