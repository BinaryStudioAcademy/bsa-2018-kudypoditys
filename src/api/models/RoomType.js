const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('roomType', {
    name: {
        type: Sequelize.STRING
    }
});

