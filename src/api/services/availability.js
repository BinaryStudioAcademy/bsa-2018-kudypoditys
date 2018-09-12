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
    async updateAvailabilityArray(availabilities) {
        const response = await availabilities.map(availability => {
            return availabilityRepository.updateById(
                availability.id,
                availability
            );
        });
        return response;
    }
}

module.exports = new AvailabilityService(availabilityRepository);
