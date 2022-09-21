import { FarmSchema } from '../../../providers/Schemas/Farm'
import { MongoFarmRepository } from '../MongoFarmRepository'

describe('Create Farm tests', () => {
  let farmRepository: MongoFarmRepository

  beforeAll(async () => {
    farmRepository = new MongoFarmRepository()
  })
  beforeAll(async () => {
    jest.clearAllMocks()
    await FarmSchema.deleteMany()
  })

  it('Should Save a new Farm', async () => {
    const newFarm = {
      id: '1',
      name: 'lala land',
      owner_id: 'abc-1234',
      distance_factory: 1322
    }

    const data = await farmRepository.save(newFarm)
    expect(data.name).toBe('lala land')
    expect(data.owner_id).toBe('abc-1234')
    expect(data.distance_factory).toBe(1322)
  })

  it('Should findByName', async () => {
    const data = await farmRepository.findByName('lala land')
    expect(data.name).toBe('lala land')
    expect(data.owner_id).toBe('abc-1234')
    expect(data.distance_factory).toBe(1322)
  })

  it('Should findByOwnerId', async () => {
    const data = await farmRepository.findByOwnerId('abc-1234')
    expect(data.name).toBe('lala land')
    expect(data.owner_id).toBe('abc-1234')
    expect(data.distance_factory).toBe(1322)
  })

  it('Should list and findById', async () => {
    const list = await farmRepository.list()
    const find = list[0]
    const data = await farmRepository.findById(find.id)
    expect(data.name).toBe('lala land')
    expect(data.owner_id).toBe('abc-1234')
    expect(data.distance_factory).toBe(1322)
  })

  it('Should getFarmDistance', async () => {
    const data = await farmRepository.getFarmDistance('abc-1234')
    expect(data).toBe(1322)
  })

  it('Should delete farm', async () => {
    const list = await farmRepository.list()
    const data = await farmRepository.delete(list[0].id)
    expect(data).toBe(undefined)
  })
})
