import { MongoFarmersRepository } from "../../repositories/implementations/MongoFarmersRepository";
import { CreateFarmerController } from "./CreateFarmerController";
import { CreateFarmerUseCase } from "./CreateFarmerUseCase";

const mongoFarmersRepository = new MongoFarmersRepository()

const createFarmerUseCase = new CreateFarmerUseCase(
  mongoFarmersRepository
)

const createFarmerController = new CreateFarmerController(
  createFarmerUseCase
)

export {
  createFarmerUseCase,
  createFarmerController
}