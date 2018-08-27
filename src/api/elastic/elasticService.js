const elasticRepository = require("./index");
const elasticsearch = require("elasticsearch");
const init = require("./init");
const indexData = require("./data");
const PropertyService = require("./../services/property");
const CityService = require("./../services/city");
const elasticClient = new elasticsearch.Client({
    hosts: ["http://localhost:9200"]
});

module.exports = {
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
            }
        };

        await elasticRepository.initIndex(req, res, "cities", citiesInit);
        await elasticRepository.initIndex(
            req,
            res,
            "properties",
            propertiesInit
        );
    },

    addService: (req, res) => {
        PropertyService.getAllProperties()
            .then(properties => {
                console.log(`properties!!!!: ${JSON.stringify(properties) }`)
                // let propertiesBulk = [];
                // properties.forEach(property => {
                //     propertiesBulk.push({
                //         index: {
                //             _index: "properties",
                //             _type: "document"
                //         }
                //     });
                //     propertiesBulk.push({
                //         name: property.name,
                //         rating: property.rating,
                //         image: property.image,
                //         city: property.city,
                //         country: property.country,
                //         description: property.description
                //     });
                // });
                // elasticClient.bulk({ body: propertiesBulk }, function (err, response) {
                //     if (err) {
                //         console.log("Failed Bulk operation".red, err);
                //     } else {
                //         console.log(
                //             "Successfully imported properties %s".green,
                //             properties.length
                //         );
                //     }
                // });
                //
            })
                //   return CityService.getAllCities();
                //     }).then(cities => {
                //         let citiesBulk=[]
                //         cities.forEach(city => {
                //             citiesBulk.push({
                //                 index: {
                //                     _index: "cities",
                //                     _type: "document"
                //                 }
                //             });
                //             citiesBulk.push({
                //                 name: city.name,
                //                 country: city.country
                //             });
                //         });
                //         elasticClient.bulk({ body: citiesBulk }, function(err, response) {
                //             if (err) {
                //                 console.log("Failed Bulk operation".red, err);
                //             } else {
                //                 console.log(
                //                     "Successfully imported cities %s".green,
                //                     cities.length
                //                 );
                //             }
                //         });
                // })

            }
      //  indexData()
    //     const properties = [
    //         {
    //             id: 1,
    //             body: {
    //                 city: "Lviv",
    //                 country: "Ukraine",
    //                 name: "Hotel Cisar",
    //                 description: "Beautiful hotel in Lviv",
    //                 image:
    //                     "https://s-ec.bstatic.com/xdata/images/hotel/square600/154109872.jpg"
    //             }
    //         },
    //         {
    //             id: 2,
    //             body: {
    //                 city: "Mogadishu",
    //                 country: "Somali",
    //                 name: "Palm Roof Hat",
    //                 description:
    //                     "Not so beautiful hotel, but maybe the most dangerous.",
    //                 image:
    //                     "https://t-ec.bstatic.com/xdata/images/hotel/square600/75459034.jpg"
    //             }
    //         },
    //         {
    //             id: 3,
    //             body: {
    //                 city: "New York",
    //                 country: "USA",
    //                 name: "Hotel Plaza",
    //                 description: "The most expensive hotel in New York",
    //                 image:
    //                     "https://t-ec.bstatic.com/xdata/images/hotel/square600/29574899.jpg"
    //             }
    //         }
    //     ];

    //     const cities = [
    //         {
    //             id: 1,
    //             body: {
    //                 city: "Lviv",
    //                 country: "Ukraine"
    //             }
    //         },
    //         {
    //             id: 2,
    //             body: {
    //                 city: "Mogadishu",
    //                 country: "Somali"
    //             }
    //         },
    //         {
    //             id: 3,
    //             body: {
    //                 city: "New York",
    //                 country: "USA"
    //             }
    //         }
    //     ];

    //     properties.map((prop, i) => {
    //         elasticRepository.addDocument(
    //             req,
    //             res,
    //             "properties",
    //             prop.id,
    //             "document",
    //             prop.body
    //         );
    //     });

    //     cities.map((city, i) => {
    //         elasticRepository.addDocument(
    //             req,
    //             res,
    //             "cities",
    //             city.id,
    //             "document",
    //             city.body
    //         );
    //     });

}
