import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class RestaurantRepository {
  async create(data) {
    return await prisma.restaurant.create({ data });
  }

  async findAll() {
    return await prisma.restaurant.findMany({
      include: { products: true }
    });
  }
}