import ReactDOM from "react-dom";

const present = (reactElement) => {
  const mountPoint = document.getElementById("mount");

  ReactDOM.render(reactElement, mountPoint);
  document.dispatchEvent(new Event("post-react-render"));

  console.log("Some dev shortcuts:");
  console.table({
    "toggleDarkMode()": "Change code samples between light/dark mode",
  });
};

export default present;
