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
    const sortBy = req.query.sortBy
    const _fields = ["city", "name"];
    elasticClient
        .search({
            index: "properties",
            type: "document",
            body: {
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
                ids = resp.hits.hits.map(property => {
                    return property._source.id;
                });
                let filter = {
                    propertiesIds: ids,
                    rooms: rooms,
                    bedsCount: parseInt(adults) + parseInt(children),
                    sortBy: sortBy,
                    startDate: startDate,
                    endDate:endDate

                };
                propertyService
                    .getFilteredProperties(filter)
                    .then(properties => {
                        return res.send(properties);
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
// router.get('/:page', (req, res) => {
//     let limit = 50;   // number of records per page
//     let offset = 0;
//     db.user.findAndCountAll()
//     .then((data) => {
//       let page = req.params.page;      // page number
//       let pages = Math.ceil(data.count / limit);
//           offset = limit * (page - 1);
//       db.user.findAll({
//         attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
//         limit: limit,
//         offset: offset,
//         $sort: { id: 1 }
//       })
//       .then((users) => {
//         res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
//       });
//     })
//     .catch(function (error) {
//           res.status(500).send('Internal Server Error');
//       });
//   });

module.exports = searchProperty;
