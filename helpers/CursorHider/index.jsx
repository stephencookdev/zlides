import React, { useState, useEffect } from "react";

const HIDE_WAIT = 1000;

const useMousePosition = () => {
  const [[x, y], setPosition] = useState([null, null]);

  useEffect(() => {
    const mouseMove = (e) => {
      if (x !== e.clientX || y !== e.clientY) {
        setPosition([e.clientX, e.clientY]);
      }
    };
    document.addEventListener("mousemove", mouseMove);

    return () => document.removeEventListener("mousemove", mouseMove);
  });

  return [x, y];
};

const CursorHider = () => {
  const [hideCursor, setHideCursor] = useState(false);
  const [x, y] = useMousePosition();

  useEffect(() => {
    setHideCursor(false);
    const hideTimer = setTimeout(() => setHideCursor(true), HIDE_WAIT);
    return () => clearTimeout(hideTimer);
  }, [x, y]);

  return hideCursor ? (
    <style type="text/css">{`
      body {
        cursor: none;
      }
    `}</style>
  ) : null;
};

export default CursorHider;
