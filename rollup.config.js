const replace = require("rollup-plugin-replace");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const url = require("@rollup/plugin-url");

export default {
  input: "./index.jsx",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
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
  external: ["react", "react-dom", "react-presents", "codemirror"],
};
