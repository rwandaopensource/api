import express from 'express';
import passport from '../../middlewares/auth/github';
import { signinGithub, redirectGithub } from './controller';

const GithubRouter = express.Router();

GithubRouter.get(
  '/auth/github', redirectGithub,
  passport.authenticate('github', { scope: ['user:email', 'write:org'] }),
);

GithubRouter.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  signinGithub,
);

export default GithubRouter;
