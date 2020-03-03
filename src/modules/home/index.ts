import express from 'express';

const HomeRouter = express.Router();

HomeRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'PONG',
  });
});

HomeRouter.use('*', (req, res) => {
  res.status(404).json({
    message: `Path not found; METHOD: ${req.method}, PATH: ${req.originalUrl}`,
  });
});

export default HomeRouter;
