import { IFarmersRepository } from "../../repositories/IFarmersRepository";
import { IFindFarmerRequestDTO } from "./FindFarmerDTO";

export class FindFarmerUseCase {
  constructor(
    private farmersRespository: IFarmersRepository
  ) {}

  async execute(data: IFindFarmerRequestDTO) {
    const farmer = await this.farmersRespository.findById(data.id)

    if (!farmer) {
      throw new Error('Farmer not found')
    }

    return farmer
  }
}