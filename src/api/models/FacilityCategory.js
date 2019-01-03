const Sequelize = require('sequelize'),
    orm = require('../orm');

const FacilityCategory = orm.define('facilityCategory', {
    name: {
        type: Sequelize.STRING
    }
});

FacilityCategory.associate = function (models) {
    FacilityCategory.hasMany(models.Facility);
};

module.exports = FacilityCategory;