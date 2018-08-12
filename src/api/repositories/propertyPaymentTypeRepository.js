const Repository = require('./generalRepository');
const propertyPaymentTypeModel = require('../models/PropertyPaymentType');

class PropertyPaymentTypeRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new PropertyPaymentTypeRepository(propertyPaymentTypeModel);