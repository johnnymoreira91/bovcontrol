import { IFarmersRepository } from '../../repositories/IFarmersRepository'

export class ListFarmerUseCase {
  constructor (
    private farmersRespository: IFarmersRepository
  ) { }

  async execute () {
    const farmers = await this.farmersRespository.list()

    if (!farmers) {
      throw new Error('Farmers not found')
    }

    return farmers
  }
}
