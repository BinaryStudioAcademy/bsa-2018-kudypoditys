const Repository = require('./generalRepository');
const mealInRoomModel = require('../models/MealInRoom');


class MealInRoomRepository extends Repository {

}

module.exports = new MealInRoomRepository(mealInRoomModel);