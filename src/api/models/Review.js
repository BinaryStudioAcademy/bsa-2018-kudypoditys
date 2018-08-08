const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

let Review = orm.define('review', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Review;
