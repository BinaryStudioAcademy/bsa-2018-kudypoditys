const Service = require('./generalService');
const reviewRepository = require("../repositories/reviewRepository");

class ReviewService extends Service {
    // todo add service logic
}

module.exports = new ReviewService(reviewRepository);