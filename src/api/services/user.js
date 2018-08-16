const Service = require("./generalService");
const userRepository = require("../repositories/userRepository");
const jwt = require("jsonwebtoken");
const settings = require("../../../config/settings");
const bcrypt = require("bcrypt");
const { dateHelpers } = require("../helpers");
const userTokenService = require("./userToken");

class UserService extends Service {
    addUser(user) {
        const hash = bcrypt.hashSync(user.password.trim(), 10);
        const newUser = {
            fullName: user.fullName.trim(),
            password: hash,
            email: user.email.trim(),
            phoneNumber: user.phoneNumber.trim()
        };
        return this.repository.getUserByEmail(newUser.email).then(data => {
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
        return userRepository.getUserByEmail(email).then(user => {
            if (!user) {
                return Promise.reject(new Error("user was not found"));
            }

            if (!bcrypt.compareSync(password, user.password)) {
                return Promise.reject(new Error("password is invalid"));
            }
            return userTokenService
                .generateForUser(user.id)
                .then(refreshToken => {
                    return {
                        ...userTokenService.generateAccessToken(user.id),
                        refreshToken: refreshToken
                    };
                });
        });
    }
}

module.exports = new UserService(userRepository);
