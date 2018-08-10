const express = require('express');
const users = express.Router();
const userService = require('../services/user');

users.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    });


users.route('/:id')
    .put((req, res) => {

    })
    .get((req, res) => {

    })
    .delete((req, res) => {

    });

module.exports = users;