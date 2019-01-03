const orm = require('../orm');

const PropertyLanguage = orm.define('propertyLanguage', {

});

PropertyLanguage.associate = function (models) {
    PropertyLanguage.belongsTo(models.Property);
    PropertyLanguage.belongsTo(models.Language);
};

module.exports = PropertyLanguage;