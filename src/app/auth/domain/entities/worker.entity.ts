export interface WorkerPrimitives {
  uid: string
  firstName: string
  lastName: string
  phone: string
  profileType: string
  location: string
  bio: string
  skills: string[]
  experience: number
  certifications: string[]
  avatar: string
}

export class Worker {
  constructor(
    public readonly uid: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string,
    public readonly profileType: string,
    public readonly location: string,
    public readonly bio: string,
    public readonly skills: string[],
    public readonly experience: number,
    public readonly certifications: string[],
    public readonly avatar: string,
  ) {}

  static fromPrimitives(primitives: WorkerPrimitives): Worker {
    return new Worker(
      primitives.uid,
      primitives.firstName,
      primitives.lastName,
      primitives.phone,
      primitives.profileType,
      primitives.location,
      primitives.bio,
      primitives.skills,
      primitives.experience,
      primitives.certifications,
      primitives.avatar,
    )
  }

  toPrimitives(): WorkerPrimitives {
    return {
      uid: this.uid,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      profileType: this.profileType,
      location: this.location,
      bio: this.bio,
      skills: this.skills,
      experience: this.experience,
      certifications: this.certifications,
      avatar: this.avatar,
    }
  }
}