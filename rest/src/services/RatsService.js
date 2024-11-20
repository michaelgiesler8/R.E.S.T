import { dbContext } from "../db/DbContext"

const RatsDB = {

}

class RatsService {
  addRat(ratData) {
    const rat = await dbContext.Rats.create(ratData)
    return rat
  }

  getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }
}

