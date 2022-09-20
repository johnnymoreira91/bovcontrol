/* eslint-disable camelcase */
import { MilkDaySchema } from '../../providers/entities/MilkDay'
import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../IMilkDayRepository'

export class MongoMilkDayRepository implements IMilkDayRepository {
  async delete (id: string): Promise<void> {
    await MilkDaySchema.deleteOne({ public_code: id })
  }

  async list (): Promise<MilkDay[]> {
    return MilkDaySchema.find({})
  }

  async listById (id: number): Promise<MilkDay[]> {
    return MilkDaySchema.findOne({ id })
  }

  async filterByMonthAndFarmer (month: number, farmer_code: string): Promise<MilkDay[]> {
    return MilkDaySchema.find({
      month,
      farmer_code
    }).sort({ day: -1 })
  }

  async filterByYearAndFarmer (year: number, farmer_code: string): Promise<MilkDay[]> {
    return MilkDaySchema.find({
      year,
      farmer_code
    }).sort({ day: -1 })
  }

  async findByPublicCode (public_code: string): Promise<MilkDay> {
    return MilkDaySchema.findOne({ public_code })
  }

  async save (milkDay: MilkDay): Promise<void> {
    await MilkDaySchema.create(milkDay)
  }
}
