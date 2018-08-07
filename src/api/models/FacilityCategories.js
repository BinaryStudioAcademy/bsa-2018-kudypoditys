const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('facility categories', {
    name: {
        type: Sequelize.STRING
    }
});