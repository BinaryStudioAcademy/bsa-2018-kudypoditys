const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let PropertyType = orm.define('propertyType', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    },
    description: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    }
});

module.exports = PropertyType;