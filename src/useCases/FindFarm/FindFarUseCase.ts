import { IFarmRepository } from '../../repositories/IFarmRepository'
import { IFindFarmRequestDTO } from './FindFarmDTO'

export class FindFarmUseCase {
  constructor (
    private farmersRespository: IFarmRepository
  ) {}

  async execute (data: IFindFarmRequestDTO) {
    const farm = await this.farmersRespository.findById(data.id)

    if (!farm) {
      throw new Error('Farm not found')
    }

    return farm
  }
}
