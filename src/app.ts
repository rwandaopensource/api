import express from 'express';
import HomeRouter from './modules/home';
import GithubRouter from './modules/github';
import StatsRouter from './modules/stats';
import MembersRouter from './modules/members';
import ContactRouter from './modules/contact';


const App = express.Router();

App.use(GithubRouter);
App.use(StatsRouter);
App.use(MembersRouter);
App.use(ContactRouter);
App.use(HomeRouter);

export default App;
