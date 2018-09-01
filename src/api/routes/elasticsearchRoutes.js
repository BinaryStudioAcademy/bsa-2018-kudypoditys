const express = require("express");
const elastic = express.Router();
const ES_service = require("../elastic");

const elasticService = require("../elastic/elasticService");

elastic.route("/ping").get((req, res) => {
    ES_service.ping(req, res);
});

elastic.route("/index/init")
    .post((req, res) => {
        const { index } = req.body;
        console.log(index);
        ES_service.initIndex(req, res, index);
    });

elastic.route("/init").post((req, res) => {
    elasticService.restartIndexing(req, res);
});
// - - - - - - - - - - - - - - - - - - - - - -
// TEMPORARY ROUTES FOR TESTING:

// elastic.route("/index/init_test").post((req, res) => {
//     elasticService.initService(req, res);
// });

// elastic.route("/index/add_test").post((req, res) => {
//     elasticService.addService(req, res);
// });

//  THIS WILL BE REMOVED ^^
// - - - - - - - - - - - - - - - - - - - - - -

elastic.route("/index/check").post((req, res) => {
    const { index } = req.body;
    ES_service.indexExists(req, res, index);
});

elastic.route("/index/mapping").post((req, res) => {
    const { index, type } = req.body;
    ES_service.initMapping(req, res, index, type);
});

elastic.route("/add").post((req, res) => {
    const { index, id, type, body } = req.body;
    ES_service.addDocument(req, res, index, id, type, body);
});

elastic.route("/update").post((req, res) => {
    const { index, id, type, body } = req.body;
    ES_service.updateDocument(req, res, index, id, type, body);
});

elastic.route("/search").get((req, res) => {
    const { index, type, query } = req.query;
    const fields = ["name"];
    ES_service.autocompleteSearch(req, res, index, type, query, fields)
});

elastic.route("/autocomplete").get((req, res) => {
    const { index, type, query } = req.query;
    const fields = ["city", "name"];
    ES_service.autocompleteSearch(req, res, index, type, query, fields);
});

elastic.route("/delete_document").post((req, res) => {
    const { index, id, type } = req.body;
    ES_service.deleteDocument(req, res, index, id, type);
});

elastic.route("/delete_all").post((req, res) => {
    ES_service.deleteAll(req, res);
});

module.exports = elastic;
