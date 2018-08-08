const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let PropertyType = orm.define('propertyType', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

module.exports = PropertyType;