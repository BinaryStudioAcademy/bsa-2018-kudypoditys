const express = require('express');
const userSetting = express.Router();
const userSettingService = require('../services/userSetting');

userSetting.route('/')
    .get((req, res) => {
        userSettingService.getAllUserSettings()
            .then(userSetting => {
                res.send(userSetting);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .post((req, res) => {
        userSettingService.addUserSetting(req.body)
            .then(userSetting => {
                res.send(userSetting);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });


userSetting.route('/:id')
    .put((req, res) => {
        userSettingService.updateUserSetting(req.params.id, req.body)
            .then(userSetting => {
                res.send(userSetting);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    })
    .get((req, res) => {
        userSettingService.getUserSettingById(req.params.id)
            .then(userSetting => {
                res.send(userSetting);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    })
    .delete((req, res) => {
        userSettingService.deleteUserSetting(req.params.id)
            .then(userSetting => {
                res.send(userSetting);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

module.exports = userSetting;