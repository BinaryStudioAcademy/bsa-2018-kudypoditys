const Repository = require('./generalRepository');
const propertyModel = require('../models/Property');
const Facility = require('../models/Facility');
const PaymentType = require('../models/PaymentType');
const Room = require('../models/Room');
const AccommodationRule = require('../models/AccommodationRule');
const PropertyType = require('../models/PropertyType');
const PropertyCategory = require('../models/PropertyCategory');

class PropertyRepository extends Repository {
    //todo additional methods for repository

    createDetails(entity) {
        return this.model.create(entity, {
            include: [
                PropertyType,
                PropertyCategory,
                Room,
                Facility,
                AccommodationRule,
                PaymentType
            ]
        });
    }
}

module.exports = new PropertyRepository(propertyModel);