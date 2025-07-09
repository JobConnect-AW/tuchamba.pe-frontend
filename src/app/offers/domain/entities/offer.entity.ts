export interface OfferPrimitives {
  uid: string
  userUid: string
  title: string
  description: string
  // Campos originales (para compatibilidad)
  technicalCategory?: string
  location?: string
  estimatedBudget?: number
  requiredExperience?: string
  // Nuevos campos del backend
  category?: string
  amount?: number
  duration?: string
  status?: string
  minimumExperience?: string
  proposalsCount?: number
  selectedProposalUid?: string | null
  startAt?: string
  // Campos comunes
  paymentMethod: string
  workSchedule: string
  notificationsAccepted: boolean
  personalDataConsent: boolean
  createdAt?: string
  updatedAt?: string
}

export class Offer {
  constructor(
    public readonly uid: string, // ID único para la oferta
    public readonly userUid: string, // ID único del usuario que crea la oferta
    public readonly title: string, // Título de la oferta
    public readonly description: string, // Descripción de la oferta
    public readonly technicalCategory: string, // Categoría técnica (Trabajo)
    public readonly location: string, // Dirección (Ubicación)
    public readonly estimatedBudget: number, // Presupuesto estimado
    public readonly paymentMethod: string, // Forma de pago
    public readonly requiredExperience: string, // Experiencia mínima requerida
    public readonly workSchedule: string, // Rango de horas de trabajo
    public readonly notificationsAccepted: boolean, // Aceptación de notificaciones
    public readonly personalDataConsent: boolean, // Autorización del tratamiento de datos personales
    public readonly createdAt?: Date, // Fecha de creación
    public readonly updatedAt?: Date, // Fecha de última actualización
  ) {}

  static fromPrimitives(primitives: OfferPrimitives): Offer {
    return new Offer(
      primitives.uid,
      primitives.userUid,
      primitives.title,
      primitives.description,
      primitives.technicalCategory || primitives.category || '',
      primitives.location || primitives.duration || '',
      primitives.estimatedBudget || primitives.amount || 0,
      primitives.paymentMethod,
      primitives.requiredExperience || primitives.minimumExperience || '',
      primitives.workSchedule,
      primitives.notificationsAccepted,
      primitives.personalDataConsent,
      primitives.createdAt ? new Date(primitives.createdAt) : undefined,
      primitives.updatedAt ? new Date(primitives.updatedAt) : undefined
    )
  }

  toPrimitives(): OfferPrimitives {
    return {
      uid: this.uid,
      userUid: this.userUid,
      title: this.title,
      description: this.description,
      category: this.technicalCategory,
      amount: this.estimatedBudget,
      duration: this.location,
      paymentMethod: this.paymentMethod,
      status: 'ACTIVE',
      minimumExperience: this.requiredExperience,
      workSchedule: this.workSchedule,
      proposalsCount: 0,
      selectedProposalUid: null,
      startAt: this.createdAt?.toISOString() || new Date().toISOString(),
      notificationsAccepted: this.notificationsAccepted,
      personalDataConsent: this.personalDataConsent,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }
}
