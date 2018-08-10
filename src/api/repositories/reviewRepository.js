const Repository = require('./generalRepository');
const reviewModel = require('../models/Review');

class ReviewRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new ReviewRepository(reviewModel);