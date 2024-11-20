import { dbContext } from "../db/DbContext"

class RatsService {
  addRat(ratData) {
    const rat = await dbContext.Rats.create(ratData)
    return rat
  }

  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }
}

export const ratsService = new RatsService()