export class SignUpDTO {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

export class CreateUserDTO {
  constructor(
    public uid: string,
    public accountId: string,
  ) {}
}

export class CreateCustomerDTO {
  constructor(
    public uid: string,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public profileType: string,
    public location: string,
    public bio: string,
  ) {}
}

export class CreateWorkerDTO {
  constructor(
    public uid: string,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public profileType: string,
    public location: string,
    public bio: string,
    public skills: string[],
    public experience: number,
    public certifications: string[],
    public avatar: string,
  ) {}
}