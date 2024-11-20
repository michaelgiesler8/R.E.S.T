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

  getRats(request, response, next) {
    console.log('adding Rat, request.body');
    response.send('Error')
  }
}