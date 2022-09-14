import { Farmer } from "../entities/Farmer"

export interface IFarmersRepository {
    list(): Promise<Farmer[]>;
    findByEmail(email: string): Promise<Farmer>;
    save(farmer: Farmer): Promise<void>;
}