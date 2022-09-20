import { Request, Response } from 'express'
import { GetPriceMilkByYearUseCase } from './GetPriceMilkByYearUseCase'

class GetPriceMilkByYearController {
  constructor (
    private getPriceMilkByYearUseCase: GetPriceMilkByYearUseCase
  ) {}

  async handle (req: Request<{ farmer_code: string, year: string}, {}, {}>, res: Response): Promise<Response> {
    const { farmer_code, year } = req.params
    try {
      if (!farmer_code || !year) {
        return res.status(400).json({
          message: 'Params is missing'
        })
      }
      const data = await this.getPriceMilkByYearUseCase.execute({
        farmer_code,
        year: parseInt(year)
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

export { GetPriceMilkByYearController }
