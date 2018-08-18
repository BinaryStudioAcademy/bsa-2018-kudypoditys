const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const userTokenService = require("../services/userToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const settings = require("../../../config/settings");
const passport = require("passport");

authRouter.route("/login").post((req, res) => {
    passport.authenticate("local", { session: false }, (err, user, message) => {
        if (err || !user) {
            res.status(400).send(message);
            return;
        }

        req.login(user, { session: false }, err => {
            if (err) res.status(400).send(err.message);
            return;
        });

        userTokenService
            .generateForUser(user.id)
            .then(refreshToken => {
                const token = {
                    accessToken: userTokenService.generateAccessToken(user.id),
                    refreshToken: refreshToken
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
                    refreshToken: refreshToken,
                    expiryDate: tokenObj.expiryDate
                };
                res.status(200).send(token);
            });
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

module.exports = authRouter;
