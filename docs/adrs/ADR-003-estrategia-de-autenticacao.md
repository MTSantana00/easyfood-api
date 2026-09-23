# ADR 003: Estratégia de Autenticação baseada em JWT

## Status
Aprovado

## Contexto
A aplicação necessita de um mecanismo de autenticação e autorização seguro, stateless e escalável para proteger rotas administrativas e garantir que apenas usuários autenticados realizem certas operações.

## Decisão
Decidimos implementar a autenticação utilizando **JSON Web Tokens (JWT)** nativamente na API Express, combinada com criptografia de senhas usando a biblioteca `bcryptjs`.

## Consequências
* **Positivas:**
  * Autenticação *stateless* (o servidor não precisa armazenar sessões em memória).
  * Facilidade de consumo por clientes web/mobile enviando o token no header `Authorization: Bearer <TOKEN>`.
  * Criptografia forte unidirecional para senhas salvas no banco.
* **Negativas:**
  * Impossibilidade de invalidação imediata do token antes do tempo de expiração sem a implementação de uma *blacklist*.