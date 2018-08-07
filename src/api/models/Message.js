const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('messsage', {
    body: {
        type: Sequelize.TEXT
    }
});