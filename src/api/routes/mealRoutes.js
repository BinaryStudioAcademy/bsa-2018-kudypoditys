const express = require('express');
const meal = express.Router();
const mealService = require('../services/meal');

meal.route('/').get((req, res) => {
  mealService.findAll().then(meal => {
    res.send(meal);
  }).catch(err => {
    res.status(404).send(err);
  });
});

module.exports = meal;
