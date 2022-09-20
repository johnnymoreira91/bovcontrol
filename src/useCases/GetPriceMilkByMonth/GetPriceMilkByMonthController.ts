import { Request, Response } from 'express'
import { GetPriceMilkByMonthUseCase } from './GetPriceMilkByMonthUseCase'

class GetPriceMilkByMonthController {
  constructor (
    private getPriceMilkByMonthUseCase: GetPriceMilkByMonthUseCase
  ) {}

  async handle (req: Request<{}, {}, {
    farmer_code: string, month: number
  }>, res: Response): Promise<Response> {
    const { farmer_code, month } = req.body
    try {
      const data = await this.getPriceMilkByMonthUseCase.execute({
        farmer_code,
        month
      })

      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export { GetPriceMilkByMonthController }
