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

  async findById (id: string): Promise<MilkDay> {
    return MilkDaySchema.findOne({ public_code: id })
  }

  async save (milkDay: MilkDay): Promise<void> {
    await MilkDaySchema.create(milkDay)
  }
}
