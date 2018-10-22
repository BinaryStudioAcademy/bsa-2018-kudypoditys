const Repository = require("./generalRepository");
const userModel = require(".././models/User");

class UserRepository extends Repository {
    getUserByEmail(email) {
        return this.model.findOne({
            where: {
                email: email
            }
        });
    }
    getUsersByEmail(email) {
        return this.findByOptions({
            email: email
        });
    }
}

module.exports = new UserRepository(userModel);