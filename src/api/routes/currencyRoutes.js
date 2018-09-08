const express = require('express');
const currency = express.Router();
const currencyService = require('../services/currency');

currency.route('/')
  .get((req, res) => {
    currencyService.findAll()
      .then(currencies => {
        res.send(currencies);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

module.exports = currency;