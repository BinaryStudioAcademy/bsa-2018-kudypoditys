const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('roles', {
    name: {
        type: Sequelize.STRING
    }
});

