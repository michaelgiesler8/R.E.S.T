import { Schema } from "mongoose";

export const RatSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  callsign: { type: String, required: true },
  specialities: { type: [String], required: true },
});

module.exports = mongoose.model('Rat', RatSchema);
