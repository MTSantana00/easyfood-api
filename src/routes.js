import { Router } from 'express';
import { authRoutes } from './modules/auth/auth.routes.js';
import { restaurantsRoutes } from './modules/restaurants/restaurants.routes.js';
import { ordersRoutes } from './modules/orders/orders.routes.js';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/restaurants', restaurantsRoutes);
routes.use('/orders', ordersRoutes);

export { routes };