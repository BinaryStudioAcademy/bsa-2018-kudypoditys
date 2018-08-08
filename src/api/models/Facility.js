const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    FacilityCategory = require('./FacilityCategory');

let Facility = orm.define('facility', {
    name: {
        type: Sequelize.STRING
    }
});

Facility.belongsTo(FacilityCategory);

module.exports = Facility;