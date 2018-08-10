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
        return userRepository.add(user);
    }

    updateUser(id, user) {
        return userRepository.update({_id: id}, user);
    }

    deleteUser(id) {
        return userRepository.delete({_id: id});
    }
}

module.exports = new UserService(userRepository);