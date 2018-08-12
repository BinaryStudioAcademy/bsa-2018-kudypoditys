const Repository = require('./generalRepository');
const countryModel = require('../models/Country');

class CountryRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new CountryRepository(countryModel);