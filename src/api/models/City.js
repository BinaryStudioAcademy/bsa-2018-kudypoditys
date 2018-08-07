const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('city', {
    name: {
        type: Sequelize.STRING
    }
});