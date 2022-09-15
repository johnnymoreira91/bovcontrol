import { Request, Response } from "express";
import { FindFarmerUseCase } from "./FindFarmerUseCase";

export class FindFarmerController {
  constructor(
    private findFarmerUseCase: FindFarmerUseCase
  ) {}

  async handle(req: Request<{id: string}, {}, {}>, res: Response) {
    const { id } = req.params
    try {
      const listFarmers = await this.findFarmerUseCase.execute({
        id: id
      })

      return res.status(200).json(listFarmers)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
}