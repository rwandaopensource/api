import express from 'express';
import HomeRouter from './modules/home';
import GithubRouter from './modules/github';
import StatsRouter from './modules/stats';
import MembersRouter from './modules/members';


const App = express.Router();

App.use(GithubRouter);
App.use(StatsRouter);
App.use(MembersRouter);
App.use(HomeRouter);

export default App;
