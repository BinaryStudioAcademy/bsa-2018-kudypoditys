const express = require('express');
const user = express.Router();
const userService = require('../services/user');

user.route('/')
    .get((req, res) => {
        userService.getAllUsers()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .post((req, res) => {
        userService.addUser(req.body)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                console.log(err);
            });
    });



user.route('/:id')
    .put((req, res) => {
        userService.updateUser(req.params.id, req.body)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .get((req, res) => {
        userService.getUserById(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .delete((req, res) => {
        userService.deleteUser(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                console.log(err);
            });

    });