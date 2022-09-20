import { IFarmRepository } from '../../repositories/IFarmRepository'
import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'
import { IGetPriceMilkByYearRequestDTO } from './GetPriceMilkByYearDTO'
import { IPriceRepository } from '../../repositories/IPriceRepository'
import { GetPriceMilkByYearCalcFunction } from './GetPriceMilkByYearCalcFunction'

class GetPriceMilkByYearUseCase {
  constructor (
    private milkDayRepository: IMilkDayRepository,
    private farmRepository: IFarmRepository,
    private priceRepository: IPriceRepository
  ) {}

  async execute (data: IGetPriceMilkByYearRequestDTO) {
    const farm = await this.farmRepository.findByOwnerId(data.farmer_code)
    if (!farm) {
      throw new Error('Farm/Farmer not found')
    }
    const milkData = await this.milkDayRepository.filterByYearAndFarmer(data.year, data.farmer_code)
    if (!milkData) {
      throw new Error('Farmer/Year not found')
    }

    const usdValue = await this.priceRepository.getUSDPrice()
    const dataMilk = await GetPriceMilkByYearCalcFunction(milkData, farm.distance_factory, parseFloat(usdValue.bid))

    return dataMilk
  }
}

export { GetPriceMilkByYearUseCase }
