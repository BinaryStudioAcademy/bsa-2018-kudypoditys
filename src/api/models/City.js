const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let City = orm.define('city', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = City;
