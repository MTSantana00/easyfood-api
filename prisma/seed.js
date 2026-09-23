import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Semeando o banco de dados...');

  // Limpa o banco antes de popular
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.user.deleteMany();

  // Criar Usuário Admin / Owner
  const hashedPassword = await bcrypt.hash('123456', 8);
  const user = await prisma.user.create({
    data: {
      name: 'Matheus Santana',
      email: 'admin@easyfood.com',
      password: hashedPassword,
      role: 'RESTAURANT_OWNER',
    },
  });

  // Criar Restaurantes com Produtos
  await prisma.restaurant.create({
    data: {
      name: 'Burger House',
      category: 'Hamburgueria',
      address: 'Av. Paulista, 1000 - São Paulo',
      ownerId: user.id,
      products: {
        create: [
          { name: 'X-Salada Especial', description: 'Hambúrguer 180g, queijo e salada', price: 28.9 },
          { name: 'Batata Frita Rustica', description: 'Porção individual de batata frita', price: 15.0 },
        ],
      },
    },
  });

  await prisma.restaurant.create({
    data: {
      name: 'Pizza Express',
      category: 'Pizzaria',
      address: 'Rua Augusta, 500 - São Paulo',
      ownerId: user.id,
      products: {
        create: [
          { name: 'Pizza Calabresa', description: 'Calabresa fatiada com cebola e azeitonas', price: 45.0 },
          { name: 'Refrigerante LATA', description: 'Lata 350ml', price: 6.0 },
        ],
      },
    },
  });

  console.log('✅ Banco de dados semeado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });