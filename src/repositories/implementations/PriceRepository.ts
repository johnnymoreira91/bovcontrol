import { Price } from '../../entities/Price'
import { IPriceRepository } from '../IPriceRepository'
import { GetPriceCoin } from '../../services/GetPriceCoin'

const price = new GetPriceCoin()

export class PriceRepository implements IPriceRepository {
  async getUSDPrice (): Promise<Price> {
    return price.getUSDPrice()
  }
}
