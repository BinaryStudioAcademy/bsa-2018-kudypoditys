const express = require('express');
const mealType = express.Router();
const mealTypeService = require('../services/mealType');

mealType.route('/').get((req, res) => {
    mealTypeService.findAll().then(mealType => {
    res.send(mealType);
  }).catch(err => {
    res.status(404).send(err);
  });
});

module.exports = mealType;
