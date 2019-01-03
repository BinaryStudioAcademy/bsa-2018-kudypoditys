const Sequelize = require('sequelize'),
    orm = require('../orm');

const Room = orm.define('room', {
    price: {
        type: Sequelize.INTEGER,
        validate: { min: 1, notEmpty: true },
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        validate: { min: 1 },
        allowNull: false
    },
    area: {
        type: Sequelize.FLOAT,
        validate: { min: 1, isFloat: true },
        allowNull: false

    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    available: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    lastReservation: {
        type: Sequelize.NONE
    }
});

Room.associate = function (models) {
    Room.belongsTo(models.RoomType);
    Room.belongsTo(models.Property);

    Room.hasMany(models.Reservation);
    Room.hasMany(models.Image);
    Room.hasMany(models.BedInRoom, { onDelete: 'cascade' });
    Room.hasMany(models.RoomDiscount);
    Room.hasMany(models.Availability);
    Room.hasMany(models.MealInRoom);

    Room.belongsToMany(models.Discount, {
        through: "roomDiscount"
    });
    Room.belongsToMany(models.BedType, {
        through: "bedInRoom"
    });
};

module.exports = Room;