const express = require('express');
const searchProperty = express.Router();
const propertyService = require('../services/property');

searchProperty.route('/')

    .get((req, res) => {
        let filter = {
            city :req.query.city,
            checkInDate: req.query.checkInDate,
            checkOutDate : req.query.checkOutDate,
            rooms : req.query.rooms,
            adults :req.query.adults,
            children: req.query.children

        }
        propertyService.getFilteredProperties(filter)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(404).send(err);
            });

    })

