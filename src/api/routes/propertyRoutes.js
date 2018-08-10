const express = require('express');
const properties = express.Router();
const propertyService = require('../services/property');

properties.route('/')
    .get((req, res) => {

    })
    .post((req, res) => {

    });


properties.route('/:id')
    .put((req, res) => {

    })
    .get((req, res) => {

    })
    .delete((req, res) => {

    });

