const Repository = require('./generalRepository');
const userModel = require('.././models/User');

class UserRepository extends Repository  {
    //todo additional methods for user repository
}

module.exports = new UserRepository(userModel);