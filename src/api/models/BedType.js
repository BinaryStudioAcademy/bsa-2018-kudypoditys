const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let BedType = orm.define('bedType', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = BedType;
