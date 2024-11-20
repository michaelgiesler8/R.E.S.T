import { Schema } from "mongoose";

export const RatSchema = new Schema({
  name: { type: String },
  picture: { type: String },
  age: { type: Number }
})