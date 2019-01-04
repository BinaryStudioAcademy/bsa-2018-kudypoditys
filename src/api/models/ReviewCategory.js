const Sequelize = require('sequelize'),
    orm = require('../orm');

const ReviewCategory = orm.define('reviewCategory', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

ReviewCategory.associate = function (models) {
    ReviewCategory.hasMany(models.ScoreByCategory);

    ReviewCategory.belongsToMany(models.Review, {
        through: "scoreByCategory"
    });
};

module.exports = ReviewCategory;