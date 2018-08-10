const express = require('express');
const user = express.Router();
const userService = require('../services/property');

user.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    });


user.route('/:id')
    .put((req, res) => {

    })
    .get((req, res) => {

    })
    .delete((req, res) => {

    });

