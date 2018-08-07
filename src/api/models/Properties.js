const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('properties', {
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    taxes: {
        type: Sequelize.FLOAT
    },
    coordinates: {
        type: Sequelize.JSON
    },
    rating: {
        type: Sequelize.FLOAT
    },
    contactPersonName: {
        type: Sequelize.STRING
    },
    contactPhone: {
        type: Sequelize.STRING
    }
});

