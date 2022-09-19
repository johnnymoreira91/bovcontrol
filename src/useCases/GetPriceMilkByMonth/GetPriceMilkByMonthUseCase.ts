import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'

class GetPriceMilkByMonthUseCase {
  constructor (
    private milkDayRepository: IMilkDayRepository
  ) {}

  async execute () {

  }
}

export { GetPriceMilkByMonthUseCase }
