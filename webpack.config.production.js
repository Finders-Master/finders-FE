const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtml = require('add-asset-html-webpack-plugin');
const { DllReferencePlugin } = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'production',
  entry: join(__dirname, 'src', 'frontend', 'index.jsx'),
  output: {
    path: join(__dirname, 'src', 'server', 'public'),
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
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[ext]' },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
    }),
    new DllReferencePlugin({
      context: __dirname,
      manifest: join(
        __dirname,
        'src',
        'server',
        'public',
        'dll',
        'modules-manifest.json'
      ),
    }),
    new AddAssetHtml({
      filepath: join(__dirname, 'src', 'server', 'public', 'dll'),
      files: [
        join(__dirname, 'src', 'server', 'public', 'dll', 'modules.dll.js'),
      ],
    }),
  ],
};
