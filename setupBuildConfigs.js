const {
  name: packageName,
  devDependencies,
} = require(`${process.cwd()}/package.json`);

const setupBuildConfigs = () => ({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  logLevel: "info",
  treeShaking: true,
  minify: true,
  target: ["es6", "node12.22.0"],

  external: [...Object.keys(devDependencies)],
  outfile: `../lib/${packageName}.js`,
  format: "esm",
});

module.exports = {
  setupBuildConfigs,
};
