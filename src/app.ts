import express from 'express';
import HomeRouter from './modules/home';
import GithubRouter from './modules/github';

const App = express.Router();
const V1 = '/v1/';

App.use(V1, GithubRouter);
App.use(HomeRouter);

export default App;
