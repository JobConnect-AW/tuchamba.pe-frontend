export interface CustomerPrimitives {
  uid: string
  firstName: string
  lastName: string
  phone: string
  profileType: string
  location: string
  bio: string
}

export class Customer {
  constructor(
    public readonly uid: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string,
    public readonly profileType: string,
    public readonly location: string,
    public readonly bio: string,
  ) {}

  static fromPrimitives(primitives: CustomerPrimitives): Customer {
    return new Customer(
      primitives.uid,
      primitives.firstName,
      primitives.lastName,
      primitives.phone,
      primitives.profileType,
      primitives.location,
      primitives.bio,
    )
  }

  toPrimitives(): CustomerPrimitives {
    return {
      uid: this.uid,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      profileType: this.profileType,
      location: this.location,
      bio: this.bio,
    }
  }
}