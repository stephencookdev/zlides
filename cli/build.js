#!/usr/bin/env node

const Bundler = require("parcel-bundler");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");
const mkdirp = require("mkdirp");
const Prerenderer = require("@prerenderer/prerenderer");
const Puppeteer = require("@prerenderer/renderer-puppeteer");
const { minify } = require("html-minifier");
const prettyMs = require("pretty-ms");

const hasArgv2 = ["build", "watch"].includes(process.argv[2]);
if (!hasArgv2 || process.argv[2] === "watch") {
  process.env.WATCH = 1;
}

const entrypoint = process.argv[hasArgv2 ? 3 : 2];
if (!entrypoint) throw new Error("No entrypoint given");

console.log(`Using entrypoint: ${entrypoint}`);

const bundler = new Bundler(entrypoint, {
  watch: !!process.env.WATCH,
  hmr: !!process.env.WATCH,
  publicUrl: process.env.PUBLIC_URL,
});

bundler.on("buildEnd", async () => {
  if (process.env.NODE_ENV !== "production") return;
  console.log("");
  const spinner = ora(chalk.grey("Prerendering")).start();
  let routes = ["/"]; // the default route
  let rendererConfig = {
    renderAfterDocumentEvent: "post-react-render",
  };

  const { outDir } = bundler.options;

  const publicPathOutDir = `${outDir}${process.env.PUBLIC_URL || ""}`;
  if (publicPathOutDir !== outDir) {
    mkdirp.sync(publicPathOutDir);
    execSync(
      `find ${outDir} -maxdepth 1 -type f | xargs -I {} cp {} ${publicPathOutDir}`
    );
  }

  const prerenderer = new Prerenderer({
    staticDir: outDir,
    renderer: new Puppeteer(rendererConfig),
  });
  try {
    await prerenderer.initialize();
    const start = Date.now();
    const renderedRoutes = await prerenderer.renderRoutes(routes);
    await Promise.all(
      renderedRoutes.map(async (route) => {
        const outputDir = path.join(outDir, route.route);
        const file = path.resolve(outputDir, "index.html");
        mkdirp.sync(outputDir);
        const html = minify(route.html, { minifyCSS: true });
        // eslint-disable-next-line no-sync
        fs.writeFileSync(file, html);
      })
    );
    if (publicPathOutDir !== outDir) {
      execSync(`rm -rf ${publicPathOutDir}`);
    }
    const end = Date.now();
    spinner.stopAndPersist({
      symbol: "✨ ",
      text: chalk.green(`Prerendered in ${prettyMs(end - start)}.`),
    });
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line unicorn/no-process-exit, no-process-exit
    process.exit(1);
  } finally {
    prerenderer.destroy();
  }
});

if (process.env.WATCH) {
  bundler.serve();
} else {
  bundler.bundle();
}
