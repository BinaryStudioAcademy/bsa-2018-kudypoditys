const Sequelize = require('sequelize'),
    orm = require('../orm');

const UserSetting = orm.define('userSetting', {
    settings: {
        type: Sequelize.JSON,
        allowNull: true
    }
});

UserSetting.associate = function (models) {
    UserSetting.hasMany(models.User);
};

module.exports = UserSetting;
