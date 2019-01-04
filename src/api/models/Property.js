
const Sequelize = require('sequelize'),
    orm = require('../orm');

const Property = orm.define('property', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
    },
    address: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
        // unique: true,
        // allowNull: false
    },
    distanceToCentre: {
        type: Sequelize.FLOAT,
        validate: { notEmpty: true }
    },
    distanceToMetro: {
        type: Sequelize.FLOAT
    },
    nearestMetro: {
        type: Sequelize.STRING
    },
    lastBooked : {
        type : Sequelize.DATE,
    },
    description: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true },
        // allowNull: true
    },
    vatIncluded: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    additionalFees: {
        type: Sequelize.STRING,
        allowNull: true
    },
    coordinates: {
        type: Sequelize.JSON,
        // allowNull: false
    },
    rating: {
        type: Sequelize.FLOAT,
        validate: { min: 0, max: 10, isFloat: true },
        // allowNull: true
    },
    contactPersonName: {
        type: Sequelize.STRING
        // allowNull: false
    },
    contactPhone: {
        type: Sequelize.STRING
        // allowNull: false
    }
});

Property.associate = function (models) {
    Property.belongsTo(models.User);
    Property.belongsTo(models.VerificationStatus);
    Property.belongsTo(models.City);
    Property.belongsTo(models.PropertyType);
    Property.belongsTo(models.AccommodationRule);
    Property.belongsTo(models.Currency);

    Property.hasMany(models.Favorite);
    Property.hasMany(models.Review);
    Property.hasMany(models.FacilityList);
    Property.hasMany(models.PropertyPaymentType);
    Property.hasMany(models.Room);
    Property.hasMany(models.Image);
    Property.hasMany(models.PropertyLanguage);

    Property.hasOne(models.BasicFacility);

    Property.belongsToMany(models.PaymentType, {
        through: "propertyPaymentType"
    });
    Property.belongsToMany(models.User, {
        as: "likedByUsers",
        through: "favorite"
    });
    Property.belongsToMany(models.Facility, {
        through: "facilityList"
    });
    Property.belongsToMany(models.Language, {
        through: "propertyLanguage"
    });
};

module.exports = Property;