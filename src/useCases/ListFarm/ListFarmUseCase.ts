import { IFarmRepository } from '../../repositories/IFarmRepository'

export class ListFarmUseCase {
  constructor (private farmRepository: IFarmRepository) {}

  async execute () {
    const farms = await this.farmRepository.list()

    if (!farms) {
      throw new Error('Farms not found')
    }

    return farms
  }
}
