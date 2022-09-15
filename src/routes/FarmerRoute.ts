import express from "express";
import { listFarmerController } from "../useCases/ListFarmer";
import { createFarmerController } from "../useCases/CreateFarmer";
import { deleteFarmerController } from "../useCases/DeleteFarmer";

const router = express.Router()

router.get('/', (req, res) => {
    return listFarmerController.handle(req, res)
})

router.post('/', (req, res) => {
    return createFarmerController.handle(req, res)
})

router.delete('/delete/:id', (req, res) => {
    return deleteFarmerController.handle(req, res)
})

export default router