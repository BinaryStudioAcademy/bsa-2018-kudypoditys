const express = require('express');
const favorite = express.Router();
const favoriteService = require('../services/favorite');

favorite.route('/')
    .get((req, res) => {
        favoriteService.getAllFavorites()
            .then(favorite => {
                res.send(favorite);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        favoriteService.addFavorite(req.body)
            .then(favorite => {
                res.send(favorite);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


favorite.route('/:id')
    .put((req, res) => {
        favoriteService.updateFavorite(req.params.id, req.body)
            .then(favorite => {
                res.send(favorite);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        favoriteService.getFavoriteById(req.params.id)
            .then(favorite => {
                res.send(favorite);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        favoriteService.deleteFavorite(req.params.id)
            .then(favorite => {
                res.send(favorite);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = favorite;