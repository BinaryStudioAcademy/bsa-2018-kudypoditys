const Sequelize = require('sequelize'),
    orm = require('../orm');

const PropertyType = orm.define('propertyType', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    }
});

PropertyType.associate = function (models) {
    PropertyType.hasMany(models.Property);
};

module.exports = PropertyType;