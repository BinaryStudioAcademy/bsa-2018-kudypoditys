const Repository = require('./generalRepository');
const userModel = require('.././models/User');

class UserRepository extends Repository {
    getUser(email, password) {
        return this.model.findOne({
            where: {
                email: email,
                password: password
            }
        });
    }
}

module.exports = new UserRepository(userModel);