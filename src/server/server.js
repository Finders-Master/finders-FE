/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { join } from 'path';

dotenv.config();

const { PORT, ENV } = process.env;
const port = PORT || 3000;

const app = express();

if (ENV === 'development') {
  const webpackConfig = require('../../webpack.dev');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);

  const webpackServerConfig = {
    contentBase: join(__dirname, '..'),
    watchContentBase: true,
    port: PORT,
    hot: true,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      poll: 420,
    },
  };

  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Finders</title>
    <link rel="stylesheet" href="/assets/styles.css">
    <script defer="defer" src="/assets/app.js" type="text/javascript"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`);
});

// app.use(express.static(__dirname, '..', '..', 'public', 'index.html'));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is runnig at http://localhost:${port}`);
  }
});
