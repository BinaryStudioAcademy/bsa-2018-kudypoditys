const Service = require('./generalService');
const mealInRoomRepository = require("../repositories/mealInRoomRepository");

class MealInRoomService extends Service {
    // todo add service logic
}

module.exports = new MealInRoomService(mealInRoomRepository);