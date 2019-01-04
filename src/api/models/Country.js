const Sequelize = require('sequelize'),
    orm = require('../orm');

const Country = orm.define('country', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    flagUrl: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    }
});

Country.associate = function (models) {
    Country.hasMany(models.City);
    Country.hasMany(models.User);
};

module.exports = Country;
