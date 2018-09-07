const express = require("express");
const reservation = express.Router();
const reservationService = require("../services/reservation");

reservation
    .route("/")
    .get((req, res) => {
        reservationService
            .findAll()
            .then(reservations => {
                res.send(reservations);
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    })
    .post((req, res) => {
        console.log("body", req.body);
        const newReservation = {
            dateIn: new Date(Number(req.body.dateIn)),
            dateOut: new Date(Number(req.body.dateOut)),
            guestsCount: req.body.guestsCount,
            userId: req.user.id,
            roomId: Number(req.body.roomId),
            paymentTypeId: Number(req.body.paymentTypeId)
        };
        reservationService
            .create(newReservation)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err.message);
            });
    });

reservation.route("/byuser").get((req, res) => {
    reservationService
        .findByOptions({ userId: req.user.id })
        .then(reservations => {
            res.send(reservations);
        })
        .catch(err => {
            res.status(404).send(err.message);
        });
});

reservation
    .route("/:id")
    .put((req, res) => {
        let updateValues = req.body;
        if (updateValues.dateIn)
            updateValues.dateIn = new Date(Number(updateValues.dateIn));
        if (updateValues.dateOut)
            updateValues.dateOut = new Date(Number(updateValues.dateOut));
        reservationService
            .updateById(req.params.id, updateValues)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err.message);
            });
    })
    .get((req, res) => {
        reservationService
            .findById(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    })
    .delete((req, res) => {
        reservationService
            .deleteById(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err.message);
            });
    });

module.exports = reservation;
