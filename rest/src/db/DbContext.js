import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatSchema } from '../models/Rat';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Rats = mongoose.model('Rat', RatSchema)
}

export const dbContext = new DbContext()
