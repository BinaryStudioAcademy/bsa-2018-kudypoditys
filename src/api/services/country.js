const Service = require('./generalService');
const countryRepository = require("../repositories/countryRepository");

class CountryService extends Service {
    // todo add service logic

    getAllDetails() {
        return countryRepository.getAllDetails();
    }
}

module.exports = new CountryService(countryRepository);