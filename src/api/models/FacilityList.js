const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Facility = require('./Facility'),
    Property = require('./Property');

// проміжна таблиця
let FacilityList = orm.define('facilityList', {
    belongsToPropery: {
        type: Sequelize.BOOLEAN
    }
});

FacilityList.belongsTo(Facility);
FacilityList.belongsTo(Property);

module.exports = FacilityList;
