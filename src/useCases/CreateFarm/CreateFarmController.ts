import { Request, Response } from "express";
import { CreateFarmUseCase } from "./CreateFarmUseCase";

export class CreateFarmController {
  constructor(
    private createFarmUseCase: CreateFarmUseCase
  ) {}

  async handle(req: Request<{}, {}, {
    name: string, owner_id: string
  }>, res: Response): Promise<Response> {
    const { name, owner_id } = req.body
    try {
      await this.createFarmUseCase.execute({
        name: name,
        owner_id: owner_id
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