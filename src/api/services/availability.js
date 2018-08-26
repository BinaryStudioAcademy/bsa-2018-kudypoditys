const Service = require("./generalService");
const availabilityRepository = require("../repositories/availabilityRepository");

class AvailabilityService extends Service {
    getAllAvailabilities() {
        return availabilityRepository.findAll();
    }

    getAvailabilityById(id) {
        return availabilityRepository.findById(id);
    }

    addAvailability(availability) {
        return availabilityRepository.create(availability);
    }

    updateAvailability(id, availability) {
        return availabilityRepository.updateById({ _id: id }, availability);
    }

    deleteAvailability(id) {
        return availabilityRepository.deleteById({ _id: id });
    }
}

module.exports = new AvailabilityService(AvailabilityService);
