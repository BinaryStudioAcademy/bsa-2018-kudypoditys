const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('userSetting', {
    settings: {
        type: Sequelize.JSON
    }
})