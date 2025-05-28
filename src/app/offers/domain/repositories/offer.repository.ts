import { Offer } from '../entities/offer.entity'

export interface OfferRepository {
  getAllOffersByUserUid(userUid: string): Promise<any[]>
  getByUid(uid: string): Promise<Offer>
  persist(offer: Offer): Promise<any>
}
