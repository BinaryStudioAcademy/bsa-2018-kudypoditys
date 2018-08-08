
const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    User = require('./User'),
    City = require('./City'),
    VerificationStatus = require('./VerificationStatus')

 let Property= orm.define('property', {
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

Property.belongsTo(User);
Property.belongsTo(VerificationStatus);
Property.belongsTo(City);

module.exports = Property;