import { MongoFarmersRepository } from "../../repositories/implementations/MongoFarmersRepository";
import { DeleteFarmerController } from "./DeleteFarmerController";
import { DeleteFarmerUseCase } from "./DeleteFarmerUseCase";

const mongoFarmersRepository = new MongoFarmersRepository()

const deleteFarmerUseCase = new DeleteFarmerUseCase(
  mongoFarmersRepository
)

const deleteFarmerController = new DeleteFarmerController(
  deleteFarmerUseCase
)

export {
  deleteFarmerUseCase,
  deleteFarmerController
}