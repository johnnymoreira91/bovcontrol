import { FarmSchema } from '../../../providers/Schemas/Farm'
import { MongoFarmRepository } from '../../../repositories/implementations/MongoFarmRepository'
import { MongoFarmersRepository } from '../../../repositories/implementations/MongoFarmersRepository'
import { CreateFarmUseCase } from '../CreateFarmUseCase'

describe('Create Farm tests', () => {
  let farmRepository: MongoFarmRepository
  let farmerRepository: MongoFarmersRepository
  let createFarmUseCase: CreateFarmUseCase

  beforeAll(async () => {
    farmRepository = new MongoFarmRepository()
    farmerRepository = new MongoFarmersRepository()
    createFarmUseCase = new CreateFarmUseCase(
      farmRepository,
      farmerRepository
    )
  })
  beforeAll(async () => {
    jest.clearAllMocks()
    await FarmSchema.deleteMany()
  })

  it('Should Create a new Farm', async () => {
    const newFarm = {
      name: 'lala land',
      owner_id: 'abc-1234',
      distance_factory: 1322
    }

    const data = await createFarmUseCase.execute(newFarm)
    expect(data.name).toBe('lala land')
  })

  it('Should get error when Create a duplicated Farm', async () => {
    const newFarm = {
      name: 'lala land',
      owner_id: 'abc-1234',
      distance_factory: 1322
    }

    try {
      const data = await createFarmUseCase.execute(newFarm)
      expect(data.name).toBe('lala land')
    } catch (error) {
      expect(error.message).toBe('Farm already exist')
    }
  })

  it('Should get error when owner_id not found', async () => {
    const newFarm = {
      name: 'lala land 2',
      owner_id: 'abc-4321',
      distance_factory: 1322
    }

    try {
      const data = await createFarmUseCase.execute(newFarm)
      expect(data.name).toBe('lala land')
    } catch (error) {
      expect(error.message).toBe('Farmer id not found')
    }
  })

  it('Should get error when farmer already has one farm', async () => {
    const newFarm = {
      name: 'lala land 3',
      owner_id: 'abc-1234',
      distance_factory: 1322
    }

    try {
      const data = await createFarmUseCase.execute(newFarm)
      expect(data.name).toBe('lala land')
    } catch (error) {
      expect(error.message).toBe('Farmer already has a farm')
    }
  })
})
