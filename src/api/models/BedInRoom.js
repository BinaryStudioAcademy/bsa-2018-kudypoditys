const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let BedInRoom = orm.define('bedInRoom', {
    count: {
        type: Sequelize.INTEGER
    }
});

module.exports = BedInRoom;
