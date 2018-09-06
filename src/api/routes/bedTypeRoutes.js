const express = require('express');
const bedType = express.Router();
const bedTypeService = require('../services/bedType');

bedType.route('/').get((req, res) => {
  bedTypeService.findAll().then(bedTypes => {
    res.send(bedTypes);
  }).catch(err => {
    res.status(404).send(err);
  });
});

module.exports = bedType;
