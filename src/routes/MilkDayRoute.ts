import express from 'express'
import { listMilkDayController } from '../useCases/ListMilkDay'
import { createMilkDayController } from '../useCases/CreateMilkDay'
import { mediaMonthMilkDayController } from '../useCases/MediaMonthMilkDay'
import { getPriceMilkMonthController } from '../useCases/GetPriceMilkByMonth'
import { getPriceMilkByYearController } from '../useCases/GetPriceMilkByYear'

const router = express.Router()

router.get('/', (req, res) => {
  return listMilkDayController.handle(req, res)
})

router.get('/media/:farmer_code/:month/:year', (req, res) => {
  return mediaMonthMilkDayController.handle(req, res)
})

router.get('/price/month/:farmer_code/:month/:year', (req, res) => {
  return getPriceMilkMonthController.handle(req, res)
})

router.get('/price/year/:farmer_code/:year', (req, res) => {
  return getPriceMilkByYearController.handle(req, res)
})

router.post('/', (req, res) => {
  return createMilkDayController.handle(req, res)
})

export default router
