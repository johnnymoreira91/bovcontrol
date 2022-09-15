// import { IMailProvider } from "../../providers/IMailProvider";
import { Farmer } from '../../entities/Farmer'
import { IFarmersRepository } from '../../repositories/IFarmersRepository'
import { ICreateFarmerRequestDTO } from './CreateFarmerDTO'

export class CreateFarmerUseCase {
  constructor (
    private farmersRespository: IFarmersRepository
    // private mailProvider: IMailProvider
  ) { }

  async execute (data: ICreateFarmerRequestDTO) {
    const farmerAlreadyExist = await this.farmersRespository.findByEmail(data.email)

    if (farmerAlreadyExist) {
      throw new Error('Farmer already exists')
    }

    const farmer = new Farmer(data)
    await this.farmersRespository.save(farmer)

    // this.mailProvider.sendEmail({
    //   to: {
    //     name: data.name,
    //     email: data.email
    //   },
    //   from: {
    //     name: 'Team',
    //     email: 'reply@farmers.com'
    //   },
    //   subject: 'Welcame',
    //   body: `<H1> Bem vindo ${data.name} </H1>`
    // })
  }
}
