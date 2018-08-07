const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('country', {
    name: {
        type: Sequelize.STRING
    }
});