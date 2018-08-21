const express = require('express');
const property = express.Router();
const propertyService = require('../services/property');

property.route('/')
    .get((req, res) => {
        propertyService.getAllProperties()
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        propertyService.addProperty(req.body)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

property.route('/page')
    .get((req, res) => {
        const {page, recordsOnPage} = req.query;
        propertyService.findByPage({page, recordsOnPage})
            .then(list => {
                res.status(200).send(list);
            })
            .catch(err => {
                res.status(500).send(err);
            })
    });


property.route('/:id')
    .put((req, res) => {
        propertyService.updateProperty(req.params.id, req.body)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        propertyService.getPropertyById(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        propertyService.deleteProperty(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

property.route('/:id/details')
    .get((req, res) => {
        propertyService.getDetailsById(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    });

module.exports = property;