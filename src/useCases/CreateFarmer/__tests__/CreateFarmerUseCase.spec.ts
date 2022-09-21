import { FarmerSchema } from '../../../providers/Schemas/Farmer'
import { MongoFarmersRepository } from '../../../repositories/implementations/MongoFarmersRepository'
import { CreateFarmerUseCase } from '../CreateFarmerUseCase'

describe('Create Farmer tests', () => {
  let farmerRepository: MongoFarmersRepository
  let createFarmerUseCase: CreateFarmerUseCase
  // const server = app

  beforeAll(async () => {
    farmerRepository = new MongoFarmersRepository()
    createFarmerUseCase = new CreateFarmerUseCase(
      farmerRepository
    )
  })
  beforeAll(async () => {
    jest.clearAllMocks()
    await FarmerSchema.deleteMany()
  })

  it('Should create a new Farmer', async () => {
    const newFarmer = {
      email: 'test@test.com',
      name: 'test',
      password: 'test',
      public_code: 'abc-1234'
    }

    const data = await createFarmerUseCase.execute(newFarmer)
    expect(data.name).toBe('test')
  })

  it('Should throw an error when try to create a new Farmer', async () => {
    const newFarmer = {
      email: 'test@test.com',
      name: 'test',
      password: 'test',
      public_code: 'abc-1234'
    }

    try {
      const data = await createFarmerUseCase.execute(newFarmer)
      expect(data.name).toBe('test')
    } catch (error) {
      expect(error.message).toBe('Farmer already exist')
    }
  })
})
