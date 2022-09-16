/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { MediaMonthMilkDayUseCase } from './MediaMonthMilkDayUseCase'

export class MediaMonthMilkDayController {
  constructor (
    private mediaMonthMilkDayUseCase: MediaMonthMilkDayUseCase
  ) {}

  async handle (req: Request<{}, {}, {
      farmer_code: string, start_date: Date, days: number
  }>, res: Response) {
    const { farmer_code, start_date, days } = req.body
    try {
      const listFarmers = await this.mediaMonthMilkDayUseCase.execute({
        farmer_code,
        start_date: start_date ?? new Date(),
        days: days ?? 30
      })

      return res.status(200).json(listFarmers)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
