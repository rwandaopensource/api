import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import env from './env';
import App from './app';

const app = express();

app.set('trust proxy', true);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(
  {
    limit: '50mb',
  },
));
app.use(App);

const server = app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started at', env.PORT);
});

export default server;
