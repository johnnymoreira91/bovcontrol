import { FarmerSchema } from '../../../providers/Schemas/Farmer'
import { MongoFarmersRepository } from '../MongoFarmersRepository'

describe('Create Farm tests', () => {
  let farmerRepository: MongoFarmersRepository

  beforeAll(async () => {
    farmerRepository = new MongoFarmersRepository()
  })
  beforeAll(async () => {
    jest.clearAllMocks()
    await FarmerSchema.deleteMany()
  })

  it('Should Save a new Farmer', async () => {
    const newFarmer = {
      id: '1',
      email: 'test@test.com',
      name: 'test',
      password: 'test',
      public_code: 'abc-1234'
    }

    const data = await farmerRepository.save(newFarmer)
    expect(data.name).toBe('test')
    expect(data.email).toBe('test@test.com')
    expect(data.public_code).toBe('abc-1234')
  })

  it('Should findByPublicCode', async () => {
    const data = await farmerRepository.findByPublicCode('abc-1234')
    expect(data.name).toBe('test')
    expect(data.email).toBe('test@test.com')
    expect(data.public_code).toBe('abc-1234')
  })

  it('Should findById', async () => {
    const list = await farmerRepository.list()
    const data = await farmerRepository.findById(list[0].id)
    expect(data.name).toBe('test')
    expect(data.email).toBe('test@test.com')
    expect(data.public_code).toBe('abc-1234')
  })

  it('Should delete farmer', async () => {
    const list = await farmerRepository.list()
    const data = await farmerRepository.delete(list[0].id)
    expect(data).toBe(undefined)
  })
})
