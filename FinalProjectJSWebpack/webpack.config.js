const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./public/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "index.js",
  },

  target: "web",
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader", "svg-inline-loader", "url-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./public/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: "./public/single_page.html",
      filename: "single_page.html",
    }),
    new HtmlWebpackPlugin({
      template: "./public/shopping_cart.html",
      filename: "shopping_cart.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
