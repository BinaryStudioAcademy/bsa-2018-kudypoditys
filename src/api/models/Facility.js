const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Facility = orm.define('facility', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Facility;