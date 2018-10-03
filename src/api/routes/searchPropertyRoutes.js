const express = require("express");
const searchProperty = express.Router();
const propertyService = require("../services/property");
const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
    host:
        "http://search-elasticsearch-kudypoditys-rqseuwvm4kuun4rbrfbxqly7z4.eu-central-1.es.amazonaws.com",
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
                    fitness_spa_locker_rooms:
                        req.query.Fitness_spa_locker_rooms?req.query.Fitness_spa_locker_rooms:"",
                    queen_bed: req.query.Queen_bed ? req.query.Queen_bed : "",
                    Twin_bed: req.query.Twin_bed ? req.query.Twin_bed : "",
                    Full_bed: req.query.Full_bed ? req.query.Full_bed : "",
                    King_bed: req.query.King_bed?req.query.King_bed:"",
                    dogs: req.query.Dogs?req.query.Dogs:"",
                    full_body_massage: req.query.Full_body_massage?req.query.Full_body_massage:"",
                    daily_maid_service: req.query.Daily_maid_service?req.query.Daily_maid_service:"",
                    laundry: req.query.Laundry?req.query.Laundry:"",
                    walking_tours: req.query.Walking_tours?req.query.Walking_tours:"",
                    live_music_performance: req.query.Live_music_performance?req.query.Live_music_performance:"",
                    live_sport_events: req.query.Live_sport_events?req.query.Live_sport_events:"",
                    themed_dinner_nights: req.query.Themed_dinner_nights?req.query.Themed_dinner_nights:"",
                    movie_nights: req.query.Movie_nights ? req.query.Movie_nights : "",
                    Wonderful: req.query.Wonderful ? req.query.Wonderful: "",
                    Very_Good: req.query.Very_Good? req.query.Very_Good: "",
                    Good: req.query.Good ? req.query.Good : "",
                    Pleasant: req.query.Pleasant ? req.query.Pleasant : "",
                    Its_Ok: req.query.Its_Ok ? req.query.Its_Ok : "",
                    No_rating: req.query.No_rating ? req.query.No_rating : "",
                    US0_US30: req.query.US0_US30 ? req.query.US0_US30 : "",
                    US30_US60: req.query.US30_US60 ? req.query.US30_US60 : "",
                    US60_US90: req.query.US60_US90 ? req.query.US60_US90 : "",
                    US90: req.query.US90 ? req.query.US90 : "",

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
