const express = require("express");
const availability = express.Router();
const availabilityService = require("../services/availability");

availability
    .route("/")
    .get((req, res) => {
        availabilityService
            .getAllAvailabilities()
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        availabilityService
            .addAvailability(req.body)
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .put((req, res) => {
        res.send(req.body);
        availabilityService
            .updateAvailabilityArray(req.body)
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

availability
    .route("/:id")
    .put((req, res) => {
        availabilityService
            .updateAvailability(req.params.id, req.body)
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        availabilityService
            .getAvailabilityById(req.params.id)
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        availabilityService
            .deleteAvailability(req.params.id)
            .then(availability => {
                res.send(availability);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

// availability.route("/updateall").put((req, res) => {
//     console.log("/updateall");
//     res.send(req.body);
//     // availabilityService
//     //     .updateAvailability(req.params.id, req.body)
//     //     .then(availability => {
//     //         res.send(availability);
//     //     })
//     //     .catch(err => {
//     //         res.status(500).send(err);
//     //     });
// });

module.exports = availability;
