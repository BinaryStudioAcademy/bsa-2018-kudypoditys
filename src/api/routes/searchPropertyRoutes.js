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
    // const autocomplitType = req.query.autocomplitType;
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
                // const topIndex = items.findIndex(
                //     property => property._source.name === query
                // );

                // items.push(...items.splice(0, topIndex));
                let topPropId = [];
                items.forEach(p => {
                    if (p._source.name === query) {
                        topPropId.push(p._source.id);
                    }
                });

                console.log("topPropId - " + topPropId);

                ids = items.map(property => {
                    return property._source.id;
                }).filter(id=>id!==topPropId[0]);
                console.log("ids - " + ids);
                let filter = {
                    propertiesIds: ids,
                    rooms: rooms ? rooms : 1,
                    bedsCount: parseInt(adults) + parseInt(children),
                    sortBy: sortBy,
                    page: Number(page),
                    dateIn: new Date(Number(startDate)),
                    dateOut: new Date(Number(endDate))
                };
                propertyService
                    .getFilteredProperties(filter)
                    .then(properties => {

                        // const topProertyIndex = properties.findIndex(
                        //     property => property.name === query
                        // );
                        // properties.push(
                        //     ...properties.splice(0, topProertyIndex)
                        // );
                        // return res.send({
                        //     properties: properties,
                        //     propertiesCount: ids.length
                        // });
                        //console.log('topPropId - properties -'+JSON.stringify(properties))

                        if (filter.page === 1 && topPropId.length > 0) {

                            let propertiesWithQueredFirst = properties//.filter(p=> (p.id!=topPropId[0]))
                            filter.propertiesIds = topPropId;
                            return propertyService
                                .getFilteredProperties(filter)
                                .then(propertiesWithOneOnItem => {
                                    propertiesWithQueredFirst.unshift(
                                        propertiesWithOneOnItem[0]
                                    );
                                    console.log(
                                        "propertiesWithQueredFirst - " +
                                            propertiesWithQueredFirst
                                    );

                                    return res.send({
                                        properties: propertiesWithQueredFirst,
                                        propertiesCount: ids.length
                                    });
                                })
                                .catch(err => {
                                    return res.status(404).send(err);
                                });
                        } else {
                            return res.send({
                                properties: properties,
                                propertiesCount: ids.length
                            });
                        }
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
