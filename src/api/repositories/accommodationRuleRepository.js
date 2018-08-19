const Repository = require('./generalRepository');
const accommodationRuleModel = require('../models/AccommodationRule');

class AccommodationRuleRepository extends Repository {
    //todo additional methods for repository
}

module.exports = new AccommodationRuleRepository(accommodationRuleModel);