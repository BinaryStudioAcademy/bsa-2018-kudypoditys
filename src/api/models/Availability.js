const Sequelize = require("sequelize"),
    orm = require("../orm");

module.exports = orm.define("availability", {
    amount: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
