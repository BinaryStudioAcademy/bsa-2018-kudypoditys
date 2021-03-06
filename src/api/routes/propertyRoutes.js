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
        const { id } = req.user;
        req.body.userId = id;
        propertyService
            .addProperty(req.body)
            .then(property => {
                elasticService.indexNewAddedProperty(property);
                // console.log(property.name, property.id);
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
    let value = req.body;
    value.checkIn = new Date(value.checkIn);
    value.checkOut = new Date(value.checkOut);
    propertyService
        .checkAvailability(value)
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
        req.body.userId = req.user.id;
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
            .then(response => {
                res.send(response);
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

property.route("/city/:id").get((req, res) => {
    propertyService
        .getPropertiesByCity(req.params.id)
        .then(properties => {

            let roomAmount = 0;
            let totalPrice = 0;
            let avgPrice = 0,
                name = '',
                imageUrl= '',
                id;
            for (const property of properties) {
                // console.log(property.city.dataValues)
                for (const room of property.rooms) {
                    totalPrice += Number(room.price);
                }
                roomAmount++;
                name = property.city.dataValues.name;
                imageUrl = property.city.dataValues.imageUrl
                id = property.city.dataValues.id
            }
            // console.log(roomAmount, totalPrice);
            avgPrice = (totalPrice / roomAmount).toFixed(0);
            const data = {
                properties: roomAmount,
                avgPrice: avgPrice,
                name: name,
                imageUrl: imageUrl,
                id: id
            };

            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err.message);
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
