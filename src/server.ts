import express from 'express'
import defaultRoute from './routes'

const app = express()

app.use(express.json())
app.use('/', defaultRoute)

export { app }