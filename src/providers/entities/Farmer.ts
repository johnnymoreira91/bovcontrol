import { Farmer } from "../../entities/Farmer";
import { mongoose } from "../implementations/MongoProvider";

const schema = new mongoose.Schema<Farmer>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
})

schema.loadClass(Farmer);

schema.set("toJSON", {
    transform: (_document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash;
    },
  });

const FarmerSchema = mongoose.model('FarmerSchema', schema)

export { FarmerSchema }
