const elasticsearch = require("elasticsearch");
const init = require("./init");
const PropertyService = require("./../services/property");
const CityService = require("./../services/city");
const elasticClient = new elasticsearch.Client({
    hosts: ["http://localhost:9200"]
});

module.exports = {
    indexData() {
        elasticClient.indices.delete(
            {
                index: "_all"
            },
            (err, resp) => {
                if (err) {
                    console.log("Error deleting -" + err);
                } else {
                    console.log("Indexes have been deleted!");

                    let citiesInitBody = this.prepareCities();
                    let propertiesInit = this.prepareProperties();
                    this.createIndexedData("cities", citiesInitBody)
                        .then(() => {
                            return this.indexCities();
                        })
                        .catch(e => {
                            console.log("Error - " + e);
                        });
                    this.createIndexedData("properties", propertiesInit)
                        .then(() => {
                            return this.indexProperties();
                        })
                        .catch(e => {
                            console.log("Error - " + e);
                        });
                }
            }
        );
    },
    prepareCities: () => {
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
        return citiesInit;
    },
    prepareProperties: () => {
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
            roomPrice: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard"
            }
        };
        return propertiesInit;
    },
    createIndexedData: (_index, _body) => {
        console.log("createIndexedData  -" + _index + "  " + _body);

        return elasticClient.indices.create({
            index: _index,
            body: _body
        });
    },
    indexProperties: () => {
        // ADD PROPERTIES INTO ELASTICSEARCH
        PropertyService.getAllProperties().then(properties => {
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
                    image: property.images[0].url,
                    city: property.city.name,
                    address: property.address
                });
            });
            return elasticClient.bulk({ body: propertiesBulk }, function(
                err,
                resp
            ) {
                if (err) {
                    console.log("Failed Bulk operation", err);
                } else {
                    console.log(
                        "Successfully imported properties " + properties.length
                    );
                }
            });
        });
    },
    indexCities: () => {
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
                } else {
                    console.log("Successfully imported cities", cities.length);
                }
            });
        });
    },

    indexNewAddedProperty(property) {
        const index = "properties";
        const id = property.id;
        const type = "document";
        const body = {
            id: property.id,
            name: property.name,
            city: property.city.name,
            address: property.address,
            image: property.images[0].url
        };
        return elasticClient.index({index, id, type, body}).then(responce => {
            console.log("Elastic added new property : " + responce);
        });
    }
};
