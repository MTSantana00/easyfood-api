import { AuthService } from './auth.service.js';

const authService = new AuthService();

export class AuthController {
  async register(request, response) {
    try {
      const { name, email, password, role } = request.body;
      const user = await authService.register({ name, email, password, role });
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async login(request, response) {
    try {
      const { email, password } = request.body;
      const result = await authService.login({ email, password });
      return response.json(result);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}