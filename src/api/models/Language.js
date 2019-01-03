const Sequelize = require('sequelize'),
    orm = require('../orm');

const Language = orm.define('language', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

Language.associate = function (models) {
    Language.hasMany(models.PropertyLanguage);
    Language.belongsToMany(models.Property, {
        through: "propertyLanguage"
    });
};

module.exports = Language;