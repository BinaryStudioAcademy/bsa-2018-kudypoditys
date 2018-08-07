const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('image', {
    url: {
        type: Sequelize.STRING
    }
})