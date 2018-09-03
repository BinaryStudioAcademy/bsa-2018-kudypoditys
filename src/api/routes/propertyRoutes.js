const express = require("express");
const property = express.Router();
const propertyService = require("../services/property");
const elasticService = require("../elastic/elasticService");

property
    .route("/")
    .get((req, res) => {
        propertyService
            .getAllProperties()
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        propertyService
            .addProperty(req.body)
            .then(property => {
                elasticService.addOneProperty(req, res, property);
                console.log(property.name, property.id);
                res.send(property);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

property.route("/page").get((req, res) => {
    const { page, recordsOnPage } = req.query;
    propertyService
        .findByPage({ page, recordsOnPage })
        .then(list => {
            res.status(200).send(list);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

property.route("/availability").put((req, res) => {
    console.log("body: " + JSON.stringify(req.body));
    propertyService
        .checkAvailability(req.body)
        .then(rooms => {
            res.send(rooms);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

property
    .route("/:id")
    .put((req, res) => {
        propertyService
            .updateProperty(req.params.id, req.body)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        propertyService
            .findById(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    })
    .delete((req, res) => {
        propertyService
            .deleteProperty(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

property.route("/:id/details").get((req, res) => {
    propertyService
        .getDetailsById(req.params.id)
        .then(property => {
            res.send(property);
        })
        .catch(err => {
            res.status(404).send(err);
        });
});


property
    .route("/city-info/:city").get((req, res) => {
        // res.send(req.params.city)
        // const filter ={
        //     city: req.params.city
        // }
        const CITY = req.params.city
        console.log('CITY NAME:' + CITY)
        propertyService
            .getPropertiesByCity(CITY)
            .then(properties => {
                console.log('PROPERTY ROUTES HERE' + properties.data)
                res.send(properties);
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    })


module.exports = property;
