const Service = require("./generalService");
const userRepository = require("../repositories/userRepository");
const settings = require("../../../config/settings");
const {dateHelpers} = require("../helpers");
const bcrypt = require("bcrypt");
const userTokenService = require("./userToken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

require("dotenv").config();

class UserService extends Service {
    addUser(user) {
        const hash = bcrypt.hashSync(user.password.trim(), 10);
        const newUser = {
            fullName: user.fullName.trim(),
            password: hash,
            email: user.email.trim(),
            phoneNumber: user.phoneNumber.trim(),
        };
        return this.repository.getUserByEmail(newUser.email).then(data => {
            if (data)
                return Promise.reject(
                    new Error("user with this email already exists"),
                );
            else {
                return this.create(newUser).then(dbUser => {
                    if (dbUser) {
                        return this.getEmailVerifyLink(dbUser).then(
                            ({error, data}) => {
                                if (!error) {
                                    return data;
                                } else {
                                    return Promise.reject(new Error(data));
                                }
                            },
                        );
                    } else {
                        return Promise.reject(new Error("Couldn't add user."));
                    }
                });
            }
        });
    }

    getUserByEmail(email) {
        return this.repository.getUserByEmail(email);
    }
    getUserByResetPasswordLink(ResetPasswordLink) {
        return this.repository.getUserByResetPasswordLink(ResetPasswordLink);
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
                        refreshToken: refreshToken,
                    };
                });
        });
    }

    getEmailVerifyLink(user) {
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;
        const verifyString = this.generateRandomString();
        const currentDate = dateHelpers.toUnixTimeSeconds(new Date());

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: EMAIL_USER,
            to: user.email,
            subject: "Email Verification - Kudypoditys",
            html: `<a href="http://localhost:3000/verifyemail?email=${user.email}&token=${verifyString}">Verify your email for Kudypoditys</a>`,
        };

        return userRepository
            .updateById(user.id, {
                verifyEmailToken: verifyString,
                verifyEmailTokenTillDate:
                    currentDate + settings.verifyEmailTokenLife,
            })
            .then(data => {
                if (data) {
                    return userRepository.findById(user.id).then(user => {
                        transporter.sendMail(mailOptions).then(() => true);
                        return {error: false, data: user};
                    });
                } else {
                    return {
                        error: true,
                        data: "Couldn't update user by email.",
                    };
                }
            });
    }

    verifyEmail(email, token) {
        const currentDate = dateHelpers.toUnixTimeSeconds(new Date());
        return userRepository.getUserByEmail(email).then(user => {
            if (user) {
                if (
                    user.verifyEmailToken === token &&
                    user.verifyEmailTokenTillDate > currentDate
                ) {
                    userRepository.updateById(user.id, {
                        verifyEmailToken: "verified",
                    });

                    return {verified: true};
                } else {
                    return Promise.reject(
                        new Error("VerifyEmailToken is out of date."),
                    );
                }
            } else {
                return Promise.reject(
                    new Error("Couldn't find user by this email."),
                );
            }
        });
    }

    generateRandomString() {
        return crypto.randomBytes(64).toString("hex");
    }
}

module.exports = new UserService(userRepository);
