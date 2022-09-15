import { MilkDay } from '../entities/MilkDay'

export interface IMilkDayRepository {
    list(): Promise<MilkDay[]>;
    findById(id: string): Promise<MilkDay>;
    delete(id: string): Promise<void>;
    save(milkDay: MilkDay): Promise<void>;
}