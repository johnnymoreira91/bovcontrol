import { MilkDay } from '../../entities/MilkDay'
import { mongoose } from '../implementations/MongoProvider'

const schema = new mongoose.Schema<MilkDay>({
  amount: { type: Number, required: true, default: 0 },
  date: { type: Date, default: new Date(), required: true },
  farmer_code: { type: String, required: true },
  public_code: { type: String }
})

schema.loadClass(MilkDay)

schema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const MilkDaySchema = mongoose.model('MilkDaySchema', schema)

export { MilkDaySchema }
