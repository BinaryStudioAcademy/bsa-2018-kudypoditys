const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('role', {
    name: {
        type: Sequelize.STRING
    }
});

