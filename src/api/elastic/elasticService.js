const elasticRepository = require("./index");
const elasticsearch = require("elasticsearch");
const init = require("./init");
const PropertyService = require("./../services/property");
const CityService = require("./../services/city");
const elasticClient = new elasticsearch.Client({
    hosts: ["http://localhost:9200"]
});

module.exports = {
    restartIndexing(req, res) {
        this.initService(req, res);
        this.addService(req, res);
    },

    initService: async (req, res) => {
        var citiesInit = init.initIndex.body;
        citiesInit.mappings.document.properties = {
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            }
        };

        var propertiesInit = init.initIndex.body;
        propertiesInit.mappings.document.properties = {
            id: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            name: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            description: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            location: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            image: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            address: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            coordinates: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            roomPrice: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            roomType: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            roomsAmount: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            },
            rooms: {
                type: "nested"
            }
        };

        await elasticRepository.initIndex(req, res, "cities", citiesInit);
        await elasticRepository.initIndex(
            req,
            res,
            "properties",
            propertiesInit
        );

        return res.json({ message: "ELASTICSEARCH::INIT_SERVICE => SUCCESS" });
    },

    addService: (req, res) => {
        // ADD PROPERTIES INTO ELASTICSEARCH
        PropertyService.getAllProperties().then(properties => {
            console.log(`properties!!!!: ${JSON.stringify(properties)}`);
            let propertiesBulk = [];
            properties.forEach(property => {
                propertiesBulk.push({
                    index: {
                        _index: "properties",
                        _type: "document"
                    }
                });
                propertiesBulk.push({
                    id: property.id,
                    name: property.name,
                    // rating: property.rating,
                     image: property.images[0].url,
                    city: property.city.name,
                    // description: property.description,
                     address: property.address,
                    // coordinatesLat: property.coordinates.lat,
                    // coordinatesLng: property.coordinates.lng,
                    // rooms: property.rooms.map(room => {
                    //     return {
                    //         roomType: room.roomType.name,
                    //         roomPrice: room.price,
                    //         roomsAmount:room.amount
                    //     };
                    // })
                });
            });
            return elasticClient.bulk({ body: propertiesBulk }, function(
                err,
                resp
            ) {
                if (err) {
                    console.log("Failed Bulk operation", err);
                    return res.json(err);
                } else {
                    console.log(
                        "Successfully imported properties",
                        properties.length
                    );
                }
            });
        });

        // ADD CITIES FROM PROPERTIES TO ELASTICSEARCH
        CityService.getAllCities().then(cities => {
            let citiesBulk = [];
            cities.forEach(city => {
                citiesBulk.push({
                    index: {
                        _index: "cities",
                        _type: "document"
                    }
                });

                citiesBulk.push({
                    city: city.name
                });
            });
            return elasticClient.bulk({ body: citiesBulk }, function(
                err,
                resp
            ) {
                if (err) {
                    console.log("Failed Bulk operation", err);
                    return res.json(err);
                } else {
                    console.log("Successfully imported cities", cities.length);
                }
            });
        });

        return res.json({ message: "ELASTICSEARCH::ADD_SERVICE => SUCCESS" });
    },

    addOneProperty: (req, res, property) => {
        const index = "properties";
        const id = property.id;
        const type = "document";
        const body = {
            id: property.id,
            name: property.name,
            rating: property.rating,
            image: property.images[0].url,
            city: property.city.name,
            description: property.description,
            address: property.address,
            coordinatesLat: property.coordinates.lat,
            coordinatesLng: property.coordinates.lng
        };
        return elasticClient.index({ index, id, type, body });
    }
};
