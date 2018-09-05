const Repository = require("./generalRepository");
const userModel = require(".././models/User");
const Review = require("../models/Review");
const includeOptions = [
    {
        model: Review,
        attributes: ["id", "pros", "cons", "Cleanliness","Price","Comfort","Facilities","avgReview", "createdAt", "anon"],

    }
]
class UserRepository extends Repository {
    getUserByEmail(email) {
        return this.model.findOne({
            where: {
                email: email
            },include: [
                Review
            ]
        });
    }

}

module.exports = new UserRepository(userModel);
