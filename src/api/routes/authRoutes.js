const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const jwtMiddleware = require("../middleware/jwt.middleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authRouter
    .route("/login")
    .post((req, res) => {
        const data = req.body;
        userService
            .login(data.email, data.password)
            .then(token => {
                res.cookie("jwtToken", token)
                    .status(200)
                    .send(true);
            })
            .catch(err => {
                res.status(400).send(err.message);
            });
    })
    .get(jwtMiddleware);

authRouter.route("/logout").get((req, res) => {
    res.clearCookie("jwtToken").send(true);
});

authRouter.route("/signup").post((req, res) => {
    const data = req.body;
    const hash = bcrypt.hashSync(data.password.trim(), 10);
    const user = {
        fullName: data.fullName.trim(),
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
                    "My secret"
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
