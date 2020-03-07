import express from 'express';
import HomeRouter from './modules/home';
import GithubRouter from './modules/github';

const App = express.Router();

App.use(GithubRouter);
App.use(HomeRouter);

export default App;
