import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import passport from 'passport';
import { options, verify } from './middlewares';
import env from './env';
import App from './app';

const app = express();

app.set('trust proxy', true);
app.use(options);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(verify);
app.use(App);

const server = app.listen(env.PORT, () => {
  console.log('server started at', env.PORT);
});

export default server;
