# EasyFood API - Monólito Modular 🍔

Projeto desenvolvido para a **1ª Entrega da AAI** do curso de Engenharia da Computação - UniFECAF.

**Autor:** Matheus de Souza Santana  
**Arquitetura:** Monólito Modular (Node.js + Express + PostgreSQL + Prisma ORM)

---

## 🛠️ Tecnologias Utilizadas
* **Node.js** (ES Modules)
* **Express.js** (Framework Web)
* **PostgreSQL** (Banco de dados relacional via Docker)
* **Prisma ORM** (Mapeamento Objeto-Relacional e Migrações)
* **JWT & BcryptJS** (Autenticação e Criptografia)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado (v18+)
* Docker Desktop rodando na máquina

### Passo a Passo

1. **Iniciar o banco PostgreSQL no Docker:**
```bash
docker run --name easyfood-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=easyfood -p 5432:5432 -d postgres:alpine