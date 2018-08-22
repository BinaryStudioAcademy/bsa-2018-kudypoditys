const express = require('express');
const searchProperty = express.Router();
const propertyService = require('../services/property');

searchProperty.route('/')
    .get((req, res) => {
        const city = req.query.city
        const checkInDate = req.query.checkInDate
        const checkOutDate = req.query.checkOutDate
        const rooms = req.query.rooms
        const adults = req.query.adults
        const children = req.query.children

            propertyService.getFilteredProperties((city, checkInDate, checkOutDate, rooms, adults, children)
                .then(property => {
                    res.send(property);
                })
                .catch((err) => {
                    res.status(404).send(err);
                });

        })

