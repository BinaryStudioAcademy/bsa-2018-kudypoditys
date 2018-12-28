const Repository = require('./generalRepository');
const mealTypeModel = require('../models/MealType');

class MealTypeRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new MealTypeRepository(mealTypeModel);