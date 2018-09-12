const Sequelize = require("sequelize"),
    orm = require("../orm");

module.exports = orm.define("availability", {
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
