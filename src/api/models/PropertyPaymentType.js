const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

// проміжна таблиця.
let PropertyPaymentType = orm.define('propertyPaymentType', {

});

module.exports = PropertyPaymentType;