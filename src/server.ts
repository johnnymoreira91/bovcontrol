import express from 'express'
import FarmerRoute from './routes/FarmerRoute'
import FarmRoute from './routes/FarmRoute'

const app = express()

app.use(express.json())
app.use('/farmer', FarmerRoute)
app.use('/farm', FarmRoute)

export { app }