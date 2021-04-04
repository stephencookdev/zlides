const baseGen = () => ({
  safePadding: "2vh",
  safePaddingBottom: "8vh",
  primaryColor: "#6ea4bb",
  primaryColorAlt: "#f0dba5",
  primaryDark: "#464646",
  primaryLight: "#e7e7e6",
});

export default () => {
  const base = baseGen();

  return {
    ...base,
    slideForeground: base.primaryLight,
    slideBackground: base.primaryDark,
  };
};
