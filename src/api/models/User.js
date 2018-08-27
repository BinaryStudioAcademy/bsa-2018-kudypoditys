const
    // apiRoot = '/api',
    Sequelize = require('sequelize'),
    orm = require('../orm');

let User = orm.define('user', {
    fullName: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: { notEmpty: true, isEmail: true },
        allowNull: false,
        unique: true
    },
    verifyEmailToken: {
        type: Sequelize.STRING
    },

    verifyEmailTokenTillDate: {
        type: Sequelize.INTEGER
    },
    phoneNumber: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    }
});



module.exports = User;