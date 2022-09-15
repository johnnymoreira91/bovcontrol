import { MongoFarmRepository } from '../..//repositories/implementations/MongoFarmRepository'
import { ListFarmUseCase } from './ListFarmUseCase'
import { ListFarmController } from './ListFarmController'

const mongoFarmRepository = new MongoFarmRepository()

const listFarmUseCase = new ListFarmUseCase(
  mongoFarmRepository
)

const listFarmController = new ListFarmController(
  listFarmUseCase
)

export {
  listFarmController,
  listFarmUseCase
}
