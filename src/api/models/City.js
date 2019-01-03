const Sequelize = require('sequelize'),
    orm = require('../orm');

const City = orm.define('city', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    imageUrl: {
        type: Sequelize.STRING,
    }
});

City.associate = function (models) {
    City.belongsTo(models.Country);
    City.hasMany(models.Property);
};

module.exports = City;
