const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Country = require('./Country');

let City = orm.define('city', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    }
});

City.belongsTo(Country);

module.exports = City;