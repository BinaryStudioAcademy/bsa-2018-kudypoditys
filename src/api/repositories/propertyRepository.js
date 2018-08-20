const sequelize = require('sequelize');
const Repository = require('./generalRepository');
const propertyModel = require('../models/Property');

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
}

// Property associations
// Property.belongsTo(User);
// Property.belongsTo(VerificationStatus);
// Property.belongsTo(City);
// Property.belongsTo(PropertyType);
// Property.belongsTo(AccommodationRule);

// Property.hasMany(Favorite);
// Property.hasMany(Review);
// Property.hasMany(FacilityList);
// Property.hasMany(PropertyPaymentType);
// Property.hasMany(Room);

// Property.belongsToMany(PaymentType, { through: 'propertyPaymentType' });
// PaymentType.belongsToMany(Property, { through: 'propertyPaymentType' });

// User.belongsToMany(Property, { as: 'favoriteProperties', through: 'favorite' });
// Property.belongsToMany(User, { as: 'likedByUsers', through: 'favorite' });

// Facility.belongsToMany(Property, { through: 'facilityList' });
// Property.belongsToMany(Facility, { through: 'facilityList' });


module.exports = new PropertyRepository(propertyModel);