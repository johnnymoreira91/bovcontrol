import { Request, Response } from "express";
import { ListFarmUseCase } from "./ListFarmUseCase";

export class ListFarmController {
  constructor(
    private listFarmUseCase: ListFarmUseCase
  ) {}

  async handle(_req: Request<{}, {}, {}>, res: Response) {
    try {
      const listFarms = await this.listFarmUseCase.execute()

      return res.status(200).json(listFarms)
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message || 'Unexpected error'
      })
    }
  }
} 