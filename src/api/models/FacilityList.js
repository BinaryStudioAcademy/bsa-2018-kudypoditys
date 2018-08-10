const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let FacilityList = orm.define('facilityList', {
    belongsToPropery: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = FacilityList;
