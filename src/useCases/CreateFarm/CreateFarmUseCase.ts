import { IFarmersRepository } from '../../repositories/IFarmersRepository'
import { Farm } from '../../entities/Farm'
import { IFarmRepository } from '../../repositories/IFarmRepository'
import { ICreateFarmRequestDTO } from './CreateFarmDTO'

export class CreateFarmUseCase {
  constructor (
    private farmRepository: IFarmRepository,
    private farmerRepository: IFarmersRepository
  ) { }

  async execute (data: ICreateFarmRequestDTO) {
    const farmAlreadyExist = await this.farmRepository.findByName(data.name)
    if (farmAlreadyExist) {
      throw new Error('Farm already exists')
    }

    const farmer = await this.farmerRepository.findByPublicCode(data.owner_id)
    if (!farmer) {
      throw new Error('Farmer id not found')
    }

    const findOwnerId = await this.farmRepository.findByOwnerId(farmer.public_code)
    if (findOwnerId) {
      throw new Error('Farmer already has a farm')
    }

    const farm = new Farm(data)
    await this.farmRepository.save(farm)
  }
}
