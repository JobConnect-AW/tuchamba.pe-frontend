export class RegistrationService {
  private static readonly STORAGE_KEY = 'registration_data'

  static saveRegistrationData(data: { accountUid: string; userUid: string; token: string }): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
  }

  static getRegistrationData(): { accountUid: string; userUid: string; token: string } | null {
    const data = localStorage.getItem(this.STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

  static clearRegistrationData(): void {
    localStorage.removeItem(this.STORAGE_KEY)
  }
}