const express = require('express');
const property = express.Router;
const propertyService = require('../services/property');

property.route('/')
    .get((req, res) => {
        propertyService.getAllProperties()
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .post((req, res) => {
        propertyService.addProperty(req.body)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                console.log(err);
            });
    });


property.route('/:id')
    .put((req, res) => {
        propertyService.updateProperty(req.params.id, req.body)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .get((req, res) => {
        propertyService.getPropertyById(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .delete((req, res) => {
        propertyService.deleteProperty(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                console.log(err);
            });
    });

module.exports = property;