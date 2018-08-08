const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Facility = require ('./Facility')

let FacilityCategory = orm.define('facilityCategory', {
    name: {
        type: Sequelize.STRING
    }
});

FacilityCategory.belongsTo(Facility);

module.exports = FacilityCategory;