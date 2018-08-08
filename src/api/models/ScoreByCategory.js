const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let ScoreByCategory = orm.define('scoreByCategory', {
    evaluation: {
        type: Sequelize.DOUBLE
    }
});

module.exports = ScoreByCategory;