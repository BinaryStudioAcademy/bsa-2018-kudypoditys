const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let User = orm.define('user', {
    fullName: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    },
    password: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    },
    email: {
        type: Sequelize.STRING,
        validate: { notEmpty: true, isEmail: true }
    },
    phoneNumber: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    },
    avatar: {
        type: Sequelize.STRING
    }
});



module.exports = User;