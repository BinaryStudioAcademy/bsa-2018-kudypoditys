const Service = require('./generalService');
const accommodationRuleRepository = require("../repositories/accommodationRuleRepository");

class AccommodationRuleService extends Service {
    getAllAccommodationRules() {
        return accommodationRuleRepository.findAll();
    }

    getAccommodationRuleById(id) {
        return accommodationRuleRepository.findById(id);
    }

    addAccommodationRule(rule) {
        return accommodationRuleRepository.create(rule);
    }

    updateAccommodationRule(id, rule) {
        return accommodationRuleRepository.updateById({_id: id}, rule);
    }

    deleteAccommodationRule(id) {
        return accommodationRuleRepository.deleteById({_id: id});
    }
}


module.exports = new AccommodationRuleService(accommodationRuleRepository);