export interface UserPrimitives {
  uid: string
  accountId: string
  customerId?: string
  workerId?: string
}

export class User {
  constructor(
    public readonly uid: string,
    public readonly accountId: string,
    public readonly customerId?: string,
    public readonly workerId?: string,
  ) {}

  static fromPrimitives(primitives: UserPrimitives): User {
    return new User(
      primitives.uid,
      primitives.accountId,
      primitives.customerId,
      primitives.workerId,
    )
  }

  toPrimitives(): UserPrimitives {
    return {
      uid: this.uid,
      accountId: this.accountId,
      customerId: this.customerId,
      workerId: this.workerId,
    }
  }
}