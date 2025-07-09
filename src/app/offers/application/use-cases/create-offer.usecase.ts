import { v4 } from 'uuid'
import { Offer } from '../../domain/entities/offer.entity'
import { OfferRepository } from '../../domain/repositories/offer.repository'

interface CreateOfferDTO {
  uid?: string
  title: string
  description: string
  category: string
  amount: number
  duration: string
  paymentMethod: string
  minimumExperience: string
  workSchedule: string
  notificationsAccepted: boolean
  personalDataConsent: boolean
  userUid: string
  status?: string
  proposalsCount?: number
  selectedProposalUid?: string
  startAt?: string
}

export class CreateOfferUseCase {
  constructor(private readonly offerRepository: OfferRepository) {}

  async execute(data: CreateOfferDTO): Promise<Offer> {
    // Validación básica
    if (!data.title || !data.description) {
      throw new Error('El título y la descripción son obligatorios')
    }

    if (!data.personalDataConsent) {
      throw new Error('Debe aceptar el tratamiento de datos personales')
    }

    // Crear la entidad Offer
    const newOffer = new Offer(
      data.uid || v4(),
      data.userUid,
      data.title,
      data.description,
      data.category,
      '', // location no se usa más
      +data.amount.toFixed(2),
      data.paymentMethod,
      data.minimumExperience,
      data.workSchedule,
      data.notificationsAccepted,
      data.personalDataConsent,
      new Date(data.startAt || Date.now()),
      new Date(data.startAt || Date.now()),
    )

    // Persistir con el repositorio
    const createdOffer = await this.offerRepository.persist(newOffer)

    return createdOffer
  }
}
