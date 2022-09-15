import { MongoFarmRepository } from '../..//repositories/implementations/MongoFarmRepository'
import { DeleteFarmController } from './DeleteFarmController'
import { DeleteFarmUseCase } from './DeleteFarmUseCase'

const mongoFarmRepository = new MongoFarmRepository()

const deleteFarmUseCase = new DeleteFarmUseCase(
  mongoFarmRepository
)

const deleteFarmController = new DeleteFarmController(
  deleteFarmUseCase
)

export {
  deleteFarmUseCase,
  deleteFarmController
}
