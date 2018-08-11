const Repository = require('./generalRepository');
const userModel = require('.././models/User');

class UserRepository extends Repository  {

}

module.exports = new UserRepository(userModel);