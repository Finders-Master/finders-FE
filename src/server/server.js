// Social media login source: https://github.com/CarGDev/loginMedia/
/* eslint-disable global-require */
const express = require('express');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { join } = require('path');
require('regenerator-runtime');
//  Passport
const helmet = require('helmet');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const boom = require('@hapi/boom');
const frontendRoutes = require('../routes');

dotenv.config();

const { PORT, ENV, SESSION_SECRET } = process.env;
const port = PORT || 8080;

const app = express();

// body parser
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser(SESSION_SECRET));
app.use(session({ secret: SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.enable('trust proxy');

if (ENV === 'development') {
  app.use(express.static(join(__dirname, 'static')));
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
  app.use(express.static(join(__dirname, 'public')));
  app.disable('x-powered-by');
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
};

const twitterOAuth = async (req, res, next) => {
  if (!req.user) next(boom.unauthorized());
  res.cookie('token', req.user.access_token);
  res.redirect('http://localhost:8001/registro');
};

const handler = (req, res) => res.redirect('/');

const routes = Object.values(frontendRoutes);

routes.forEach((route) => app.get(route, handler));

app.get(
  '/auth/google-oauth',
  passport.authenticate('google-oauth', {
    scope: ['email', 'profile', 'openid'],
  })
);
app.get(
  '/auth/google-oauth/callback',
  passport.authenticate('google-oauth', { session: false }),
  googleOAuth
);
app.get(
  '/auth/twitter',
  passport.authenticate('twitter', { scope: ['include_email=true'] })
);
app.get(
  '/home',
  passport.authenticate('twitter', { session: false }),
  twitterOAuth
);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is runnig at http://localhost:${port}`);
  }
});
