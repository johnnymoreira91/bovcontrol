import { Request, Response } from 'express'
import { ListFarmerUseCase } from './ListFarmerUseCase'

export class ListFarmerController {
  constructor (
    private listFarmerUseCase: ListFarmerUseCase
  ) {}

  async handle (_req: Request<{}, {}, {}>, res: Response) {
    try {
      const listFarmers = await this.listFarmerUseCase.execute()

      return res.status(200).json(listFarmers)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
