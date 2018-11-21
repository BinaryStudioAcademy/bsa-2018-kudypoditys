const Service = require('./generalService');
const mealRepository = require("../repositories/mealRepository");

class MealService extends Service {
    // todo add service logic
}

module.exports = new MealService(mealRepository);