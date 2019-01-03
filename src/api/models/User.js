const Sequelize = require("sequelize"),
    orm = require("../orm");

const User = orm.define("user", {
    fullName: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: { notEmpty: true, isEmail: true },
        allowNull: false,
        unique: true
    },
    verifyEmailToken: {
        type: Sequelize.STRING
    },

    verifyEmailTokenTillDate: {
        type: Sequelize.INTEGER
    },
    phoneNumber: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false,
        unique: true
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resetPasswordToken: {
        type: Sequelize.STRING,
        select: false
    },
    dayOfBirth: {
        type: Sequelize.DATE,
        validate: { isDate: true },
        allowNull: true
    },
    appeal: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    preferredCurrency: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

User.associate = function (models) {
    User.belongsTo(models.Role);
    User.belongsTo(models.UserSetting);
    User.belongsTo(models.Country);
    User.belongsTo(models.PaymentType);

    User.hasOne(models.UserRefreshToken);

    User.hasMany(models.Reservation);
    User.hasMany(models.Property);
    User.hasMany(models.Review);
    User.hasMany(models.Favorite);

    User.belongsToMany(models.Property, {
        as: "favoriteProperties",
        through: "favorite"
    });
};

module.exports = User;
