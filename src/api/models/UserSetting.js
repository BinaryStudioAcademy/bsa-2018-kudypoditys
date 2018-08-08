const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let UserSetting = orm.define('userSetting', {
    settings: {
        type: Sequelize.JSON
    }
});

module.exports = UserSetting;

