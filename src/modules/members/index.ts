import express from 'express';
import Controller from './controller';

const MembersRouter = express.Router();

MembersRouter.get('/members', Controller.viewMembers);

export default MembersRouter;
