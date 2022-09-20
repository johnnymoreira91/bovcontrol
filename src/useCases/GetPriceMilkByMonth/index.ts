import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { MongoFarmRepository } from '../../repositories/implementations/MongoFarmRepository'
import { GetPriceMilkByMonthController } from './GetPriceMilkByMonthController'
import { GetPriceMilkByMonthUseCase } from './GetPriceMilkByMonthUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()
const mongoFarmRepository = new MongoFarmRepository()

const getPriceMilkUseCase = new GetPriceMilkByMonthUseCase(
  mongoMilkDayRepository,
  mongoFarmRepository
)

const getPriceMilkMonthController = new GetPriceMilkByMonthController(
  getPriceMilkUseCase
)

export {
  getPriceMilkMonthController,
  getPriceMilkUseCase
}
