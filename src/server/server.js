// Social media login source: https://github.com/CarGDev/loginMedia/
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { join } from 'path';
import 'regenerator-runtime';
//  Passport
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import cors from 'cors';
import boom from '@hapi/boom';

dotenv.config();

const { PORT, ENV, SESSION_SECRET } = process.env;
const port = PORT || 8080;

const app = express();

// body parser
const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser(SESSION_SECRET));
app.use(session({ secret: SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.enable('trust proxy');

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
} else {
  app.use((req, res, next) => {
    if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
      res.redirect(307, 'https://' + req.get('Host') + req.url);
    } else next();
  });
}

app.use(helmet());

//  Strategies
require('./utils/auth/strategies/oauth');
require('./utils/auth/strategies/twitter');

const googleOAuth = async (req, res, next) => {
  if (!req.user) next(boom.unauthorized());
  res.cookie('token', req.user.access_token);
  res.redirect('http://localhost:8001/registro');
  /* res.status(200).send({
    error: false,
    status: 200,
    body: req.user
  }) */
};

const twitterOAuth = async (req, res, next) => {
  if (!req.user) next(boom.unauthorized());
  res.cookie('token', req.user.access_token);
  res.redirect('http://localhost:8001/registro');
  /* res.status(200).send({
    error: false,
    status: 200,
    body: req.user
  }) */
};

app.get(
  '/auth/google-oauth',
  passport.authenticate('google-oauth', {
    scope: ['email', 'profile', 'openid'],
  }),
);
app.get(
  '/auth/google-oauth/callback',
  passport.authenticate('google-oauth', { session: false }),
  googleOAuth,
);
app.get(
  '/auth/twitter',
  passport.authenticate('twitter', { scope: ['include_email=true'] }),
);
app.get(
  '/home',
  passport.authenticate('twitter', { session: false }),
  twitterOAuth,
);

// Serve Frontend
app.get('/', (req, res) => {
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
