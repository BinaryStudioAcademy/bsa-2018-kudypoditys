const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

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