const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('messsages', {
    body: {
        type: Sequelize.TEXT
    }
});