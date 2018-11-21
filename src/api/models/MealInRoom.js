const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let MealInRoom = orm.define('mealInRoom', {
    price: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: null
    }
});

module.exports = MealInRoom;