import mongoose from "mongoose"

const participantSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ["participant"] },
  age: { type: Number, required: true },
  occupation: { type: String, required: true },
})

const creatorSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ["creator"] },
  creatorType: { type: String, required: true },
})

export const Participant = mongoose.models.Participant || mongoose.model("Participant", participantSchema)
export const Creator = mongoose.models.Creator || mongoose.model("Creator", creatorSchema)

