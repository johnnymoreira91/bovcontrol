import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { ListMilkDayController } from './ListMilkDayController'
import { ListMilkDayUseCase } from './ListMilkDayUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()

const listMilkDayUseCase = new ListMilkDayUseCase(
  mongoMilkDayRepository
)

const listMilkDayController = new ListMilkDayController(
  listMilkDayUseCase
)

export {
  listMilkDayUseCase,
  listMilkDayController
}
