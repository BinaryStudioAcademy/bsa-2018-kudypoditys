const Service = require('./generalService');
const сountryRepository = require("../repositories/сountryRepository");

class CountryService extends Service {
    // todo add service logic
}

module.exports = new CountryService(сountryRepository);