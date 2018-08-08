const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let FacilityList = orm.define('facilityList', {
    belongsToPropery: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = FacilityList;
