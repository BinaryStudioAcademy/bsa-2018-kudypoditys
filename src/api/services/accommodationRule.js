const Service = require('./generalService');
const accommodationRuleRepository = require("../repositories/accommodationRuleRepository");

class AccommodationRuleService extends Service {
    // todo add service logic
}

module.exports = new AccommodationRuleService(accommodationRuleRepository);