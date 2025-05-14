import { Offer } from '../../domain/entities/offer.entity'
import { OfferDTO } from '../dtos/offer.dto'

export class OfferAssembler {
  // Convierte la entidad Offer en OfferDTO
  static toDTO(offer: Offer): OfferDTO {
    return new OfferDTO(
      offer.uid,
      offer.userUid,
      offer.title,
      offer.description,
      offer.technicalCategory,
      offer.location,
      +offer.estimatedBudget.toFixed(2),
      offer.paymentMethod,
      offer.requiredExperience,
      offer.workSchedule,
      offer.notificationsAccepted,
      offer.personalDataConsent,
      offer.createdAt?.toISOString(),
      offer.updatedAt?.toISOString(),
    )
  }

  // Convierte un OfferDTO de vuelta a la entidad Offer
  static toEntity(offerDTO: OfferDTO): Offer {
    return new Offer(
      offerDTO.uid,
      offerDTO.userUid,
      offerDTO.title,
      offerDTO.description,
      offerDTO.technicalCategory,
      offerDTO.location,
      +offerDTO.estimatedBudget.toFixed(2),
      offerDTO.paymentMethod,
      offerDTO.requiredExperience,
      offerDTO.workSchedule,
      offerDTO.notificationsAccepted,
      offerDTO.personalDataConsent,
      offerDTO.createdAt ? new Date(offerDTO.createdAt) : undefined,
      offerDTO.updatedAt ? new Date(offerDTO.updatedAt) : undefined,
    )
  }
}
