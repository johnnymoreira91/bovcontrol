import { Farmer } from "../../entities/Farmer";
import { IFarmersRepository } from "../IFarmersRepository";

export class MongoFarmersRepository implements IFarmersRepository {
  private Farmers: Farmer[] = []

  async list(): Promise<Farmer[]> {
    const farmers = this.Farmers
    return farmers
  }

  async findByEmail(email: string): Promise<Farmer> {
    const farmer = this.Farmers.find(farmer => farmer.email === email)

    return farmer
  }

  async save(farmer: Farmer): Promise<void> {
    this.Farmers.push(farmer)
  }
}