const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User')

let Role = orm.define('role', {
    name: {
        type: Sequelize.STRING
    }
});

Role.belongsTo(User);

module.exports = Role;

