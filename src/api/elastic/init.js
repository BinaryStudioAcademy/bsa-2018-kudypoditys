module.exports = {
    initIndex: {
        body: {
            mappings: {
                document: {
                    properties: {
                    },
                },
            },
            settings: {
                analysis: {
                    analyzer: {
                        autocomplete: {
                            type: "custom",
                            tokenizer: "standard",
                            filter: ["lowercase", "autocomplete_filter"],
                        },
                    },
                    filter: {
                        autocomplete_filter: {
                            type: "edge_ngram",
                            min_gram: 1,
                            max_gram: 20,
                        },
                    },
                },
            },
        },
    },
};
