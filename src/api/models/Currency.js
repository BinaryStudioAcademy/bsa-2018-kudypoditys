const Sequelize = require("sequelize"),
    orm = require("../orm");

const Currency = orm.define("currency", {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    code: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    number: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    codeTitle: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    rate : {
        type: Sequelize.DOUBLE,
    },
    rateLastUpdate : {
        type: Sequelize.DATE,
    }
});

Currency.associate = function (models) {
    Currency.hasMany(models.Property);
};

module.exports = Currency;
