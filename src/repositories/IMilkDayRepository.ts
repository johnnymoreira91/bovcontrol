import { MilkDay } from '../entities/MilkDay'

export interface IMilkDayRepository {
    list(): Promise<MilkDay[]>;
    listById(id: number): Promise<MilkDay[]>;
    findByPublicCode(public_code: string): Promise<MilkDay>;
    filterByMonthAndFarmer(month: number, farmer_code: string): Promise<MilkDay[]>;
    delete(id: string): Promise<void>;
    save(milkDay: MilkDay): Promise<void>;
}
