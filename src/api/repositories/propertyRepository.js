const sequelize = require('sequelize');
const Repository = require('./generalRepository');
const propertyModel = require('../models/Property');
const Facility = require('../models/Facility');
const PaymentType = require('../models/PaymentType');
const Room = require('../models/Room');
const AccommodationRule = require('../models/AccommodationRule');
const PropertyType = require('../models/PropertyType');
const PropertyCategory = require('../models/PropertyCategory');

const User = require('../models/User');
const City = require('../models/City');
const PropertyType = require('../models/PropertyType');
const PropertyCategory = require('../models/PropertyCategory');
const AccommodationRule = require('../models/AccommodationRule');
const Review = require('../models/Review');
const Facility = require('../models/Facility');
const Room = require('../models/Room');
const PaymentType = require('../models/PaymentType');
const Favorite = require('../models/Favorite');

class PropertyRepository extends Repository {
    getDetailsById(id) {
        return this.model.findOne({
            where: {
                id: id
            },
            include: [
                City,
                PropertyType,
                PropertyCategory,
                AccommodationRule,
                {
                    model: Review,
                    include: [User]
                },
                Facility,
                Room,
                PaymentType
            ]
        }).then(x => {
            return Favorite.count({

                where: {
                    propertyId: x.id
                }
            }).then(likes => {
                x.dataValues.likes = likes;
                return x;
            });
        });
    }

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
