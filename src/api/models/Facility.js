const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Facility = orm.define('facility', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = Facility;