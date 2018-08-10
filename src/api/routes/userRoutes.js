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

    })
    .get((req, res) => {

    })
    .delete((req, res) => {

    });

