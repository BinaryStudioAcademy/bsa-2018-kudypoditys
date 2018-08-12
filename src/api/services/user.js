const Service = require('./generalService');
const userRepository = require("../repositories/userRepository");

class UserService extends Service {
    // todo add service logic
}

module.exports = new UserService(userRepository);