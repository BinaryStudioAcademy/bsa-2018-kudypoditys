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

authRouter.route('/refreshtoken/:token').get((req, res) => {
    const token = req.params.token;

    userTokenService.refreshToken(token).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(400).send(err.message);
    });
});

authRouter.route("/signup").post((req, res) => {
    const data = req.body;
    const hash = bcrypt.hashSync(data.password.trim(), 10);
    let avatar = data.avatar;
    if (avatar) avatar = avatar.trim();
    else avatar = "";
    const user = {
        fullName: data.fullName.trim(),
        password: hash,
        email: data.email.trim(),
        phoneNumber: data.phoneNumber.trim(),
        avatar: avatar
    };
    userService
        .addUser(user)
        .then(() => {
            userService.getUserByEmail(user.email).then(user => {
                let obj = {
                    expiresIn: userTokenService.getExpiresDate()
                };
                obj.token = jwt.sign(
                    {
                        id: user.id,
                        fullName: user.fullName
                    },
                    settings.jwtPrivateKey
                );
            });
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

module.exports = authRouter;
