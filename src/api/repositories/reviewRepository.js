const Repository = require("./generalRepository");
const reviewModel = require("../models/Review");

class ReviewRepository extends Repository {
    findByOptions(options) {
        return this.model.findAll({
            where: options
        });
    }
}

module.exports = new ReviewRepository(reviewModel);
