const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//PropertyType = require('./PaymentType');

let PropertyCategory = orm.define('propertyCategory', {
    name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        validate: { notEmpty: true },
        allowNull: false
    }
});

// strange fk
// PropertyCategory.belongsTo(PropertyType);

module.exports = PropertyCategory;