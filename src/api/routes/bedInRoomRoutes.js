const express = require('express');
const bedInRoom = express.Router();
const bedInRoomService = require('../services/bedInRoom');

bedInRoom.route('/')
    .get((req, res) => {
        bedInRoomService.getAllBedInRooms()
            .then(bedInRoom => {
                res.send(bedInRoom);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        bedInRoomService.addBedInRoom(req.body)
            .then(bedInRoom => {
                res.send(bedInRoom);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


bedInRoom.route('/:id')
    .put((req, res) => {
        bedInRoomService.updateBedInRoom(req.params.id, req.body)
            .then(bedInRoom => {
                res.send(bedInRoom);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        bedInRoomService.getBedInRoomById(req.params.id)
            .then(bedInRoom => {
                res.send(bedInRoom);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        bedInRoomService.deleteBedInRoom(req.params.id)
            .then(bedInRoom => {
                res.send(bedInRoom);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = bedInRoom;