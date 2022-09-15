import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { MongoFarmersRepository } from '../../repositories/implementations/MongoFarmersRepository'
import { CreateMilkDayController } from './MilkDayController'
import { CreateMilkDayUseCase } from './MilkDayUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()
const mongoFarmersRepository = new MongoFarmersRepository()

const createMilkDayUseCase = new CreateMilkDayUseCase(
  mongoMilkDayRepository,
  mongoFarmersRepository
)

const createMilkDayController = new CreateMilkDayController(
  createMilkDayUseCase
)

export {
  createMilkDayUseCase,
  createMilkDayController
}
