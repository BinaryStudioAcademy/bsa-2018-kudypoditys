const
    Sequelize = require('sequelize'),
    orm = require('../orm');

module.exports = orm.define('country', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    }
});