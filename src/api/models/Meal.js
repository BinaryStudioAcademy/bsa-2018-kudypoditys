const Sequelize = require('sequelize'),
    orm = require('../orm');

const Meal = orm.define('meal', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

Meal.associate = function (models) {
    Meal.hasMany(models.MealInRoom);
};

module.exports = Meal;