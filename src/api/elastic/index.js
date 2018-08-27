const elasticsearch = require("elasticsearch");
const elasticClient = new elasticsearch.Client({
    host: "localhost:9200",
    log: "trace",
});

const init = require("./init");

module.exports = {
    ping: (req, res) => {
        elasticClient.ping(
            {
                requestTimeout: 30000,
            },
            err => {
                if (err) {
                    res.status(500);
                    return res.json({
                        status: false,
                        msg: "Elasticsearch is down!",
                    });
                } else {
                    res.status(200);
                    return res.json({
                        status: true,
                        msg: "Elasticsearch is up!",
                    });
                }
            },
        );
    },

    initIndex: (req, res, _index, _body) => {
        elasticClient.indices
            .create({
                index: _index,
                body: _body,
            })
            .then(
                resp => {
                    res.status(200);
                    return res.json(resp);
                },
                err => {
                    res.status(500);
                    return res.json(err);
                },
            );
    },

    indexExists: (req, res, _index) => {
        elasticClient.indices
            .exists({
                index: _index,
            })
            .then(
                resp => {
                    res.status(200);
                    return res.json(resp);
                },
                err => {
                    res.status(500);
                    return res.json(err);
                },
            );
    },

    initMapping: (req, res, _index, _type, _body) => {
        elasticClient.indices
            .putMapping({
                index: _index,
                type: _type,
                body: _body
            })
            .then(
                resp => {
                    res.status(200);
                    return res.json(resp);
                },
                err => {
                    res.status(500);
                    return res.json(err);
                },
            );
    },

    addDocument: (req, res, _index, _id, _type, _body) => {
        elasticClient
            .index({
                index: _index,
                type: _type,
                id: _id,
                body: _body,
            })
            .then(
                resp => {
                    res.status(200);
                    return res.json(resp);
                },
                err => {
                    res.status(500);
                    return res.json(err);
                },
            );
    },

    updateDocument: (req, res, _index, _id, _type, _body) => {
        elasticClient.update(
            {
                index: _index,
                type: _type,
                id: _id,
                body: _body,
            },
            (err, resp) => {
                if (err) {
                    return res.json(err);
                } else {
                    res.json(resp);
                }
            },
        );
    },

    search: (req, res, _index, _type, _query) => {
        elasticClient
        .search({
            index: _index,
            type: _type,
            body: {
                query: {
                    multi_match: {
                        query: _query,
                        fields: ["name","city","country"]
                    },
                },
            },
        })
        .then(
            resp => {
                return res.send(resp.hits.hits)//res.json(resp);
            },
            err => {
                return res.json(err.message);
            },
        );
    },

    deleteDocument: (req, res, _index, _id, _type) => {
        elasticClient.delete(
            {
                index: _index,
                type: _type,
                id: _id,
            },
            (err, resp) => {
                if (err) {
                    return res.json(err);
                } else {
                    res.json(resp);
                }
            },
        );
    },

    autocompleteSearch: (req, res, _index, _type, _query, _fields) => {
        elasticClient
            .search({
                index: _index,
                type: _type,
                body: {
                    query: {
                        multi_match: {
                            query: _query,
                            fields: _fields,
                        },
                    },
                },
            })
            .then(
                resp => {
                    return res.send(resp.hits.hits)//res.json(resp);
                },
                err => {
                    return res.json(err.message);
                },
            );
    },

    deleteAll: (req, res) => {
        elasticClient.indices.delete(
            {
                index: "_all",
            },
            (err, resp) => {
                if (err) {
                    return res.json(err);
                } else {
                    console.log("Indexes have been deleted!");
                    res.json(resp);
                }
            },
        );
    },
};
