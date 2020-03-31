// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
import cache from '../../helpers/cache';
import env from '../../env';
import { sign } from '../../helpers/jwt';

export interface UserAuthInfoRequest extends Request {
  user: { [key: string]: any };
}

export function signinGithub(req: UserAuthInfoRequest, res: Response) {
  const { user: { accessToken, profile } } = req;
  // eslint-disable-next-line no-underscore-dangle
  const user = profile._json;
  cache.set(user.login, { user, accessToken });
  const { redirect } = req.cookies;
  res.redirect(`${env.FRONTEND_URL}/${(redirect) || ''}?login=true&token=${sign(user)}`);
}

export function redirectGithub(req: Request, res: Response, next: Function) {
  const { query: { redirect } } = req;
  if (redirect) {
    res.cookie('redirect', redirect, { expires: new Date(Date.now() + 900000 * 4) });
  }
  next();
}
