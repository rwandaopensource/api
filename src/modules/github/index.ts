import express from 'express';
import passport from '../../middlewares/auth/github';

const GithubRouter = express.Router();

GithubRouter.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
);

GithubRouter.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.json(req.user),
);

export default GithubRouter;
