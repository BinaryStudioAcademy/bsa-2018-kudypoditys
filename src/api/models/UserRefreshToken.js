const
    // apiRoot = '/api',
    Sequelize = require('sequelize'),
    orm = require('../orm');

let UserRefreshToken = orm.define('userRefreshToken', {
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

module.exports = UserRefreshToken;
