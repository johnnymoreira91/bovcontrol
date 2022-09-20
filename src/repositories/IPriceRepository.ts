import { Price } from '../entities/Price'

export interface IPriceRepository {
    getUSDPrice(): Promise<Price>
}
