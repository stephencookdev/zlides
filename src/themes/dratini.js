const baseGen = () => ({
  safePadding: "2vh",
  safePaddingBottom: "8vh",
  primaryColor: "#00b2ff",
  primaryColorAlt: "#0092d1",
  primaryDark: "#3c2c34",
  primaryLight: "#fff",
});

export default () => {
  const base = baseGen();

  return {
    ...base,
    slideForeground: base.primaryDark,
    slideBackground: base.primaryLight,
  };
};
