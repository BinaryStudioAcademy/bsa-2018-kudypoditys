const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const userTokenService = require("../services/userToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const settings = require("../../../config/settings");

authRouter.route("/login").post((req, res) => {
    const data = req.body;
    userService
        .login(data.email, data.password)
        .then(obj => {
            res.status(200).send(obj);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
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
                const token = {
                    accessToken: userTokenService.generateAccessToken(user),
                    refreshToken: refreshToken
                };
                res.status(200).send(token);
            });
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

module.exports = authRouter;
