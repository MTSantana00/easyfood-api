<div align="center">
  <h1>EasyFood - API PRO 🍔</h1>
  <p>Consulta, registo de restaurantes e relatórios financeiros</p>

  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
  ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
  ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
</div>

## Comida Fácil

O EasyFood é um MVP académico para consultar e registar restaurantes. A interface permite pesquisar por nome ou categoria, filtrar a listagem e registar estabelecimentos com validação rigorosa dos dados.

## Entrega AAI (4º Semestre)

Projeto desenvolvido para o curso de Engenharia da Computação na UniFECAF (Autor: Matheus de Souza Santana). A API foi construída com um padrão de nível empresarial, garantindo persistência em banco de dados relacional, rotas protegidas, validação de esquemas e documentação interativa.

## Órgãos transversais

* Node.js (Módulos ES)
* Express.js
* PostgreSQL (via Docker)
* Prisma ORM
* JWT e BcryptJS (Segurança)
* Zod (Validação de dados)
* Swagger UI (Documentação)
* Jest (Testes automatizados)

## Arquitetura

Arquitetura organizada como **Monólito Modular**:

`Front-end → Routes → Controller → Middleware (Auth/Zod) → Service → Repository → Prisma ORM → PostgreSQL`

### Organização do código

Os domínios estão isolados na pasta `src/modules` (ex: `restaurants`, `auth`, `orders`). Cada camada possui uma responsabilidade estrita:

* `server.js`: Inicia o servidor HTTP de forma independente.
* `src/app.js`: Configura o Express, Swagger e regista os middlewares globais.
* `*.routes.js`: Define as rotas HTTP e protege com JWT.
* `*.controller.js`: Recebe a requisição, formata e monta a resposta.
* `*.service.js`: Concentra as regras de negócio puras e relatórios.
* `*.repository.js`: Camada exclusiva de acesso ao PostgreSQL por meio do Prisma.
* `errorHandler.js`: Intercepta e formata as exceções (incluindo erros do Zod) globalmente.

## Como executar

### Requisitos
* Node.js instalado (v18+).
* Docker Desktop em execução.

### 1. Instalar dependências
No terminal, aceda à pasta do projeto e execute:
```bash
npm install