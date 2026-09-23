# ADR 001: Adoção do Estilo Arquitetural Monólito Modular

## Status
Aprovado

## Contexto
O sistema EasyFood requer uma estrutura inicial para gerenciar usuários, restaurantes, cardápios e pedidos. No estágio inicial de desenvolvimento, adotar uma arquitetura de microsserviços traria uma complexidade operacional desnecessária (overhead de rede, orquestração de containers, sincronização de dados e latência).

## Decisão
Decidimos adotar o estilo arquitetural **Monólito Modular**. A aplicação é construída como uma única unidade de implantação (*deployable unit*), mas organizada internamente em módulos de domínio independentes (`auth`, `users`, `restaurants`, `orders`) com responsabilidades bem delimitadas dentro de `src/modules`.

## Consequências
* **Positivas:**
  * Facilidade de desenvolvimento, testes e depuração local.
  * Baixa complexidade de implantação e menor custo de infraestrutura.
  * Fronteiras de domínio limpas, permitindo a extração futura de módulos para microsserviços caso haja necessidade de escala.
* **Negativas:**
  * Escalabilidade vertical unificada (escalar a aplicação significa escalar todos os módulos juntos).