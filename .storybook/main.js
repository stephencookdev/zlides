const path = require("path");

module.exports = {
  stories: ["../demo/*.jsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      loaders: ["file-loader"],
      // include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
