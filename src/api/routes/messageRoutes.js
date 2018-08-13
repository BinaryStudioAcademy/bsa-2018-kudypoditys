const express = require('express');
const message = express.Router();
const messageService = require('../services/message');

message.route('/')
    .get((req, res) => {
        messageService.getAllMessages()
            .then(message => {
                res.send(message);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        messageService.addMessage(req.body)
            .then(message => {
                res.send(message);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


message.route('/:id')
    .put((req, res) => {
        messageService.updateMessage(req.params.id, req.body)
            .then(message => {
                res.send(message);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        messageService.getMessageById(req.params.id)
            .then(message => {
                res.send(message);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        messageService.deleteMessage(req.params.id)
            .then(message => {
                res.send(message);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = message;