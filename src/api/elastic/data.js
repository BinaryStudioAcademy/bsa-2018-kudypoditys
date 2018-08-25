
const elasticsearch = require('elasticsearch');
const PropertyService = require('./../services/property');
const CityService = require('./../services/city');

const elasticClient = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});

const properties = PropertyService.getAllProperties()
const cities =CityService.getAllCities()

var propertiesBulk = [];
properties.forEach(property =>{
    propertiesBulk.push({index:{
     _index:"elastic_properties",
       _type: "properties_list",
             }
         })
propertiesBulk.push({
        name: property.name,
        rating: property.rating,
        image: property.image,
        city: property.city,
        country:property.country
  })
})
var citiesBulk = [];
cities.forEach(city =>{
    citiesBulk.push({index:{
                 _index:"elastic_cities",
       _type: "cities_list",
             }
         })
         citiesBulk.push({
        name: city.name,
  })
})
elasticClient.bulk({body:propertiesBulk}, function( err, response  ){
         if( err ){
             console.log("Failed Bulk operation".red, err)
         } else {
             console.log("Successfully imported %s".green, properties.length);
         }
});
elasticClient.bulk({body:citiesBulk}, function( err, response  ){
    if( err ){
        console.log("Failed Bulk operation".red, err)
    } else {
        console.log("Successfully imported %s".green, cities.length);
    }
});
