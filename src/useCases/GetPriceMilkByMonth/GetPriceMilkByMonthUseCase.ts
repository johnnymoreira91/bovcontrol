import { IFarmRepository } from '../../repositories/IFarmRepository'
import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'
import { IGetPriceMilkByMonthRequestDTO } from './GetPriceMilkByMonthDTO'
import { IPriceRepository } from '../../repositories/IPriceRepository'

class GetPriceMilkByMonthUseCase {
  constructor (
    private milkDayRepository: IMilkDayRepository,
    private farmRepository: IFarmRepository,
    private priceRepository: IPriceRepository
  ) {}

  async execute (data: IGetPriceMilkByMonthRequestDTO) {
    const milkByFarmer = await this.milkDayRepository.filterByMonthAndFarmer(data.month, data.farmer_code)
    const farmDistance = await this.farmRepository.getFarmDistance(data.farmer_code)

    if (!milkByFarmer) {
      throw new Error('Farmer not found')
    }

    const totalMilk = milkByFarmer.map((item: MilkDay) => {
      return { amount: item.amount }
    }).reduce((pv, cr) => pv + cr.amount, 0)

    let basePrice: number = 0
    let kmPrice: number = 0
    let bonus: number = 0
    if (data.month <= 6) {
      basePrice = 1.80
      bonus = 0
      if (farmDistance > 50) {
        kmPrice = 0.06
      }
    } else {
      basePrice = 1.95
      kmPrice = 0
      bonus = 0.01
    }

    const usdValue = await this.priceRepository.getUSDPrice()

    const priceLiter = ((totalMilk * basePrice) - (kmPrice * farmDistance) + (bonus * totalMilk)) / totalMilk
    const priceLiterUsd = priceLiter / parseFloat(usdValue.bid)
    return {
      price_BRL: priceLiter.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      price_USD: priceLiterUsd.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }
  }
}

export { GetPriceMilkByMonthUseCase }
