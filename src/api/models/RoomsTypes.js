const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('rooms types', {
    name: {
        type: Sequelize.STRING
    }
});

