// Core
import excludeNodeModules from "webpack-node-externals";
// Instruments
import merge from "webpack-merge";
import { createBundledAnalyzer, createEnvVariables } from "./modules";
// Presets
import { build, entry } from "./paths";

export default merge(
  {
    mode: "production",
    entry,
    target: "node",
    output: {
      path: build,
      filename: "index.ts"
    },
    externals: [ excludeNodeModules() ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  createBundledAnalyzer(),
  process.env.NODE_ENV === "production" && createEnvVariables()
);
