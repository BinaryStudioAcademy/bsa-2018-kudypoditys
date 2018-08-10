const Service = require('./generalService');
const propertyPaymentTypeRepository = require("../repositories/propertyPaymentTypeRepository");

class PropertyPaymentTypeService extends Service {
    // todo add service logic
}

module.exports = new PropertyPaymentTypeService(propertyPaymentTypeRepository);