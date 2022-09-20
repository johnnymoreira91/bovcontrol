/* eslint-disable prefer-promise-reject-errors */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Price } from '../entities/Price'

class GetPriceCoin {
  private url = 'https://economia.awesomeapi.com.br/last'
  private count = 0
  private axiosInstance: AxiosInstance

  constructor () {
    const sleepRequest = (milliseconds: number, originalRequest: AxiosRequestConfig, count: number) => {
      return new Promise((resolve, reject) => {
        if (count === 3) {
          return reject([])
        }
        setTimeout(() => resolve(this.axiosInstance(originalRequest)), milliseconds)
      })
    }

    this.axiosInstance = axios.create({
      baseURL: this.url
    })

    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, (error: AxiosResponse) => {
      const { config, status } = error
      const originalRequest = config
      this.count++
      if (status === 500 || !status) {
        return sleepRequest(1000, originalRequest, this.count)
      } else {
        return Promise.reject(error)
      }
    })
  }

  async getUSDPrice (): Promise<Price> {
    const data = await this.axiosInstance.get('/USD-BRL')
    return data.data.USDBRL
  }
}

export { GetPriceCoin }
