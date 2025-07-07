export interface AccountPrimitives {
  uid: string
  email: string
  password: string
}

export class Account {
  constructor(
    public readonly uid: string,
    public readonly email: string,
    public readonly password: string,
  ) {}

  static fromPrimitives(primitives: AccountPrimitives): Account {
    return new Account(
      primitives.uid,
      primitives.email,
      primitives.password,
    )
  }

  toPrimitives(): AccountPrimitives {
    return {
      uid: this.uid,
      email: this.email,
      password: this.password,
    }
  }
}