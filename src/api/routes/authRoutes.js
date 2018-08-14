const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const userRefreshTokenService = require("../services/userRefreshToken");
const jwtMiddleware = require("../middleware/jwt.middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const settings = require('../../../config/settings');
const { dateHelpers } = require('../helpers');


authRouter.route("/login")
    .post((req, res) => {
        const data = req.body;
        userService
            .login(data.email, data.password)
            .then(obj => {
                res.cookie("jwtToken", obj.token)
                    .status(200)
                    .send(obj);
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    });

authRouter.route('/refreshtoken/:token').get((req, res) => {
    const token = req.params.token;
    let userId;
    try {
        userId = jwt.verify(token, settings.jwtRefreshTokenPrivateKey).userId;
    } catch (err) {
        res.status(401).send('invalid refresh token');
        return;
    }
    userRefreshTokenService.getByUserId(userId).then(model => {
        if (!model) {
            return Promise.reject(new Error('refresh token not found'));
        }
        const { refreshToken } = model.dataValues;
        const { tillDate } = model.dataValues;
        const currDate = dateHelpers.toUnixTimeSeconds(new Date());
        if (refreshToken !== token) {
            return Promise.reject(new Error('unknown refresh token for this user'));
        }
        if (tillDate < currDate) {
            return Promise.reject(new Error('refresh token is expired. Make login'));
        }
        return userRefreshTokenService.generateForUser(userId);
    }).then(newRefreshToken => {
        return {
            refreshToken: newRefreshToken,
            ...userService.generateAccessToken(userId)
        };
    }).then(data => {
        res.cookie('jwtToken', data.token).status(200).send(data);
    }).catch(err => {
        res.status(400).send(err.message);
    });
})

authRouter.route("/logout").get((req, res) => {
    res.clearCookie("jwtToken").send(true);
});

authRouter.route("/signup").post((req, res) => {
    const data = req.body;
    const hash = bcrypt.hashSync(data.password.trim(), 10);
    const user = {
        fullName: data.name.trim(),
        password: hash,
        email: data.email.trim(),
        phoneNumber: data.phoneNumber.trim(),
        avatar: data.avatar.trim()
    };
    userService
        .addUser(user)
        .then(() => {
            userService.getUserByEmail(user.email).then(user => {
                const token = jwt.sign(
                    {
                        id: user.id,
                        fullName: user.fullName
                    },
                    settings.jwtPrivateKey
                );
                res.cookie("jwtToken", token)
                    .status(200)
                    .send(true);
            });
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

module.exports = authRouter;
