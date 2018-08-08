const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    BedInRoom = require('./BedInRoom')

let Bed = orm.define('bed', {
    name: {
        type: Sequelize.STRING
    }
});

Bed.hasMany(BedInRoom);

module.exports = Bed;
