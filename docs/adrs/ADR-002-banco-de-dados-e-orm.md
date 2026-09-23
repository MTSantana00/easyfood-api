# ADR 002: Escolha do Banco de Dados Relacional e ORM

## Status
Aprovado

## Contexto
O domínio de pedidos de comida exige consistência estrita de dados (propriedades ACID), integridade referencial entre entidades (Usuários, Restaurantes, Produtos e Pedidos) e facilidade de manipulação de schemas e migrações durante a evolução do projeto.

## Decisão
Decidimos utilizar o banco de dados **PostgreSQL** gerenciado via **Docker**, integrado com o **Prisma ORM** para a camada de acesso aos dados em Node.js.

## Consequências
* **Positivas:**
  * Garantia de consistência e integridade referencial nativa do PostgreSQL.
  * Migrações automatizadas e tipagem segura com Prisma Client.
  * Ambiente de desenvolvimento padronizado via container Docker.
* **Negativas:**
  * Necessidade de execução do serviço do Docker Desktop no ambiente local do desenvolvedor.