export interface OfferPrimitives {
  uid: string
  userUid: string
  title: string
  description: string
  technicalCategory: string
  location: string
  estimatedBudget: number
  paymentMethod: string
  requiredExperience: string
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
}
