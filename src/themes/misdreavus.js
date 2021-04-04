const baseGen = ({ darkMode }) => ({
  safePadding: "2vh",
  safePaddingBottom: "8vh",
  primaryColor: "#f92672",
  primaryColorAlt: "#f99e26",
  primaryDark: "#222",
  primaryLight: "#fff",
  slideForeground: "#f8f8f2",
  slideBackground: darkMode ? "#282a36" : "#5b5d69",
});

export default ({ darkMode }) => {
  const base = baseGen({ darkMode });
  return base;
};
