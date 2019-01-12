const Service = require('./generalService');
const mealInRoomRepository = require("../repositories/mealInRoomRepository");

class MealInRoomService extends Service {

    updateMealsInRoom(data){
        console.log(data);
    }
}

module.exports = new MealInRoomService(mealInRoomRepository);