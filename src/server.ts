import express from 'express'
import FarmerRoute from './routes/FarmerRoute'

const app = express()

app.use(express.json())
app.use('/farmer', FarmerRoute)

export { app }