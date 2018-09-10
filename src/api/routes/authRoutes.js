const express = require("express");
const authRouter = express.Router();
const userService = require("../services/user");
const userTokenService = require("../services/userToken");
const passport = require("passport");

authRouter.route("/login").post((req, res) => {
    passport.authenticate("local", { session: false }, (err, user, message) => {
        if (err || !user) {
            res.status(400).send(message);
            return;
        }

        if (user.verifyEmailToken !== 'verified')
            return res.status(403).send('Verify your email please');

        req.login(user, { session: false }, err => {
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
        .then(_ => {
            res.status(200).send(true);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

authRouter.route("/forgot").get((req, res) => {
    const { email } = req.query;
    userService
        .getForgotPasswordLink(email)
        .then(_ => {
            res.send(true);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

authRouter.route("/resetpassword").post((req, res) => {
    const { token, email, newPassword } = req.body;
    userService
        .resetPassword(email, token, newPassword)
        .then(_ => {
            res.send(true);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

authRouter.route("/changepassword").post((req, res) => {
    const { id, oldPassword, newPassword } = req.body;
    userService
        .changePassword(id, oldPassword, newPassword)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

module.exports = authRouter;
