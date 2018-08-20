const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let BedType = orm.define('bedType', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = BedType;
