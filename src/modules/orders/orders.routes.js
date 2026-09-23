import { Router } from 'express';
import { OrdersController } from './orders.controller.js';
import { ensureAuthenticated } from '../../shared/middlewares/ensureAuthenticated.js';

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.get('/revenue', ensureAuthenticated, ordersController.report);

export { ordersRoutes };