import express from 'express'
import FarmerRoute from './routes/FarmerRoute'
import FarmRoute from './routes/FarmRoute'
import MilkDayRoute from './routes/MilkDayRoute'

const app = express()

app.use(express.json())
app.use('/farmer', FarmerRoute)
app.use('/farm', FarmRoute)
app.use('/milk', MilkDayRoute)

export { app }
