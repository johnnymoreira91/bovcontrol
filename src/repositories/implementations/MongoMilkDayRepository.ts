/* eslint-disable camelcase */
import { MilkDaySchema } from '../../providers/entities/MilkDay'
import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../IMilkDayRepository'
import { FarmerSchema } from '../../providers/entities/Farmer'

export class MongoMilkDayRepository implements IMilkDayRepository {
  async delete (id: string): Promise<void> {
    await MilkDaySchema.deleteOne({ public_code: id })
  }

  async list (): Promise<MilkDay[]> {
    return MilkDaySchema.find({})
  }

  async listById (public_code: string): Promise<MilkDay[]> {
    const farmer = await FarmerSchema.findOne({ public_code })
    if (!farmer) {
      throw new Error('Farmer not found')
    }
    return MilkDaySchema.find({ farmer_code: farmer.public_code })
  }

  async filterByMonthAndFarmer (month: number, farmer_code: string): Promise<MilkDay[]> {
    return MilkDaySchema.find({
      month,
      farmer_code
    }).sort({ day: -1 })
  }

  async findById (id: string): Promise<MilkDay> {
    return MilkDaySchema.findOne({ public_code: id })
  }

  async save (milkDay: MilkDay): Promise<void> {
    await MilkDaySchema.create(milkDay)
  }
}
