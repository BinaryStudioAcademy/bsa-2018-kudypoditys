const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`)
//   FacilityList = require('./FacilityList')

let Facility= orm.define('facility', {
    name: {
        type: Sequelize.STRING
    }
});

//Facility.belongTo(FacilityList);

module.exports = Facility;