const Service = require('./generalService');
const facilityRepository = require("../repositories/facilityRepository");

class FacilityService extends Service {
    // todo add service logic
}

module.exports = new FacilityService(facilityRepository);