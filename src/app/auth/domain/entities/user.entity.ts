export interface UserPrimitive {
  uid: string
  name: string
  email: string
  password: string
}

export class User {
  constructor(
    public readonly uid: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
  ) {}
}
