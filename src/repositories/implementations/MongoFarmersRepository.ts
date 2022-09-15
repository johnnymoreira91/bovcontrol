import { FarmerSchema } from "../../providers/entities/Farmer";
import { Farmer } from "../../entities/Farmer";
import { IFarmersRepository } from "../IFarmersRepository";

export class MongoFarmersRepository implements IFarmersRepository {

  async list(): Promise<Farmer[]> {
    const farmers = await FarmerSchema.find({})
    return farmers
  }

  async findById(id: string): Promise<Farmer> {
    return FarmerSchema.findById(id)
  }

  async delete(id: string): Promise<void> {
    await FarmerSchema.deleteOne({ id })
  }

  async findByEmail(email: string): Promise<Farmer> {
    const farmer = await FarmerSchema.findOne({ email })

    return farmer
  }

  async save(farmer: Farmer): Promise<void> {
    await FarmerSchema.create(farmer)
  }
}