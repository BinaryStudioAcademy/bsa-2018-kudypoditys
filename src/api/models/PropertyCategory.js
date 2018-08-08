const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//PropertyType = require('./PaymentType');

let PropertyCategory = orm.define('propertyCategory', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    },
    description: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
    }
});

// strange fk
// PropertyCategory.belongsTo(PropertyType);

module.exports = PropertyCategory;