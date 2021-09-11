const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    server: path.join(__dirname, "server/server.js"),
  },
  output: {
    path: path.join(__dirname, "build/server"),
    publicPath: "/",
    filename: "[name].js",
  },

  target: "node",
  node: {
    global: false,
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()], // Только для express приложений

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "server/db",
          to: "db/[name].[ext]",
          toType: "template",
        },
      ],
    }),
  ],
};
