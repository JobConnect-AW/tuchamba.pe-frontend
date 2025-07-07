import { AuthRepository } from '../../domain/repositories/auth.repository'
import { LoginDTO } from '../dtos/sign-up.dto'

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async executeLogin(data: LoginDTO): Promise<{ uid: string; email: string; token: string }> {
    if (!data.email || !data.password) {
      throw new Error('El email y la contraseña son obligatorios')
    }

    const result = await this.authRepository.signIn(data.email, data.password)
    return result
  }
}