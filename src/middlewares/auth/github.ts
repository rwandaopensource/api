import passport from 'passport';
import { Strategy } from 'passport-github';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/v1/auth/github/callback`,
    },
    (accessToken, refreshToken, profile, done) => done(null, profile),
  ),
);
export default passport;
