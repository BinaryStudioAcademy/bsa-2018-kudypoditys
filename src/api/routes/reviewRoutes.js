const express = require("express");
const review = express.Router();
const reviewService = require("../services/review");
const reservationService = require("../services/reservation");

review
    .route("/")
    .get((req, res) => {
        reviewService
            .getAllReviews()
            .then(review => {
                res.send(review);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        reviewService
            .findByOptions({userId: req.user.id, propertyId: req.body.propertyId})
            .then(reviews => {
                if (reviews && reviews.length > 0) {
                    res.status(400).send("You already left review for this property");
                }
                else {
                    reviewService.addReview(req.body)
                        .then(review => {
                            res.send(review);
                        })
                        .catch(err => {
                            res.status(500).send(err.message);
                        });
                }
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    });

review
    .route("/:id")
    .put((req, res) => {
        reviewService
            .updateReview(req.params.id, req.body)
            .then(review => {
                res.send(review);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        reviewService
            .getReviewById(req.params.id)
            .then(review => {
                res.send(review);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        reviewService
            .deleteReview(req.params.id)
            .then(review => {
                res.send(review);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

review.route("/:id/byuserid").get((req, res) => {
    reviewService
        .findByOptions({userId: req.params.id})
        .then(reservations => {
            res.send(reservations);
        })
        .catch(err => {
            res.status(404).send(err.message);
        });
});

review.route("/:id/byPropertyId").get((req, res) => {
    reviewService
        .findByOptions({propertyId: req.params.id})
        .then(reservations => {
            res.send(reservations);
        })
        .catch(err => {
            res.status(404).send(err.message);
        });
});

module.exports = review;
