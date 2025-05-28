import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { Offer } from '../../domain/entities/offer.entity'
import { OfferRepository } from '../../domain/repositories/offer.repository'

export default class ApiOfferRepository implements OfferRepository {
  private readonly API_URL = `/offers`

  constructor(private readonly httpService: HttpService) {}

  async getAllOffersByUserUid(userUid: string): Promise<any[]> {
    const data = await this.httpService.get(this.API_URL, {
      userUid,
    })

    return data
  }

  async persist(offer: Offer): Promise<any> {
    const data = await this.httpService.post(this.API_URL, offer)

    return data
  }

  async getByUid(uid: string): Promise<Offer> {
    const data = await this.httpService.get(`${this.API_URL}/${uid}`)

    return data
  }
}
