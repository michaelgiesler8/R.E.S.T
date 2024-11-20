import BaseController from "../utils/BaseController.js";




export class RatsController extends BaseController {

  constructor() {
    super('api/rats')
    this.router.get('', this.test)
  }

  test(request, response, next) {
    console.log('Successful Test')
    response.send("Successful Test!")
  }

  async getRats(request, response, next) {
    const Rats = await ratsService.getRats()
    response.send('Error')
  }

  addRat(request, response, next) {
    const ratData = request.body
    const rat = ratsService.addRat(ratData)
    response.send(rat)
  }
}