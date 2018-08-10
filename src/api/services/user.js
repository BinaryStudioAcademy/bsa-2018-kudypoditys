const Service = require('./generalService');
const userRepository = require("../repositories/userRepository");

class UserService extends Service {
    getAllUsers() {
        return userRepository.findAll();
    }

    getUserById(id) {
        return userRepository.findById(id);
    }

    addUser(user) {
        return userRepository.create(user);
    }

    updateUser(id, user) {
        return userRepository.updateById({_id: id}, user);
    }

    deleteUser(id) {
        return userRepository.deleteById({_id: id});
    }
}

module.exports = new UserService(userRepository);