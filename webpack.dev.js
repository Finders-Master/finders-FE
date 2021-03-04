const { join } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/frontend/index.jsx',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  ],
  output: {
    filename: 'assets/app.js',
    publicPath: '/',
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
    new HotModuleReplacementPlugin(),

    new MiniCssExtractPlugin({
      filename: 'assets/styles.css',
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
