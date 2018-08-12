const Service = require('./generalService');
const bedTypeRepository = require("../repositories/bedTypeRepository");

class BedTypeService extends Service {
    // todo add service logic
}

module.exports = new BedTypeService(bedTypeRepository);