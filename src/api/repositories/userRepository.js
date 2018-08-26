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

    getUserByResetPasswordLink(token) {
        return this.model.findOne({
            where: {
                resetPasswordLink: token
            }
        });

    }

}

module.exports = new UserRepository(userModel);
