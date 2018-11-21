const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let MealType = orm.define('mealType', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

module.exports = MealType;