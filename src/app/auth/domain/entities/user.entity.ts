export interface UserPrimitives {
  uid: string
  accountId: string
}

export class User {
  constructor(
    public readonly uid: string,
    public readonly accountId: string,
  ) {}

  static fromPrimitives(primitives: UserPrimitives): User {
    return new User(
      primitives.uid,
      primitives.accountId,
    )
  }

  toPrimitives(): UserPrimitives {
    return {
      uid: this.uid,
      accountId: this.accountId,
    }
  }
}