const Service = require('./generalService');
const reviewCategoryRepository = require("../repositories/reviewCategoryRepository");

class ReviewCategoryService extends Service {
    // todo add service logic
}

module.exports = new ReviewCategoryService(reviewCategoryRepository);