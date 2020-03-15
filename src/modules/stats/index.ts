import express from 'express';
import Controller from './controller';

const StatsRouter = express.Router();

StatsRouter.get('/stats/home', Controller.homeStats);

export default StatsRouter;
