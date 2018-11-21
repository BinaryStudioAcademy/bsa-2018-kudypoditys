const Service = require('./generalService');
const mealTypeRepository = require("../repositories/mealTypeRepository");

class MealTypeService extends Service {
    // todo add service logic
}

module.exports = new MealTypeService(mealTypeRepository);