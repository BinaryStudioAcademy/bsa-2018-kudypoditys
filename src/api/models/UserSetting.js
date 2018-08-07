const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User');

let UserSetting = orm.define('userSetting', {
    settings: {
        type: Sequelize.JSON
    }
});

UserSetting.belongsTo(User);

module.exports = UserSetting;

