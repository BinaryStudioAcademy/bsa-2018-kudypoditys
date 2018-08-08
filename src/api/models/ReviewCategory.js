const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let ReviewCategory = orm.define('reviewCategory', {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = ReviewCategory;