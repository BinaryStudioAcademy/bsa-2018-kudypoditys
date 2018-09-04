const Repository = require("./generalRepository");
const reviewModel = require("../models/Review");
const Property = require("../models/Property");
const Image = require("../models/Image");
class ReviewRepository extends Repository {
    findByOptions(options) {
        return this.model.findAll({
            where: options,
            include: [
                {
                    model: Property,
                    include: [Image]
                }
            ]
        });
    }
}

module.exports = new ReviewRepository(reviewModel);
