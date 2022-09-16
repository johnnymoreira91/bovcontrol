import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'
import { IMediaMonthMilkDayRequestDTO } from './MediaMonthMilkDayDTO'
import { FilterByDate } from '../../shared/FilterByDate/FilterByDate'

export class MediaMonthMilkDayUseCase {
  constructor (
        private milkDayRespository: IMilkDayRepository
  ) { }

  async execute (data: IMediaMonthMilkDayRequestDTO) {
    const startsAt = new Date() || new Date(data.start_date)
    const lastXDays = new Date(new Date().setDate(startsAt.getDate() - data.days ?? 30))

    try {
      const milkByFarmer = await this.milkDayRespository.listById(data.farmer_code)

      if (!milkByFarmer) {
        throw new Error('Farmer not found')
      }

      const filterByDate = await FilterByDate(data, milkByFarmer)

      const mediaXDays = filterByDate.map((item: MilkDay) => {
        return {
          amount: item.amount,
          day: item.date.toISOString().split('T')[0]
        }
      })

      const media = mediaXDays.map(x => x.amount).reduce((pv, cr) => {
        return (pv + cr) / filterByDate.length
      })

      return {
        days: data.days,
        media,
        total: mediaXDays
      }
    } catch (error) {
      return {
        error: true,
        message: error.message || 'Unexpected error'
      }
    }
  }
}
