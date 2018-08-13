const Service = require('./generalService');
const userRepository = require("../repositories/userRepository");
const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');

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
        return userRepository.updateById({ _id: id }, user);
    }

    deleteUser(id) {
        return userRepository.deleteById({ _id: id });
    }

    login(email, password) {
        return userRepository.getUser(email, password)
            .then((userFromDb) => {
                if (!userFromDb) {
                    return Promise.reject(new Error('user was not found'));
                }
                const user = userFromDb.dataValues;
                const toSign = {
                    id: user.id,
                    fullName: user.fullName
                };

                return jwt.sign(toSign, settings.jwtPrivateKey);
            });
    }
}

module.exports = new UserService(userRepository);