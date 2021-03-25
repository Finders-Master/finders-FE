const passport = require('passport');
const axios = require('axios');
const { get } = require('lodash');
const boom = require('@hapi/boom');

const { Strategy: TwitterStrategy } = require('passport-twitter');

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  API_URL,
  API_KEY_TOKEN,
} = process.env;

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: '/home',
      includeEmail: true,
    },
    async (token, tokenSecret, profile, cb) => {
      const { data, status } = await axios({
        url: `${API_URL}/user/social-media`,
        method: 'post',
        data: {
          name: profile.username,
          email: get(
            profile,
            'emails.0.value',
            `${profile.username}@twitter.com`
          ),
          pictures: 'http://dummyimage.com/248x122.jpg/5fa2dd/ffffff',
          type_user_id: 1,
          password: `${profile.id}1wAasasfS!`,
          API_KEY_TOKEN,
        },
      });

      if (!data || status !== 201) return cb(boom.unauthorized(), false);

      return cb(null, data);
    }
  )
);
