const Sequelize = require("sequelize"),
    orm = require("../orm");

let FacilityList = orm.define("facilityList", {
    belongsToProperty: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = FacilityList;
