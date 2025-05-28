export class OfferDTO {
  constructor(
    public uid: string,
    public userUid: string,
    public title: string,
    public description: string,
    public technicalCategory: string,
    public location: string,
    public estimatedBudget: number,
    public paymentMethod: string,
    public requiredExperience: string,
    public workSchedule: string,
    public notificationsAccepted: boolean,
    public personalDataConsent: boolean,
    public createdAt?: string,
    public updatedAt?: string,
  ) {}
}
