const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    RoomType = require('./RoomType'),
    Property = require('./Property')

let Room = orm.define('room', {
    price: {
        type: Sequelize.INTEGER,
        validate: { min: 1 , notEmpty: true}
    },
    amount: {
        type: Sequelize.INTEGER,
        validate: { min: 1 }
      },
    area: {
        type: Sequelize.FLOAT,
        validate: { min: 1, isFloat: true}

    },
    description: {
        type: Sequelize.TEXT
    }
});

Room.belongsTo(RoomType);
Room.belongsTo(Property);

module.exports = Room;