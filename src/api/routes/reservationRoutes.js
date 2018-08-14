const express = require('express');
const reservation = express.Router();
const reservationService = require('../services/reservation');

reservation.route('/')
    .get((req, res) => {
        reservationService.getAllReservations()
            .then(reservation => {
                res.send(reservation);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        reservationService.addReservation(req.body)
            .then(reservation => {
                res.send(reservation);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


reservation.route('/:id')
    .put((req, res) => {
        reservationService.updateReservation(req.params.id, req.body)
            .then(reservation => {
                res.send(reservation);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        reservationService.getReservationById(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        reservationService.deleteReservation(req.params.id)
            .then(reservation => {
                res.send(reservation);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = reservation;