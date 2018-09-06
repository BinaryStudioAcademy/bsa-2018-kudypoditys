const Repository = require('./generalRepository');

const City = require('../models/City');
const countryModel = require('../models/Country');

class CountryRepository extends Repository {
    //todo additional methods for repository

    getAllDetails() {
        return this.model.findAll({
            include: [City]
        });
    }
}

module.exports = new CountryRepository(countryModel);