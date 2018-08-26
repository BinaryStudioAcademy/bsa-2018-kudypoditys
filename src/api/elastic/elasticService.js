const elasticRepository = require("./index");
const init = require("./init");

module.exports = {
    initService: async (req, res) => {
        var citiesInit = init.initIndex.body;
        citiesInit.mappings.document.properties = {
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
        };

        var propertiesInit = init.initIndex.body;
        propertiesInit.mappings.document.properties = {
            city: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            country: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            name: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
            description: {
                type: "text",
                analyzer: "autocomplete",
                search_analyzer: "standard",
            },
        };

        await elasticRepository.initIndex(req, res, "cities", citiesInit);
        await elasticRepository.initIndex(
            req,
            res,
            "properties",
            propertiesInit,
        );
    },

    addService: (req, res) => {
        const properties = [
            {
                id: 1,
                body: {
                    city: "Lviv",
                    country: "Ukraine",
                    name: "Hotel Cisar",
                    description: "Beautiful hotel in Lviv"
                },
            },
            {
                id: 2,
                body: {
                    city: "Mogadishu",
                    country: "Somali",
                    name: "Palm Roof Hat",
                    description: "Not so beautiful hotel, but maybe the most dangerous."
                },
            },
            {
                id: 3,
                body: {
                    city: "New York",
                    country: "USA",
                    name: "Hotel Plaza",
                    description: "The most expensive hotel in New York"
                },
            },
        ];

        const cities = [
            {
                id: 1,
                body: {
                    city: "Lviv",
                    country: "Ukraine"
                }
            },
            {
                id: 2,
                body: {
                    city: "Mogadishu",
                    country: "Somali"
                }
            },
            {
                id: 3,
                body: {
                    city: "New York",
                    country: "USA"
                }
            },
        ];

        properties.map((prop, i) => {
            elasticRepository.addDocument(req, res, "properties", prop.id, "document", prop.body);
        });

        cities.map((city, i) => {
            elasticRepository.addDocument(req, res, "cities", city.id, "document", city.body);
        })
    },
};
