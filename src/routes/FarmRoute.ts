import express from 'express'
import { listFarmController } from '../useCases/ListFarm'
import { createFarmController } from '../useCases/CreateFarm'
import { deleteFarmController } from '../useCases/DeleteFarm'
import { findFarmController } from '../useCases/FindFarm'

const router = express.Router()

router.get('/', (req, res) => {
  return listFarmController.handle(req, res)
})

router.get('/:id', (req, res) => {
  return findFarmController.handle(req, res)
})

router.post('/', (req, res) => {
  return createFarmController.handle(req, res)
})

router.delete('/delete/:id', (req, res) => {
  return deleteFarmController.handle(req, res)
})

export default router
