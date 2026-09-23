import jwt from 'jsonwebtoken';

export function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'easyfood_super_secret_jwt_key_2026');
    request.user = { id: decoded.id, role: decoded.role };
    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Token inválido ou expirado' });
  }
}