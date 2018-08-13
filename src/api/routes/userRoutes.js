const express = require('express');
const user = express.Router();
const userService = require('../services/user');

user.route('/')
    .get((req, res) => {
        userService.getAllUsers()
            .then(users => {
                res.send(users);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        userService.addUser(req.body)
            .then(user => {
                res.send(user);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });



user.route('/:id')
    .put((req, res) => {
        userService.updateUser(req.params.id, req.body)
            .then(user => {
                res.send(user);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        userService.getUserById(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        userService.deleteUser(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch((err) => {
                res.status(500).send(err);
            });

    });

module.exports = user;