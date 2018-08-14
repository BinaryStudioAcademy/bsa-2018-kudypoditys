const express = require('express');
const image = express.Router();
const imageService = require('../services/image');

image.route('/')
    .get((req, res) => {
        imageService.getAllImages()
            .then(image => {
                res.send(image);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        imageService.addImage(req.body)
            .then(image => {
                res.send(image);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


image.route('/:id')
    .put((req, res) => {
        imageService.updateImage(req.params.id, req.body)
            .then(image => {
                res.send(image);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        imageService.getImageById(req.params.id)
            .then(image => {
                res.send(image);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        imageService.deleteImage(req.params.id)
            .then(image => {
                res.send(image);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = image;