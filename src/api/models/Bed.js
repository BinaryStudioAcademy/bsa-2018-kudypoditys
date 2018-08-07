const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('bed', {
    name: {
        type: Sequelize.STRING
    }
});
