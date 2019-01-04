const Sequelize = require('sequelize'),
    orm = require('../orm');

const ScoreByCategory = orm.define('scoreByCategory', {
    evaluation: {
        type: Sequelize.DOUBLE,
        validate: { min: 0, max: 10 },
        allowNull: false
    }
});

ScoreByCategory.associate = function (models) {
    ScoreByCategory.belongsTo(models.ReviewCategory);
    ScoreByCategory.belongsTo(models.Review);
};

module.exports = ScoreByCategory;