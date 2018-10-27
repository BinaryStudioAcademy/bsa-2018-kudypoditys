const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Room = orm.define('room', {
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
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});



module.exports = Room;