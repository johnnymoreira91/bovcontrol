import { Farmer } from "../entities/Farmer"

export interface IFarmersRepository {
    findByEmail(email: string): Promise<Farmer>;
    save(farmer: Farmer): Promise<void>;
}