const express = require('express');
const mealInRoom = express.Router();
const mealInRoomService = require('../services/mealInRoomService');

mealInRoom.route('/')
.get((req, res) => {
    mealInRoomService.findAll()
    .then(meal => {
        res.send(meal);
    })
    .catch(err => {
        res.status(404).send(err);
    });
})
.post((req, res) => {
    mealInRoomService.update(req.body)
    .then(meal => {
        res.send(meal);
    })
    .catch(err => {
        res.status(404).send(err);
    })})
.put((req, res) => {
    mealInRoomService.updateMealsInRoom(req.body)
    .then(meals => {
        res.send(meals);
    })
    .catch(err => {
        res.status(404).send(err);
})});

module.exports = mealInRoom;
