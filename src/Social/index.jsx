import React from "react";
import { TwitterIcon } from "./icons";

const Social = ({ twitter, work, url }) => {
  const showBigWorkEl = !twitter;
  const { Logo: WorkLogo } = work || {};
  const WorkComp = () => {
    if (!work) return null;
    return showBigWorkEl ? (
      <>
        <WorkLogo height="12vh" />
        <hr className="highlight" />
        <span className="me">{work.url}</span>
      </>
    ) : (
      <span className="me">
        <WorkLogo height="6vh" />
        {work.url}
      </span>
    );
  };

  return (
    <>
      {twitter && (
        <span className="me twitter">
          <TwitterIcon />
          {twitter}
        </span>
      )}

      {url && <span className="me">{url}</span>}

      {(twitter || url) && work && <hr className="highlight" />}

      <WorkComp />
    </>
  );
};

export default Social;
