const Sequelize = require("sequelize"),
    orm = require("../orm");

const FacilityList = orm.define("facilityList", {
    belongsToProperty: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

FacilityList.associate = function (models) {
    FacilityList.belongsTo(models.Facility);
    FacilityList.belongsTo(models.Property);
};

module.exports = FacilityList;
