import { prisma } from '../../shared/prisma/client.js';

export class OrdersService {
  async getFinancialReport(ownerId) {
    // Busca o restaurante do usuário logado
    const restaurant = await prisma.restaurant.findFirst({
      where: { ownerId }
    });

    if (!restaurant) {
      throw new Error('Nenhum restaurante vinculado a este usuário.');
    }

    // Busca todos os pedidos finalizados deste restaurante
    const orders = await prisma.order.findMany({
      where: { 
        restaurantId: restaurant.id,
        status: 'DELIVERED'
      }
    });

    const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
    const averageTicket = orders.length > 0 ? totalRevenue / orders.length : 0;

    return {
      restaurant: restaurant.name,
      metrics: {
        totalOrdersDelivered: orders.length,
        totalRevenue: parseFloat(totalRevenue.toFixed(2)),
        averageTicket: parseFloat(averageTicket.toFixed(2))
      }
    };
  }
}