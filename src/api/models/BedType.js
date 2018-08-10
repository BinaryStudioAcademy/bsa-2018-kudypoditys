const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let BedType = orm.define('bedType', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = BedType;
