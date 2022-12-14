import { Farm } from '../../entities/Farm'
import { mongoose } from '../implementations/MongoProvider'

const schema = new mongoose.Schema<Farm>({
  name: { type: String, required: true },
  owner_id: { type: String, required: true },
  distance_factory: { type: Number, required: true }
})

schema.loadClass(Farm)

schema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const FarmSchema = mongoose.model('FarmSchema', schema)

export { FarmSchema }
