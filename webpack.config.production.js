const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DllReferencePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: join(__dirname, 'src', 'index.jsx'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].js',
  },
  target: ['web', 'es5'],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1400,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
        extractComments: true,
        terserOptions: {
          ecma: 2015,
        },
      }),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip',
        exclude: /\/node_modules/,
      }),
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[fullhash].css',
      attributes: {
        rel: 'preload',
        as: 'style',
      },
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      favicon: join(__dirname, 'src', 'assets', 'finders-logo.png'),
    }),
    new DllReferencePlugin({
      context: __dirname,
      manifest: join(__dirname, 'dist', 'js', 'modules-manifest.json'),
    }),
  ],
};
