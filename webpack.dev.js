const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

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
        test: /\.(css)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      favicon: join(__dirname, 'src', 'assets', 'finders-logo.png'),
    }),
  ],

  devServer: {
    contentBase: join(__dirname, 'src', 'index.jsx'),
    watchContentBase: true,
    port: 8080,
    hot: true,
    open: true,
    watchOptions: {
      poll: 420,
    },
  },
};
