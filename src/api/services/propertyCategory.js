const Service = require('./generalService');
const propertyCategoryRepository = require("../repositories/propertyCategoryRepository");

class PropertyCategoryService extends Service {
    // todo add service logic
}

module.exports = new PropertyCategoryService(propertyCategoryRepository);