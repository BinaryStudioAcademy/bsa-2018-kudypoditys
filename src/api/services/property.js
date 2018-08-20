const Service = require('./generalService');
const propertyRepository = require("../repositories/propertyRepository");

class PropertyService extends Service {
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
        return propertyRepository.deleteById({_id: id});
    }
}


module.exports = new PropertyService(propertyRepository);