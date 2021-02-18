const { join } = require('path');
const { DllPlugin } = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    modules: ['react', 'react-dom'],
  },
  output: {
    path: join(__dirname, 'dist', 'js'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  target: ['web', 'es5'],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
        extractComments: true,
        terserOptions: { ecma: 2015 },
      }),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip',
        exclude: /\/node_modules/,
      }),
    ],
  },

  plugins: [
    new DllPlugin({
      path: join(__dirname, 'dist', 'js', '[name]-manifest.json'),
      name: '[name]',
      context: __dirname,
    }),
  ],
};
