const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const url = require("@rollup/plugin-url");
const hashbang = require("rollup-plugin-hashbang");

const packageConfigShared = {
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    url({
      include: ["**/*.woff", "**/*.woff2"],
      limit: Infinity,
    }),
  ],
  external: [
    "react",
    "react-dom",
    "react-presents",
    "codemirror",
    "react-router-dom",
    "react-helmet",
    "styled-components",
  ],
};

const packageConfig = {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  ...packageConfigShared,
};

const themeConfig = {
  input: "./src/themes/index.js",
  output: {
    file: "themes.js",
    format: "cjs",
  },
  ...packageConfigShared,
};

const cliConfig = {
  input: "./cli/build.js",
  output: {
    file: "./dist/cli/build.js",
    format: "cjs",
  },
  plugins: [hashbang()],
};

export default [packageConfig, themeConfig, cliConfig];
