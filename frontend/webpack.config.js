const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    allowedHosts: 'all',
    port: '4080',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: "./public/favicon.ico"
    }),
  ],
}