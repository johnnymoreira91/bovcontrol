import { MilkDay } from '../../entities/MilkDay'
import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'
import { IMediaMonthMilkDayRequestDTO } from './MediaMonthMilkDayDTO'

export class MediaMonthMilkDayUseCase {
  constructor (
        private milkDayRepository: IMilkDayRepository
  ) { }

  async execute (data: IMediaMonthMilkDayRequestDTO) {
    try {
      const milkByFarmer = await this.milkDayRepository.filterByMonthAndFarmer(data.month, data.farmer_code)

      if (!milkByFarmer) {
        throw new Error('Farmer not found')
      }

      const mediaXDays = milkByFarmer.map((item: MilkDay) => {
        return {
          amount: item.amount,
          day: `${item.year}-${item.month}-${item.day}`
        }
      })

      const media = mediaXDays.map(x => x.amount)
      if (media.length === 0) {
        throw new Error('Month not found')
      }

      const reduceMilkLiters = media.reduce((pv, cr) => (pv + cr) / milkByFarmer.length)

      return {
        month: data.month,
        media: reduceMilkLiters,
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
