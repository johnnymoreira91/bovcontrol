import { MilkDay } from '../entities/MilkDay'

export interface IMilkDayRepository {
    list(): Promise<MilkDay[]>;
    listById(public_code: string): Promise<MilkDay[]>;
    findById(id: string): Promise<MilkDay>;
    filterByMonthAndFarmer(month: number, farmer_code: string): Promise<MilkDay[]>;
    delete(id: string): Promise<void>;
    save(milkDay: MilkDay): Promise<void>;
}
