import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { Offer } from '../../domain/entities/offer.entity'
import { OfferRepository } from '../../domain/repositories/offer.repository'

export class ApiOfferRepository implements OfferRepository {
  private readonly API_URL = `/offers`

  constructor(private readonly httpService: HttpService) {}

  async getAllOffersByUserUid(userUid: string): Promise<any[]> {
    const data = await this.httpService.get(this.API_URL, {
      userUid,
    })

    return (data as any[]).map((offer: any) => Offer.fromPrimitives(offer))
  }

  async persist(offer: Offer): Promise<any> {
    const backendData = {
      title: offer.title,
      description: offer.description,
      category: offer.technicalCategory,
      amount: offer.estimatedBudget,
      duration: offer.location,
      paymentMethod: offer.paymentMethod,
      minimumExperience: offer.requiredExperience,
      workSchedule: offer.workSchedule,
      userUid: offer.userUid,
      personalDataConsent: offer.personalDataConsent,
      notificationsAccepted: offer.notificationsAccepted,
      status: "NUEVA",
      proposalsCount: 0,
      startAt: new Date().toISOString()
    }

    const data = await this.httpService.post(this.API_URL, backendData)
    return data
  }

  private mapCategoryToId(category: string): number {
    const categoryMap: { [key: string]: number } = {
      'frontend': 1,
      'backend': 2,
      'fullstack': 3
    }
    return categoryMap[category] || 1
  }



  async getByUid(uid: string): Promise<Offer> {
    const data = await this.httpService.get(`${this.API_URL}/${uid}`)
    const offer = Offer.fromPrimitives(data as any)
    return offer
  }
}
