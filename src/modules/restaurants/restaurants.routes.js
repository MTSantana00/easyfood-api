import { Router } from 'express';
import { RestaurantsController } from './restaurants.controller.js';
import { ensureAuthenticated } from '../../shared/middlewares/ensureAuthenticated.js';

const restaurantsRoutes = Router();
const restaurantsController = new RestaurantsController();

restaurantsRoutes.get('/', restaurantsController.list);
restaurantsRoutes.post('/', ensureAuthenticated, restaurantsController.create);

export { restaurantsRoutes };