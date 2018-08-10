const Service = require('./generalService');
const propertyRepository = require("../repositories/propertyRepository");

class PropertyService extends Service {
    getAllproperties() {
        return propertyRepository.findAll();
    }

    getPropertyById(id) {
        return propertyRepository.findById(id);
    }

    addProperty(property) {
        return propertyRepository.create(property);
    }

    updateProperty(id, property) {
        return propertyRepository.updateById({_id: id}, property);
    }

    deleteProperty(id) {
        return propertyRepository.deleteById({_id: id});
    }
}


module.exports = new PropertyService(propertyRepository);