import { RestaurantRepository } from './restaurant.repository.js';

export class RestaurantService {
  constructor() {
    this.repository = new RestaurantRepository();
  }

  async createRestaurant(data) {
    return await this.repository.create(data);
  }

  async listAll() {
    return await this.repository.findAll();
  }
}