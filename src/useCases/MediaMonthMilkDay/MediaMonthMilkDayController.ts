/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { MediaMonthMilkDayUseCase } from './MediaMonthMilkDayUseCase'

export class MediaMonthMilkDayController {
  constructor (
    private mediaMonthMilkDayUseCase: MediaMonthMilkDayUseCase
  ) {}

  async handle (req: Request<{farmer_code: string, month: string, year: string}, {}, {}>, res: Response) {
    const { farmer_code, month, year } = req.params
    try {
      const newDate = new Date().toISOString().split('T')[0]
      const actualMonth = new Date(newDate).getMonth() + 1
      const listFarmers = await this.mediaMonthMilkDayUseCase.execute({
        farmer_code,
        day: new Date().getDay(),
        month: parseInt(month) ?? actualMonth,
        year: parseInt(year) ?? new Date().getFullYear()
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
