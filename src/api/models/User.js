const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    Role = require('./Role'),
    UserSettings = require('./UserSetting');

let User = orm.define('user', {
    fullName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    }
});

User.belongsTo(Role);
User.belongsTo(UserSettings);

module.exports = User;