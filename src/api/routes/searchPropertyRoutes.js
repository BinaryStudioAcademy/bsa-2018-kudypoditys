const express = require("express");
const searchProperty = express.Router();
const propertyService = require("../services/property");
const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
    host: "localhost:9200",
    log: "trace"
});
searchProperty.route("/").get((req, res) => {
    const query = req.query.query;
    const rooms = req.query.rooms;
    const adults = req.query.adults;
    const children = req.query.children;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const sortBy = req.query.sortBy;
    const page = req.query.page;
    const _fields = ["city", "name"];
    elasticClient
        .search({
            index: "properties",
            type: "document",
            body: {
                size: 1000,
                query: {
                    multi_match: {
                        query: query,
                        fields: _fields
                    }
                }
            }
        })
        .then(
            resp => {
                let ids = [];
                let items = resp.hits.hits;
                let topPropId = [];
                items.forEach(p => {
                    if (p._source.name === query) {
                        topPropId.push(p._source.id);
                    }
                });
                ids = items.map(property => {
                    return property._source.id;
                });
                if (topPropId.length > 0) {
                    ids = ids.filter(id => id !== topPropId[0]);
                    ids.unshift(topPropId[0]);
                }
                let filter = {
                    propertiesIds: ids,
                    rooms: rooms ? rooms : 1,
                    bedsCount: parseInt(adults) + parseInt(children),
                    sortBy: sortBy,
                    page: Number(page),
                    dateIn: new Date(Number(startDate)),
                    dateOut: new Date(Number(endDate)),
                    fitness_spa_locker_rooms: req.query.Fitness_spa_locker_rooms
                        ? req.query.Fitness_spa_locker_rooms
                        : "",
                    queen_bed: req.query.Queen_bed ? req.query.Queen_bed : "",
                    dogs: req.query.Dogs ? req.query.Dogs : ""
                };
                propertyService
                    .getFilteredProperties(filter)
                    .then(propertiesData => {
                        return res.send({
                            properties: propertiesData.rows,
                            propertiesCount: propertiesData.count
                        });
                    })
                    .catch(err => {
                        return res.status(404).send(err);
                    });
            },
            err => {
                return res.json(err.message);
            }
        );
});

module.exports = searchProperty;
