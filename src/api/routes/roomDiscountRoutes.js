const express = require('express');
const roomDiscount = express.Router();
const roomDiscountService = require('../services/roomDiscount');

roomDiscount.route('/')
    .get((req, res) => {
        roomDiscountService.getAllRoomDiscounts()
            .then(roomDiscount => {
                res.send(roomDiscount);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        roomDiscountService.addRoomDiscount(req.body)
            .then(roomDiscount => {
                res.send(roomDiscount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


roomDiscount.route('/:id')
    .put((req, res) => {
        roomDiscountService.updateRoomDiscount(req.params.id, req.body)
            .then(roomDiscount => {
                res.send(roomDiscount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        roomDiscountService.getRoomDiscountById(req.params.id)
            .then(roomDiscount => {
                res.send(roomDiscount);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        roomDiscountService.deleteRoomDiscount(req.params.id)
            .then(roomDiscount => {
                res.send(roomDiscount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = roomDiscount;