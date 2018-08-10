const Service = require('./generalService');
const propertyRepository = require("../repositories/propertyRepository");

class PropertyService extends Service {
    // todo add service logic
}

module.exports = new PropertyService(propertyRepository);