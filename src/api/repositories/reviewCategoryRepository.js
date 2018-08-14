const Repository = require('./generalRepository');
const reviewCategoryModel = require('../models/ReviewCategory');

class ReviewCategoryRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new ReviewCategoryRepository(reviewCategoryModel);