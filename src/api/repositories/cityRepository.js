const Repository = require('./generalRepository');
const cityModel = require('../models/City');

class CityRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new CityRepository(cityModel);