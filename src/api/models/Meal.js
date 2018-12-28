const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Meal = orm.define('meal', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

module.exports = Meal;