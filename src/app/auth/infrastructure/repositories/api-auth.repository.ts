import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { Account } from '../../domain/entities/account.entity'
import { User } from '../../domain/entities/user.entity'
import { Customer } from '../../domain/entities/customer.entity'
import { Worker } from '../../domain/entities/worker.entity'
import { AuthRepository } from '../../domain/repositories/auth.repository'

export class ApiAuthRepository implements AuthRepository {
  constructor(private readonly httpService: HttpService) {}

  async signUp(account: Account): Promise<any> {
    try {
      return await this.httpService.post('/authentication/sign-up', account.toPrimitives())
    } catch (error: any) {
      throw new Error(`Error al crear cuenta: ${error.response?.data?.message || error.message}`)
    }
  }

  async signIn(email: string, password: string): Promise<{ uid: string; email: string; token: string }> {
    try {
      return await this.httpService.post('/authentication/sign-in', { email, password })
    } catch (error: any) {
      throw new Error(`Error al iniciar sesión: ${error.response?.data?.message || error.message}`)
    }
  }

  async createUser(user: User, token: string): Promise<any> {
    try {
      if (this.httpService.axios) {
        this.httpService.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
      const result = await this.httpService.post('/users', user.toPrimitives())
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      return result
    } catch (error: any) {
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      throw new Error(`Error al crear usuario: ${error.response?.data?.message || error.message}`)
    }
  }

  async createCustomer(customer: Customer, token: string): Promise<any> {
    try {
      if (this.httpService.axios) {
        this.httpService.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
      const result = await this.httpService.post('/customers', customer.toPrimitives())
      // Limpiar el header después de la petición
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      return result
    } catch (error: any) {
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      throw new Error(`Error al crear perfil de cliente: ${error.response?.data?.message || error.message}`)
    }
  }

  async createWorker(worker: Worker, token: string): Promise<any> {
    try {
      if (this.httpService.axios) {
        this.httpService.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
      const result = await this.httpService.post('/workers', worker.toPrimitives())
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      return result
    } catch (error: any) {
      if (this.httpService.axios) {
        delete this.httpService.axios.defaults.headers.common['Authorization']
      }
      throw new Error(`Error al crear perfil de trabajador: ${error.response?.data?.message || error.message}`)
    }
  }
}
