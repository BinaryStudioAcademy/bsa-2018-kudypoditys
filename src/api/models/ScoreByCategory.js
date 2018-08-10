const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let ScoreByCategory = orm.define('scoreByCategory', {
    evaluation: {
        type: Sequelize.DOUBLE,
        validate: { min: 0, max: 10 },
        allowNull: false
    }
});

module.exports = ScoreByCategory;