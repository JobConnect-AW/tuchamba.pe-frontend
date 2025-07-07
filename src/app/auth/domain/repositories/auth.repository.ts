import { Account } from '../entities/account.entity'
import { User } from '../entities/user.entity'
import { Customer } from '../entities/customer.entity'
import { Worker } from '../entities/worker.entity'

export interface AuthRepository {
  signUp(account: Account): Promise<any>
  signIn(email: string, password: string): Promise<{ uid: string; email: string; token: string }>
  createUser(user: User, token: string): Promise<any>
  createCustomer(customer: Customer, token: string): Promise<any>
  createWorker(worker: Worker, token: string): Promise<any>
}