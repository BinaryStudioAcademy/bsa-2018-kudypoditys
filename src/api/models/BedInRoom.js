const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let BedInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER,
        validate: { min: 1,  isNumeric: true }

    }
});

module.exports = BedInRoom;
