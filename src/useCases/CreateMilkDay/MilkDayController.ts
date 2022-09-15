/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { CreateMilkDayUseCase } from './MilkDayUseCase'
import { v4 as uuidv4 } from 'uuid'

export class CreateMilkDayController {
  constructor (
    private milkDayUseCase: CreateMilkDayUseCase
  ) {}

  async handle (req: Request<{}, {}, {
    amount: number, date: Date, farmer_code: string
  }>, res: Response): Promise<Response> {
    const { amount, date, farmer_code } = req.body
    try {
      await this.milkDayUseCase.execute({
        amount,
        date: date || new Date(),
        farmer_code,
        public_code: uuidv4()
      })

      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
