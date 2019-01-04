const Sequelize = require('sequelize'),
    orm = require('../orm');

const MealInRoom = orm.define('mealInRoom', {
    price: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: null
    }
});

MealInRoom.associate = (models) => {
    MealInRoom.belongsTo(models.MealType);
    MealInRoom.belongsTo(models.Meal);
    MealInRoom.belongsTo(models.Room);
};

module.exports = MealInRoom;