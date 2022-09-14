import express from "express";
import { listFarmerController } from "../useCases/ListFarmer";
import { createFarmerController } from "../useCases/CreateFarmer";

const router = express.Router()

router.get('/', (req, res) => {
    return listFarmerController.handle(req, res)
})

router.post('/', (req, res) => {
    return createFarmerController.handle(req, res)
})

export default router