const express = require('express');
const discount = express.Router();
const discountService = require('../services/discount');

discount.route('/')
    .get((req, res) => {
        discountService.getAllDiscounts()
            .then(discount => {
                res.send(discount);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        discountService.addDiscount(req.body)
            .then(discount => {
                res.send(discount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


discount.route('/:id')
    .put((req, res) => {
        discountService.updateDiscount(req.params.id, req.body)
            .then(discount => {
                res.send(discount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        discountService.getDiscountById(req.params.id)
            .then(discount => {
                res.send(discount);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        discountService.deleteDiscount(req.params.id)
            .then(discount => {
                res.send(discount);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = discount;