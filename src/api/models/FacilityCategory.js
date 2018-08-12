const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let FacilityCategory = orm.define('facilityCategory', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = FacilityCategory;