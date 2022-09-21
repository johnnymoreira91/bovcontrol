import { FarmerSchema } from '../../providers/Schemas/Farmer'
import { Farmer } from '../../entities/Farmer'
import { IFarmersRepository } from '../IFarmersRepository'
import { FarmSchema } from '../../providers/Schemas/Farm'
import { MilkDaySchema } from '../../providers/Schemas/MilkDay'

export class MongoFarmersRepository implements IFarmersRepository {
  async list (): Promise<Farmer[]> {
    const farmers = await FarmerSchema.find({})
    return farmers
  }

  async findById (id: string): Promise<Farmer> {
    return FarmerSchema.findById(id)
  }

  async findByPublicCode (code: string): Promise<Farmer> {
    return FarmerSchema.findOne({ public_code: code })
  }

  async delete (code: string): Promise<void> {
    await FarmerSchema.deleteOne({ public_code: code })
    await FarmSchema.deleteOne({ owner_id: code })
    await MilkDaySchema.deleteMany({ farmer_code: code })
  }

  async findByEmail (email: string): Promise<Farmer> {
    const farmer = await FarmerSchema.findOne({ email })

    return farmer
  }

  async save (farmer: Farmer): Promise<Farmer> {
    return FarmerSchema.create(farmer)
  }
}
