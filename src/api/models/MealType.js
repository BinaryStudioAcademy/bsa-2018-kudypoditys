const Sequelize = require('sequelize'),
    orm = require('../orm');

const MealType = orm.define('mealType', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

MealType.associate = function (models) {
    MealType.hasMany(models.MealInRoom);
};

module.exports = MealType;