const express = require("express");
const user = express.Router();
const userService = require("../services/user");

user.route("/getemailverified").get((req, res) => {
    userService
        .getEmailVerifyLink(req.user)
        .then(() => {
            res.send(true);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

user.route("/verifyemail").get((req, res) => {
    console.log(req.query.email, req.query.token);
    userService
        .verifyEmail(req.query.email, req.query.token)
        .then(data => {
            if (data) {
                res.send({ verified: true });
            } else {
                res.status(500).send("Error verifying email.");
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

user.route("/")
    .get((req, res) => {
        userService
            .getAllUsers()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        userService
            .addUser(req.body)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

user.route("/current").get((req, res) => {
    const user = req.user;
    userService
        .findById(user.id)
        .then(user => {
            delete user.password;

            res.status(200).send(user);
        })
        .catch(err => {
            console.log("get user err " + JSON.stringify(err));
            res.status(400).send(err.message);
        });
});

user.route("/:id")
    .put((req, res) => {
        userService
            .updateUser(req.params.id, req.body)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        userService
            .findById(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        userService
            .deleteUser(req.params.id)
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    });

module.exports = user;
