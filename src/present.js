import ReactDOM from "react-dom";

const present = (reactElement) => {
  const mountPoint = document.getElementById("mount");

  ReactDOM.render(reactElement, mountPoint);
  document.dispatchEvent(new Event("post-react-render"));
};

export default present;
