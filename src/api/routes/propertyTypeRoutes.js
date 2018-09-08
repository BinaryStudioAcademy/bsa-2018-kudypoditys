const express = require('express');
const propertyType = express.Router();
const propertyTypeService = require('../services/propertyType');

propertyType.route('/')
  .get((req, res) => {
    propertyTypeService.findAll()
      .then(propertyTypes => {
        res.send(propertyTypes);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

module.exports = propertyType;