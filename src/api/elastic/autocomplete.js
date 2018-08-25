const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});
var indexname = "world"
  const payload ={
    "index": indexname,
    "body": {  "settings": {
        "analysis": {
          "analyzer": {
             "indexing_analyzer": {
               "tokenizer": "whitespace",
               "filter":  ["lowercase", "edge_ngram_filter"]
             },
             "search_analyze": {
               "tokenizer": "whitespace",
               "filter":  "lowercase"
             }
          },
          "filter": {
            "edge_ngram_filter": {
              "type": "edge_ngram",
              "min_gram": 1,
              "max_gram": 20
            }
          }
        }
      },
      "mappings":{
        "world":{
          "properties":{
            "city": {
              "type": "string",
              "analyzer":"indexing_analyzer",
              "search_analyzer": "search_analyze"
            },
            "property": {
              "type": "string",
              "analyzer":"indexing_analyzer",
              "search_analyzer": "search_analyze"
            },
            "country": {
              "type": "string",
              "analyzer":"indexing_analyzer",
              "search_analyzer": "search_analyze"
            }
          }
        }
      }}



  }
