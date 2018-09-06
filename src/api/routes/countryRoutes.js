const express = require('express');
const country = express.Router();
const countryService = require('../services/country');

country.route('/details')
  .get((req, res) => {
    countryService.getAllDetails()
      .then(countries => {
        res.send(countries);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

module.exports = country;