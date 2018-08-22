const express = require("express");
const reservation = express.Router();
const reservationService = require("../services/reservation");

reservation
    .route("/")
    .get((req, res) => {
        reservationService
            .getAllReservations()
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        const newReservation = {
            dateIn: new Date(Number(req.body.dateIn)),
            dateOut: new Date(Number(req.body.dateOut)),
            guestsCount: req.body.guestsCount,
            userId: req.user.id,
            roomId: Number(req.body.roomId),
            paymentTypeId: Number(req.body.paymentTypeId)
        };
        reservationService
            .addReservation(newReservation)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err.message);
            });
    });

reservation
    .route("/:id")
    .put((req, res) => {
        reservationService
            .updateReservation(req.params.id, req.body)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        reservationService
            .findById(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                console.log("error");
                res.status(404).send(err.message);
            });
    })
    .delete((req, res) => {
        reservationService
            .deleteReservation(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

module.exports = reservation;
