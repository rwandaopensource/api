import passport from 'passport';
import { Strategy } from 'passport-github';
import env from '../../env';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      callbackURL: `${env.BACKEND_URL}/auth/github/callback`,
    },
    (accessToken, refreshToken, profile, done) => done(null, { profile, accessToken }),
  ),
);
export default passport;
