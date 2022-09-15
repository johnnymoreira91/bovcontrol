import { MongoFarmRepository } from '../../repositories/implementations/MongoFarmRepository'
import { MongoFarmersRepository } from '../../repositories/implementations/MongoFarmersRepository'
import { CreateFarmController } from './CreateFarmController'
import { CreateFarmUseCase } from './CreateFarmUseCase'

const mongoFarmRepository = new MongoFarmRepository()
const mongoFarmerRepository = new MongoFarmersRepository()

const createFarmUseCase = new CreateFarmUseCase(
  mongoFarmRepository,
  mongoFarmerRepository
)

const createFarmController = new CreateFarmController(
  createFarmUseCase
)

export {
  createFarmUseCase,
  createFarmController
}
