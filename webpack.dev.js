const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'index.js',
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
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      favicon: join(__dirname, 'src', 'assets', 'finders-logo.png'),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],

  devServer: {
    contentBase: join(__dirname, 'src', 'index.jsx'),
    watchContentBase: true,
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 420,
    },
  },
};
