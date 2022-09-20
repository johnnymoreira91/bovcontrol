// import { IMailProvider } from "../../providers/IMailProvider";
import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'
import { IFarmersRepository } from '../../repositories/IFarmersRepository'
import { ICreateMilkDayRequestDTO } from './MilkDayDTO'

export class CreateMilkDayUseCase {
  constructor (
    private milkDayRespository: IMilkDayRepository,
    private farmerRepository: IFarmersRepository
  ) { }

  async execute (data: ICreateMilkDayRequestDTO) {
    const MilkDayAlreadyExist = await this.milkDayRespository.findByPublicCode(data.public_code)

    if (MilkDayAlreadyExist) {
      throw new Error('Milk data already exists')
    }

    const farmer = await this.farmerRepository.findByPublicCode(data.farmer_code)

    if (!farmer) {
      throw new Error('Farmer not found')
    }

    const milkDay = new MilkDay(data)
    await this.milkDayRespository.save(milkDay)
  }
}
