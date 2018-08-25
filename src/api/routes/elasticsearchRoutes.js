const express = require('express');
const elastic = express.Router();
const ES_service = require("../elastic");

elastic.route("/ping")
    .get((req, res) => {
        ES_service.ping(req, res);
    });

elastic.route("/index/init")
    .post((req, res) => {
       const { index } =  req.body;
       console.log(index);
       ES_service.initIndex(req, res, index);
    });

elastic.route("/index/check")
    .post((req, res) => {
        const { index } =  req.body;
        ES_service.indexExists(req, res, index);
    });

elastic.route("/index/mapping")
    .post((req, res) => {
        const { index, type, body } = req.body;
        ES_service.initMapping(req, res, index, type, body);
    });

elastic.route("/add")
    .post((req, res) => {
        const { index, id, type, body } = req.body;
        ES_service.addDocument(req, res, index, id, type, body);
    });

elastic.route("/update")
    .post((req, res) => {
        const { index, id, type, body } = req.body;
        ES_service.updateDocument(req, res, index, id, type, body);
    });

elastic.route("/search")
    .post((req, res) => {
        const { index, type, body } = req.body;
        ES_service.search(req, res, index, type, body);
    });

elastic.route("/delete_document")
    .post((req, res) => {
        const { index, id, type } = req.body;
        ES_service.deleteDocument(req, res, index, id, type);
    });

elastic.route("/delete_all")
    .post((req, res) => {
        ES_service.deleteAll(req, res);
    });

module.exports = elastic;