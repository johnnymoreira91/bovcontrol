import { Request, Response } from 'express'
import { DeleteFarmUseCase } from './DeleteFarmUseCase'

export class DeleteFarmController {
  constructor (
    private deleteFarmUseCase: DeleteFarmUseCase
  ) {}

  async handle (req: Request<{id: string}, {}, {}>, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.deleteFarmUseCase.execute({
        id
      })

      return res.status(202).send()
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}
