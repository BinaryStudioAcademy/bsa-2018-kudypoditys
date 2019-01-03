const Sequelize = require('sequelize'),
    orm = require('../orm');

const Facility = orm.define('facility', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

Facility.associate = function (models) {
    Facility.belongsTo(models.FacilityCategory);
    Facility.hasMany(models.FacilityList);
    Facility.belongsToMany(models.Property, {
        through: "facilityList"
    });
};

module.exports = Facility;