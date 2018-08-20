const Service = require("./generalService");
const userRepository = require("../repositories/userRepository");
const jwt = require('jsonwebtoken');
const settings = require('../../../config/settings');
const bcrypt = require('bcrypt');
const { dateHelpers } = require('../helpers');
const userTokenService = require('./userToken');

class UserService extends Service {
    getAllUsers() {
        return userRepository.findAll();
    }

    getUserById(id) {
        return userRepository.findById(id);
    }

    addUser(user) {
        return this.repository.getUserByEmail(user.email).then(data => {
            if (data)
                return Promise.reject(
                    new Error("user with this email already exists")
                );
            else {
                return this.create(user);
            }
        });
    }

    getUserByEmail(email) {
        return this.repository.getUserByEmail(email);
    }

    updateUser(id, user) {
        return userRepository.updateById({ _id: id }, user);
    }

    deleteUser(id) {
        return userRepository.deleteById({ _id: id });
    }

    login(email, password) {
        return userRepository.getUserByEmail(email).then((userFromDb) => {
            if (!userFromDb) {
                return Promise.reject(new Error('user was not found'));
            }
            const user = userFromDb.dataValues;

            if (!bcrypt.compareSync(password, user.password)) {
                return Promise.reject(new Error('password is invalid'));
            }
            return userTokenService.generateForUser(user.id).then((refreshToken) => {
                return {
                    ...userTokenService.generateAccessToken(user.id),
                    refreshToken: refreshToken
                };
            });

        });
    }

}

module.exports = new UserService(userRepository);
