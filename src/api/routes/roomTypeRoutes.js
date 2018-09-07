const express = require('express');
const roomType = express.Router();
const roomTypeService = require('../services/roomType');

roomType.route('/').get((req, res) => {
  roomTypeService.findAll().then(roomTypes => {
    res.send(roomTypes);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

module.exports = roomType;