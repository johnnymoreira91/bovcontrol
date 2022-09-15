import { Farm } from "../entities/Farm"

export interface IFarmRepository {
    list(): Promise<Farm[]>;
    findById(id: string): Promise<Farm>;
    delete(id: string): Promise<void>;
    findByName(name: string): Promise<Farm>;
    save(farm: Farm): Promise<void>;
}