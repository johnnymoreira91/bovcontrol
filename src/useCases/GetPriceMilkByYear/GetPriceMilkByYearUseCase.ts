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
    // const months: number[] = []
    // const dataPriceMilk: Object[] = []
    const milkData = await this.milkDayRepository.filterByYearAndFarmer(data.year, data.farmer_code)
    if (!milkData) {
      throw new Error('Farmer/Year not found')
    }

    const farmDistance = await this.farmRepository.getFarmDistance(data.farmer_code)
    const usdValue = await this.priceRepository.getUSDPrice()
    const dataMilk = await GetPriceMilkByYearCalcFunction(milkData, farmDistance, parseFloat(usdValue.bid))
    // const mapMonths = milkData.map(item => item.month)
    // const dataSet = [...new Set(mapMonths)].sort((a, b) => {
    //   return a - b
    // })
    // for (const numb of dataSet) {
    //   months.push(numb)
    // }

    // for (const month of months) {
    //   const totalMilk = milkData.filter(item => item.month === month).reduce((pv, cr) => pv + cr.amount, 0)

    //   let basePrice: number = 0
    //   let kmPrice: number = 0
    //   let bonus: number = 0
    //   if (month <= 6) {
    //     basePrice = 1.80
    //     bonus = 0
    //     if (farmDistance > 50) {
    //       kmPrice = 0.06
    //     }
    //   } else {
    //     basePrice = 1.95
    //     kmPrice = 0
    //     bonus = 0.01
    //   }

    //   const usdValue = await this.priceRepository.getUSDPrice()
    //   const priceLiter = ((totalMilk * basePrice) - (kmPrice * farmDistance) + (bonus * totalMilk)) / totalMilk
    //   const priceLiterUsd = priceLiter / parseFloat(usdValue.bid)

    //   dataPriceMilk.push({
    //     month,
    //     price_BRL: priceLiter ? priceLiter.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'Not available',
    //     price_USD: priceLiterUsd ? priceLiterUsd.toLocaleString('en-us', { style: 'currency', currency: 'USD' }) : 'Not available'
    //   })
    // }
    return dataMilk
  }
}

export { GetPriceMilkByYearUseCase }
