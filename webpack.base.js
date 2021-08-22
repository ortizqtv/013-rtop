const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    main: ['./src/index.js', 'webpack-hot-middleware/client'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gir)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Le Temp',
      template: './src/index.html',
    }),
  ],
};

module.exports = config;