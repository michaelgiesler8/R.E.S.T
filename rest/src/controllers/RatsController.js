import BaseController from "../utils/BaseController.js";




export class RatsController extends BaseController {

  constructor() {
    super('api/rats')
    this.router.get('', this.getRats)
    this.router.get('/test', this.test)
    this.router.get('', this.addRat)
    this.router.get('', this.getOneRat)
  }

  test(request, response, next) {
    console.log('Successful Test')
    response.send("Successful Test!")
  }

  async getRats(request, response, next) {
    try {
      const Rats = await ratsService.getRats()
      response.send('rats')
    } catch (error) {
      next(error)
    }
  }

  async getOneRat(request, reponse, next,)

  async addRat(request, response, next) {
    try {
      const ratData = request.body
      const rat = ratsService.addRat(ratData)
      response.send(rat)
    } catch (error) {
      next(error)
    }
  }
}