import express from 'express'
import { listMilkDayController } from '../useCases/ListMilkDay'
import { createMilkDayController } from '../useCases/CreateMilkDay'

const router = express.Router()

router.get('/', (req, res) => {
  return listMilkDayController.handle(req, res)
})

// router.get('/:id', (req, res) => {
//   return findFarmController.handle(req, res)
// })

router.post('/', (req, res) => {
  return createMilkDayController.handle(req, res)
})

// router.delete('/delete/:id', (req, res) => {
//   return deleteFarmController.handle(req, res)
// })

export default router
