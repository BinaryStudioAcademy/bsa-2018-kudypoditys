const Sequelize = require('sequelize'),
    orm = require('../orm');

const Image = orm.define('image', {
    url: {
        type: Sequelize.STRING,
        validate: { isUrl: true },
        allowNull: false
    }
});

Image.associate = function (models) {
    Image.belongsTo(models.Property);
    Image.belongsTo(models.Room);
};

module.exports = Image;