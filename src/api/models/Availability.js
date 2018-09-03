const Sequelize = require("sequelize"),
    orm = require("../orm");

module.exports = orm.define("availability", {
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    availabilityStart: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    },
    availabilityEnd: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: false
    }
});
