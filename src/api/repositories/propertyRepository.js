const Repository = require('./generalRepository');
const propertyModel = require('../models/Property');

class PropertyRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new PropertyRepository(propertyModel);