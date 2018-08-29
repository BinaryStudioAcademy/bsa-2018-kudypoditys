const Service = require('./generalService');
const cityRepository = require("../repositories/cityRepository");

class CityService extends Service {
    // todo add service logic
}

module.exports = new CityService(cityRepository);