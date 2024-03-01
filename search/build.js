const { build } = require("esbuild");
const { setupBuildConfigs } = require("../setupBuildConfigs");
const { sassPlugin } = require("esbuild-sass-plugin");
const cssPlugin = require("esbuild-css-modules-plugin");

const buildConfig = setupBuildConfigs();

build({
  ...buildConfig,
  plugins: [cssPlugin(), sassPlugin({ type: "style" })],
});
