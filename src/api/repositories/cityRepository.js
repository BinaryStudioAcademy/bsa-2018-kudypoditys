const Repository = require('./generalRepository');
const cityModel = require('../models/City');
const Country = require("../models/Country");

class CityRepository extends Repository {
    getAllCities() {
        return this.model
            .findAll({
                include: [
                    {
                        model: Country
                    }
                ]
            })
            .then(properties => {
                return properties;
            });
    }
}


module.exports = new CityRepository(cityModel);