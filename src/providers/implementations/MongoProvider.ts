import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@localhost:27017/${process.env.MONGO_DATABASE}-${process.env.NODE_ENV}?authSource=admin`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions).then((_res) => console.log('Mongo Connected')).catch(err => {
  console.log('Mongo Connection Error', err)
})

mongoose.Promise = global.Promise

export { mongoose }
