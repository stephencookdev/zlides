const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const url = require("@rollup/plugin-url");

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
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
  ],
};
