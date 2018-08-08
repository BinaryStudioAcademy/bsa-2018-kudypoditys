const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Role = orm.define('role', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = Role;

