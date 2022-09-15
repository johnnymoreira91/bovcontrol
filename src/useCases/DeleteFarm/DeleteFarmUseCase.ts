import { IFarmRepository } from '../../repositories/IFarmRepository'
import { IDeleteFarmRequestDTO } from './DeleteFarmDTO'

export class DeleteFarmUseCase {
  constructor (
    private farmRepository: IFarmRepository
  ) {}

  async execute (data: IDeleteFarmRequestDTO) {
    const farm = await this.farmRepository.findById(data.id)

    if (!farm) {
      throw new Error('Farm not found')
    }

    await this.farmRepository.delete(farm.id)
  }
}
