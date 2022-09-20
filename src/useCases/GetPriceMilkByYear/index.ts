import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { MongoFarmRepository } from '../../repositories/implementations/MongoFarmRepository'
import { PriceRepository } from '../../repositories/implementations/PriceRepository'
import { GetPriceMilkByYearController } from '../GetPriceMilkByYear/GetPriceMilkByYearController'
import { GetPriceMilkByYearUseCase } from '../GetPriceMilkByYear/GetPriceMilkByYearUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()
const mongoFarmRepository = new MongoFarmRepository()
const priceRepository = new PriceRepository()

const getPriceMilkByYearUseCase = new GetPriceMilkByYearUseCase(
  mongoMilkDayRepository,
  mongoFarmRepository,
  priceRepository
)

const getPriceMilkByYearController = new GetPriceMilkByYearController(
  getPriceMilkByYearUseCase
)

export {
  getPriceMilkByYearController,
  getPriceMilkByYearUseCase
}
