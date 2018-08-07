const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`),
    ReviewCategory = require('./ReviewCategory'),
    Review = require('./Review');

let ScoreByCategory = orm.define('scoreByCategory', {
    evaluation: {
        type: Sequelize.DOUBLE
    }
});

ScoreByCategory.belongsTo(ReviewCategory);
ScoreByCategory.belongsTo(Review);

module.exports = ScoreByCategory;