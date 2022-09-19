import { Request, Response } from 'express'
import { CreateFarmerUseCase } from './CreateFarmerUseCase'
import { v4 as uuidv4 } from 'uuid'

export class CreateFarmerController {
  constructor (
    private createFarmerUseCase: CreateFarmerUseCase
  ) { }

  async handle (req: Request<{}, {}, {
    name: string, email: string, password: string, distance_factory: number
  }>, res: Response): Promise<Response> {
    const { name, email, password, distance_factory } = req.body
    try {
      if (!name || !email || !password || !distance_factory) {
        return res.status(400).json({
          message: 'Params missing'
        })
      }
      await this.createFarmerUseCase.execute({
        name,
        email,
        password,
        public_code: uuidv4(),
        distance_factory
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
