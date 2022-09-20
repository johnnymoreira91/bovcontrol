import { Request, Response } from 'express'
import { DeleteFarmerUseCase } from './DeleteFarmerUseCase'

export class DeleteFarmerController {
  constructor (
    private deleteFarmerUseCase: DeleteFarmerUseCase
  ) {}

  async handle (req: Request<{public_code: string}, {}, {}>, res: Response): Promise<Response> {
    const { public_code } = req.params
    try {
      await this.deleteFarmerUseCase.execute({
        public_code
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
