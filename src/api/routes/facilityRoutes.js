const express = require('express');
const facility = express.Router();
const facilityService = require('../services/facility');

facility.route('/')
  .get((req, res) => {
    facilityService.findAll()
      .then(facilties => {
        res.send(facilties);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  })

module.exports = facility;