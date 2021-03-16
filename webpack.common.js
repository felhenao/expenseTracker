const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      showErrors: true,
      template: './public/index.html',
      minify: false
      
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
   },
  optimization: {
    splitChunks: {   //llows us to extract common dependencies into an existing entry chunk or an entirely new chunk
      chunks: 'all',
  },
},
};

