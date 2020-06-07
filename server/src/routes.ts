import express, { request, response } from 'express';
import knex from './database/connection';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();

const uploads = multer(multerConfig);

const pointsController=new PointsController();
const itemsController=new ItemsController();

// index, show , create, update, delete

routes.get('/items',itemsController.index);
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show);

routes.post('/points', uploads.single('image'), pointsController.create);

export default routes;