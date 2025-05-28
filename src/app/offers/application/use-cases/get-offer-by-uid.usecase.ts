import { Offer } from '../../domain/entities/offer.entity'
import { OfferRepository } from '../../domain/repositories/offer.repository'

export class GetOfferByUidUseCase {
  constructor(private readonly offerRepository: OfferRepository) {}

  async execute(uid: string): Promise<Offer> {
    if (!uid) {
      throw new Error('El UID de la oferta es obligatorio')
    }

    const offer = await this.offerRepository.getByUid(uid)

    if (!offer) {
      throw new Error(`No se encontró ninguna oferta con el UID ${uid}`)
    }

    return offer
  }
}
