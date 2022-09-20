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
      console.log(milkByFarmer)

      if (!milkByFarmer) {
        throw new Error('Farmer not found')
      }

      const mediaXDays = milkByFarmer.map((item: MilkDay) => {
        return {
          amount: item.amount,
          day: `${item.year}-${item.month}-${item.day}`
        }
      })

      const media = mediaXDays.map(x => x.amount).reduce((pv, cr) => (pv + cr) / milkByFarmer.length, 0)

      return {
        month: data.month,
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
