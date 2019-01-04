const Sequelize = require('sequelize'),
    orm = require('../orm');

const UserRefreshToken = orm.define('userRefreshToken', {
    refreshToken: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    tillDate: {
        type: Sequelize.INTEGER,
        validate: { notEmpty: true },
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    }
});

UserRefreshToken.associate = function (models) {
    UserRefreshToken.belongsTo(models.User);
};

module.exports = UserRefreshToken;
