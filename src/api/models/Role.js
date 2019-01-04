const Sequelize = require('sequelize'),
    orm = require('../orm');

const Role = orm.define('role', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

Role.associate = function (models) {
    Role.hasMany(models.User);
};

module.exports = Role;

