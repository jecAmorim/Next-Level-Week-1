import express, { request, response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController=new PointsController();
const itemsController=new ItemsController();

// index, show , create, update, delete

routes.get('/items',itemsController.index);
routes.post('/points',pointsController.create);
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show);

export default routes;