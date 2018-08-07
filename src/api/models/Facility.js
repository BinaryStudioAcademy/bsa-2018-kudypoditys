const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('facility', {
    name: {
        type: Sequelize.STRING
    }
});