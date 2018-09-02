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
            .getPropertyById(req.params.id)
            .then(property => {
                res.send(property);
            })
            .catch(err => {
                res.status(404).send(err);
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

property.route("/:id/info").get((req, res) => {
    propertyService
        .getUserPropertiesInfo(req.params.id)
        .then(user => {
            res.status(200).send(user);
        })
        .catch(err => {
            console.log("getuserpropertiesinfo err " + JSON.stringify(err));
            res.status(400).send(err.message);
        });
});

module.exports = property;
