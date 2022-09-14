import express from "express";
import { createFarmerController } from "./useCases/CreateFarmer";

const router = express.Router()

router.post('/', (req, res) => {
    return createFarmerController.handle(req, res)
})

export default router