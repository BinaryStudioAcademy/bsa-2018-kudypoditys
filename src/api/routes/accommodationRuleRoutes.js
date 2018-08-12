const express = require('express');
const accommodationRule = express.Router();
const accommodationRuleService = require('../services/accommodationRule');

accommodationRule.route('/')
    .get((req, res) => {
        accommodationRuleService.getAllAccommodationRules()
            .then(accommodationRule => {
                res.send(accommodationRule);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        accommodationRuleService.addAccommodationRule(req.body)
            .then(accommodationRule => {
                res.send(accommodationRule);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


accommodationRule.route('/:id')
    .put((req, res) => {
        accommodationRuleService.updateAccommodationRule(req.params.id, req.body)
            .then(accommodationRule => {
                res.send(accommodationRule);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        accommodationRuleService.getAccommodationRuleById(req.params.id)
            .then(accommodationRule => {
                res.send(accommodationRule);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        accommodationRuleService.deleteAccommodationRule(req.params.id)
            .then(accommodationRule => {
                res.send(accommodationRule);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = accommodationRule;