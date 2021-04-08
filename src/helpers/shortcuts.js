import { useState } from "react";

const useLocalStorageState = (key, initialValue) => {
  const transformToLocal = (x) => {
    if (x === true) return "specialBoolTrue";
    if (x === false) return "specialBoolFalse";
    return x;
  };
  const transformFromLocal = (x) => {
    if (x === "specialBoolTrue") return true;
    if (x === "specialBoolFalse") return false;
    return x;
  };

  const [localVal, setLocalVal] = useState(() => {
    const initStoredValue = localStorage.getItem(key);
    return typeof initStoredValue === "string"
      ? initStoredValue
      : transformToLocal(initialValue);
  });

  const val = transformFromLocal(localVal);
  const setVal = (x) => {
    const newLocalVal = transformToLocal(x);
    localStorage.setItem(key, newLocalVal);
    setLocalVal(newLocalVal);
  };

  return [val, setVal];
};

export const useGlobalShortcuts = () => {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);
  const [hideSkippedSlides, setHideSkippedSlides] = useLocalStorageState(
    "hideSkippedSlides",
    true
  );

  window.toggleDarkMode = () => setDarkMode(!darkMode);
  window.toggleHideSkippedSlides = () =>
    setHideSkippedSlides(!hideSkippedSlides);

  console.log("Some dev shortcuts:");
  console.table({
    "toggleDarkMode()": `Current: ${darkMode}. Change code samples between light/dark mode`,
    "toggleHideSkippedSlides()": `Current ${hideSkippedSlides}. Do/don't hide skipped slides`,
  });

  return { darkMode, hideSkippedSlides };
};
