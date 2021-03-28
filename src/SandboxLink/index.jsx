import React from "react";

const SandboxLink = ({ to, ...props }) => {
  return (
    <a
      href={
        process.env.NODE_ENV === "production"
          ? `#/sandbox/${to.replace(/\s/g, "")}`
          : "#/sandbox"
      }
      target="_blank"
      {...props}
    />
  );
};

export default SandboxLink;
