import axios, { AxiosInstance } from 'axios'

export class HttpService {
  private readonly BASE_URL = import.meta.env.VITE_BASE_URL
  private static instance: HttpService | null = null
  axios: AxiosInstance | null = null

  private constructor() {
    if (!HttpService.instance) {
      this.axios = axios.create({
        baseURL: this.BASE_URL,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      HttpService.instance = this
    }

    return HttpService.instance
  }

  async get<T>(url: string, queryParams?: Record<string, any>): Promise<T> {
    if (!this.axios) throw new Error('Axios instance not initialized')
    const response = await this.axios.get<T>(url, { params: queryParams })
    return response.data
  }

  async post<T>(url: string, body?: any, queryParams?: Record<string, any>): Promise<T> {
    if (!this.axios) throw new Error('Axios instance not initialized')
    const response = await this.axios.post<T>(url, body, { params: queryParams })
    return response.data
  }

  async put<T>(url: string, body?: any, queryParams?: Record<string, any>): Promise<T> {
    if (!this.axios) throw new Error('Axios instance not initialized')
    const response = await this.axios.put<T>(url, body, { params: queryParams })
    return response.data
  }

  async patch<T>(url: string, body?: any, queryParams?: Record<string, any>): Promise<T> {
    if (!this.axios) throw new Error('Axios instance not initialized')
    const response = await this.axios.patch<T>(url, body, { params: queryParams })
    return response.data
  }

  async delete<T>(url: string, queryParams?: Record<string, any>): Promise<T> {
    if (!this.axios) throw new Error('Axios instance not initialized')
    const response = await this.axios.delete<T>(url, { params: queryParams })
    return response.data
  }
}
