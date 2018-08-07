const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
    FacilityCategories = require('./FacilityCategories');

let Facility= orm.define('facility', {
    name: {
        type: Sequelize.STRING
    }
});
Facility.belongsTo(FacilityCategories)
module.exports = Facility