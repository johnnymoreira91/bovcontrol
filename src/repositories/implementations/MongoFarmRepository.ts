import { FarmSchema } from '../../providers/entities/Farm'
import { Farm } from '../../entities/Farm'
import { IFarmRepository } from '../IFarmRepository'

export class MongoFarmRepository implements IFarmRepository {
  async list (): Promise<Farm[]> {
    return FarmSchema.find({})
  }

  async findById (id: string): Promise<Farm> {
    return FarmSchema.findById(id)
  }

  async delete (id: string): Promise<void> {
    await FarmSchema.deleteOne({ id })
  }

  async findByName (name: string): Promise<Farm> {
    return FarmSchema.findOne({ name })
  }

  async getFarmDistance (farmer_code: string): Promise<number> {
    const farm = await FarmSchema.findOne({ owner_id: farmer_code })
    return farm.distance_factory
  }

  async findByOwnerId (owner_id: string): Promise<Farm> {
    return FarmSchema.findOne({ owner_id })
  }

  async save (farm: Farm): Promise<void> {
    await FarmSchema.create(farm)
  }
}
