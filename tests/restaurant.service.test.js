import { jest } from '@jest/globals';
import { RestaurantService } from '../src/modules/restaurants/restaurants.service.js';

describe('RestaurantService', () => {
  let restaurantService;
  let mockRepository;

  beforeEach(() => {
    // Criamos um "banco falso" (mock) para o teste
    mockRepository = {
      create: jest.fn().mockResolvedValue({ id: '123', name: 'Burger Test' }),
      findAll: jest.fn()
    };
    
    restaurantService = new RestaurantService();
    // Injetamos o repositório falso no serviço
    restaurantService.repository = mockRepository;
  });

  it('deve criar um restaurante com sucesso', async () => {
    const data = {
      name: 'Burger Test',
      category: 'Burguer',
      address: 'Rua Teste, 123',
      ownerId: 'owner-456'
    };

    const result = await restaurantService.createRestaurant(data);

    expect(mockRepository.create).toHaveBeenCalledWith(data);
    expect(result).toHaveProperty('id');
    expect(result.name).toBe('Burger Test');
  });
});