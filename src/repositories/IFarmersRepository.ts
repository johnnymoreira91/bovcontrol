import { Farmer } from '../entities/Farmer'

export interface IFarmersRepository {
    list(): Promise<Farmer[]>;
    findById(id: string): Promise<Farmer>;
    findByPublicCode(code: string): Promise<Farmer>;
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<Farmer>;
    save(farmer: Farmer): Promise<void>;
}
