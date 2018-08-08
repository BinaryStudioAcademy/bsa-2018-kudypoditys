const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//PropertyType = require('./PaymentType');

let PropertyCategory = orm.define('propertyCategory', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
});

// strange fk
// PropertyCategory.belongsTo(PropertyType);

module.exports = PropertyCategory;