const Repository = require('./generalRepository');
const mealModel = require('../models/Meal');

class MealRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new MealRepository(mealModel);