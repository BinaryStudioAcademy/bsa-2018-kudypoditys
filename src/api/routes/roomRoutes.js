const express = require("express");
const room = express.Router();
const roomService = require("../services/room");

room.route("/")
    .get((req, res) => {
        roomService
            .getAllRooms()
            .then(room => {
                res.send(room);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        roomService
            .addRoom(req.body)
            .then(room => {
                res.send(room);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

room.route("/:id")
    .put((req, res) => {
        roomService
            .updateRoom(req.params.id, req.body)
            .then(room => {
                res.send(room);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        roomService
            .getRoomById(req.params.id)
            .then(room => {
                res.send(room);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        roomService
            .deleteRoom(req.params.id)
            .then(room => {
                res.send(room);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

room.route("/:id/availability").get((req, res) => {
    roomService
        .getRoomAvailabilityInform(req.params.id)
        .then(room => {
            res.send(room);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = room;
