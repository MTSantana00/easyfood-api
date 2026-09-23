import { RestaurantsService } from './restaurants.service.js';

const restaurantsService = new RestaurantsService();

export class RestaurantsController {
  async list(request, response) {
    try {
      const restaurants = await restaurantsService.list();
      return response.json(restaurants);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }

  async create(request, response) {
    try {
      const { name, category, address } = request.body;
      const ownerId = request.user.id; // Vem do middleware JWT

      const restaurant = await restaurantsService.create({ name, category, address, ownerId });
      return response.status(201).json(restaurant);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}