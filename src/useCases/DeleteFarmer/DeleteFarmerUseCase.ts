import { IFarmersRepository } from '../../repositories/IFarmersRepository'
import { IDeleteFarmerRequestDTO } from './DeleteFarmerDTO'

export class DeleteFarmerUseCase {
  constructor (
    private farmersRespository: IFarmersRepository
  ) { }

  async execute (data: IDeleteFarmerRequestDTO) {
    const farmer = await this.farmersRespository.findById(data.id)

    if (!farmer) {
      throw new Error('Farmer not found')
    }

    await this.farmersRespository.delete(farmer.id)
  }
}
