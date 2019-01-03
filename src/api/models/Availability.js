const Sequelize = require("sequelize"),
    orm = require("../orm");

const Availability = orm.define("availability", {
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateCal: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Availability.associate = function (models) {
    Availability.belongsTo(models.Room);
};

module.exports = Availability;
