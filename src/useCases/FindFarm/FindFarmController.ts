import { Request, Response } from 'express'
import { FindFarmUseCase } from './FindFarUseCase'

export class FindFarmController {
  constructor (
    private findFarmUseCase: FindFarmUseCase
  ) {}

  async handle (req: Request<{id: string}, {}, {}>, res: Response) {
    const { id } = req.params
    try {
      const listFarm = await this.findFarmUseCase.execute({
        id
      })

      return res.status(200).json(listFarm)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
