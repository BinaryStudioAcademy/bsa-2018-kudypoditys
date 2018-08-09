const
    Sequelize = require('sequelize'),
    apiRoot = '../.',
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});