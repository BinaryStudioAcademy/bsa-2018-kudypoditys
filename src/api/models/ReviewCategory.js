const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('reviewCategory', {
    name: {
        type: Sequelize.STRING
    }
});