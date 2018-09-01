const express = require("express");
const searchProperty = express.Router();
const propertyService = require("../services/property");
const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
    host: "localhost:9200",
    log: "trace",
});
searchProperty.route("/").get((req, res) => {
    const query = req.query.query
    const _fields = ["city", "name"];
    elasticClient
    .search({
        index: "properties",
        type: "document",
        body: {

            query: {
                multi_match: {
                    query: query,
                    fields: _fields,
                },
            },
        },
    })
    .then(
        resp => {
            let ids = []
            ids = resp.hits.hits.map(property => { return property._source.id })
            let filter = {propertiesIds:ids}
            propertyService
                    .getFilteredProperties(filter)
                    .then(properties => {
                      return  res.send(properties);
                    })
                    .catch(err => {
                    return    res.status(404).send(err);
                    });

        },
        err => {
            return res.json(err.message);
        },
    );
});


    // .post((req, res) => {
    //     let filter = {
    //         city: req.query.city,
    //         dateIn: req.query.dateIn,
    //         dateOut: req.query.dateOut,
    //         roomsAmount: req.query.roomsAmount,
    //         bedsCount: req.query.adults
    //     };
    //     propertyService
    //         .getFilteredProperties(filter)
    //         .then(properties => {
    //             res.send(properties);
    //         })
    //         .catch(err => {
    //             res.status(404).send(err);
    //         });
    // })

module.exports = searchProperty;
