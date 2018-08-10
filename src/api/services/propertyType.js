const Service = require('./generalService');
const propertyTypeRepository = require("../repositories/propertyTypeRepository");

class PropertyTypeService extends Service {
    // todo add service logic
}

module.exports = new PropertyTypeService(propertyTypeRepository);