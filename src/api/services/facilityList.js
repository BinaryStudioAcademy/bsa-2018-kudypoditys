const Service = require('./generalService');
const facilityListRepository = require("../repositories/facilityListRepository");

class FacilityListService extends Service {
    // todo add service logic
}

module.exports = new FacilityListService(facilityListRepository);