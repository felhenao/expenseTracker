const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development', 
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true //return index.html for all 404 routes
  }
});