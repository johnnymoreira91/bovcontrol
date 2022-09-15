import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let uri = 'mongodb://root:123456@localhost:27017/teste?authSource=admin'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useCreateIndex: true
} as ConnectOptions).then((_res) => console.log('Mongo Connected')).catch(err => {
    console.log('Mongo Connection Error', err)
})

mongoose.Promise = global.Promise

export { mongoose }