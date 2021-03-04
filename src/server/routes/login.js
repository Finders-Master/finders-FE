import express from 'express';
import boom from '@hapi/boom';
import passport from 'passport';

const router = express.Router();

//  Strategies
require('../utils/auth/strategies/oauth');
require('../utils/auth/strategies/twitter');

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

router.get(
  '/auth/google-oauth',
  passport.authenticate('google-oauth', {
    scope: ['email', 'profile', 'openid'],
  }),
);
router.get(
  '/auth/google-oauth/callback',
  passport.authenticate('google-oauth', { session: false }),
  googleOAuth,
);

router.get(
  '/auth/twitter',
  passport.authenticate('twitter', { scope: ['include_email=true'] }),
);
router.get(
  '/home',
  passport.authenticate('twitter', { session: false }),
  twitterOAuth,
);
/* Finish Logn with social media */

export default router;
