const Service = require("./generalService");
const userRepository = require("../repositories/userRepository");
const settings = require("../../../config/settings");
const { dateHelpers } = require('../helpers');
const bcrypt = require("bcrypt");
const userTokenService = require("./userToken");
const nodemailer = require('nodemailer');
const crypto = require('crypto');

require("dotenv").config();

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
                return this.create(newUser).then(data => {
                    if(data) {
                        this.verifyEmailSend(data);
                        return data;
                    } else {
                        return Promise.reject(
                            new Error("Couldn't add user.")
                        );
                    }
                });
            }
        });
    }

    getUserByEmail(email) {
        return this.repository.getUserByEmail(email);
    }

    updateUser(id, user) {
        return userRepository.updateById(id, user);
    }

    deleteUser(id) {
        return userRepository.deleteById(id);
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

    verifyEmailSend(user) {


        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;
        const BASE_URL = process.env.BASE_URL;
        const verifyString = this.generateRundomString();

        const currentDate = dateHelpers.toUnixTimeSeconds(new Date());
        userRepository.updateById(user.id, {
            verifyEmailToken: verifyString,
            verifyEmailTokenTillDate: currentDate + settings.verifyEmailTokenLife
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        const mailOptions = {
            from: EMAIL_USER,
            to: user.email,
            subject: 'Email Verification - Kudypoditys',
            html: `<a href="http://localhost:3000/verifyemail?email=${user.email}&token=${verifyString}">Verify your email for Kudypoditys</a>`
        };

        return transporter.sendMail(mailOptions).then(() => true);
    }

    verifyEmailCheck(email, token) {
        const currentDate = dateHelpers.toUnixTimeSeconds(new Date());
        return userRepository.getUserByEmail(email).then((user) => {
           if(user) {
               if(user.verifyEmailToken === token && user.verifyEmailTokenTillDate > currentDate) {
                   userRepository.updateById(user.id, {
                       verifyEmailToken: "verified"
                   });

                   return Promise.resolve({ verified: true });
               } else {
                   return Promise.reject(new Error("VerifyEmailToken is out of date."));
               }
           }  else {
               return Promise.reject(new Error("Couldn't find user by this email."));
           }
        });
    }

    generateRundomString() {
        return crypto.randomBytes(64).toString('hex');
    }
}

module.exports = new UserService(userRepository);
