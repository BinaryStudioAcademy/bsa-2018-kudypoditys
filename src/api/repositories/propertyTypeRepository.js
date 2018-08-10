const Repository = require('./generalRepository');
const propertyTypeModel = require('../models/PropertyType');

class PropertyTypeRepository extends Repository  {
    //todo additional methods for repository
}

module.exports = new PropertyTypeRepository(propertyTypeModel);