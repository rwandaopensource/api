import express from 'express';
import Controller from './controller';

const ContactRouter = express.Router();

ContactRouter.post('/contact', Controller.contactMessage);

export default ContactRouter;
