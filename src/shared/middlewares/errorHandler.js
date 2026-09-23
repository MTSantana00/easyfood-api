import { ZodError } from 'zod';

export function errorHandler(err, request, response, next) {
  if (err instanceof ZodError) {
    return response.status(400).json({ 
      message: 'Erro de Validação', 
      issues: err.format() 
    });
  }

  if (err instanceof Error) {
    return response.status(400).json({ message: err.message });
  }

  console.error(err);
  return response.status(500).json({ status: 'error', message: 'Erro interno no servidor' });
}