import { MongoFarmRepository } from '../..//repositories/implementations/MongoFarmRepository'
import { FindFarmController } from './FindFarmController'
import { FindFarmUseCase } from './FindFarUseCase'

const mongoFarmRepository = new MongoFarmRepository()

const findFarmUseCase = new FindFarmUseCase(
  mongoFarmRepository
)

const findFarmController = new FindFarmController(
  findFarmUseCase
)

export {
  findFarmUseCase,
  findFarmController
}
