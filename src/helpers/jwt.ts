import jwt from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
import env from '../env';

const { PRIVATE_KEY } = env;
export function sign(payload: { [key: string]: any }): string {
  return jwt.sign(payload, PRIVATE_KEY, { expiresIn: '1d' });
}

export const verify = async (req: Request, res: Response, next: Function) => {
  const { headers: { authorization } } = req;
  if (authorization) {
    jwt.verify(authorization.toString(), PRIVATE_KEY,
      (err: Error, user: { [key: string]: any }) => {
        if (err) {
          res.status(401).end();
          return;
        }
        req.user = user;
        next();
      });
  } else {
    req.user = null;
    next();
  }
};
