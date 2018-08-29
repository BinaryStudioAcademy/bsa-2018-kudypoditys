const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const userTokenService = require("../services/userToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const settings = require("../../../config/settings");
const passport = require("passport");
const async = require("async");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

authRouter.route("/login").post((req, res) => {
    passport.authenticate("local", {session: false}, (err, user, message) => {
        if (err || !user) {
            res.status(400).send(message);
            return;
        }

        req.login(user, {session: false}, err => {
            if (err) res.status(400).send(err.message);
            return;
        });

        userTokenService
            .generateForUser(user.id)
            .then(refreshToken => {
                const tokenObj = userTokenService.generateAccessToken(user.id);
                const token = {
                    accessToken: tokenObj.token,
                    refreshToken: refreshToken.token,
                    accessExpiryDate: tokenObj.expiryDate,
                    refreshExpiryDate: refreshToken.expiryDate
                };
                res.status(200).send(token);
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    })(req, res);
});

authRouter.route("/refreshtoken/:token").get((req, res) => {
    const token = req.params.token;
    userTokenService
        .refreshToken(token)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

authRouter.route("/signup").post((req, res) => {
    userService
        .addUser(req.body)
        .then(user => {
            userTokenService.generateForUser(user.id).then(refreshToken => {
                const tokenObj = userTokenService.generateAccessToken(user.id);
                const token = {
                    accessToken: tokenObj.token,
                    refreshToken: refreshToken.token,
                    accessExpiryDate: tokenObj.expiryDate,
                    refreshExpiryDate: refreshToken.expiryDate
                };
                res.status(200).send(token);
            });
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});
authRouter.route("/forgot").post((req, res, next) => {

    async.waterfall([
        function (done) {
            crypto.randomBytes(20, function (err, buf) {
                const token = buf.toString('hex');
                console.log(token);
                done(err, token);

            });

        },
        function (token, done) {
            userService.getUserByEmail(req.body.email).then(user => {
                if (!user) {
                    console.log('error', 'No account with that email address exists.');

                }

                console.log(user + "GET EMAIL WORKS");

                user.resetPasswordLink = token;

                user.save().then(err => {

                    const smtpTransport = nodemailer.createTransport({

                        //TODO HIde pass in to .env
                        service: 'Gmail',
                        auth: {
                            user: 'kudypoditys@gmail.com',
                            pass: '-=kudypoditys=-'
                        }
                    });
                    const mailOptions = {
                        to: user.email,
                        from: 'kudypoditys@gmail.com',
                        subject: 'kudypoditys Password Reset',
                        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                            'http://' + req.headers.host + '/new-password/' + token + '\n\n' +
                            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                    };
                    smtpTransport.sendMail(mailOptions, function (err) {
                        console.log('mail sent first');

                        done(err, 'done');
                    });

                })
            });
        }

    ], function (err) {
        if (err) return next(err);
        res.status(200).send("OK");
    });

});
//TODO take out mailer to separate class/helper
authRouter.route("/reset/:token").post((req, res, next) => {
    async.waterfall([
        function (done) {
            userService.getUserByResetPasswordLink(req.params.token).then(function (user) {
                console.log(user);

                if (!user) {

                    return res.status(200).send('Password reset token is invalid or has expired.');
                }
                if (req.body.password === req.body.confirm) {
                    console.log(req.body.password);
                    const hash = bcrypt.hashSync(req.body.password.trim(), 10);

                    user.password = hash;
                    user.resetPasswordLink = null;
                    user.save().then(user => {

                        const smtpTransport = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: 'kudypoditys@gmail.com',
                                pass: "-=kudypoditys=-"
                            }
                        });
                        const mailOptions = {
                            to: user.email,
                            from: 'kudypoditys@gmail.com',
                            subject: 'Your password has been changed',
                            text: 'Hello,\n\n' +
                                'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
                        };
                        smtpTransport.sendMail(mailOptions, function (err) {
                            console.log('success', 'Success! Your password has been changed.');
                            done(err);
                        });

                    })

                } else {
                    return res.status(200).send("Passwords do not match.");

                }
            });
        },

    ], function (err) {
        res.status(200).send(err)
    });
});

module.exports = authRouter;
