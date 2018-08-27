const Service = require('./generalService');
const cityRepository = require("../repositories/cityRepository");

class CityService extends Service {
    getAllCities() {
        return cityRepository.findAll();
    }

}

module.exports = new CityService(cityRepository);