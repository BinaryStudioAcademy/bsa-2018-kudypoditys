const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Role = orm.define('role', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = Role;

