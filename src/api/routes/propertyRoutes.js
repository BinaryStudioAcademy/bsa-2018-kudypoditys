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
                console.log(property.name, property.id);
                res.send(property);
            })
            .catch((err) => {
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

property.route("/city/:id/:currency").get((req, res) => {
    propertyService
        .getPropertiesByCity(req.params.id)
        .then(properties => {

            var roomAmount = 0;
            var totalPrice = 0;
            var avgPrice = 0;
            propertyService
                .rate()
                .then(rates=>{
                    for (const property of properties) {
                        for (const room of property.rooms) {
                            //totalPrice += Number(room.price)*course[property.prefferCurrency+'_'+req.params.currency]
                            totalPrice += Number(room.price)*
                                          Number(rates['USD_'+req.params.currency]['USD_'+req.params.currency].val)

                        }
                        roomAmount++
                    }
                    avgPrice = (totalPrice / roomAmount).toFixed(0)
                    const data = {
                        properties: roomAmount,
                        avgPrice: avgPrice,
                        curr: rates
                    }

                    res.status(200).send(data);
            }).catch(err=>{
                return err
            });


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
