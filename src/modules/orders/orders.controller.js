import { OrdersService } from './orders.service.js';

const ordersService = new OrdersService();

export class OrdersController {
  async report(request, response) {
    const ownerId = request.user.id; // Vem do token JWT
    const report = await ordersService.getFinancialReport(ownerId);
    return response.json(report);
  }
}