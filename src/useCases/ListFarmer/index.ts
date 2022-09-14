import { MongoFarmersRepository } from "../../repositories/implementations/MongoFarmersRepository";
import { ListFarmerController } from "./ListFarmerController";
import { ListFarmerUseCase } from "./ListFarmerUseCase";

const mongoFarmersRepository = new MongoFarmersRepository()

const listFarmerUseCase = new ListFarmerUseCase(
    mongoFarmersRepository
)

const listFarmerController = new ListFarmerController(
    listFarmerUseCase
)

export {
    listFarmerUseCase,
    listFarmerController
}