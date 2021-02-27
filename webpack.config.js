// Core
const { EnvironmentPlugin } = require("webpack");
const excludeNodeModules = require("webpack-node-externals");
const path = require("path");
// Instruments
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.ts"
  },
  target: "node",
  mode: process.env.NODE_ENV === "dev" ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: [ excludeNodeModules() ],
  plugins: [
    new EnvironmentPlugin([ "NODE_ENV", "PASSWORD", "PORT", "DB_URL", "DB_PORT", "DB_NAME" ]),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: true,
      statsFilename: "build-stats.json",
      openAnalyzer: false
    })
  ]
};
