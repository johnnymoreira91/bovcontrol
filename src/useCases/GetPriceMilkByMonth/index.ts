import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { MongoFarmRepository } from '../../repositories/implementations/MongoFarmRepository'
import { PriceRepository } from '../../repositories/implementations/PriceRepository'
import { GetPriceMilkByMonthController } from './GetPriceMilkByMonthController'
import { GetPriceMilkByMonthUseCase } from './GetPriceMilkByMonthUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()
const mongoFarmRepository = new MongoFarmRepository()
const priceRepository = new PriceRepository()

const getPriceMilkUseCase = new GetPriceMilkByMonthUseCase(
  mongoMilkDayRepository,
  mongoFarmRepository,
  priceRepository
)

const getPriceMilkMonthController = new GetPriceMilkByMonthController(
  getPriceMilkUseCase
)

export {
  getPriceMilkMonthController,
  getPriceMilkUseCase
}
