const express = require('express');
const searchProperty = express.Router();
const propertyService = require('../services/property');

searchProperty.route('/')

    .get((req, res) => {
        let filter = {
            city :req.query.city,
            dateIn: req.query.dateIn,
            dateOut: req.query.dateOut,
            roomsAmount : req.query.roomsAmount ,
            bedsCount :req.query.adults// keep in maind we need bads for all children older 2 years
        }
        propertyService.getFilteredProperties(filter)
            .then(properties => {
                res.send(properties);
            })
            .catch((err) => {
                res.status(404).send(err);
            });

    })

    module.exports =searchProperty ;