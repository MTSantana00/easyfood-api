import { prisma } from '../../shared/prisma/client.js';

export class RestaurantsService {
  async list() {
    return await prisma.restaurant.findMany({
      include: {
        products: true,
      },
    });
  }

  async create({ name, category, address, ownerId }) {
    return await prisma.restaurant.create({
      data: {
        name,
        category,
        address,
        ownerId,
      },
    });
  }
}