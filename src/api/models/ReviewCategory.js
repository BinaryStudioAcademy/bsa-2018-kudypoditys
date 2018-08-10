const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let ReviewCategory = orm.define('reviewCategory', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = ReviewCategory;