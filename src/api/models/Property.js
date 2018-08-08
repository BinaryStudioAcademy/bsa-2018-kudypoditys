
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Property = orm.define('property', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }

    },
    address: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }

    },
    description: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true }

    },
    taxes: {
        type: Sequelize.FLOAT,
        validate: { isFloat: true}

    },
    coordinates: {
        type: Sequelize.JSON
    },
    rating: {
        type: Sequelize.FLOAT,
        validate: { min: 0, max: 10, isFloat: true }

    },
    contactPersonName: {
        type: Sequelize.STRING
    },
    contactPhone: {
        type: Sequelize.STRING
    }
});



module.exports = Property;