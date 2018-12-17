const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");

class PropertyService extends Service {
    async findById(id) {
        try {
            let property = await this.repository.findById(id);
            let notes = {
                recentlyBooked: 0
            };
            //Migrate in another file/logic
            //notes.recentlyBooked = await this.wasBookedLastDay(property.id);
            property.notes = notes;
            const response = {
                property: property,
                notes: notes
            };
            return Promise.resolve(response);
        } catch (err) {
            return Promise.reject(err);
        }
    
    }

    getAllProperties() {
        return propertyRepository.findAll();
    }

    updateLastBooked(id,lastBooked){
        return propertyRepository.updateLastBooked(id,lastBooked);
    }

    getPropertyById(id) {
        return propertyRepository.findById(id);
    }

    addProperty(property) {
        return propertyRepository.createDetails(property);
    }

    updateProperty(id, property) {
        return propertyRepository.updateById(id, property);
    }

    deleteProperty(id) {
        return propertyRepository.deleteById({ _id: id });
    }

    getDetailsById(id) {
        return propertyRepository
            .getDetailsById(id)
            .then(_ => {
                // console.log("service then ", _);
                return _;
            })
            .catch(_ => {
                // console.log("service catch ", _);
            });
    }
    getFilteredProperties(filter) {
        return propertyRepository.getFilteredProperties(filter);
    }
    getPropertiesByCity(city) {
        return propertyRepository.getPropertiesByCity(city);
    }
    async getUserPropertiesInfo(id) {
        const data = await propertyRepository.getUserPropertiesInfo(id);
        const response = data.map(property => {
            property.rooms = property.rooms.map(room => {
                room.availabilities = room.availabilities.sort(
                    (current, next) => {
                        return new Date(next.date) - new Date(current.date);
                    }
                );
                return room;
            });
            return property;
        });
        return response;
    }
}

module.exports = new PropertyService(propertyRepository);
