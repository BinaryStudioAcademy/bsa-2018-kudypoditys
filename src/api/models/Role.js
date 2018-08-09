const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Role = orm.define('role', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = Role;

