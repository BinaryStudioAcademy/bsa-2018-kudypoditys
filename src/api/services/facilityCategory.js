const Service = require('./generalService');
const facilityCategoryRepository = require("../repositories/facilityCategoryRepository");

class FacilityCategoryService extends Service {
    // todo add service logic
}

module.exports = new FacilityCategoryService(facilityCategoryRepository);