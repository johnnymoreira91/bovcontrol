import { Request, Response } from 'express'
import { ListMilkDayUseCase } from './ListMilkDayUseCase'

export class ListMilkDayController {
  constructor (
    private listMilkDayUseCase: ListMilkDayUseCase
  ) {}

  async handle (_req: Request<{}, {}, {}>, res: Response) {
    try {
      const listMilkDays = await this.listMilkDayUseCase.execute()

      return res.status(200).json(listMilkDays)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
