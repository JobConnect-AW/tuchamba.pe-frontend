export interface AccountPrimitives {
  uid: string
  email: string
  password: string
  role: string
}

export class Account {
  constructor(
    public readonly uid: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string,
  ) {}

  static fromPrimitives(primitives: AccountPrimitives): Account {
    return new Account(
      primitives.uid,
      primitives.email,
      primitives.password,
      primitives.role,
    );
  }

  toPrimitives(): AccountPrimitives {
    return {
      uid: this.uid,
      email: this.email,
      password: this.password,
      role: this.role,
    }
  }
}