const Service = require("./generalService");
const propertyRepository = require("../repositories/propertyRepository");

class PropertyService extends Service {
    async findById(id) {
        try {
            const property = await this.repository.findById(id);
            return Promise.resolve(property);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    getAllProperties() {
        return propertyRepository.findAll();
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
                console.log("service then ", _);
                return _;
            })
            .catch(_ => {
                console.log("service catch ", _);
            });
    }
    getFilteredProperties(filter) {
        return propertyRepository.getFilteredProperties(filter);
    }
}

module.exports = new PropertyService(propertyRepository);
