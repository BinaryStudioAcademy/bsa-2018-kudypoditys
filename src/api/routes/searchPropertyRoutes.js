const express = require("express");
const searchProperty = express.Router();
const propertyService = require("../services/property");

searchProperty.route("/").get((req, res) => {
    console.log(req.query.city);
    let filter = {
        city: req.query.city
        // dateIn: req.query.dateIn,
        // dateOut: req.query.dateOut
        // roomsAmount: req.query.roomsAmount,
        // bedsCount: req.query.adults
    };
    propertyService
        .getFilteredProperties(filter)
        .then(properties => {
            res.send(properties);
        })
        .catch(err => {
            res.status(404).send(err);
        });
});

module.exports = searchProperty;
