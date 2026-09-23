import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { routes } from './routes.js';
import { errorHandler } from './shared/middlewares/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Configuração do Swagger UI para Documentação
const swaggerPath = path.join(__dirname, '../docs/swagger.json');
if (fs.existsSync(swaggerPath)) {
  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, '../public')));

// Rotas da API
app.use(routes);

// Tratamento global de erros (deve ser o último middleware)
app.use(errorHandler);

export { app };