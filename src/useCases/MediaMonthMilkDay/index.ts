import { MongoMilkDayRepository } from '../../repositories/implementations/MongoMilkDayRepository'
import { MediaMonthMilkDayController } from './MediaMonthMilkDayController'
import { MediaMonthMilkDayUseCase } from './MediaMonthMilkDayUseCase'

const mongoMilkDayRepository = new MongoMilkDayRepository()

const mediaMonthMilkUseCase = new MediaMonthMilkDayUseCase(
  mongoMilkDayRepository
)

const mediaMonthMilkDayController = new MediaMonthMilkDayController(
  mediaMonthMilkUseCase
)

export {
  mediaMonthMilkDayController,
  mediaMonthMilkUseCase
}
