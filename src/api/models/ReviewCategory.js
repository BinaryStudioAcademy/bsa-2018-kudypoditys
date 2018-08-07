const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);
//ScoreByCategory = require('./ScoreByCategory');

let ReviewCategory = orm.define('reviewCategory', {
    name: {
        type: Sequelize.STRING
    }
});

//ReviewCategory.hasMany(ScoreByCategory);

module.exports = ReviewCategory;