import { v4 } from 'uuid'
import { Account } from '../../domain/entities/account.entity'
import { User } from '../../domain/entities/user.entity'
import { Customer } from '../../domain/entities/customer.entity'
import { Worker } from '../../domain/entities/worker.entity'
import { AuthRepository } from '../../domain/repositories/auth.repository'
import { SignUpDTO, CreateCustomerDTO, CreateWorkerDTO } from '../dtos/sign-up.dto'

export class SignUpUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async executeSignUp(data: SignUpDTO): Promise<{ accountUid: string; token: string }> {
    if (!data.email || !data.password) {
      throw new Error('El email y la contraseña son obligatorios')
    }

    const accountUid = v4()
    const account = new Account(accountUid, data.email, data.password, data.role)

    await this.authRepository.signUp(account)

    const signInResponse = await this.authRepository.signIn(data.email, data.password)
    const token = signInResponse.token;

    return { accountUid, token }
  }

  async executeCreateCustomer(data: CreateCustomerDTO, token: string): Promise<Customer> {
    if (!data.firstName || !data.lastName) {
      throw new Error('El nombre y apellido son obligatorios')
    }

    const customer = new Customer(
      data.uid,
      data.firstName,
      data.lastName,
      data.phone,
      data.profileType,
      data.location,
      data.bio,
    )

    await this.authRepository.createCustomer(customer, token)
    return customer
  }

  async executeCreateWorker(data: CreateWorkerDTO, token: string): Promise<Worker> {
    // Validación básica
    if (!data.firstName || !data.lastName) {
      throw new Error('El nombre y apellido son obligatorios')
    }

    const worker = new Worker(
      data.uid,
      data.firstName,
      data.lastName,
      data.phone,
      data.profileType,
      data.location,
      data.bio,
      data.skills,
      data.experience,
      data.certifications,
      data.avatar,
    )

    await this.authRepository.createWorker(worker, token)
    return worker
  }
}
