const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

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



module.exports = User;