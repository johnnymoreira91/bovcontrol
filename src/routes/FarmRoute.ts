import express from "express";
import { listFarmController } from "../useCases/ListFarm";
import { createFarmController } from "../useCases/CreateFarm";

const router = express.Router()

router.get('/', (req, res) => {
    return listFarmController.handle(req, res)
})

// router.get('/:id', (req, res) => {
//     return findFarmerController.handle(req, res)
// })

router.post('/', (req, res) => {
    return createFarmController.handle(req, res)
})

// router.delete('/delete/:id', (req, res) => {
//     return deleteFarmerController.handle(req, res)
// })

export default router