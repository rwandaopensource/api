// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';

export function options(req: Request, res: Response, next: Function) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    res.header('Access-Control-Max-Age', (3600 * 24).toString());
    res.status(204).end();
    return;
  }
  next();
}

export { verify } from '../helpers/jwt';
