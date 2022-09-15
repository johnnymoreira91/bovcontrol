import { IMilkDayRepository } from '../../repositories/IMilkDayRepository'

export class ListMilkDayUseCase {
  constructor (
    private milkDayRepository: IMilkDayRepository
  ) {}

  async execute () {
    const milkDays = await this.milkDayRepository.list()

    if (!milkDays) {
      throw new Error('Any milk not found')
    }

    return milkDays
  }
}
