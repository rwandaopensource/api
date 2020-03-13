import express from 'express';
import HomeRouter from './modules/home';
import GithubRouter from './modules/github';
import StatsRouter from './modules/stats';

const App = express.Router();

App.use(GithubRouter);
App.use(StatsRouter);
App.use(HomeRouter);

export default App;
