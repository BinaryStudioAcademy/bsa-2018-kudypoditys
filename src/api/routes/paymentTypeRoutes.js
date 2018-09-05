const express = require('express');
const paymentType = express.Router();
const paymentTypeService = require('../services/paymentType');

paymentType.route('/')
  .get((req, res) => {
    paymentTypeService.findAll()
      .then(paymentTypes => {
        res.send(paymentTypes);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  });

module.exports = paymentType;