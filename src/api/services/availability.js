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
        const result = availabilityRepository.create(availability);
        return result;
    }

    updateAvailability(id, availability) {
        return availabilityRepository.updateById({ _id: id }, availability);
    }

    deleteAvailability(id) {
        return availabilityRepository.deleteById({ _id: id });
    }
    async updateAvailabilityArray(availabilities) {
        const response = await availabilities.map(availability => {
            if( availability.id )
                // TODO: !!!! Try to find and update record by roomId + dateCal before adding new one !!!!
                return availabilityRepository.updateById(
                    availability.id,
                    availability
                );
            return availabilityRepository.create(
                availability
            );
        });
        return response;
    }
}

module.exports = new AvailabilityService(availabilityRepository);
