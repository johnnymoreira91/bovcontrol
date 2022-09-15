import { MongoFarmersRepository } from "../../repositories/implementations/MongoFarmersRepository";
import { FindFarmerController } from "./FindFarmerController";
import { FindFarmerUseCase } from "./FindFarmerUseCase";

const mongoFarmersRepository = new MongoFarmersRepository()

const findFarmerUseCase = new FindFarmerUseCase(
    mongoFarmersRepository
)

const findFarmerController = new FindFarmerController(
    findFarmerUseCase
)

export {
    findFarmerUseCase,
    findFarmerController
}