const express = require('express');
const authRouter = express.Router();
const userService = require('../services/user');
const jwtMiddleware = require('../middleware/jwt.middleware');

authRouter.route('/login')
    .post((req, res) => {
        const data = req.body;
        userService.login(data.email, data.password)
            .then((token) => {
                res.cookie('jwtToken', token).status(200).send(true);
            })
            .catch(err => {
                res.status(400).send(err.message);
            });

    })
    .get(jwtMiddleware);

authRouter.route('/logout')
    .get((req, res) => {
        res.clearCookie('jwtToken').send(true);

    });

module.exports = authRouter;