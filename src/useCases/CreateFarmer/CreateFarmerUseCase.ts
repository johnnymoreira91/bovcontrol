// import { IMailProvider } from "../../providers/IMailProvider";
import { Farmer } from '../../entities/Farmer'
import { IFarmersRepository } from '../../repositories/IFarmersRepository'
import { ICreateFarmerRequestDTO } from './CreateFarmerDTO'

export class CreateFarmerUseCase {
  constructor (
    private farmersRespository: IFarmersRepository
  ) { }

  async execute (data: ICreateFarmerRequestDTO) {
    const farmerAlreadyExist = await this.farmersRespository.findByEmail(data.email)

    if (farmerAlreadyExist) {
      throw new Error('Farmer already exist')
    }

    const farmer = new Farmer(data)
    return this.farmersRespository.save(farmer)
  }
}
