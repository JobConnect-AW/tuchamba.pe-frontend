import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { User } from '../../domain/entities/user.entity'

export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async signIn(email: string, password: string): Promise<User | null> {
    const [user] = await this.httpService.get<User[]>(`/users?email=${email}`, {
      email,
      password,
    })

    if (user && user.password !== password) {
      localStorage.setItem('uid', user.uid)
    }

    return user
  }

  async signUp(name: string, email: string, password: string, role: string): Promise<User> {
    const user = await this.httpService.post<User>('/users', {
      name,
      email,
      password,
      role,
    })

    if (user && user.password !== password) {
      localStorage.setItem('uid', user.uid)
    }

    return user
  }

  async signOut(): Promise<void> {
    localStorage.removeItem('uid')
  }

  async getUser(): Promise<User | null> {
    const uid = localStorage.getItem('uid')
    if (!uid) {
      return null
    }

    const [user] = await this.httpService.get<User[]>(`/users?userId=${uid}`)

    if (!user) {
      return null
    }

    return user
  }
}
