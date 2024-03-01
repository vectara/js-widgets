const { build } = require("esbuild");
const { setupBuildConfigs } = require("../setupBuildConfigs");

const buildConfig = setupBuildConfigs();

build(buildConfig);
